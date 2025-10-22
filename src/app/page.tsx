import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            Kwathu Apartments
          </div>
          <Link 
            href="/login"
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Login
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 800\"><defs><linearGradient id=\"bg\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" style=\"stop-color:%23334155\" /><stop offset=\"100%\" style=\"stop-color:%231e293b\" /></linearGradient></defs><rect width=\"1200\" height=\"800\" fill=\"url(%23bg)\" /><rect x=\"100\" y=\"200\" width=\"200\" height=\"300\" fill=\"%23475569\" opacity=\"0.3\" rx=\"10\" /><rect x=\"350\" y=\"150\" width=\"180\" height=\"350\" fill=\"%23475569\" opacity=\"0.4\" rx=\"10\" /><rect x=\"580\" y=\"180\" width=\"220\" height=\"320\" fill=\"%23475569\" opacity=\"0.3\" rx=\"10\" /><rect x=\"850\" y=\"160\" width=\"200\" height=\"340\" fill=\"%23475569\" opacity=\"0.4\" rx=\"10\" /></svg>')"
          }}
        ></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Kwathu Apartments
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Premium Facilities Booking System
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Book meeting rooms, recreational facilities, and amenities with ease. 
            Experience luxury living with convenient facility management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/login"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
            >
              Book Facilities
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Premium Facilities
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need for work, leisure, and entertainment
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-slate-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-amber-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Meeting Rooms</h3>
              <p className="text-slate-600">
                Professional meeting spaces equipped with modern technology for your business needs.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-slate-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Recreation</h3>
              <p className="text-slate-600">
                Swimming pool, gym, and recreational areas for your relaxation and fitness.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-slate-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-green-600 rounded-sm"></div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Event Spaces</h3>
              <p className="text-slate-600">
                Elegant venues for special occasions, parties, and community gatherings.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-2xl font-bold mb-4">Kwathu Apartments</div>
          <p className="text-slate-400 mb-6">
            Premium living with world-class facilities at your fingertips
          </p>
          <div className="text-slate-500 text-sm">
            © 2025 Kwathu Apartments. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
