"use client";

import Image from "next/image";

interface CoupleData {
  name: string;
  shortName: string;
  description: string;
  image: string;
}

const bride: CoupleData = {
  shortName: "Momo",
  name: "Momo Heung su",
  description: "Putri kedua dari Bapak Wiranto & Ibu Sunarni",
  image: "/wanita.svg", // ganti dengan path foto mempelai wanita
};

const groom: CoupleData = {
  shortName: "Son",
  name: "Son Heung Min",
  description: "Putra pertama dari Bapak Suyanto & Ibu Siti Aminah",
  image: "/pria.svg", // ganti dengan path foto mempelai pria
};

export default function CouplePage() {
  return (
    <section className="px-6 py-12 bg-[#fafafa] text-center">
      {/* Mempelai Wanita */}
      <div className="mb-8">
        <div className="mx-auto w-40 h-40 relative overflow-hidden rounded-lg border-4 border-white shadow-lg">
          <Image
            src={bride.image}
            alt={bride.name}
            fill
            className="object-cover"
          />
        </div>
        <h3 className="mt-4 text-lg italic text-gray-500">{bride.shortName}</h3>
        <h2 className="text-2xl font-bold text-gray-800">{bride.name}</h2>
        <p className="text-gray-600">{bride.description}</p>
      </div>

      {/* Separator AND */}
      <div className="flex items-center justify-center gap-4 my-6">
        <span className="h-px w-12 bg-gray-300"></span>
        <span className="text-gray-500 font-medium">AND</span>
        <span className="h-px w-12 bg-gray-300"></span>
      </div>

      {/* Mempelai Pria */}
      <div>
        <div className="mx-auto w-40 h-56 relative overflow-hidden rounded-2xl border-4 border-white shadow-lg">
          <Image
            src={groom.image}
            alt={groom.name}
            fill
            className="object-cover"
          />
        </div>
        <h3 className="mt-4 text-lg italic text-gray-500">{groom.shortName}</h3>
        <h2 className="text-2xl font-bold text-gray-800">{groom.name}</h2>
        <p className="text-gray-600">{groom.description}</p>
      </div>
    </section>
  );
}
