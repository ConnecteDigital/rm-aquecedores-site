import React from 'react';
import { Phone, MessageCircle, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';

function Atendimento24h() {
  const phoneNumber = ' 21 96430-2000';
  const whatsappNumber = '5521964302000';

  const handlePhoneCall = () => {
    window.open(`tel:+55${phoneNumber.replace('-', '')}`);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá! Preciso de atendimento emergencial para meu aquecedor a gás.');
    window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <Clock className="w-24 h-24 text-primary mx-auto mb-8" />
      <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
        Atendimento 24 Horas
      </h1>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
        Emergências não esperam horário comercial. Nossa equipe está pronta para atender você a qualquer hora, em qualquer dia da semana, garantindo rapidez e eficiência para resolver qualquer problema com seu sistema de aquecimento de água.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button
          onClick={handlePhoneCall}
          size="lg"
          className="phone-button text-white font-bold px-10 py-5 text-lg rounded-md flex items-center space-x-3 hover:scale-105 transition-transform shadow-lg"
        >
          <Phone className="w-6 h-6" />
          <span>Ligar agora:  (21) 96430-2000</span>
        </Button>
        <Button
          onClick={handleWhatsApp}
          size="lg"
          className="whatsapp-button text-white font-bold px-10 py-5 text-lg rounded-md flex items-center space-x-3 hover:scale-105 transition-transform"
        >
          <MessageCircle className="w-6 h-6" />
          <span>Chamar no WhatsApp</span>
        </Button>
      </div>
      <p className="text-md text-gray-500 mt-8">
        Disponível para todo o Rio de Janeiro.
      </p>
    </div>
  );
}

export default Atendimento24h;


