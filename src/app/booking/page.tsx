"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

interface Apartment {
  id: string;
  class: "Standard" | "Premium" | "Luxury";
  roomNumber: string;
  price: number;
  facilities: string[];
  image: string;
  available: boolean;
}

const apartments: Apartment[] = [
  {
    id: "1",
    class: "Standard",
    roomNumber: "A101",
    price: 50000,
    facilities: ["WiFi", "Air Conditioning", "Private Bathroom"],
    image: "/standard.jpg",
    available: true
  },
  {
    id: "2",
    class: "Standard",
    roomNumber: "A102",
    price: 50000,
    facilities: ["WiFi", "Air Conditioning", "Private Bathroom", "TV"],
    image: "/standard.jpg",
    available: true
  },
  {
    id: "3",
    class: "Premium",
    roomNumber: "B201",
    price: 75000,
    facilities: ["WiFi", "Air Conditioning", "Private Bathroom", "TV", "Refrigerator", "Kitchenette"],
    image: "/premium.jpg",
    available: true
  },
  {
    id: "4",
    class: "Premium",
    roomNumber: "B202",
    price: 75000,
    facilities: ["WiFi", "Air Conditioning", "Private Bathroom", "TV", "Refrigerator", "Kitchenette", "Balcony"],
    image: "/premium.jpg",
    available: false
  },
  {
    id: "5",
    class: "Luxury",
    roomNumber: "C301",
    price: 120000,
    facilities: ["WiFi", "Air Conditioning", "Private Bathroom", "Smart TV", "Refrigerator", "Full Kitchen", "Balcony", "Washing Machine", "Living Room"],
    image: "/luxury.jpg",
    available: true
  },
  {
    id: "6",
    class: "Luxury",
    roomNumber: "C302",
    price: 120000,
    facilities: ["WiFi", "Air Conditioning", "Private Bathroom", "Smart TV", "Refrigerator", "Full Kitchen", "Balcony", "Washing Machine", "Living Room", "Jacuzzi"],
    image: "/luxury.jpg",
    available: true
  }
];

export default function Booking() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [selectedClass, setSelectedClass] = useState<"All" | "Standard" | "Premium" | "Luxury">("All");
  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(null);

  const filteredApartments = apartments.filter(apt => 
    selectedClass === "All" || apt.class === selectedClass
  );

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const calculateTotal = () => {
    if (!selectedApartment) return 0;
    return selectedApartment.price * calculateNights();
  };

  const handleBooking = () => {
    if (!selectedApartment || !checkIn || !checkOut) {
      alert("Please select dates and an apartment");
      return;
    }
    
    const bookingData = {
      apartment: selectedApartment,
      checkIn,
      checkOut,
      guests,
      nights: calculateNights(),
      total: calculateTotal()
    };
    
    // Store booking data in localStorage for the payment page
    localStorage.setItem('bookingData', JSON.stringify(bookingData));
    window.location.href = '/payment';
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-slate-900">
              Kwathu Apartments
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-slate-600 hover:text-slate-900">
                Home
              </Link>
              <Link href="/login" className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg">
                Account
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Book Your Stay</h1>
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 font-bold">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">How to Book</h3>
            <p className="text-slate-600">Follow these simple steps to book your stay:</p>
            <ol className="list-decimal list-inside mb-4 text-gray-700">
            <li>Select your desired check-in and check-out dates.</li>
            <li>Choose the number of guests and the apartment class.</li>
            <li>Pick an available apartment from the list.</li>
            <li>{`Click on "Book Now" to proceed to payment.`}</li>
            </ol>
        </div>

        {/* Booking Form */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Check-in Date
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Check-out Date
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                min={checkIn || new Date().toISOString().split('T')[0]}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-gray-600"
              >
                <option value={1}>1 Guest</option>
                <option value={2}>2 Guests</option>
                <option value={3}>3 Guests</option>
                <option value={4}>4 Guests</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Apartment Class
              </label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value as typeof selectedClass)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-gray-600"
              >
                <option value="All">All Classes</option>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
                <option value="Luxury">Luxury</option>
              </select>
            </div>
          </div>
        </div>

        {/* Apartment Listings */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredApartments.map((apartment) => (
            <div
              key={apartment.id}
              className={`bg-gray-300 rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all ${
                selectedApartment?.id === apartment.id
                  ? 'ring-2 ring-amber-500 transform scale-105'
                  : 'hover:shadow-xl hover:transform hover:scale-105'
              } ${!apartment.available ? 'opacity-50' : ''}`}
              onClick={() => apartment.available && setSelectedApartment(apartment)}
            >
              <div className="relative h-48 bg-linear-to-br from-slate-200 to-slate-300">
                <Image
                  src={apartment.image}
                  alt={`Apartment ${apartment.roomNumber}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Facility {apartment.roomNumber}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    apartment.class === 'Standard' ? 'bg-blue-100 text-blue-800' :
                    apartment.class === 'Premium' ? 'bg-purple-100 text-purple-800' :
                    'bg-amber-100 text-amber-800'
                  }`}>
                    {apartment.class}
                  </span>
                </div>
                
                <p className="text-2xl font-bold text-slate-900 mb-4">
                  MWK {apartment.price.toLocaleString()}
                  <span className="text-sm font-normal text-slate-500">/night</span>
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-slate-700">Facilities:</h4>
                  <div className="flex flex-wrap gap-1">
                    {apartment.facilities.map((facility, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full"
                      >
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>
                
                {!apartment.available && (
                  <div className="mt-4 text-red-600 font-medium text-sm">
                    Not Available
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Booking Summary */}
        {selectedApartment && checkIn && checkOut && (
          <div className="bg-gray-300 text-black rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Booking Summary</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-slate-700 mb-2">Selected Apartment</h3>
                <p className="text-lg font-medium">Room {selectedApartment.roomNumber} ({selectedApartment.class})</p>
                <p className="text-slate-600">MWK {selectedApartment.price.toLocaleString()}/night</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-700 mb-2">Stay Details</h3>
                <p>Check-in: {new Date(checkIn).toLocaleDateString()}</p>
                <p>Check-out: {new Date(checkOut).toLocaleDateString()}</p>
                <p>Nights: {calculateNights()}</p>
                <p>Guests: {guests}</p>
              </div>
            </div>
            
            <div className="border-t mt-6 pt-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-semibold text-slate-900">Total Amount:</span>
                <span className="text-2xl font-bold text-amber-600">
                  MWK {calculateTotal().toLocaleString()}
                </span>
              </div>
              
              <button
                onClick={handleBooking}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors transform hover:scale-105"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}