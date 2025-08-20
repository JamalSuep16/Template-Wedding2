"use client";

import { useSearchParams } from "next/navigation";
import NavbarBawah from "./navbar";
import Image from "next/image";

export default function OpeningPage() {
  const searchParams = useSearchParams();
  const to = searchParams.get("to");
  const namaTamu =
    typeof to === "string" ? decodeURIComponent(to) : "Tamu Undangan";

  return (
    <div
      className="min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: "url('/bgbunga.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay (hapus kalau mau bunga full) */}
      <div className="w-full min-h-screen bg-white/70 flex justify-center items-center">
        <div className="w-full max-w-md flex flex-col items-center text-center px-4">
          {/* Foto Pengantin */}
          <Image
            src={"/pengantin.svg"}
            alt="Foto Pengantin"
            width={500}
            height={500}
            className="rounded-xl w-full object-cover shadow-lg border-4 border-white"
          />
          <h1 className="text-2xl font-bold text-gray-800 mt-6">
            Selamat Datang, <span className="text-pink-600">{namaTamu}!</span>
          </h1>
          <p className="text-gray-600 text-base mt-2">
            Terima kasih telah hadir di undangan pernikahan kami. Kehadiran Anda
            adalah kebahagiaan bagi kami.
          </p>

          {/* Navbar bawah */}
          <NavbarBawah />
        </div>
      </div>
    </div>
  );
}
