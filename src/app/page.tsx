// app/page.tsx
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import HalamanDepan from "./components/halamandepan";
import HeroPage from "./components/hero";
import InformasiPage from "./components/informasi";
import UcapanPage from "./components/ucapan";
import NavbarBawah from "./components/navbar";
import CouplePage from "./components/couple";

export default function Home() {
  const searchParams = useSearchParams();
  const to = searchParams.get("to");
  const namaTamu =
    typeof to === "string" ? decodeURIComponent(to) : "Tamu Undangan";

  const [undanganDibuka, setUndanganDibuka] = useState(false);

  const handleBukaUndangan = () => {
    setUndanganDibuka(true);
    setTimeout(() => {
      const acaraSection = document.getElementById("beranda");
      acaraSection?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  if (!undanganDibuka) {
    return (
      <HalamanDepan namaTamu={namaTamu} onBukaUndangan={handleBukaUndangan} />
    );
  }

  return (
    <main className="scroll-smooth pb-24">
      <section id="hero">
        <HeroPage />
      </section>

      <section id="couple">
        <CouplePage />
      </section>

      <section id="ucapan">
        <UcapanPage />
      </section>

      <section id="info">
        <InformasiPage />
      </section>

      <NavbarBawah />
    </main>
  );
}
