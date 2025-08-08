import React from 'react';
import { Phone, MessageCircle, Wrench, Shield, Clock, Users, CheckCircle, Star, Menu } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Importar imagens
import logoRM from './assets/rm_aquecedores_logo.png';
import instalacaoImg from './assets/instalacao_aquecedor.jpg';
import manutencaoImg from './assets/manutencao_aquecedor.jpg';
import consertoImg from './assets/conserto_aquecedor.jpg';
import heroBackground from '/new_hero_background.png';

// Importar páginas
import ServicesPage from './pages/Services';
import Atendimento24hPage from './pages/Atendimento24h';
import ContactPage from './pages/Contact';
import BlogPage from './pages/Blog';
import TestimonialsPage from './pages/Testimonials';

function App() {
  const phoneNumber = '2196430-2000';
  const whatsappNumber = '5521964302000';

  const handlePhoneCall = () => {
    window.open(`tel:+55${phoneNumber.replace('-', '')}`);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de solicitar um orçamento para serviços de aquecedor a gás.');
    window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`, '_blank');
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
    },
    {
      title: 'Venda de Aquecedores',
      description: 'Comercialização de aquecedores a gás das melhores marcas do mercado, com garantia e suporte técnico completo.',
      image: instalacaoImg,
      icon: <Users className="w-8 h-8 text-primary" />
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

  const HomePage = () => (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 relative overflow-hidden bg-cover bg-center md:bg-center bg-[center_20%]" style={{ backgroundImage: `url(${heroBackground})` }}>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Instalação e Manutenção de Aquecedores
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Atendimento Especializado com garantia total, Técnicos Especializados disponíveis 24 Horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:+55${phoneNumber.replace('-', '')}`}
              className="phone-button text-white font-bold px-10 py-5 text-lg rounded-md flex items-center space-x-3 hover:scale-105 transition-transform shadow-lg"
            >
              <Phone className="w-6 h-6" />
              <span>Ligar agora: (21) 96430-2000</span>
            </a>
            <a
              href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent('Olá! Gostaria de solicitar um orçamento para serviços de aquecedor a gás.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button text-white font-bold px-10 py-5 text-lg rounded-md flex items-center space-x-3 hover:scale-105 transition-transform shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </div>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <a
                    href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent('Olá! Gostaria de solicitar um orçamento para ' + service.title.toLowerCase() + '.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-2 px-4 rounded-md text-center inline-block"
                  >
                    Solicitar Orçamento
                  </a>
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

      {/* Services Section (from ServicesPage) */}
      <ServicesPage />

      {/* Atendimento 24h Section (from Atendimento24hPage) */}
      <Atendimento24hPage />

      {/* Testimonials Section (from TestimonialsPage) */}
      <TestimonialsPage />

      {/* Blog Section (from BlogPage) */}
      <BlogPage />

      {/* Contact Section (from ContactPage) */}
      <ContactPage />

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
            <a
              href={`tel:+55${phoneNumber.replace('-', '')}`}
              className="phone-button text-white font-bold px-10 py-5 text-lg rounded-md flex items-center space-x-3 hover:scale-105 transition-transform shadow-lg"
            >
              <Phone className="w-6 h-6" />
              <span>Ligar agora: (21) 96430-2000</span>
            </a>
            <a
              href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent('Olá! Gostaria de solicitar um orçamento para serviços de aquecedor a gás.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button text-white font-bold px-10 py-5 text-lg rounded-md flex items-center space-x-3 hover:scale-105 transition-transform shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-3">
              <img src={logoRM} alt="RM Aquecedores" className="h-12 w-12 rounded-full object-cover" />
              <span className="text-xl font-bold text-secondary">RM Aquecedores</span>
            </Link>
            <a
              href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent('Olá! Gostaria de solicitar um orçamento para serviços de aquecedor a gás.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-colors"
              title="Chamar no WhatsApp"
            >
              <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-5 h-5" />
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary font-semibold transition-colors">Início</Link>
            <Link to="/servicos" className="text-gray-700 hover:text-primary font-semibold transition-colors">Serviços</Link>
            <Link to="/atendimento-24h" className="text-gray-700 hover:text-primary font-semibold transition-colors">Atendimento 24h</Link>
            <Link to="/depoimentos" className="text-gray-700 hover:text-primary font-semibold transition-colors">Depoimentos</Link>
            <Link to="/blog" className="text-gray-700 hover:text-primary font-semibold transition-colors">Blog</Link>
            <Link to="/contato" className="text-gray-700 hover:text-primary font-semibold transition-colors">Contato</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <a
              href={`tel:+55${phoneNumber.replace('-', '')}`}
              className="phone-button text-white font-semibold px-6 py-2 rounded-lg flex items-center space-x-2 hover:scale-105 transition-transform hidden sm:flex"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">(21) 96430-2000</span>
            </a>
            <a
              href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent('Olá! Gostaria de solicitar um orçamento para serviços de aquecedor a gás.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button text-white font-semibold px-6 py-2 rounded-lg flex items-center space-x-2 hover:scale-105 transition-transform hidden sm:flex"
            >
              <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <button className="md:hidden text-gray-700">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicos" element={<ServicesPage />} />
          <Route path="/atendimento-24h" element={<Atendimento24hPage />} />
          <Route path="/depoimentos" element={<TestimonialsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contato" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Link to="/">
                <img src={logoRM} alt="RM Aquecedores" className="h-12 w-auto mb-4" />
              </Link>
              <p className="text-gray-400 mb-4">
                Especialistas em instalação, manutenção e conserto de aquecedores a gás
                em todo Rio de Janeiro.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/servicos" className="hover:text-primary transition-colors">Instalação de Aquecedores a Gás</Link></li>
                <li><Link to="/servicos" className="hover:text-primary transition-colors">Manutenção Preventiva</Link></li>
                <li><Link to="/servicos" className="hover:text-primary transition-colors">Conserto de Aquecedores</Link></li>
                <li><Link to="/atendimento-24h" className="hover:text-primary transition-colors">Atendimento de Emergência</Link></li>
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
      <a
        href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent('Olá! Gostaria de solicitar um orçamento para serviços de aquecedor a gás.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp whatsapp-button text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
      >
        <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-8 h-8" />
      </a>
    </div>
  );
}

export default App;
