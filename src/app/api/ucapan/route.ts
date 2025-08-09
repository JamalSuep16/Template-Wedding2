import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

interface Ucapan {
  id: number;
  nama: string;
  pesan: string;
  waktu: string; // ISO format
  token: string; // token untuk autentikasi pemilik
}

let ucapanList: Ucapan[] = [];

// GET: Ambil semua ucapan
export async function GET() {
  return NextResponse.json(ucapanList);
}

// POST: Tambah ucapan baru
export async function POST(req: Request) {
  const body = await req.json();
  const { nama, pesan, token } = body;

  if (!nama || !pesan || !token) {
    return NextResponse.json(
      { error: "Nama, pesan, dan token wajib diisi" },
      { status: 400 }
    );
  }

  const newUcapan: Ucapan = {
    id: Date.now(),
    nama,
    pesan,
    waktu: new Date().toISOString(),
    token,
  };

  ucapanList.unshift(newUcapan);
  return NextResponse.json(newUcapan);
}

// PUT: Edit ucapan
export async function PUT(req: Request) {
  const body = await req.json();
  const { id, pesan, token } = body;

  const ucapan = ucapanList.find((u) => u.id === id);
  if (!ucapan) {
    return NextResponse.json(
      { error: "Ucapan tidak ditemukan" },
      { status: 404 }
    );
  }

  if (ucapan.token !== token) {
    return NextResponse.json(
      { error: "Tidak diizinkan edit ucapan ini" },
      { status: 403 }
    );
  }

  ucapan.pesan = pesan;
  return NextResponse.json(ucapan);
}

// DELETE: Hapus ucapan
export async function DELETE(req: Request) {
  const { id, token } = await req.json();

  const ucapanIndex = ucapanList.findIndex((u) => u.id === id);
  if (ucapanIndex === -1) {
    return NextResponse.json(
      { error: "Ucapan tidak ditemukan" },
      { status: 404 }
    );
  }

  if (ucapanList[ucapanIndex].token !== token) {
    return NextResponse.json(
      { error: "Tidak diizinkan menghapus ucapan ini" },
      { status: 403 }
    );
  }

  ucapanList.splice(ucapanIndex, 1);
  return NextResponse.json({ success: true });
}
