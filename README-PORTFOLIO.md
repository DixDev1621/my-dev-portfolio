# Dixun Devotta S - Portfolio Website

A clean, modern, single-column personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with smooth scrolling
- **Sticky Navigation**: Easy access to all sections
- **Hero Section**: Professional photo with call-to-action buttons
- **About Me**: Brief professional summary with contact links
- **Skills**: Technical skills with descriptions and Tools subsection
- **Projects**: Top 3 projects with GitHub and Live Preview links
- **Certifications**: List of achievements and certifications
- **Education**: Highest educational qualification
- **Contact Form**: Functional contact form with mailto fallback
- **Dark/Light Mode Support**: Styled for both color schemes

## Tech Stack

- **React** 18.3.1
- **TypeScript**
- **Tailwind CSS** with custom design tokens
- **Vite** for build tooling
- **Shadcn UI** components
- **Lucide React** for icons

## Project Structure

```
src/
├── assets/
│   └── profile-photo.jpg     # Your professional photo
├── components/
│   └── ui/                   # Reusable UI components
├── pages/
│   └── Portfolio.tsx         # Main portfolio page
├── index.css                 # Global styles and design tokens
└── App.tsx                   # Main app component

public/
└── resume.pdf                # Your resume PDF file
```

## Customization Guide

### Update Personal Information

Edit `src/pages/Portfolio.tsx`:

1. **Name & Title**: Update in the Hero section (line ~200)
2. **Contact Info**: 
   - Email: `dixundevotta.s@gmail.com`
   - LinkedIn: Update URL in all anchor tags
   - GitHub: `https://github.com/DixDev1621`
   - Portfolio: Update domain when deployed

3. **About Section**: Update the profile summary text (line ~280)

4. **Skills**: Add or remove skills in the Skills section array (line ~320)

5. **Projects**: Modify the projects array (line ~360):
   ```javascript
   {
     title: "Project Name",
     description: "One-line description",
     github: "https://github.com/yourusername/repo",
     live: "https://your-demo-url.com"
   }
   ```

6. **Certifications**: Update the certifications array (line ~450)

7. **Education**: Update educational qualification (line ~490)

### Update Resume PDF

Replace `public/resume.pdf` with your latest resume file. Keep the filename as `resume.pdf` or update all references in the code.

### Update Photo

Replace `src/assets/profile-photo.jpg` with your professional photo. Recommended size: 800x800px.

### Change Colors

Edit `src/index.css` to modify the color scheme. All colors use HSL format:

```css
:root {
  --primary: 217 91% 60%;        /* Blue accent color */
  --background: 0 0% 100%;       /* White background */
  --foreground: 220 13% 18%;     /* Text color */
  /* ... more color tokens */
}
```

## Development

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### GitHub Pages

1. Update `vite.config.ts` with your repository name:
   ```typescript
   base: '/your-repo-name/'
   ```

2. Build and deploy:
   ```bash
   npm run build
   npm run deploy
   ```

### Vercel

1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy!

### Netlify

1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add `_redirects` file in `public/` folder:
   ```
   /*    /index.html   200
   ```

## SEO Optimization

The site includes:
- Semantic HTML5 elements
- Meta tags for SEO
- Open Graph tags for social media
- Responsive images with alt text
- Fast loading times
- Clean URLs

## Contact Form

The contact form uses a mailto fallback. For production, consider:
- **Netlify Forms**: Add `netlify` attribute to form tag
- **Formspree**: External form service
- **EmailJS**: Client-side email service

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This portfolio is personal use only. Feel free to use as template with attribution.

## Contact

Dixun Devotta S
- Email: dixundevotta.s@gmail.com
- GitHub: [DixDev1621](https://github.com/DixDev1621)
- LinkedIn: [Dixun Devotta S](https://www.linkedin.com/in/dixun-devotta-s)
