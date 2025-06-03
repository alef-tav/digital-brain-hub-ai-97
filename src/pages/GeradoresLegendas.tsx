
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolBlogCard from '@/components/ToolBlogCard';

const GeradoresLegendas = () => {
  const tools = [
    {
      title: "Veed.io",
      description: "Editor de vídeo online com geração automática de legendas",
      detailedDescription: "Plataforma completa para edição de vídeos com funcionalidade avançada de geração automática de legendas em múltiplos idiomas. Oferece sincronização precisa e personalização visual das legendas.",
      icon: "📝",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=600&fit=crop&auto=format",
      link: "https://www.veed.io/",
      category: "Geradores de Legendas",
      isNew: true
    },
    {
      title: "YouTube (Legendas Automáticas)",
      description: "Sistema nativo do YouTube para geração automática de legendas",
      detailedDescription: "Ferramenta integrada ao YouTube que gera legendas automaticamente para vídeos usando reconhecimento de voz avançado. Suporta múltiplos idiomas e permite edição manual das legendas geradas.",
      icon: "📺",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=600&fit=crop&auto=format",
      link: "https://www.youtube.com/",
      category: "Geradores de Legendas"
    },
    {
      title: "Maestra Suite",
      description: "Plataforma profissional de transcrição e legendagem",
      detailedDescription: "Suite completa para transcrição automática e criação de legendas profissionais. Oferece alta precisão, suporte a múltiplos idiomas e ferramentas de colaboração para equipes.",
      icon: "🎭",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=600&fit=crop&auto=format",
      link: "https://maestra.ai/",
      category: "Geradores de Legendas",
      isNew: true
    },
    {
      title: "HappyScribe",
      description: "Transcrição automática e geração de legendas com IA",
      detailedDescription: "Serviço de transcrição automática que converte áudio e vídeo em texto e legendas. Oferece alta precisão, edição colaborativa e exportação em vários formatos de legenda.",
      icon: "😊",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=600&fit=crop&auto=format",
      link: "https://www.happyscribe.com/",
      category: "Geradores de Legendas"
    },
    {
      title: "SubtitleBee",
      description: "Gerador automático de legendas para vídeos",
      detailedDescription: "Ferramenta especializada em criar legendas automáticas para vídeos com alta precisão. Suporta mais de 120 idiomas e oferece personalização visual das legendas.",
      icon: "🐝",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=600&fit=crop&auto=format",
      link: "https://subtitlebee.com/",
      category: "Geradores de Legendas"
    },
    {
      title: "Adobe Express",
      description: "Criação de legendas com ferramentas da Adobe",
      detailedDescription: "Parte do ecossistema Adobe que permite adicionar legendas automáticas aos vídeos. Integra-se perfeitamente com outras ferramentas Adobe e oferece templates profissionais.",
      icon: "🔴",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=600&fit=crop&auto=format",
      link: "https://express.adobe.com/",
      category: "Geradores de Legendas"
    },
    {
      title: "Canva",
      description: "Design e criação de legendas visuais para vídeos",
      detailedDescription: "Plataforma de design que inclui ferramentas para criar legendas estilizadas e visualmente atrativas. Oferece templates e elementos gráficos para legendas criativas.",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=600&fit=crop&auto=format",
      link: "https://www.canva.com/",
      category: "Geradores de Legendas"
    },
    {
      title: "CapCut",
      description: "Editor de vídeo com geração automática de legendas",
      detailedDescription: "Editor de vídeo popular que oferece geração automática de legendas com sincronização precisa. Inclui efeitos visuais e animações para tornar as legendas mais dinâmicas.",
      icon: "✂️",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=600&fit=crop&auto=format",
      link: "https://www.capcut.com/",
      category: "Geradores de Legendas"
    },
    {
      title: "Kaptioned",
      description: "Gerador de legendas automáticas para criadores de conteúdo",
      detailedDescription: "Ferramenta focada em criadores de conteúdo que automatiza a criação de legendas para vídeos. Oferece personalização de estilos e fácil integração com plataformas sociais.",
      icon: "📱",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=600&fit=crop&auto=format",
      link: "https://kaptioned.com/",
      category: "Geradores de Legendas"
    },
    {
      title: "AutoCap",
      description: "Aplicativo móvel para legendas automáticas",
      detailedDescription: "Aplicativo móvel que adiciona legendas automáticas aos vídeos diretamente no smartphone. Popular entre criadores de conteúdo para redes sociais.",
      icon: "📲",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop&auto=format",
      link: "https://www.mixlab.tech/autocap",
      category: "Geradores de Legendas"
    },
    {
      title: "Voicella",
      description: "Transcrição de voz em texto para legendas",
      detailedDescription: "Serviço de transcrição que converte áudio em texto para criar legendas. Oferece alta precisão e suporte a múltiplos idiomas para conteúdo internacional.",
      icon: "🗣️",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=600&fit=crop&auto=format",
      link: "https://voicella.com/",
      category: "Geradores de Legendas"
    },
    {
      title: "VideoShow",
      description: "Editor de vídeo com funcionalidade de legendas",
      detailedDescription: "Editor de vídeo completo que inclui ferramentas para adicionar e personalizar legendas. Oferece templates e efeitos especiais para tornar as legendas mais atrativas.",
      icon: "🎬",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=600&fit=crop&auto=format",
      link: "https://videoshow.com/",
      category: "Geradores de Legendas"
    },
    {
      title: "Amara",
      description: "Plataforma colaborativa para criação de legendas",
      detailedDescription: "Plataforma open-source para criação colaborativa de legendas. Permite que múltiplos usuários trabalhem juntos na tradução e sincronização de legendas.",
      icon: "🤝",
      image: "https://images.unsplash.com/photo-1553028826-f4804151e4cd?w=400&h=600&fit=crop&auto=format",
      link: "https://amara.org/",
      category: "Geradores de Legendas"
    },
    {
      title: "Kapwing",
      description: "Editor de vídeo online com geração de legendas",
      detailedDescription: "Plataforma de edição de vídeo baseada na web que oferece geração automática de legendas. Inclui ferramentas de colaboração e templates para diferentes tipos de conteúdo.",
      icon: "🌐",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=600&fit=crop&auto=format",
      link: "https://www.kapwing.com/",
      category: "Geradores de Legendas"
    },
    {
      title: "Easysub",
      description: "Gerador simples e rápido de legendas",
      detailedDescription: "Ferramenta focada na simplicidade para gerar legendas automáticas rapidamente. Interface intuitiva e processamento rápido para criadores que precisam de eficiência.",
      icon: "⚡",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=600&fit=crop&auto=format",
      link: "https://easysub.app/",
      category: "Geradores de Legendas"
    },
    {
      title: "Abraia.me",
      description: "Otimização de vídeos com geração de legendas",
      detailedDescription: "Plataforma que combina otimização de vídeos com geração automática de legendas. Reduz o tamanho dos arquivos enquanto adiciona legendas precisas.",
      icon: "🔧",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop&auto=format",
      link: "https://abraia.me/",
      category: "Geradores de Legendas"
    },
    {
      title: "Clipchamp",
      description: "Editor de vídeo da Microsoft com legendas automáticas",
      detailedDescription: "Editor de vídeo integrado ao Microsoft 365 que oferece geração automática de legendas. Ideal para uso corporativo e educacional com fácil compartilhamento.",
      icon: "🎞️",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=600&fit=crop&auto=format",
      link: "https://clipchamp.com/",
      category: "Geradores de Legendas"
    },
    {
      title: "Animaker Subtitle Generator",
      description: "Gerador de legendas da plataforma Animaker",
      detailedDescription: "Ferramenta especializada em criar legendas para vídeos animados e live-action. Parte do ecossistema Animaker com integração perfeita para projetos de animação.",
      icon: "🎭",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=600&fit=crop&auto=format",
      link: "https://www.animaker.com/subtitle-generator",
      category: "Geradores de Legendas"
    },
    {
      title: "Clideo",
      description: "Suite de ferramentas de vídeo com geração de legendas",
      detailedDescription: "Coleção de ferramentas online para edição de vídeo que inclui gerador automático de legendas. Oferece processamento na nuvem e múltiplos formatos de exportação.",
      icon: "☁️",
      image: "https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?w=400&h=600&fit=crop&auto=format",
      link: "https://clideo.com/",
      category: "Geradores de Legendas"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-24 px-4 md:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Geradores de Legendas
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ferramentas especializadas em criar legendas automáticas para vídeos, 
              oferecendo transcrição precisa e sincronização perfeita para seu conteúdo audiovisual.
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

export default GeradoresLegendas;
