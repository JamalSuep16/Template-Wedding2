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
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-200 flex flex-col">
      {/* Header ucapan selamat */}
      <header className="flex flex-col items-center text-center pt-10 px-4 flex-1">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mb-6">
          <Image
            src={"/pengantin.svg"}
            alt="Foto Pengantin"
            width={500}
            height={500}
            className="rounded-xl w-full object-cover shadow-lg border-4 border-white"
            priority
          />
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Selamat Datang, <span className="text-pink-600">{namaTamu}!</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-lg leading-relaxed">
          Terima kasih telah hadir di undangan pernikahan kami. Kehadiran Anda
          adalah kebahagiaan bagi kami.
        </p>
      </header>

      {/* Section Acara */}
      <section id="acara" className="mt-10 px-4">
        <AcaraPage />
      </section>

      {/* Navbar bawah */}
      <NavbarBawah />
    </div>
  );
}
