# 🥚 Amana Poultry Farm

A modern, mobile-first business website for a premium quail egg farming operation. Built with React, Vite, and Tailwind CSS for a seamless user experience optimized for mobile users across Africa.

---

## ✨ Features

- **Multi-page Design** — Home, About, Contact, and Product Detail pages
- **Dynamic Product System** — Centralized product data with easy updates
- **WhatsApp Integration** — Floating chat button for direct customer contact
- **Product Showcase** — Beautiful product cards with benefits carousel
- **Contact Form** — Powered by EmailJS with no backend required
- **Mobile-First Responsive** — Optimized for mobile browsers and tablets
- **SEO Optimized** — Sitemap, meta tags, and structured for search engines
- **Smooth Animations** — Professional hover effects and page transitions

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev) | UI framework & components |
| [Vite](https://vitejs.dev) | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first styling |
| [React Router v6](https://reactrouter.com) | Client-side page routing |
| [Lucide React](https://lucide.dev) | Clean SVG icons |
| [EmailJS](https://emailjs.com) | Contact form delivery |

---

## 📁 Project Structure

```
amana-poultry-farm/
├── public/
│   ├── sitemap.xml              # SEO sitemap
│   └── images/                  # Product & marketing images
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky navigation header
│   │   ├── Footer.jsx           # Site footer with links
│   │   ├── ProductCard.jsx      # Reusable product card
│   │   ├── BenefitsMarquee.jsx  # Scrolling benefits animation
│   │   ├── SectionHeading.jsx   # Section title component
│   │   └── WhatsAppButton.jsx   # Floating WhatsApp button
│   ├── data/
│   │   └── products.js          # All product definitions
│   ├── pages/
│   │   ├── Home.jsx             # Landing/homepage
│   │   ├── About.jsx            # Company information
│   │   ├── Contact.jsx          # Contact form page
│   │   └── ProductDetail.jsx    # Individual product view
│   ├── App.jsx                  # Main app & routing
│   ├── main.jsx                 # Application entry point
│   └── index.css                # Global styles
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org) v18+
- npm v9+

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/yourusername/amana-poultry-farm.git

# Navigate to project
cd amana-poultry-farm

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to view the site locally.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🔧 Configuration

### 1. WhatsApp Integration

Update your WhatsApp business number in [src/components/WhatsAppButton.jsx](src/components/WhatsAppButton.jsx):

```js
const WHATSAPP_NUMBER = '+220XXXXXXXXX' // Your WhatsApp number
```

### 2. Set Up EmailJS (Contact Form)

Configure email delivery in [src/pages/Contact.jsx](src/pages/Contact.jsx):

```js
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'
```

Get free credentials from [emailjs.com](https://emailjs.com) (200 emails/month included).

### 3. Product Management

Edit products in [src/data/products.js](src/data/products.js):

```js
{
  id: 'product-id',             // Unique identifier for URL
  name: 'Product Name',
  price: 400,                   // Price in your currency
  description: 'Product details...',
  image: '/images/product.jpg',
  benefits: ['Benefit 1', 'Benefit 2', ...],
  tag: 'Popular',               // Optional badge
}
```

### 4. Product Images

Store images in [public/images/](public/images/) and reference:

```js
image: '/images/your-product.jpg'
```

---

## 🎨 Design System

| Element | Color/Value |
|---|---|
| Primary | `#1e7e1e` — Forest Green |
| Accent | `#e6b800` — Gold |
| Background | `#fdfaf4` — Cream |
| Text | `#1a1a1a` — Dark Gray |
| Success | `#10b981` — Green |

---

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import repository at [vercel.com](https://vercel.com)
3. Vercel auto-detects Vite — no setup needed
4. Deploy with one click ✅

### Deploy to Other Platforms

Build files are output to `dist/` directory:

```bash
npm run build
```

---

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari 12+
- Mobile browsers

---

## 🔍 SEO Checklist

- [ ] Update meta tags in [index.html](index.html)
- [ ] Submit [public/sitemap.xml](public/sitemap.xml) to Google Search Console
- [ ] Configure robots.txt for crawlers
- [ ] Request indexing after deployment

---

## 📄 License

© 2026 Amana Poultry Farm. All rights reserved.
