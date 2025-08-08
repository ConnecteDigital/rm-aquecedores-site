import React from 'react';
import { Star } from 'lucide-react';

function Testimonials() {
  const testimonials = [
    {
      quote: "Solicitei os serviços da empresa com o Vitor ontem a noite, hoje pela manhã ele já enviou o técnico. E já foi resolvido...",
      author: "Rodrigo Vianna",
      rating: 5
    },
    {
      quote: "Gostaria de deixar registrado a competência, profissionalismo e comprometimento do técnico Raphael Monteiro. Um excelente profissional!!",
      author: "Marcelo Ribeiro",
      rating: 5
    },
    {
      quote: "Excelente empresa e profissional muito honesto! Problema do meu aquecedor se tratava apenas de um fio rompido enquanto outras empresas condenavam peças. A RM aquecedores consertaram exatamente o que era! Sem preço excessivo",
      author: "Renan Pimenta",
      rating: 5
    },
    {
      quote: "Excelente prestador, encontrei aqui pela internet e veio reparar meu aquecedor no mesmo dia, no prazo de 30 minutos e...",
      author: "Bruno Fadul",
      rating: 5
    }
  ];

  const googleMapsLink = "https://share.google/hjBVpmT0JSeQELemu";
  const reviewLink = "https://g.page/r/CTWJl38xWPYvEBM/review";

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
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
        <a
          href={reviewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-md text-lg flex items-center space-x-2 transition-colors"
        >
          Deixe sua Avaliação
        </a>
        <a
          href={googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-md text-lg flex items-center space-x-2 transition-colors"
        >
          Ver no Google Maps
        </a>
      </div>
    </div>
  );
}

export default Testimonials;


