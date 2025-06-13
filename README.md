# Next + Supabase Starter

We want to make an app that works similarly to https://giphy.com/. You can freely use libraries and internet searches. You can use Copilot and AI completion tools but make sure they don't outshine you. You will have 50 minutes.

Requirements:

1. On the initial page load, it should display the current trending gifs (limit 20).

2. You should implement infinite scrolling so as the user scrolls down the page more gifs are dynamically loaded automatically.

3. User can type a search keyword in a search field at the top of the page, which then displays the searched gifs dynamically as the user searches.

4. Clearing the search field should show the trending gifs again.

5. Styling and layout are less important but it should be mobile and desktop friendly.

6. Share your screen and try to only interact with the screen you are sharing.

7. Try to explain the steps you are taking and why, why did you decide to create a specific function? Why do A instead of B? etc

8. Feel free to take shortcuts in order to complete the assignment quickly, and point out the areas you would improve on, given more time, at the end.

9. You can use any third party libraries that you would like except please refrain from using the Giphy SDKs 10. At the end of the interview, please email us a zip or link with the final code.

Use this API key: SAMPLE API

Get started with the documentation here:
https://developers.giphy.com/docs/api/endpoint#trending

## Quick Setup

1. Create an .env.local

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

2. Spin up a supabase db

3. Create table in supabase

4. Run the app

```
npm install
npm run dev
```

--

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
