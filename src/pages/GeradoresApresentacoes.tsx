
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolBlogCard from '@/components/ToolBlogCard';

const GeradoresApresentacoes = () => {
  const tools = [
    {
      title: "Napkin AI",
      description: "Cria apresentações inteligentes por IA",
      detailedDescription: "Napkin AI é uma ferramenta inovadora que transforma texto em apresentações visuais profissionais usando inteligência artificial. Crie slides impactantes em minutos com design automático e elementos visuais inteligentes.",
      icon: "📊",
      image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=400&h=300&fit=crop",
      link: "https://app.napkin.ai/",
      category: "Geradores de Apresentações",
      isNew: true
    },
    {
      title: "Gamma",
      description: "Cria apresentações, sites e documentos instantaneamente com IA",
      detailedDescription: "Gamma é uma plataforma revolucionária que permite criar apresentações, websites e documentos profissionais instantaneamente usando IA. Simplesmente descreva o que você quer e a IA criará conteúdo visual impressionante.",
      icon: "🚀",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      link: "https://gamma.app/",
      category: "Geradores de Apresentações",
      isNew: true
    },
    {
      title: "Mapify",
      description: "Transforma qualquer conteúdo em mapas mentais e apresentações",
      detailedDescription: "Mapify utiliza IA para converter texto, documentos e ideias em mapas mentais visuais e apresentações organizadas. Perfeito para estruturar informações complexas de forma clara e visual.",
      icon: "🗺️",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      link: "https://mapify.so/pt/app/new",
      category: "Geradores de Apresentações"
    },
    {
      title: "Wondershare EdrawMax",
      description: "Diagramação de IA facilitada para apresentações profissionais",
      detailedDescription: "EdrawMax oferece recursos avançados de IA para criar diagramas, fluxogramas e apresentações profissionais. Com templates inteligentes e assistência por IA, facilita a criação de conteúdo visual complexo.",
      icon: "📈",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      link: "https://www.edrawsoft.com/pt/ad/edraw-max-brand.html",
      category: "Geradores de Apresentações"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Geradores de Apresentações
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Ferramentas avançadas de IA para criar apresentações profissionais e impactantes em minutos. 
              Transforme suas ideias em slides visuais impressionantes automaticamente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <ToolBlogCard
                key={index}
                title={tool.title}
                description={tool.description}
                detailedDescription={tool.detailedDescription}
                icon={tool.icon}
                image={tool.image}
                link={tool.link}
                category={tool.category}
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

export default GeradoresApresentacoes;
