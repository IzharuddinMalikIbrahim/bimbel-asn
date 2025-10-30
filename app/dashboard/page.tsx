'use client';

import { useRouter } from 'next/navigation';
import { Home, BookOpen, User, LogOut } from 'lucide-react';

export default function DashboardPage() {
  const router = useRouter();

  const menu = [
    { name: 'Dashboard', icon: <Home className="w-5 h-5" />, path: '/dashboard' },
    { name: 'E-Learning', icon: <BookOpen className="w-5 h-5" />, path: '/elearning' },
    { name: 'Profil Saya', icon: <User className="w-5 h-5" />, path: '/profil' },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white text-[#269DD8] flex flex-col p-4 shadow shadow-gray-300/50">
        <h1 className="text-2xl font-bold text-[#269DD8]">Bimbel<span className="text-[#DE1D5E]">ASN</span></h1>
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
          <button className="flex items-center gap-2 text-sm hover:text-blue-300" onClick={() => router.push('/login')}>
            <LogOut className="w-4 h-4" /> Keluar
          </button>
        </div>
      </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col min-h-screen bg-white">
            <div className="flex-1 bg-gray-50 p-8 overflow-y-auto">
                <header className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-600">Selamat Datang, Calon ASN!</h1>
                <div className="flex items-center gap-3">
                    <img
                    src="https://randomuser.me/api/portraits/men/12.jpg"
                    className="w-10 h-10 rounded-full border-2 border-blue-600"
                    />
                    <span className="font-medium text-gray-600">Andi Saputra</span>
                </div>
                </header>

                <section>
                <h2 className="text-xl font-semibold mb-4 text-gray-600">Progress Belajar</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white shadow rounded-lg p-4">
                    <h3 className="font-semibold mb-2 text-gray-600">Tes Wawasan Kebangsaan</h3>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                        <div className="bg-blue-600 h-3 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                    <p className="text-sm text-gray-500">70% selesai</p>
                    </div>

                    <div className="bg-white shadow rounded-lg p-4">
                    <h3 className="font-semibold mb-2 text-gray-600">Tes Intelegensi Umum</h3>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                        <div className="bg-green-500 h-3 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                    <p className="text-sm text-gray-500">45% selesai</p>
                    </div>

                    <div className="bg-white shadow rounded-lg p-4">
                    <h3 className="font-semibold mb-2 text-gray-600">Tes Karakteristik Pribadi</h3>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                        <div className="bg-yellow-500 h-3 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <p className="text-sm text-gray-500">85% selesai</p>
                    </div>
                </div>
                </section>
            </div>

            {/* Footer di bawah */}
            <footer className="bg-white py-6 text-center text-gray-400 text-sm">
                <p>
                © {new Date().getFullYear()} <span className="text-[#269DD8] font-semibold">Bimbel<span className="text-[#DE1D5E]">ASN</span></span>.
                Semua Hak Dilindungi.
                </p>
            </footer>
        </main>
    </div>
  );
}
