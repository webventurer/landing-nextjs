# Goal of this project

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

## Thoughts on the implementations

I think it's hands down 5) React components + MDX for the win.

Basic HTML is just too heavy and has too much design clutter.

Tailwind CSS violates the separation of concerns and the HTML becomes unreasable and unmaintanable. The core concept is that "each piece of code should have one reason to change" and with Tailwind CSS you are mixing design logic with content. You just can't read it without getting a headache! So it's out on principle.

CSS Modules is definitely the better option by a long shot, cleanly separating design from content.

React components is a good way to get re-useable blocks of JSX (JavaScript XML) for dynamic content and state management. I like code you write once and use everywhere because you are doing future developer a favour, especially if future developer is YOU!

However, as soon as you add markdown with .mdx files (i.e. markdown + React) components you get easy to read structured code that does something useful.

Now add in some SCSS support (Sassy CSS). SCSS is a CSS preprocessor - it's an extension of CSS that adds powerful features to make writing styles easier and more maintainable: you can add variables to CSS and nesting where you write styles inside other styles. Or mixins which are reusable blocks of styles.

It's kinda obvious when you see it, hence why I wrote this little project.

### The way forwards

React components + SCSS + CSS Modules gives you everything you need: scoping/isolation & enhanced power using variables, mixins and nesting. It's like creating a visual language with its own encapsulation and programming ability.

All the display code gets shorter and is cleanly separated from the content. Each React component has its namespace with its own styling too. Namespaces & encapsulation for the win!

> Namespaces are one honking great idea -- let's do more of those!
> — _Tim Peters, The Zen of Python_

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

### Pre-commit Hooks

This project uses [pre-commit](https://pre-commit.com/) to automatically run TypeScript type checking before commits.

To set up pre-commit hooks (one-time setup for new developers):

```bash
# Install pre-commit (if not already installed)
brew install pre-commit

# Install the hooks
pre-commit install
```

The hooks will now run automatically on every commit. To run them manually:

```bash
pre-commit run --all-files
```

## Learn more

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Resources

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Vercel fonts](https://vercel.com).
