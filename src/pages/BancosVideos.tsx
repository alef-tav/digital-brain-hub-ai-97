
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolBlogCard from '@/components/ToolBlogCard';

const BancosVideos = () => {
  const tools = [
    {
      title: "Pixabay Vídeos",
      description: "Biblioteca gratuita de vídeos de alta qualidade",
      detailedDescription: "Pixabay oferece uma vasta coleção de vídeos livres de direitos autorais em alta qualidade, perfeitos para projetos comerciais e pessoais sem custos adicionais.",
      icon: "🎬",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop",
      link: "https://pixabay.com/videos/",
      category: "Bancos de Vídeos"
    },
    {
      title: "Pexels Vídeos",
      description: "Vídeos gratuitos de alta resolução para todos os projetos",
      detailedDescription: "Pexels disponibiliza milhares de vídeos gratuitos em alta resolução, curados por uma comunidade de fotógrafos e videomakers talentosos ao redor do mundo.",
      icon: "📹",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop",
      link: "https://www.pexels.com/videos/",
      category: "Bancos de Vídeos"
    },
    {
      title: "Coverr",
      description: "Vídeos gratuitos para websites e projetos criativos",
      detailedDescription: "Coverr oferece vídeos de fundo lindos e gratuitos para download, ideais para websites, apresentações e projetos de design que precisam de elementos visuais impactantes.",
      icon: "🎥",
      image: "https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?w=400&h=300&fit=crop",
      link: "https://coverr.co/",
      category: "Bancos de Vídeos"
    },
    {
      title: "Videezy",
      description: "Banco de vídeos gratuitos e premium",
      detailedDescription: "Videezy combina vídeos gratuitos e premium de alta qualidade, oferecendo uma ampla variedade de conteúdo para atender diferentes necessidades de produção audiovisual.",
      icon: "🎞️",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop",
      link: "https://www.videezy.com/",
      category: "Bancos de Vídeos"
    },
    {
      title: "Mazwai",
      description: "Vídeos cinematográficos gratuitos",
      detailedDescription: "Mazwai especializa-se em vídeos cinematográficos de alta qualidade, oferecendo conteúdo artístico e profissional para projetos que exigem um padrão visual elevado.",
      icon: "🎭",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      link: "https://mazwai.com/",
      category: "Bancos de Vídeos"
    },
    {
      title: "Distill",
      description: "Vídeos curados de alta qualidade",
      detailedDescription: "Distill oferece uma coleção cuidadosamente curada de vídeos de alta qualidade, focando em conteúdo único e visualmente impressionante para projetos profissionais.",
      icon: "💎",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop",
      link: "https://wedistill.io/",
      category: "Bancos de Vídeos"
    },
    {
      title: "Life of Vids",
      description: "Vídeos gratuitos para uso comercial",
      detailedDescription: "Life of Vids disponibiliza vídeos gratuitos autorizados para uso comercial, com uma variedade de categorias e estilos para diferentes tipos de projetos.",
      icon: "🌟",
      image: "https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?w=400&h=300&fit=crop",
      link: "https://www.lifeofvids.com/",
      category: "Bancos de Vídeos"
    },
    {
      title: "Motion Elements",
      description: "Biblioteca premium de vídeos e motion graphics",
      detailedDescription: "Motion Elements oferece uma vasta biblioteca de vídeos premium, motion graphics, templates e efeitos visuais para produções profissionais de alto nível.",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      link: "https://www.motionelements.com/",
      category: "Bancos de Vídeos"
    },
    {
      title: "Mixkit",
      description: "Vídeos, música e efeitos sonoros gratuitos",
      detailedDescription: "Mixkit combina vídeos gratuitos de alta qualidade com música e efeitos sonoros, oferecendo uma solução completa para projetos audiovisuais sem custos.",
      icon: "🎵",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      link: "https://mixkit.co/",
      category: "Bancos de Vídeos"
    },
    {
      title: "Canva Vídeos",
      description: "Biblioteca de vídeos integrada ao Canva",
      detailedDescription: "Canva oferece uma extensa biblioteca de vídeos integrada à sua plataforma de design, facilitando a criação de conteúdo visual completo e profissional.",
      icon: "🎬",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop",
      link: "https://www.canva.com/videos/",
      category: "Bancos de Vídeos"
    },
    {
      title: "Quickads.ai",
      description: "Vídeos otimizados para publicidade digital",
      detailedDescription: "Quickads.ai especializa-se em vídeos otimizados para campanhas publicitárias digitais, oferecendo conteúdo estratégico para maximizar conversões e engajamento.",
      icon: "📺",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      link: "https://quickads.ai/",
      category: "Bancos de Vídeos"
    },
    {
      title: "Eyecandy",
      description: "Vídeos visuais premium e efeitos especiais",
      detailedDescription: "Eyecandy oferece vídeos visuais premium e efeitos especiais de alta qualidade, ideal para projetos que necessitam de elementos visuais únicos e impactantes.",
      icon: "👁️",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      link: "https://eyecandy.com/",
      category: "Bancos de Vídeos"
    },
    {
      title: "Supa.video",
      description: "Plataforma moderna de vídeos para criadores",
      detailedDescription: "Supa.video é uma plataforma moderna que oferece vídeos de alta qualidade especificamente curados para criadores de conteúdo e profissionais de marketing digital.",
      icon: "🚀",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop",
      link: "https://supa.video/",
      category: "Bancos de Vídeos"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Bancos de Vídeos
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Bibliotecas completas de vídeos gratuitos e premium para todos os seus projetos.
            Descubra conteúdo de alta qualidade para uso comercial e criativo.
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
                category={tool.category}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BancosVideos;
