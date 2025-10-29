export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-gray-950/70 backdrop-blur border-b border-gray-800 sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-blue-500">BimbelASN</h1>
        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="hover:text-blue-400">Fitur</a>
          <a href="#testimoni" className="hover:text-blue-400">Testimoni</a>
          <a href="#pricing" className="hover:text-blue-400">Paket</a>
          <a href="#contact" className="hover:text-blue-400">Kontak</a>
        </div>
        <a
          href="/login"
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold"
        >
          Daftar Sekarang
        </a>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Kuasai <span className="text-blue-500">Materi ASN</span> dengan Mudah dan Terarah!
          </h2>
          <p className="text-gray-300 text-lg">
            Persiapkan diri menghadapi seleksi ASN dengan metode belajar efektif, 
            latihan soal terbaru, dan bimbingan dari mentor berpengalaman.
            100% sesuai dengan ujian resmi ASN.
          </p>
          <div className="flex gap-4">
            <a
              href="/login"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold"
            >
              Mulai Belajar Sekarang
            </a>
            <a
              href="#features"
              className="border border-gray-600 hover:border-blue-500 hover:text-blue-400 px-6 py-3 rounded-lg font-semibold"
            >
              Lihat Fitur
            </a>
          </div>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="https://illustrations.popsy.co/white/study.svg"
            alt="Belajar ASN"
            className="w-full"
          />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-10 md:px-20 py-20 bg-gray-800">
        <h3 className="text-3xl font-bold mb-10 text-center">Fitur Unggulan</h3>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="p-6 bg-gray-900 rounded-2xl border border-gray-700">
            <h4 className="text-xl font-semibold mb-3">Materi Terupdate</h4>
            <p className="text-gray-400">
              Materi disesuaikan dengan kisi-kisi resmi seleksi ASN terbaru.
            </p>
          </div>
          <div className="p-6 bg-gray-900 rounded-2xl border border-gray-700">
            <h4 className="text-xl font-semibold mb-3">Latihan Soal Interaktif</h4>
            <p className="text-gray-400">
              Puluhan ribu soal latihan lengkap dengan pembahasan terperinci.
            </p>
          </div>
          <div className="p-6 bg-gray-900 rounded-2xl border border-gray-700">
            <h4 className="text-xl font-semibold mb-3">Simulasi CAT Online</h4>
            <p className="text-gray-400">
              Rasakan pengalaman ujian seperti tes ASN sesungguhnya.
            </p>
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section id="testimoni" className="px-10 md:px-20 py-20">
        <h3 className="text-3xl font-bold mb-10 text-center">Apa Kata Peserta Kami</h3>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              nama: "Andi Pratama",
              text: "Soal dan pembahasan sangat membantu! Saya lolos CPNS 2024 berkat BimbelASN.",
            },
            {
              nama: "Siti Nurhaliza",
              text: "Sistemnya mudah dipahami dan bisa diakses dari HP. Sangat worth it!",
            },
            {
              nama: "Budi Santoso",
              text: "Simulasi CAT-nya mirip banget dengan ujian asli. Bikin lebih siap mental!",
            },
          ].map((t, i) => (
            <div key={i} className="p-6 bg-gray-800 rounded-2xl border border-gray-700">
              <p className="text-gray-300 mb-4">“{t.text}”</p>
              <p className="font-semibold text-blue-400">— {t.nama}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-10 md:px-20 py-20 bg-gray-800">
        <h3 className="text-3xl font-bold mb-10 text-center">Paket Belajar</h3>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            { nama: "Basic", harga: "Rp99.000", fitur: ["Materi dasar ASN", "Latihan soal 500+", "Akses 30 hari"] },
            { nama: "Pro", harga: "Rp199.000", fitur: ["Semua materi ASN", "Soal 2.000+", "Akses 90 hari", "Simulasi CAT"] },
            { nama: "Premium", harga: "Rp299.000", fitur: ["Semua fitur Pro", "Kelas Live", "Mentor 1-on-1", "Akses 1 tahun"] },
          ].map((p, i) => (
            <div key={i} className="p-8 bg-gray-900 rounded-2xl border border-gray-700 hover:border-blue-500 transition">
              <h4 className="text-xl font-bold mb-2">{p.nama}</h4>
              <p className="text-3xl font-extrabold text-blue-500 mb-6">{p.harga}</p>
              <ul className="space-y-2 text-gray-300 mb-6">
                {p.fitur.map((f, j) => (
                  <li key={j}>✅ {f}</li>
                ))}
              </ul>
              <a
                href="#daftar"
                className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold"
              >
                Pilih Paket
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-950 py-10 text-center text-gray-400 text-sm border-t border-gray-800">
        <p>
          © {new Date().getFullYear()} <span className="text-blue-400 font-semibold">BimbelASN</span>. 
          Semua Hak Dilindungi.
        </p>
      </footer>
    </div>
  );
}
