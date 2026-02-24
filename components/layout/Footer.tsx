import { MessageCircle, Globe, Mail, Phone, MapPin, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* About */}
          <div>
            <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Fisher老师
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              专业英语讲师，海归博士。雅思8分专家，教学十余年，
              助力学生申请世界顶尖名校。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-blue-300">快速链接</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>
                <a href="#hero" className="hover:text-blue-400 transition-colors inline-flex items-center gap-2 group">
                  <span>首页</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors inline-flex items-center gap-2 group">
                  <span>关于我</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition-colors inline-flex items-center gap-2 group">
                  <span>AI项目</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              </li>
              <li>
                <a href="#qualifications" className="hover:text-blue-400 transition-colors inline-flex items-center gap-2 group">
                  <span>资质证书</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors inline-flex items-center gap-2 group">
                  <span>联系方式</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-blue-300">教学服务</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                雅思阅读/写作培训
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                托福/GRE培训
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                商务英语课程
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                剑桥英语考试
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                企业英语培训
              </li>
            </ul>
          </div>

          {/* Bottom Bar */}
          <div className="md:col-span-3 pt-8 border-t border-slate-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Copyright */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold text-base">
                    &copy; {currentYear} Fisher老师
                  </p>
                  <p className="text-slate-400 text-sm">
                    All rights reserved.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-slate-600 to-transparent" />

              {/* Links */}
              <div className="flex items-center gap-8 text-sm">
                <a href="#" className="group flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-all duration-300">
                  <span>隐私政策</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
                <a href="#" className="group flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-all duration-300">
                  <span>使用条款</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              </div>

              {/* Social Badge */}
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-xl border border-slate-700">
                <Heart className="w-4 h-4 text-red-400 fill-red-400" />
                <span className="text-slate-300 text-sm font-medium">用心教学</span>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 text-center">
              <p className="text-slate-500 text-sm leading-relaxed">
                专注英语教学十余年 · 雅思8分专家 · 助力梦校申请
                <span className="mx-2 text-slate-600">|</span>
                <span className="text-blue-400">Made with</span>
                <span className="text-red-400 mx-1">❤</span>
                <span className="text-blue-400">in China</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
