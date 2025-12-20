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

  // SEU TOKEN PÚBLICO (Confirme se não tem espaços extras)
  const TOKEN_PUBLICO = "04f1b1df1938c6cf980f4d329682e3e3"; 

  const sendLead = async (data: LeadData) => {
    setIsLoading(true);
    setError(null);

    try {
      console.log("📤 Enviando via Método Form-Post (Iframe)...");

      // 1. Criar um Iframe invisível (para receber a resposta sem recarregar a página)
      const iframeName = 'rd-hidden-frame';
      let iframe = document.getElementById(iframeName) as HTMLIFrameElement;
      
      if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.name = iframeName;
        iframe.id = iframeName;
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
      }

      // 2. Criar um Formulário invisível conectado ao Iframe
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://www.rdstation.com.br/api/1.2/conversions';
      form.target = iframeName; // A mágica acontece aqui: envia para o iframe
      form.style.display = 'none';

      // 3. Adicionar os campos (Inputs Hidden)
      const addField = (name: string, value: string) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        form.appendChild(input);
      };

      addField('token_rdstation', TOKEN_PUBLICO);
      addField('identificador', 'landing-page-oferta-v4');
      addField('email', data.email);
      addField('nome', data.name);
      addField('mobile_phone', data.phone);
      addField('cf_perfil_financeiro', data.profile);
      addField('traffic_source', document.referrer || "direct");

      // 4. Anexar e Enviar
      document.body.appendChild(form);
      form.submit();

      // 5. Limpeza e Sucesso
      // Como é um envio para iframe, não temos feedback de erro (CORS),
      // mas o envio de formulário é robusto e raramente falha.
      setTimeout(() => {
        document.body.removeChild(form);
        // O iframe pode ficar para o próximo envio
        console.log("🚀 Envio despachado!");
        setIsSuccess(true);
        setIsLoading(false);
      }, 500); // Pequeno delay para garantir o submit

    } catch (err) {
      console.error("❌ Erro inesperado:", err);
      setError("Erro ao processar envio.");
      setIsLoading(false);
    }
  };

  return { sendLead, isLoading, isSuccess, error };
}