import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { NavbarProduct } from '../components/layout/Navbar/NavbarProduct';
import { FooterProduct } from '../sections/product/FooterProduct';
import { motion, AnimatePresence } from 'framer-motion';



const categories = [
  "Sobre o Buddy B", "Conta e Cadastro", "Orçamento e Planejamento", 
  "Segurança e Privacidade", "Suporte e Contato", 
  "Funcionalidades e Uso do App", "Pagamentos e Assinatura", 
  "Conexão com o Banco", "Dispositivos e Plataformas" 
];

const faqData = [
  { category: "Sobre o Buddy B", q: "O que é o Buddy B?", a: "O Buddy B é um aplicativo de planejamento financeiro pessoal criado para ajudar você a organizar, acompanhar e otimizar suas finanças de forma simples, prática e segura. Ele centraliza suas informações financeiras em um único lugar, facilitando o controle do seu dinheiro no dia a dia." },
  { category: "Sobre o Buddy B", q: "Como a Buddy B pode me ajudar?", a: "O Buddy B ajuda você a ter clareza total sobre sua vida financeira. Com ele, você consegue entender melhor seus gastos, organizar receitas e despesas, acompanhar sua evolução financeira ao longo do tempo e tomar decisões mais conscientes e estratégicas sobre o seu dinheiro." },
  { category: "Sobre o Buddy B", q: "Como o Buddy B começou?", a: "O Buddy B surgiu da vontade de criar uma solução acessível, eficiente e fácil de usar para ajudar as pessoas a melhorarem sua relação com o dinheiro, utilizando tecnologia de forma inteligente, intuitiva e descomplicada." },
  { category: "Sobre o Buddy B", q: "Quanto posso esperar economizar com o Buddy B?", a: "Isso depende diretamente de como você utiliza o app. O Buddy B não garante economia automática, mas ajuda você a identificar desperdícios, padrões de gasto e oportunidades de melhoria. A economia vem da combinação entre disciplina, organização e boas decisões — e o Buddy B mostra o caminho." },
  { category: "Sobre o Buddy B", q: "Posso usar o Buddy B para gerenciar minhas finanças?", a: "Sim. O Buddy B foi desenvolvido exatamente para isso: oferecer controle total das suas finanças pessoais em um único aplicativo, com visão clara, organizada e confiável." },
  { category: "Sobre o Buddy B", q: "Vocês têm um plano familiar Buddy B?", a: "No momento, o Buddy B não oferece plano familiar nas versões atuais." },

  { category: "Conta e Cadastro", q: "Posso compartilhar minha conta com outra pessoa?", a: "Atualmente não. Cada conta é individual para garantir maior segurança, privacidade e integridade dos dados financeiros de cada usuário." },
  { category: "Conta e Cadastro", q: "Não consigo alterar meu e-mail de acesso, o que devo fazer?", a: "Entre em contato com o suporte pelo canal oficial. No app Buddy B, vá até a tela inicial > clique em Ajuda. Um chat será aberto para que o suporte realize a solicitação após validação da sua identidade." },
  { category: "Conta e Cadastro", q: "Como alterar o idioma da minha conta?", a: "No app, acesse Configurações > Idioma e selecione o idioma que melhor se aplica a você." },
  { category: "Conta e Cadastro", q: "Como faço para redefinir meus dados?", a: "No app, vá até Configurações > Perfil. Nessa área, você poderá atualizar e redefinir seus dados cadastrais." },
  { category: "Conta e Cadastro", q: "Não quero receber e-mails da Buddy.", a: "Você pode gerenciar suas preferências de comunicação diretamente no app ou utilizar o link de descadastro disponível no rodapé dos e-mails enviados." },
  { category: "Conta e Cadastro", q: "Qual a idade mínima para se cadastrar?", a: "A idade mínima para cadastro no Buddy B é de 13 anos." },
  { category: "Conta e Cadastro", q: "Quais dados preciso informar para me cadastrar?", a: "Solicitamos apenas informações básicas, necessárias para garantir sua segurança e uma experiência personalizada. O processo de cadastro é rápido, simples e seguro." },
  { category: "Conta e Cadastro", q: "Revoguei meu telefone antigo e não consigo adicionar o novo.", a: "No app, vá até Configurações > Perfil para atualizar seu número de telefone. Caso encontre dificuldades, entre em contato com o suporte pela opção Ajuda no menu do app para realizar a atualização após validação." },
  { category: "Conta e Cadastro", q: "Como criar uma nova conta e manter o histórico?", a: "Crie uma nova conta e solicite ao suporte a migração do seu histórico. No app, acesse Ajuda pelo menu principal para iniciar o atendimento." },

  { category: "Suporte e Contato", q: "Como entrar em contato com a equipe da Buddy B?", a: "Você pode falar com a equipe pelo e-mail help@buddybapp.com, pelo formulário no site oficial ou pela seção Ajuda dentro do app." },
  { category: "Suporte e Contato", q: "Encontrei um possível erro (bug), o que devo fazer?", a: "Acesse Ajuda no menu do app e envie uma mensagem ao suporte com a descrição do erro, quando ocorreu e, se possível, uma captura de tela para facilitar a análise." },
  { category: "Suporte e Contato", q: "Não consigo ver meus dados, para onde eles foram?", a: "Verifique se sua conta está sincronizada corretamente. Tente sair do app e entrar novamente. Caso o problema continue, entre em contato com o suporte." },
  { category: "Suporte e Contato", q: "Gostaria de ser nosso parceiro?", a: "Adoraríamos conversar. Entre em contato pelo e-mail comercial@buddybapp.com e conte como você gostaria de colaborar com a Buddy B." },
  { category: "Suporte e Contato", q: "Solução de problemas ou bugs?", a: "Reinicie o aplicativo, verifique se há atualizações disponíveis e, se o problema persistir, entre em contato com o suporte pela seção Ajuda no app." },

  { category: "Segurança e Privacidade", q: "Buddy B é seguro?", a: "Sim. O Buddy B utiliza criptografia e padrões avançados de segurança para proteger seus dados e garantir a confidencialidade das suas informações." },
  { category: "Segurança e Privacidade", q: "O que acontecerá com os meus dados cadastrados até o momento?", a: "Seus dados permanecem salvos e protegidos. Mesmo após o cancelamento da assinatura, é possível reativar a conta e recuperar todas as informações." },
  { category: "Segurança e Privacidade", q: "Como contestar uma transação fraudulenta?", a: "As transações realizadas em contas bancárias são de responsabilidade do seu banco. Entre em contato imediatamente com a instituição financeira e informe também a Buddy B para registro interno." },

  { category: "Pagamentos e Assinatura", q: "Se eu pagar agora, quanto tempo leva para liberar o sistema novamente?", a: "A liberação é automática após a confirmação do pagamento, o que normalmente ocorre em poucos minutos." },
  { category: "Pagamentos e Assinatura", q: "Quais as formas e condições de pagamento aceitas?", a: "Aceitamos cartão de crédito, débito e outras opções disponíveis conforme a plataforma de pagamento utilizada." },
  { category: "Pagamentos e Assinatura", q: "Cancelei minha assinatura. Por que ainda estou em um plano pago?", a: "Mesmo após o cancelamento, seu plano permanece ativo até o final do ciclo de cobrança vigente." },

  { category: "Conexão com o Banco", q: "Como conecto meu banco?", a: "No app, vá até Configurações > Conexões Bancárias e siga o fluxo seguro de autenticação via Open Finance." },
  { category: "Conexão com o Banco", q: "Como posso atualizar minhas informações bancárias?", a: "As informações bancárias são atualizadas automaticamente por meio da conexão bancária ativa." },
  { category: "Conexão com o Banco", q: "O Buddy B não está sincronizando corretamente. O que posso fazer?", a: "As sincronizações acontecem automaticamente a cada 6 horas. Aguarde um período, tente sair e entrar novamente no app. Se o problema persistir, contate o suporte pela seção Ajuda." },
  { category: "Conexão com o Banco", q: "Como fazer upload de arquivos bancários?", a: "Não é necessário realizar upload. O Buddy B importa as informações automaticamente via Open Finance, utilizando APIs seguras." },
  { category: "Conexão com o Banco", q: "Como configurar sincronização automática?", a: "Acesse Configurações > Conexões Bancárias, clique em Adicionar Banco e siga as instruções exibidas na tela." },
  { category: "Conexão com o Banco", q: "Meu banco tem suporte para conexão com o Buddy B?", a: "A lista de bancos disponíveis depende da API utilizada. Você pode consultar os bancos compatíveis diretamente no app ao adicionar uma nova conexão." },
  { category: "Conexão com o Banco", q: "Meu banco ou agente financeiro não está na lista para conexão com o Buddy B?", a: "Alguns agentes financeiros ainda não fazem parte do Open Finance. Informe o suporte para que possamos verificar a possibilidade de integração." },

  { category: "Funcionalidades e Uso do App", q: "Onde posso ver as transferências entre contas?", a: "Na aba Transações, utilizando o filtro Tipo de Transação: Transferências de Carteira." },
  { category: "Funcionalidades e Uso do App", q: "Como posso transferir o dinheiro que sobrou de um mês para o mês seguinte?", a: "O Buddy B faz isso automaticamente. Os saldos são cumulativos e gerenciados de forma automática pelo app." },
  { category: "Funcionalidades e Uso do App", q: "Posso importar dados via arquivo?", a: "Atualmente não. Essa funcionalidade está sendo avaliada para versões futuras." },
  { category: "Funcionalidades e Uso do App", q: "É possível exportar dados do Buddy B?", a: "Não. O Buddy B foi projetado para uma gestão 100% online, priorizando segurança e praticidade." },
  { category: "Funcionalidades e Uso do App", q: "Como remover ou editar categorias e tags?", a: "As categorias principais são fixas. No entanto, você pode criar, editar ou remover subcategorias, desde que não tenham transações vinculadas." },
  { category: "Funcionalidades e Uso do App", q: "O Buddy B foi traduzido para quais idiomas?", a: "O app está disponível em português, inglês e espanhol." },
  { category: "Funcionalidades e Uso do App", q: "Como faço para reconciliar minhas contas?", a: "Ao categorizar uma transação importada, ela é automaticamente reconciliada pelo sistema." },
  { category: "Funcionalidades e Uso do App", q: "Como baixar meu histórico de transações?", a: "O Buddy B funciona totalmente dentro da plataforma, sem necessidade de download ou exportação de dados." },
  { category: "Funcionalidades e Uso do App", q: "O Buddy B suporta múltiplas moedas?", a: "Sim. O app suporta múltiplas moedas e exibe os saldos separadamente para cada uma." },
  { category: "Funcionalidades e Uso do App", q: "A taxa de câmbio é levada em consideração?", a: "Sim. Para meses em andamento, utilizamos a cotação do dia. Para meses já finalizados, a cotação considerada é a do último dia do mês." },

  { category: "Dispositivos e Plataformas", q: "Posso usar minha conta em vários dispositivos?", a: "Sim. O Buddy B pode ser acessado em dispositivos mobile, tablet e web, utilizando os mesmos dados de login." },
  { category: "Dispositivos e Plataformas", q: "Como começar nos dispositivos iOS?", a: "Baixe o app na App Store e siga o fluxo inicial de configuração." },
  { category: "Dispositivos e Plataformas", q: "Como começar nos dispositivos Android?", a: "Baixe o app na Google Play e siga o fluxo inicial de configuração." },

  { category: "Orçamento e Planejamento", q: "Como montar um orçamento?", a: "Defina valores por categoria, subcategoria e/ou recorrência. O Buddy B organiza automaticamente o controle e acompanhamento." },
  { category: "Orçamento e Planejamento", q: "Como orçar minha renda em qualquer ciclo de pagamento?", a: "Ao criar um orçamento, basta escolher o ciclo desejado: mensal, bimestral, semestral, anual ou outro disponível." },
  { category: "Orçamento e Planejamento", q: "O que são receitas?", a: "Receitas são todos os valores que entram no seu caixa em determinado período, como salários, comissões, freelas, vendas, rendimentos, benefícios e reembolsos." },
  { category: "Orçamento e Planejamento", q: "O que são despesas?", a: "Despesas são todos os gastos, ou seja, o dinheiro que sai do seu caixa para pagar contas, produtos ou serviços." },
  { category: "Orçamento e Planejamento", q: "O que são carteiras no Buddy B?", a: "Carteiras representam onde o seu dinheiro está ou por onde ele passa, como contas bancárias, cartões, poupança ou dinheiro em espécie. Elas ajudam a manter organização e clareza financeira." },
  { category: "Orçamento e Planejamento", q: "Como configurar as carteiras no App Buddy B?", a: "Acesse Configurações > Carteiras > Adicionar Carteira, escolha o tipo, informe o saldo inicial, selecione uma cor e salve." },
  { category: "Orçamento e Planejamento", q: "O que são Categorias de Transação?", a: "Categorias de Transação indicam com o que o dinheiro foi gasto ou de onde ele veio. Elas organizam e classificam suas movimentações financeiras." },
  { category: "Orçamento e Planejamento", q: "Por que Categorias e Subcategorias são tão importantes?", a: "Elas ajudam a entender comportamentos financeiros, identificar excessos, criar limites, ajustar hábitos e tomar decisões mais conscientes." },
  { category: "Orçamento e Planejamento", q: "Como configurar as Categorias de Transação?", a: "Vá em Configurações > Categorias de Transação, escolha o grupo, selecione a categoria, nomeie a subcategoria e salve." },
  { category: "Orçamento e Planejamento", q: "O que são Objetivos no Buddy B?", a: "Objetivos financeiros representam aquilo que você deseja conquistar, transformando sonhos em metas claras, mensuráveis e acompanháveis." },
  { category: "Orçamento e Planejamento", q: "Como os objetivos funcionam na prática?", a: "Você define o objetivo, o valor, o prazo e quanto guardar por período. O Buddy B acompanha e mostra seu progresso de forma clara e motivadora." },
  { category: "Orçamento e Planejamento", q: "Como criar um objetivo no Buddy B App?", a: "Acesse Objetivos > Adicionar Objetivo, escolha a categoria, carteira, valor total, datas, descrição e salve." },
  { category: "Orçamento e Planejamento", q: "O que são Orçamentos e por que eles são tão importantes?", a: "Orçamentos são valores planejados que ajudam você a controlar ganhos e gastos, mantendo equilíbrio e previsibilidade financeira." },
  { category: "Orçamento e Planejamento", q: "Por que usar orçamentos no dia a dia?", a: "Os orçamentos ajudam a evitar excessos, reduzir estresse, criar hábitos saudáveis e alcançar objetivos financeiros." },
  { category: "Orçamento e Planejamento", q: "Como configurar orçamentos no App Buddy B?", a: "Vá em Orçamentos > Adicionar Orçamento, escolha o tipo, categoria, subcategoria, datas, recorrência e salve." },
  { category: "Orçamento e Planejamento", q: "Qual o valor do plano?", a: "O plano anual custa R$399,99 e o plano mensal R$39,99. Acompanhe nossas redes sociais para promoções e cupons." },
  { category: "Orçamento e Planejamento", q: "Esse aplicativo é para investimento?", a: "Não. O Buddy B é um planejador e organizador financeiro. Ele ajuda você a planejar o futuro com clareza, transformando números em decisões práticas para prosperar financeiramente." }
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("Sobre o Buddy B");
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 

  const toggleQuestion = (index: number) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  const filteredQuestions = faqData.filter(item => item.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>FAQ - Buddy B</title>
      </Helmet>

      <NavbarProduct />

      <div className="bg-[#EFE9FF] min-h-screen pt-[160px] pb-20"> 
        
        {/* Header */}
        <div className="text-center mb-16 container mx-auto px-4"> 
          <h1 className="font-body font-bold text-[#424242] text-[32px] lg:text-[46px] leading-[63px] mb-6">
            Quer conhecer mais?
          </h1>
          <p className="font-body font-bold text-[#424242] text-[20px] lg:text-[28px]">
            Veja as principais perguntas sobre a nossa Plataforma BuddyB.
          </p>
        </div>

        {/* Card Branco Principal */}
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="bg-white rounded-[30px] border border-[#E8E9EA] p-6 lg:p-12 shadow-sm min-h-0 lg:min-h-[766px]">
            
            {/* --- FILTROS MOBILE (Dropdown) --- */}
            <div className="lg:hidden mb-8 relative">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-full h-[50px] bg-[#9B80FF] text-white rounded-[10px] flex items-center justify-between px-6 font-bold"
              >
                <span>{activeCategory}</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 w-full bg-white border border-[#9B80FF] rounded-[10px] mt-2 shadow-xl z-20 overflow-hidden"
                  >
                    {categories.map((cat) => (
                      <div 
                        key={cat}
                        onClick={() => {
                          setActiveCategory(cat);
                          setIsMobileMenuOpen(false);
                          setOpenQuestionIndex(null);
                        }}
                        className={`p-4 border-b border-gray-100 last:border-0 cursor-pointer hover:bg-gray-50 ${activeCategory === cat ? 'text-[#9B80FF] font-bold' : 'text-[#424242]'}`}
                      >
                        {cat}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* --- FILTROS DESKTOP --- */}
            <div className="hidden lg:flex flex-wrap justify-start gap-4 mb-12">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setOpenQuestionIndex(null); }}
                  className={`
                    whitespace-nowrap px-5 py-2 rounded-[10px] font-body font-bold text-[16px] transition-colors border-2
                    ${activeCategory === cat 
                      ? 'bg-[#9B80FF] text-white border-[#9B80FF]' 
                      : 'bg-white text-[#9B80FF] border-[#9B80FF] hover:bg-[#F3F4F6]'}
                  `}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Lista de Perguntas */}
            <div className="flex flex-col gap-4">
              {filteredQuestions.map((item, index) => (
                <div key={index} className="border-b border-[#E8E9EA] last:border-0 pb-4">
                  <button 
                    onClick={() => toggleQuestion(index)}
                    className="w-full flex items-center justify-between text-left py-4 px-4 hover:bg-[#F9FAFB] rounded-[10px] transition-colors border border-[#9B80FF]"
                  >
                    <span className="font-body font-bold text-[#424242] text-[16px] lg:text-[18px]">
                      {item.q}
                    </span>
                    <span className="text-[#9B80FF] text-2xl font-bold ml-4">
                      {openQuestionIndex === index ? '−' : '+'}
                    </span>
                  </button>
                  
                  <AnimatePresence>
                    {openQuestionIndex === index && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 text-[#424242] font-body text-[16px] leading-relaxed bg-[#F9FAFB] rounded-b-[10px] border-x border-b border-[#9B80FF] mt-[-5px] pt-6">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              {filteredQuestions.length === 0 && (
                <p className="text-center text-gray-500 py-10">Selecione uma categoria acima.</p>
              )}
            </div>

          </div>
        </div>

        <div className="pb-20"></div>

        <FooterProduct />
      </div>
    </>
  );
}