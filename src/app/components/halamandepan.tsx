"use client";

import Image from "next/image";

interface Props {
  namaTamu: string;
  onBukaUndangan: () => void;
}

export default function HalamanDepan({ namaTamu, onBukaUndangan }: Props) {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-neutral-800 to-black flex items-center justify-center px-4 py-10 sm:px-6 md:px-8 lg:px-10">
      <div className="bg-neutral-200 rounded-[32px] p-4 sm:p-6 md:p-8 w-full max-w-md text-center shadow-2xl relative overflow-hidden">
        {/* Foto Pengantin */}
        <div className="rounded-t-[32px] overflow-hidden border-[4px] border-neutral-400 mb-4">
          <Image
            src="/pengantin.svg"
            alt="Foto Pengantin"
            width={500}
            height={500}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        <p className="text-gray-500 text-xs sm:text-sm tracking-wide mb-1">
          The Wedding Of
        </p>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
          LUCKY & CHIKA
        </h1>

        <p className="text-xs sm:text-sm text-gray-600 leading-tight">
          Kepada Yth. <br />
          Bapak/Ibu/Saudara/i
        </p>
        <p className="text-lg sm:text-xl font-medium text-gray-800 mt-1 break-words">
          {namaTamu}
        </p>

        {/* Tombol Aksi */}
        <button
          onClick={onBukaUndangan}
          className="bg-gradient-to-b from-neutral-600 to-black text-white px-5 py-2.5 mt-5 rounded-md flex items-center justify-center mx-auto hover:scale-105 transition-transform duration-200 text-sm sm:text-base"
        >
          <span className="mr-2">📩</span> Buka Undangan
        </button>
      </div>
    </div>
  );
}
