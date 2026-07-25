import { Mail, Github, MessageCircle, Video } from 'lucide-react';

const socialLinks = [
  {
    icon: Video,
    name: '哔哩哔哩',
    url: 'https://bilibili.com',
    description: '关注我们的频道',
    color: 'from-pink-500/20 to-blue-500/20',
    iconColor: 'text-pink-400',
    bgGradient: 'from-pink-500 to-blue-500',
  },
  {
    icon: MessageCircle,
    name: 'QQ',
    url: '#',
    description: '加入交流群',
    color: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-400',
    bgGradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Mail,
    name: '邮箱',
    url: 'mailto:Fishwo2025@163.com',
    description: 'Fishwo2025@163.com',
    color: 'from-amber-500/20 to-orange-500/20',
    iconColor: 'text-amber-400',
    bgGradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: Github,
    name: 'GitHub',
    url: 'https://github.com/MistWeft',
    description: '@MistWeft',
    color: 'from-slate-500/20 to-gray-500/20',
    iconColor: 'text-slate-300',
    bgGradient: 'from-slate-500 to-gray-500',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold-400" />
            <span className="text-gold-400 text-sm tracking-widest uppercase">Contact</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold-400" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-silver-50">
            联系我们
          </h2>
          <p className="mt-4 text-silver-400 max-w-2xl mx-auto">
            有任何合作意向或问题，欢迎随时与我们联系
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative glass-card p-8 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${social.bgGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${social.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <social.icon className={`w-8 h-8 ${social.iconColor}`} />
                </div>
                
                <h3 className="font-display text-xl font-semibold text-silver-50 mb-2">
                  {social.name}
                </h3>
                
                <p className="text-sm text-silver-400">
                  {social.description}
                </p>
              </div>

              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${social.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
