import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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

      <div className="relative min-h-screen flex items-center justify-center bg-black">
        <div className="absolute inset-0 bg-black/70"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/outside.jpg')"
          }}
        ></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 bg-black/60 py-12 rounded-lg">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Kwathu Apartments
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed drop-shadow-md">
            Premium Facilities Booking System
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto drop-shadow-md">
            Book meeting rooms, recreational facilities, and amenities with ease. 
            Experience luxury living with convenient facility management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/booking"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Book Facilities
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 py-20">
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
