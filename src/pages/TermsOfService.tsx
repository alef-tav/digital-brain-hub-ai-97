
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Termos de Serviço
            </h1>
            <p className="text-lg text-gray-400">
              Última atualização: Janeiro de 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="px-4 md:px-8 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-lg p-8 space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Aceitação dos Termos</h2>
              <p className="text-gray-300 leading-relaxed">
                Ao acessar e usar o Cérebro Digital, você concorda em cumprir estes Termos de Serviço. 
                Se você não concordar com qualquer parte destes termos, não deve usar nosso serviço.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Descrição do Serviço</h2>
              <p className="text-gray-300 leading-relaxed">
                O Cérebro Digital é uma plataforma que agrega e organiza ferramentas de 
                Inteligência Artificial e automações. Fornecemos links e informações sobre 
                ferramentas de terceiros, mas não somos responsáveis pelo conteúdo ou 
                funcionamento dessas ferramentas externas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Uso Adequado</h2>
              <p className="text-gray-300 leading-relaxed">
                Você se compromete a usar nosso serviço apenas para fins legais e de acordo com estes termos. É proibido:
              </p>
              <ul className="text-gray-300 mt-3 ml-6 space-y-2">
                <li>• Usar o serviço para atividades ilegais ou não autorizadas</li>
                <li>• Tentar hackear, interferir ou comprometer a segurança do site</li>
                <li>• Reproduzir, duplicar ou copiar o conteúdo sem autorização</li>
                <li>• Usar bots ou ferramentas automatizadas sem permissão</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Propriedade Intelectual</h2>
              <p className="text-gray-300 leading-relaxed">
                Todo o conteúdo do Cérebro Digital, incluindo design, texto, gráficos e código, 
                é propriedade da BORGES MÍDIA NEGÓCIOS DIGITAIS LTDA e está protegido por 
                leis de direitos autorais e propriedade intelectual.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Limitação de Responsabilidade</h2>
              <p className="text-gray-300 leading-relaxed">
                O Cérebro Digital fornece informações "como estão" e não garante a precisão, 
                completude ou atualidade das informações. Não somos responsáveis por danos 
                decorrentes do uso de ferramentas de terceiros acessadas através de nosso site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Modificações</h2>
              <p className="text-gray-300 leading-relaxed">
                Reservamos o direito de modificar estes Termos de Serviço a qualquer momento. 
                As alterações entrarão em vigor imediatamente após a publicação no site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Contato</h2>
              <p className="text-gray-300 leading-relaxed">
                Para questões sobre estes Termos de Serviço, entre em contato:
              </p>
              <div className="text-gray-300 mt-3">
                <p>BORGES MÍDIA NEGÓCIOS DIGITAIS LTDA</p>
                <p>CNPJ: 44.838.666/0001-99</p>
                <p>Rua Antônio Callado, 23 - Jardim Santa Marina</p>
                <p>Jacareí - SP</p>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
