My latest feature change is relatively simple. The blog can now filter by tag - click "Prisma" and you get just the Prisma posts.

## Posts and tags aren't a simple column

A post doesn't "have a tag" the way it has a title. It's a **many-to-many** relationship: a post can have many tags, and a tag belongs to many posts. Under the hood that lives in a separate **join table** — one row per post↔tag link — not a column on either side.

So "find posts tagged `prisma`" isn't a lookup on the posts table; it's a question about which posts are _linked_ to that tag.

## One line does the join

With Prisma, that reaching-across query is simple:

```ts
const posts = await prisma.post.findMany({
  where: {
    status: "PUBLISHED",
    tags: { some: { slug: "prisma" } },
  },
  orderBy: { publishedAt: "desc" },
});
```

I'm filtering `Post` by a condition on the related `Tag`, and Prisma turns that into a SQL join through the hidden join table. I never write the join myself, prisma does that for me.
