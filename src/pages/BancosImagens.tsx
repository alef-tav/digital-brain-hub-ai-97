
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolBlogCard from '@/components/ToolBlogCard';

const BancosImagens = () => {
  const tools = [
    {
      title: "Leonardo AI",
      description: "IA de geração de imagens avançada",
      detailedDescription: "Leonardo AI oferece ferramentas de IA para geração de imagens com alta qualidade, permitindo criar arte digital, ilustrações e designs únicos através de prompts de texto.",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop",
      link: "https://app.leonardo.ai/",
      category: "Bancos de Imagens",
      isNew: true
    },
    {
      title: "Lexica",
      description: "Plataforma de geração de imagens por IA",
      detailedDescription: "Lexica é uma plataforma especializada em geração de imagens através de IA, oferecendo uma interface intuitiva para criar arte digital a partir de descrições de texto.",
      icon: "🖼️",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
      link: "https://lexica.art/",
      category: "Bancos de Imagens",
      isNew: true
    },
    {
      title: "Ideogram.ai",
      description: "Geração de imagens para todos",
      detailedDescription: "Ideogram.ai é uma ferramenta de geração de imagens por IA acessível a todos, permitindo criar designs únicos e personalizados com facilidade e precisão.",
      icon: "💡",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      link: "https://ideogram.ai/t/explore",
      category: "Bancos de Imagens"
    },
    {
      title: "Renderforest",
      description: "Todas suas ferramentas de design em um lugar",
      detailedDescription: "Renderforest oferece uma suíte completa de ferramentas de design, incluindo criação de vídeos, logos, mockups e websites, tudo em uma plataforma integrada.",
      icon: "🛠️",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=300&fit=crop",
      link: "https://www.renderforest.com/",
      category: "Bancos de Imagens"
    },
    {
      title: "Banco de Imagens Grátis (123RF)",
      description: "Download de imagens gratuitas",
      detailedDescription: "123RF oferece uma vasta coleção de fotos e imagens gratuitas de alta qualidade para download, permitindo usar recursos visuais profissionais sem custos.",
      icon: "📷",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      link: "https://br.123rf.com/imagens-gratuitas/",
      category: "Bancos de Imagens"
    },
    {
      title: "Penpot Design Tool",
      description: "Ferramenta de design para colaboração",
      detailedDescription: "Penpot é uma plataforma de design open-source que facilita a colaboração entre designers e desenvolvedores, oferecendo ferramentas modernas de prototipagem.",
      icon: "✏️",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop",
      link: "https://penpot.app/",
      category: "Bancos de Imagens",
      isNew: true
    },
    {
      title: "FLUX LoRA",
      description: "Treinamento FLUX LoRA para retratos",
      detailedDescription: "Treinamento FLUX LoRA otimizado especificamente para geração de retratos, com realces brilhantes, excelente acompanhamento de prompts e resultados altamente detalhados.",
      icon: "🎯",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      link: "https://fal.ai/models/fal-ai/flux-lora-portrait-trainer/playground",
      category: "Bancos de Imagens",
      isNew: true
    },
    {
      title: "Microsoft Designer",
      description: "Designs impressionantes rapidamente",
      detailedDescription: "Microsoft Designer oferece ferramentas de IA para criar designs profissionais rapidamente, integrando-se perfeitamente com o ecossistema Microsoft.",
      icon: "🏢",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
      link: "https://designer.microsoft.com/",
      category: "Bancos de Imagens"
    },
    {
      title: "Creative Automation",
      description: "Plataforma de automação criativa",
      detailedDescription: "Plataforma que automatiza processos criativos, permitindo criar campanhas publicitárias e materiais de marketing de forma eficiente e escalável.",
      icon: "⚡",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      link: "https://app.creatopy.com/team/1450550/dashboard",
      category: "Bancos de Imagens"
    },
    {
      title: "Infinite Recraft",
      description: "Artboard infinito de IA",
      detailedDescription: "Recraft oferece uma tela infinita para criação artística com IA, permitindo gerar e editar imagens vetoriais com precisão e criatividade ilimitada.",
      icon: "♾️",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=300&fit=crop",
      link: "https://www.recraft.ai/",
      category: "Bancos de Imagens",
      isNew: true
    },
    {
      title: "Adcreative.ai",
      description: "IA para todas as necessidades de publicidade",
      detailedDescription: "Adcreative.ai é sua central de IA para criar materiais publicitários eficazes, otimizando campanhas e gerando conteúdo visual impactante automaticamente.",
      icon: "📢",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      link: "https://pt.adcreative.ai/?_gl=1*hmpliz*_up*MQ..&gclid=Cj0KCQjw1Yy5BhD-ARIsAI0RbXY7M6Nw4oM1CPF_HND-eftkS3InvtSkGVQrV_BW4RCudUmq3WBQTssaAgBSEALw_wcB",
      category: "Bancos de Imagens"
    },
    {
      title: "MoeWalls",
      description: "Wallpapers animados gratuitos",
      detailedDescription: "MoeWalls oferece uma coleção de wallpapers animados e dinâmicos gratuitos, permitindo personalizar seu desktop com animações de alta qualidade.",
      icon: "🌟",
      image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=300&fit=crop",
      link: "https://moewalls.com/page/22/#google_vignette",
      category: "Bancos de Imagens"
    },
    {
      title: "Glif",
      description: "Mini-apps de IA e chatbots",
      detailedDescription: "Glif permite construir mini-aplicativos de IA e chatbots usando LLMs, geradores de imagens, ComfyUI e outras ferramentas avançadas de inteligência artificial.",
      icon: "🤖",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      link: "https://glif.app/glifs",
      category: "Bancos de Imagens",
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
              Bancos de Imagens
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Descubra as melhores ferramentas de IA para geração e edição de imagens. 
              De geradores de arte por IA a bancos de imagens gratuitos, encontre recursos visuais de alta qualidade.
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

export default BancosImagens;
