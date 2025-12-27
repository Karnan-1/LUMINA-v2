import Link from 'next/link';

export default function Home() {
  return (
    <main className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-white via-slate-50 to-blue-50">
      <div className="text-center space-y-8 px-4 max-w-2xl">
        {/* Logo/Title */}
        <div className="space-y-2">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            🌟 LUMINA v2.0
          </h1>
          <p className="text-2xl font-semibold text-slate-700">
            AI-Powered Unified Enterprise System
          </p>
        </div>

        {/* Description */}
        <p className="text-lg text-slate-600 leading-relaxed">
          A revolutionary single-platform solution combining Hospital Management, F&B, Retail, and Service Center modules.
        </p>

        {/* Demo Credentials */}
        <div className="bg-white bg-opacity-70 backdrop-blur border border-slate-200 rounded-2xl p-6 space-y-3">
          <p className="text-sm font-semibold text-slate-700">📋 Demo Account</p>
          <div className="space-y-1 font-mono text-sm">
            <p><span className="text-slate-500">Email:</span> <span className="text-blue-600">ai.demo@lumina.local</span></p>
            <p><span className="text-slate-500">Password:</span> <span className="text-blue-600">LuminaDemo@2024</span></p>
          </div>
        </div>

        {/* Status Badge */}
        <div className="flex justify-center gap-3">
          <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">✅ MVP Ready</span>
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">🚀 Production</span>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
          <div className="bg-white bg-opacity-70 backdrop-blur p-4 rounded-xl border border-slate-200">🏥 Hospital Management</div>
          <div className="bg-white bg-opacity-70 backdrop-blur p-4 rounded-xl border border-slate-200">🍜 F&B Management</div>
          <div className="bg-white bg-opacity-70 backdrop-blur p-4 rounded-xl border border-slate-200">🛍️ Retail Management</div>
          <div className="bg-white bg-opacity-70 backdrop-blur p-4 rounded-xl border border-slate-200">🚗 Service Center</div>
        </div>

        {/* Docs Link */}
        <div className="pt-4">
          <a href="https://github.com/Karnan-1/LUMINA-v2" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition">
            📚 View Documentation
          </a>
        </div>
      </div>
    </main>
  );
}
