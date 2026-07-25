import { Gamepad2, Film, BookOpen, Video } from 'lucide-react';

const services = [
  {
    icon: Gamepad2,
    title: '游戏制作',
    description: '从概念到成品，我们打造独特的游戏体验，用代码编织虚拟世界。',
    color: 'from-indigo-500/20 to-purple-500/20',
    iconColor: 'text-indigo-400',
  },
  {
    icon: Film,
    title: '微电影拍摄',
    description: '用镜头讲述故事，捕捉光影之间的情感，创造触动人心的影像作品。',
    color: 'from-red-500/20 to-orange-500/20',
    iconColor: 'text-red-400',
  },
  {
    icon: BookOpen,
    title: '文学创作',
    description: '以文字为舟，载着想象力远航，书写属于我们这个时代的故事。',
    color: 'from-amber-500/20 to-yellow-500/20',
    iconColor: 'text-amber-400',
  },
  {
    icon: Video,
    title: '短视频创作',
    description: '在碎片化的时间里，创造有深度的内容，用创意点亮平凡生活。',
    color: 'from-emerald-500/20 to-teal-500/20',
    iconColor: 'text-emerald-400',
  },
];

export default function Services() {
  return (
    <section className="relative py-24 bg-fog-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold-400" />
            <span className="text-gold-400 text-sm tracking-widest uppercase">Services</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold-400" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-silver-50">
            我们的服务
          </h2>
          <p className="mt-4 text-silver-400 max-w-2xl mx-auto">
            多元化的创作能力，满足不同领域的创意需求
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative glass-card p-6 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-gold-400/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`} />
              
              <div className="relative">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>
                
                <h3 className="font-display text-xl font-semibold text-silver-50 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-sm text-silver-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
