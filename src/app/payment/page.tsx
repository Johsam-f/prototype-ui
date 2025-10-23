"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface BookingData {
  apartment: {
    id: string;
    class: string;
    roomNumber: string;
    price: number;
    facilities: string[];
  };
  checkIn: string;
  checkOut: string;
  guests: number;
  nights: number;
  total: number;
}

export default function Payment() {
  const [bookingData, setBookingData] = useState<BookingData | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<"mpamba" | "airtel" | "bank" | "">("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bankDetails, setBankDetails] = useState({
    accountName: "",
    accountNumber: "",
    bankName: ""
  });

  useEffect(() => {
    const loadBookingData = () => {
      if (typeof window !== 'undefined') {
        const stored = localStorage.getItem('facilityBookingData') || localStorage.getItem('bookingData');
        if (stored) {
          try {
            const parsedData = JSON.parse(stored);
            setBookingData(parsedData);
          } catch (error) {
            console.error('Error parsing booking data:', error);
          }
        }
      }
    };

    // Use setTimeout to defer the state updates
    const timeoutId = setTimeout(loadBookingData, 0);
    
    return () => clearTimeout(timeoutId);
  }, []);

  if (!bookingData) {
    return (
       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">No Booking Data Found</h1>
          <Link href="/booking" className="text-amber-600 hover:text-amber-700">
            Go back to booking
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-slate-900">
              Kwathu Apartments
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/booking" className="text-slate-600 hover:text-slate-900">
                 Back
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Complete Your Payment</h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Booking Summary */}
          <div className="bg-gray-200 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Booking Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-slate-600">Room:</span>
                <span className="font-medium">{bookingData.apartment.roomNumber} ({bookingData.apartment.class})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Check-in:</span>
                <span className="font-medium">{new Date(bookingData.checkIn).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Check-out:</span>
                <span className="font-medium">{new Date(bookingData.checkOut).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Nights:</span>
                <span className="font-medium">{bookingData.nights}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Guests:</span>
                <span className="font-medium">{bookingData.guests}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Rate per night:</span>
                <span className="font-medium">MWK {bookingData.apartment.price.toLocaleString()}</span>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-slate-900">Total Amount:</span>
                <span className="text-2xl font-bold text-amber-600">
                  MWK {bookingData.total.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-slate-700 mb-2">Facilities Included:</h3>
              <div className="flex flex-wrap gap-1">
                {bookingData.apartment.facilities.map((facility, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full"
                  >
                    {facility}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-gray-200 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Select Payment Method</h2>
            
            <div className="space-y-4 mb-6">
              {/* TNM Mpamba */}
              <div
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  paymentMethod === "mpamba" ? "border-amber-500 bg-amber-50" : "border-slate-300 hover:border-slate-400"
                }`}
                onClick={() => setPaymentMethod("mpamba")}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-200 rounded-lg flex items-center justify-center">
                    <Image src="data:image/jpeg;base64,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" 
                    alt="TNM Mpamba" width={32} height={32} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">TNM Mpamba</h3>
                    <p className="text-sm text-slate-600">Mobile money payment</p>
                  </div>
                </div>
              </div>

              {/* Airtel Money */}
              <div
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  paymentMethod === "airtel" ? "border-amber-500 bg-amber-50" : "border-slate-300 hover:border-slate-400"
                }`}
                onClick={() => setPaymentMethod("airtel")}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-200 rounded-lg flex items-center justify-center">
                    <Image src="data:image/png;base64,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" 
                    alt="Airtel Money" width={32} height={32} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Airtel Money</h3>
                    <p className="text-sm text-slate-600">Mobile money payment</p>
                  </div>
                </div>
              </div>

              {/* Bank Transfer */}
              <div
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  paymentMethod === "bank" ? "border-amber-500 bg-amber-50" : "border-slate-300 hover:border-slate-400"
                }`}
                onClick={() => setPaymentMethod("bank")}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center">
                    <Image src="data:image/png;base64,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"
                     alt="Bank" width={32} height={32} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Bank Transfer</h3>
                    <p className="text-sm text-slate-600">Direct bank transfer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Details Form */}
            {(paymentMethod === "mpamba" || paymentMethod === "airtel") && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="e.g., 0999123456"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>
            )}

            {paymentMethod === "bank" && (
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Account Holder Name
                  </label>
                  <input
                    type="text"
                    value={bankDetails.accountName}
                    onChange={(e) => setBankDetails({...bankDetails, accountName: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Account Number
                  </label>
                  <input
                    type="text"
                    value={bankDetails.accountNumber}
                    onChange={(e) => setBankDetails({...bankDetails, accountNumber: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
               
              </div>
            )}

            <button
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
            >
              { `Pay MWK ${bookingData.total.toLocaleString()}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}