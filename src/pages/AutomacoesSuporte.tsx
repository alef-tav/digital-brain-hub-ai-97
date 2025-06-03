
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolBlogCard from '@/components/ToolBlogCard';

const AutomacoesSuporte = () => {
  const toolsData = [
    {
      title: "Rosana.io",
      description: "Inteligência Artificial para WhatsApp que fideliza clientes gerando cashback",
      detailedDescription: "Rosana.io é uma ferramenta de IA para WhatsApp focada em fidelização de clientes através de cashback automático. A plataforma utiliza inteligência artificial para criar programas de recompensas personalizados, aumentando a retenção de clientes e incentivando compras recorrentes de forma automatizada.",
      icon: "🎁",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      link: "https://rosana.io/#",
      isNew: false
    },
    {
      title: "Zoppy",
      description: "Recuperação de carrinho abandonado com mensagens personalizadas e gatilhos visuais",
      detailedDescription: "Zoppy é uma ferramenta especializada em recuperação de carrinho abandonado e boletos. Envia mensagens automatizadas com imagens personalizadas mostrando o pedido 'empacotado' com nome, endereço do cliente e logomarca da loja, criando um poderoso gatilho psicológico para conversão.",
      icon: "📦",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      link: "https://www.zoppy.com.br/",
      isNew: false
    },
    {
      title: "Typebot",
      description: "Criador visual de chatbots avançados open-source para conversas automatizadas",
      detailedDescription: "Typebot é uma plataforma open-source para criar chatbots avançados de forma visual e intuitiva. Permite construir fluxos de conversação complexos sem necessidade de programação, com integração para múltiplas plataformas e funcionalidades avançadas de automação conversacional.",
      icon: "🤖",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
      link: "https://typebot.io/?utm_source=litebadge",
      isNew: false
    },
    {
      title: "AutoResponder.ai",
      description: "Respostas automáticas inteligentes para WhatsApp usando IA",
      detailedDescription: "AutoResponder.ai é uma ferramenta de inteligência artificial que envia respostas automáticas personalizadas no WhatsApp. Utiliza IA para compreender mensagens recebidas e responder de forma contextual e natural, mantendo conversas fluidas mesmo quando você não está disponível.",
      icon: "💬",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      link: "https://www.autoresponder.ai/whatsapp",
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
            Automações para Suporte
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed text-center mb-8">
            Descubra as melhores ferramentas de automação para atendimento ao cliente e suporte técnico. Sistemas de IA que otimizam o relacionamento com clientes através de chatbots, respostas automáticas e ferramentas de fidelização.
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
                category="Automações para Suporte"
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

export default AutomacoesSuporte;
