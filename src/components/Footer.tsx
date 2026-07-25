import { Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-fog-900/80 backdrop-blur-lg border-t border-silver-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-gold-400" />
              <span className="font-display text-lg font-semibold text-silver-50">
                MistWeftStudio
              </span>
            </div>
            <p className="text-sm text-silver-400 leading-relaxed">
              以文字记述世界，以科技留影未来
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-sm font-medium text-silver-300 mb-4 tracking-wider">
              关注我们
            </h3>
            <div className="flex items-center justify-center gap-6">
              <a
                href="#"
                className="text-silver-400 hover:text-gold-400 transition-colors"
                aria-label="微信"
              >
                <span className="text-lg">微信</span>
              </a>
              <a
                href="#"
                className="text-silver-400 hover:text-gold-400 transition-colors"
                aria-label="QQ"
              >
                <span className="text-lg">QQ</span>
              </a>
              <a
                href="#"
                className="text-silver-400 hover:text-gold-400 transition-colors"
                aria-label="B站"
              >
                <span className="text-lg">B站</span>
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-silver-500">
              © 2024 MistWeftStudio
            </p>
            <p className="text-xs text-silver-600 mt-2">
              用 <Heart className="inline w-3 h-3 text-red-400" /> 与代码构建
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-silver-800/20">
          <p className="text-center text-xs text-silver-600">
            以不一样的视角看世界，以不一样的笔法写世界，在垃圾的生活留下荒废的造物
          </p>
        </div>
      </div>
    </footer>
  );
}
