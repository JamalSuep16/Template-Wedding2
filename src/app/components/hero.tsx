"use client";

import { useSearchParams } from "next/navigation";
import NavbarBawah from "./navbar";
import AcaraPage from "./acara"; // Acara (dengan id="acara")
import Image from "next/image";

export default function OpeningPage() {
  const searchParams = useSearchParams();
  const to = searchParams.get("to");
  const namaTamu =
    typeof to === "string" ? decodeURIComponent(to) : "Tamu Undangan";

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header ucapan selamat */}
      <div className="flex flex-col items-center text-center pt-10 px-4">
        <div className="w-full max-w-sm mb-6">
          <Image
            src={"/pengantin.svg"}
            alt="Foto Pengantin"
            width={500}
            height={500}
            className="rounded-xl w-full object-cover shadow-md"
          />
        </div>

        <h1 className="text-3xl font-bold mb-2">Selamat Datang, {namaTamu}!</h1>
        <p className="text-lg text-gray-600 mb-10">
          Terima kasih telah hadir di undangan pernikahan kami.
        </p>
      </div>

      {/* Section Acara */}
      <section id="acara">
        <AcaraPage />
      </section>

      {/* Navbar bawah */}
      <NavbarBawah />
    </div>
  );
}
