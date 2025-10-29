export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white backdrop-blur sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-[#269DD8]">Bimbel<span className="text-[#DE1D5E]">ASN</span></h1>
        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-[#269DD8] font-semibold hover:text-[#269dd8bb]">Fitur</a>
          <a href="#testimoni" className="text-[#269DD8] font-semibold hover:text-[#269dd8bb]">Testimoni</a>
          <a href="#pricing" className="text-[#269DD8] font-semibold hover:text-[#269dd8bb]">Paket</a>
          <a href="#contact" className="text-[#269DD8] font-semibold hover:text-[#269dd8bb]">Kontak</a>
        </div>
        <a
          href="/register"
          className="bg-[#269DD8] hover:bg-[#269dd8bb] text-white px-4 py-2 rounded-lg font-semibold"
        >
          Daftar Sekarang
        </a>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-600">
            Kuasai <span className="text-[#269DD8]">Materi ASN</span> dengan Mudah dan Terarah!
          </h2>
          <p className="text-gray-300 text-lg text-gray-600">
            Persiapkan diri menghadapi seleksi ASN dengan metode belajar efektif, 
            latihan soal terbaru, dan bimbingan dari mentor berpengalaman.
            100% sesuai dengan ujian resmi ASN.
          </p>
          <div className="flex gap-4">
            <a
              href="/login"
              className="bg-[#269DD8] hover:bg-[#269dd8bb] text-white px-6 py-3 rounded-lg font-semibold"
            >
              Mulai Belajar Sekarang
            </a>
            <a
              href="#features"
              className="border border-[#DE1D5E] text-[#DE1D5E] hover:border-[#de1d5dbb] hover:text-[#de1d5dbb] px-6 py-3 rounded-lg font-semibold"
            >
              Lihat Fitur
            </a>
          </div>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="/ic-learning-illustration.svg"
            alt="Belajar ASN"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-10 md:px-20 py-20 md:mx-20 bg-white rounded-4xl shadow-gray-200 shadow-md">
        <h3 className="text-3xl font-bold mb-10 text-center text-[#269DD8]">Fitur Unggulan</h3>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="p-6 ">
            <img src='/ic-materi.svg' className='w-16 h-16 mx-auto mb-3' />
            <h4 className="text-xl font-semibold mb-3 text-black">Materi Terupdate</h4>
            <p className="text-gray-600 font-extralight">
              Materi disesuaikan dengan kisi-kisi resmi seleksi ASN terbaru.
            </p>
          </div>
          <div className="p-6">
            <img src='/ic-interactive.svg' className='w-16 h-16 mx-auto mb-3' />
            <h4 className="text-xl font-semibold mb-3 text-black">Latihan Soal Interaktif</h4>
            <p className="text-gray-600 font-extralight">
              Puluhan ribu soal latihan lengkap dengan pembahasan terperinci.
            </p>
          </div>
          <div className="p-6">
            <img src='/ic-cat.svg' className='w-16 h-16 mx-auto mb-3' />
            <h4 className="text-xl font-semibold mb-3 text-black">Simulasi CAT Online</h4>
            <p className="text-gray-600 font-extralight">
              Rasakan pengalaman ujian seperti tes ASN sesungguhnya.
            </p>
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section id="testimoni" className="px-10 md:px-20 py-20">
        <h3 className="text-3xl font-bold mb-10 text-center text-[#269DD8]">Apa Kata Peserta Kami</h3>
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
            <div key={i} className="p-6 bg-white rounded-2xl border border-[#269DD8] shadow-md shadow-gray-200">
              <p className="text-gray-600 mb-4">“{t.text}”</p>
              <p className="font-semibold text-gray-600">— {t.nama}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-10 md:px-20 bg-white">
        <h3 className="text-3xl font-bold mb-10 text-center text-[#269DD8]">Paket Belajar</h3>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            { nama: "Basic", harga: "Rp99.000", fitur: ["Materi dasar ASN", "Latihan soal 500+", "Akses 30 hari"] },
            { nama: "Pro", harga: "Rp199.000", fitur: ["Semua materi ASN", "Soal 2.000+", "Akses 90 hari", "Simulasi CAT"] },
            { nama: "Premium", harga: "Rp299.000", fitur: ["Semua fitur Pro", "Kelas Live", "Mentor 1-on-1", "Akses 1 tahun"] },
          ].map((p, i) => (
            <div key={i} className="p-8 bg-white rounded-2xl border border-[#DE1D5E] hover:border-[#de1d5dbb] transition shadow-md shadow-gray-200">
              <h4 className="text-xl font-bold mb-2 text-gray-600">{p.nama}</h4>
              <p className="text-3xl font-extrabold text-[#DE1D5E] mb-6">{p.harga}</p>
              <ul className="space-y-2 text-gray-600 mb-6">
                {p.fitur.map((f, j) => (
                  <li key={j}>✅ {f}</li>
                ))}
              </ul>
              <a
                href="/login"
                className="inline-block bg-[#269DD8] hover:bg-[#269DD8BB] text-white px-6 py-3 rounded-lg font-semibold"
              >
                Pilih Paket
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white py-10 text-center text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()} <span className="text-[#269DD8] font-semibold">Bimbel<span className="text-[#DE1D5E]">ASN</span></span>. 
          Semua Hak Dilindungi.
        </p>
      </footer>
    </div>
  );
}
