The next step in upgrading the site: it now has a real database. The post you're reading is served straight out of it.

## Why bother?

My portfolio projects are just a hardcoded array in the code which is fine for a fixed handful of entries. I wanted to introduce something that would require more structured storage and so I landed on a dev blog. Posts, tags, and categories have _relationships_ — a post belongs to a category and has many tags. I also want to be able to publish without redeploying the whole site every time. A relational database is the perfect match for that problem.

## The stack

- **PostgreSQL** — relational, so those post ↔ tag ↔ category links are first-class.
- **Supabase** — hosts the Postgres instance, simple implementation and a managed free tier are a bonus for a small site like this.
- **Prisma** — a type-safe ORM. I describe the data once in a schema and it generates a fully-typed client, so the database shape and my TypeScript can't quietly drift apart.

The heart of it is the `Post` model:

```prisma
model Post {
  id          String     @id @default(cuid())
  title       String
  slug        String     @unique
  content     String
  status      PostStatus @default(DRAFT)
  publishedAt DateTime?
  tags        Tag[]      @relation("PostTags")
}
```

Reading published posts is then a single typed query — no hand-written SQL, full autocomplete makes things very convenient:

```ts
const posts = await prisma.post.findMany({
  where: { status: "PUBLISHED" },
  orderBy: { publishedAt: "desc" },
  include: { tags: true },
});
```

## The part that bit me

The schema was the easy bit to implement. The headache was getting the connection correct. I'm using AWS Amplify which is a serverless host, so many short-lived instances each open their own DB connection and can blow past Postgres's limit. This is problem not a significant issue for a small site like this but it was a good exercise for future projects. The fix is a connection pooler that funnels many app connections onto a few real ones, but that's a story for another post.
