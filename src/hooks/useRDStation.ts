import { useState } from 'react';

export interface LeadData {
  name: string;
  email: string;
  phone: string;
  profile: string;
  math?: string;
}

export function useRDStation() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const TOKEN_PUBLICO = "04f1b1df1938c6cf980f4d329682e3e3"; 

  // Agora aceita o identificador como segundo parâmetro (default mantido para compatibilidade)
  const sendLead = async (data: LeadData, identifier: string = 'landing-page-oferta-v4') => {
    setIsLoading(true);
    setError(null);

    try {
      /* 1. SETUP IFRAME TARGET */
      const iframeName = 'rd-hidden-frame';
      let iframe = document.getElementById(iframeName) as HTMLIFrameElement;
      
      if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.name = iframeName;
        iframe.id = iframeName;
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
      }

      /* 2. SETUP FORM */
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://www.rdstation.com.br/api/1.2/conversions';
      form.target = iframeName;
      form.style.display = 'none';

      /* 3. MAPPING FIELDS */
      const addField = (name: string, value: string) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        form.appendChild(input);
      };

      addField('token_rdstation', TOKEN_PUBLICO);
      addField('identificador', identifier); // Usa o identificador dinâmico
      addField('email', data.email);
      addField('nome', data.name);
      addField('mobile_phone', data.phone);
      addField('cf_perfil_financeiro', data.profile);
      addField('traffic_source', document.referrer || "direct");

      /* 4. SUBMIT */
      document.body.appendChild(form);
      form.submit();

      /* 5. CLEANUP & SUCCESS */
      setTimeout(() => {
        document.body.removeChild(form);
        setIsSuccess(true);
        setIsLoading(false);
      }, 500);

    } catch (err) {
      console.error(err);
      setError("Erro ao processar envio.");
      setIsLoading(false);
    }
  };

  return { sendLead, isLoading, isSuccess, error };
}