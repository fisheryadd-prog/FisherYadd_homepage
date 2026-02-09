import { BookOpen, Award, Target, GraduationCap, CheckCircle } from 'lucide-react';

const Qualifications = () => {
  const languageScores = [
    {
      exam: '雅思',
      score: '总分8.0 / 9.0',
      details: '阅读满分，口语8.0',
      icon: <Award className="w-10 h-10" />,
    },
    {
      exam: '托福',
      score: '阅读满分',
      details: '专业阅读技巧培训',
      icon: <BookOpen className="w-10 h-10" />,
    },
    {
      exam: 'GRE',
      score: '328 / 340',
      details: '顶尖分数段',
      icon: <Target className="w-10 h-10" />,
    },
    {
      exam: '多邻国',
      score: '140 / 160',
      details: '高级英语水平',
      icon: <GraduationCap className="w-10 h-10" />,
    },
  ];

  const certificates = [
    '英语专业八级优秀',
    '剑桥商务英语高级证书（BEC Higher）',
    'TESOL国际英语教师证书',
    '中级经济师资格证',
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-3 md:px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full">
            <Award className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">专业资质</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              资质证书
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            顶尖的语言能力与专业认证
          </p>
        </div>

        {/* Language Scores */}
        <div className="mb-12 md:mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-8 md:mb-10">
            语言考试成绩
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {languageScores.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-blue-200 hover:-translate-y-1"
              >
                <div className="mb-3 md:mb-4 flex justify-center">
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white shadow-lg`}>
                    {item.icon}
                  </div>
                </div>
                <h4 className="text-lg md:text-xl font-bold text-center text-slate-900 mb-1 md:mb-2">
                  {item.exam}
                </h4>
                <p className="text-3xl md:text-3xl font-bold text-center text-blue-600 mb-1 md:mb-2">
                  {item.score}
                </p>
                <p className="text-xs md:text-sm text-center text-slate-600">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div className="mb-12 md:mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-8 md:mb-10">
            专业证书
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 shadow-md flex items-center gap-3 hover:shadow-lg transition-all duration-300 border border-slate-100"
              >
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0" />
                <span className="font-semibold text-slate-700 text-sm md:text-base">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
