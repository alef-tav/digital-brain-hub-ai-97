
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolBlogCard from '@/components/ToolBlogCard';

const GeradoresLogomarcas = () => {
  const tools = [
    {
      title: "Infinite AI Artboard - Recraft",
      description: "Plataforma avançada de design com IA para criação de logos",
      detailedDescription: "Recraft oferece ferramentas de IA de última geração para criar designs profissionais de logos com infinitas possibilidades criativas e controle total sobre o resultado final.",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      link: "https://www.recraft.ai/",
      category: "Geradores de Logomarcas",
      isNew: true
    },
    {
      title: "Logo Galleria",
      description: "Criador de logotipo de IA gratuito online",
      detailedDescription: "Logo Galleria é uma ferramenta gratuita que utiliza inteligência artificial para criar logotipos profissionais em minutos, com uma vasta biblioteca de estilos e personalizações.",
      icon: "🖼️",
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=300&fit=crop",
      link: "https://logogalleria.com/pt",
      category: "Geradores de Logomarcas"
    },
    {
      title: "Logo Diffusions",
      description: "AI Logo Maker com tecnologia de difusão",
      detailedDescription: "Logo Diffusions utiliza tecnologia de difusão de IA para gerar logos únicos e criativos, oferecendo controle granular sobre estilo, cores e elementos visuais.",
      icon: "🌊",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=300&fit=crop",
      link: "https://logodiffusion.com/",
      category: "Geradores de Logomarcas"
    },
    {
      title: "Turbologo",
      description: "Gerador gratuito de design de logo",
      detailedDescription: "Turbologo oferece uma plataforma intuitiva para criar logos profissionais em minutos, com milhares de templates e personalizações avançadas para qualquer tipo de negócio.",
      icon: "⚡",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      link: "https://turbologo.com/",
      category: "Geradores de Logomarcas"
    },
    {
      title: "Renderforest",
      description: "Todas suas ferramentas de design em um lugar",
      detailedDescription: "Renderforest é uma suite completa de ferramentas de design que inclui criação de logos, vídeos, sites e gráficos, tudo em uma plataforma integrada.",
      icon: "🌲",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=300&fit=crop",
      link: "https://www.renderforest.com/",
      category: "Geradores de Logomarcas"
    },
    {
      title: "Looka",
      description: "IA avançada para criação de logos e identidade visual",
      detailedDescription: "Looka combina inteligência artificial com design profissional para criar logos memoráveis e identidade visual completa, incluindo cartões de visita e materiais de marketing.",
      icon: "🔍",
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=300&fit=crop",
      link: "https://looka.com/",
      category: "Geradores de Logomarcas"
    },
    {
      title: "Logomakerr.ai",
      description: "Criador de logo online gratuito",
      detailedDescription: "Logomakerr.ai oferece uma ferramenta simples e eficaz para criar logos profissionais gratuitamente, com opções de personalização e download em alta resolução.",
      icon: "🤖",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      link: "https://logomakerr.ai/",
      category: "Geradores de Logomarcas"
    },
    {
      title: "Logolivery AI",
      description: "Gerador de logo gratuito com IA em formato SVG",
      detailedDescription: "Logolivery AI é especializado em gerar logos vetoriais em formato SVG usando inteligência artificial, garantindo qualidade profissional e escalabilidade perfeita.",
      icon: "📦",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=300&fit=crop",
      link: "https://logolivery.ai/",
      category: "Geradores de Logomarcas"
    },
    {
      title: "Logo Theme AI",
      description: "Transforme e personalize seu logo com IA",
      detailedDescription: "Logo Theme AI permite transformar e personalizar logos existentes usando inteligência artificial, oferecendo variações criativas e adaptações para diferentes contextos.",
      icon: "🎭",
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=300&fit=crop",
      link: "https://logo-theme-ai.com/pt",
      category: "Geradores de Logomarcas"
    },
    {
      title: "DALL-E 2",
      description: "Geração de logos criativos com IA da OpenAI",
      detailedDescription: "DALL-E 2 da OpenAI permite criar logos únicos e artísticos através de comandos de texto, oferecendo possibilidades criativas ilimitadas para identidade visual.",
      icon: "🤖",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      link: "https://openai.com/dall-e-2",
      category: "Geradores de Logomarcas",
      isNew: true
    },
    {
      title: "Canva Logo Maker",
      description: "Criador de logos integrado ao Canva",
      detailedDescription: "O Logo Maker do Canva oferece milhares de templates profissionais e ferramentas de design intuitivas para criar logos impressionantes sem conhecimento técnico.",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      link: "https://www.canva.com/create/logos/",
      category: "Geradores de Logomarcas"
    },
    {
      title: "Wix Logo Maker",
      description: "Gerador de logos oficial da Wix",
      detailedDescription: "Wix Logo Maker utiliza IA para criar logos personalizados baseados nas preferências do usuário, com integração completa para sites e materiais de marketing.",
      icon: "🌐",
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=300&fit=crop",
      link: "https://www.wix.com/logo/maker",
      category: "Geradores de Logomarcas"
    },
    {
      title: "Tailor Brands",
      description: "IA para identidade visual completa",
      detailedDescription: "Tailor Brands cria não apenas logos, mas uma identidade visual completa para sua marca, incluindo cartões de visita, papelaria e guidelines de marca.",
      icon: "✂️",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=300&fit=crop",
      link: "https://www.tailorbrands.com/",
      category: "Geradores de Logomarcas"
    },
    {
      title: "Designs.ai Logo Maker",
      description: "Suite de design com criador de logos IA",
      detailedDescription: "Designs.ai oferece um ecossistema completo de ferramentas de design, incluindo um poderoso criador de logos baseado em IA com templates profissionais.",
      icon: "🎯",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      link: "https://designs.ai/logomaker",
      category: "Geradores de Logomarcas"
    },
    {
      title: "LogoAI",
      description: "Inteligência artificial especializada em logos",
      detailedDescription: "LogoAI é uma plataforma dedicada exclusivamente à criação de logos usando IA avançada, oferecendo designs únicos e personalizações detalhadas.",
      icon: "🤖",
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=300&fit=crop",
      link: "https://www.logoai.com/",
      category: "Geradores de Logomarcas"
    },
    {
      title: "Logomaster.ai",
      description: "Mestre em criação de logos com IA",
      detailedDescription: "Logomaster.ai combina algoritmos avançados de IA com princípios de design profissional para criar logos que realmente representam a essência da sua marca.",
      icon: "👑",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=300&fit=crop",
      link: "https://logomaster.ai/",
      category: "Geradores de Logomarcas"
    },
    {
      title: "Brandmark.io",
      description: "Criação instantânea de marca com IA",
      detailedDescription: "Brandmark.io gera instantaneamente logos, cartões de visita e identidade visual completa usando IA, com foco em marcas modernas e profissionais.",
      icon: "⚡",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      link: "https://brandmark.io/",
      category: "Geradores de Logomarcas"
    },
    {
      title: "SmashingLogo",
      description: "Criador de logos profissionais online",
      detailedDescription: "SmashingLogo oferece uma plataforma robusta para criar logos profissionais com centenas de templates e ferramentas de personalização avançadas.",
      icon: "💥",
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=300&fit=crop",
      link: "https://smashinglogo.com/",
      category: "Geradores de Logomarcas"
    },
    {
      title: "Fiverr Logo Maker",
      description: "Criador de logos do marketplace Fiverr",
      detailedDescription: "Fiverr Logo Maker permite criar logos profissionais usando a tecnologia da plataforma Fiverr, com acesso opcional a designers profissionais para refinamentos.",
      icon: "🎪",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=300&fit=crop",
      link: "https://www.fiverr.com/logo-maker",
      category: "Geradores de Logomarcas"
    },
    {
      title: "LogoMakr",
      description: "Ferramenta simples para criação de logos",
      detailedDescription: "LogoMakr oferece uma interface simples e intuitiva para criar logos rapidamente, com uma biblioteca extensa de ícones e elementos gráficos.",
      icon: "🔧",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      link: "https://logomakr.com/",
      category: "Geradores de Logomarcas"
    },
    {
      title: "Oberlo Logo Maker",
      description: "Criador de logos para e-commerce",
      detailedDescription: "Oberlo Logo Maker é especializado em criar logos para negócios de e-commerce, oferecendo designs otimizados para lojas online e marketplaces.",
      icon: "🛍️",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      link: "https://www.oberlo.com/tools/logo-maker",
      category: "Geradores de Logomarcas"
    },
    {
      title: "Designhill Logo Maker",
      description: "Plataforma completa para design de logos",
      detailedDescription: "Designhill Logo Maker combina tecnologia de IA com a experiência de designers profissionais, oferecendo logos de alta qualidade para qualquer tipo de negócio.",
      icon: "🏔️",
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=300&fit=crop",
      link: "https://www.designhill.com/tools/logo-maker",
      category: "Geradores de Logomarcas"
    },
    {
      title: "Adobe Express Logo Maker",
      description: "Criador de logos da Adobe",
      detailedDescription: "Adobe Express Logo Maker traz o poder das ferramentas Adobe para a criação de logos, oferecendo qualidade profissional com interface simplificada e intuitiva.",
      icon: "🅰️",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      link: "https://www.adobe.com/express/create/logo",
      category: "Geradores de Logomarcas"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Geradores de Logomarcas
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Descubra as melhores ferramentas de IA para criar logotipos profissionais e identidade visual. 
              Desde geradores automáticos até plataformas completas de branding.
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

export default GeradoresLogomarcas;
