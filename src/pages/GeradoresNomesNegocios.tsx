
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategorySection from '@/components/CategorySection';
import { categoriesData } from '@/data/toolsData';

const GeradoresNomesNegocios = () => {
  const categoryData = categoriesData.find(category => 
    category.title === "Geradores de Nomes para Negócios"
  );

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        <div className="pt-24 text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Categoria não encontrada</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Geradores de Nomes para Negócios
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Descubra ferramentas poderosas para criar nomes únicos e memoráveis para seu negócio. 
            Desde geradores baseados em IA até plataformas especializadas em branding.
          </p>
        </div>
      </section>

      {/* Tools Section */}
      <main className="px-4 md:px-8 pb-12">
        <CategorySection 
          title="Geradores de Nomes para Negócios"
          tools={categoryData.tools}
        />
      </main>

      <Footer />
    </div>
  );
};

export default GeradoresNomesNegocios;
