'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppStore } from '@/lib/store';

export default function LoginPage() {
  const [email, setEmail] = useState('ai.demo@lumina.local');
  const [password, setPassword] = useState('LuminaDemo@2024');
  const [error, setError] = useState('');
  const { setUser } = useAppStore();
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'ai.demo@lumina.local' && password === 'LuminaDemo@2024') {
      setUser({ email, role: 'ADMIN', name: 'LUMINA Demo' });
      router.push('/setup');
    } else {
      setError('Invalid credentials. Use demo account above.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="backdrop-blur-xl bg-white/40 border border-white/50 rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">
              <span className="text-blue-600">LUMINA</span>
            </h1>
            <p className="text-slate-600 text-sm">AI-Powered Enterprise OS</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-white/60 border border-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-0 transition"
                placeholder="Email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-white/60 border border-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="Password"
              />
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-3 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-200"
            >
              Initialize System
            </button>
          </form>

          <div className="mt-6 p-4 bg-blue-50/50 border border-blue-200/50 rounded-2xl">
            <p className="text-xs font-semibold text-slate-600 mb-2">Demo Credentials:</p>
            <p className="text-xs text-slate-600"><strong>Email:</strong> ai.demo@lumina.local</p>
            <p className="text-xs text-slate-600"><strong>Password:</strong> LuminaDemo@2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}
