"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // icon bawaan lucide-react (sudah tersedia di Next.js + Tailwind setup)

export default function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <label className="text-sm text-gray-400">Kata Sandi</label>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="••••••••"
        className="w-full mt-1 px-4 py-2 bg-white border border-[#269DD8] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#269DD8] text-gray-600 pr-10"
      />

      {/* Tombol show/hide */}
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-[38px] text-gray-400 hover:text-[#269DD8] focus:outline-none"
      >
        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
  );
}
