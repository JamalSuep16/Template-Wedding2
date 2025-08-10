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
  image: "/wanita.svg",
};

const groom: CoupleData = {
  shortName: "Son",
  name: "Son Heung Min",
  description: "Putra pertama dari Bapak Suyanto & Ibu Siti Aminah",
  image: "/pria.svg",
};

export default function CouplePage() {
  return (
    <section className="px-6 py-12 bg-gradient-to-b from-white via-pink-50 to-pink-100 text-center">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        {/* Mempelai Wanita */}
        <div>
          <div className="mx-auto w-48 h-48 sm:w-60 sm:h-60 relative overflow-hidden rounded-full border-4 border-white shadow-lg">
            <Image
              src={bride.image}
              alt={bride.name}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="mt-4 text-lg italic text-gray-500">
            {bride.shortName}
          </h3>
          <h2 className="text-2xl font-bold text-gray-800">{bride.name}</h2>
          <p className="text-gray-600">{bride.description}</p>
        </div>

        {/* Separator */}
        <div className="flex flex-col items-center justify-center">
          <span className="h-px w-12 bg-gray-300 mb-2 md:hidden"></span>
          <span className="text-gray-500 font-medium text-lg">AND</span>
          <span className="h-px w-12 bg-gray-300 mt-2 md:hidden"></span>
        </div>

        {/* Mempelai Pria */}
        <div>
          <div className="mx-auto w-48 h-48 sm:w-60 sm:h-60 relative overflow-hidden rounded-full border-4 border-white shadow-lg">
            <Image
              src={groom.image}
              alt={groom.name}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="mt-4 text-lg italic text-gray-500">
            {groom.shortName}
          </h3>
          <h2 className="text-2xl font-bold text-gray-800">{groom.name}</h2>
          <p className="text-gray-600">{groom.description}</p>
        </div>
      </div>
    </section>
  );
}
