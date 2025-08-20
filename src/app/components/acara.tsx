"use client";

export default function AcaraPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center">
      {/* Background bunga full layar */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bgbunga.png')",
        }}
      ></div>

      {/* Overlay putih transparan biar bunga lebih pudar */}
      <div className="absolute inset-0 bg-white/70"></div>

      {/* Konten */}
      <div className="relative z-10 px-6 py-10">
        {/* Tanggal Acara */}
        <p className="text-base sm:text-lg text-pink-700 italic mb-1">to</p>
        <h2 className="text-2xl sm:text-4xl font-bold text-pink-900 mb-6">
          29 DESEMBER 2024
        </h2>

        {/* Countdown */}
        <div className="flex gap-6 mb-8 justify-center flex-wrap">
          {["Hari", "Jam", "Menit", "Detik"].map((label, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 bg-pink-600 rounded-full 
                              flex items-center justify-center text-lg sm:text-xl 
                              font-bold text-white shadow-md"
              >
                --
              </div>
              <span className="mt-2 text-xs sm:text-sm text-pink-800">
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
          className="bg-pink-600 text-white font-medium py-2 px-6 rounded-full shadow-md hover:bg-pink-700 transition"
        >
          📌 Simpan ke Google Calendar
        </a>

        {/* Lokasi */}
        <p className="text-base sm:text-lg text-pink-700 italic mt-12 mb-1">
          at
        </p>
        <h3 className="text-lg sm:text-2xl font-bold text-pink-900 mb-6">
          PT. INTI (PERSERO)
        </h3>

        {/* Tombol Google Maps */}
        <a
          href="https://www.google.com/maps/place/PT.+INTI+(Persero)"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-600 text-white font-medium py-2 px-6 rounded-full shadow-md hover:bg-pink-700 transition"
        >
          📍 Buka Google Maps
        </a>
      </div>
    </div>
  );
}
