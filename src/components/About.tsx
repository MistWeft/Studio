import { Quote, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold-400" />
            <span className="text-gold-400 text-sm tracking-widest uppercase">About Us</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold-400" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-silver-50">
            关于我们
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-xl">
              <p className="text-silver-300 leading-relaxed text-lg">
                拾雾工作室（MistWeftStudio）是一个由几名高中生组成的创意团队。
                我们相信，即使在平凡的生活中，也能创造出不平凡的作品。
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <p className="text-silver-300 leading-relaxed">
                我们热爱创作，无论是游戏、电影、文字还是视频，每一种形式都是我们表达自我的方式。
                我们用独特的视角观察世界，用真诚的笔触记录生活。
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <p className="text-silver-300 leading-relaxed">
                在这个快节奏的时代，我们选择慢下来，用心打磨每一件作品。
                也许我们的作品并不完美，但它们都是我们用心创造的结晶。
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative glass-card p-8 rounded-xl">
              <Quote className="absolute top-4 right-4 w-12 h-12 text-gold-400/20" />
              <p className="text-xl sm:text-2xl text-silver-200 italic leading-relaxed">
                以不一样的视角看世界，以不一样的笔法写世界，在垃圾的生活留下荒废的造物。
              </p>
              <p className="mt-6 text-right text-silver-400 text-sm">—— 拾雾工作室</p>
            </div>

            <div className="glass-card p-6 rounded-xl flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-400/20 to-transparent flex items-center justify-center">
                <Users className="w-8 h-8 text-gold-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-silver-50">团队成员</h3>
                <p className="text-silver-400 text-sm mt-1">
                  一群热爱创作的高中生，怀揣梦想，砥砺前行
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-lg text-center">
                <p className="text-3xl font-display font-semibold text-gold-400">4+</p>
                <p className="text-xs text-silver-400 mt-1">核心成员</p>
              </div>
              <div className="glass-card p-4 rounded-lg text-center">
                <p className="text-3xl font-display font-semibold text-gold-400">∞</p>
                <p className="text-xs text-silver-400 mt-1">创作可能</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
