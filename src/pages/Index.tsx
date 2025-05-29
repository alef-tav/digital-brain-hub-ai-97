
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Cérebro Digital
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Sua central definitiva de ferramentas de Inteligência Artificial e automações. 
            Explore uma vasta biblioteca de soluções inovadoras para transformar seu trabalho.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <main className="px-4 md:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center">
            Todas as Categorias
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {categoriesData.map((category) => (
              <CategoryCard
                key={category.id}
                id={category.id}
                title={category.title}
                description={category.description}
                icon={category.icon}
                image={category.image}
                isNew={category.id <= 3}
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
