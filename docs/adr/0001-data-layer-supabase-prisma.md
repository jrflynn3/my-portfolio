# ADR 0001 — Data layer: PostgreSQL on Supabase via Prisma

- **Status:** Accepted
- **Date:** 2026-06
- **Context phase:** Blog feature, Phase 2 (data layer foundation)

## Context

The site is gaining a blog whose content has real **relationships** — a post
belongs to a category and has many tags, and we want to filter posts by tag.
The repo previously used Firebase (now legacy); a document/NoSQL store models
those relationships awkwardly. We need a persistent store, a typed way to query
it from a Next.js (App Router) server runtime, and a migration story we can
speak to in interviews.

Deployment target is **AWS Amplify SSR**, which runs on **serverless** compute —
this constrains how we connect to the database.

## Decision

1. **PostgreSQL** as the database — relational, mature, ideal for the
   post ↔ category (one-to-many) and post ↔ tag (many-to-many) model.
2. **Supabase** as the managed host — generous free tier, zero server
   maintenance, and bundled Auth we can adopt for the Phase 3 admin route.
3. **Prisma 7** as the ORM — schema-as-code, versioned migrations, and a
   client generated *from* the schema so DB shape and TypeScript types can't
   drift apart.
4. **Driver adapter (`@prisma/adapter-pg`, backed by `pg`)** for the runtime
   connection — Prisma 7's model replaces the old bundled engine with a JS driver.
5. **Two pooled connections via Supabase's Supavisor**, wired in two places:
   - **Transaction pooler (port 6543) → `DATABASE_URL`** — used by the app at
     runtime (`src/lib/prisma.ts`).
   - **Session pooler (port 5432) → `DIRECT_URL`** — used by Prisma Migrate
     (`prisma.config.ts`). (Note: this is the session-mode pooler on the pooler
     host, *not* a raw direct connection to `db.<ref>.supabase.co`, which is
     IPv6-only; Supabase steers clients to Supavisor for both modes.)

## Rationale / trade-offs

- **Why relational over the old Firebase/NoSQL model:** the data is inherently
  relational; joins and tag filtering are first-class in SQL, and modeling them
  in a document store means manual denormalization.
- **Why Supabase over alternatives (Neon, Railway, AWS RDS, self-hosted):** best
  free tier + DX, managed backups/patching, and Auth already in the box for
  later. The choice is decoupled — only a connection string ties us to it.
- **Why Prisma over Drizzle / raw SQL:** strongest type-safety and migration
  ergonomics; we accept a little runtime overhead and "magic" for the DX win.
  Drizzle is the lighter-weight alternative we considered.
- **Why a connection pooler is mandatory here:** Postgres uses a
  process-per-connection model with a hard connection cap. Serverless (Amplify
  SSR) spins up many short-lived, stateless instances that each open their own
  connection, so bursts would exhaust the cap. Supavisor multiplexes many
  client connections onto a small reused set of real ones. This is a *serverless*
  requirement, not an Amplify-specific one (Vercel/Lambda would need it too).
- **Why two connection strings:** the transaction pooler recycles a connection
  per transaction, which breaks features migrations need (prepared statements,
  advisory locks, multi-statement sessions). So migrations use the session
  pooler; the app uses the transaction pooler.
- **Why explicit SSL in the adapter:** Prisma's migrate engine negotiates SSL
  automatically, but the `pg` driver does not — and Supabase requires TLS. Both
  `src/lib/prisma.ts` and `prisma/seed.ts` therefore set `ssl` explicitly, or the
  server terminates the connection mid-handshake. (`rejectUnauthorized: false`
  for now — encrypts without cert verification; can be tightened for production.)

## Environment wiring

- Secrets live in a single gitignored **`.env.local`**. Next.js loads it at
  runtime; **`prisma.config.ts`** loads it for the CLI (Prisma 7 no longer
  auto-loads any env file).
- **`DATABASE_URL`** is validated in **`src/env.ts`** (`@t3-oss/env-nextjs`) — it's
  needed at app runtime, so it should fail fast if missing.
- **`DIRECT_URL`** is intentionally **not** in `src/env.ts` — it's a
  migration/CLI-only concern, so forcing it into the app's runtime env (and the
  Amplify console) would be wrong.

## Consequences

- **Migrations run off-Amplify** (locally or CI) via `npm run db:migrate` /
  `db:deploy`; Amplify only builds and serves. `postinstall` runs
  `prisma generate` so the client always exists in the build.
- **Admin scripts (seed) use a working pooled connection** and exercise the same
  driver-adapter path as the app.
- **At deploy time** (Phase 3), `DATABASE_URL` must be made available to the
  Amplify SSR runtime (extend `amplify.yml`'s env→`.env.production` step and set
  it in the Amplify console). `DIRECT_URL` is not needed there.
- The generated client (`src/generated/prisma`) is gitignored and regenerated on
  install.

## Files

- `prisma/schema.prisma` — models + generator/datasource.
- `prisma.config.ts` — CLI config: loads `.env.local`, points migrations at `DIRECT_URL`.
- `src/lib/prisma.ts` — runtime client singleton (driver adapter + SSL).
- `src/env.ts` — validates `DATABASE_URL`.
- `prisma/seed.ts` — sample data; mirrors the runtime connection.
