import { AuthComponent } from "@/components/auth/AuthComponent";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Priver Sport Vision
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Next.js with TailwindCSS, Redux, and Supabase Integration
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">⚡ Next.js 15</h3>
              <p className="text-gray-600">
                Latest Next.js with App Router and TypeScript
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">🎨 TailwindCSS</h3>
              <p className="text-gray-600">
                Utility-first CSS framework for rapid UI development
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">🔄 Redux Toolkit</h3>
              <p className="text-gray-600">
                Modern state management with Redux Toolkit
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">🔐 Supabase</h3>
              <p className="text-gray-600">
                Authentication and database integration
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">🐳 Docker</h3>
              <p className="text-gray-600">
                Containerized development environment
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">⚙️ Environment</h3>
              <p className="text-gray-600">
                Proper environment configuration setup
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <AuthComponent />
        </div>
      </div>
    </div>
  );
}
