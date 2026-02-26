# Special Event Designs Website

A modern, fully functional website for Special Event Designs - a premier event planning and floral design company specializing in weddings, corporate events, and serving as the official florist for the WM Phoenix Open.

## Features

- **Responsive Design**: Mobile-first design that works seamlessly on all devices
- **Modern Stack**: Built with Next.js 14, React 18, TypeScript, and Tailwind CSS
- **Interactive Components**: Calendar widget, contact forms, portfolio filtering, and more
- **SEO Optimized**: Proper metadata and semantic HTML
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Performance**: Optimized images and fast page load times

## Pages

1. **Homepage**: Hero section, services preview, featured portfolio, testimonials
2. **Services**: Detailed service descriptions with interactive planner
3. **Portfolio**: Filterable gallery with event showcases
4. **Process**: Interactive timeline of event planning process
5. **About**: Company mission, CEO bio, Phoenix Open partnership
6. **Testimonials**: Client reviews with ratings and video testimonials
7. **Contact**: Inquiry form and calendar scheduling widget
8. **Blog**: Event planning tips, trends, and behind-the-scenes content

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
special-event-designs/
├── public/          # Static assets (images, videos)
├── src/
│   ├── app/        # Next.js app router pages
│   ├── components/ # Reusable React components
│   └── lib/        # Utility functions
└── styles/         # Global CSS and Tailwind
```

## Key Dependencies

- **Next.js 14**: React framework with App Router
- **React 18**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Hook Form**: Form handling
- **React Calendar**: Calendar widget component
- **Lucide React**: Icon library

## Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:
- Primary colors (red tones)
- Accent colors (green tones)
- Gold colors (for highlights)

### Content

Replace placeholder images and content in:
- `/public/images/` - Add your event photos
- Component files - Update text and data
- Blog posts - Add your actual articles

### Forms

Connect forms to your backend:
- Contact form in `src/components/ContactForm.tsx`
- Newsletter signup in `src/components/NewsletterSignup.tsx`
- Calendar widget in `src/components/CalendarWidget.tsx`

## Features to Implement

- [ ] Backend API integration for forms
- [ ] Real calendar booking system
- [ ] Live chat integration (e.g., Intercom, Drift)
- [ ] Email service integration (e.g., SendGrid, Mailchimp)
- [ ] Google Maps embed for contact page
- [ ] Virtual tour integration
- [ ] Blog CMS integration
- [ ] Analytics (Google Analytics, etc.)

## License

Copyright © 2024 Special Event Designs. All rights reserved.


