Last time I mentioned the tricky part of adding a database wasn't the schema — it was the _connection_. Here's that story.

## The mismatch

Postgres gives each connection its own server process, so it caps how many it will accept — often around 100 on smaller plans. That's fine for a traditional server: it boots once, opens a few connections, and reuses them for its whole life.

However, this site runs on serverless infrastructure (AWS Amplify), which spins up many short-lived instances on demand. Each one opens its _own_ database connection, and they don't share because the AWS Amplify instances are stateless. A traffic spike can mean hundreds of instances all reaching for connections at once — and blowing past Postgres's limit.

## The fix: a connection pooler

A pooler sits between the app and the database and joins many app connections into a smaller, reuseable set of real ones:

```
many serverless instances ──► pooler ──► a few real Postgres connections
```

Supabase provides us with it's own pooler (Supavisor). The app connects to the pooler instead of directly to Postgres, so no matter how many instances spin up, the database only ever sees a handful of connections.

## Two modes

There's a catch though. The pooler's fast "transaction mode" hands out a connection only for the length of a single query, which isn't sufficient for more persistent requirements, like database migrations. There's actually two separate modes, one for 'transactions' and one for 'sessions':

```bash
# app at runtime → transaction pooler (port 6543)
DATABASE_URL=postgresql://...pooler...:6543/postgres

# migrations → session/direct connection (port 5432)
DIRECT_URL=postgresql://...pooler...:5432/postgres
```

The app reads through the pooler; migrations use the direct one.

## Takeaway

If you access Postgres via serverless, you'll most likely want a pooler. It'll be necessary if you develop some moderate traffic. Nice that the platforms make it a config line rather than a project.
