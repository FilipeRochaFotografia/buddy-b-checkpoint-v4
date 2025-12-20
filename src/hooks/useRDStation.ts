import { useState, useEffect } from 'react';

declare global {
  interface Window {
    RdIntegration?: {
      post: (data: any[], callback?: () => void) => void;
    };
  }
}

export interface LeadData {
  name: string;
  email: string;
  phone: string;
  profile: string; // Mapeado como campo personalizado
}

export function useRDStation() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Verifica se o script do RD Station foi carregado
    if (!window.RdIntegration) {
      console.warn("Script do RD Station não detectado. As conversões podem falhar.");
    }
  }, []);

  const sendLead = async (data: LeadData) => {
    setIsLoading(true);
    setError(null);

    // Estrutura exigida pelo RD Station (Payload)
    const payload = [
      {
        name: "token_rdstation",
        value: import.meta.env.VITE_RD_STATION_TOKEN || "token_fallback_dev" 
      },
      {
        name: "identificador",
        value: "landing-page-oferta-v4" // Identificador da conversão
      },
      {
        name: "email",
        value: data.email
      },
      {
        name: "nome",
        value: data.name
      },
      {
        name: "mobile_phone",
        value: data.phone
      },
      {
        name: "cf_perfil_financeiro", // Custom Field
        value: data.profile
      },
      {
        name: "traffic_source",
        value: document.referrer || "direct"
      }
    ];

    try {
      if (window.RdIntegration) {
        // Método Oficial (Injeção via Script) - 100% Seguro contra CORS
        window.RdIntegration.post(payload, () => {
          setIsSuccess(true);
          setIsLoading(false);
        });
      } else {
        // Fallback para desenvolvimento (apenas simula)
        console.log("⚠️ Modo Dev (RD Station):", payload);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSuccess(true);
        setIsLoading(false);
      }
    } catch (err) {
      console.error(err);
      setError("Erro ao conectar com o servidor. Tente novamente.");
      setIsLoading(false);
    }
  };

  return { sendLead, isLoading, isSuccess, error };
}