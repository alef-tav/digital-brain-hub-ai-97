
import Header from '@/components/Header';
import CategorySection from '@/components/CategorySection';
import Footer from '@/components/Footer';
import { categoriesData } from '@/data/toolsData';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <span className="text-6xl">🧠</span>
            <h1 className="text-5xl font-bold text-white">
              Cérebro Digital
            </h1>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Sua central definitiva de ferramentas de Inteligência Artificial e automações. 
            Explore uma vasta biblioteca de soluções inovadoras para transformar seu trabalho.
          </p>
        </div>
      </section>

      {/* Categories */}
      <main className="px-6">
        <div className="container mx-auto">
          {categoriesData.map((category, index) => (
            <CategorySection
              key={index}
              title={category.title}
              tools={category.tools}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
