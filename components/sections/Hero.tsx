import { 
  ArrowRight, 
  GraduationCap, 
  Sparkles, 
  Brain, 
  Globe, 
  Award 
} from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-3xl opacity-20 animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-10 animate-pulse" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        {/* Avatar with Glow Effect */}
        <div className="mb-10 relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur-2xl opacity-30 animate-pulse" />
          <div className="relative w-48 h-48 mx-auto rounded-full bg-white shadow-2xl border-4 border-white/50 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <svg
                className="w-28 h-28 text-white/90"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Name with Gradient */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Fisher老师
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-2xl md:text-3xl mb-6 text-slate-700 font-semibold">
          讲师 · 海归博士 · 中级经济师
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { icon: <GraduationCap className="w-4 h-4" />, text: '雅思8分' },
            { icon: <Sparkles className="w-4 h-4" />, text: '托福阅读满分' },
            { icon: <Brain className="w-4 h-4" />, text: 'GRE 328分' },
            { icon: <Globe className="w-4 h-4" />, text: '专八优秀' },
            { icon: <Award className="w-4 h-4" />, text: 'TESOL认证' },
          ].map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-slate-700 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-blue-300"
            >
              {tag.icon}
              {tag.text}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-slate-600 leading-relaxed font-medium">
          教学十余年，教学时长一万小时以上。帮助众多学生获得满分阅读、7分写作，
          <br className="hidden md:block" />
          助力学生申请<span className="text-blue-600 font-semibold">斯坦福、MIT、英国G5</span>等世界顶尖名校。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            查看AI项目
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-700 rounded-full font-bold text-lg hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-slate-200 hover:border-blue-300"
          >
            了解更多
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-slate-500">
          <span className="text-sm font-medium">向下滚动</span>
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-slate-400 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg shadow-lg animate-float opacity-60" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-32 left-16 w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg animate-float opacity-60" style={{ animationDelay: '3s' }} />
    </section>
  );
};

export default Hero;
