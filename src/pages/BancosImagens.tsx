
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolBlogCard from '@/components/ToolBlogCard';

const BancosImagens = () => {
  const tools = [
    {
      title: "Free Stock Photos (123RF)",
      description: "Download de imagens gratuitas",
      detailedDescription: "123RF oferece uma coleção de fotos e imagens gratuitas de alta qualidade para download, permitindo usar imagens profissionais sem custos em seus projetos.",
      icon: "📷",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
      link: "https://br.123rf.com/imagens-gratuitas/",
      category: "Bancos de Imagens",
      isNew: true
    },
    {
      title: "Burst (Shopify)",
      description: "Banco de imagens da própria Shopify",
      detailedDescription: "Burst é o banco de imagens oficial da Shopify, oferecendo fotos gratuitas de alta resolução, especialmente focadas em e-commerce e negócios.",
      icon: "🛍️",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      link: "https://www.shopify.com/br/stock-photos/photos/search?q=family&button=",
      category: "Bancos de Imagens"
    },
    {
      title: "Pexels",
      description: "Fotos e vídeos gratuitos de alta qualidade",
      detailedDescription: "Pexels é uma das maiores plataformas de imagens e vídeos gratuitos, oferecendo milhões de fotos de alta qualidade para uso comercial e pessoal.",
      icon: "🎯",
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop",
      link: "https://www.pexels.com/pt-br/",
      category: "Bancos de Imagens",
      isNew: true
    },
    {
      title: "Unsplash",
      description: "Lindas imagens e fotos gratuitas",
      detailedDescription: "Unsplash oferece uma vasta coleção de fotografias gratuitas de alta resolução, contribuídas por fotógrafos do mundo todo, ideais para projetos criativos.",
      icon: "🌟",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      link: "https://unsplash.com/pt-br",
      category: "Bancos de Imagens"
    },
    {
      title: "StockSnap",
      description: "Fotos gratuitas de alta qualidade",
      detailedDescription: "StockSnap.io disponibiliza fotos de stock gratuitas e de alta qualidade, todas liberadas sob Creative Commons CC0, permitindo uso comercial sem restrições.",
      icon: "📸",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=300&fit=crop",
      link: "https://stocksnap.io/",
      category: "Bancos de Imagens"
    },
    {
      title: "Reshot",
      description: "Ícones e ilustrações gratuitos",
      detailedDescription: "Reshot oferece uma coleção curada de ícones SVG gratuitos e ilustrações vetoriais, perfeitos para design de interfaces e projetos gráficos.",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=300&fit=crop",
      link: "https://www.reshot.com/",
      category: "Bancos de Imagens",
      isNew: true
    },
    {
      title: "Rawpixel",
      description: "Imagens de alta qualidade e mockups",
      detailedDescription: "Rawpixel oferece fotos de stock, PNGs, templates e mockups gratuitos de alta qualidade, além de recursos premium para projetos profissionais.",
      icon: "🖼️",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop",
      link: "https://www.rawpixel.com/",
      category: "Bancos de Imagens"
    },
    {
      title: "Depositphotos",
      description: "Imagens, vídeos e música royalty-free",
      detailedDescription: "Depositphotos é um banco de mídia premium que oferece imagens, vídeos e música livres de royalties para uso comercial e criativo.",
      icon: "💎",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
      link: "https://depositphotos.com/",
      category: "Bancos de Imagens"
    },
    {
      title: "Freepik",
      description: "Crie designs incríveis mais rapidamente",
      detailedDescription: "Freepik é uma plataforma completa de recursos gráficos oferecendo vetores, fotos, PSD e ícones para criar designs profissionais de forma rápida e eficiente.",
      icon: "🚀",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      link: "https://www.freepik.com/",
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
              Descubra as melhores fontes de imagens gratuitas e pagas para seus projetos. 
              De fotos de stock a ícones e ilustrações, encontre recursos visuais de alta qualidade.
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
