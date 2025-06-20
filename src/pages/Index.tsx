
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryCard from '@/components/CategoryCard';
import { categoriesData } from '@/data/categoriesData';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6">
            Cérebro Digital
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-400 max-w-6xl mx-auto leading-relaxed mb-12">
            Sua central definitiva de ferramentas de Inteligência Artificial e automações. 
            Explore uma vasta biblioteca de soluções inovadoras para transformar seu trabalho.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <main className="px-4 md:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 lg:mb-12 xl:mb-16 text-center">
            Todas as Categorias
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 md:gap-8 lg:gap-10 xl:gap-12">
            {categoriesData.map((category) => (
              <CategoryCard
                key={category.id}
                title={category.title}
                description={category.description}
                icon={category.icon}
                image={category.image}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
