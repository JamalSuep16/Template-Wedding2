import { NextResponse } from "next/server";

interface Ucapan {
  id: number;
  nama: string;
  pesan: string;
  waktu: string;
  token: string;
}

let ucapanList: Ucapan[] = [];

// GET
export async function GET() {
  return NextResponse.json(ucapanList);
}

// POST
export async function POST(req: Request) {
  const { nama, pesan, token } = await req.json();

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

// PUT
export async function PUT(req: Request) {
  const { id, pesan, token } = await req.json();

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

// DELETE
export async function DELETE(req: Request) {
  let id: number;
  let token: string;

  try {
    const body = await req.json();
    id = body.id;
    token = body.token;
  } catch {
    return NextResponse.json(
      { error: "Format body tidak valid" },
      { status: 400 }
    );
  }

  const index = ucapanList.findIndex((u) => u.id === id);
  if (index === -1) {
    return NextResponse.json(
      { error: "Ucapan tidak ditemukan" },
      { status: 404 }
    );
  }

  if (ucapanList[index].token !== token) {
    return NextResponse.json(
      { error: "Tidak diizinkan menghapus ucapan ini" },
      { status: 403 }
    );
  }

  ucapanList.splice(index, 1);
  return NextResponse.json({ success: true });
}
