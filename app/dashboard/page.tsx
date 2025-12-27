'use client';
import { useAppStore, MOCK_RECORDS } from '@/lib/store';
import { useRouter } from 'next/navigation';
import { LogOut, BarChart3, Users, Zap, TrendingUp, Clock, DollarSign, Package } from 'lucide-react';

export default function Dashboard() {
  const { user, businessType, logout } = useAppStore();
  const router = useRouter();

  if (!user) {
    router.push('/login');
    return null;
  }

  const records = MOCK_RECORDS[businessType || 'RETAIL'];

  const getModuleTitle = () => {
    switch (businessType) {
      case 'HOSPITAL':
        return { title: 'Vetqure Clinical OS', desc: 'Patient & Clinical Management' };
      case 'FB':
        return { title: 'Lumina F&B OS', desc: 'Menu & Orders Management' };
      case 'RETAIL':
        return { title: 'Lumina Retail OS', desc: 'POS & Inventory System' };
      case 'SERVICE':
        return { title: 'Spark Wash Service OS', desc: 'Service Booking & Management' };
      default:
        return { title: 'LUMINA Dashboard', desc: 'Enterprise Operating System' };
    }
  };

  const module = getModuleTitle();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="backdrop-blur-xl bg-white/40 border-b border-white/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">{module.title}</h1>
            <p className="text-sm text-slate-600">{module.desc}</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-200/50 text-red-600 rounded-xl hover:bg-red-500/20 transition"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="backdrop-blur-xl bg-white/40 border border-white/50 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm">Active Records</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">{records.length}</p>
              </div>
              <BarChart3 className="w-8 h-8 text-blue-500 opacity-50" />
            </div>
          </div>
          <div className="backdrop-blur-xl bg-white/40 border border-white/50 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm">AI Status</p>
                <p className="text-2xl font-bold text-green-600 mt-1">Active</p>
              </div>
              <Zap className="w-8 h-8 text-green-500 opacity-50" />
            </div>
          </div>
          <div className="backdrop-blur-xl bg-white/40 border border-white/50 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm">System Health</p>
                <p className="text-2xl font-bold text-blue-600 mt-1">99.9%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-blue-500 opacity-50" />
            </div>
          </div>
          <div className="backdrop-blur-xl bg-white/40 border border-white/50 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm">Response Time</p>
                <p className="text-2xl font-bold text-cyan-600 mt-1">150ms</p>
              </div>
              <Clock className="w-8 h-8 text-cyan-500 opacity-50" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Records Table */}
          <div className="lg:col-span-2 backdrop-blur-xl bg-white/40 border border-white/50 rounded-3xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Operational Records</h2>
            <div className="space-y-3">
              {records.map((record) => (
                <div
                  key={record.id}
                  className="backdrop-blur-md bg-white/30 border border-white/40 rounded-2xl p-4 hover:bg-white/50 transition"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {record.id}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">{record.name}</p>
                          <p className="text-xs text-slate-600">{record.detail}</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        {record.status}
                      </span>
                      <p className="text-sm font-bold text-slate-900 mt-1">{record.metric}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Neural Insights */}
          <div className="backdrop-blur-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-300/30 rounded-3xl p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600" />
              Neural Insights
            </h3>
            <div className="space-y-4">
              <div className="bg-white/60 rounded-2xl p-4">
                <p className="text-sm font-semibold text-slate-900 mb-1">System Analysis</p>
                <p className="text-xs text-slate-700">All 4 modules operational. Latency optimal. Database synchronized.</p>
              </div>
              <div className="bg-white/60 rounded-2xl p-4">
                <p className="text-sm font-semibold text-slate-900 mb-1">AI Recommendation</p>
                <p className="text-xs text-slate-700">Allocate 5 additional units to peak demand hours for 12% efficiency gain.</p>
              </div>
              <div className="bg-white/60 rounded-2xl p-4">
                <p className="text-sm font-semibold text-slate-900 mb-1">Prediction</p>
                <p className="text-xs text-slate-700">Next 24h: 18% traffic increase. Recommend pre-staging resources now.</p>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-2 rounded-xl hover:shadow-lg transition mt-4">
                Apply AI Optimization
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
