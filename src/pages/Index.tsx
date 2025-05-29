
import Header from '@/components/Header';
import CategorySection from '@/components/CategorySection';
import Footer from '@/components/Footer';
import { categoriesData } from '@/data/toolsData';

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

      {/* Categories */}
      <main>
        {categoriesData.map((category, index) => (
          <CategorySection
            key={index}
            title={category.title}
            tools={category.tools}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
