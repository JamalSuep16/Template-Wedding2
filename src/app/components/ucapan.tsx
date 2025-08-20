"use client";

import { useState, useEffect } from "react";
import { formatDistance } from "date-fns";
import { id as localeID } from "date-fns/locale";
import { v4 as uuidv4 } from "uuid";

interface Ucapan {
  error: string;
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
  const [editId, setEditId] = useState<number | null>(null);

  useEffect(() => {
    if (!localStorage.getItem("ucapanToken")) {
      localStorage.setItem("ucapanToken", uuidv4());
    }
  }, []);

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

    const token = localStorage.getItem("ucapanToken");

    if (editId) {
      await handleUpdate(editId, pesan, token!);
      return;
    }

    try {
      const res = await fetch("/api/ucapan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nama: nama.trim(), pesan: pesan.trim(), token }),
      });

      const data: Ucapan = await res.json();
      if (!res.ok) {
        alert(data.error || "Gagal mengirim ucapan");
        return;
      }

      setUcapanList((prev) => [data, ...prev]);
      setNama("");
      setPesan("");
    } catch (err) {
      console.error("Gagal mengirim ucapan:", err);
    }
  };

  const handleUpdate = async (id: number, pesanBaru: string, token: string) => {
    try {
      const res = await fetch("/api/ucapan", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, pesan: pesanBaru, token }),
      });

      const data: Ucapan = await res.json();
      if (!res.ok) {
        alert(data.error || "Gagal update ucapan");
        return;
      }

      setUcapanList((prev) => prev.map((u) => (u.id === id ? data : u)));
      setEditId(null);
      setPesan("");
      setNama("");
    } catch (err) {
      console.error("Gagal update ucapan:", err);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Yakin mau hapus ucapan ini?")) return;

    const token = localStorage.getItem("ucapanToken");

    try {
      const res = await fetch("/api/ucapan", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, token }),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.error || "Gagal menghapus ucapan");
        return;
      }

      setUcapanList((prev) => prev.filter((u) => u.id !== id));
    } catch (err) {
      console.error("Gagal menghapus ucapan:", err);
    }
  };

  const startEdit = (ucapan: Ucapan) => {
    setEditId(ucapan.id);
    setNama(ucapan.nama);
    setPesan(ucapan.pesan);
  };

  return (
    <section
      id="ucapan"
      className="px-4 py-12 min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/bgbunga.png')" }}
    >
      {/* Overlay putih transparan */}
      <div className="absolute inset-0 bg-white/80"></div>

      {/* Konten */}
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-pink-700 text-center">
          💌 Ucapan
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 mb-8 bg-white p-6 rounded-lg shadow-md"
        >
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Nama kamu"
            className="w-full border border-pink-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            disabled={!!editId}
          />
          <textarea
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
            placeholder="Tulis ucapan..."
            className="w-full border border-pink-300 px-4 py-2 rounded resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
            rows={4}
          />
          <button
            type="submit"
            className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 w-full transition"
          >
            {editId ? "Simpan Perubahan" : "Kirim Ucapan"}
          </button>
          {editId && (
            <button
              type="button"
              onClick={() => {
                setEditId(null);
                setPesan("");
                setNama("");
              }}
              className="bg-gray-400 text-white px-4 py-2 rounded w-full mt-2 hover:bg-gray-500"
            >
              Batal Edit
            </button>
          )}
        </form>

        {/* List */}
        <div className="space-y-4">
          {loading ? (
            <p className="text-gray-500 text-center">Memuat ucapan...</p>
          ) : ucapanList.length === 0 ? (
            <p className="text-gray-500 text-center">Belum ada ucapan 😢</p>
          ) : (
            ucapanList.map((ucapan) => (
              <div
                key={ucapan.id}
                className="bg-white rounded-lg p-4 flex flex-col sm:flex-row sm:items-start sm:space-x-3 shadow-md"
              >
                <div className="bg-pink-500 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold uppercase mb-2 sm:mb-0">
                  {ucapan.nama.charAt(0)}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-pink-700">{ucapan.nama}</p>
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
                <div className="flex flex-row sm:flex-col sm:space-y-1 mt-2 sm:mt-0 space-x-2 sm:space-x-0">
                  <button
                    onClick={() => startEdit(ucapan)}
                    className="text-blue-500 text-sm hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(ucapan.id)}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
