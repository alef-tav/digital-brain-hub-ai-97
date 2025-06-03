
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolBlogCard from '@/components/ToolBlogCard';

const toolsData = [
  {
    title: "Pixel X",
    description: "Plataforma avançada para rastreamento e otimização de pixels do Facebook e Google Ads.",
    detailedDescription: "O Pixel X oferece uma solução completa para gerenciamento de pixels, permitindo rastreamento preciso de conversões, análise de performance de campanhas e otimização automática de eventos. Integra-se facilmente com Facebook Ads e Google Ads para maximizar o ROI das suas campanhas publicitárias.",
    icon: "📊",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop&auto=format",
    link: "https://sp.pixelx.app"
  },
  {
    title: "Voluum",
    description: "Plataforma líder em rastreamento de afiliados e análise de performance de campanhas.",
    detailedDescription: "Voluum é uma das principais ferramentas de tracking para afiliados e anunciantes, oferecendo rastreamento em tempo real, análise avançada de dados, testes A/B automatizados e integração com principais redes de publicidade. Ideal para otimizar campanhas e maximizar lucros.",
    icon: "📈",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop&auto=format",
    link: "https://voluum.com"
  },
  {
    title: "Hyros",
    description: "Sistema de rastreamento de atribuição avançado para campanhas multiplataforma.",
    detailedDescription: "Hyros revoluciona o rastreamento de conversões com sua tecnologia de atribuição AI-powered, oferecendo visibilidade completa do customer journey através de múltiplas plataformas. Especialmente eficaz para e-commerce e campanhas complexas com múltiplos touchpoints.",
    icon: "🎯",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop&auto=format",
    link: "https://hyros.com"
  },
  {
    title: "RedTrack",
    description: "Plataforma de tracking e análise para campanhas de performance marketing.",
    detailedDescription: "RedTrack oferece rastreamento preciso de campanhas, análise de ROI em tempo real e otimização automática de lances. Com recursos avançados de fraud protection e integração com mais de 100 redes de tráfego, é ideal para afiliados e agências.",
    icon: "🔴",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop&auto=format",
    link: "https://redtrack.io"
  },
  {
    title: "UTMify",
    description: "Gerador e gerenciador de parâmetros UTM para rastreamento de campanhas.",
    detailedDescription: "UTMify simplifica a criação e gestão de parâmetros UTM, permitindo rastreamento consistente de campanhas across diferentes canais. Oferece templates personalizáveis, bulk generation e analytics integrados para melhor organização de tracking.",
    icon: "🔗",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop&auto=format",
    link: "https://utmify.net"
  },
  {
    title: "Solomon",
    description: "Plataforma de inteligência artificial para otimização de campanhas publicitárias.",
    detailedDescription: "Solomon utiliza machine learning para otimizar automaticamente campanhas no Facebook e Google Ads, oferecendo insights preditivos, automação de lances e análise de performance em tempo real. Ideal para escalar campanhas de forma eficiente.",
    icon: "🧠",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=600&fit=crop&auto=format",
    link: "https://solomon.io"
  },
  {
    title: "Dimpple",
    description: "Ferramenta de análise e otimização para campanhas do Facebook Ads.",
    detailedDescription: "Dimpple oferece insights profundos sobre performance de campanhas no Facebook, com recursos de análise de audiência, otimização de criativos e rastreamento de conversões. Inclui alertas automáticos e recommendations baseadas em IA.",
    icon: "💎",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop&auto=format",
    link: "https://dimpple.com"
  },
  {
    title: "Stape",
    description: "Gateway para Facebook Conversions API com rastreamento server-side.",
    detailedDescription: "Stape facilita a implementação do Facebook Conversions API, oferecendo rastreamento server-side confiável que melhora a qualidade dos dados e contorna limitações de tracking client-side. Essencial para campanhas afetadas por iOS 14.5+.",
    icon: "🚀",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop&auto=format",
    link: "https://stape.io"
  },
  {
    title: "Meta Pixel para WordPress",
    description: "Plugin oficial do Meta para integração fácil do Facebook Pixel no WordPress.",
    detailedDescription: "Plugin oficial que simplifica a instalação e configuração do Meta Pixel em sites WordPress, oferecendo tracking automático de eventos, configuração sem código e integração com WooCommerce para e-commerce tracking completo.",
    icon: "📱",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=600&fit=crop&auto=format",
    link: "https://wordpress.org/plugins/official-facebook-pixel"
  },
  {
    title: "PixelSeuSite",
    description: "Solução brasileira para implementação e gestão de pixels de rastreamento.",
    detailedDescription: "PixelSeuSite oferece implementação profissional de pixels do Facebook, Google Ads e outras plataformas, com foco no mercado brasileiro. Inclui suporte técnico especializado e configuração personalizada para diferentes tipos de negócio.",
    icon: "🇧🇷",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop&auto=format",
    link: "https://pixelseusite.com.br"
  },
  {
    title: "Pixel Cat",
    description: "Ferramenta de debugging e análise para pixels do Facebook e Google.",
    detailedDescription: "Pixel Cat ajuda a diagnosticar problemas com pixels, oferecendo análise detalhada de eventos, validação de implementação e insights sobre qualidade dos dados. Essencial para troubleshooting e otimização de tracking.",
    icon: "🐱",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop&auto=format",
    link: "https://pixelcat.io"
  },
  {
    title: "PTM - Pixel Tag Manager",
    description: "Plugin avançado de Tag Manager para WooCommerce e WordPress.",
    detailedDescription: "PTM oferece gestão completa de tags e pixels para lojas WooCommerce, incluindo tracking avançado de e-commerce, configuração de eventos personalizados e integração com principais plataformas de publicidade. Ideal para lojas online profissionais.",
    icon: "🏪",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=600&fit=crop&auto=format",
    link: "https://wordpress.org/plugins/pixel-tag-manager"
  },
  {
    title: "UserGuiding",
    description: "Plataforma de onboarding e análise de comportamento do usuário.",
    detailedDescription: "UserGuiding permite criar tours interativos, tooltips e hotspots para melhorar a experiência do usuário, oferecendo analytics detalhados sobre engajamento e comportamento. Inclui tracking de eventos personalizados e integração com ferramentas de marketing.",
    icon: "👤",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=600&fit=crop&auto=format",
    link: "https://userguiding.com"
  },
  {
    title: "Amplitude",
    description: "Plataforma líder em product analytics e comportamento do usuário.",
    detailedDescription: "Amplitude oferece análise profunda do comportamento do usuário, tracking de eventos customizados, cohort analysis e insights preditivos. Ideal para produtos digitais que precisam entender jornadas complexas do usuário e otimizar conversões.",
    icon: "📊",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop&auto=format",
    link: "https://amplitude.com"
  },
  {
    title: "Heap",
    description: "Analytics automático que captura todos os eventos sem configuração manual.",
    detailedDescription: "Heap revoluciona o tracking capturando automaticamente todos os cliques, pageviews e interações sem necessidade de implementação manual. Oferece análise retroativa, segmentação avançada e insights de comportamento do usuário.",
    icon: "📈",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop&auto=format",
    link: "https://heap.io"
  },
  {
    title: "Mixpanel",
    description: "Plataforma avançada de product analytics focada em eventos.",
    detailedDescription: "Mixpanel oferece tracking detalhado de eventos, análise de funis, cohort analysis e A/B testing. Especializada em fornecer insights sobre comportamento do usuário para otimizar produtos e aumentar retenção e conversão.",
    icon: "🎛️",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop&auto=format",
    link: "https://mixpanel.com"
  },
  {
    title: "Matomo",
    description: "Plataforma de web analytics open-source com foco em privacidade.",
    detailedDescription: "Matomo oferece analytics completo respeitando a privacidade dos usuários, com tracking de eventos customizáveis, heatmaps, session recordings e compliance com GDPR. Ideal para empresas que precisam de controle total sobre seus dados.",
    icon: "🔒",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=600&fit=crop&auto=format",
    link: "https://matomo.org"
  },
  {
    title: "Google Tag Manager",
    description: "Sistema gratuito de gerenciamento de tags do Google.",
    detailedDescription: "Google Tag Manager simplifica a implementação e gestão de tags de tracking, oferecendo interface visual para configurar eventos, triggers e variáveis. Essencial para implementar Google Analytics, Google Ads e outras ferramentas sem modificar código.",
    icon: "🏷️",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400&h=600&fit=crop&auto=format",
    link: "https://tagmanager.google.com"
  },
  {
    title: "Facebook Events Manager",
    description: "Ferramenta oficial do Meta para gerenciar pixels e eventos.",
    detailedDescription: "Facebook Events Manager é a central oficial para configurar, monitorar e otimizar o Meta Pixel e Conversions API. Oferece debugging tools, event testing, audience insights e integração completa com campanhas publicitárias do Meta.",
    icon: "📘",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=600&fit=crop&auto=format",
    link: "https://business.facebook.com/events_manager"
  },
  {
    title: "Brand24",
    description: "Monitoramento e análise de eventos em redes sociais e web.",
    detailedDescription: "Brand24 oferece monitoramento em tempo real de menções da marca across web e redes sociais, análise de sentimento, tracking de hashtags e métricas de engajamento. Ideal para social listening e análise de performance de campanhas sociais.",
    icon: "👁️",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=600&fit=crop&auto=format",
    link: "https://brand24.com"
  }
];

const RastreamentoEventos = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Rastreamento de Eventos (Meta, Google Ads)
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Ferramentas especializadas em rastreamento, análise e otimização de eventos para campanhas no Meta (Facebook/Instagram) e Google Ads. 
              Maximize suas conversões com tracking preciso e insights avançados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {toolsData.map((tool, index) => (
              <ToolBlogCard
                key={index}
                title={tool.title}
                description={tool.description}
                detailedDescription={tool.detailedDescription}
                icon={tool.icon}
                image={tool.image}
                link={tool.link}
                category="Rastreamento de Eventos"
                isNew={index < 3}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RastreamentoEventos;
