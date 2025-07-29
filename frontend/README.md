# UpgradAI Frontend

A modern, responsive website for UpgradAI - a student-powered AI consulting firm focused on helping small-to-mid-sized businesses implement practical AI solutions.

## About UpgradAI

We are a student-powered AI consulting firm that provides lean, affordable, and high-impact AI solutions to small-to-mid-sized businesses (SMBs) that have not yet fully leveraged AI tools. Our team brings a combination of technical proficiency, entrepreneurial initiative, and deal sourcing capability.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: TailwindCSS
- **Language**: TypeScript
- **Deployment**: Ready for Vercel deployment

## Features

- **Responsive Design**: Mobile-first approach with beautiful UI
- **Modern Navigation**: Clean navigation with mobile hamburger menu
- **Professional Pages**: Home, About, and Services pages
- **SEO Optimized**: Proper meta tags and structured content
- **Performance**: Optimized for fast loading and smooth interactions

## Pages

### Home Page (`/`)
- Hero section with clear value proposition
- Why choose us section highlighting student-powered advantages
- Target market overview
- Call-to-action sections

### About Page (`/about`)
- Company mission and vision
- Why student-powered approach
- Target market details
- Professional presentation of the business model

### Services Page (`/services`)
- Three core service offerings:
  - AI Opportunity Audit (1-2 week engagement)
  - AI Enablement & Integration
  - Prompt & SOP Design
- Process overview
- Clear service descriptions and benefits

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
frontend/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with TailwindCSS
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   │   └── page.tsx
│   └── services/          # Services page
│       └── page.tsx
├── components/            # Reusable components
│   └── Navigation.tsx    # Navigation component
├── public/               # Static assets
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # TailwindCSS configuration
├── postcss.config.js     # PostCSS configuration
├── tsconfig.json         # TypeScript configuration
└── next.config.js        # Next.js configuration
```

## Customization

### Colors
The primary color scheme is defined in `tailwind.config.js`. You can modify the `primary` color palette to match your brand.

### Content
All content is easily editable in the respective page components:
- `app/page.tsx` - Home page content
- `app/about/page.tsx` - About page content  
- `app/services/page.tsx` - Services page content

### Styling
The project uses TailwindCSS for styling. You can:
- Modify the color scheme in `tailwind.config.js`
- Add custom styles in `app/globals.css`
- Use TailwindCSS utility classes throughout components

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## Business Context

This website serves as the digital presence for UpgradAI, targeting:

**Primary Market**: Small-to-mid-sized businesses ($2M - $50M revenue) that are:
- Operationally inefficient
- Heavy on manual or repetitive workflows
- Curious or skeptical about AI adoption

**Secondary Market**:
- Local professional service firms (legal, accounting, medical clinics)
- Niche ecommerce operations or logistics businesses
- Real estate brokerages & investment groups

## Services Offered

1. **AI Opportunity Audit** - 1-2 week engagement to identify AI opportunities
2. **AI Enablement & Integration** - Tool selection and workflow integration
3. **Prompt & SOP Design** - Custom prompt libraries and documentation

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is proprietary to UpgradAI.

---

Built with ❤️ by the UpgradAI team
