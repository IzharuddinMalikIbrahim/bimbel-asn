export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Kiri - Form Login */}
      <div className="flex flex-col justify-center w-full max-w-md p-8 mx-auto lg:w-1/2">
        <h1 className="mb-6 text-3xl font-bold">Masuk ke Akun Anda</h1>

        <div className="flex gap-3 mb-6">
          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-600 rounded-lg py-2 hover:bg-gray-800">
            <img src="/google.svg" alt="Google" className="w-5 h-5" />
            Masuk dengan Google
          </button>
        </div>

        <div className="flex items-center mb-6">
          <div className="flex-grow border-t border-gray-700"></div>
          <span className="px-3 text-gray-400 text-sm">atau</span>
          <div className="flex-grow border-t border-gray-700"></div>
        </div>

        <form className="flex flex-col gap-4">
          <div>
            <label className="text-sm text-gray-400">Email</label>
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="w-full mt-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Kata Sandi</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <a href="#" className="text-blue-400 hover:underline">
              Lupa kata sandi?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-2 bg-blue-600 rounded-lg hover:bg-blue-700 font-semibold"
          >
            Masuk
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-400 text-center">
          Belum punya akun?{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Daftar Sekarang
          </a>
        </p>
      </div>

      {/* Kanan - Info Section */}
      <div className="hidden lg:flex flex-col justify-center w-1/2 bg-blue-600 p-12 text-white">
        <h2 className="text-4xl font-bold mb-4">
          Kuasai Materi ASN dengan Mudah dan Terarah.
        </h2>
        <p className="text-lg mb-8 text-blue-100">
          Dapatkan pengalaman belajar terbaik untuk menghadapi seleksi ASN. 
          Dengan metode yang mudah dipahami dan latihan soal terbaru, 
          kami pastikan kamu 100% siap menghadapi ujian dan meraih impian menjadi Aparatur Sipil Negara.
        </p>

        <div className="flex items-center gap-4">
          <div className="flex -space-x-2">
            <img
              src="https://randomuser.me/api/portraits/women/81.jpg"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src="https://randomuser.me/api/portraits/men/61.jpg"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          </div>
          <p className="text-sm">
            Dipercaya oleh <span className="font-semibold">15.7k+</span> Peserta ASN
          </p>
        </div>
      </div>
    </div>
  );
}
