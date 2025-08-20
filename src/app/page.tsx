"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import HalamanDepan from "./components/halamandepan";
import HeroPage from "./components/hero";
import InformasiPage from "./components/informasi";
import UcapanPage from "./components/ucapan";
import NavbarBawah from "./components/navbar";
import CouplePage from "./components/couple";
import GiftPage from "./components/onlinegift";
import MusicPlayer from "./components/musicplayer"; // Impor komponen MusicPlayer
import AcaraPage from "./components/acara";

export default function Home() {
  const searchParams = useSearchParams();
  const to = searchParams.get("to");
  const namaTamu =
    typeof to === "string" ? decodeURIComponent(to) : "Tamu Undangan";

  const [undanganDibuka, setUndanganDibuka] = useState(false);

  const handleBukaUndangan = () => {
    setUndanganDibuka(true);

    // Alih-alih menggunakan event kustom, kita sekarang menggunakan state
    // untuk mengontrol MusicPlayer. Logika auto-play ada di dalam komponen MusicPlayer.

    // Scroll ke bagian "hero" setelah undangan dibuka
    setTimeout(() => {
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  if (!undanganDibuka) {
    return (
      <HalamanDepan namaTamu={namaTamu} onBukaUndangan={handleBukaUndangan} />
    );
  }

  return (
    <main className="scroll-smooth pb-24 relative">
      <section id="hero">
        <HeroPage />
      </section>
      <section id="acara" className="mt-8 px-4 sm:px-6 md:px-10 lg:px-16">
        <AcaraPage />
      </section>
      <section id="couple">
        <CouplePage />
      </section>
      <section id="gift">
        <GiftPage />
      </section>
      <section id="ucapan">
        <UcapanPage />
      </section>
      <section id="info">
        <InformasiPage />
      </section>
      <NavbarBawah />

      {/* Menampilkan komponen pemutar musik */}
      {/* Kita passing state 'undanganDibuka' untuk mengontrol auto-play */}
      <MusicPlayer startPlaying={undanganDibuka} />
    </main>
  );
}
