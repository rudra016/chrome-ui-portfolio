# Chrome Portfolio

A modern, responsive portfolio web application inspired by the Chrome browser UI, built with Next.js 14 (App Router) and TypeScript. This project is designed for developers and professionals who want to showcase their work, projects, skills, and online presence in a visually engaging, desktop-inspired format.

## Features

- Chrome browser-inspired layout and controls
- Responsive design for desktop and mobile
- Dynamic sections: About Me, Experience, Projects, Skills, Education, Hobbies, and Contacts
- Search functionality for fast navigation
- Customizable dummy data for easy personalization
- Dark mode theme
- Optimized performance with Next.js and modern web best practices

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm, yarn, pnpm, or bun package manager

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/rudra016/chrome-ui-portfolio.git
cd chrome-ui-portfolio
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Project Structure

- `src/data/dummy.ts` – Main data file for portfolio content (edit this to customize your info)
- `src/components/` – All UI components (Header, SearchResults, etc.)
- `src/app/` – Next.js App Router pages and layout
- `src/app/api/` – API routes for features like AI summaries
- `src/app/globals.css` – Global styles and Tailwind CSS configuration

## Customization

1. **Edit Your Info:**
   - Update `src/data/dummy.ts` with your personal, professional, and project details.
2. **Change Images/Icons:**
   - Replace URLs or local assets as needed in the dummy data or components.
3. **Modify Components:**
   - Tweak UI/UX by editing files in `src/components/`.
4. **Styling:**
   - Customize styles in `globals.css` or extend Tailwind CSS as desired.

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://react.dev/)

## Deployment

You can deploy this app to Vercel, Netlify, or any platform that supports Next.js. For Vercel:

1. Push your repository to GitHub.
2. Connect your repo on [vercel.com](https://vercel.com/).
3. Follow the prompts to deploy.

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

Created by Rudra Kumar. Inspired by the Chrome browser and modern portfolio design trends.

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
