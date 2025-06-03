
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolBlogCard from '@/components/ToolBlogCard';
import { criacaoSaasIATools } from '@/data/categories/saas-ia';

const CriacaoSaasIA = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Criação de SaaS por IA
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Ferramentas revolucionárias para desenvolver aplicações SaaS completas usando inteligência artificial. 
              Crie produtos digitais complexos de forma rápida e eficiente, desde protótipos até soluções empresariais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {criacaoSaasIATools.map((tool, index) => (
              <ToolBlogCard
                key={index}
                title={tool.title}
                description={tool.description}
                detailedDescription={tool.detailedDescription!}
                icon={tool.icon}
                image={tool.image!}
                link={tool.link!}
                category={tool.category}
                isNew={tool.isNew}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CriacaoSaasIA;
