'use client';

import { useState } from 'react';
import { MessageSquare, X, Send, Minimize2, Maximize2, Sparkles, User, Bot, Clock, Heart } from 'lucide-react';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'assistant',
      name: 'AI助手',
      content: '您好！我是Fisher老师的AI数字分身，很高兴为您服务！我可以帮您：\n\n• 介绍雅思/托福/GRE考试信息\n• 提供学习建议和备考策略\n• 解答英语学习问题\n• 了解课程安排\n\n请问有什么可以帮助您的？',
      date: new Date().toISOString().split('T')[0],
      likes: 0
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const predefinedQuestions = [
    '雅思如何备考？',
    '托福阅读满分技巧',
    'GRE写作怎么提高？',
    '课程怎么报名？'
  ];

  const handleSendMessage = (content: string) => {
    if (!content.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      role: 'user',
      name: '用户',
      content,
      date: new Date().toISOString().split('T')[0],
      likes: 0,
    };

    setMessages([...messages, newMessage]);
    setInputValue('');

    // Simulate typing
    setIsTyping(true);
    setTimeout(() => {
      let response = '';

      // Simple keyword matching for demo
      if (content.includes('雅思')) {
        response = '雅思备考建议：\n\n1. **听力**：精听BBC、VOA等新闻，练习边听边记笔记\n2. **阅读**：掌握同义替换，提高快速定位能力\n3. **写作**：背诵高分句型，练习Task 1和Task 2\n4. **口语**：多练习Part 2和Part 3，积累话题词汇\n\n\n需要我详细讲解某个部分吗？';
      } else if (content.includes('托福')) {
        response = '托福阅读满分技巧：\n\n1. **词汇**：每天背诵50-100个托福词汇\n2. **速度**：练习快速阅读，平均每题1分钟\n3. **题型**：熟悉10大题型，掌握解题方法\n4. **笔记**：边读边记，标记关键信息\n5. **错题**：总结错题，找出薄弱环节\n\n\n您可以尝试模拟考试，我帮您分析薄弱环节。';
      } else if (content.includes('GRE')) {
        response = 'GRE写作提高方法：\n\n1. **Issue**：练习论证结构，培养批判性思维\n2. **Argument**：学习识别逻辑谬误\n3. **词汇**：掌握GRE高频词汇和学术表达\n4. **范文**：多读高分范文，学习段落组织\n5. **限时**：每次练习限时30分钟完成\n\n需要我推荐一些写作素材吗？';
      } else if (content.includes('课程') || content.includes('报名')) {
        response = '课程报名方式：\n\n**线上课程**：\n• 雅思全程班、托福强化班、GRE冲刺班\n• 支持一对一辅导\n\n\n**线下课程**：\n• 周末班、寒暑假集训班\n• 小班教学，名额有限\n\n\n报名方式：\n扫描联系方式页面二维码，添加Fisher老师微信\n\n我会尽快与您联系，为您制定学习计划！';
      } else {
        response = '感谢您的提问！作为AI助手，我可以为您提供学习建议、考试信息等服务。\n\n您可以问我关于：\n• 雅思/托福/GRE备考\n• 学习方法\n• 课程安排\n\n或者点击下方快捷按钮选择常见问题。';
      }

      setIsTyping(false);
      setMessages([...messages, newMessage, {
        id: messages.length + 2,
        role: 'assistant',
        name: 'AI助手',
        content: response,
        date: new Date().toISOString().split('T')[0],
        likes: 0
      }]);
    }, 1500);
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 z-50 group"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity animate-pulse" />
            <div className="relative w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="relative">
                <MessageSquare className="w-8 h-8 text-white" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
            </div>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-8 right-8 z-50 bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${isMinimized ? 'w-80 h-auto' : 'w-96 max-h-[600px]'}`}>
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white">AI数字分身</h3>
                <p className="text-xs text-white/80">Fisher老师的智能助手</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
              >
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[450px] overflow-y-auto p-4 bg-slate-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className="flex items-start gap-2.5 mb-4"
              >
                {message.role === 'assistant' ? (
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-md">
                    <Sparkles className="w-5 h-5" />
                  </div>
                ) : (
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-slate-700 shadow-md">
                    <span className="font-bold text-lg">{message.name.charAt(0)}</span>
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                    <h4 className="font-bold text-slate-900 mb-1 text-sm">
                      {message.role === 'assistant' ? 'AI助手' : message.name}
                    </h4>
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <Clock className="w-3 h-3" />
                      <time>{message.date}</time>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                    {message.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Questions */}
          <div className="px-4 py-3 bg-white border border-slate-100">
            <p className="text-xs md:text-slate-500 mb-2">快捷提问：</p>
            <div className="flex flex-wrap gap-2">
              {predefinedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(question)}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-red-50 rounded-full transition-colors group"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
              placeholder="输入您的问题..."
              className="flex-1 px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-slate-900 text-base"
            />
            <button
              onClick={() => handleSendMessage(inputValue)}
              disabled={!inputValue.trim() || isTyping}
              className="p-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              发送
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
