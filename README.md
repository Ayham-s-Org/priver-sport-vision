# Priver Sport Vision

A modern, full-stack web application built with Next.js, TailwindCSS, Redux, and Supabase. This project serves as a base template for sports vision applications with authentication, state management, and real-time database capabilities.

## 🚀 Features

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first CSS framework
- **Redux Toolkit** - Predictable state management
- **Supabase** - Backend-as-a-Service with authentication and PostgreSQL database
- **Docker** - Containerized development and deployment
- **ESLint** - Code linting and formatting

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js | React framework with SSR/SSG capabilities |
| TypeScript | Type-safe JavaScript |
| TailwindCSS | Utility-first CSS framework |
| Redux Toolkit | State management |
| Supabase | Authentication, database, and real-time subscriptions |
| Docker | Containerization and deployment |

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Docker** and **Docker Compose**
- **Git**

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Ayham-s-Org/priver-sport-vision.git
cd priver-sport-vision
```

### 2. Environment Configuration

Copy the example environment file and configure your variables:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Optional: Supabase Service Role Key (for server-side operations)
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Next.js Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_key

# Database URL (if using Supabase Postgres directly)
DATABASE_URL=your_database_connection_string
```

### 3. Using Docker (Recommended)

The project includes a complete Docker setup with Supabase services:

```bash
# Build and start all services
docker-compose up --build

# Run in detached mode
docker-compose up -d --build

# Stop all services
docker-compose down

# Stop and remove volumes (reset database)
docker-compose down -v
```

This will start:
- Next.js app on `http://localhost:3000`
- Supabase API on `http://localhost:54321`
- PostgreSQL database on `localhost:54322`
- Supabase Auth on `localhost:54324`
- Supabase Storage on `localhost:54325`

### 4. Local Development (Alternative)

If you prefer to run without Docker:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   └── providers/         # Context providers
│       └── ReduxProvider.tsx
├── lib/                   # Utilities and configurations
│   ├── features/          # Redux slices
│   │   └── auth/
│   │       └── authSlice.ts
│   ├── hooks.ts           # Redux hooks
│   ├── store.ts           # Redux store configuration
│   └── supabase.ts        # Supabase client
├── public/                # Static assets
└── types/                 # TypeScript type definitions
```

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous key | Yes |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server-side) | No |
| `NEXTAUTH_URL` | Your application URL | Yes |
| `NEXTAUTH_SECRET` | Secret for NextAuth.js | Yes |
| `DATABASE_URL` | Direct database connection string | No |

## 🚀 Deployment

### Production Build

```bash
# Build the application
npm run build

# Start production server
npm start
```

### Docker Production

```bash
# Build production image
docker build -t priver-sport-vision .

# Run production container
docker run -p 3000:3000 priver-sport-vision
```

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push

## 🧪 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript check
```

### Code Style

This project uses:
- **ESLint** for code linting
- **Prettier** for code formatting (via ESLint integration)
- **TypeScript** for type checking

## 🔧 Configuration

### Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key from the API settings
3. Update your `.env.local` file with these values

### Redux Configuration

The Redux store is pre-configured with:
- **Redux Toolkit** for simplified Redux logic
- **TypeScript** integration with typed hooks
- **Auth slice** for user authentication state

### TailwindCSS

TailwindCSS is configured with:
- **JIT compilation** for faster builds
- **App Router** compatibility
- **Custom fonts** (Geist Sans, Geist Mono)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you have any questions or need help with setup, please:

1. Check the [Issues](https://github.com/Ayham-s-Org/priver-sport-vision/issues) page
2. Create a new issue if your problem isn't already reported
3. Provide detailed information about your environment and the issue

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Redux Toolkit](https://redux-toolkit.js.org/) for simplified Redux
- [Supabase](https://supabase.com/) for the backend-as-a-service platform
