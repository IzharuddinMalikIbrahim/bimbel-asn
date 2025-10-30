'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import { useState } from 'react';

export default function LatihanSoalPage({ params }: { params: { id: string } }) {
  const router = useRouter();

  // Contoh data soal
  const soalData = [
    {
      id: 1,
      pertanyaan: 'Apa dasar negara Indonesia?',
      pilihan: ['UUD 1945', 'Proklamasi', 'Pancasila', 'Bhinneka Tunggal Ika'],
      jawaban: 'Pancasila',
    },
    {
      id: 2,
      pertanyaan: 'Siapa pencipta lagu Indonesia Raya?',
      pilihan: ['W.R. Supratman', 'Soekarno', 'Hatta', 'Ki Hajar Dewantara'],
      jawaban: 'W.R. Supratman',
    },
    {
      id: 3,
      pertanyaan: 'Tanggal berapa Indonesia merdeka?',
      pilihan: ['17 Agustus 1945', '10 November 1945', '1 Juni 1945', '1 Mei 1945'],
      jawaban: '17 Agustus 1945',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentSoal = soalData[currentIndex];

  const handleNext = () => {
    if (selectedAnswer) {
      if (selectedAnswer === currentSoal.jawaban) {
        setScore(score + 1);
      }

      if (currentIndex + 1 < soalData.length) {
        setCurrentIndex(currentIndex + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    } else {
      alert('Silakan pilih jawaban terlebih dahulu!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between p-6 bg-white shadow">
            <button
                onClick={() => router.push('/elearning/twk')}
                className="flex items-center text-[#269DD8] hover:text-[#DE1D5E] transition"
            >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Kembali ke Modul TWK
            </button>
            <h1 className="text-lg font-semibold text-gray-600">
                Latihan Soal TWK
            </h1>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex justify-center items-center p-6">
            <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8">
            {!showResult ? (
                <>
                    <div className="flex justify-between items-center mb-4 text-gray-500 text-sm">
                        <span>Soal {currentIndex + 1} dari {soalData.length}</span>
                        <span>Skor: {score}</span>
                    </div>

                    <h2 className="text-lg font-semibold text-gray-700 mb-4">
                        {currentSoal.pertanyaan}
                    </h2>

                    <div className="flex flex-col gap-3">
                        {currentSoal.pilihan.map((pilihan, i) => (
                        <button
                            key={i}
                            onClick={() => setSelectedAnswer(pilihan)}
                            className={`p-3 border rounded-lg text-left transition text-gray-600 ${
                            selectedAnswer === pilihan
                                ? 'bg-[#269DD8] text-white border-[#269DD8]'
                                : 'hover:bg-gray-100 border-gray-300'
                            }`}
                        >
                            {pilihan}
                        </button>
                        ))}
                    </div>

                    <button
                        onClick={handleNext}
                        className="w-full mt-6 py-2 bg-[#DE1D5E] hover:bg-[#DE1D5EBB] text-white font-semibold rounded-lg"
                    >
                        {currentIndex + 1 < soalData.length ? 'Soal Selanjutnya' : 'Selesai'}
                    </button>
                </>
            ) : (
                <div className="text-center">
                    {score >= soalData.length / 2 ? (
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    ) : (
                        <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                    )}
                    <h2 className="text-2xl font-bold mb-2 text-gray-700">Hasil Latihan</h2>
                    <p className="text-gray-600 mb-6">
                        Kamu menjawab {score} dari {soalData.length} soal dengan benar.
                    </p>

                    <button
                        onClick={() => router.push('/elearning/twk')}
                        className="bg-[#269DD8] hover:bg-[#269DD8BB] text-white px-6 py-2 rounded-lg"
                    >
                        Kembali ke Modul TWK
                    </button>
                </div>
            )}
            </div>
        </main>

        {/* Footer */}
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
