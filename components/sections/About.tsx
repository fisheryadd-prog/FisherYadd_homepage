import { 
  GraduationCap, 
  Award, 
  Clock, 
  Users, 
  Globe, 
  Brain, 
  Sparkles 
} from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: '海归博士',
      description: '英国兰卡斯特大学访学，拥有丰富的国际教育背景',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: '中级经济师',
      description: '具备专业的经济学知识和分析能力',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '教学经验丰富',
      description: '教学十余年，累计教学时长一万小时以上',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '桃李满天下',
      description: '帮助众多学生获得满分阅读、7分写作',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: '顶尖名校导师',
      description: '助力学生申请斯坦福、MIT、英国G5、港大、澳国立等',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI教学先锋',
      description: 'Waytoagi社区训练营2期结业学员，擅长AI融入教学',
      gradient: 'from-violet-500 to-purple-500'
    },
  ];

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 left-0 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-3xl opacity-50" />

      <div className="container-custom relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-3 md:px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
            <span className="text-xs md:text-sm font-semibold text-blue-700">专业与热情</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              关于我
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            专业英语讲师，致力于帮助学生实现留学梦想
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-12 md:mb-16 lg:mb-20">
          {/* Left: Introduction */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 md:mb-8">
              Fisher老师
            </h3>
            <div className="space-y-4 md:space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
              <p>
                我是一名专业的英语讲师，拥有海归博士学位和中级经济师资格。
                在英国兰卡斯特大学访学期间，深入研究了国际英语教学方法和跨文化交际理论。
              </p>
              <p>
                从事英语教学十余年，累计教学时长超过一万小时。
                我专注于雅思、托福、GRE等出国留学考试培训，以及商务英语、剑桥通用英语等级考试等课程。
              </p>
              <p>
                作为Waytoagi社区训练营2期结业学员，我积极探索人工智能技术在英语教学中的应用，
                致力于通过AI赋能教学，提升学习效率和教学质量。
              </p>
            </div>

            {/* Teaching Philosophy */}
            <div className="mt-6 md:mt-10 p-5 md:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                <h4 className="text-lg md:text-xl font-bold text-blue-700">
                  教学理念
                </h4>
              </div>
              <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                因材施教，注重实战。我相信每个学生都有独特的潜力，
                通过科学的方法和个性化的指导，帮助学生突破瓶颈，实现目标。
              </p>
            </div>
          </div>

          {/* Right: Highlights */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-5">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-4 md:p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-blue-200 hover:-translate-y-0.5"
              >
                <div className={`mb-3 md:mb-4 w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h4 className="font-bold text-slate-900 mb-1 md:mb-2 text-sm md:text-base lg:text-lg">
                  {item.title}
                </h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Teaching Courses */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-slate-100">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-6 md:mb-8 lg:mb-10">
            主讲课程
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-5">
            {[
              '雅思阅读',
              '雅思写作',
              '商务英语',
              '剑桥KET/PET/FCE',
              '留学考试培训',
              '企业英语培训',
            ].map((course, index) => (
              <div
                key={index}
                className="p-3 md:p-4 lg:p-5 bg-white rounded-lg md:rounded-xl text-center font-semibold text-slate-700 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-blue-300 border border-slate-200 text-xs md:text-sm lg:text-base"
              >
                {course}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
