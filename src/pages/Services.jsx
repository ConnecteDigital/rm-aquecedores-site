import React from 'react';
import { Wrench, CheckCircle, Shield, Users, Thermometer, Droplets, Hammer } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { whatsappLink } from '../lib/contact';

import instalacaoImg from '../assets/instalacao_aquecedor.jpg';
import manutencaoImg from '../assets/manutencao_aquecedor.jpg';
import consertoImg from '../assets/conserto_aquecedor.jpg';

function Services() {
  const services = [
    {
      title: 'Instalação de Aquecedores a Gás',
      description: 'Nossa equipe especializada realiza a instalação de aquecedores a gás de forma segura e eficiente, seguindo todas as normas técnicas e garantindo o perfeito funcionamento do seu equipamento. Trabalhamos com as principais marcas do mercado, oferecendo soluções personalizadas para residências e empresas.',
      image: instalacaoImg,
      icon: Wrench
    },
    {
      title: 'Manutenção Preventiva',
      description: 'A manutenção preventiva é crucial para prolongar a vida útil do seu aquecedor a gás e garantir sua segurança. Realizamos inspeções completas, limpeza de componentes, verificação de vazamentos e ajustes necessários para otimizar o desempenho e evitar problemas futuros.',
      image: manutencaoImg,
      icon: CheckCircle
    },
    {
      title: 'Conserto de Aquecedores',
      description: 'Seu aquecedor a gás apresentou algum problema? Nossa equipe de técnicos qualificados está pronta para diagnosticar e reparar qualquer tipo de falha, desde pequenos ajustes até a substituição de peças. Atendimento rápido e eficaz para restaurar o conforto da sua água quente.',
      image: consertoImg,
      icon: Shield
    },
    {
      title: 'Venda de Aquecedores',
      description: 'Comercializamos aquecedores a gás das melhores marcas do mercado, oferecendo produtos de alta qualidade com garantia e suporte técnico completo. Nossa equipe especializada ajuda você a escolher o modelo ideal para suas necessidades.',
      image: instalacaoImg,
      icon: Users
    },
    {
      title: 'Instalação e Manutenção de Boilers',
      description: 'Oferecemos serviços completos para boilers, incluindo instalação, manutenção e reparos. Seja para sistemas residenciais ou comerciais, nossa equipe assegura que seu boiler funcione com máxima eficiência e segurança, proporcionando água quente em abundância.',
      image: consertoImg,
      icon: Thermometer
    },
    {
      title: 'Resina na Tubulação',
      description: 'Aplicação de resina epóxi nas tubulações para restaurar, vedar e proteger canos antigos sem necessidade de quebra de paredes. Solução eficiente, econômica e duradoura para eliminar vazamentos e corrosão em instalações residenciais e comerciais.',
      image: manutencaoImg,
      icon: Droplets
    },
    {
      title: 'Construção de Tubulação',
      description: 'Construção e instalação de tubulações de gás para residências, condomínios e estabelecimentos comerciais. Executamos projetos completos de rede de gás com total conformidade às normas técnicas da ABNT, garantindo segurança e eficiência no fornecimento.',
      image: instalacaoImg,
      icon: Hammer
    }
  ];

  return (
    <section className="py-24 section-dark glow-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 flex flex-col items-center">
          <span className="eyebrow mb-4">Serviços</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Nossos Serviços <span className="text-flame">Completos</span>
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="service-card group overflow-hidden flex flex-col w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
                <div className="relative">
                  <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent"></div>
                  </div>
                  <div className="icon-badge absolute bottom-0 left-6 translate-y-1/2 w-14 h-14">
                    <Icon className="w-7 h-7" />
                  </div>
                </div>
                <div className="p-6 pt-10 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold text-white mb-3">{service.title}</h2>
                  <p className="text-neutral-400 mb-6 flex-grow">{service.description}</p>
                  <a
                    href={whatsappLink('Olá! Gostaria de solicitar um orçamento para ' + service.title.toLowerCase() + '.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="phone-button text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2"
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
  );
}

export default Services;
