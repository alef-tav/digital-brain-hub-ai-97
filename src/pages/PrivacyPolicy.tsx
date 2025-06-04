
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Política de Privacidade
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
              <h2 className="text-2xl font-bold text-white mb-4">1. Informações que Coletamos</h2>
              <p className="text-gray-300 leading-relaxed">
                O Cérebro Digital coleta informações limitadas para melhorar sua experiência. 
                Coletamos dados de navegação, preferências de ferramentas favoritas e informações 
                de uso para personalizar seu acesso às ferramentas de IA.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Como Usamos suas Informações</h2>
              <p className="text-gray-300 leading-relaxed">
                Utilizamos as informações coletadas para:
              </p>
              <ul className="text-gray-300 mt-3 ml-6 space-y-2">
                <li>• Personalizar sua experiência no site</li>
                <li>• Manter suas ferramentas favoritas</li>
                <li>• Melhorar nossos serviços e funcionalidades</li>
                <li>• Enviar atualizações sobre novas ferramentas (quando solicitado)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Compartilhamento de Dados</h2>
              <p className="text-gray-300 leading-relaxed">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros 
                para fins comerciais. Podemos compartilhar dados apenas quando legalmente 
                obrigatório ou para proteger nossos direitos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Cookies e Tecnologias Similares</h2>
              <p className="text-gray-300 leading-relaxed">
                Utilizamos cookies para melhorar sua experiência, lembrar suas preferências 
                e analisar o uso do site. Você pode gerenciar as configurações de cookies 
                através do seu navegador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Seus Direitos</h2>
              <p className="text-gray-300 leading-relaxed">
                Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. 
                Para exercer esses direitos, entre em contato conosco através dos canais 
                disponíveis no rodapé do site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Contato</h2>
              <p className="text-gray-300 leading-relaxed">
                Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato:
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

export default PrivacyPolicy;
