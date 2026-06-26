Welcome — this is the first post on the rebuilt version of my site, and a good excuse to jot down what changed under the hood.

## Off Firebase, onto AWS Amplify

I originally hosted this site on Firebase when it was relatively static. This was fine for the initial site construction, but the moment I wanted it to actually _do_ things — like handle a contact form without bolting on a separate backend — the static-only model got in the way. So I moved hosting to **AWS Amplify**, which can run server-side code. The first thing that unlocked: a working contact form, powered by a Next.js server action, with no extra infrastructure to manage.

## Building on Next.js

The next step was rebuilding the site on **Next.js** with the App Router. That choice buys a lot in one move — file-based routing, server components, better SEO metadata, and an easy way to mix fast pre-rendered pages with dynamic ones that need a server.

## Coming up

This is just the beginning, I plan to add a new entry with each step in upgrading my portfolio. Hopefully, I can share some helpful insights. Treating the site as a proper Next.js app - instead of a static bundle - is what makes the things I want to add next actually feasible. Starting with this blog.

More soon. 👋
