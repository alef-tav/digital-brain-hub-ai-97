
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolBlogCard from '@/components/ToolBlogCard';

const GeradoresMapasMentais = () => {
  const tools = [
    {
      title: "Tome",
      description: "Gera Mapa mental por I.A",
      detailedDescription: "Plataforma de apresentações com IA que permite criar mapas mentais profissionais e polidos. Oferece templates inteligentes e geração automática de conteúdo visual para suas ideias.",
      icon: "🧠",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=600&fit=crop&auto=format",
      link: "https://tome.app/"
    },
    {
      title: "Visme",
      description: "Cria apresentações e mapas mentais",
      detailedDescription: "Ferramenta completa de design que permite criar apresentações, infográficos, mapas mentais e vídeos com recursos de inteligência artificial. Ideal para comunicação visual profissional.",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=600&fit=crop&auto=format",
      link: "https://www.visme.co/pt-br/"
    },
    {
      title: "Chatmind",
      description: "Cria mapa mentais por I.A",
      detailedDescription: "Gerador gratuito de mapas mentais online com IA, alimentado pelo Xmind. Permite criar mapas mentais estruturados e organizados usando comandos de texto simples com inteligência artificial.",
      icon: "💭",
      image: "https://images.unsplash.com/photo-1606134716464-3f4c15e6e1d0?w=400&h=600&fit=crop&auto=format",
      link: "https://chatmind.tech/pt"
    },
    {
      title: "GitMind",
      description: "AI Powered Mind Map, Flowchart, Whiteboard",
      detailedDescription: "Plataforma colaborativa alimentada por IA para criar mapas mentais, fluxogramas e whiteboards. Oferece recursos avançados de colaboração em tempo real e templates inteligentes.",
      icon: "⚡",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=600&fit=crop&auto=format",
      link: "https://gitmind.com/"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Geradores de Mapas Mentais por IA
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Ferramentas inteligentes para criar mapas mentais, apresentações e fluxogramas com o poder da inteligência artificial.
            Organize suas ideias de forma visual e profissional.
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
                category="Geradores de Mapas Mentais por IA"
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GeradoresMapasMentais;
