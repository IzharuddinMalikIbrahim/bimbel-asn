'use client';

import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function MateriBacaPage() {
  const router = useRouter();
  const params = useParams();

  // Contoh data materi (nanti bisa diganti dari API)
  const materi = {
    id: params.id,
    judul: 'Wawasan Kebangsaan dan Pancasila',
    konten: `
      <p>Pancasila merupakan dasar negara Indonesia yang terdiri dari lima sila.</p>
      <ul class="list-disc ml-6">
        <li>Ketuhanan Yang Maha Esa</li>
        <li>Kemanusiaan yang adil dan beradab</li>
        <li>Persatuan Indonesia</li>
        <li>Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan</li>
        <li>Keadilan sosial bagi seluruh rakyat Indonesia</li>
      </ul>
      <p class="mt-4">Materi ini penting untuk dipahami dalam konteks nilai-nilai dasar ASN.</p>
    `,
  };

  return (
    <div className="min-h-screen bg-gray-50">
        <header className="flex items-center justify-between p-6 bg-white shadow">
            <button
                onClick={() => router.push('/elearning/twk')}
                className="flex items-center text-[#269DD8] hover:text-[#DE1D5E] transition"
            >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Kembali ke Modul TWK
            </button>
            <h1 className="text-lg font-semibold text-gray-600">
               <span className="text-[#269DD8] font-semibold">
                    Bimbel<span className="text-[#DE1D5E]">ASN</span>
                </span>
            </h1>
        </header>

        <main className="max-w-3xl mx-auto py-10 px-6 bg-white mt-6 rounded-2xl shadow">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">{materi.judul}</h2>
            <div
                className="prose prose-gray text-gray-600"
                dangerouslySetInnerHTML={{ __html: materi.konten }}
            />
        </main>

        <footer className="py-6 text-center text-gray-400 text-sm">
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
