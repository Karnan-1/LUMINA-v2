'use client';
import { useRouter } from 'next/navigation';
import { useAppStore, type BusinessType } from '@/lib/store';
import { Building2, Utensils, ShoppingBag, Wrench, Sparkles } from 'lucide-react';

const modules = [
  { id: 'HOSPITAL' as BusinessType, label: 'Hospital', icon: Building2, desc: 'Vetqure Clinical OS' },
  { id: 'FB' as BusinessType, label: 'F&B Management', icon: Utensils, desc: 'Menu & Orders OS' },
  { id: 'RETAIL' as BusinessType, label: 'Retail', icon: ShoppingBag, desc: 'POS & Inventory OS' },
  { id: 'SERVICE' as BusinessType, label: 'Service Center', icon: Wrench, desc: 'Spark Wash Service OS' },
];

export default function SetupPage() {
  const { setBusinessType } = useAppStore();
  const router = useRouter();

  const handleSelect = (type: BusinessType) => {
    setBusinessType(type);
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-slate-900">Initialize Module</h1>
          </div>
          <p className="text-slate-600 text-lg">Choose a business vertical to deploy the LUMINA Neural Layer</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <button
                key={module.id}
                onClick={() => handleSelect(module.id)}
                className="backdrop-blur-xl bg-white/40 border border-white/50 rounded-3xl p-6 hover:bg-white/60 hover:border-white/70 transition transform hover:scale-105 cursor-pointer group"
              >
                <div className="text-center">
                  <div className="inline-block p-3 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl mb-4 group-hover:shadow-lg transition">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{module.label}</h3>
                  <p className="text-slate-600 text-sm">{module.desc}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
