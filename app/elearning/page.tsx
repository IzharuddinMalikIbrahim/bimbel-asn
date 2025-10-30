'use client';

import { useRouter } from 'next/navigation';
import { Home, BookOpen, User, LogOut } from 'lucide-react';

export default function ELearningPage() {
  const router = useRouter();

  const menu = [
    { name: 'Dashboard', icon: <Home className="w-5 h-5" />, path: '/dashboard' },
    { name: 'E-Learning', icon: <BookOpen className="w-5 h-5" />, path: '/elearning' },
    { name: 'Profil Saya', icon: <User className="w-5 h-5" />, path: '/profil' },
  ];

  // Modul E-Learning dengan path berbeda
  const modulList = [
    {
      name: 'TWK',
      desc: 'Pelajari materi dan latihan soal TWK untuk persiapan ujian ASN.',
      path: '/elearning/twk',
    },
    {
      name: 'TIU',
      desc: 'Asah kemampuan logika dan numerasi Anda di modul TIU.',
      path: '/elearning/tiu',
    },
    {
      name: 'TKP',
      desc: 'Pelajari karakteristik pribadi dan etika kerja ASN di modul TKP.',
      path: '/elearning/tkp',
    },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white text-[#269DD8] flex flex-col p-4 shadow shadow-gray-300/50">
        <h1 className="text-2xl font-bold text-[#269DD8]">
          Bimbel<span className="text-[#DE1D5E]">ASN</span>
        </h1>
        <nav className="flex flex-col gap-3 mt-4">
          {menu.map((item) => (
            <button
              key={item.name}
              onClick={() => router.push(item.path)}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#DE1D5E] hover:text-white transition"
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
        <main className="flex-1 bg-gray-50 p-8 overflow-y-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-600">E-Learning ASN</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {modulList.map((modul, i) => (
              <div
                key={i}
                className="bg-white shadow p-6 rounded-2xl hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold mb-2 text-gray-600">
                  Modul {modul.name}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{modul.desc}</p>
                <button
                  onClick={() => router.push(modul.path)}
                  className="bg-[#DE1D5E] text-white px-4 py-2 rounded-lg hover:bg-[#DE1D5EBB] transition"
                >
                  Mulai Belajar
                </button>
              </div>
            ))}
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
    </div>
  );
}
