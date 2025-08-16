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
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      {/* Wrapper dengan ratio Instagram Story */}
      <div
        className="w-full max-w-[430px] aspect-[9/16] flex flex-col items-center justify-start text-center bg-no-repeat bg-cover bg-center rounded-xl shadow-xl overflow-hidden"
        style={{
          backgroundImage: "url('/bgbunga.png')", // pastikan file bg.png ada di /public
        }}
      >
        {/* Overlay agar teks tetap jelas */}
        <div className="flex flex-col flex-1 w-full h-full bg-white/70 overflow-y-auto px-6 py-10">
          <div className="max-w-md mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            {/* Mempelai Wanita */}
            <div>
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
              <h2 className="text-xl font-bold text-gray-800">{bride.name}</h2>
              <p className="text-sm text-gray-600">{bride.description}</p>
            </div>

            {/* Separator */}
            <div className="flex flex-col items-center justify-center my-6 md:my-0">
              <span className="h-px w-12 bg-gray-300 mb-2 md:hidden"></span>
              <span className="text-gray-500 font-medium text-lg">AND</span>
              <span className="h-px w-12 bg-gray-300 mt-2 md:hidden"></span>
            </div>

            {/* Mempelai Pria */}
            <div>
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
              <h2 className="text-xl font-bold text-gray-800">{groom.name}</h2>
              <p className="text-sm text-gray-600">{groom.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
