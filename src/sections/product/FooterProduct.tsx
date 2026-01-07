import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';

export function FooterProduct() {
  return (
    <>
      {/* CTA FINAL */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-8 text-white font-heading">Pronto para assumir o controle?</h2>
          <Link to="/oferta">
            <Button variant="white" className="text-primary hover:text-primary-dark">
              Começar agora
            </Button>
          </Link>
        </div>
      </section>

      {/* FOOTER PRINCIPAL */}
      <footer className="py-8 bg-white border-t border-gray-100 text-center text-sm text-text-muted">
        <div className="container mx-auto px-4">
          <p className="mb-2">© 2025 Buddy B System. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-4">
            <Link to="/termos-de-uso" className="hover:text-primary">Termos de Uso</Link>
            <span>•</span>
            <Link to="/politica-privacidade" className="hover:text-primary">Política de Privacidade</Link>
          </div>
        </div>
      </footer>
    </>
  );
}