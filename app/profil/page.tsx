'use client';

import { useRouter } from 'next/navigation';
import { Home, BookOpen, User, LogOut } from 'lucide-react';

export default function ProfilPage() {
  const router = useRouter();

  const menu = [
    { name: 'Dashboard', icon: <Home className="w-5 h-5" />, path: '/dashboard' },
    { name: 'E-Learning', icon: <BookOpen className="w-5 h-5" />, path: '/elearning' },
    { name: 'Profil Saya', icon: <User className="w-5 h-5" />, path: '/profil' },
  ];

  // Contoh data user (bisa dihubungkan dengan backend nanti)
  const user = {
    nama: 'Izharuddin Malik',
    email: 'izharuddin@example.com',
    role: 'Peserta Bimbel ASN',
    foto: 'https://randomuser.me/api/portraits/men/45.jpg',
    tanggalDaftar: '12 Oktober 2025',
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white text-[#269DD8] flex flex-col p-4 shadow-lg">
        <h1 className="text-2xl font-bold text-[#269DD8]">
          Bimbel<span className="text-[#DE1D5E]">ASN</span>
        </h1>
        <nav className="flex flex-col gap-3 mt-4">
          {menu.map((item) => (
            <button
              key={item.name}
              onClick={() => router.push(item.path)}
              className={`flex items-center gap-3 p-2 rounded-lg transition ${
                item.path === '/profil'
                  ? 'bg-[#DE1D5E] text-white'
                  : 'hover:bg-[#DE1D5E] hover:text-white'
              }`}
            >
              {item.icon}
              {item.name}
            </button>
          ))}
        </nav>

        <div className="mt-auto">
          <button
            className="flex items-center gap-2 text-sm hover:text-blue-300"
            onClick={() => router.push('/login')}
          >
            <LogOut className="w-4 h-4" /> Keluar
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col h-screen bg-white flex-1">
        <main className="flex-1 p-8 bg-gray-50 overflow-y-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-600">Profil Saya</h1>

          <div className="bg-white shadow rounded-2xl p-8 flex flex-col md:flex-row gap-8">
            {/* Foto Profil */}
            <div className="flex flex-col items-center md:w-1/3">
              <img
                src={user.foto}
                alt="Foto Profil"
                className="w-40 h-40 rounded-full shadow-md object-cover"
              />
              <h2 className="text-xl font-semibold mt-4 text-gray-700">{user.nama}</h2>
              <p className="text-gray-500 text-sm">{user.role}</p>
            </div>

            {/* Informasi Profil */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-[#269DD8] mb-4">
                Informasi Pribadi
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500">Nama Lengkap</p>
                  <p className="text-gray-800 font-medium">{user.nama}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-800 font-medium">{user.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Tanggal Daftar</p>
                  <p className="text-gray-800 font-medium">{user.tanggalDaftar}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status Akun</p>
                  <span className="px-3 py-1 text-sm font-medium bg-green-100 text-green-700 rounded-full">
                    Aktif
                  </span>
                </div>
              </div>

              {/* Tombol Edit Profil */}
              <div className="mt-8">
                <button onClick={(() => router.push('/profil/edit'))} className="bg-[#269DD8] hover:bg-[#269DD8BB] text-white px-6 py-2 rounded-lg font-semibold">
                  Edit Profil
                </button>
              </div>
            </div>
          </div>

          {/* Riwayat Belajar */}
          <div className="mt-10 bg-white shadow rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-[#269DD8] mb-4">
              Riwayat Belajar
            </h3>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b text-gray-600">
                  <th className="py-3">Modul</th>
                  <th className="py-3">Tanggal Dikerjakan</th>
                  <th className="py-3">Skor</th>
                  <th className="py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 text-gray-600">TWK - Latihan 1</td>
                  <td className="text-gray-600">20 Oktober 2025</td>
                  <td className="text-gray-600">85</td>
                  <td>
                    <span className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">
                      Lulus
                    </span>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 text-gray-600">TIU - Latihan 2</td>
                  <td className="text-gray-600">21 Oktober 2025</td>
                  <td className="text-gray-600">70</td>
                  <td>
                    <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded-full">
                      Ulangi
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white py-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()}{' '}
          <span className="text-[#269DD8] font-semibold">
            Bimbel<span className="text-[#DE1D5E]">ASN</span>
          </span>
          . Semua Hak Dilindungi.
        </footer>
      </div>
    </div>
  );
}