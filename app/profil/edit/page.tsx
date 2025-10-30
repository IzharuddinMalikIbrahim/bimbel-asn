'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function EditProfilePage() {
  const router = useRouter();

  // Contoh data profil (bisa diganti dari API)
  const [profile, setProfile] = useState({
    nama: 'Izharuddin Malik',
    email: 'izhar@example.com',
    noHp: '081234567890',
    instansi: 'Universitas Mercu Buana Yogyakarta',
    jabatan: 'Mahasiswa',
    foto: 'https://randomuser.me/api/portraits/men/45.jpg', // default
  });

  const [preview, setPreview] = useState<string | null>(profile.foto);

  // Handle perubahan input teks
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Handle upload foto profil
  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      setProfile({ ...profile, foto: file.name }); // nanti bisa kirim ke API
    }
  };

  // Simulasi submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Profil berhasil diperbarui!');
    router.push('/profil');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#269DD8] text-white p-4 shadow-md flex items-center justify-between">
        <h1 className="text-xl font-semibold">Edit Profil</h1>
        <button
          onClick={() => router.push('/profil')}
          className="bg-white text-[#269DD8] px-3 py-1 rounded-lg text-sm font-medium hover:bg-gray-100"
        >
          ← Kembali
        </button>
      </header>

      {/* Form Edit */}
      <main className="flex-1 flex justify-center items-start p-8">
        <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Perbarui Data Diri
          </h2>

          {/* Foto Profil */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative">
              <img
                src={preview || 'https://randomuser.me/api/portraits/men/45.jpg'}
                alt="Foto Profil"
                className="w-32 h-32 rounded-full object-cover border-4 border-[#269DD8] shadow-md"
              />
              <label
                htmlFor="foto"
                className="absolute bottom-0 right-0 bg-[#DE1D5E] text-white text-xs px-2 py-1 rounded-md cursor-pointer hover:bg-[#de1d5ebd] transition"
              >
                Ganti
              </label>
              <input
                id="foto"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFotoChange}
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">Format: JPG/PNG (max 2MB)</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Nama Lengkap
              </label>
              <input
                type="text"
                name="nama"
                value={profile.nama}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-600 focus:ring-2 focus:ring-[#269DD8] focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-600 focus:ring-2 focus:ring-[#269DD8] focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Nomor HP
              </label>
              <input
                type="text"
                name="noHp"
                value={profile.noHp}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-600 focus:ring-2 focus:ring-[#269DD8] focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Instansi
              </label>
              <input
                type="text"
                name="instansi"
                value={profile.instansi}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-600 focus:ring-2 focus:ring-[#269DD8] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Jabatan
              </label>
              <input
                type="text"
                name="jabatan"
                value={profile.jabatan}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-600 focus:ring-2 focus:ring-[#269DD8] focus:outline-none"
              />
            </div>

            <div className="pt-4 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => router.push('/profil')}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[#269DD8] text-white rounded-lg hover:bg-[#218bbf]"
              >
                Simpan Perubahan
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-6 text-center text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()}{' '}
          <span className="text-[#269DD8] font-semibold">
            Bimbel<span className="text-[#DE1D5E]">ASN</span>
          </span>
          . Semua Hak Dilindungi.
        </p>
      </footer>
    </div>
  );
}
