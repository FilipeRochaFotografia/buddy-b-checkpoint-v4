import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FooterCapture } from '../sections/capture/FooterCapture';

const PoliticaPrivacidadePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade - Buddy B</title>
        <meta name="description" content="Política de Privacidade do aplicativo Buddy B. Saiba como coletamos e protegemos seus dados." />
      </Helmet>

      <div className="min-h-screen bg-background font-body text-text-body">
        

        <main className="pt-32 pb-20 container mx-auto px-4">
          
          {/* Cabeçalho do Documento */}
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">
              Política de Privacidade
            </h1>
            <p className="text-sm text-text-muted font-semibold uppercase tracking-wider">
              Última atualização: 30/09/2025
            </p>
          </div>

          {/* Conteúdo do Documento */}
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-[20px] shadow-sm border border-gray-100 text-text-body leading-relaxed">
            
            <p className="mb-4">
              O Buddy B é uma ferramenta digital desenvolvida pela SAVVY B Soluções & Tecnologia LTDA, registrada sob o CNPJ 40.953.174/0001-93.
            </p>
            <p className="mb-4">
              Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos as informações pessoais dos usuários do nosso aplicativo de gestão financeira pessoal, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
            </p>
            <p className="mb-4">
              Ao optar por utilizar a ferramenta, você concorda com a coleta e o uso de informações em relação a esta política.
            </p>
            <p className="mb-6">
              As Informações Pessoais coletadas são utilizadas para fornecer e melhorar o Serviço. O Buddy B não utiliza ou compartilha estas informações com ninguém, exceto conforme descrito nesta Política de Privacidade.
            </p>

            <h2 className="text-2xl font-heading font-bold text-text-title mt-10 mb-4">1. DADOS PESSOAIS COLETADOS</h2>
            <p className="mb-4">Para gerenciamento e criação da conta no aplicativo Buddy B, serão solicitados os seguintes dados, que serão retidos e usados conforme descrito nesta Política de Privacidade:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Dados de Identificação:</strong> Nome completo; nome de usuário; E-mail; CPF; data de nascimento e telefone celular.</li>
              <li><strong>Dados Financeiros:</strong> Valores de receitas e despesas; categorias de gastos e metas financeiras; saldos bancários e de cartões de crédito (integrados via API ou inseridos manualmente).</li>
              <li><strong>Dados de Acesso:</strong> Informações sobre o dispositivo utilizado para acessar o aplicativo, incluindo endereço IP; tipo de navegador e informações de login; data e hora do acesso; versão do aplicativo; provedor de conexão e dados de geolocalização (com autorização do usuário).</li>
              <li><strong>Dados para login e autenticação:</strong> Credenciais de login (e-mail/senha ou integração com Google/Apple).</li>
              <li><strong>Feedback e suporte:</strong> Mensagens enviadas ao suporte; feedbacks fornecidos sobre a ferramenta.</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-text-title mt-10 mb-4">2. FINALIDADE DO TRATAMENTO DE DADOS</h2>
            <p className="mb-2">Os dados pessoais coletados têm as seguintes finalidades:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Proporcionar a funcionalidade do aplicativo, permitindo que os usuários gerenciem suas finanças pessoais.</li>
              <li>Personalizar a experiência do usuário, oferecendo recomendações e insights financeiros.</li>
              <li>Comunicar-se com os usuários sobre atualizações, novidades e ofertas relacionadas ao aplicativo.</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-text-title mt-10 mb-4">3. FUNCIONALIDADES DO USUÁRIO NO APP</h2>
            <p className="mb-4">O aplicativo Buddy B oferece uma variedade de funcionalidades que permitem aos usuários gerenciar suas finanças de maneira eficiente e prática. A seguir, destacamos algumas das principais funcionalidades disponíveis:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Transações Realizadas:</strong> Os usuários podem visualizar todas as transações financeiras que realizaram, possibilitando um controle detalhado de receitas, despesas e transferência entre suas carteiras. Essa funcionalidade ajuda a manter um registro claro e atualizado das movimentações financeiras.</li>
              <li><strong>Orçamentos Criados e Ajustados:</strong> O app permite que os usuários criem e ajustem orçamentos de acordo com suas necessidades. Essa ferramenta é essencial para planejar gastos e economizar, proporcionando uma visão clara do que pode ser investido em diferentes categorias.</li>
              <li><strong>Dashboard:</strong> Os usuários têm acesso a um painel interativo que apresenta de forma visual e intuitiva suas principais informações financeiras. O dashboard fornece insights sobre padrões de gastos, distribuição por categorias e evolução do orçamento, permitindo identificar oportunidades de economia e melhor organização financeira.</li>
              <li><strong>Interações com Notificações e Mensagens:</strong> O aplicativo também possui um sistema de notificações e mensagens que mantém os usuários informados sobre atualizações importantes, lembretes de pagamento e dicas financeiras. Essa funcionalidade promove um engajamento contínuo, ajudando os usuários a se manterem organizados e informados.</li>
            </ul>
            <p className="mb-4">Com essas funcionalidades, o aplicativo se torna uma ferramenta poderosa para a gestão financeira pessoal, promovendo um maior controle e entendimento das finanças de cada usuário.</p>

            <h2 className="text-2xl font-heading font-bold text-text-title mt-10 mb-4">4. BASE LEGAL PARA O TRATAMENTO DE DADOS</h2>
            <p className="mb-2">O tratamento de dados pessoais será realizado com base nas seguintes hipóteses legais previstas na LGPD:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Execução do contrato:</strong> Permitir o uso adequado do aplicativo e entrega de seus serviços.</li>
              <li><strong>Cumprimento de obrigações legais:</strong> Atender requisitos fiscais e regulamentares, especialmente no Brasil.</li>
              <li><strong>Legítimo interesse:</strong> Melhorar a experiência do usuário, realizar análises financeiras e desenvolver novas funcionalidades.</li>
              <li><strong>Consentimento:</strong> Dados sensíveis, como geolocalização e integrações bancárias, serão coletados apenas mediante autorização expressa.</li>
            </ul>
            <p className="mb-4">Para tal coleta, utilizamos algumas tecnologias padrões, como cookies, pixel tags, beacons e local shared objects, que têm o propósito de melhorar a experiência de navegação do titular nos serviços, de acordo com seus hábitos e suas preferências.</p>
            <p className="mb-4">O usuário tem a opção de aceitar ou recusar os cookies e saber quando um cookie está sendo enviado para o seu dispositivo. Se o usuário optar por recusar os cookies que apareceram quando da utilização do aplicativo, talvez não consiga utilizar algumas das suas funcionalidades.</p>

            <h2 className="text-2xl font-heading font-bold text-text-title mt-10 mb-4">5. COMPARTILHAMENTO DE DADOS</h2>
            <p className="mb-2">O Buddy B não compartilha informações pessoais dos usuários com terceiros, exceto nas seguintes circunstâncias:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Com prestadores de serviços que atuam em nosso nome, como serviços de hospedagem e suporte técnico, que estão obrigados a manter a confidencialidade dos dados.</li>
              <li>Quando necessário para cumprir obrigações legais ou atender a solicitações de autoridades competentes.</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-text-title mt-10 mb-4">6. ARMAZENAMENTO DE DADOS</h2>
            <p className="mb-4">Os dados pessoais serão armazenados em servidores seguros, com tecnologia de ponta para proteção contra acessos não autorizados, obedecendo às boas práticas de segurança recomendadas pelo mercado, bem como a legislação vigente.</p>
            <p className="mb-4">Os dados armazenados serão acessíveis apenas pela equipe de banco de dados, marketing e tecnologia da Empresa para as finalidades descritas nesta Política de Privacidade.</p>
            <p className="mb-4">As informações são mantidas pelo tempo necessário para a prestação dos serviços oferecidos pela Plataforma, com o seu consentimento através do aceite dessa Política de Privacidade, e pelo tempo e nas condições de retenção de dados determinadas pela legislação aplicável.</p>

            <h2 className="text-2xl font-heading font-bold text-text-title mt-10 mb-4">7. INFORMAÇÕES OBTIDAS DE PARCEIROS EXTERNOS</h2>
            <p className="mb-4">Podemos coletar informações sobre os usuários (idade, gênero, região de uso etc.) de anunciantes, mídias e outros parceiros externos.</p>
            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">7.1. Links para outros sites</h3>
            <p className="mb-4">Este serviço pode conter links para outros sites. Se você clicar em um link de terceiros, será direcionado para esse site.</p>
            <p className="mb-4">Importante ressaltar que estes sites externos não são operados por nós. Portanto, recomendamos fortemente que você revise a Política de Privacidade desses sites.</p>
            <p className="mb-4">Ratifica-se que a Buddy B não tem o controle e não assumimos nenhuma responsabilidade pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites ou serviços de terceiros.</p>

            <h2 className="text-2xl font-heading font-bold text-text-title mt-10 mb-4">8. DIREITOS DOS USUÁRIOS</h2>
            <p className="mb-4">De acordo com a LGPD, os usuários têm os seguintes direitos em relação aos seus dados pessoais:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Acesso:</strong> Solicitar confirmação da existência de tratamento e acesso aos dados pessoais. Caso queira ter acesso aos dados como anexos e dados financeiros, basta enviar um e-mail para comercial@savvyb.com.br.</li>
              <li><strong>Correção:</strong> Solicitar a correção de dados incompletos, inexatos ou desatualizados. O Usuário poderá visualizar, através de consulta no aplicativo (seção Configuração, em seguida Perfil), todas as informações que são mantidas a seu respeito, sendo conferida a opção de alteração das informações armazenadas.</li>
              <li><strong>Exclusão:</strong> Solicitar a exclusão dos dados pessoais, salvo exceções previstas na legislação. Os usuários terão o direito de solicitar a exclusão de suas informações diretamente no aplicativo no perfil do Usuário ou através do e-mail de suporte para comercial@savvyb.com.br.</li>
              <li><strong>Portabilidade:</strong> Solicitar a transferência dos dados pessoais a outro fornecedor de serviços.</li>
              <li><strong>Revogação:</strong> Revogar o consentimento para o tratamento de dados pessoais. A revogação do consentimento levará ao bloqueio do uso dos Dados Pessoais do usuário para quaisquer finalidades, ressalvas apenas a exceções expressamente previstas em lei. A exclusão efetiva dos dados, entretanto, ficará condicionada às exigências regulatórias existentes. A revogação do consentimento pode ser solicitada através da Plataforma, no perfil do Usuário ou através do e-mail de suporte para comercial@savvyb.com.br.</li>
              <li><strong>Confirmação de existência de tratamento de dados pessoais e acesso:</strong> Você pode confirmar se realizamos o tratamento de seus dados pessoais e requerer o acesso a eles.</li>
              <li><strong>Recusa:</strong> Você tem o direito de saber as consequências da recusa no fornecimento de consentimento para tratamento de suas informações pessoais e de revogá-lo quando já houver sido dado.</li>
              <li><strong>Revisão de decisão automatizada:</strong> Você pode solicitar que decisões tomadas de forma automatizada e que afetem seus direitos sejam revisadas.</li>
              <li><strong>Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade</strong></li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-text-title mt-10 mb-4">9. SEGURANÇA DA INFORMAÇÃO</h2>
            <p className="mb-4">Valorizamos sua confiança em nos fornecer suas Informações Pessoais, portanto, a Buddy B recorre a implementação de práticas de segurança cibernética, como criptografia SSL e autenticação de dois fatores, para proteger os dados do usuário.</p>
            <p className="mb-4">Utilizamos ferramentas para identificar e prevenir vulnerabilidades em nossos sistemas e possuímos um rigoroso controle de acesso aos dados pessoais, onde somente as pessoas autorizadas podem acessá-los.</p>
            <p className="mb-4">Suas informações serão armazenadas, processadas, acessadas, desde que seja respeitada a legislação brasileira.</p>
            <p className="mb-4">Todavia, é importante ressaltar que nenhum método de transmissão pela internet, ou método de armazenamento eletrônico é 100% seguro e confiável, e não podemos garantir sua segurança absoluta.</p>
            <p className="mb-4">Dessa forma, a Empresa não se responsabiliza por ações ilícitas cometidas por terceiros que possam vir a sofrer, apesar de seguir as melhores práticas e regulamentações vigentes.</p>

            <h2 className="text-2xl font-heading font-bold text-text-title mt-10 mb-4">10. TRANSPARÊNCIA E NOTIFICAÇÃO</h2>
            <p className="mb-4">Em caso de ocorrência de um incidente de segurança que possa comprometer os dados pessoais dos usuários, o Buddy B tomará as seguintes medidas:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Identificação do Incidente:</strong> Assim que um incidente de segurança for identificado, a equipe de segurança da informação será acionada para avaliar a situação e determinar a natureza e a gravidade do incidente.</li>
              <li><strong>Investigação e Mitigação:</strong> Após a identificação do incidente, realizaremos uma investigação detalhada para entender a extensão do problema e tomar as ações necessárias para mitigar quaisquer danos. Isso incluirá a contenção do incidente e a implementação de medidas corretivas.</li>
              <li><strong>Notificação aos Usuários:</strong> Se o incidente de segurança resultar em risco significativo para os direitos e liberdades dos usuários, o Buddy B se compromete a notificar os usuários afetados, fornecendo informações claras sobre a natureza do incidente, as possíveis consequências e as medidas que podem ser adotadas para mitigar os riscos.</li>
              <li><strong>Comunicação à Autoridade Nacional de Proteção de Dados:</strong> Quando aplicável, o Buddy B notificará a Autoridade Nacional de Proteção de Dados (ANPD) sobre o incidente de segurança, conforme exigido pela Lei Geral de Proteção de Dados (LGPD), dentro dos prazos estabelecidos pela legislação.</li>
            </ul>
            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">10.1. Registro e Aprendizado Contínuo</h3>
            <p className="mb-4">Todos os incidentes de segurança serão devidamente registrados e analisados em relatórios internos. Esses registros serão utilizados para aprimorar continuamente nossas políticas de segurança e os procedimentos de resposta a incidentes, garantindo que aprendamos com cada situação e implementemos melhorias efetivas.</p>
            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">10.2. Contato para Dúvidas e Relatos de Incidentes</h3>
            <p className="mb-4">Os usuários poderão entrar em contato com a nossa equipe de atendimento ao cliente através do e-mail comercial@savvyb.com.br para relatar qualquer suspeita de incidente de segurança ou para esclarecer dúvidas sobre como gerenciamos a segurança dos seus dados pessoais.</p>

            <h2 className="text-2xl font-heading font-bold text-text-title mt-10 mb-4">11. COMPARTILHAMENTO E PAPÉIS NO TRATAMENTO DE DADOS (OPEN FINANCE)</h2>
            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">11.1. Dinâmica de Compartilhamento.</h3>
            <p className="mb-4">Para viabilizar a funcionalidade de gestão financeira automatizada, o USUÁRIO compreende e autoriza que seus dados financeiros sejam compartilhados e processados em um ambiente de infraestrutura segregada. O Buddy B utiliza a tecnologia da PLUGGY BRASIL INSTITUIÇÃO DE PAGAMENTO LTDA. (“Pluggy”) para realizar a conexão segura com as instituições financeiras.</p>
            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">11.2. Definição de Papéis (LGPD).</h3>
            <p className="mb-2">Para fins de cumprimento da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), as partes atuam nas seguintes qualidades:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>11.2.1. Pluggy (Controladora da Infraestrutura):</strong> Atua como a responsável pela segurança da conexão bancária, pela gestão dos consentimentos de Open Finance e pela coleta bruta dos dados junto às instituições financeiras de origem.</li>
              <li><strong>11.2.2. Savvy B (Controladora da Interface):</strong> Atua no tratamento dos dados já coletados (visualização, categorização e gráficos), limitando-se a apresentar as informações ao USUÁRIO para fins de gestão pessoal, sem ingerência sobre a infraestrutura de transmissão bancária.</li>
            </ul>
            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">11.3. Segregação de Credenciais.</h3>
            <p className="mb-4">A Savvy B declara expressamente que não coleta, não armazena e não tem acesso às credenciais bancárias (senhas, tokens, chaves de segurança) do USUÁRIO. Tais informações são inseridas diretamente no componente seguro (widget) provido pela Pluggy, garantindo que os dados sensíveis de autenticação jamais transitem pelos servidores da Savvy B.</p>
            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">11.4. Finalidade do Tratamento.</h3>
            <p className="mb-4">O compartilhamento de dados entre a Pluggy e a Savvy B tem como base legal a execução de contrato (prestação do serviço de gestão financeira) e o legítimo interesse. A Savvy B compromete-se a não vender, alugar ou comercializar os dados financeiros brutos do USUÁRIO a terceiros para fins publicitários não relacionados à operação do aplicativo.</p>
            <h3 className="text-lg font-heading font-bold text-text-title mt-6 mb-2">11.5. Revogação de Acesso.</h3>
            <p className="mb-4">O USUÁRIO poderá, a qualquer momento, revogar a autorização de compartilhamento de dados financeiros através do painel de controle do aplicativo ou diretamente na instituição financeira de origem, ciente de que tal revogação implicará na suspensão da atualização automática dos dados no Buddy B.</p>

            <h2 className="text-2xl font-heading font-bold text-text-title mt-10 mb-4">12. PRIVACIDADE DAS CRIANÇAS</h2>
            <p className="mb-4">Esses Serviços não se dirigem a menores de 13 anos, portanto, não coletamos intencionalmente informações de identificação pessoal de crianças menores de 13 anos.</p>
            <p className="mb-4">Caso haja algum cadastro de uma criança menor de 13 anos, a partir do momento em que a Buddy B tomar conhecimento, estas informações pessoais serão imediatamente excluídas de nossos servidores.</p>
            <p className="mb-4">Se você é pai ou responsável e está ciente de que seu filho nos forneceu informações pessoais, entre em contato conosco para que possamos tomar as medidas necessárias.</p>

            <h2 className="text-2xl font-heading font-bold text-text-title mt-10 mb-4">13. EXCLUSÃO AUTOMÁTICA DOS DADOS</h2>
            <p className="mb-4">Fica a critério da SAVVY B Soluções & Tecnologia LTDA, a exclusão de todas as contas sem assinaturas ativas do nosso banco de dados, que estiverem sem qualquer atividade por três meses. Todos os dados da conta serão excluídos e não poderão ser recuperados.</p>

            <h2 className="text-2xl font-heading font-bold text-text-title mt-10 mb-4">14. ALTERAÇÕES NA POLÍTICA DE PRIVACIDADE</h2>
            <p className="mb-4">Esta Política de Privacidade pode ser alterada a qualquer momento, sem aviso prévio.</p>
            <p className="mb-4">Quaisquer alterações serão comunicadas aos usuários por meio do aplicativo ou por e-mail.</p>
            <p className="mb-4">Assim, você é aconselhado a revisar esta página periodicamente para quaisquer alterações.</p>
            <p className="mb-4">Os elementos e ferramentas do Site/Web e dos Mobiles (iOS e Android) são de nossa titularidade ou são licenciados por nós, nos termos da legislação vigente. A utilização de qualquer elemento ou ferramenta do Site ou dos Mobiles (iOS e Android) apenas poderá ser feita com nossa concordância por escrito.</p>

            <h2 className="text-2xl font-heading font-bold text-text-title mt-10 mb-4">15. DISPOSIÇÕES FINAIS</h2>
            <p className="mb-4">Esta Política de privacidade é regida pelas leis brasileiras. Eventuais controvérsias existentes em relação a ele ou ao uso do Site serão solucionadas entre o cliente e a SAVVY B Soluções & Tecnologia LTDA no Foro da Comarca de Brumado, Bahia, mesmo que haja outro mais privilegiado.</p>
            <p className="mb-4">Podemos não exigir do usuário o cumprimento de alguma cláusula, o que não representará uma renúncia de direito ou cláusula. Caso algum item desta Política de privacidade venha a ser declarado nula ou não aplicável, os outros termos continuarão se aplicando e permanecerão em vigor e efeito.</p>

            <h2 className="text-2xl font-heading font-bold text-text-title mt-10 mb-4">16. CONTATO</h2>
            <p className="mb-4">Se você tiver alguma dúvida ou sugestão sobre nossa Política de Privacidade, não hesite em entrar em contato conosco em nosso E-mail: comercial@savvyb.com.br</p>

          </div>
        </main>
        
        {/* Footer Reutilizado */}
        <FooterCapture />
      </div>
    </>
  );
};

export default PoliticaPrivacidadePage;