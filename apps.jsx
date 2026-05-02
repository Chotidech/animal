import React, { useState, useEffect } from 'react';
import { 
  Volume2, 
  Sword, 
  Shield, 
  Zap, 
  Target,
  Skull,
  Play,
  Loader2,
  AlertCircle
} from 'lucide-react';

// 🐯 ข้อมูลตัวละคร 4 ตัวหลัก เชื่อมกับไฟล์ที่คุณอัปโหลด
const animals = [
  { 
    id: 'tiger', 
    name: 'SUA (TIGER)', 
    subName: 'The Jungle Monarch',
    color: '#f59e0b', 
    imageUrl: 'Gemini_Generated_Image_5sr43n5sr43n5sr4.png',
    soundUrl: 'Demon tiger sound effect.mp3',
    stats: { power: 95, speed: 85, defense: 70 }
  },
  { 
    id: 'elephant', 
    name: 'CHANG (ELEPHANT)', 
    subName: 'The Unstoppable Fortress',
    color: '#3b82f6', 
    imageUrl: 'Gemini_Generated_Image_3ai3lf3ai3lf3ai3.png',
    soundUrl: 'ELEPHANT - Sound Effect.mp3',
    stats: { power: 100, speed: 30, defense: 100 }
  },
  { 
    id: 'bull', 
    name: 'WUA (BULL)', 
    subName: 'The Earth Shaker',
    color: '#92400e', 
    imageUrl: 'Gemini_Generated_Image_7kicrl7kicrl7kic.png',
    soundUrl: 'เสยงวว.mp3',
    stats: { power: 90, speed: 50, defense: 85 }
  },
  { 
    id: 'bear', 
    name: 'MEE (BEAR)', 
    subName: 'The Primal Crusher',
    color: '#451a03', 
    imageUrl: 'Gemini_Generated_Image_fljl6vfljl6vfljl.png',
    soundUrl: 'Bear Sound Effect.mp3',
    stats: { power: 98, speed: 40, defense: 90 }
  }
];

export default function App() {
  const [selected, setSelected] = useState(animals[0]);
  const [isRoaring, setIsRoaring] = useState(false);
  const [imageError, setImageError] = useState(false);

  // 🔄 รีเซ็ต Error เมื่อเปลี่ยนตัวละคร
  useEffect(() => {
    setImageError(false);
  }, [selected]);

  // 🔊 ระบบเล่นเสียงแบบ Optimized
  const playRoar = (animal) => {
    if (isRoaring || !animal.soundUrl) return;
    
    setIsRoaring(true);
    const audio = new Audio(animal.soundUrl);
    
    audio.onended = () => setIsRoaring(false);
    audio.onerror = () => {
      console.error("Audio Load Failed");
      setIsRoaring(false);
    };

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.error("Playback Blocked:", error);
        setIsRoaring(false);
      });
    }
  };

  return (
    <div className="min-h-[100dvh] bg-black text-white font-sans selection:bg-yellow-400 selection:text-black flex flex-col relative overflow-x-hidden select-none touch-manipulation">
      
      {/* 📐 Marvel Rivals Slanted Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[#0a0a0a]"></div>
        <div 
          className="absolute top-0 right-0 w-[95%] lg:w-[55%] h-full bg-yellow-400 opacity-80 skew-x-[-15deg] translate-x-[45%] lg:translate-x-[25%] shadow-[inset_30px_0_60px_rgba(0,0,0,0.6)] transition-all duration-700"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-black via-black/80 lg:via-black/90 to-transparent"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[size:40px_40px] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)]"></div>
      </div>

      {/* 🏷️ Header */}
      <header className="relative z-20 p-5 lg:p-10 flex justify-between items-center border-b border-white/5 bg-black/30 backdrop-blur-md">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-10 h-1 bg-yellow-400"></div>
            <span className="text-[10px] font-black tracking-[0.3em] text-yellow-400 uppercase">Beast Rivals</span>
          </div>
          <h1 className="text-3xl lg:text-7xl font-[1000] italic tracking-tighter leading-none uppercase">
            BATTLE <span className="text-yellow-400">ROSTER</span>
          </h1>
        </div>
        <div className="text-right hidden sm:block">
          <div className="text-[10px] font-black italic text-white/40 uppercase tracking-widest leading-none">Units Ready</div>
          <div className="flex items-center justify-end gap-1.5 text-[12px] font-bold text-yellow-400 mt-1">
            <Skull size={14}/> ELITE SELECTION
          </div>
        </div>
      </header>

      {/* 🎮 Main Layout */}
      <main className="relative z-10 flex-1 flex flex-col lg:grid lg:grid-cols-12 overflow-y-auto lg:overflow-hidden pb-10">
        
        {/* 🎭 Left: Character Focus */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-4 lg:p-16 relative min-h-[55vh] lg:min-h-0">
          <div className={`relative w-full h-full flex items-center justify-center transition-all duration-300 transform ${isRoaring ? 'scale-110 rotate-1 brightness-125' : 'scale-100'}`}>
            {imageError ? (
              <div className="flex flex-col items-center gap-4 text-white/20">
                <AlertCircle size={64} />
                <span className="text-xs font-black uppercase tracking-widest text-center">Image Not Found</span>
              </div>
            ) : (
              <img 
                src={selected.imageUrl} 
                alt={selected.name} 
                onError={() => setImageError(true)}
                className="h-[40vh] lg:h-[75vh] w-auto drop-shadow-[0_40px_80px_rgba(0,0,0,1)] object-contain"
              />
            )}
            
            {isRoaring && (
              <div className="absolute inset-0 bg-yellow-400/10 animate-pulse rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
            )}
          </div>

          {/* Character Info Overlay */}
          <div className="w-full lg:absolute lg:bottom-12 lg:left-12 lg:right-12 flex flex-col mt-4 lg:mt-0 px-4 lg:px-0">
            <div className="flex items-end gap-4 mb-4">
               <div className="flex flex-col flex-1 overflow-hidden">
                  <h2 className="text-5xl lg:text-[10rem] font-[1000] italic tracking-tighter text-white uppercase leading-[0.8] drop-shadow-[0_15px_15px_rgba(0,0,0,0.9)] truncate">
                    {selected.id}
                  </h2>
                  <p className="text-yellow-400 font-black italic tracking-[0.2em] uppercase text-[11px] lg:text-2xl mt-4 bg-black/70 w-fit px-3 py-1 border-l-4 border-yellow-400 shadow-xl">
                    {selected.subName}
                  </p>
               </div>
               
               {/* Large Speaker Button for iPhone */}
               <button 
                onClick={() => playRoar(selected)}
                disabled={isRoaring}
                className={`p-6 lg:p-12 rounded-3xl transition-all border-4 shadow-2xl active:scale-90 ${isRoaring ? 'bg-yellow-400 border-white text-black scale-110 shadow-[0_0_40px_rgba(250,204,21,0.5)]' : 'bg-black/90 border-yellow-400 text-yellow-400 active:bg-yellow-400 active:text-black'}`}
              >
                {isRoaring ? <Loader2 className="animate-spin" size={32} /> : <Volume2 size={32} />}
              </button>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-3 lg:gap-10 bg-black/80 backdrop-blur-3xl p-5 lg:p-10 border-l-[10px] border-yellow-400 shadow-2xl rounded-tr-[2rem]">
              <StatItem label="POW" value={selected.stats.power} color="bg-red-600" />
              <StatItem label="SPD" value={selected.stats.speed} color="bg-cyan-500" />
              <StatItem label="DEF" value={selected.stats.defense} color="bg-emerald-500" />
            </div>
          </div>
        </div>

        {/* 🔳 Right: Character Selection Grid */}
        <div className="lg:col-span-5 bg-black/50 backdrop-blur-2xl p-6 lg:p-14 flex flex-col border-t lg:border-t-0 lg:border-l border-white/10">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl lg:text-4xl font-[1000] italic uppercase border-b-4 border-yellow-400 pb-2">Active Squad</h3>
            <span className="text-[12px] font-black text-white/30 tracking-[0.2em]">04 UNITS</span>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:gap-6 pb-20 lg:pb-10">
            {animals.map((animal) => (
              <button
                key={animal.id}
                onClick={() => setSelected(animal)}
                className={`
                  relative aspect-[3/4] overflow-hidden border-4 transition-all duration-300 group active:scale-95
                  ${selected.id === animal.id 
                    ? 'border-yellow-400 scale-[1.05] z-10 shadow-[0_0_60px_rgba(250,204,21,0.4)]' 
                    : 'border-white/10 grayscale-[0.7] hover:grayscale-0 hover:border-white/30 bg-neutral-900'}
                `}
              >
                <img 
                  src={animal.imageUrl} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" 
                  alt={animal.name} 
                  loading="lazy"
                />
                
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent flex flex-col justify-end p-3 lg:p-6 transition-opacity ${selected.id === animal.id ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'}`}>
                   <div className="text-[10px] lg:text-sm font-black text-yellow-400 mb-1 tracking-widest uppercase">Classified</div>
                   <div className="text-lg lg:text-3xl font-[1000] italic uppercase leading-none truncate drop-shadow-[0_4px_4px_rgba(0,0,0,1)]">
                    {animal.id}
                   </div>
                </div>

                {selected.id === animal.id && (
                  <div className="absolute top-0 left-0 bg-yellow-400 p-2 shadow-xl">
                    <Target size={20} className="text-black" />
                  </div>
                )}
              </button>
            ))}

            {/* Empty Slot */}
            <div className="aspect-[3/4] bg-neutral-950/50 border-4 border-white/5 flex flex-col items-center justify-center opacity-10 relative">
               <Skull size={32} />
               <span className="text-[9px] font-black uppercase mt-2 tracking-tighter text-center px-2 leading-none">Classified Unit</span>
            </div>
          </div>
          
          <div className="mt-auto lg:pt-10">
             <button className="w-full py-5 lg:py-7 bg-yellow-400 hover:bg-yellow-300 text-black font-[1000] italic uppercase tracking-tighter transition-all active:scale-90 shadow-[0_20px_40px_rgba(250,204,21,0.25)] flex items-center justify-center gap-4 group">
                <Play size={24} fill="currentColor" className="group-hover:scale-125 transition-transform" /> Lock Selection
             </button>
          </div>
        </div>
      </main>

      {/* Mobile Sticky Guide */}
      <footer className="lg:hidden p-4 bg-yellow-400 text-black text-center text-[11px] font-[1000] uppercase tracking-[0.2em] sticky bottom-0 z-30 shadow-2xl border-t border-black/10">
        Tap to select • iPhone Optimized
      </footer>

      <style>{`
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #fbbf24; border-radius: 10px; }
      `}</style>
    </div>
  );
}

const StatItem = ({ label, value, color }) => (
  <div className="flex flex-col gap-2">
    <div className="flex justify-between items-end">
      <span className="text-[9px] lg:text-[16px] font-[1000] text-white/40 tracking-[0.2em]">{label}</span>
      <span className="text-[12px] lg:text-2xl font-black italic text-white leading-none">{value}</span>
    </div>
    <div className="h-1.5 lg:h-3 bg-white/5 overflow-hidden rounded-full p-[1px]">
      <div 
        className={`h-full ${color} transition-all duration-1000 ease-out rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)]`}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  </div>
);