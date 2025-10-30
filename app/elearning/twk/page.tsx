'use client';

import { useRouter } from 'next/navigation';
import { BookOpen, FileText, PlayCircle } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';

export default function ModulTWKPage() {
  const router = useRouter();

  const materi = [
    {
      title: 'Pancasila dan UUD 1945',
      desc: 'Pelajari nilai-nilai dasar Pancasila serta pasal-pasal penting dalam UUD 1945.',
    },
    {
      title: 'NKRI dan Bela Negara',
      desc: 'Pahami konsep Negara Kesatuan Republik Indonesia serta semangat bela negara.',
    },
    {
      title: 'Bhineka Tunggal Ika',
      desc: 'Mengenal semboyan persatuan Indonesia dan implementasinya dalam kehidupan berbangsa.',
    },
    {
      title: 'Sejarah Nasional Indonesia',
      desc: 'Pelajari perjalanan sejarah bangsa dari masa pra-kemerdekaan hingga reformasi.',
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-white">
        <header className="p-6 border-b flex items-center justify-between">
            <button
            onClick={() => router.push('/elearning')}
            className="flex items-center gap-2 text-[#269DD8] hover:text-[#DE1D5E] transition"
            >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Kembali ke E-Learning</span>
            </button>
        </header>
        {/* Main Content */}
        <main className="flex-1 bg-gray-50 p-8 overflow-y-auto">
            <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-7 h-7 text-[#269DD8]" />
                <h1 className="text-3xl font-bold text-gray-700">Modul TWK</h1>
            </div>

            <p className="text-gray-600 mb-8">
                Tes Wawasan Kebangsaan (TWK) mengukur pengetahuan peserta tentang nasionalisme, integritas,
                dan wawasan kebangsaan Indonesia. Pilih materi di bawah untuk mulai belajar.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materi.map((item, index) => (
                <div
                    key={index}
                    className="bg-white shadow p-6 rounded-2xl hover:shadow-lg transition">
                    <h2 className="text-lg font-semibold mb-2 text-gray-700">{item.title}</h2>
                    <p className="text-gray-600 text-sm mb-4">{item.desc}</p>

                    <div className="flex gap-3">
                        <button
                        onClick={() => router.push(`/elearning/twk/materi/${index + 1}`)}
                        className="flex items-center gap-2 bg-[#269DD8] text-white px-4 py-2 rounded-lg hover:bg-[#269DD8CC] transition"
                        >
                        <FileText className="w-4 h-4" />
                        Materi
                        </button>
                        <button
                        onClick={() => router.push(`/elearning/twk/latihan/${index + 1}`)}
                        className="flex items-center gap-2 bg-[#DE1D5E] text-white px-4 py-2 rounded-lg hover:bg-[#DE1D5ECC] transition"
                        >
                        <PlayCircle className="w-4 h-4" />
                        Latihan Soal
                        </button>
                    </div>
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
  );
}
