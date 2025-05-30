
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolBlogCard from '@/components/ToolBlogCard';
import { useFavorites } from '@/contexts/FavoritesContext';

const Favoritos = () => {
  const { favorites } = useFavorites();

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Favoritos
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Suas ferramentas favoritas em um só lugar. 
            Acesse rapidamente as soluções que você mais utiliza.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <main className="px-4 md:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          {favorites.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-white mb-4">
                Nenhuma ferramenta favoritada ainda
              </h3>
              <p className="text-gray-400 text-lg">
                Navegue pelas categorias e clique na estrela para adicionar suas ferramentas favoritas!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((tool, index) => (
                <ToolBlogCard
                  key={index}
                  title={tool.title}
                  description={tool.description}
                  detailedDescription={tool.detailedDescription}
                  icon={tool.icon}
                  image={tool.image}
                  link={tool.link}
                  category={tool.category}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Favoritos;
