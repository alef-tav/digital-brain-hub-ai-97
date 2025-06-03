
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolBlogCard from '@/components/ToolBlogCard';

const ImagensProdutoIA = () => {
  const tools = [
    {
      title: "LightX Editor",
      description: "Editor de fotos gratuito com IA online",
      detailedDescription: "LightX é um editor de fotos online gratuito que utiliza inteligência artificial para editar e aprimorar imagens de forma rápida e profissional, oferecendo ferramentas avançadas para criação de conteúdo visual.",
      icon: "💡",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=300&fit=crop",
      link: "https://www.lightxeditor.com/ai-photo-editor",
      category: "Imagens de Produto por IA",
      isNew: true
    },
    {
      title: "Dream by WOMBO",
      description: "Gere arte com IA a partir de texto",
      detailedDescription: "Dream by WOMBO é uma ferramenta inovadora que transforma prompts de texto em arte visual impressionante usando inteligência artificial, permitindo criar imagens únicas e criativas de forma simples.",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop",
      link: "https://dream.ai/",
      category: "Imagens de Produto por IA"
    },
    {
      title: "Leonardo.AI",
      description: "Plataforma avançada de geração de imagens com IA",
      detailedDescription: "Leonardo.AI é uma plataforma poderosa que utiliza inteligência artificial para gerar imagens de alta qualidade, oferecendo controle preciso sobre estilo, composição e detalhes para criação de conteúdo visual profissional.",
      icon: "🎭",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      link: "https://app.leonardo.ai/",
      category: "Imagens de Produto por IA",
      isNew: true
    },
    {
      title: "Kartiv",
      description: "Conteúdo visual automatizado para eCommerce",
      detailedDescription: "Kartiv é uma plataforma especializada em criar designs automáticos usando suas fotos favoritas, ideal para eCommerce e agências de marketing que precisam de conteúdo visual consistente e profissional.",
      icon: "🛒",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      link: "https://www.kartiv.com/",
      category: "Imagens de Produto por IA"
    },
    {
      title: "Designify",
      description: "Transforme qualquer foto em algo incrível",
      detailedDescription: "Designify é uma ferramenta que transforma fotos comuns em designs impressionantes, removendo fundos automaticamente e aplicando efeitos profissionais para criar imagens de produto de alta qualidade.",
      icon: "✨",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop",
      link: "https://www.designify.com/",
      category: "Imagens de Produto por IA"
    },
    {
      title: "Flair.ai",
      description: "Ferramenta de IA para fotografia de produtos",
      detailedDescription: "Flair.ai permite arrastar e soltar para gerar fotos impressionantes de produtos em segundos, utilizando inteligência artificial para criar cenários e ambientações profissionais para seus produtos.",
      icon: "📸",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      link: "https://flair.ai/",
      category: "Imagens de Produto por IA",
      isNew: true
    },
    {
      title: "Pebblely",
      description: "Galeria de exemplos de imagens de produtos com IA",
      detailedDescription: "Pebblely oferece uma galeria com exemplos de imagens de produtos geradas por IA, com templates testados por empresas do mundo todo para encontrar sua próxima chance vencedora em fotografia de produtos.",
      icon: "🖼️",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      link: "https://pebblely.com/gallery/",
      category: "Imagens de Produto por IA"
    },
    {
      title: "ZMO.AI",
      description: "Transforme fotos normais em fotos de estúdio",
      detailedDescription: "ZMO.AI utiliza inteligência artificial para transformar fotos comuns em imagens de estúdio profissionais, criando arte ultra realista e fotografias de produtos de alta qualidade.",
      icon: "🏢",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      link: "https://www.zmo.ai/",
      category: "Imagens de Produto por IA"
    },
    {
      title: "Booth.AI",
      description: "Crie fotografias de produtos profissionais com IA",
      detailedDescription: "Booth.AI permite criar fotografias de produtos de qualidade profissional utilizando inteligência artificial, oferecendo cenários e ambientações diversas para destacar seus produtos de forma impressionante.",
      icon: "📷",
      image: "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?w=400&h=300&fit=crop",
      link: "https://www.booth.ai/",
      category: "Imagens de Produto por IA",
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
              Imagens de Produto por IA
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Revolucione sua fotografia de produtos com inteligência artificial. Explore ferramentas que transformam 
              fotos comuns em imagens profissionais de estúdio, criam cenários únicos e geram conteúdo visual 
              impressionante para seu eCommerce e marketing.
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

export default ImagensProdutoIA;
