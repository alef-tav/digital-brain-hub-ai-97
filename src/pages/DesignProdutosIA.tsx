
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolBlogCard from '@/components/ToolBlogCard';

const DesignProdutosIA = () => {
  const tools = [
    {
      title: "Predis.ai",
      description: "Crie anúncios criativos e conteúdo para redes sociais com IA",
      detailedDescription: "Predis.ai é uma plataforma de inteligência artificial que permite criar anúncios criativos, posts para redes sociais e conteúdo de marketing de forma rápida e eficiente, ideal para campanhas publicitárias e branding.",
      icon: "🎯",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      link: "https://predis.ai/",
      category: "Design de Produtos com IA",
      isNew: true
    },
    {
      title: "AdCreative.ai",
      description: "Gere criativos publicitários de alta conversão com IA",
      detailedDescription: "AdCreative.ai utiliza inteligência artificial para gerar criativos publicitários otimizados para conversão, ajudando empresas a criar anúncios mais eficazes para suas campanhas digitais.",
      icon: "🚀",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      link: "https://adcreative.ai/",
      category: "Design de Produtos com IA",
      isNew: true
    },
    {
      title: "Canva",
      description: "Plataforma de design gráfico online para todos",
      detailedDescription: "Canva é uma plataforma de design gráfico online que permite criar designs profissionais de forma simples e intuitiva, com milhares de templates e elementos para diversos tipos de projetos.",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=300&fit=crop",
      link: "https://canva.com/",
      category: "Design de Produtos com IA"
    },
    {
      title: "Adobe Express",
      description: "Ferramenta de criação rápida da Adobe",
      detailedDescription: "Adobe Express oferece ferramentas de design rápido e fácil para criar gráficos, páginas web, histórias em vídeo e muito mais, com a qualidade e confiabilidade da Adobe.",
      icon: "✨",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      link: "https://express.adobe.com/",
      category: "Design de Produtos com IA"
    },
    {
      title: "VistaCreate",
      description: "Editor de design online com templates profissionais",
      detailedDescription: "VistaCreate (anteriormente Crello) é um editor de design online que oferece milhares de templates profissionais para criar conteúdo visual impressionante para redes sociais, marketing e mais.",
      icon: "🖼️",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
      link: "https://create.vista.com/",
      category: "Design de Produtos com IA"
    },
    {
      title: "Fotor",
      description: "Editor de fotos e design gráfico online",
      detailedDescription: "Fotor é uma plataforma completa de edição de fotos e design gráfico online, oferecendo ferramentas avançadas para criar designs profissionais e editar imagens com facilidade.",
      icon: "📸",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=300&fit=crop",
      link: "https://fotor.com/",
      category: "Design de Produtos com IA"
    },
    {
      title: "Celtra",
      description: "Plataforma de criação de anúncios digitais",
      detailedDescription: "Celtra é uma plataforma especializada em criação e produção de anúncios digitais, oferecendo ferramentas avançadas para criar campanhas publicitárias interativas e envolventes.",
      icon: "📱",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      link: "https://celtra.com/",
      category: "Design de Produtos com IA"
    },
    {
      title: "AdRoll",
      description: "Plataforma de marketing e retargeting",
      detailedDescription: "AdRoll é uma plataforma completa de marketing digital que oferece soluções de retargeting, display advertising e email marketing para maximizar o ROI das campanhas publicitárias.",
      icon: "🔄",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
      link: "https://adroll.com/",
      category: "Design de Produtos com IA"
    },
    {
      title: "Smartly.io",
      description: "Automação de campanhas publicitárias sociais",
      detailedDescription: "Smartly.io é uma plataforma de automação para campanhas publicitárias em redes sociais, oferecendo ferramentas inteligentes para otimizar e escalar anúncios no Facebook, Instagram e outras plataformas.",
      icon: "🤖",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      link: "https://smartly.io/",
      category: "Design de Produtos com IA"
    },
    {
      title: "Quickads.ai",
      description: "Criação rápida de anúncios com inteligência artificial",
      detailedDescription: "Quickads.ai utiliza inteligência artificial para criar anúncios de forma rápida e eficiente, automatizando o processo de criação de campanhas publicitárias para diferentes plataformas digitais.",
      icon: "⚡",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
      link: "https://quickads.ai/",
      category: "Design de Produtos com IA",
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
              Design de Produtos com IA
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Descubra as melhores ferramentas de inteligência artificial para design de produtos e criação publicitária. 
              Explore plataformas que revolucionam a criação de anúncios, designs gráficos e campanhas de marketing.
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

export default DesignProdutosIA;
