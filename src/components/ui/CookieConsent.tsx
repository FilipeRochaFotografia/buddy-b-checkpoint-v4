import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// NOME DA CHAVE ATUALIZADO
const STORAGE_KEY = 'buddyb-cookie-consent-v2';

// Definição dos tipos de Cookies
type CookiePreferences = {
  necessary: boolean;
  functional: boolean;
  experience: boolean;
  measurement: boolean;
  marketing: boolean;
};

const Toggle = ({ 
  label, 
  active, 
  onToggle, 
  disabled = false 
}: { 
  label: string; 
  active: boolean; 
  onToggle: () => void;
  disabled?: boolean;
}) => (
  <div className="flex items-center gap-2">
    <button 
      onClick={disabled ? undefined : onToggle}
      className={`w-[36px] h-[20px] rounded-full flex items-center px-[2px] transition-colors relative shrink-0 ${
        active ? 'bg-[#9B80FF]' : 'bg-[#E8E9EA]'
      } ${disabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}`}
    >
      <motion.div 
        className="w-[16px] h-[16px] bg-white rounded-full shadow-sm"
        animate={{ x: active ? 16 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </button>
    <span className="font-body font-bold text-[#424242] text-[13px] sm:text-[14px]">{label}</span>
  </div>
);

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, 
    functional: false,
    experience: false,
    measurement: false,
    marketing: false,
  });

  useEffect(() => {
    const hasConsent = localStorage.getItem(STORAGE_KEY);
    if (!hasConsent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; 
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const saveConsent = (finalPreferences: CookiePreferences) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(finalPreferences));
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    saveConsent({
      necessary: true,
      functional: true,
      experience: true,
      measurement: true,
      marketing: true
    });
  };

  const handleRejectAll = () => {
    saveConsent({
      necessary: true,
      functional: false,
      experience: false,
      measurement: false,
      marketing: false
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center sm:px-4 bg-black/40 backdrop-blur-sm"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            // ALTERAÇÕES AQUI:
            // 1. max-h-[90vh] e overflow-y-auto: Permite rolar o card se a tela for muito pequena
            // 2. p-5 md:p-8: Reduz padding no mobile
            // 3. mx-4: Garante margem lateral no mobile
            // 4. mb-4 sm:mb-0: Margem inferior para não colar no fundo no mobile
            className="bg-white border border-[#9B80FF] rounded-[20px] p-5 md:p-8 shadow-2xl relative w-full max-w-[680px] max-h-[85vh] overflow-y-auto mx-4 mb-4 sm:mb-0 sm:mx-0 scrollbar-hide"
          >
            
            <h3 className="font-body font-bold text-[#424242] text-[16px] md:text-[18px] leading-[22px] md:leading-[25px] mb-3 md:mb-4">
              Cookies
            </h3>

            {/* Texto reduzido no mobile (text-[14px]) e alinhado a esquerda para facilitar leitura */}
            <p className="font-body font-normal text-[#424242] text-[14px] md:text-[18px] leading-[20px] md:leading-[25px] mb-5 md:mb-6 text-left md:text-justify">
              Nós e terceiros selecionados utilizamos cookies ou tecnologias semelhantes para fins técnicos e, com o seu consentimento, também para fins de funcionalidade, experiência, medição e marketing (com anúncios personalizados), conforme especificado na política de cookies. A recusa do consentimento pode tornar algumas funções indisponíveis.
              <br /><br className="hidden md:block" />
              Você pode conceder, recusar ou retirar seu consentimento a qualquer momento.
              <br />
              Use o botão “Aceitar tudo” para consentir. Use o botão “Rejeitar tudo” ou feche esta política para continuar sem aceitar.
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-3 md:gap-x-6 md:gap-y-4 mb-6 md:mb-8">
              <Toggle 
                label="Necessários" 
                active={preferences.necessary} 
                onToggle={() => togglePreference('necessary')} 
                disabled={true} 
              />
              <Toggle 
                label="Funcionalidade" 
                active={preferences.functional} 
                onToggle={() => togglePreference('functional')} 
              />
              <Toggle 
                label="Experiência" 
                active={preferences.experience} 
                onToggle={() => togglePreference('experience')} 
              />
              <Toggle 
                label="Medição" 
                active={preferences.measurement} 
                onToggle={() => togglePreference('measurement')} 
              />
              <div className="w-auto">
                <Toggle 
                  label="Marketing" 
                  active={preferences.marketing} 
                  onToggle={() => togglePreference('marketing')} 
                />
              </div>
            </div>

            {/* Container dos botões reestruturado para mobile */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              
              <Link to="/politica-cookies" className="w-full sm:w-auto">
                <button className="w-full sm:w-[125px] h-[39px] flex items-center justify-center border border-[#9B80FF] rounded-[10px] text-[#9B80FF] font-heading font-bold text-[14px] hover:bg-[#9B80FF]/10 transition-colors">
                  Saiba mais
                </button>
              </Link>

              <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <button 
                  onClick={handleRejectAll}
                  className="w-full sm:w-[125px] h-[39px] flex items-center justify-center bg-gray-100 sm:bg-[#9B80FF] rounded-[10px] text-[#424242] sm:text-white font-heading font-bold text-[14px] hover:bg-gray-200 sm:hover:bg-[#8a6df0] transition-colors border sm:border-0 border-gray-200"
                >
                  Rejeitar tudo
                </button>

                <button 
                  onClick={handleAcceptAll}
                  className="w-full sm:w-[125px] h-[39px] flex items-center justify-center bg-[#9B80FF] rounded-[10px] text-white font-heading font-bold text-[14px] hover:bg-[#8a6df0] transition-colors"
                >
                  Aceitar tudo
                </button>
              </div>

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}