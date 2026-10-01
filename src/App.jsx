import React, { useEffect, useState } from 'react';
import { Phone, Wrench, Shield, Clock, Users, CheckCircle, Menu, X, MapPin, Flame, ArrowRight } from 'lucide-react';
import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import './App.css';

// Importar imagens
import logoRM from './assets/rm_aquecedores_logo.png';
import instalacaoImg from './assets/instalacao_aquecedor.jpg';
import manutencaoImg from './assets/manutencao_aquecedor.jpg';
import consertoImg from './assets/conserto_aquecedor.jpg';
import heroBackground from './assets/new_hero_background.png';

import ServicesPage from './pages/Services';

import Atendimento24hPage from './pages/Atendimento24h';
import ContactPage from './pages/Contact';
import BlogPage from './pages/Blog';
import TestimonialsPage from './pages/Testimonials';

import { PHONE_DISPLAY, PHONE_HREF, whatsappLink } from './lib/contact';

const navItems = [
  { to: '/', label: 'Início' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/atendimento-24h', label: 'Atendimento 24h' },
  { to: '/depoimentos', label: 'Depoimentos' },
  { to: '/blog', label: 'Blog' },
  { to: '/contato', label: 'Contato' }
];

const services = [
  {
    title: 'Instalação de Aquecedores a Gás',
    description: 'Instalação profissional com projeto personalizado e adequação às normas técnicas vigentes.',
    image: instalacaoImg,
    icon: Wrench
  },
  {
    title: 'Manutenção Preventiva',
    description: 'Manutenção preventiva e corretiva para sistemas de aquecimento a gás, garantindo máxima eficiência energética.',
    image: manutencaoImg,
    icon: CheckCircle
  },
  {
    title: 'Conserto de Aquecedores',
    description: 'Serviço especializado em conserto de aquecedores a gás, incluindo limpeza, regulagem e substituição de peças.',
    image: consertoImg,
    icon: Shield
  },
  {
    title: 'Venda de Aquecedores',
    description: 'Comercialização de aquecedores a gás das melhores marcas do mercado, com garantia e suporte técnico completo.',
    image: instalacaoImg,
    icon: Users
  }
];

const features = [
  {
    icon: Clock,
    title: 'Atendimento Rápido',
    description: 'Atendimento ágil e eficiente quando você mais precisa'
  },
  {
    icon: Users,
    title: 'Equipe Especializada',
    description: 'Técnicos qualificados e experientes em sistemas de aquecimento a gás'
  },
  {
    icon: Wrench,
    title: 'Equipamentos Modernos',
    description: 'Ferramentas e equipamentos de última geração para serviços eficientes'
  },
  {
    icon: Shield,
    title: 'Garantia Total',
    description: 'Todos os nossos serviços possuem garantia total'
  }
];

const heroHighlights = [
  { value: '24h', label: 'Atendimento todos os dias' },
  { value: 'RJ', label: 'Atendemos todo o Rio' },
  { value: '100%', label: 'Serviços com garantia' }
];

function CtaButtons({ className = '' }) {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <a
        href={PHONE_HREF}
        className="phone-button text-white font-bold px-6 sm:px-8 py-4 text-base sm:text-lg whitespace-nowrap rounded-xl flex items-center justify-center gap-3 hover:scale-[1.03] transition-transform"
      >
        <Phone className="w-6 h-6" />
        <span>Ligar agora: {PHONE_DISPLAY}</span>
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button text-white font-bold px-6 sm:px-8 py-4 text-base sm:text-lg whitespace-nowrap rounded-xl flex items-center justify-center gap-3 hover:scale-[1.03] transition-transform shadow-lg"
      >
        <img src="/whatsapp-icon.png" alt="" className="w-6 h-6" />
        <span>Chamar no WhatsApp</span>
      </a>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="text-center mb-14 flex flex-col items-center">
      {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
      <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5">{title}</h2>
      {description && (
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  );
}

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-cover bg-[70%_center] min-h-[640px] md:min-h-[720px] flex items-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold text-neutral-200 mb-8">
              <Flame className="w-4 h-4 text-primary" />
              Especialistas em aquecedores a gás no Rio de Janeiro
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-[1.05]">
              Instalação e Manutenção de <span className="text-flame">Aquecedores</span>
            </h1>
            <p className="text-lg md:text-xl mb-10 text-neutral-300 max-w-xl">
              Atendimento especializado com garantia total. Técnicos especializados disponíveis 24 horas.
            </p>
            <CtaButtons />
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-lg">
              {heroHighlights.map((item) => (
                <div key={item.label} className="border-l-2 border-primary pl-4">
                  <div className="font-display text-2xl md:text-3xl font-extrabold text-white">{item.value}</div>
                  <div className="text-xs md:text-sm text-neutral-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 section-alt">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="O que fazemos"
            title={<>Nossos <span className="text-flame">Serviços</span></>}
            description="Oferecemos soluções completas em sistemas de aquecimento a gás, com qualidade, segurança e garantia total."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="service-card group overflow-hidden flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent"></div>
                    <div className="icon-badge absolute bottom-0 left-6 translate-y-1/2 w-14 h-14">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>
                  <div className="p-6 pt-10 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-neutral-400 mb-6 flex-grow">{service.description}</p>
                    <a
                      href={whatsappLink('Olá! Gostaria de solicitar um orçamento para ' + service.title.toLowerCase() + '.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-bold text-primary hover:gap-3 transition-all"
                    >
                      Solicitar Orçamento <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 section-dark glow-bg">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Diferenciais"
            title={<>Por que escolher a <span className="text-flame">RM Aquecedores</span>?</>}
            description="Somos especialistas em aquecedores a gás com anos de experiência e compromisso com a excelência."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="service-card p-8 relative">
                  <span className="absolute top-6 right-6 font-display text-5xl font-black text-white/5">
                    0{index + 1}
                  </span>
                  <div className="icon-badge w-14 h-14 mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-neutral-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Atendimento 24h Section (from Atendimento24hPage) */}
      <Atendimento24hPage />

      {/* Testimonials Section (from TestimonialsPage) */}
      <TestimonialsPage />

      {/* Blog Section (from BlogPage) */}
      <BlogPage />

      {/* CTA Section */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-4">
          <div className="bg-flame rounded-3xl px-6 py-14 md:px-16 md:py-16 relative overflow-hidden">
            <Flame className="absolute -right-10 -bottom-10 w-72 h-72 text-white/10" strokeWidth={1} />
            <div className="relative grid lg:grid-cols-[1fr_auto] gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                  Precisa de atendimento?
                </h2>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                  Nossa equipe está pronta para atender você com rapidez e eficiência. Entre em contato agora mesmo!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
                <a
                  href={PHONE_HREF}
                  className="bg-[#0a0a0a] hover:bg-black text-white font-bold px-6 sm:px-8 py-4 text-base sm:text-lg whitespace-nowrap rounded-xl flex items-center justify-center gap-3 transition-colors"
                >
                  <Phone className="w-6 h-6" />
                  <span>{PHONE_DISPLAY}</span>
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-neutral-100 text-[#0a0a0a] font-bold px-6 sm:px-8 py-4 text-base sm:text-lg whitespace-nowrap rounded-xl flex items-center justify-center gap-3 transition-colors"
                >
                  <img src="/whatsapp-icon.png" alt="" className="w-6 h-6" />
                  <span>Chamar no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Top bar */}
      <div className="bg-flame text-white text-sm font-semibold">
        <div className="container mx-auto px-4 py-2 flex items-center justify-center sm:justify-between gap-4">
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" /> Atendimento 24 horas, 7 dias por semana
          </span>
          <span className="hidden sm:flex items-center gap-2">
            <MapPin className="w-4 h-4" /> Todo o Rio de Janeiro
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-[#0a0a0a]/95 backdrop-blur border-b border-white/5 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={logoRM} alt="RM Aquecedores" className="h-14 w-14 object-cover" />
            <span className="font-display text-xl font-extrabold leading-none">
              <span className="text-flame">RM</span> <span className="text-white">Aquecedores</span>
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="phone-button text-white font-bold px-5 py-2.5 rounded-xl hidden sm:flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <Phone className="w-4 h-4" />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button text-white p-2.5 rounded-xl flex items-center hover:scale-105 transition-transform"
              title="Chamar no WhatsApp"
            >
              <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-5 h-5" />
            </a>
            <button
              type="button"
              className="lg:hidden text-white p-2 rounded-lg border border-white/10"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="lg:hidden border-t border-white/5 bg-[#0a0a0a]">
            <div className="container mx-auto px-4 py-4 flex flex-col">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `py-3 font-semibold border-b border-white/5 ${isActive ? 'text-primary' : 'text-neutral-200'}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <a
                href={PHONE_HREF}
                className="phone-button text-white font-bold mt-4 px-5 py-3 rounded-xl flex sm:hidden items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Ligar: {PHONE_DISPLAY}</span>
              </a>
            </div>
          </nav>
        )}
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
      <footer className="bg-black text-white pt-16 pb-8 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="lg:col-span-1">
              <Link to="/">
                <img src={logoRM} alt="RM Aquecedores" className="h-36 w-36 object-cover -ml-4 -mt-4" />
              </Link>
              <p className="text-neutral-400">
                Especialistas em instalação, manutenção e conserto de aquecedores a gás em todo Rio de Janeiro.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Navegação</h3>
              <div className="flame-divider mb-5"></div>
              <ul className="space-y-3 text-neutral-400">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="hover:text-primary transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Serviços</h3>
              <div className="flame-divider mb-5"></div>
              <ul className="space-y-3 text-neutral-400">
                <li><Link to="/servicos" className="hover:text-primary transition-colors">Instalação de Aquecedores a Gás</Link></li>
                <li><Link to="/servicos" className="hover:text-primary transition-colors">Manutenção Preventiva</Link></li>
                <li><Link to="/servicos" className="hover:text-primary transition-colors">Conserto de Aquecedores</Link></li>
                <li><Link to="/atendimento-24h" className="hover:text-primary transition-colors">Atendimento de Emergência</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Contato</h3>
              <div className="flame-divider mb-5"></div>
              <div className="space-y-4 text-neutral-400">
                <a href={PHONE_HREF} className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary" /> {PHONE_DISPLAY}
                </a>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <img src="/whatsapp-icon.png" alt="" className="w-5 h-5" /> WhatsApp: {PHONE_DISPLAY}
                </a>
                <p className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" /> Atendimento: Todo Rio de Janeiro
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 mt-12 pt-8 text-center text-neutral-500 text-sm">
            <p>&copy; {new Date().getFullYear()} RM Aquecedores. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp whatsapp-button text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
        aria-label="Chamar no WhatsApp"
      >
        <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-8 h-8" />
      </a>
    </div>
  );
}

export default App;
