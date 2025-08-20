# [erendirek.com](https://erendirek.com) - Personal Portfolio Website

This is the repository for my personal portfolio website. It's a single-page application built with Next.js and TypeScript, designed to showcase my projects, skills, and contact information with a modern, futuristic aesthetic.

## ✨ Features

- **Single-Page Application:** Smooth, snap-scrolling navigation between sections.
- **Responsive Design:** Fully responsive layout that adapts to desktop, tablet, and mobile devices.
- **Interactive UI:** Engaging user interface elements like a typewriter effect for headers and a custom slideshow for projects.
- **Futuristic/Hacker Theme:** A unique visual style with glowing text effects, custom animations, and carefully selected typography.
- **Component-Based Architecture:** Built with reusable React components for maintainability and scalability.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & CSS Modules
- **Fonts:** [Google Fonts](https://fonts.google.com/) (Orbitron, Share Tech Mono, Fira Code)
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Linting:** [ESLint](https://eslint.org/)

## 📂 Project Structure

The project is organized with a focus on clarity and separation of concerns:

```
erendirek.com/
├── src/
│   ├── app/            # Main application, layout, and page
│   ├── components/     # Reusable React components (Navbar, SlideShow, etc.)
│   ├── hooks/          # Custom React hooks (e.g., useWindowHash)
│   └── ui/             # UI-related files (fonts, global styles)
├── public/             # Static assets
└── ...                 # Configuration files
```

## 🚀 Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/erendirek/erendirek.com.git
    cd erendirek.com
    ```

2.  **Install dependencies:**
    This project uses `pnpm` as the package manager.

    ```bash
    pnpm install
    ```

    Alternatively, you can use `npm` or `yarn`:

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    pnpm dev
    ```
    Open http://localhost:3000 in your browser to see the result.
