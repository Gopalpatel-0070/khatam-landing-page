
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center animate-in fade-in zoom-in duration-1000">
      <div className="mb-12 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-slate-500 text-[10px] font-black tracking-[0.4em] uppercase">
        End of Transmission
      </div>
      
      <h1 className="font-bungee text-7xl md:text-[10rem] leading-[0.8] text-white tracking-tighter">
        <span className="block opacity-90">
          TATA BYE BYE
        </span>
        <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]">
          KHATAM!
        </span>
      </h1>
      
      <div className="mt-16 relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 blur-xl"></div>
        <p className="relative text-2xl md:text-4xl font-light text-slate-400 max-w-3xl italic leading-snug tracking-tight">
          "Time rahte use kar lena chahiye tha..."
        </p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}} />
    </div>
  );
};

export default Hero;
