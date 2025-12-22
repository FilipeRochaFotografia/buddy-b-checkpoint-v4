import React from 'react';

export function FooterCapture() {
  return (
    // Fundo EXATAMENTE igual ao About (#1a1b26) sem borda entre eles
    <footer className="bg-[#1a1b26] text-white pb-8 pt-4">
      <div className="container mx-auto px-4">
        
        {/* Linha Divisória Sutil (Opcional, se quiser separar visualmente o bloco de baixo) */}
        <hr className="border-gray-800/50 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          
          <p className="text-center md:text-left">
            © 2025 Buddy B System. Todos os direitos reservados.
          </p>
          
          <div className="flex gap-6 items-center">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>

        </div>
      </div>
    </footer>
  );
}