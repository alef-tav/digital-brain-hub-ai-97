
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategorySection from '@/components/CategorySection';
import { criacaoSaasIATools } from '@/data/categories/saas-ia';

const CriacaoSaasIA = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Criação de SaaS por IA
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Ferramentas revolucionárias para desenvolver aplicações SaaS completas usando inteligência artificial. 
              Crie produtos digitais complexos de forma rápida e eficiente.
            </p>
          </div>

          <CategorySection
            title="Ferramentas de Criação de SaaS por IA"
            tools={criacaoSaasIATools}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CriacaoSaasIA;
