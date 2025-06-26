# Harshit's Intelligent Systems Lab

A futuristic, interactive portfolio website showcasing AI research, IoT innovations, and cutting-edge intelligent systems development. Built with React, Three.js, and modern web technologies.

## 🚀 Features

- **3D Interactive Hero Section** - Particle animations and rotating geometries using Three.js
- **Agentic Navigation** - Virtual AI agents guide through different sections
- **3D Skills Visualization** - Interactive 3D tag cloud with React Three Fiber
- **Project Showcase** - Graph layouts with detailed modals for technical projects
- **Experience Timeline** - Animated journey through research and startup roles
- **Publications Gallery** - Flip cards showcasing research papers and patents
- **Smart Contact Form** - EmailJS integration with confetti success animation
- **Theme System** - Light/dark mode with localStorage persistence
- **Responsive Design** - Optimized for all devices with glassmorphism effects

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Three.js** / **@react-three/fiber** for 3D graphics
- **@react-three/drei** for 3D helpers and components
- **Framer Motion** for animations
- **Shadcn/ui** components
- **Lucide React** icons

### Services & APIs
- **EmailJS** for contact form functionality
- **Firebase** ready for deployment
- **Environment variables** for API configuration

### Performance & Optimization
- Code splitting and lazy loading
- Tree shaking for optimal bundle size
- Optimized 3D rendering
- Responsive image loading

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/harshitmanik/intelligent-systems-lab.git
   cd intelligent-systems-lab
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install additional packages for 3D and animations**
   ```bash
   npm install three @react-three/fiber @react-three/drei @emailjs/browser
   ```

4. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Fill in your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

## 🔧 Configuration

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service (Gmail, Outlook, etc.)
3. Create an email template with the following variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content
   - `{{to_name}}` - Your name
4. Get your Service ID, Template ID, and Public Key
5. Add them to your `.env` file

### Firebase Deployment (Optional)

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Initialize Firebase:
   ```bash
   firebase init hosting
   ```

3. Build and deploy:
   ```bash
   npm run build
   firebase deploy
   ```

## 🎨 Customization

### Colors and Themes
- Edit `client/src/index.css` for custom color schemes
- Use HSL format for colors: `hsl(188, 94%, 43%)`
- Dark/light theme variables are automatically handled

### Content Updates
- **Projects**: Update `client/src/components/Projects.tsx`
- **Skills**: Modify `client/src/components/Skills3D.tsx`
- **Experience**: Edit `client/src/components/Experience.tsx`
- **Publications**: Update `client/src/components/Publications.tsx`

### 3D Animations
- Modify Three.js scenes in component files
- Adjust particle systems in `Hero.tsx`
- Customize 3D skill cloud in `Skills3D.tsx`

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Breakpoint optimizations for tablets and desktops
- Touch-friendly 3D interactions
- Compressed assets for mobile performance

## 🚀 Deployment

### Development
```bash
npm run dev
