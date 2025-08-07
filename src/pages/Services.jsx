import React from 'react';
import { Wrench, CheckCircle, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

import instalacaoImg from '../assets/instalacao_aquecedor.jpg';
import manutencaoImg from '../assets/manutencao_aquecedor.jpg';
import consertoImg from '../assets/conserto_aquecedor.jpg';

function Services() {
  const whatsappNumber = '5521964302000';

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de solicitar um orçamento para serviços de aquecedor a gás.');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const services = [
    {
      title: 'Instalação de Aquecedores a Gás',
      description: 'Nossa equipe especializada realiza a instalação de aquecedores a gás de forma segura e eficiente, seguindo todas as normas técnicas e garantindo o perfeito funcionamento do seu equipamento. Trabalhamos com as principais marcas do mercado, oferecendo soluções personalizadas para residências e empresas.',
      image: instalacaoImg,
      icon: <Wrench className="w-8 h-8 text-primary" />
    },
    {
      title: 'Manutenção Preventiva',
      description: 'A manutenção preventiva é crucial para prolongar a vida útil do seu aquecedor a gás e garantir sua segurança. Realizamos inspeções completas, limpeza de componentes, verificação de vazamentos e ajustes necessários para otimizar o desempenho e evitar problemas futuros.',
      image: manutencaoImg,
      icon: <CheckCircle className="w-8 h-8 text-primary" />
    },
    {
      title: 'Conserto de Aquecedores',
      description: 'Seu aquecedor a gás apresentou algum problema? Nossa equipe de técnicos qualificados está pronta para diagnosticar e reparar qualquer tipo de falha, desde pequenos ajustes até a substituição de peças. Atendimento rápido e eficaz para restaurar o conforto da sua água quente.',
      image: consertoImg,
      icon: <Shield className="w-8 h-8 text-primary" />
    },
    {
      title: 'Instalação e Manutenção de Fogões a Gás',
      description: 'Além de aquecedores, somos especialistas na instalação e manutenção de fogões a gás. Garantimos a conexão segura e o funcionamento adequado do seu fogão, com atenção aos detalhes e às normas de segurança.',
      image: instalacaoImg, // Usar uma imagem genérica ou buscar uma específica para fogão
      icon: <Wrench className="w-8 h-8 text-primary" />
    },
    {
      title: 'Instalação e Manutenção de Boilers',
      description: 'Oferecemos serviços completos para boilers, incluindo instalação, manutenção e reparos. Seja para sistemas residenciais ou comerciais, nossa equipe assegura que seu boiler funcione com máxima eficiência e segurança, proporcionando água quente em abundância.',
      image: consertoImg, // Usar uma imagem genérica ou buscar uma específica para boiler
      icon: <Wrench className="w-8 h-8 text-primary" />
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-secondary mb-12">
        Nossos Serviços Completos
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
  );
}

export default Services;


