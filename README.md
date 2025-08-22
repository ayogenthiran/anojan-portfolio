# My Personal Portfolio

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases my skills, experience, projects, and blog posts in a clean and professional design.

## 🚀 Features

- **Modern Design**: Clean and responsive design with dark/light mode support
- **Performance Optimized**: Built with Next.js for optimal performance and SEO
- **TypeScript**: Full TypeScript support for better development experience
- **Responsive**: Mobile-first design that works on all devices
- **Blog Section**: Integrated blog functionality for sharing thoughts and insights
- **Project Showcase**: Dedicated section to highlight projects and work
- **Contact Form**: Easy way for visitors to get in touch
- **Analytics**: Built-in analytics for tracking website performance

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui
- **Deployment**: Vercel (recommended)
- **Package Manager**: pnpm

## 📁 Project Structure

```
anojan-portfolio/
├── app/                    # Next.js app directory
│   ├── blog/              # Blog pages
│   ├── projects/          # Projects pages
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── hero.tsx          # Hero section
│   ├── about.tsx         # About section
│   ├── projects.tsx      # Projects section
│   ├── blog.tsx          # Blog section
│   └── contact.tsx       # Contact section
├── public/               # Static assets
│   └── images/           # Image assets
├── lib/                  # Utility functions
└── styles/               # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/anojan-portfolio.git
   cd anojan-portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 📝 Customization

### Personal Information
Update the following files to customize your portfolio:
- `components/hero.tsx` - Update name, title, and introduction
- `components/about.tsx` - Update about section content
- `components/experience.tsx` - Update work experience
- `components/education.tsx` - Update education details
- `components/skills.tsx` - Update skills and technologies
- `components/projects.tsx` - Update project showcase

### Styling
- Modify `tailwind.config.ts` for theme customization
- Update `app/globals.css` for global styles
- Customize component styles in individual component files

### Images
- Replace images in `public/images/` directory
- Update image references in components

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
The portfolio can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: [your-email@example.com]
- **LinkedIn**: [your-linkedin-profile]
- **GitHub**: [your-github-profile]

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS