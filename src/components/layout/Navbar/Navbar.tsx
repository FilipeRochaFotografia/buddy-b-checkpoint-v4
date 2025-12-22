import { useState } from 'react';
import { Link } from 'react-router-dom';
// AJUSTE: O caminho correto para o Button (saindo de layout para ui)
import Button from '../../ui/Button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Funcionalidades', href: '/#funcionalidades' }, // Adicionei / para funcionar de outras páginas
    { label: 'Quem usa', href: '/#depoimentos' },
    { label: 'Blog', href: '/#blog' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm h-20">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img 
            src="/assets/logo.svg" 
            alt="Buddy B Logo" 
            className="h-10 w-auto"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              className="font-body font-semibold text-text-body hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-4">
            <span className="font-bold text-primary cursor-pointer hover:underline">
              Login
            </span>
            <Link to="/oferta">
                <Button>Começar Grátis</Button>
            </Link>
          </div>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          className="md:hidden p-2 text-text-title"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          {isOpen ? (
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          ) : (
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12h16M4 6h16M4 18h16"/></svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg border-b border-gray-100 p-6 flex flex-col gap-6 md:hidden animate-fade-in">
          {menuItems.map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              className="text-lg font-heading font-bold text-text-title"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <hr className="border-gray-100" />
          <div className="flex flex-col gap-4">
             <span className="text-center font-bold text-primary">Login</span>
             <Link to="/oferta">
                <Button fullWidth onClick={() => setIsOpen(false)}>
                Começar Grátis
                </Button>
             </Link>
          </div>
        </div>
      )}
    </nav>
  );
}