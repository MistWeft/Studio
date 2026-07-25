import { ArrowLeft, Mail, Sparkles } from 'lucide-react';

interface CollaborationProps {
  onBack: () => void;
}

export default function Collaboration({ onBack }: CollaborationProps) {
  return (
    <div className="min-h-screen relative">
      <div className="stars-background" />
      <div className="stars-overlay" />
      
      <div className="relative z-10 min-h-screen">
        <header className="fixed top-0 left-0 right-0 z-50 bg-fog-900/95 backdrop-blur-xl shadow-lg shadow-black/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <button
                onClick={onBack}
                className="flex items-center gap-2 text-silver-300 hover:text-gold-400 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm">返回首页</span>
              </button>
              
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-gold-400" />
                <span className="font-display text-lg font-semibold text-silver-50">
                  商务合作
                </span>
              </div>
              
              <div className="w-24" />
            </div>
          </div>
        </header>

        <main className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold-400" />
                <span className="text-gold-400 text-sm tracking-widest uppercase">Collaboration</span>
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold-400" />
              </div>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-silver-50 mb-4">
                商务合作
              </h1>
              <p className="text-silver-400 max-w-2xl mx-auto">
                我们期待与您携手，共同创造精彩的作品
              </p>
            </div>

            <div className="space-y-8">
              <div className="glass-card rounded-2xl p-8">
                <h2 className="font-display text-xl font-semibold text-silver-50 mb-4">
                  合作方式
                </h2>
                <ul className="space-y-4 text-silver-300">
                  <li className="flex items-start gap-4">
                    <span className="w-6 h-6 rounded-full bg-gold-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-gold-400 text-sm font-medium">1</span>
                    </span>
                    <div>
                      <h3 className="font-medium text-silver-50 mb-1">项目合作</h3>
                      <p className="text-sm text-silver-400">
                        共同开发游戏、微电影、文学作品或短视频项目
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-6 h-6 rounded-full bg-gold-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-gold-400 text-sm font-medium">2</span>
                    </span>
                    <div>
                      <h3 className="font-medium text-silver-50 mb-1">资源支持</h3>
                      <p className="text-sm text-silver-400">
                        提供技术支持、场地资源、设备器材等合作
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-6 h-6 rounded-full bg-gold-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-gold-400 text-sm font-medium">3</span>
                    </span>
                    <div>
                      <h3 className="font-medium text-silver-50 mb-1">品牌联动</h3>
                      <p className="text-sm text-silver-400">
                        品牌宣传、联名活动、内容共创等合作形式
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="glass-card rounded-2xl p-8">
                <h2 className="font-display text-xl font-semibold text-silver-50 mb-4">
                  联系我们
                </h2>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:Fishwo2025@163.com"
                    className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 text-fog-900 font-semibold hover:from-gold-500 hover:to-gold-400 transition-all duration-300 shadow-lg shadow-gold-400/20"
                  >
                    <Mail className="w-5 h-5" />
                    发送邮件
                  </a>
                  <p className="flex items-center justify-center text-silver-400">
                    Fishwo2025@163.com
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8">
                <h2 className="font-display text-xl font-semibold text-silver-50 mb-4">
                  关于我们
                </h2>
                <p className="text-silver-300 leading-relaxed">
                  拾雾工作室是一个由几名高中生组成的创意团队，致力于用文字、影像和代码记录世界、创造未来。我们相信，即使在平凡的生活中，也能创造出不平凡的作品。
                </p>
                <p className="text-silver-300 leading-relaxed mt-4">
                  如果您有任何合作需求或项目想法，欢迎通过邮箱与我们联系。我们期待与您一起创造精彩的作品！
                </p>
              </div>
            </div>
          </div>
        </main>

        <footer className="relative bg-fog-900/80 backdrop-blur-lg border-t border-silver-800/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-gold-400" />
                <span className="font-display text-sm font-semibold text-silver-50">
                  MistWeftStudio
                </span>
              </div>
              <p className="text-xs text-silver-500">
                © 2024 MistWeftStudio
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
