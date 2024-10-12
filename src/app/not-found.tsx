import Link from "next/link";
import React from "react";

const Notfound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-green-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-green-600">404</h1>
        <p className="mt-4 text-2xl text-green-800">
          Oops! Halaman tidak ditemukan.
        </p>
        <p className="mt-2 text-green-700">
          Kita tidak dapat menemukan halaman yang kamu cari.
        </p>
        <Link href="/" className="btn btn-primary mt-6">
          Kembali ke Beranda
        </Link>
      </div>
      <div className="absolute bottom-5 right-5 rounded-md bg-green-100 p-2 shadow-md">
        <p className="text-xs text-green-600">Mari jaga bumi kita bersama 🌱</p>
      </div>
    </div>
  );
};

export default Notfound;
