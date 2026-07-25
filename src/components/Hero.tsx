import { useEffect, useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function Hero() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const newStars: Star[] = [];
    for (let i = 0; i < 150; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 4 + 2,
        delay: Math.random() * 5,
      });
    }
    setStars(newStars);
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="stars-background" />
      
      <div className="stars-overlay">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              '--duration': `${star.duration}s`,
              '--delay': `${star.delay}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fadeIn">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold-400" />
            <Sparkles className="w-5 h-5 text-gold-400" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold-400" />
          </div>
        </div>

        <h1 className="animate-slideUp font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-6">
          <span className="block text-silver-50">MistWeftStudio</span>
          <span className="block text-2xl sm:text-3xl md:text-4xl font-light tracking-widest mt-4 text-silver-400">
            拾雾工作室
          </span>
        </h1>

        <div className="animate-slideUp" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg sm:text-xl md:text-2xl text-silver-300 font-light tracking-wide leading-relaxed max-w-2xl mx-auto">
            以文字记述世界，以科技留影未来
          </p>
        </div>

        <div className="animate-slideUp mt-8" style={{ animationDelay: '0.4s' }}>
          <p className="text-sm text-silver-500 italic">
            "以不一样的视角看世界，以不一样的笔法写世界"
          </p>
        </div>

        <div className="animate-fadeIn mt-12" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 px-8 py-3 glass-card rounded-full text-sm font-medium text-silver-300 hover:text-gold-400 hover:border-gold-400/30 transition-all duration-300"
          >
            了解更多
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-fog-900 to-transparent" />
    </section>
  );
}
