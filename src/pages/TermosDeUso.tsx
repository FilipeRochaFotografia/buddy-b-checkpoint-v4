import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FooterCapture } from '../sections/capture/FooterCapture'; // Reutilizando o footer existente

const TermosDeUsoPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Termos de Uso - Buddy B</title>
        <meta name="description" content="Termos de uso e condições do aplicativo Buddy B." />
      </Helmet>

      <div className="min-h-screen bg-background font-body text-text-body">
        

        <main className="pt-32 pb-20 container mx-auto px-4">
          
          {/* Cabeçalho do Documento */}
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">
              Termos de Uso
            </h1>
            <p className="text-sm text-text-muted font-semibold uppercase tracking-wider">
              Última atualização: 30/09/2025
            </p>
          </div>

          {/* Conteúdo do Documento */}
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-[20px] shadow-sm border border-gray-100 prose prose-purple prose-lg text-text-body">
            
            <p className="mb-6">
              Estes Termos de Uso (“Termos”) regem o uso do aplicativo <strong>Buddy B</strong>, desenvolvido pela <strong>SAVVY B Soluções & Tecnologia LTDA</strong>, registrada sob o CNPJ 40.953.174/0001-93, com sede na Rua Álvaro José Dantas, nº.39, bairro Parque Alvorada, Brumado/BA, CEP:41.100-000. Ao acessar ou utilizar o aplicativo, que possui natureza jurídica de um contrato de adesão, você concorda em cumprir estes Termos, responsabilizando-se integralmente por todos e quaisquer atos praticados. Se você não concorda com estes Termos, não utilize o aplicativo.
            </p>

            <h2 className="text-2xl font-heading font-bold text-text-title mt-10 mb-4">1. ACEITAÇÃO DOS TERMOS</h2>
            <p className="mb-4">
              Ao criar uma conta e utilizar o Buddy B, você declara que leu, entendeu e concorda em estar vinculado a estes Termos.
              Estes Termos de Uso são inteiramente publicizados, desta forma, não será considerado que seja alegado desconhecimento das regras e obrigações aqui estabelecidas.
            </p>

            <h2 className="text-2xl font-heading font-bold text-text-title mt-10 mb-4">2. ACESSO AOS SERVIÇOS</h2>
            <p className="mb-4">
              Você deve ter pelo menos 13 anos de idade para utilizar o aplicativo. Se você tiver menos de 18 anos, deverá ter a permissão de seus pais ou responsável legal. Se você utilizar a ferramenta em nome de outra pessoa ou entidade, deverá ter autoridade para aceitar os Termos em nome dela.
            </p>

            <h2 className="text-2xl font-heading font-bold text-text-title mt-10 mb-4">3. DESCRIÇÃO DO SERVIÇO</h2>
            <p className="mb-4">
              O Buddy B é uma ferramenta digital de gestão financeira pessoal que permite aos usuários maior controle e clareza sobre suas finanças, auxiliando-os no acompanhamento de receitas e despesas, definição de orçamentos e alcance de metas financeiras.
              Contudo, nossos serviços não garantem resultados específicos, garantias de desempenho ou outra expectativa.
            </p>

            <h2 className="text-2xl font-heading font-bold text-text-title mt-10 mb-4">4. AÇÕES DO USUÁRIO DENTRO DO APLICATIVO</h2>
            <p className="mb-4">
              Dentro do aplicativo, os usuários têm a oportunidade de realizar diversas ações que tornam a experiência mais interativa e funcional. A seguir, estão detalhadas algumas das principais atividades que podem ser realizadas:
            </p>

            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">4.1. Transações Realizadas:</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Registro de Transações:</strong> Usuários podem adicionar, editar ou excluir transações financeiras, como compras, vendas ou pagamentos.</li>
              <li><strong>Histórico de Transações:</strong> Acesso a um histórico detalhado de todas as transações realizadas, permitindo fácil rastreamento e consulta.</li>
              <li><strong>Classificação de Transações:</strong> Opção de categorizar transações para melhor organização e análise de gastos.</li>
            </ul>

            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">4.2. Orçamentos Criados e Ajustados:</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Criação de Orçamentos:</strong> Usuários podem criar orçamentos mensais ou anuais, definindo limites de gastos para diferentes categorias.</li>
              <li><strong>Ajustes em Orçamentos:</strong> Facilidade para ajustar orçamentos com base em mudanças nas despesas ou receitas, permitindo maior flexibilidade.</li>
              <li><strong>Monitoramento de Orçamentos:</strong> Visualização de como os gastos reais se comparam com os orçamentos estabelecidos, com gráficos e relatórios.</li>
            </ul>

            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">4.3. Interações com Notificações e Mensagens</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Notificações de Transações:</strong> Alertas em tempo real sobre transações realizadas, ajudando a manter o usuário informado.</li>
              <li><strong>Mensagens de Lembrete:</strong> Notificações de lembrete para pagamentos de contas ou vencimentos de orçamentos, garantindo que o usuário não perca prazos importantes.</li>
              <li><strong>Feedback e Suporte:</strong> Interação com mensagens de suporte ao cliente, permitindo que os usuários enviem dúvidas ou relatem problemas diretamente pelo aplicativo.</li>
            </ul>
            <p className="mb-4">Essas ações proporcionam uma experiência rica e útil dentro do aplicativo, permitindo que os usuários gerenciem suas finanças de forma eficiente e organizada.</p>

            <h2 className="text-2xl font-heading font-bold text-text-title mt-10 mb-4">5. RESTRIÇÕES DE USO DOS SERVIÇOS</h2>
            <p className="mb-4">Ao utilizar nossos Serviços, você concorda em respeitar as seguintes restrições:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Infringir Direitos de Terceiros:</strong> Você não poderá usar os serviços disponibilizados pelo aplicativo de maneira que infrinja, se aproprie indevidamente ou viole os direitos de qualquer pessoa, incluindo, mas não se limitando a direitos autorais, marcas registradas, direitos de privacidade e outros direitos de propriedade intelectual.</li>
              <li><strong>Desmontagem e Análise de Código:</strong> É estritamente proibido realizar montagem reversa, compilação reversa, descompilação, tradução ou qualquer tentativa de descobrir o código-fonte ou os componentes subjacentes dos modelos, algoritmos e sistemas que compõem o aplicativo. Esta restrição se mantém, exceto quando tal proibição for contrária à legislação aplicável.</li>
              <li><strong>Declaração Falsa sobre Resultados:</strong> Você não poderá declarar que os resultados obtidos através da utilização do Buddy B foram gerados por humanos, quando, na verdade, foram gerados de forma automatizada. Além disso, é proibido violar nossas Políticas de Uso em qualquer circunstância.</li>
              <li><strong>Informações sobre Crianças:</strong> É estritamente proibido enviar-nos quaisquer informações pessoais de crianças menores de 13 anos ou de qualquer idade aplicável de consentimento digital. Esta restrição é fundamental para garantir a proteção da privacidade das crianças e a conformidade com as legislações pertinentes.</li>
            </ul>

            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">5.1. Consequências das Violações</h3>
            <p className="mb-4">
              Qualquer violação a estas restrições poderá resultar em ações corretivas, que podem incluir a suspensão ou o encerramento do acesso aos Serviços, além de possíveis ações legais para reparar danos causados. É fundamental que todos os usuários sigam estas diretrizes para manter um ambiente seguro e respeitoso para todos.
            </p>

            <h2 className="text-2xl font-heading font-bold text-text-title mt-10 mb-4">6. CADASTRO E CONTA DO USUÁRIO</h2>
            <p className="mb-4">
              Para utilizar o aplicativo, você deve criar uma conta em uma de nossas plataformas (iOS, Android ou Web), fornecendo informações verdadeiras, completas e atualizadas. Você é responsável pela confidencialidade de suas credenciais de acesso e por todas as atividades realizadas em sua conta.
            </p>
            <p className="mb-2">Você conseguirá utilizar os serviços de forma adequada e ágil se estiver usando:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Acesso à internet com velocidade maior que 1MB/s;</li>
              <li>Para a versão web: PC Windows ou Mac e últimas versões dos browsers: Mozilla Firefox, Google Chrome ou Safari;</li>
              <li>Para a versão mobile iOS: Será mantida a compatibilidade sempre da última versão e 2 anteriores;</li>
              <li>Para a versão mobile Android: Versão 4.1 ou superior;</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-text-title mt-10 mb-4">7. COLETA E USO DE DADOS PESSOAIS</h2>
            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">7.1. Consentimento:</h3>
            <p className="mb-4">Ao utilizar o Buddy B você concorda com a coleta, uso e tratamento de seus dados pessoais conforme descrito na nossa Política de Privacidade.</p>
            
            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">7.2. Dados Coletados:</h3>
            <p className="mb-2">Podemos coletar, entre outros, os seguintes dados:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Pessoais:</strong> Nome completo; Nome de usuário; E-mail; CPF; Data de nascimento; Telefone celular; Endereço.</li>
              <li><strong>Dados de navegação e dispositivos:</strong> Modelo do dispositivo móvel e sistema operacional utilizado; Endereço IP; Data e hora do acesso; Versão do aplicativo; Provedor de conexão; Dados de geolocalização (com autorização do usuário).</li>
            </ul>
            <p className="mb-4">
              O Buddy B não compartilha informações pessoais dos usuários com terceiros, exceto quando estritamente necessário para a operação do serviço ou quando houver a necessidade de auxiliar e cooperar com qualquer autoridade judicial ou órgão governamental, podendo enviar informações cadastrais do Usuário quando for obrigada por decisão judicial ou por força de determinação legal.
            </p>

            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">7.3. Finalidade:</h3>
            <p className="mb-2">Seus dados pessoais serão utilizados para:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Permitir o uso adequado do aplicativo e entrega de seus serviços;</li>
              <li>Fornecer e melhorar nossos serviços;</li>
              <li>Personalizar sua experiência;</li>
              <li>Comunicar-se com você;</li>
              <li>Cumprir obrigações legais.</li>
            </ul>
            <p className="mb-4">Dados sensíveis, como geolocalização e integrações bancárias, serão coletados apenas mediante autorização expressa.</p>

            <h2 className="text-2xl font-heading font-bold text-text-title mt-10 mb-4">8. DIREITOS DO USUÁRIO</h2>
            <p className="mb-2">De acordo com a LGPD, você tem os seguintes direitos em relação aos seus dados pessoais:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Acesso a seus dados pessoais;</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>Eliminação de dados pessoais desnecessários ou excessivos;</li>
              <li>Revogação do consentimento.</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-text-title mt-10 mb-4">9. SEGURANÇA DOS DADOS</h2>
            <p className="mb-4">
              Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado, uso ou divulgação.
              Contudo, você reconhece que nenhuma transmissão de dados pela internet é completamente segura. Nessas hipóteses, não será o Buddy B responsável por qualquer exclusão, obtenção, utilização ou divulgação não autorizada de informações resultantes de ataques que ele não poderia razoavelmente impedir.
            </p>

            <h2 className="text-2xl font-heading font-bold text-text-title mt-10 mb-4">10. MODELOS DE MONETIZAÇÃO DO APLICATIVO</h2>
            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">10.1.</h3>
            <p className="mb-4">
              O registro no aplicativo Buddy B concede ao usuário acesso gratuito por um período de 07 (sete) dias corridos, contados a partir da data de criação da conta. Durante o período gratuito, o usuário poderá, a qualquer momento, optar pela contratação de um dos planos pagos oferecidos. Caso o Usuário realize a contratação antecipada, o acesso gratuito será encerrado de imediato, passando a vigorar o plano escolhido. Expirado o período gratuito de 07 (sete) dias sem a contratação de um plano, o Usuário deverá obrigatoriamente escolher uma modalidade de assinatura para continuar utilizando o aplicativo. Neste primeiro momento, estarão disponíveis apenas os seguintes planos de assinatura:
            </p>
            <ul className="list-none pl-6 mb-4 space-y-4">
              <li>
                <strong>Buddy B Standard – Assinatura Mensal</strong>
                <ul className="list-disc pl-6 mt-1 text-sm">
                  <li>(i) Liberdade contratual: Pay as You Go;</li>
                  <li>(ii) Acesso a conteúdos exclusivos a qualquer momento;</li>
                  <li>(iii) Possibilidade de upgrade para planos mais completos;</li>
                  <li>(iv) Indicado para quem busca começar com liberdade e qualidade.</li>
                </ul>
              </li>
              <li>
                <strong>Buddy B Smart – Assinatura Anual</strong>
                <ul className="list-disc pl-6 mt-1 text-sm">
                  <li>(i) Compromisso de 12 (doze) meses para maior economia;</li>
                  <li>(ii) Acesso a conteúdos exclusivos;</li>
                  <li>(iii) Pagamento único para melhor planejamento;</li>
                  <li>(iv) Indicado para quem busca constância e custo-benefício.</li>
                </ul>
              </li>
            </ul>
            <p className="mb-4">
              Os preços atualizados dos planos estarão sempre disponíveis no website oficial do Buddy B e serão amplamente divulgados em suas redes sociais oficiais.
              O Usuário reconhece que as condições, valores e benefícios de cada plano poderão ser atualizados a qualquer tempo pela Savvy B, mediante comunicação prévia nos canais oficiais.
            </p>

            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">10.2. Vantagens da Monetização por Planos</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Flexibilidade:</strong> Usuários podem escolher o plano que melhor se adapta às suas necessidades, garantindo que paguem apenas pelo que realmente utilizam.</li>
              <li><strong>Acessibilidade:</strong> O acesso gratuito ao plano básico permite que todos experimentem o aplicativo antes de decidir investir em um plano pago.</li>
              <li><strong>Escalabilidade:</strong> Usuários têm a opção de atualizar seus planos conforme suas necessidades evoluem, permitindo um crescimento contínuo da base de usuários.</li>
              <li><strong>Recursos Personalizados:</strong> Cada plano é projetado para atender a diferentes perfis de usuários, assegurando que todos encontrem valor na assinatura escolhida.</li>
            </ul>

            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">10.3. Pagamentos da Assinatura</h3>
            <p className="mb-4">Ao concordar com estes Termos, você está ciente das condições e procedimentos relacionados aos pagamentos pelos serviços oferecidos.</p>

            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">10.4. Correção de Erros de Preço</h3>
            <p className="mb-4">A Buddy B se reserva no direito de corrigir erros ou equívocos relacionados aos preços cobrados, mesmo que uma fatura já tenha sido emitida ou um pagamento tenha sido recebido. Isso garante que todos os valores cobrados estejam sempre corretos e refletindo nossos serviços adequadamente.</p>

            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">10.5. Informações de Faturamento</h3>
            <p className="mb-4">Para que possamos processar pagamentos com eficiência, é essencial que você forneça informações de faturamento completas e precisas. Isso inclui um método de pagamento válido e autorizado, que será utilizado para as cobranças de acordo com o plano contratado. As assinaturas são renovadas automaticamente ao término de cada ciclo de pagamento. Não tendo renovação da assinatura o usuário perderá o acesso aos recursos do sistema.</p>

            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">10.6. Cobrança das Assinaturas</h3>
            <p className="mb-4">Os valores correspondentes ao plano contratado serão cobrados de acordo com um cronograma previamente estabelecido. É importante ressaltar que podemos alterar razoavelmente a data em que a cobrança será realizada. Ao fornecer seu método de pagamento, você autoriza a SAVVY B Soluções & Tecnologia LTDA, bem como nossos processadores de pagamento terceirizados, a fazer as cobranças correspondentes.</p>

            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">10.7. Notificações de Pagamento</h3>
            <p className="mb-4">Caso o seu pagamento não possa ser processado, você receberá uma notificação por e-mail. Além disso, poderemos suspender o acesso aos serviços até que a pendência financeira seja regularizada.</p>

            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">10.8. Cancelamento</h3>
            <p className="mb-4">Caso o Usuário deseja cancelar a assinatura contratada, deverá proceder com as seguintes ações:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Cancelamentos Uso Android:</strong> Para cancelar a renovação automática, acesse as suas assinaturas no Google Play e faça o cancelamento do plano.</li>
              <li><strong>Cancelamento Uso iOS:</strong> Para cancelar a renovação automática, siga estes 4 passos: 1. Acesse o Ajustes do celular e clique em iTunes Store e App Store. 2. Clique em cima do ID Apple: 3. Clique em Ver ID Apple e clique em cima das Assinaturas. 4. Encontre o app Buddy B e clique em Cancelar assinatura.</li>
            </ul>
            <p className="mb-4">Caso tenha qualquer dúvida sobre esse processo é só entrar em contato conosco no e-mail: comercial@savvyb.com.br.<br/> Para cancelar sua assinatura, a qualquer momento, basta entrar em contato com nosso atendimento pelo e-mail: financeiro@savvyb.com.br.</p>

            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">10.9. Reembolso</h3>
            <p className="mb-4">O valor pago será reembolsado integralmente, caso o usuário tenha solicitado o cancelamento em até 7 (sete) dias, a contar do início da utilização do plano contratado. Caso o usuário tenha solicitado o cancelamento após esses 7 (sete) dias, o cancelamento da assinatura apenas cessará a cobrança no ciclo seguinte de pagamento, tendo o usuário ainda acesso ao Buddy B até o final do ciclo vigente e já pago. Nenhuma licença será reembolsada após os 7 (sete) dias de utilização do sistema.</p>

            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">10.10. Impostos</h3>
            <p className="mb-4">Salvo indicação em contrário, os valores apresentados não incluem impostos federais, estaduais, locais ou estrangeiros, bem como taxas e avaliações semelhantes. A responsabilidade pelo pagamento de todos os impostos associados à sua compra é exclusivamente sua.</p>

            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">10.11. Alterações de Preço</h3>
            <p className="mb-4">Reservamo-nos o direito de alterar os nossos preços a qualquer momento. As alterações serão comunicadas através de um aviso em sua conta e/ou em nosso site. Os aumentos de preços entrarão em vigor 14 dias após a publicação, e qualquer modificação será aplicada imediatamente às tarifas cobradas em sua conta após a data de vigência.</p>

            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">10.12. Condições especiais de Pré-lançamento</h3>
            <p className="mb-4"><strong>10.12.1. Inexistência de Período de Teste (Trial).</strong> Durante o período de pré-lançamento, cujas datas serão divulgadas nos canais oficiais, não será aplicado o período gratuito de 7 (sete) dias previsto na cláusula 10.9. O faturamento ocorrerá imediatamente após a confirmação da assinatura.</p>
            <p className="mb-4"><strong>10.12.2. Direito de Arrependimento.</strong> Em estrita observância ao Código de Defesa do Consumidor, o USUÁRIO poderá solicitar o cancelamento com reembolso integral em até 7 (sete) dias corridos após a contratação. Após este prazo, não haverá reembolso dos valores pagos para o período de pré-lançamento.</p>
            <p className="mb-2"><strong>10.12.3. Benefícios Exclusivos do Plano Anual de Pré-lançamento.</strong> Os usuários que adquirirem exclusivamente o Plano Anual até a data de encerramento do período de pré-lançamento farão jus aos seguintes benefícios, vinculados obrigatoriamente ao e-mail de cadastro (Single ID):</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>I. Desconto Incidental:</strong> Aplicação de 80% (oitenta por cento) de desconto sobre o valor integral da tabela vigente do plano anual no ato da primeira contratação.</li>
              <li><strong>II. Promoção de Sorteio:</strong> Direito a concorrer a 10 (dez) prêmios no valor de R$ 1.000,00 (mil reais) cada, pagos via transferência bancária para conta de titularidade do assinante.
                  <ul className="list-[circle] pl-6 mt-1 text-sm space-y-1">
                      <li>a) Unicidade do Prêmio por ID: O sorteio é vinculado ao e-mail de cadastro. Cada e-mail/usuário poderá ser contemplado apenas 1 (uma) única vez. Caso o ID seja sorteado, ele será automaticamente excluído dos sorteios remanescentes desta campanha.</li>
                      <li>b) Comunicação e Validação: Toda a comunicação, notificação de contemplação e solicitação de dados para pagamento será realizada exclusivamente através do e-mail cadastrado no Buddy B. A Savvy B não se responsabiliza por falhas na entrega decorrentes de caixas de spam ou e-mails incorretos informados pelo usuário.</li>
                      <li>c) Condição de Adimplência: É condição obrigatória para o recebimento do prêmio que o ID de usuário possua uma assinatura ativa e regular na data do sorteio e na data do efetivo pagamento.</li>
                      <li>d) Prazo de Pagamento: A Savvy B realizará a transferência do valor em até 10 (dez) dias úteis após a validação dos dados bancários do ganhador, realizada via canal oficial (e-mail).</li>
                  </ul>
              </li>
              <li><strong>III. Garantia de Renovação Facilitada:</strong> Garantia de 50% (cinquenta por cento) de desconto na primeira renovação subsequente do plano anual para o mesmo ID, desde que a renovação ocorra de forma ininterrupta ao fim do primeiro ciclo.</li>
              <li><strong>IV. Upgrade Gratuito (Single Upgrade):</strong> Direito a 1 (um) upgrade gratuito para uma modalidade de plano superior que venha a ser lançada pelo Buddy B. <br/> <em>Parágrafo único: O benefício é vinculado ao e-mail de cadastro, sendo intransferível para outros IDs. Para exercer o upgrade, o USUÁRIO deve solicitar via time comercial para validação.</em></li>
            </ul>
            <p className="mb-4"><strong>10.12.4. Tratamento de Dados e Identificação.</strong> Para fins de LGPD, o e-mail cadastrado é utilizado como o identificador único (Single ID) do USUÁRIO para execução contratual, segurança e concessão de benefícios. O USUÁRIO reconhece que o acesso a este e-mail é de sua exclusiva responsabilidade, sendo o meio oficial para todas as validações jurídicas e financeiras junto à Savvy B.</p>

            <h2 className="text-2xl font-heading font-bold text-text-title mt-10 mb-4">11. CONEXÃO BANCÁRIA E OPEN FINANCE</h2>
            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">11.1. Provedor de Infraestrutura.</h3>
            <p className="mb-4">O USUÁRIO reconhece e aceita que a funcionalidade de conexão bancária e agregação de dados financeiros disponível no Buddy B é operada exclusivamente pela PLUGGY BRASIL INSTITUIÇÃO DE PAGAMENTO LTDA. (“Pluggy”), provedora tecnológica especializada em Open Finance. A Savvy B atua meramente como provedora da interface de visualização (software de gestão), não sendo integrante do Sistema Financeiro Nacional, nem atuando como Iniciadora de Transação de Pagamento (ITP) ou provedora direta de Open Finance.</p>
            
            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">11.2. Autorização Direta.</h3>
            <p className="mb-4">Ao optar pela sincronização de contas bancárias, o USUÁRIO emite, por meio da interface da aplicação, consentimento expresso e direto à Pluggy para que esta acesse, colete e transmita seus dados financeiros das instituições de origem para o ambiente do Buddy B. A revogação deste consentimento poderá ser realizada a qualquer momento pelo USUÁRIO diretamente no painel de controle de conexões do aplicativo ou junto às instituições financeiras de origem.</p>
            
            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">11.3. Regime de Sincronização e Atualização de Dados.</h3>
            <p className="mb-4">O USUÁRIO declara estar ciente de que os dados financeiros exibidos no Buddy B não são atualizados em tempo real (real-time). O processo de espelhamento e sincronização automática ocorre, em regra, a cada 6 (seis) horas, seguindo a grade de horários abaixo (Horário de Brasília): 02:00, 08:00, 14:00, 20:00.</p>
            
            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">11.4. Ausência de Garantia de Integridade Contínua.</h3>
            <p className="mb-4">A Savvy B não garante a precisão, integridade ou atualização instantânea dos saldos e extratos exibidos, uma vez que tais informações dependem da disponibilidade das APIs das instituições financeiras de origem e da infraestrutura da Pluggy. Eventuais divergências temporárias entre o saldo real no banco e o saldo exibido no aplicativo são inerentes à tecnologia de agregação de dados.</p>
            
            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">11.5. Limitação de Responsabilidade Específica.</h3>
            <p className="mb-2">Em conformidade com o art. 14, § 3º, II do Código de Defesa do Consumidor e limitações técnicas do serviço, a Savvy B exime-se expressamente de qualquer responsabilidade, solidária ou subsidiária, por danos materiais ou morais decorrentes de:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>(i) Indisponibilidade, interrupções ou falhas técnicas na infraestrutura da Pluggy ou das instituições financeiras de origem;</li>
              <li>(ii) Atrasos na sincronização (delay) ou desatualização de saldos bancários nos intervalos entre as janelas de atualização automática (02h, 08h, 14h, 20h);</li>
              <li>(iii) Vazamento de dados, incidentes de segurança cibernética ou acessos não autorizados que ocorram exclusivamente no ambiente computacional da Pluggy ou durante o tráfego de dados no ecossistema Open Finance, fora dos servidores sob gestão direta da Savvy B;</li>
              <li>(iv) Inconsistências financeiras geradas por dados corrompidos na fonte (banco de origem).</li>
            </ul>
            
            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">11.6. Canal de Suporte.</h3>
            <p className="mb-4">Questões relativas à divergência de dados bancários deverão ser reportadas ao suporte da Savvy B, que atuará exclusivamente como intermediadora na abertura de chamados técnicos junto à Pluggy para averiguação.</p>

            <h2 className="text-2xl font-heading font-bold text-text-title mt-10 mb-4">12. PROPRIEDADE INTELECTUAL</h2>
            <p className="mb-4">A proteção da propriedade intelectual na plataforma Buddy B é uma prioridade que visa garantir a integridade de seus conteúdos e a segurança jurídica de suas operações. É fundamental que os usuários compreendam e respeitem essas diretrizes, assegurando uma utilização ética e legal da plataforma, ao mesmo tempo em que se beneficiam dos serviços oferecidos.</p>
            
            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">12.1. Não Geração de Relações Jurídicas</h3>
            <p className="mb-4">Os termos de uso da Buddy B deixam claro que não há a formação de qualquer tipo de relação jurídica, como sociedade, parceria ou vínculo empregatício, entre os usuários e a plataforma. Isso ressalta que a utilização da plataforma se dá unicamente sob as condições estabelecidas, sem que haja qualquer transferência de direitos ou obrigações que caracterizem uma relação comercial ou colaborativa.</p>
            
            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">12.2. Propriedade Exclusiva da SAVVY B Soluções & Tecnologia LTDA</h3>
            <p className="mb-4">Todo o conteúdo e a infraestrutura da plataforma são considerados propriedade exclusiva da SAVVY B Soluções & Tecnologia LTDA. Isso inclui, mas não se limita a textos, imagens, layouts, softwares, códigos, bases de dados, gráficos e outros materiais. Essa exclusividade é protegida por leis específicas, como a Lei de Proteção de Softwares (Lei nº 9.609/1998) e a Lei de Direitos Autorais (Lei nº 9.610/1998), que garantem à SAVVY B Soluções & Tecnologia LTDA o direito de controlar o uso e a distribuição de seu conteúdo.</p>
            
            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">12.3. Restrições ao Uso de Conteúdos</h3>
            <p className="mb-4">Os usuários da plataforma não estão autorizados a modificar, copiar, distribuir ou criar obras derivadas a partir do conteúdo disponível. É vedado qualquer uso comercial das informações coletadas, o que reforça a proteção dos direitos da SAVVY B Soluções & Tecnologia LTDA e a necessidade de respeitar a propriedade intelectual. A violação dessas restrições pode resultar em sanções legais, conforme estabelecido nos termos.</p>
            
            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">12.4. Proteção das Marcas e Identidade Visual</h3>
            <p className="mb-4">Além do conteúdo, a identidade visual e as marcas do Buddy B são igualmente protegidas. Qualquer uso não autorizado dessas marcas, registradas ou não, pode resultar em consequências legais, incluindo sanções cíveis e criminais. Isso demonstra a importância da proteção da marca como ativo da empresa.</p>
            
            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">12.5. Consequências da Violação</h3>
            <p className="mb-4">A violação das disposições de propriedade intelectual pode levar ao bloqueio imediato e indeterminado do acesso à plataforma, além de outras repercussões legais. Essa abordagem visa não apenas proteger os direitos da SAVVY B Soluções & Tecnologia LTDA, mas também assegurar um ambiente de respeito e conformidade legal para todos os usuários.</p>

            <h2 className="text-2xl font-heading font-bold text-text-title mt-10 mb-4">13. MODIFICAÇÕES DOS TERMOS</h2>
            <p className="mb-4">Reservamo-nos o direito de modificar estes Termos a qualquer momento, sem prévio aviso. As alterações serão publicadas no aplicativo e no site e entrarão em vigor na data de sua publicação. O uso continuado do aplicativo após a publicação das alterações implica na aceitação das novas condições. Se não concordar com as alterações e houver contratado algum plano de assinatura, você deverá interromper o uso dos serviços e cancelá-los, seguindo as instruções do item "Cancelamentos e Reembolsos".</p>

            <h2 className="text-2xl font-heading font-bold text-text-title mt-10 mb-4">14. LIMITAÇÃO DE RESPONSABILIDADE</h2>
            <p className="mb-4">A SAVVY B Soluções & Tecnologia LTDA não se responsabiliza por danos diretos ou indiretos, causados aos usuários ou terceiros, resultantes do uso do Buddy B incluindo, mas não se limitando a perdas financeiras, interrupções de serviços ou danos à reputação. Caso a SAVVY B Soluções & Tecnologia LTDA seja acionada judicialmente por atos atribuíveis aos usuários, caberá a estes requerer a sua respectiva exclusão do polo passivo, sob pena do ajuizamento de ação de regresso.</p>

            <h2 className="text-2xl font-heading font-bold text-text-title mt-10 mb-4">15. RESPONSABILIDADES DO USUÁRIO</h2>
            <p className="mb-4">As responsabilidades do usuário são fundamentais para garantir a segurança e a integridade de sua conta na plataforma. A seguir, destacam-se os principais deveres e obrigações que o usuário deve cumprir:</p>
            
            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">15.1. Responsabilidade pelo Login e Senha</h3>
            <p className="mb-4">O usuário é o único responsável pela proteção de seu login e senha, devendo zelar pela sua confidencialidade. É imprescindível que o usuário mantenha sua senha em sigilo e tome medidas para evitar que terceiros tenham acesso a ela. Caso deseje alterar sua senha, o usuário deve seguir rigorosamente as orientações fornecidas no aplicativo ou site.</p>
            
            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">15.2. Comunicação de Uso Não Autorizado</h3>
            <p className="mb-4">O usuário tem a obrigação de notificar imediatamente sobre qualquer uso não autorizado de sua conta, através dos meios ofertados no aplicativo ou site. Isso inclui o acesso por terceiros sem permissão. A responsabilidade pelas operações realizadas em sua conta recai exclusivamente sobre o usuário, já que o acesso à conta é possível somente mediante a inserção da senha, que deve ser de conhecimento exclusivo do usuário.</p>
            
            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">15.3. Responsabilidade pelo Conteúdo Postado</h3>
            <p className="mb-4">Todo o conteúdo que o usuário publica na plataforma é de sua total responsabilidade. Isso implica que o usuário deve ser diligente e ético em suas postagens, garantindo que suas ações sejam consistentes com as diretrizes da plataforma e as leis aplicáveis. Qualquer ato praticado pelo usuário, incluindo postagens e interações, é de sua responsabilidade integral.</p>

            <h2 className="text-2xl font-heading font-bold text-text-title mt-10 mb-4">16. CONSEQUÊNCIAS DA INOBSERVÂNCIA DAS REGRAS ESTABELECIDAS NO TERMO DE USO</h2>
            <p className="mb-4">A inobservância das regras estabelecidas neste Termo de Uso pode acarretar diversas consequências para o Usuário, que vão desde a advertência até o cancelamento definitivo da conta. Abaixo, são detalhadas as principais implicações da violação das normas:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Advertências e Penalizações:</strong> O Buddy B reserva-se o direito de advertir o usuário em caso de suspeitas de irregularidades. Isso pode ser o primeiro passo antes de ações mais severas serem tomadas.</li>
              <li><strong>Suspensão Temporária ou Definitiva da Conta:</strong> A conta do usuário pode ser suspensa, seja de forma temporária ou definitiva, dependendo da gravidade da infração. Isso impede o acesso a funcionalidades da Plataforma e limita a utilização dos serviços oferecidos.</li>
              <li><strong>Ações Legais:</strong> Em casos de suspeita de ilegalidade ou fraude, a SAVVY B Soluções & Tecnologia LTDA pode iniciar ações legais cabíveis, o que pode resultar em processos judiciais e outras complicações legais para o Usuário.</li>
              <li><strong>Verificação de Identidade:</strong> Se houver impossibilidade de verificar a identidade do usuário ou se informações fornecidas forem incorretas, a conta pode ser suspensa, o que destaca a importância de fornecer dados precisos e verificáveis.</li>
              <li><strong>Responsabilidade por Danos:</strong> O usuário pode ser responsabilizado por danos causados a terceiros ou à própria SAVVY B Soluções & Tecnologia LTDA, o que pode levar a consequências financeiras e legais adicionais.</li>
              <li><strong>Violação das Políticas:</strong> O descumprimento de qualquer dispositivo dos Termos e Condições, Política de Privacidade ou legislações aplicáveis pode resultar em ações punitivas, reforçando a necessidade de conformidade com todas as diretrizes estabelecidas.</li>
              <li><strong>Consequências Financeiras:</strong> A falta de pagamento das mensalidades para a licença de uso da Plataforma pode levar à suspensão ou cancelamento da conta, demonstrando a importância de manter as obrigações financeiras em dia.</li>
              <li><strong>Desistência de Indenização:</strong> Em qualquer hipótese de suspensão da conta, o usuário não terá direito a qualquer indenização ou ressarcimento, o que ressalta a gravidade das consequências da inobservância das regras.</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-text-title mt-10 mb-4">17. SERVIÇOS DE TERCEIROS</h2>
            <p className="mb-4">O Buddy B reconhece a importância de proporcionar uma experiência informativa e segura aos seus usuários. Contudo, é fundamental esclarecer a responsabilidade da empresa em relação a links e conteúdos de sites e aplicativos de terceiros que possam ser acessados por meio da nossa Plataforma.</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Isenção de Responsabilidade:</strong> A presença de links para sites e aplicativos de terceiros na Plataforma do Buddy B não deve ser interpretada como uma validação, endosse ou garantia da ferramenta em relação ao conteúdo e serviços oferecidos por esses terceiros. O Buddy B não possui controle sobre a precisão, qualidade ou confiabilidade das informações contidas nesses sites.</li>
              <li><strong>Autonomia do Usuário:</strong> Ao acessar links externos, o usuário assume total responsabilidade por suas interações. É importante que os usuários sejam críticos e cautelosos, considerando que as práticas e políticas desses sites podem diferir substancialmente daquelas adotadas pelo Buddy B.</li>
              <li><strong>Recomendações Importantes:</strong> Para garantir uma navegação segura e informada, o Buddy B aconselha a leitura atenta dos Termos de Uso e Políticas de Privacidade de cada site ou serviço de terceiros que o usuário decidir acessar. Essa prática é essencial para entender como esses terceiros coletam, utilizam e protegem as informações dos usuários.</li>
              <li><strong>Proteção de Dados e Privacidade:</strong> O Buddy B está comprometido com a proteção de dados e a privacidade dos usuários em sua Plataforma. Entretanto, ao acessar sites de terceiros, os dados pessoais dos usuários podem estar sujeitos a diferentes políticas de privacidade. Portanto, é crucial que os usuários se familiarizem com essas políticas ao interagir com conteúdos externos.</li>
              <li><strong>Atualizações e Alterações:</strong> O Buddy B não se responsabiliza por quaisquer alterações que possam ocorrer nos sites ou aplicativos de terceiros, bem como por mudanças nas suas respectivas políticas e práticas. O monitoramento contínuo é responsabilidade do usuário.</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-text-title mt-10 mb-4">18. LEGISLAÇÃO APLICÁVEL</h2>
            <p className="mb-4">Estes Termos serão regidos e interpretados de acordo com as leis da República Federativa do Brasil. Qualquer disputa decorrente ou relacionada a estes Termos será submetida à jurisdição dos tribunais da comarca de Brumado/BA, renunciando as partes a qualquer outro foro.</p>

            <h2 className="text-2xl font-heading font-bold text-text-title mt-10 mb-4">19. EXCLUSÃO DE CONTA DEVIDO A INATIVIDADE</h2>
            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">19.1.</h3>
            <p className="mb-4">Fica a critério da SAVVY B Soluções & Tecnologia LTDA, a exclusão de todas as contas sem assinaturas ativas do nosso banco de dados, que estiverem sem qualquer atividade por três meses. Todos os dados da conta serão excluídos e não poderão ser recuperados. Esta regra se aplica apenas a contas sem vínculo com assinaturas. Contas com licenças ativas não sofrerão qualquer modificação.</p>
            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">19.2.</h3>
            <p className="mb-4">Entende-se por inatividade a falta de login em uma conta cadastrada, seja pelo mobile ou web. Se você tiver uma conta excluída por inatividade, poderá utilizar o mesmo E-mail para fazer um novo cadastro em nosso site.</p>

            <h2 className="text-2xl font-heading font-bold text-text-title mt-10 mb-4">20. CONTATO</h2>
            <p className="mb-4">Se você tiver dúvidas sobre estes Termos ou sobre a Política de Privacidade, entre em contato conosco através do E-mail: comercial@savvyb.com.br e Site: www.buddybapp.com.</p>
          </div>
        </main>
        
        {/* Footer Reutilizado */}
        <FooterCapture />
      </div>
    </>
  );
};

export default TermosDeUsoPage;