"use client";

import { useState, useEffect } from "react";
import { formatDistance } from "date-fns";
import { id as localeID } from "date-fns/locale";

interface Ucapan {
  id: number;
  nama: string;
  pesan: string;
  waktu: string;
}

export default function UcapanPage() {
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");
  const [ucapanList, setUcapanList] = useState<Ucapan[]>([]);
  const [loading, setLoading] = useState(true);

  // Ambil data dari API saat mount
  useEffect(() => {
    const fetchUcapan = async () => {
      try {
        const res = await fetch("/api/ucapan");
        const data = await res.json();
        setUcapanList(data);
      } catch (err) {
        console.error("Gagal fetch ucapan:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUcapan();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nama.trim() || !pesan.trim()) return;

    const newUcapan = {
      nama: nama.trim(),
      pesan: pesan.trim(),
    };

    try {
      const res = await fetch("/api/ucapan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUcapan),
      });

      const data: Ucapan = await res.json();

      if (!res.ok) {
        console.error(data);
        return;
      }

      setUcapanList((prev) => [data, ...prev]); // tambahkan ke atas
      setNama("");
      setPesan("");
    } catch (err) {
      console.error("Gagal mengirim ucapan:", err);
    }
  };

  return (
    <section id="ucapan" className="px-4 py-12 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-purple-700 text-center">
        Ucapan
      </h2>

      {/* Form Ucapan */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Nama kamu"
          className="w-full border border-gray-300 px-4 py-2 rounded"
        />
        <textarea
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
          placeholder="Tulis ucapan untuk mempelai..."
          className="w-full border border-gray-300 px-4 py-2 rounded resize-none"
          rows={4}
        />
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 w-full"
        >
          Kirim Ucapan
        </button>
      </form>

      {/* Daftar Ucapan */}
      <div className="space-y-4">
        {loading ? (
          <p className="text-gray-500 text-center">Memuat ucapan...</p>
        ) : ucapanList.length === 0 ? (
          <p className="text-gray-500 text-center">Belum ada ucapan 😢</p>
        ) : (
          ucapanList.map((ucapan) => (
            <div
              key={ucapan.id}
              className="bg-gray-100 rounded-lg p-4 flex items-start space-x-3"
            >
              <div className="bg-purple-500 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold uppercase">
                {ucapan.nama.charAt(0)}
              </div>
              <div className="flex-1">
                <p className="font-semibold">{ucapan.nama}</p>
                <p className="text-gray-700 whitespace-pre-line">
                  {ucapan.pesan}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {formatDistance(new Date(ucapan.waktu), new Date(), {
                    addSuffix: true,
                    locale: localeID,
                  })}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
