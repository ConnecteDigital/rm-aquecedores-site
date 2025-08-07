import React from 'react';
import { Star } from 'lucide-react';

function Testimonials() {
  const testimonials = [
    {
      quote: "Excelente serviço! A equipe da RM Aquecedores foi super profissional e resolveu o problema do meu aquecedor rapidamente. Recomendo a todos!",
      author: "João Silva",
      rating: 5
    },
    {
      quote: "Fiquei muito satisfeito com a instalação do meu aquecedor a gás. Tudo feito com muita atenção e segurança. Parabéns pelo trabalho!",
      author: "Maria Oliveira",
      rating: 5
    },
    {
      quote: "Atendimento 24 horas de verdade! Meu aquecedor parou de funcionar de madrugada e eles vieram na mesma hora. Salvaram meu dia!",
      author: "Carlos Souza",
      rating: 4
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-secondary mb-12">
        O que nossos clientes dizem
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
              ))}
              {[...Array(5 - testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-gray-300" />
              ))}
            </div>
            <p className="text-lg text-gray-700 mb-6 italic">
              \"{testimonial.quote}\"
            </p>
            <p className="text-md font-semibold text-secondary">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;


