import React from 'react';
import { Phone, Clock, MapPin, Zap } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_HREF, whatsappLink } from '../lib/contact';

const highlights = [
  { icon: Clock, title: '24 horas por dia', text: 'Inclusive fins de semana e feriados.' },
  { icon: Zap, title: 'Resposta rápida', text: 'Técnico a caminho o quanto antes.' },
  { icon: MapPin, title: 'Todo o Rio de Janeiro', text: 'Atendimento em toda a cidade.' }
];

function Atendimento24h() {
  return (
    <section className="py-24 section-alt glow-bg overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow mb-4">Emergência</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-6">
              Atendimento <span className="text-flame">24 Horas</span>
            </h1>
            <p className="text-lg text-neutral-400 max-w-xl mb-10">
              Emergências não esperam horário comercial. Nossa equipe está pronta para atender você a qualquer hora, em qualquer dia da semana, garantindo rapidez e eficiência para resolver qualquer problema com seu sistema de aquecimento de água.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={PHONE_HREF}
                className="phone-button text-white font-bold px-6 sm:px-8 py-4 text-base sm:text-lg whitespace-nowrap rounded-xl flex items-center justify-center gap-3 hover:scale-[1.03] transition-transform"
              >
                <Phone className="w-6 h-6" />
                <span>Ligar agora: {PHONE_DISPLAY}</span>
              </a>
              <a
                href={whatsappLink('Olá! Preciso de atendimento emergencial para meu aquecedor a gás.')}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button text-white font-bold px-6 sm:px-8 py-4 text-base sm:text-lg whitespace-nowrap rounded-xl flex items-center justify-center gap-3 hover:scale-[1.03] transition-transform"
              >
                <img src="/whatsapp-icon.png" alt="" className="w-6 h-6" />
                <span>Chamar no WhatsApp</span>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-flame opacity-20 blur-3xl rounded-full"></div>
            <div className="relative grid gap-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="service-card p-6 flex items-center gap-5">
                    <div className="icon-badge w-14 h-14 shrink-0">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <p className="text-neutral-400">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Atendimento24h;
