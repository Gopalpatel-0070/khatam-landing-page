
import React from 'react';
import Hero from './components/Hero';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#050810] selection:bg-red-500/30 p-6 relative">
      {/* Background radial gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(17,24,39,1)_0%,_rgba(5,8,16,1)_100%)]"></div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <main className="z-10 w-full max-w-4xl flex flex-col items-center text-center">
        <Hero />
      </main>

      <footer className="absolute bottom-12 text-slate-700 text-[10px] font-mono uppercase tracking-[0.3em] z-10 opacity-50">
        <span>Finality. Execution. Time.</span>
      </footer>
    </div>
  );
};

export default App;
