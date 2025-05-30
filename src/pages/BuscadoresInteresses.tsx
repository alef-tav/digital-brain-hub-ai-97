
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolBlogCard from '@/components/ToolBlogCard';

const BuscadoresInteresses = () => {
  const tools = [
    {
      title: "Social Searcher",
      description: "Buscador gratuito de mídias sociais",
      detailedDescription: "Mecanismo de busca gratuito para mídias sociais que permite monitorar menções, hashtags e conversas em tempo real nas principais redes sociais como Facebook, Twitter, Instagram e YouTube.",
      icon: "🔍",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=600&fit=crop&auto=format",
      link: "https://www.social-searcher.com/"
    },
    {
      title: "Buscador de Interesses Facebook",
      description: "Ferramenta para descobrir interesses no Facebook",
      detailedDescription: "Ferramenta especializada para descobrir e pesquisar interesses específicos do Facebook, ideal para criar campanhas publicitárias mais direcionadas e eficazes no Facebook Ads.",
      icon: "👥",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=600&fit=crop&auto=format",
      link: "https://materiais.semcodar.com.br/facebook_interests"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Buscadores de Interesses (Públicos)
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Ferramentas para descobrir e monitorar interesses públicos em redes sociais.
            Encontre tendências, mencões e audiências específicas.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <main className="px-4 md:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <ToolBlogCard
                key={index}
                title={tool.title}
                description={tool.description}
                detailedDescription={tool.detailedDescription}
                icon={tool.icon}
                image={tool.image}
                link={tool.link}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BuscadoresInteresses;
