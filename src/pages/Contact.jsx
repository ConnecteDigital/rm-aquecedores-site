import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';

function Contact() {
  const phoneNumber = ' 21 98899-9672';
  const whatsappNumber = '5521964302000';

  const handlePhoneCall = () => {
    window.open(`tel:+55${phoneNumber.replace('-', '')}`);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de entrar em contato com a RM Aquecedores.');
    window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
    // Aqui você pode adicionar a lógica para enviar o formulário para um backend
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-secondary mb-12">
        Entre em Contato Conosco
      </h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-secondary mb-6">Informações de Contato</h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p className="flex items-center space-x-3">
              <Phone className="w-6 h-6 text-primary" />
              <span>Telefone: 21 98899-9672</span>
            </p>
            <p className="flex items-center space-x-3">
              <MessageCircle className="w-6 h-6 text-primary" />
              <span>WhatsApp:  (21) 96430-2000</span>
            </p>
            <p className="flex items-center space-x-3">
              <Mail className="w-6 h-6 text-primary" />
              <span>E-mail: contato@rmaquecedores.com.br (exemplo)</span>
            </p>
            <p className="flex items-center space-x-3">
              <MapPin className="w-6 h-6 text-primary" />
              <span>Atendimento em todo o Rio de Janeiro</span>
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              onClick={handlePhoneCall}
              size="lg"
              className="phone-button text-white font-bold px-8 py-4 text-lg rounded-md flex items-center space-x-3 shadow-lg"
            >
              <Phone className="w-6 h-6" />
              <span>Ligar Agora</span>
            </Button>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="whatsapp-button text-white font-bold px-8 py-4 text-lg rounded-md flex items-center space-x-3 shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Chamar no WhatsApp</span>
            </Button>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-secondary mb-6">Envie sua Mensagem</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input id="name" type="text" placeholder="Seu nome" required />
            </div>
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" placeholder="seu.email@exemplo.com" required />
            </div>
            <div>
              <Label htmlFor="subject">Assunto</Label>
              <Input id="subject" type="text" placeholder="Assunto da mensagem" required />
            </div>
            <div>
              <Label htmlFor="message">Mensagem</Label>
              <Textarea id="message" placeholder="Sua mensagem" rows="5" required />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-md">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;


