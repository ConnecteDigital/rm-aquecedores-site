import React from 'react';

function Blog() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
        Nosso Blog
      </h1>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
        Em breve, artigos e dicas sobre aquecedores a gás, manutenção, economia de energia e muito mais!
      </p>
      <img 
        src="https://via.placeholder.com/800x400?text=Blog+em+Constru%C3%A7%C3%A3o"
        alt="Blog em Construção"
        className="mx-auto rounded-lg shadow-lg"
      />
    </div>
  );
}

export default Blog;


