
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolBlogCard from '@/components/ToolBlogCard';

const GeradoresNomesNegocios = () => {
  const tools = [
    {
      title: "Namelix",
      description: "Gerador de nomes inteligente para negócios",
      detailedDescription: "Namelix utiliza inteligência artificial para criar nomes únicos e memoráveis para seu negócio. A ferramenta aprende com suas preferências e gera sugestões personalizadas.",
      icon: "🏢",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      link: "https://namelix.com/",
      category: "Geradores de Nomes para Negócios",
      isNew: true
    },
    {
      title: "Brandmark",
      description: "Criador de nomes e logos para empresas",
      detailedDescription: "Brandmark combina geração de nomes com criação de logos, oferecendo uma solução completa para identidade de marca com tecnologia de IA.",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      link: "https://brandmark.io/",
      category: "Geradores de Nomes para Negócios"
    },
    {
      title: "Business Name Generator",
      description: "Gerador gratuito de nomes comerciais",
      detailedDescription: "Ferramenta simples e eficaz para gerar centenas de ideias de nomes para seu negócio, com verificação de disponibilidade de domínio incluída.",
      icon: "💼",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop",
      link: "https://businessnamegenerator.com/",
      category: "Geradores de Nomes para Negócios"
    },
    {
      title: "Oberlo Business Name Generator",
      description: "Gerador de nomes com foco em e-commerce",
      detailedDescription: "Criado especialmente para negócios online e e-commerce, oferece sugestões de nomes que funcionam bem no ambiente digital.",
      icon: "🛍️",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      link: "https://www.oberlo.com/tools/business-name-generator",
      category: "Geradores de Nomes para Negócios"
    },
    {
      title: "Shopify Business Name Generator",
      description: "Gerador oficial da Shopify para negócios",
      detailedDescription: "Ferramenta oficial da Shopify que gera nomes criativos para empresas e verifica automaticamente a disponibilidade de domínios .com.",
      icon: "🏪",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      link: "https://www.shopify.com/tools/business-name-generator",
      category: "Geradores de Nomes para Negócios"
    },
    {
      title: "Looka Business Name Generator",
      description: "IA para nomes de marca memoráveis",
      detailedDescription: "Looka usa algoritmos avançados para criar nomes que são não apenas únicos, mas também memoráveis e adequados para branding.",
      icon: "🔍",
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=300&fit=crop",
      link: "https://looka.com/business-name-generator/",
      category: "Geradores de Nomes para Negócios"
    },
    {
      title: "BrandBucket",
      description: "Marketplace de nomes premium para empresas",
      detailedDescription: "BrandBucket oferece nomes de empresas cuidadosamente selecionados e testados, com domínios premium disponíveis para compra imediata.",
      icon: "💎",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=400&h=300&fit=crop",
      link: "https://www.brandbucket.com/",
      category: "Geradores de Nomes para Negócios"
    },
    {
      title: "Squadhelp",
      description: "Plataforma colaborativa para criação de nomes",
      detailedDescription: "Squadhelp conecta empreendedores com uma comunidade de criativos para desenvolver nomes únicos através de concursos e colaboração.",
      icon: "👥",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      link: "https://www.squadhelp.com/",
      category: "Geradores de Nomes para Negócios"
    },
    {
      title: "Lean Domain Search",
      description: "Busca de domínios com geração de nomes",
      detailedDescription: "Combina geração de nomes com busca de domínios disponíveis, facilitando o processo de encontrar nome e domínio simultaneamente.",
      icon: "🌐",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      link: "https://leandomainsearch.com/",
      category: "Geradores de Nomes para Negócios"
    },
    {
      title: "Novanym",
      description: "Gerador de nomes abstratos e únicos",
      detailedDescription: "Novanym especializa-se em criar nomes abstratos e únicos que são facilmente brandáveis e memoráveis para qualquer tipo de negócio.",
      icon: "✨",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=300&fit=crop",
      link: "https://www.novanym.com/",
      category: "Geradores de Nomes para Negócios"
    },
    {
      title: "Panabee",
      description: "Gerador com verificação de redes sociais",
      detailedDescription: "Panabee não só gera nomes, mas também verifica a disponibilidade em redes sociais e domínios, oferecendo uma visão completa da presença digital.",
      icon: "🐝",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
      link: "https://www.panabee.com/",
      category: "Geradores de Nomes para Negócios"
    },
    {
      title: "NameMesh",
      description: "Gerador inteligente com categorização",
      detailedDescription: "NameMesh organiza sugestões em categorias como 'comum', 'novo', 'curto' e 'divertido', facilitando a escolha do nome perfeito.",
      icon: "🕸️",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      link: "https://www.namemesh.com/",
      category: "Geradores de Nomes para Negócios"
    },
    {
      title: "BustAName",
      description: "Combinador de palavras para nomes únicos",
      detailedDescription: "BustAName permite combinar palavras-chave de forma criativa para gerar nomes únicos, com verificação instantânea de domínios.",
      icon: "🔨",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop",
      link: "https://www.bustaname.com/",
      category: "Geradores de Nomes para Negócios"
    },
    {
      title: "NameStation",
      description: "Gerador colaborativo de nomes empresariais",
      detailedDescription: "NameStation oferece ferramentas avançadas de geração de nomes com recursos colaborativos e análise de tendências de nomeação.",
      icon: "🚉",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=400&h=300&fit=crop",
      link: "https://www.namestation.com/",
      category: "Geradores de Nomes para Negócios"
    },
    {
      title: "DomainWheel",
      description: "Gerador focado em disponibilidade de domínios",
      detailedDescription: "DomainWheel gera sugestões de nomes priorizando a disponibilidade de domínios, ideal para quem quer garantir presença online imediata.",
      icon: "⚡",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      link: "https://domainwheel.com/",
      category: "Geradores de Nomes para Negócios"
    },
    {
      title: "Wordoid",
      description: "Criador de palavras inventadas brandáveis",
      detailedDescription: "Wordoid especializa-se em criar palavras completamente novas que soam naturais e são facilmente pronunciáveis em diferentes idiomas.",
      icon: "🎭",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=300&fit=crop",
      link: "https://wordoid.com/",
      category: "Geradores de Nomes para Negócios"
    },
    {
      title: "NameRobot",
      description: "Suite completa para criação de nomes",
      detailedDescription: "NameRobot oferece mais de 20 ferramentas diferentes para criação de nomes, desde geradores básicos até análises linguísticas avançadas.",
      icon: "🤖",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
      link: "https://www.namerobot.com/",
      category: "Geradores de Nomes para Negócios"
    },
    {
      title: "Brandroot",
      description: "Nomes premium com logos inclusos",
      detailedDescription: "Brandroot oferece nomes de empresas premium pré-criados com logos profissionais inclusos, prontos para uso imediato.",
      icon: "🌳",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      link: "https://www.brandroot.com/",
      category: "Geradores de Nomes para Negócios"
    },
    {
      title: "Getsocio",
      description: "Gerador focado em startups tech",
      detailedDescription: "Getsocio é especialmente projetado para startups de tecnologia, gerando nomes que soam modernos e adequados para o ambiente tech.",
      icon: "🚀",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      link: "https://getsocio.com/",
      category: "Geradores de Nomes para Negócios"
    },
    {
      title: "NameSnack",
      description: "IA avançada para nomes criativos",
      detailedDescription: "NameSnack usa machine learning para gerar nomes altamente criativos e relevantes, aprendendo com milhões de empresas existentes.",
      icon: "🍿",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      link: "https://www.namesnack.com/",
      category: "Geradores de Nomes para Negócios",
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
              Geradores de Nomes para Negócios
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Descubra ferramentas poderosas para criar nomes únicos e memoráveis para seu negócio. 
              Desde geradores baseados em IA até plataformas especializadas em branding.
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

export default GeradoresNomesNegocios;
