import PasswordInput from '../../components/passwordinput';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Kiri - Form Login */}
      <div className="flex flex-col justify-center w-full max-w-md p-8 mx-auto lg:w-1/2">
        <h1 className="mb-6 text-3xl font-bold text-gray-600">Daftar Akun Anda</h1>

        <div className="flex gap-3 mb-6">
          <button className="flex-1 flex items-center justify-center gap-2 border border-[#269DD8] rounded-lg py-2 hover:bg-[#269DD8BB] text-gray-600">
            <img src="/google.svg" alt="Google" className="w-5 h-5" />
            Daftar dengan Google
          </button>
        </div>

        <div className="flex items-center mb-6">
          <div className="flex-grow border-t border-gray-700"></div>
          <span className="px-3 text-gray-400 text-sm">atau</span>
          <div className="flex-grow border-t border-gray-700"></div>
        </div>

        <form className="flex flex-col gap-4">
          <div>
            <label className="text-sm text-gray-400">Nama Lengkap</label>
            <input
              type="text"
              placeholder="Masukkan nama lengkap Anda"
              className="w-full mt-1 px-4 py-2 bg-white border border-[#269DD8] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#269DD8] text-gray-600"
            />
          </div>
          <div>
            <label className="text-sm text-gray-400">Email</label>
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="w-full mt-1 px-4 py-2 bg-white border border-[#269DD8] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#269DD8] text-gray-600"
            />
          </div>

          <PasswordInput/>

          {/* ✅ Checkbox Persetujuan */}
          <div className="flex items-start mt-2">
            <input
              type="checkbox"
              id="privacyPolicy"
              className="mt-1 h-4 w-4 text-[#269DD8] border-gray-300 rounded focus:ring-[#269DD8]"
              required
            />
            <label htmlFor="privacyPolicy" className="ml-2 text-sm text-gray-500">
              Saya telah membaca dan menyetujui{' '}
              <a href="/kebijakan-privasi" className="text-[#269DD8] hover:underline">
                Kebijakan Privasi
              </a>{' '}
              dan{' '}
              <a href="/syarat-ketentuan" className="text-[#269DD8] hover:underline">
                Syarat & Ketentuan
              </a>.
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-2 bg-[#269DD8] rounded-lg hover:bg-[#269DD8BB] font-semibold text-white"
          >
            Buat Akun
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-400 text-center">
          Sudah punya akun?{" "}
          <a href="/login" className="text-[#269DD8] hover:underline">
            Masuk Sekarang
          </a>
        </p>
      </div>

      {/* Kanan - Info Section */}
      <div className="hidden lg:flex flex-col justify-center w-1/2 bg-[#269DD8] p-12 text-white">
        <h2 className="text-4xl font-bold mb-4">
          Kuasai Materi ASN dengan Mudah dan Terarah.
        </h2>
        <p className="text-lg mb-8 text-white">
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
          <p className="text-sm text-white">
            Dipercaya oleh <span className="font-semibold">15.7k+</span> Peserta ASN
          </p>
        </div>
      </div>
    </div>
  );
}
