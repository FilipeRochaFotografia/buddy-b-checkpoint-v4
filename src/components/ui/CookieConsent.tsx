import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// NOME DA CHAVE ATUALIZADO (Isso reseta a visualização para todos)
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
      className={`w-[36px] h-[20px] rounded-full flex items-center px-[2px] transition-colors relative ${
        active ? 'bg-[#9B80FF]' : 'bg-[#E8E9EA]'
      } ${disabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}`}
    >
      <motion.div 
        className="w-[16px] h-[16px] bg-white rounded-full shadow-sm"
        animate={{ x: active ? 16 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </button>
    <span className="font-body font-bold text-[#424242] text-[14px]">{label}</span>
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
    // Verifica a nova chave v2
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
          className="fixed inset-0 z-[9999] flex items-center justify-center px-4 bg-black/40 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-[#9B80FF] rounded-[20px] p-8 shadow-2xl relative w-full max-w-[680px]"
          >
            {/* SEM BOTÃO X (FECHAR) - O usuário é obrigado a escolher */}
            
            <h3 className="font-body font-bold text-[#424242] text-[18px] leading-[25px] mb-4">
              Cookies
            </h3>

            <p className="font-body font-normal text-[#424242] text-[18px] leading-[25px] mb-6 text-justify">
              Nós e terceiros selecionados utilizamos cookies ou tecnologias semelhantes para fins técnicos e, com o seu consentimento, também para fins de funcionalidade, experiência, medição e marketing (com anúncios personalizados), conforme especificado na política de cookies. A recusa do consentimento pode tornar algumas funções indisponíveis.
              <br /><br />
              Você pode conceder, recusar ou retirar seu consentimento a qualquer momento.
              <br />
              Use o botão “Aceitar tudo” para consentir. Use o botão “Rejeitar tudo” ou feche esta política para continuar sem aceitar.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-4 mb-8">
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
              <div className="w-full sm:w-auto">
                <Toggle 
                  label="Marketing" 
                  active={preferences.marketing} 
                  onToggle={() => togglePreference('marketing')} 
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              
              <Link to="/politica-cookies">
                <button className="w-[125px] h-[39px] flex items-center justify-center border border-[#9B80FF] rounded-[10px] text-[#9B80FF] font-heading font-bold text-[14px] hover:bg-[#9B80FF]/10 transition-colors">
                  Saiba mais
                </button>
              </Link>

              <div className="flex gap-4">
                <button 
                  onClick={handleRejectAll}
                  className="w-[125px] h-[39px] flex items-center justify-center bg-[#9B80FF] rounded-[10px] text-white font-heading font-bold text-[14px] hover:bg-[#8a6df0] transition-colors"
                >
                  Rejeitar tudo
                </button>

                <button 
                  onClick={handleAcceptAll}
                  className="w-[125px] h-[39px] flex items-center justify-center bg-[#9B80FF] rounded-[10px] text-white font-heading font-bold text-[14px] hover:bg-[#8a6df0] transition-colors"
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