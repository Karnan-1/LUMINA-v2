import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LUMINA v2.0 - Enterprise Platform',
  description: 'AI-Powered Unified Enterprise Operating System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-white to-slate-50">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
