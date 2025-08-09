// app/api/ucapan/route.ts

import { NextResponse } from "next/server";

interface Ucapan {
  id: number;
  nama: string;
  pesan: string;
  waktu: string; // ISO format
}

// Penyimpanan sementara di memory (akan reset jika server restart)
let ucapanList: Ucapan[] = [];

// GET: ambil semua ucapan
export async function GET() {
  return NextResponse.json(ucapanList);
}

// POST: simpan ucapan baru
export async function POST(req: Request) {
  const body = await req.json();
  const { nama, pesan } = body;

  if (!nama || !pesan) {
    return NextResponse.json(
      { error: "Nama dan pesan wajib diisi" },
      { status: 400 }
    );
  }

  const newUcapan: Ucapan = {
    id: Date.now(),
    nama,
    pesan,
    waktu: new Date().toISOString(),
  };

  ucapanList.unshift(newUcapan); // masukkan ke atas
  return NextResponse.json(newUcapan);
}
