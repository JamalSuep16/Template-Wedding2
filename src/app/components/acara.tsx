"use client";

export default function AcaraPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-pink-100 via-pink-50 to-white pt-10 pb-24 px-4 flex flex-col items-center text-center overflow-hidden">
      {/* Tanggal Acara */}
      <p className="text-lg text-pink-700 italic mb-1">to</p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-800 mb-4 border border-pink-300 rounded-full px-6 py-2 bg-white/70 backdrop-blur-sm shadow-sm">
        29 DESEMBER 2024
      </h2>

      {/* Countdown */}
      <div className="flex gap-4 mt-10 mb-6 justify-center flex-wrap">
        {["Hari", "Jam", "Menit", "Detik"].map((label, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-pink-100 border-2 border-pink-500 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold text-pink-800 shadow-sm">
              --
            </div>
            <span className="mt-2 text-sm sm:text-base text-pink-900">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Tombol Google Calendar */}
      <a
        href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Acara+Pernikahan&dates=20241229T090000/20241229T120000&details=Undangan+Pernikahan&location=PT+INTI+(PERSERO)"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-400 text-white font-medium py-2 px-5 rounded-full shadow-md hover:bg-pink-500 transition"
      >
        📌 Simpan ke Google Calendar
      </a>

      {/* Lokasi */}
      <p className="text-lg text-pink-700 italic mt-8 mb-1">at</p>
      <h3 className="text-xl sm:text-2xl font-bold text-pink-800 mb-4">
        PT. INTI (PERSERO)
      </h3>

      {/* Tombol Google Maps */}
      <a
        href="https://www.google.com/maps/place/PT.+INTI+(Persero)"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-400 text-white font-medium py-2 px-5 rounded-full shadow-md hover:bg-pink-500 transition"
      >
        📍 Buka Google Maps
      </a>
    </div>
  );
}
