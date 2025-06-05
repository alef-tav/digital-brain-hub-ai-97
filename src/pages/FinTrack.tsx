
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolBlogCard from '@/components/ToolBlogCard';
import { fintrackTools } from '@/data/categories/fintrack';

const FinTrack = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
              FinTrack - Dashboard Financeira
            </h1>
            <span className="bg-red-600 text-white text-sm md:text-base px-4 py-2 rounded-full font-bold animate-pulse">
              BÔNUS GRÁTIS
            </span>
          </div>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Dashboard financeira completa para controle de receitas, despesas e investimentos. 
            Organize suas finanças de forma profissional com nossa ferramenta exclusiva!
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <main className="px-4 md:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fintrackTools.map((tool, index) => (
              <ToolBlogCard
                key={index}
                title={tool.title}
                description={tool.description}
                detailedDescription={tool.detailedDescription || tool.description}
                icon={tool.icon}
                image={tool.image || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop&auto=format"}
                link={tool.link || "#"}
                category="FinTrack - Dashboard Financeira"
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

export default FinTrack;
