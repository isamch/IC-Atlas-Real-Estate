# IC Atlas Real Estate

A modern, responsive real estate web application for showcasing premium properties, built with Next.js, React, and Tailwind CSS.

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Customization](#customization)
- [Contact](#contact)

---

## Overview

**IC Atlas** is a professional real estate platform designed to help users discover, filter, and explore luxury properties. The application is fully responsive, beginner-friendly, and easy to customize. It features:
- A beautiful landing page with hero, stats, featured properties, testimonials, and call-to-action sections
- Property listing with advanced filters (price, location, type, bedrooms)
- About page with company story, values, and team
- Contact page with form and interactive map
- Reusable, accessible UI components

---

## Features
- **Responsive Design:** Works seamlessly on mobile, tablet, and desktop
- **Property Filtering:** Search and filter properties by price, location, type, and bedrooms
- **Modern UI:** Built with Tailwind CSS and Radix UI for a clean, accessible interface
- **Reusable Components:** Modular code for easy maintenance and extension
- **Contact Form:** Users can send inquiries directly from the site
- **Team & Testimonials:** Build trust with client reviews and team bios

---

## Demo

> _wait for link for live demo_

---

## Technologies Used
- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/) (for type safety)
- [Tailwind CSS](https://tailwindcss.com/) (utility-first CSS framework)
- [Radix UI](https://www.radix-ui.com/) (accessible UI primitives)
- [Lucide Icons](https://lucide.dev/) (icon library)
- [date-fns](https://date-fns.org/) (date utilities)
- [Recharts](https://recharts.org/) (charts, if used)
- [Embla Carousel](https://www.embla-carousel.com/) (carousel, if used)

---

## Project Structure

```
├── app/                # Main app directory (Next.js App Router)
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── properties/     # Properties listing page
│   ├── globals.css     # Global styles (Tailwind CSS)
│   ├── layout.tsx      # Root layout (header, footer)
│   └── page.tsx        # Home page
├── components/         # Reusable UI and layout components
│   ├── layout/         # Header, Footer, etc.
│   └── ui/             # Buttons, Cards, Forms, etc.
├── public/             # Static assets (images, icons)
├── styles/             # Additional styles (if any)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and libraries
├── package.json        # Project metadata and scripts
├── tailwind.config.ts  # Tailwind CSS configuration
├── postcss.config.mjs  # PostCSS configuration
├── tsconfig.json       # TypeScript configuration
└── ...
```

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/) or [yarn](https://yarnpkg.com/)

### Installation
1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd <project-directory>
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

### Running the Development Server
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the app.

### Building for Production
```bash
npm run build
npm start
```

---

## Available Scripts
- `npm run dev` — Start the development server
- `npm run build` — Build the app for production
- `npm start` — Start the production server
- `npm run lint` — Run ESLint for code quality

---

## Customization
- **Branding:** Update images in the `public/images` folder and logo in the header/footer
- **Colors & Styles:** Edit `tailwind.config.ts` and `app/globals.css` for custom colors and styles
- **Content:** Modify the content in the `app/` pages and components as needed
- **Components:** Reuse or extend components in `components/ui` and `components/layout`

---

## Contact
For questions, feedback, or support, please contact:

- **Email:** info@icatlas.com
- **Phone:** +1 (555) 123-4567
- **Address:** 123 Luxury Avenue, Manhattan, NY 10001, United States

---

## License
> _Specify your license here (e.g., MIT, Apache 2.0, etc.)_ 
