
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolBlogCard from '@/components/ToolBlogCard';

const GeracaoImagensTextoIA = () => {
  const tools = [
    {
      title: "ChatMax",
      description: "Assistente de Chatbot AI para geração de imagens",
      detailedDescription: "ChatMax é um assistente de chatbot AI que oferece funcionalidades avançadas de geração de imagens através de inteligência artificial, permitindo criar conteúdo visual de alta qualidade através de comandos de texto.",
      icon: "🤖",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      link: "https://aichatmax.com/pt",
      category: "Geração de Imagens por Texto (Text-to-Image IA)",
      isNew: true
    },
    {
      title: "Google Labs ImageFX",
      description: "Ferramenta de geração de imagens do Google Labs",
      detailedDescription: "ImageFX é uma ferramenta experimental do Google Labs que utiliza inteligência artificial avançada para gerar imagens impressionantes a partir de descrições textuais, oferecendo resultados de alta qualidade.",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop",
      link: "https://labs.google/fx/tools/image-fx",
      category: "Geração de Imagens por Texto (Text-to-Image IA)"
    },
    {
      title: "Meshy",
      description: "Cria imagens em 3D com IA",
      detailedDescription: "Meshy é um gerador de IA 3D que permite criar modelos tridimensionais impressionantes usando inteligência artificial, transformando descrições textuais em objetos 3D detalhados e realistas.",
      icon: "🎭",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop",
      link: "https://www.meshy.ai/",
      category: "Geração de Imagens por Texto (Text-to-Image IA)",
      isNew: true
    },
    {
      title: "Tensor.art",
      description: "Gerador de imagens online gratuito",
      detailedDescription: "Tensor.art é um site gratuito de geração de imagens online e hospedagem de modelos que oferece ferramentas avançadas de IA para criar arte digital impressionante a partir de prompts de texto.",
      icon: "🖼️",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      link: "https://tensor.art/",
      category: "Geração de Imagens por Texto (Text-to-Image IA)"
    },
    {
      title: "PicLumen",
      description: "Gerador gratuito de imagens AI online",
      detailedDescription: "PicLumen é um gerador gratuito de imagens AI que permite criar imagens online de forma simples e eficiente, utilizando algoritmos avançados de inteligência artificial para produzir resultados impressionantes.",
      icon: "💡",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      link: "https://www.piclumen.com/",
      category: "Geração de Imagens por Texto (Text-to-Image IA)"
    },
    {
      title: "RenderNet",
      description: "Cria imagens AI com consistência de personagens",
      detailedDescription: "RenderNet é uma plataforma especializada em criar imagens AI com consistência de personagens, permitindo gerar múltiplas imagens mantendo as características visuais dos personagens de forma coerente.",
      icon: "👥",
      image: "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?w=400&h=300&fit=crop",
      link: "https://rendernet.ai/",
      category: "Geração de Imagens por Texto (Text-to-Image IA)",
      isNew: true
    },
    {
      title: "Freepik Pikaso",
      description: "Desenho AI gratuito do Freepik",
      detailedDescription: "Free Pikaso é uma ferramenta de desenho AI gratuita do Freepik que permite criar imagens através de textos de forma intuitiva e eficiente, oferecendo resultados de alta qualidade para projetos criativos.",
      icon: "✨",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      link: "https://www.freepik.com/ai/pikaso-ai-drawing",
      category: "Geração de Imagens por Texto (Text-to-Image IA)"
    },
    {
      title: "Lexica",
      description: "Plataforma de arte gerada por IA",
      detailedDescription: "Lexica é uma plataforma especializada em arte gerada por inteligência artificial, oferecendo uma vasta coleção de imagens criadas por IA e ferramentas para gerar novas obras de arte através de prompts textuais.",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=300&fit=crop",
      link: "https://lexica.art/",
      category: "Geração de Imagens por Texto (Text-to-Image IA)"
    },
    {
      title: "SeaArt.ai",
      description: "Gerador gratuito de arte AI",
      detailedDescription: "SeaArt.ai é um gerador gratuito de arte AI que permite criar imagens impressionantes através de descrições textuais, oferecendo uma interface amigável e resultados de alta qualidade para artistas e criadores.",
      icon: "🌊",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop",
      link: "https://www.seaart.ai/pt",
      category: "Geração de Imagens por Texto (Text-to-Image IA)",
      isNew: true
    },
    {
      title: "LensGo.ai",
      description: "Cria vídeos de transferência de estilo facilmente",
      detailedDescription: "LensGo.ai é uma plataforma que permite criar vídeos de transferência de estilo de forma fácil e intuitiva, utilizando inteligência artificial para transformar conteúdo visual com diferentes estilos artísticos.",
      icon: "🎬",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop",
      link: "https://lensgo.ai/",
      category: "Geração de Imagens por Texto (Text-to-Image IA)"
    },
    {
      title: "TinyWow",
      description: "Gerador de imagens AI da TinyWow",
      detailedDescription: "TinyWow oferece um gerador de imagens AI como parte de sua suíte de ferramentas online, permitindo criar imagens através de descrições textuais de forma rápida e eficiente.",
      icon: "🔧",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      link: "https://tinywow.com/image/ai-image-generator",
      category: "Geração de Imagens por Texto (Text-to-Image IA)"
    },
    {
      title: "CSM 3D Viewer",
      description: "Gera imagens em 3D",
      detailedDescription: "CSM 3D Viewer é uma ferramenta especializada em gerar e visualizar imagens em 3D, oferecendo capacidades avançadas para criar modelos tridimensionais e visualizações impressionantes.",
      icon: "🎯",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      link: "https://3d.csm.ai/",
      category: "Geração de Imagens por Texto (Text-to-Image IA)",
      isNew: true
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Geração de Imagens por Texto (Text-to-Image IA)
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Transforme suas ideias em imagens impressionantes com o poder da inteligência artificial. 
              Explore ferramentas avançadas que convertem descrições textuais em arte digital, modelos 3D 
              e criações visuais únicas, desde ilustrações simples até obras de arte complexas.
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

export default GeracaoImagensTextoIA;
