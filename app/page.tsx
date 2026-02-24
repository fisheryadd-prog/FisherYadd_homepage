import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import dynamic from 'next/dynamic';
import { SectionSkeleton } from '@/components/skeletons/SectionSkeleton';

// 非首屏组件使用动态导入以提升首屏加载性能
const Projects = dynamic(() => import('@/components/sections/Projects'), {
  loading: () => <SectionSkeleton />,
});

const Qualifications = dynamic(() => import('@/components/sections/Qualifications'), {
  loading: () => <SectionSkeleton />,
});

const Contact = dynamic(() => import('@/components/sections/Contact'), {
  loading: () => <SectionSkeleton />,
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Fisher老师',
  jobTitle: '英语讲师',
  description: '雅思8分专家，教学十余年',
  url: 'https://yuzeng.com',
  knowsAbout: [
    '雅思培训',
    '托福培训',
    'GRE培训',
    '商务英语',
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: '英国兰卡斯特大学',
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen">
        <Header />

        <section id="hero">
          <Hero />
        </section>

        <section id="about" className="bg-white">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="qualifications">
          <Qualifications />
        </section>

        <section id="contact" className="bg-white">
          <Contact />
        </section>

        <Footer />
      </main>
    </>
  );
}
