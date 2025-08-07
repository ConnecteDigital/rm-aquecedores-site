import React from 'react';
import { Phone, MessageCircle, Wrench, Shield, Clock, Users, CheckCircle, Star } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import './App.css';

// Importar imagens
import logoRM from './assets/rm_aquecedores_logo.png';
import instalacaoImg from './assets/instalacao_aquecedor.jpg';
import manutencaoImg from './assets/manutencao_aquecedor.jpg';
import consertoImg from './assets/conserto_aquecedor.jpg';

function App() {
  const phoneNumber = '2196430-2000';
  const whatsappNumber = '5521964302000';

  const handlePhoneCall = () => {
    window.open(`tel:+55${phoneNumber.replace('-', '')}`);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de solicitar um orçamento para serviços de aquecedor a gás.');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const services = [
    {
      title: 'Instalação de Aquecedores a Gás',
      description: 'Instalação profissional com projeto personalizado e adequação às normas técnicas vigentes.',
      image: instalacaoImg,
      icon: <Wrench className="w-8 h-8 text-primary" />
    },
    {
      title: 'Manutenção Preventiva',
      description: 'Manutenção preventiva e corretiva para sistemas de aquecimento a gás, garantindo máxima eficiência energética.',
      image: manutencaoImg,
      icon: <CheckCircle className="w-8 h-8 text-primary" />
    },
    {
      title: 'Conserto de Aquecedores',
      description: 'Serviço especializado em conserto de aquecedores a gás, incluindo limpeza, regulagem e substituição de peças.',
      image: consertoImg,
      icon: <Shield className="w-8 h-8 text-primary" />
    }
  ];

  const features = [
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: 'Atendimento Rápido',
      description: 'Atendimento ágil e eficiente quando você mais precisa'
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: 'Equipe Especializada',
      description: 'Técnicos qualificados e experientes em sistemas de aquecimento a gás'
    },
    {
      icon: <Wrench className="w-12 h-12 text-primary" />,
      title: 'Equipamentos Modernos',
      description: 'Ferramentas e equipamentos de última geração para serviços eficientes'
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: 'Garantia Total',
      description: 'Todos os nossos serviços possuem garantia total'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={logoRM} alt="RM Aquecedores" className="h-12 w-auto" />
          </div>
          <div className="flex items-center space-x-4">
            <Button
              onClick={handlePhoneCall}
              className="phone-button text-white font-semibold px-6 py-2 rounded-lg flex items-center space-x-2 hover:scale-105 transition-transform"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">(21) 96430-2000</span>
            </Button>
            <Button
              onClick={handleWhatsApp}
              className="whatsapp-button text-white font-semibold px-6 py-2 rounded-lg flex items-center space-x-2 hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Instalação, Manutenção e Conserto de
            <span className="block text-primary-foreground">Aquecedores a Gás</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Atendimento especializado em todo Rio de Janeiro com garantia total.
            Técnicos qualificados e equipamentos modernos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handlePhoneCall}
              size="lg"
              className="phone-button text-white font-bold px-8 py-4 text-lg rounded-xl flex items-center space-x-3 hover:scale-105 transition-transform shadow-lg"
            >
              <Phone className="w-6 h-6" />
              <span>Ligar agora: (21) 96430-2000</span>
            </Button>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="whatsapp-button text-white font-bold px-8 py-4 text-lg rounded-xl flex items-center space-x-3 hover:scale-105 transition-transform shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Chamar no WhatsApp</span>
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas em sistemas de aquecimento a gás,
              com qualidade, segurança e garantia total.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card bg-white border-0 shadow-lg overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-lg">
                    {service.icon}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-secondary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {service.description}
                  </CardDescription>
                  <Button
                    onClick={handleWhatsApp}
                    className="w-full bg-accent hover:bg-accent/90 text-white font-semibold"
                  >
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Por que Escolher a RM Aquecedores?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Somos especialistas em aquecedores a gás com anos de experiência
              e compromisso com a excelência.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Precisa de Atendimento?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Nossa equipe está pronta para atender você com rapidez e eficiência.
            Entre em contato agora mesmo!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handlePhoneCall}
              size="lg"
              className="phone-button text-white font-bold px-8 py-4 text-lg rounded-xl flex items-center space-x-3 hover:scale-105 transition-transform shadow-lg"
            >
              <Phone className="w-6 h-6" />
              <span>Ligar agora: (21) 96430-2000</span>
            </Button>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="whatsapp-button text-white font-bold px-8 py-4 text-lg rounded-xl flex items-center space-x-3 hover:scale-105 transition-transform shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Chamar no WhatsApp</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src={logoRM} alt="RM Aquecedores" className="h-12 w-auto mb-4" />
              <p className="text-gray-400 mb-4">
                Especialistas em instalação, manutenção e conserto de aquecedores a gás
                em todo Rio de Janeiro.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Instalação de Aquecedores a Gás</li>
                <li>Manutenção Preventiva</li>
                <li>Conserto de Aquecedores</li>
                <li>Atendimento de Emergência</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-2 text-gray-400">
                <p>Telefone: (21) 96430-2000</p>
                <p>WhatsApp: (21) 96430-2000</p>
                <p>Atendimento: Todo Rio de Janeiro</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 RM Aquecedores. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <Button
        onClick={handleWhatsApp}
        className="floating-whatsapp whatsapp-button text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
        size="lg"
      >
        <MessageCircle className="w-8 h-8" />
      </Button>
    </div>
  );
}

export default App;

