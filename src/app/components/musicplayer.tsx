import React, { useState, useEffect, useRef } from "react";

// Mendefinisikan prop yang akan diterima komponen
interface MusicPlayerProps {
  startPlaying: boolean;
}

// Komponen utama yang sekarang menerima prop
export default function MusicPlayer({ startPlaying }: MusicPlayerProps) {
  // Gunakan useState untuk melacak status putar/jeda
  const [isPlaying, setIsPlaying] = useState(false);

  // Gunakan useRef untuk menyimpan elemen Audio agar tidak dibuat ulang
  // setiap kali komponen dirender
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // useEffect untuk menginisialisasi elemen audio saat komponen dimuat
  useEffect(() => {
    // Ganti URL ini dengan URL file audio Anda sendiri.
    // Contoh: '/music/contoh-lagu.mp3'
    audioRef.current = new Audio("/musicdj.webm");

    // Membersihkan elemen audio saat komponen di-unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // useEffect baru untuk menangani auto-play saat undangan dibuka
  useEffect(() => {
    if (startPlaying && audioRef.current && !isPlaying) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.warn(
            "Auto-play diblokir oleh browser. Silakan klik tombol play.",
            error
          );
          // Jika auto-play diblokir, kita set state ke false agar ikon tetap play
          setIsPlaying(false);
        });
    }
  }, [startPlaying]);

  // Fungsi untuk memutar atau menjeda musik
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 rounded-r-lg shadow-lg z-50 transition-all duration-300 hover:w-20 w-12 flex items-center justify-center">
      <button
        onClick={togglePlayPause}
        className="p-2 text-gemini-blue bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gemini-blue focus:ring-opacity-50"
        aria-label={isPlaying ? "Jeda" : "Putar"}
      >
        {/* Ikon putar atau jeda. Menggunakan SVG untuk fleksibilitas. */}
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5 0a1 1 0 012 0v4a1 1 0 11-2 0V8z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
