export const PHONE_DISPLAY = '(21) 96430-2000';
export const PHONE_HREF = 'tel:+5521964302000';
export const WHATSAPP_NUMBER = '5521964302000';

export const whatsappLink = (message = 'Olá! Gostaria de solicitar um orçamento para serviços de aquecedor a gás.') =>
  `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
