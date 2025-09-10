## Goal of this project

In this next.js project we showcase the different ways to create a web page so we can see which approach we prefer.

## Getting started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Different web pages

Simply click on each of the links below to see the different versions. We start with basic HTML, add in some Tailwind CSS, then try CSS Modules, React Components and then finally MDX markdown:

1. [Basic HTML page](http://localhost:3000/html/comparison1.html)
2. [Basic HTML page with Tailwind CSS](http://localhost:3000/html/comparison2.html)
3. [Basic HTML page with CSS Modules](http://localhost:3000/html/comparison3/index.html)
4. [React components](http://localhost:3000/comparison4)
5. [React components + MDX](http://localhost:3000/comparison5)

## How this project was built

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

```
npx create-next-app@latest my-landing
    --ts --eslint --app --src-dir --import-alias "@/*" --use-pnpm
```

### Options

- **npx** → runs a package without installing it globally.
- **create-next-app@latest** → downloads the most recent version of the Next.js project generator.
- **my-landing** → the name of the new folder it will create (your project directory).
- **--use-pnpm** → use pnpm package manage over npm or yarn`

## Learn more

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Resources

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
