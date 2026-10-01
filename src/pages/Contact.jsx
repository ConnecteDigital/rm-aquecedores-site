import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { PHONE_DISPLAY, PHONE_HREF, whatsappLink } from '../lib/contact';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
    // Aqui você pode adicionar a lógica para enviar o formulário para um backend
  };

  const fieldClass = 'bg-[#0a0a0a] border-white/10 text-white placeholder:text-neutral-500 h-12 focus-visible:border-primary';

  return (
    <section className="py-24 section-dark glow-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 flex flex-col items-center">
          <span className="eyebrow mb-4">Contato</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Entre em <span className="text-flame">Contato</span> Conosco
          </h1>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="service-card p-8 md:p-10">
            <h2 className="text-2xl font-bold text-white mb-2">Informações de Contato</h2>
            <div className="flame-divider mb-8"></div>
            <div className="space-y-6 text-lg text-neutral-300">
              <a href={PHONE_HREF} className="flex items-center gap-4 hover:text-white">
                <span className="icon-badge w-12 h-12 shrink-0"><Phone className="w-6 h-6" /></span>
                <span>Telefone: {PHONE_DISPLAY}</span>
              </a>
              <a href={whatsappLink('Olá! Gostaria de entrar em contato com a RM Aquecedores.')} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-white">
                <span className="icon-badge w-12 h-12 shrink-0"><MessageCircle className="w-6 h-6" /></span>
                <span>WhatsApp: {PHONE_DISPLAY}</span>
              </a>
              <p className="flex items-center gap-4">
                <span className="icon-badge w-12 h-12 shrink-0"><Mail className="w-6 h-6" /></span>
                <span>E-mail: contato@rmaquecedores.com.br (exemplo)</span>
              </p>
              <p className="flex items-center gap-4">
                <span className="icon-badge w-12 h-12 shrink-0"><MapPin className="w-6 h-6" /></span>
                <span>Atendimento em todo o Rio de Janeiro</span>
              </p>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={PHONE_HREF}
                className="phone-button text-white font-bold px-6 sm:px-8 py-4 text-base sm:text-lg whitespace-nowrap rounded-xl flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6" />
                <span>Ligar Agora</span>
              </a>
              <a
                href={whatsappLink('Olá! Gostaria de entrar em contato com a RM Aquecedores.')}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button text-white font-bold px-6 sm:px-8 py-4 text-base sm:text-lg whitespace-nowrap rounded-xl flex items-center justify-center gap-3"
              >
                <img src="/whatsapp-icon.png" alt="" className="w-6 h-6" />
                <span>Chamar no WhatsApp</span>
              </a>
            </div>
          </div>
          <div className="service-card p-8 md:p-10">
            <h2 className="text-2xl font-bold text-white mb-2">Envie sua Mensagem</h2>
            <div className="flame-divider mb-8"></div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-neutral-300">Nome</Label>
                <Input id="name" type="text" placeholder="Seu nome" required className={fieldClass} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-neutral-300">E-mail</Label>
                <Input id="email" type="email" placeholder="seu.email@exemplo.com" required className={fieldClass} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-neutral-300">Assunto</Label>
                <Input id="subject" type="text" placeholder="Assunto da mensagem" required className={fieldClass} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-neutral-300">Mensagem</Label>
                <Textarea id="message" placeholder="Sua mensagem" rows="5" required className={`${fieldClass} h-auto`} />
              </div>
              <Button type="submit" className="w-full phone-button text-white font-bold h-12 text-base rounded-xl">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
