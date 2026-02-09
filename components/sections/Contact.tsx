'use client';

import { useState } from 'react';
import { QrCode, MessageCircle, Sparkles, Smartphone, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    content: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.content.trim()) {
      return;
    }

    // 模拟提交（实际场景中需要连接后端）
    console.log('表单已提交:', formData);
    alert('感谢您的留言！我们会尽快回复。');
    setFormData({ name: '', email: '', content: '' });
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-3 md:px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full">
            <MessageCircle className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">随时联系</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              联系我
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            扫描二维码，关注微信公众号FisherYadd，开启您的英语学习之旅
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl md:rounded-3xl p-8 shadow-xl border border-slate-100">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: QR Code */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  {/* QR Code Container */}
                  <div className="w-64 h-64 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-lg border border-blue-100 flex items-center justify-center">
                    {/* QR Code Image */}
                    <img src="/images/qrcode_wechat.jpg" alt="微信公众号FisherYadd二维码" className="w-full h-full object-contain" />
                  </div>

                  {/* Floating Icon */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full">
                    <Smartphone className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-semibold text-green-700">
                      微信公众号FisherYadd
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Contact Info */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                  Fisher老师
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  扫描上方二维码，关注公众号FisherYadd，
                  <br />
                  即可获取：
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">免费咨询</h4>
                      <p className="text-sm text-slate-600">
                        课程咨询、学习规划、备考建议
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">一对一辅导</h4>
                      <p className="text-sm text-slate-600">
                        个性化教学方案，针对性提升
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-pink-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">课程资料</h4>
                      <p className="text-sm text-slate-600">
                        独家学习资料、真题解析、高分范文
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="pt-4">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
              <p className="text-sm text-slate-700 mb-3">
                💡 <strong>温馨提示：</strong>
                关注后可以免费获取学习资料、备考建议，有问题随时留言
              </p>
              <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                <span>期待与您交流！</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
