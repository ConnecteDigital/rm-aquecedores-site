import React from 'react';
import { Star, Quote } from 'lucide-react';

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
    <section className="py-24 section-dark glow-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 flex flex-col items-center">
          <span className="eyebrow mb-4">Depoimentos</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            O que nossos <span className="text-flame">clientes</span> dizem
          </h1>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="service-card p-7 flex flex-col">
              <Quote className="w-10 h-10 text-primary mb-4" />
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-[#f7941d] fill-current' : 'text-neutral-600'}`}
                  />
                ))}
              </div>
              <p className="text-neutral-300 mb-6 flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                <div className="bg-flame w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-white">
                  {testimonial.author.charAt(0)}
                </div>
                <p className="font-bold text-white">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <a
            href={reviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="phone-button text-white font-bold px-8 py-4 rounded-xl text-lg transition-transform hover:scale-[1.03]"
          >
            Deixe sua Avaliação
          </a>
          <a
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-light font-bold px-8 py-4 rounded-xl text-lg"
          >
            Ver no Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
