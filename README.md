# [myth-arc](https://myth-arc.vercel.app/)


**Mytharc** is an open-source platform for storytellers and creators to write stories. Built with the latest advancements in Next.js 15. The project is bootstrapped using `create-t3-app`.

> 🚧 **Warning**: This project is still in development and is not ready for production use.

## 🚀 Tech Stack

- **Frontend Framework:** [Next.js](https://nextjs.org) (v15)
- **Data Fetching & State Management:** [TanStack Query (React Query)](https://tanstack.com/query)
- **Language:** [TypeScript](https://www.typescriptlang.org)
- **Backend Framework:** [Hono](https://hono.dev/docs/)
- **Database:** [PostgreSQL](https://www.postgresql.org/docs/)
- **ORM:** [Prisma ORM](https://www.prisma.io/docs/getting-started)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com)
- **Validation:** [Zod](https://zod.dev)

## 🛠️ Features in Progress

- [x] Authentication API integration
- [x] Database ORM with **Prisma**
- [x] Input validation using **Zod**
- [ ] File uploads using **uploadthing**
- [ ] Blog integration with **MDX**
- [ ] User profiles with features like likes and bookmarks


## 🌟 How to Run Locally
Follow these steps to set up **Mytharc** on your local machine:

1. Clone the repository

   ```bash
   git clone https://github.com/lokendrakushwah12/myth-arc.git
   ```

2. Install dependencies using pnpm

   ```bash
   npm install
   ```

3. Copy the `.env.example` to `.env` and update the variables.

4. Start the development server

   ```bash
   npm run dev
   ```

5. Push the database schema

   ```bash
   npm run db:push
   ```

## 💡 Contributing
Contributions are highly encouraged! Here's how you can get involved:

- Report issues or bugs via [GitHub Issues](https://github.com/lokendrakushwah12/myth-arc/issues).
- Share feature requests or ideas.
- Open a pull request to contribute code or improvements.

Check out the [CONTRIBUTING.md](./CONTRIBUTING.md) guide for detailed instructions.

## License

Licensed under the MIT License. Check the [LICENSE](./LICENSE.md) file for details.