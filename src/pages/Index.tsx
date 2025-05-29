
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryCard from '@/components/CategoryCard';
import { categoriesData } from '@/data/categoriesData';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-4xl md:text-6xl">🧠</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              Cérebro Digital
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-400 max-w-4xl">
            Sua central definitiva de ferramentas de Inteligência Artificial e automações. 
            Explore uma vasta biblioteca de soluções inovadoras para transformar seu trabalho.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <main className="px-4 md:px-12 pb-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">Todas as Categorias</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {categoriesData.map((category) => (
              <CategoryCard
                key={category.id}
                id={category.id}
                title={category.title}
                description={category.description}
                icon={category.icon}
                image={category.image}
                isNew={category.id <= 3} // Primeiras 3 categorias marcadas como "NOVO"
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
