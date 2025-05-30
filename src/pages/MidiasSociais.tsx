
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolBlogCard from '@/components/ToolBlogCard';

const MidiasSociais = () => {
  const tools = [
    {
      title: "Barato Social",
      description: "Compra de engajamento na publicação e seguidores",
      detailedDescription: "Plataforma para revenda de serviços de engajamento em redes sociais, oferecendo aumento de seguidores, curtidas e comentários para impulsionar sua presença digital.",
      icon: "📈",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=600&fit=crop&auto=format",
      link: "https://baratosociais.com/signup"
    },
    {
      title: "HypeAuditor",
      description: "Calculadora de taxa de engajamento",
      detailedDescription: "Ferramenta gratuita para calcular a taxa de engajamento do Instagram, permitindo analisar o desempenho de perfis e campanhas de forma precisa e profissional.",
      icon: "📊",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop&auto=format",
      link: "https://hypeauditor.com/pt/free-tools/instagram-engagement-calculator/"
    },
    {
      title: "mLabs DashGoo",
      description: "Crie relatórios de mídias sociais em segundos",
      detailedDescription: "Plataforma que permite criar relatórios e dashboards de marketing digital em segundos, oferecendo insights valiosos sobre o desempenho das suas redes sociais.",
      icon: "📋",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop&auto=format",
      link: "https://dashgoo.com/"
    },
    {
      title: "ManyChat",
      description: "Chat Marketing Made Easy",
      detailedDescription: "Plataforma líder em chat marketing que permite criar chatbots automatizados para WhatsApp, Instagram e Facebook, facilitando a comunicação com clientes.",
      icon: "💬",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop&auto=format",
      link: "https://manychat.com/"
    },
    {
      title: "Metricool",
      description: "Gerenciador de redes sociais",
      detailedDescription: "Ferramenta completa para analisar, gerenciar e medir seu conteúdo digital em todas as redes sociais, oferecendo insights detalhados e agendamento de posts.",
      icon: "🔧",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=600&fit=crop&auto=format",
      link: "https://metricool.com/"
    },
    {
      title: "Predis.ai",
      description: "Crie postagem para o Instagram com IA",
      detailedDescription: "Gerador de conteúdo com IA que cria posts profissionais para Instagram, incluindo análise de concorrentes e sugestões de hashtags otimizadas.",
      icon: "🤖",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=600&fit=crop&auto=format",
      link: "https://predis.ai/",
      isNew: true
    },
    {
      title: "InVideo",
      description: "Criador de Reels em 1 minuto",
      detailedDescription: "Plataforma de criação de vídeos profissionais com templates para negócios, permitindo criar Reels e vídeos para redes sociais em minutos.",
      icon: "🎬",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=600&fit=crop&auto=format",
      link: "https://invideo.io/templates/business-videos/"
    },
    {
      title: "aiCarousels",
      description: "Cria carrosséis com IA",
      detailedDescription: "Gerador gratuito de carrosséis para redes sociais usando inteligência artificial, criando designs profissionais e engajantes automaticamente.",
      icon: "🎠",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=600&fit=crop&auto=format",
      link: "https://www.aicarousels.com/"
    },
    {
      title: "Quickads",
      description: "Cria posts e carrosséis com IA",
      detailedDescription: "Gerador de anúncios com IA que cria posts, carrosséis e campanhas publicitárias profissionais em 30 segundos, otimizado para conversão.",
      icon: "⚡",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop&auto=format",
      link: "https://www.quickads.ai/"
    },
    {
      title: "Pin Generator",
      description: "Criador de Pin para o Pinterest",
      detailedDescription: "Solução completa de marketing para Pinterest que permite criar pins atrativos e otimizados, aumentando o alcance e engajamento na plataforma.",
      icon: "📌",
      image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=600&fit=crop&auto=format",
      link: "https://pingenerator.com/"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Mídias Sociais
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Ferramentas para gerenciar, criar conteúdo e automatizar estratégias em redes sociais.
            Descubra soluções para Instagram, Facebook, Pinterest e muito mais.
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
                category="Mídias Sociais"
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

export default MidiasSociais;
