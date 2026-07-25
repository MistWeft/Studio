import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Globe, Video } from 'lucide-react';

const socialLinks = [
  {
    icon: MessageCircle,
    name: '微信',
    description: '添加微信咨询合作',
    color: 'from-green-500/20 to-emerald-500/20',
    iconColor: 'text-green-400',
  },
  {
    icon: Globe,
    name: 'QQ',
    description: '加入QQ群交流',
    color: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-400',
  },
  {
    icon: Video,
    name: 'B站',
    description: '关注我们的频道',
    color: 'from-pink-500/20 to-rose-500/20',
    iconColor: 'text-pink-400',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="relative py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold-400" />
            <span className="text-gold-400 text-sm tracking-widest uppercase">Contact</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold-400" />
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-silver-50">
            联系我们
          </h1>
          <p className="mt-4 text-silver-400 max-w-2xl mx-auto">
            有任何合作意向或问题，欢迎随时与我们联系
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass-card p-6 rounded-xl">
              <h2 className="font-display text-xl font-semibold text-silver-50 mb-6">
                联系方式
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400/20 to-transparent flex items-center justify-center">
                    <Mail className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-sm text-silver-500">邮箱</p>
                    <p className="text-silver-300">contact@mistweft.studio</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400/20 to-transparent flex items-center justify-center">
                    <Phone className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-sm text-silver-500">电话</p>
                    <p className="text-silver-300">暂未公开</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400/20 to-transparent flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-sm text-silver-500">地址</p>
                    <p className="text-silver-300">中国 · 网络空间</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <h2 className="font-display text-xl font-semibold text-silver-50 mb-6">
                关注我们
              </h2>
              
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="group flex flex-col items-center p-4 rounded-xl bg-fog-800/50 hover:bg-fog-700/50 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <social.icon className={`w-6 h-6 ${social.iconColor}`} />
                    </div>
                    <span className="text-sm font-medium text-silver-50">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-xl">
            <h2 className="font-display text-xl font-semibold text-silver-50 mb-6">
              发送消息
            </h2>

            {submitSuccess && (
              <div className="mb-6 p-4 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center gap-3">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-green-400">消息发送成功！我们会尽快回复您。</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-silver-400 mb-2">
                  姓名
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-fog-800/50 border border-silver-700/50 text-silver-50 placeholder-silver-600 focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/50 transition-all duration-300"
                  placeholder="请输入您的姓名"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-silver-400 mb-2">
                  邮箱
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-fog-800/50 border border-silver-700/50 text-silver-50 placeholder-silver-600 focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/50 transition-all duration-300"
                  placeholder="请输入您的邮箱"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-silver-400 mb-2">
                  留言
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-fog-800/50 border border-silver-700/50 text-silver-50 placeholder-silver-600 focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/50 transition-all duration-300 resize-none"
                  placeholder="请输入您的留言或合作意向..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 text-fog-900 font-semibold hover:from-gold-500 hover:to-gold-400 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-fog-900/30 border-t-fog-900 rounded-full animate-spin" />
                    发送中...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    发送消息
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
