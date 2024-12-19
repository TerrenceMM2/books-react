# 📚 Book Search

![Vercel Deploy](https://deploy-badge.vercel.app/vercel/books-react-three)

Live Link: [books-react-three.vercel.app](https://books-react-three.vercel.app/)

This web application allows users to search for a book using the Google Books API, read details about a selected title, and leave a star rating & written review.

## Installation & Setup

1. Clone the books-react repository.

```bash
$ git clone https://github.com/TerrenceMM2/books-react.git
```

2. Install dependencies

```bash
$ npm install
```

3. Create a `.env.local` with the following variable:

```
# omit the trailing '/' of the URL
VITE_BOOKS_API_SERVER=<API_SERVER_URL>
```

4. Start the development environment.

```bash
$ npm run dev
```

## Technologies Used

- [ViteJS](https://vite.dev/guide/)
  - [React](https://react.dev/)
  - [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Tanstack Router](https://tanstack.com/router/latest)
- [Tanstack Query](https://tanstack.com/query/latest)
- [React Context](https://react.dev/learn/scaling-up-with-reducer-and-context)
