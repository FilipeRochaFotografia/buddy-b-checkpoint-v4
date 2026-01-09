import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { NavbarProduct } from '../components/layout/Navbar/NavbarProduct'; 
import { FooterProduct } from '../sections/product/FooterProduct';

const PoliticaCookiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Política de Cookies - Buddy B</title>
      </Helmet>

      <NavbarProduct />

      <div className="bg-[#F3F4F6] min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="bg-white rounded-[20px] p-8 md:p-12 shadow-sm border border-gray-100">
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-[#424242] mb-8">
              Política de Cookies
            </h1>

            <div className="space-y-6 text-[#424242] font-body text-base leading-relaxed text-justify">
              <p>
                Esta Política de Cookies explica o que são cookies e como nós os utilizamos. Você deve ler esta política para entender que tipo de cookies utilizamos, as informações que coletamos e como essas informações são usadas.
              </p>

              <h2 className="font-heading font-bold text-xl mt-6 mb-2 text-[#9B80FF]">1. O que são Cookies?</h2>
              <p>
                Cookies são pequenos arquivos de texto usados para armazenar pequenas informações. Eles são armazenados no seu dispositivo quando o site é carregado no seu navegador. Esses cookies nos ajudam a fazer o site funcionar corretamente, torná-lo mais seguro, proporcionar uma melhor experiência do usuário e entender como o site funciona e analisar o que precisa ser melhorado.
              </p>

              <h2 className="font-heading font-bold text-xl mt-6 mb-2 text-[#9B80FF]">2. Como utilizamos os cookies?</h2>
              <p>
                Como a maioria dos serviços online, nosso site utiliza cookies primários e de terceiros para diversos fins. Os cookies primários são estritamente necessários para o funcionamento correto do site e não coletam nenhum dos seus dados de identificação pessoal.
              </p>
              <p>
                Os cookies de terceiros usados em nosso site servem principalmente para entender como o site funciona, como você interage com nosso site, manter nossos serviços seguros, fornecer anúncios que sejam relevantes para você e, em suma, proporcionar uma experiência de usuário melhor e aprimorada.
              </p>

              <h2 className="font-heading font-bold text-xl mt-6 mb-2 text-[#9B80FF]">3. Tipos de Cookies que utilizamos</h2>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Necessários:</strong> Essenciais para o funcionamento do site. Permitem a navegação e o uso de recursos básicos, como áreas seguras e login. O site não pode funcionar corretamente sem estes cookies.
                </li>
                <li>
                  <strong>Funcionalidade:</strong> Permitem que o site lembre de escolhas que você faz (como seu nome de usuário, idioma ou região) e forneça recursos aprimorados e mais pessoais.
                </li>
                <li>
                  <strong>Experiência (Analíticos):</strong> Ajudam-nos a entender como os visitantes interagem com o site, coletando e relatando informações anonimamente.
                </li>
                <li>
                  <strong>Marketing:</strong> Usados para rastrear visitantes em sites. A intenção é exibir anúncios que sejam relevantes e interessantes para o usuário individual.
                </li>
              </ul>

              <h2 className="font-heading font-bold text-xl mt-6 mb-2 text-[#9B80FF]">4. Gerenciando suas preferências</h2>
              <p>
                Você pode alterar suas preferências de cookies a qualquer momento através do painel de configurações disponível em nosso site ou através das configurações do seu navegador.
              </p>

              <div className="mt-8 border-t border-gray-200 pt-6">
                <Link to="/" className="text-[#9B80FF] font-bold hover:underline">
                  ← Voltar para a Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterProduct />
    </>
  );
};

export default PoliticaCookiesPage;