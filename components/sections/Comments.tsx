'use client';

import { useState } from 'react';
import { MessageCircle, Star, Clock, User, Heart, ThumbsUp, Send } from 'lucide-react';

interface Comment {
  id: string;
  name: string;
  content: string;
  date: string;
  likes: number;
}

const Comments = () => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      name: '小王',
      content: 'Fisher老师的雅思课程真的太棒了！跟着老师学了两个月，阅读从6分提升到了8.5分，非常感谢！',
      date: '2024-01-15',
      likes: 12,
    },
    {
      id: '2',
      name: '李同学',
      content: '老师的教学方法很独特，不只是讲技巧，更重要的是教我们如何思考。推荐给所有备考雅思的同学！',
      date: '2024-01-10',
      likes: 8,
    },
    {
      id: '3',
      name: '张明',
      content: '咨询了很多老师，回复都很及时。报名了一对一辅导后，感觉进步非常明显，5月考试有信心了！',
      date: '2024-01-08',
      likes: 15,
    },
  ]);

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

    const newComment: Comment = {
      id: Date.now().toString(),
      name: formData.name,
      content: formData.content,
      date: new Date().toISOString().split('T')[0],
      likes: 0,
    };

    setComments([newComment, ...comments]);
    setFormData({ name: '', email: '', content: '' });
  };

  const handleLike = (id: string) => {
    setComments(comments.map(comment =>
      comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
    ));
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
            <span className="text-sm font-semibold text-blue-700">学员互动</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              学员留言
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            分享您的学习心得，与同学们互动交流
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Left: Comment Form */}
          <div className="order-2 md:order-1">
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-slate-100">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-blue-600" />
                发表留言
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                        htmlFor="comment-name"
                        className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    姓名 *
                  </label>
                  <input
                    type="text"
                    id="comment-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-slate-900 text-base"
                    placeholder="请输入您的姓名"
                    required
                  />
                </div>

                <div>
                  <label
                        htmlFor="comment-email"
                        className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    邮箱
                  </label>
                  <input
                    type="email"
                    id="comment-email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-slate-900 text-base"
                    placeholder="请输入您的邮箱（选填）"
                  />
                </div>

                <div>
                  <label
                        htmlFor="comment-content"
                        className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    留言内容 *
                  </label>
                  <textarea
                    id="comment-content"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-slate-900 text-base resize-none"
                    placeholder="分享您的学习心得或提问..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  发布留言
                </button>
              </form>
            </div>
          </div>

          {/* Right: Comments List */}
          <div className="order-1 md:order-2">
            <div className="mb-6 md:mb-8">
              <div className="flex items-center justify-between">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-3">
                  <Star className="w-6 h-6 text-yellow-500" />
                  最新留言
                </h3>
                <span className="text-sm text-slate-500">
                  共 {comments.length} 条
                </span>
              </div>
            </div>

            <div className="space-y-4 md:space-y-5 max-h-[600px] md:max-h-[700px] overflow-y-auto pr-2">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
                >
                  {/* Comment Header */}
                  <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                    {/* Avatar */}
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">
                      {comment.name.charAt(0)}
                    </div>

                    {/* Name and Date */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                        <h4 className="font-bold text-slate-900 text-base md:text-lg">
                          {comment.name}
                        </h4>
                        <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-slate-500">
                          <Clock className="w-3 h-3 md:w-4 md:h-4" />
                          <time>{comment.date}</time>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Comment Content */}
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base mb-4">
                    {comment.content}
                  </p>

                  {/* Comment Actions */}
                  <div className="flex items-center justify-between">
                    <button
                        onClick={() => handleLike(comment.id)}
                        className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-slate-100 hover:bg-red-50 rounded-full transition-colors group"
                      >
                      <Heart className={`w-4 h-4 md:w-5 md:h-5 ${comment.likes > 0 ? 'text-red-500 fill-red-500' : 'text-slate-400'} group-hover:scale-110 transition-transform`} />
                      <span className="text-xs md:text-sm text-slate-600 font-medium">
                        {comment.likes}
                      </span>
                    </button>

                    <button
                      className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-blue-50 hover:bg-blue-100 rounded-full transition-colors group"
                    >
                      <ThumbsUp className="w-4 h-4 md:w-5 md:h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                      <span className="text-xs md:text-sm text-slate-600 font-medium">
                        回复
                      </span>
                    </button>
                  </div>
                </div>
              ))}

            {/* Load More Button */}
            </div>

            {/* Load More Button */}
            {comments.length > 0 && (
              <div className="mt-6 text-center">
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-blue-200 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 hover:bg-blue-100 hover:border-blue-300 transition-all duration-300">
                  查看更多留言
                  <span className="text-2xl">→</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
