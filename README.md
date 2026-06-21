# john-flynn.dev

Personal portfolio site for John Flynn

Live: [john-flynn.dev](https://www.john-flynn.dev)

## Stack

- **Next.js 15** (App Router)
- **React 18** + **TypeScript**
- **Tailwind CSS v4**
- **Resend** for transactional email
- **zod** for runtime schema validation
- **@t3-oss/env-nextjs** for environment variable validation
- Deployed to **AWS Amplify Hosting** (Web Compute / SSR)

## Features

- File-based routing with the App Router (`/`, `/about`, `/portfolio`, `/portfolio/[slug]`, `/contact`)
- Statically generated portfolio detail pages via `generateStaticParams` + per-page `generateMetadata`
- Contact form using Server Actions, with server-side zod validation, per-field error feedback, and accessibility attributes (`aria-invalid`, `aria-describedby`)
- App Router conventions: `loading.tsx`, `error.tsx`, `not-found.tsx`, `sitemap.ts`, `robots.ts`
- Type-safe environment variables, validated at server boot via `instrumentation.ts`

## Running locally

```bash
git clone https://github.com/jrflynn3/webapp.git
cd my-website
npm install
```

Create a .env.local:

RESEND_API_KEY=re_your_key_here
RESEND_CONTACT_EMAIL=onboarding@resend.dev
RESEND_EMAIL=your@email.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000

Then:

npm run dev
Open http://localhost:3000.

## License

[MIT](./LICENSE)
