import React from 'react';
import { BookOpen } from 'lucide-react';

function Blog() {
  return (
    <section className="py-24 section-alt">
      <div className="container mx-auto px-4">
        <div className="service-card max-w-4xl mx-auto px-6 py-14 md:px-14 text-center flex flex-col items-center">
          <div className="icon-badge w-16 h-16 mb-6">
            <BookOpen className="w-8 h-8" />
          </div>
          <span className="eyebrow mb-4">Blog</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-5">
            Nosso <span className="text-flame">Blog</span>
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl">
            Em breve, artigos e dicas sobre aquecedores a gás, manutenção, economia de energia e muito mais!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Blog;
