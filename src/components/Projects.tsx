import { FolderOpen, Clock, Sparkles } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold-400" />
            <span className="text-gold-400 text-sm tracking-widest uppercase">Projects</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold-400" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-silver-50">
            项目案例
          </h2>
          <p className="mt-4 text-silver-400 max-w-2xl mx-auto">
            探索我们的创意作品，见证灵感与技术的碰撞
          </p>
        </div>

        <div className="glass-card rounded-2xl p-12 sm:p-16 text-center">
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-gold-400/20 to-transparent flex items-center justify-center">
            <FolderOpen className="w-12 h-12 text-gold-400" />
          </div>
          
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-silver-50 mb-4">
            敬请期待
          </h3>
          
          <p className="text-silver-400 max-w-lg mx-auto leading-relaxed">
            我们正在筹备第一批作品，敬请期待！
            <br />
            每一个项目都承载着我们的热情与创意。
          </p>

          <div className="mt-8 flex items-center justify-center gap-8">
            <div className="flex items-center gap-2 text-silver-500">
              <Clock className="w-5 h-5" />
              <span className="text-sm">正在创作中</span>
            </div>
            <div className="flex items-center gap-2 text-silver-500">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm">敬请期待</span>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="aspect-square glass-card rounded-xl border-2 border-dashed border-silver-700/50 flex items-center justify-center hover:border-gold-400/50 transition-colors duration-300"
              >
                <span className="text-silver-600 text-xs">项目 {index}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-silver-500 text-sm">
            关注我们的社交媒体，获取最新项目动态
          </p>
        </div>
      </div>
    </section>
  );
}
