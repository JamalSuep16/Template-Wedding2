"use client";

import { useSearchParams } from "next/navigation";
import NavbarBawah from "./navbar";
import AcaraPage from "./acara";
import Image from "next/image";

export default function OpeningPage() {
  const searchParams = useSearchParams();
  const to = searchParams.get("to");
  const namaTamu =
    typeof to === "string" ? decodeURIComponent(to) : "Tamu Undangan";

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      {/* Wrapper dengan ratio Instagram Story */}
      <div
        className="w-full max-w-[430px] aspect-[9/16] flex flex-col bg-no-repeat bg-cover bg-center rounded-xl shadow-xl overflow-hidden"
        style={{
          backgroundImage: "url('/bgbunga.png')", // ganti sesuai nama file di /public
        }}
      >
        {/* Overlay agar teks tetap jelas */}
        <div className="flex flex-col flex-1 bg-white/70 overflow-y-auto">
          {/* Header ucapan selamat */}
          <header className="flex flex-col items-center text-center pt-6 px-4 sm:px-6 flex-1">
            <div className="w-full max-w-xs sm:max-w-sm mb-4">
              <Image
                src={"/pengantin.svg"}
                alt="Foto Pengantin"
                width={500}
                height={500}
                className="rounded-xl w-full object-cover shadow-lg border-4 border-white"
                priority
              />
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Selamat Datang, <span className="text-pink-600">{namaTamu}!</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-600 max-w-sm leading-relaxed">
              Terima kasih telah hadir di undangan pernikahan kami. Kehadiran
              Anda adalah kebahagiaan bagi kami.
            </p>
          </header>

          {/* Section Acara */}
          <section id="acara" className="mt-6 px-4 sm:px-6">
            <AcaraPage />
          </section>

          {/* Navbar bawah */}
          <NavbarBawah />
        </div>
      </div>
    </div>
  );
}
