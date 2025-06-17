# Priver Sport Vision

A modern Next.js application built with TailwindCSS, Redux Toolkit, and Supabase integration. This project provides a solid foundation for building scalable web applications with authentication, state management, and containerized deployment.

## 🚀 Features

- **Next.js 15** - Latest Next.js with App Router and TypeScript
- **TailwindCSS** - Utility-first CSS framework for rapid UI development  
- **Redux Toolkit** - Modern state management with Redux Toolkit
- **Supabase** - Authentication and database integration
- **Docker** - Containerized development and production environments
- **TypeScript** - Full type safety throughout the application
- **ESLint** - Code linting and formatting

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [Docker](https://www.docker.com/get-started) and Docker Compose
- [Git](https://git-scm.com/)

## 🛠️ Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/Ayham-s-Org/priver-sport-vision.git
cd priver-sport-vision
```

### 2. Environment Setup

Copy the environment variables:

```bash
cp .env.example .env.local
```

Update `.env.local` with your actual values:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
DATABASE_URL=postgresql://postgres:postgres@localhost:54322/postgres
NODE_ENV=development
```

### 3. Development with Docker (Recommended)

Run the entire stack with Docker Compose:

```bash
# Start all services (Next.js app + PostgreSQL + Redis)
docker compose up -d

# View logs
docker compose logs -f app

# Stop all services
docker compose down
```

The application will be available at:
- **Next.js App**: http://localhost:3000
- **PostgreSQL**: localhost:54322
- **Redis**: localhost:6379

### 4. Local Development (Alternative)

If you prefer to run without Docker:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at http://localhost:3000.

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx      # Root layout with providers
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # Reusable components
│   ├── auth/          # Authentication components
│   └── providers/     # Context providers
└── lib/               # Utilities and configurations
    ├── redux/         # Redux store and slices
    └── supabase/      # Supabase client and services
```

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Docker
docker compose up                    # Start all services
docker compose -f docker-compose.dev.yml up  # Development mode
docker compose down                  # Stop all services
```

## 🐳 Docker Deployment

### Production Build

```bash
# Build and run production container
docker compose -f docker-compose.yml up --build
```

### Development with Hot Reload

```bash
# Run development environment with hot reload
docker compose -f docker-compose.dev.yml up --build
```

## 🔐 Authentication

The project includes a complete authentication system using Supabase:

- User registration and login
- Email verification
- Session management
- Protected routes
- Redux integration for auth state

## 🔄 State Management

Redux Toolkit is configured with:

- **Auth Slice**: User authentication state
- **Type-safe hooks**: `useAppDispatch` and `useAppSelector`
- **Middleware**: Configured for optimal performance

## 🎨 Styling

TailwindCSS is configured with:

- Responsive design utilities
- Custom color palette
- Component-friendly classes
- Production optimization

## 🗄️ Database

PostgreSQL database with Supabase provides:

- User authentication
- Row Level Security (RLS)
- Real-time subscriptions
- RESTful API
- GraphQL support

## 📦 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_APP_URL` | Application URL | `http://localhost:3000` |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Required |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | Required |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key | Required |
| `DATABASE_URL` | PostgreSQL connection string | Local Docker URL |
| `NODE_ENV` | Environment mode | `development` |

## 🚀 Deployment

### Docker Production

1. Build the production image:
```bash
docker build -t priver-sport-vision .
```

2. Run the container:
```bash
docker run -p 3000:3000 --env-file .env.local priver-sport-vision
```

### Cloud Deployment

This project is ready for deployment on:

- **Vercel** (recommended for Next.js)
- **Railway**
- **DigitalOcean App Platform**
- **AWS ECS/Fargate**
- **Google Cloud Run**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [documentation](https://nextjs.org/docs)
2. Review [Supabase docs](https://supabase.com/docs)
3. Open an issue in this repository

## 🔗 Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Supabase Documentation](https://supabase.com/docs)
- [Docker Documentation](https://docs.docker.com/)
