
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolBlogCard from '@/components/ToolBlogCard';

const CriacaoMapasMentais = () => {
  const tools = [
    {
      title: "Mapify",
      description: "Anything to Mindmap by AI",
      detailedDescription: "Transforme qualquer conteúdo em mapas mentais usando inteligência artificial. Uma ferramenta inovadora que converte textos, documentos e ideias em visualizações organizadas automaticamente.",
      icon: "🧠",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=600&fit=crop&auto=format",
      link: "https://mapify.so/pt/app/new"
    },
    {
      title: "MindMeister",
      description: "Brainstorming e mapas mentais online",
      detailedDescription: "Plataforma colaborativa online para criação de mapas mentais profissionais. Oferece recursos avançados de brainstorming, colaboração em tempo real e integração com outras ferramentas de produtividade.",
      icon: "💭",
      image: "https://images.unsplash.com/photo-1606134716464-3f4c15e6e1d0?w=400&h=600&fit=crop&auto=format",
      link: "https://www.mindmeister.com/pt"
    },
    {
      title: "Xmind",
      description: "Full-featured mind mapping and brainstorming tool",
      detailedDescription: "Ferramenta completa para criação de mapas mentais e brainstorming. Oferece templates variados, recursos avançados de estruturação e possibilidade de exportação em múltiplos formatos.",
      icon: "🗺️",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=600&fit=crop&auto=format",
      link: "https://xmind.app/"
    },
    {
      title: "Lucidchart",
      description: "Diagramação e mapas mentais profissionais",
      detailedDescription: "Plataforma robusta para criação de diagramas, fluxogramas e mapas mentais. Ideal para uso corporativo com recursos avançados de colaboração e integração com outras ferramentas de negócio.",
      icon: "📊",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=600&fit=crop&auto=format",
      link: "https://lucid.app/"
    },
    {
      title: "Excalidraw",
      description: "Collaborative whiteboarding made easy",
      detailedDescription: "Quadro branco digital colaborativo perfeito para esboços, diagramas e mapas mentais simples. Interface minimalista e focada na colaboração em tempo real.",
      icon: "✏️",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=600&fit=crop&auto=format",
      link: "https://excalidraw.com/"
    },
    {
      title: "Canva",
      description: "Mapas mentais com design profissional",
      detailedDescription: "Crie mapas mentais, mapas conceituais e infográficos com templates prontos e design profissional. Ideal para apresentações visuais impactantes e materiais educativos.",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=600&fit=crop&auto=format",
      link: "https://www.canva.com/pt_br/graficos/mapa-mental"
    },
    {
      title: "CmapTools",
      description: "Software para mapas conceituais acadêmicos",
      detailedDescription: "Software especializado em mapas conceituais, muito utilizado em ambientes acadêmicos e educacionais. Oferece recursos avançados para estruturação de conhecimento.",
      icon: "🎓",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&auto=format",
      link: "https://cmap.ihmc.us/cmaptools"
    },
    {
      title: "Coggle",
      description: "Mapas mentais e fluxogramas colaborativos",
      detailedDescription: "Ferramenta online simples e intuitiva para criar e compartilhar mapas mentais e fluxogramas de forma colaborativa. Interface limpa e fácil de usar.",
      icon: "🔗",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=600&fit=crop&auto=format",
      link: "https://coggle.it"
    },
    {
      title: "EdrawMind",
      description: "Mapas mentais com IA e colaboração",
      detailedDescription: "Plataforma avançada para mapas mentais, brainstorming e colaboração em tempo real, com recursos de inteligência artificial para otimizar a criação de conteúdo.",
      icon: "⚡",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=600&fit=crop&auto=format",
      link: "https://www.edrawsoft.com/pt/edrawmind"
    },
    {
      title: "Freeplane",
      description: "Software livre para mapas mentais",
      detailedDescription: "Software livre e de código aberto para criação de mapas mentais e outlines. Disponível para Windows, Mac e Linux, ideal para uso offline e personalização avançada.",
      icon: "🆓",
      image: "https://images.unsplash.com/photo-1526378800651-c32d76938816?w=400&h=600&fit=crop&auto=format",
      link: "https://www.freeplane.org"
    },
    {
      title: "GitMind",
      description: "IA para mapas mentais e fluxogramas",
      detailedDescription: "Ferramenta online com recursos de IA para criar mapas mentais, fluxogramas e diagramas. Oferece colaboração em tempo real e templates inteligentes.",
      icon: "🤖",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=600&fit=crop&auto=format",
      link: "https://gitmind.com/pt"
    },
    {
      title: "Miro",
      description: "Quadro branco digital colaborativo",
      detailedDescription: "Plataforma de quadro branco digital colaborativo, muito usada para brainstorming, mapas mentais e fluxogramas em equipes. Ideal para workshops e sessões criativas.",
      icon: "🎯",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=400&h=600&fit=crop&auto=format",
      link: "https://miro.com"
    },
    {
      title: "GoConqr",
      description: "Mapas mentais educacionais",
      detailedDescription: "Plataforma focada em educação que permite criar mapas mentais, quizzes e outros materiais didáticos. Ideal para estudantes e educadores.",
      icon: "📚",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&auto=format",
      link: "https://www.goconqr.com"
    },
    {
      title: "MindManager",
      description: "Mapas mentais corporativos",
      detailedDescription: "Ferramenta robusta para mapas mentais e organização de projetos, voltada para ambientes corporativos. Oferece integração avançada com ferramentas de negócio.",
      icon: "💼",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=600&fit=crop&auto=format",
      link: "https://www.mindjet.com/mindmanager"
    },
    {
      title: "FreeMind",
      description: "Software livre simples e objetivo",
      detailedDescription: "Software livre, simples e objetivo para criação de mapas mentais offline. Interface minimalista e foco na funcionalidade essencial.",
      icon: "🧘",
      image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=400&h=600&fit=crop&auto=format",
      link: "http://freemind.sourceforge.net"
    },
    {
      title: "ClickUp",
      description: "Mapas mentais integrados ao projeto",
      detailedDescription: "Além de gerenciamento de projetos, oferece recursos para criação de mapas mentais integrados ao fluxo de trabalho. Ideal para equipes que buscam centralização.",
      icon: "⚙️",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=600&fit=crop&auto=format",
      link: "https://clickup.com/pt-BR"
    },
    {
      title: "Ayoa",
      description: "Mapas mentais com IA e quadros brancos",
      detailedDescription: "Combina mapas mentais, quadros brancos e recursos de IA para brainstorming e organização visual. Interface moderna e recursos colaborativos avançados.",
      icon: "🌟",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=600&fit=crop&auto=format",
      link: "https://www.ayoa.com"
    },
    {
      title: "MapaMental.app",
      description: "Plataforma brasileira com IA",
      detailedDescription: "Plataforma brasileira com integração de IA, resumos automáticos e cronograma de revisões espaçadas. Focada no aprendizado e memorização eficiente.",
      icon: "🇧🇷",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=600&fit=crop&auto=format",
      link: "https://www.mapamental.app"
    },
    {
      title: "Monica AI Mind Map",
      description: "Assistente virtual para mapas mentais",
      detailedDescription: "Assistente virtual com geração automática de mapas mentais a partir de prompts. Integra inteligência artificial para criação rápida e eficiente de estruturas visuais.",
      icon: "🤖",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop&auto=format",
      link: "https://monica.im"
    },
    {
      title: "MyMap.ai",
      description: "Mapas mentais por IA personalizáveis",
      detailedDescription: "Gera mapas mentais organizados a partir de prompts, com design personalizável e colaboração em tempo real. Foco na automação inteligente da criação de conteúdo.",
      icon: "🎛️",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=600&fit=crop&auto=format",
      link: "https://mymap.ai"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Criação de Mapas Mentais
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Ferramentas completas para criar mapas mentais, desde soluções com IA até software tradicional.
            Organize suas ideias, faça brainstorming e estruture conhecimento de forma visual e eficiente.
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
                category="Criação de Mapas Mentais"
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CriacaoMapasMentais;
