"use client";

import Image from "next/image";

export default function AcaraPage() {
  return (
    <div className="min-h-screen bg-white pt-10 pb-24 px-4 flex flex-col items-center text-center">
      {/* Tanggal Acara */}
      <p className="text-lg text-purple-700 italic mb-1">to</p>
      <h2 className="text-3xl font-bold text-purple-800 mb-4 border border-purple-300 rounded-full px-6 py-2">
        29 DESEMBER 2024
      </h2>
      {/* Countdown */}
      <div className="flex gap-4 mt-10 mb-6 justify-center flex-wrap">
        {["day", "hour", "minute", "second"].map((label, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-16 h-16 bg-purple-100 border-2 border-purple-500 rounded-full flex items-center justify-center text-2xl font-bold text-purple-800">
              --
            </div>
            <span className="mt-2 text-sm text-purple-900">{label}</span>
          </div>
        ))}
      </div>

      {/* Tombol Google Calendar */}
      <a
        href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Acara+Pernikahan&dates=20241229T090000/20241229T120000&details=Undangan+Pernikahan&location=PT+INTI+(PERSERO)"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-purple-300 text-white font-medium py-2 px-4 rounded-full shadow-md hover:bg-purple-400 mb-6"
      >
        📌 Save to Google Calendar
      </a>

      {/* Lokasi */}
      <p className="text-lg text-purple-700 italic mb-1">at</p>
      <h3 className="text-2xl font-bold text-purple-800 mb-4">
        PT. INTI (PERSERO)
      </h3>

      {/* Tombol Google Maps */}
      <a
        href="https://www.google.com/maps/place/PT.+INTI+(Persero)"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-purple-300 text-white font-medium py-2 px-4 rounded-full shadow-md hover:bg-purple-400"
      >
        📍 Open Google Maps
      </a>

      {/* Hiasan bunga bawah */}
      <div className="relative w-full h-40 mt-12">
        <Image
          src="/bunga.avif" // Gambar bunga bawah
          alt="Hiasan bunga"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
