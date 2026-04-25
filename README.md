# Mruf Ahmed Portfolio

Modern Next.js portfolio for a MERN stack and React Native developer.

## Stack

- Next.js App Router
- Tailwind CSS
- shadcn-style UI components
- Prisma
- MongoDB
- Vercel-ready deployment

## Local Setup

```bash
npm install
copy .env.example .env
npm run prisma:generate
npm run dev
```

Set `DATABASE_URL` in `.env` with your MongoDB connection string.

## Upload Projects

Open `/admin/6589` and submit a project. The form posts to `/api/projects`, saves through Prisma, and displays uploaded projects on the homepage.

## Vercel Environment Variables

Add these in Vercel project settings:

```bash
DATABASE_URL=mongodb+srv://USER:PASSWORD@cluster0.mongodb.net/mruf_portfolio?retryWrites=true&w=majority
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```
