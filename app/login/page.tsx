'use client';
import React, { useState } from 'react';

// Ini adalah komponen formulir login utama
function LoginForm() {
  // State untuk menyimpan username, password, error, dan status loading
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Fungsi yang menangani pengiriman formulir
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Mencegah refresh halaman saat form disubmit
    setLoading(true); // Mulai loading
    setError(''); // Bersihkan error sebelumnya

    try {
      // Mengirim data ke backend Anda
      // Endpoint: http://127.0.0.1:5000/login
      // Metode: POST
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Payload: JSON { username, password }
        body: JSON.stringify({ username, password }),
      });

      // Mengubah respons menjadi JSON
      const data = await response.json();

      if (response.ok) {
        // Sukses (status 2xx)
        // Menampilkan pesan sukses dari response JSON
        console.log('Login berhasil:', data); 
        alert(data.message || 'Login berhasil!'); // Menggunakan alert sebagai placeholder
        // Di sini Anda biasanya akan mengarahkan pengguna atau menyimpan token
        // misalnya: router.push('/dashboard');
      } else {
        // Gagal (misalnya, password salah atau status 4xx/5xx)
        // Menampilkan pesan error dari response JSON
        setError(data.message || 'Login gagal. Silakan coba lagi.');
      }
    } catch (err) {
      // Error jaringan atau server
      console.error('Terjadi error saat login:', err);
      setError('Terjadi error. Periksa koneksi internet Anda.');
    } finally {
      setLoading(false); // Selesai loading, baik sukses maupun gagal
    }
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-center text-gray-900">
        Login ke Akun Anda
      </h2>

      {/* Menampilkan pesan error jika ada */}
      {error && (
        <div className="p-3 text-sm text-red-800 bg-red-100 rounded-lg" role="alert">
          {error}
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Input Username */}
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="nama_pengguna_anda"
          />
        </div>

        {/* Input Password */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="••••••••"
          />
        </div>

        {/* Tombol Submit */}
        <div>
          <button
            type="submit"
            disabled={loading} // Tombol dinonaktifkan saat loading
            className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400 disabled:cursor-not-allowed"
          >
            {loading ? 'Memproses...' : 'Login'}
          </button>
        </div>
      </form>
    </div>
  );
}

// Komponen App utama yang merender LoginForm
// Ini adalah komponen default yang akan Anda gunakan di halaman Next.js
export default function App() {
  return (
    // Kita tengahkan formulirnya di layar dengan Tailwind
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-inter">
      <LoginForm />
    </div>
  );
}

