import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Navbar } from '../components/layout/Navbar/Navbar';

const ProductPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Buddy B - Controle Financeiro Inteligente</title>
        <meta name="description" content="Chega de suposições. Visualize seu fluxo de caixa com clareza total com o Buddy B." />
      </Helmet>

      <div className="bg-background min-h-screen font-body text-text-title">
        {/* Navigation */}
        <Navbar />

        {/* =========================================
           HERO SECTION
           ========================================= */}
        <main className="pt-32 pb-20 container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            
            {/* Texto Hero */}
            <div className="lg:col-span-2 space-y-8 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.15]">
                Chega de suposições. <br/>
                Visualize seu <span className="text-primary">fluxo de caixa</span> com clareza total.
              </h1>
              <p className="text-lg md:text-xl text-text-body leading-relaxed">
                Tenha acesso ao relatório de cash flow mais completo do mercado, direto no seu app. 
                Acompanhe entradas e saídas em tempo real.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/oferta">
                  <Button variant="primary">
                    Teste grátis por 7 dias
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </Button>
                </Link>
                <Link to="/oferta">
                  <Button variant="outline">
                    Ver demonstração
                  </Button>
                </Link>
              </div>
            </div>

            {/* Imagem Hero */}
            <div className="lg:col-span-3 relative flex justify-center">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>
               <div className="absolute bottom-0 left-10 w-64 h-64 bg-success/20 rounded-full blur-3xl -z-10"></div>
               
               <div className="relative">
                 <img 
                    src="/assets/images/dashboard.png" 
                    alt="Dashboard Buddy B" 
                    className="w-full max-w-2xl rounded-[20px] shadow-system bg-white"
                 />
                 {/* Badges Flutuantes */}
                 <div className="absolute -top-4 -right-4 bg-primary text-white text-xs font-bold py-2 px-4 rounded-tag shadow-lg animate-bounce hidden md:block">
                    Seus bancos, dentro do app
                 </div>
                 <div className="absolute -bottom-4 -left-4 bg-success text-white text-xs font-bold py-2 px-4 rounded-tag shadow-lg hidden md:block">
                    Visualize entradas e saídas
                 </div>
               </div>
            </div>
          </div>
        </main>

        {/* =========================================
           FEATURES GRID (Ícones Renomeados)
           ========================================= */}
        <section id="funcionalidades" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            {/* Grid 3 colunas */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="p-8 rounded-card bg-background hover:bg-white hover:shadow-system transition-all duration-300 group border border-transparent hover:border-gray-100">
                <div className="mb-6 w-16 h-16 rounded-tag bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <img src="/assets/icons/conectividade1.svg" alt="Dashboard" className="w-10 h-10" />
                </div>
                <h3 className="text-xl mb-3 font-heading">Dashboard Intuitivo</h3>
                <p className="text-text-body">Visão 360º das suas finanças com gráficos interativos e relatórios em tempo real.</p>
              </div>

              {/* Card 2 */}
              <div className="p-8 rounded-card bg-background hover:bg-white hover:shadow-system transition-all duration-300 group border border-transparent hover:border-gray-100">
                <div className="mb-6 w-16 h-16 rounded-tag bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                   <img src="/assets/icons/seguranca1.svg" alt="Segurança" className="w-10 h-10" />
                </div>
                <h3 className="text-xl mb-3 font-heading">Segurança Bancária</h3>
                <p className="text-text-body">Criptografia de ponta a ponta para garantir que seus dados estejam sempre protegidos.</p>
              </div>

              {/* Card 3 */}
              <div className="p-8 rounded-card bg-background hover:bg-white hover:shadow-system transition-all duration-300 group border border-transparent hover:border-gray-100">
                <div className="mb-6 w-16 h-16 rounded-tag bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                   <img src="/assets/icons/planejamento1.svg" alt="Previsibilidade" className="w-10 h-10" />
                </div>
                <h3 className="text-xl mb-3 font-heading">Previsibilidade</h3>
                <p className="text-text-body">Projete seus gastos futuros e evite surpresas no final do mês.</p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
           MOBILE APP SHOWCASE
           ========================================= */}
        <section className="py-24 bg-gradient-to-br from-purple-50 to-blue-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Imagem dos Celulares */}
              <div className="relative order-2 md:order-1">
                 <img 
                   src="/assets/images/celulares.png" 
                   alt="App Buddy B Mobile" 
                   className="w-full max-w-lg mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                 />
              </div>
              
              {/* Texto */}
              <div className="order-1 md:order-2 space-y-6">
                <h2 className="text-3xl md:text-5xl leading-tight">
                  Tudo o que você precisa, <br/>
                  <span className="text-primary">na palma da mão</span>.
                </h2>
                <p className="text-lg text-text-body leading-relaxed">
                  Do fluxo de caixa à consultoria financeira, tudo o que você precisa para organizar suas finanças está em um só app. 
                  Acompanhe cada movimentação em tempo real e defina metas claras.
                </p>
                <Link to="/oferta">
                  <Button variant="primary" className="mt-4">
                    Quero experimentar
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
           PRICING (PLANOS)
           ========================================= */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              
              {/* Plano 1 */}
              <div className="bg-white p-8 rounded-[20px] border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold mb-2">Buddy B Standard</h3>
                <div className="text-3xl font-bold text-text-title mb-1">R$ 29,90/Mês</div>
                <div className="text-xs text-text-muted mb-6">R$ 358,80/Ano</div>
                <Link to="/oferta">
                  <Button variant="outline" fullWidth className="mb-6">Testar grátis</Button>
                </Link>
                <ul className="space-y-3 text-sm text-text-body">
                  {['Liberdade contratual', 'Possibilidade de upgrade', 'Conteúdos exclusivos'].map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#424242" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Plano 2 (Destaque) */}
              <div className="bg-white rounded-[20px] border-2 border-primary/20 shadow-system relative overflow-hidden transform md:-translate-y-4">
                <div className="bg-primary text-white text-center py-2 text-sm font-bold">Recomendado</div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2">Buddy B Smart</h3>
                  <div className="text-4xl font-bold text-text-title mb-1">R$ 6,90/Mês</div>
                  <div className="text-xs text-text-muted mb-6">R$ 82,80/Ano</div>
                  <Link to="/oferta">
                    <Button variant="primary" fullWidth className="mb-6">Testar grátis por 7 dias</Button>
                  </Link>
                  <ul className="space-y-3 text-sm text-text-body">
                    {['Economia garantida', 'Pagamentos único', 'Conteúdos exclusivos'].map(item => (
                      <li key={item} className="flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#424242" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Plano 3 */}
              <div className="bg-white p-8 rounded-[20px] border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold mb-2">Buddy B Chat</h3>
                <div className="text-3xl font-bold text-text-title mb-6">Em Breve</div>
                <Button variant="outline" fullWidth className="mb-6 bg-primary text-white border-primary hover:bg-primary-dark">Saiba Mais</Button>
                <ul className="space-y-3 text-sm text-text-body">
                  {['Consultoria Sob Demanda', 'Orientações financeiras', 'Agende online'].map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#424242" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================
           BLOG SECTION
           ========================================= */}
        <section id="blog" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl mb-4">
                  <span className="text-primary font-bold">blog</span> conhecimento que <br/>
                  impulsiona suas finanças
                </h2>
                <p className="text-text-body mb-6">Acesse conteúdos exclusivos com dicas, análises e estratégias.</p>
                <Button variant="primary">
                  Ler todos os artigos
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </Button>
              </div>
              
              {/* Artigo Card 1 */}
              <div className="bg-white rounded-[20px] shadow-sm hover:shadow-system transition-all overflow-hidden border border-gray-100 group">
                <div className="h-48 overflow-hidden">
                   <img src="/assets/images/blog-1.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Blog" />
                </div>
                <div className="p-6">
                  <span className="bg-primary text-white text-xs px-3 py-1 rounded-full mb-3 inline-block">Dicas financeiras</span>
                  <h3 className="text-xl font-bold mb-2">Viajar para o exterior: um sonho impossível?</h3>
                  <div className="flex items-center gap-2 mt-4">
                    <img src="/assets/avatars/avatar-1.svg" className="w-8 h-8 rounded-full" alt="Autor" />
                    <span className="text-xs text-text-muted">Lucas Almeida • 4 min de leitura</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
           TESTIMONIALS (DEPOIMENTOS)
           ========================================= */}
        <section id="depoimentos" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Confiança que gera resultados</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Amanda Silva", text: "Sempre tentei controlar minhas finanças em planilhas, mas acabava me perdendo. O BuddyB facilitou tudo!" },
                { name: "Felipe Rodrigues", text: "Planilhas nunca funcionaram pra mim. Com o BuddyB, tudo ficou automático e simples.", white: true },
                { name: "Luana Silva", text: "O app me ajudou a criar metas e controlar meus gastos sem dor de cabeça. Recomendo demais!" }
              ].map((depo, i) => (
                <div key={i} className={`p-8 rounded-[20px] shadow-system ${depo.white ? 'bg-white border border-primary/20' : 'bg-primary text-white'}`}>
                  <p className={`text-lg mb-6 leading-relaxed ${depo.white ? 'text-primary' : 'text-white/90'}`}>"{depo.text}"</p>
                  <p className="font-bold font-heading">{depo.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================
           DOWNLOAD APP SECTION
           ========================================= */}
        <section className="py-24 bg-secondary overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl mb-6">Tenha controle total das suas finanças na palma da mão</h2>
                <p className="text-text-body mb-8">Escaneie o QR Code com a câmera do seu celular e instale o Buddy B em poucos segundos.</p>
                <img src="/assets/images/qrcode.png" alt="QR Code" className="w-40 h-40 border-4 border-white rounded-[20px] shadow-sm mb-4" />
                <div className="flex gap-4">
                   <div className="bg-black text-white px-4 py-2 rounded-lg text-xs flex items-center gap-2 cursor-pointer hover:opacity-80">
                      <span>Google Play</span>
                   </div>
                   <div className="bg-black text-white px-4 py-2 rounded-lg text-xs flex items-center gap-2 cursor-pointer hover:opacity-80">
                      <span>App Store</span>
                   </div>
                </div>
              </div>
              <div className="relative flex justify-end">
                 {/* Blob Amarelo atrás da mão */}
                 <div className="absolute top-10 right-10 w-80 h-80 bg-alert rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                 <img src="/assets/images/mao-app.png" alt="Mão segurando app" className="relative z-10 max-w-sm" />
              </div>
            </div>
          </div>
        </section>

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
      </div>
    </>
  );
};

export default ProductPage;