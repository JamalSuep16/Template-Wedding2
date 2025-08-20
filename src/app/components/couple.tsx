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
    <div
      className="w-full min-h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/bgbunga.png')", // file di folder public
      }}
    >
      {/* Overlay agar teks tetap terbaca */}
      <div className="flex flex-col md:flex-row w-full h-full bg-white/70 px-6 py-10 md:px-16 md:py-12 gap-10">
        {/* Mempelai Wanita */}
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="mx-auto w-40 h-40 sm:w-48 sm:h-48 relative overflow-hidden rounded-full border-4 border-white shadow-lg">
            <Image
              src={bride.image}
              alt={bride.name}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="mt-3 text-base italic text-gray-500">
            {bride.shortName}
          </h3>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            {bride.name}
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            {bride.description}
          </p>
        </div>

        {/* Separator */}
        <div className="flex flex-col items-center justify-center my-6 md:my-0 md:px-6">
          <span className="h-px w-12 bg-gray-300 mb-2"></span>
          <span className="text-gray-500 font-medium text-lg md:text-xl">
            AND
          </span>
          <span className="h-px w-12 bg-gray-300 mt-2"></span>
        </div>

        {/* Mempelai Pria */}
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="mx-auto w-40 h-40 sm:w-48 sm:h-48 relative overflow-hidden rounded-full border-4 border-white shadow-lg">
            <Image
              src={groom.image}
              alt={groom.name}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="mt-3 text-base italic text-gray-500">
            {groom.shortName}
          </h3>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            {groom.name}
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            {groom.description}
          </p>
        </div>
      </div>
    </div>
  );
}
