
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolBlogCard from '@/components/ToolBlogCard';

const IdentidadeMarca = () => {
  const tools = [
    {
      title: "Seelab",
      description: "Ganhe tempo na criação de visuais para sua marca",
      detailedDescription: "Seelab é uma plataforma inovadora que acelera o processo de criação de visuais para sua marca, oferecendo ferramentas inteligentes para desenvolver identidades visuais consistentes e profissionais.",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=300&fit=crop",
      link: "https://www.seelab.ai/en",
      category: "Identidade de Marca",
      isNew: true
    },
    {
      title: "Tess AI",
      description: "IA Generativa Líder Global para Empresas",
      detailedDescription: "Tess AI é uma plataforma de inteligência artificial generativa líder global, especializada em soluções empresariais para criação de conteúdo, automação de processos e desenvolvimento de identidade de marca.",
      icon: "🤖",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      link: "https://pareto.io/pt-br/tess-ai/?network=x&device=c&matchtype=&utm_source=google&utm_medium=cpc&utm_campaign=21777596070&utm_content=&utm_term=&utm_lpurl=https://pareto.io/pt-br/tess-ai/&hsa_acc=6090323223&hsa_cam=21777596070&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQiA88a5BhDPARIsAFj595iBncJ0HKzWD2m0aK_FFaGoKAAuRq0XM3uYyvVB5HbRd8CYSNIndqYaAgYdEALw_wcB",
      category: "Identidade de Marca",
      isNew: true
    },
    {
      title: "Predis AI Ad Generator",
      description: "Cria anúncios, carrosséis e vídeos em segundos",
      detailedDescription: "Predis AI é um gerador avançado de anúncios que permite criar anúncios criativos, carrosséis e vídeos por prompts de forma rápida e eficiente, ideal para campanhas de marketing e branding.",
      icon: "📢",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      link: "https://predis.ai/",
      category: "Identidade de Marca"
    },
    {
      title: "Jitter",
      description: "Templates gratuitos de motion graphics",
      detailedDescription: "Jitter oferece uma coleção de templates gratuitos de motion graphics, permitindo criar animações profissionais e elementos visuais dinâmicos para fortalecer a identidade visual da sua marca.",
      icon: "⚡",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      link: "https://jitter.video/templates/",
      category: "Identidade de Marca"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Identidade de Marca
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Construa uma identidade visual forte e consistente para sua marca. Explore ferramentas especializadas em 
              criação de visuais, anúncios criativos, vídeos e elementos de branding que vão destacar seu negócio.
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

export default IdentidadeMarca;
