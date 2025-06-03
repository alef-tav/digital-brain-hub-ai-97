
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolBlogCard from '@/components/ToolBlogCard';

const Mockups = () => {
  // Dados completos das ferramentas com descrições detalhadas e links
  const toolsData = [
    {
      title: "GraphicsFamily - Mockups Free",
      description: "Biblioteca com mais de 739 templates gratuitos de logos e mockups para download",
      detailedDescription: "O GraphicsFamily oferece uma vasta coleção de templates gratuitos para logos e mockups. Com mais de 739 opções disponíveis, é uma excelente fonte para designers que procuram recursos de qualidade sem custo. A plataforma disponibiliza arquivos em diversos formatos para diferentes necessidades de design.",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=600&h=400&fit=crop",
      link: "https://graphicsfamily.com/downloads/category/logos/",
      isNew: false
    },
    {
      title: "Smart Mockups",
      description: "Crie mockups de produtos incríveis com facilidade online, sem necessidade de Photoshop",
      detailedDescription: "Smart Mockups é uma ferramenta online que permite criar mockups profissionais de forma rápida e fácil. Sem necessidade de conhecimento em Photoshop, você pode criar apresentações impressionantes de seus designs em dispositivos, roupas, impressos e muito mais. Interface intuitiva com milhares de templates disponíveis.",
      icon: "📱",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
      link: "https://smartmockups.com/pt",
      isNew: false
    },
    {
      title: "Mockup Cloud",
      description: "Loja premium e gratuita de mockups PSD com sistema de busca avançado",
      detailedDescription: "Mockup Cloud é uma plataforma que oferece tanto mockups gratuitos quanto premium em formato PSD. Com um sistema de busca avançado, facilita encontrar exatamente o tipo de mockup que você precisa. Oferece alta qualidade e variedade de categorias, desde dispositivos eletrônicos até materiais impressos.",
      icon: "☁️",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=600&h=400&fit=crop",
      link: "https://www.mockupcloud.com/search",
      isNew: false
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-center">
            Mockups
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed text-center mb-8">
            Descubra as melhores ferramentas para criar mockups profissionais e apresentar seus designs de forma impressionante. Cada ferramenta foi cuidadosamente selecionada para ajudar você a mostrar seus projetos da melhor forma possível.
          </p>
        </div>
      </section>

      {/* Tools Blog Section */}
      <main className="pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolsData.map((tool, index) => (
              <ToolBlogCard
                key={index}
                title={tool.title}
                description={tool.description}
                detailedDescription={tool.detailedDescription}
                icon={tool.icon}
                image={tool.image}
                link={tool.link}
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

export default Mockups;
