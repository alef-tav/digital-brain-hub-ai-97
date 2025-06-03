
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolBlogCard from '@/components/ToolBlogCard';

const SEO = () => {
  const tools = [
    {
      title: "Google Keyword Planner",
      description: "Ferramenta gratuita do Google para pesquisa de palavras-chave e planejamento de campanhas.",
      detailedDescription: "Google Keyword Planner é uma ferramenta essencial para pesquisa de palavras-chave, oferecendo dados sobre volume de busca, concorrência e sugestões de termos relevantes para otimização de SEO e campanhas do Google Ads.",
      icon: "🔍",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400&h=600&fit=crop&auto=format",
      link: "https://ads.google.com/home/tools/keyword-planner/",
      category: "SEO"
    },
    {
      title: "Insights Finder",
      description: "Ferramenta para descobrir insights e tendências de mercado relevantes.",
      detailedDescription: "Insights Finder ajuda a identificar oportunidades de conteúdo e tendências de busca, fornecendo dados valiosos para estratégias de SEO e marketing digital baseadas em comportamento do usuário.",
      icon: "💡",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop&auto=format",
      link: "https://www.thinkwithgoogle.com/consumer-insights/consumer-journey/",
      category: "SEO"
    },
    {
      title: "Semrush",
      description: "Plataforma completa de marketing digital e análise de SEO.",
      detailedDescription: "Semrush é uma das principais ferramentas de SEO do mercado, oferecendo análise de palavras-chave, auditoria de sites, pesquisa de concorrentes, backlink analysis e muito mais para otimização completa.",
      icon: "📊",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop&auto=format",
      link: "https://www.semrush.com/",
      category: "SEO"
    },
    {
      title: "Similarweb",
      description: "Análise de tráfego web e inteligência de mercado digital.",
      detailedDescription: "Similarweb fornece insights sobre tráfego de websites, comportamento de audiência, análise de concorrentes e tendências de mercado para otimizar estratégias digitais e SEO.",
      icon: "📈",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop&auto=format",
      link: "https://www.similarweb.com/",
      category: "SEO"
    },
    {
      title: "Serpstat",
      description: "Ferramenta de SEO para pesquisa de palavras-chave e análise de concorrentes.",
      detailedDescription: "Serpstat oferece análise completa de SEO, incluindo pesquisa de palavras-chave, análise de backlinks, auditoria de sites e monitoramento de posições no ranking dos motores de busca.",
      icon: "🐍",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400&h=600&fit=crop&auto=format",
      link: "https://serpstat.com/",
      category: "SEO"
    },
    {
      title: "SpyFu",
      description: "Ferramenta de inteligência competitiva para SEO e PPC.",
      detailedDescription: "SpyFu permite espionar as estratégias de SEO e Google Ads dos concorrentes, revelando suas palavras-chave mais rentáveis, anúncios e estratégias de backlinks para otimizar suas campanhas.",
      icon: "🕵️",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=600&fit=crop&auto=format",
      link: "https://www.spyfu.com/",
      category: "SEO"
    },
    {
      title: "Ahrefs",
      description: "Ferramenta profissional de SEO para análise de backlinks e palavras-chave.",
      detailedDescription: "Ahrefs é uma das ferramentas de SEO mais respeitadas, oferecendo análise profunda de backlinks, pesquisa de palavras-chave, auditoria de sites e monitoramento de rankings com dados precisos e atualizados.",
      icon: "🔗",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop&auto=format",
      link: "https://ahrefs.com/",
      category: "SEO"
    },
    {
      title: "Moz Pro",
      description: "Suite completa de ferramentas de SEO para otimização e análise.",
      detailedDescription: "Moz Pro oferece ferramentas essenciais de SEO incluindo pesquisa de palavras-chave, análise de backlinks, auditoria de sites, monitoramento de rankings e insights para melhorar a visibilidade nos motores de busca.",
      icon: "🦊",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400&h=600&fit=crop&auto=format",
      link: "https://moz.com/products/pro",
      category: "SEO"
    },
    {
      title: "Ubersuggest",
      description: "Ferramenta de SEO gratuita para pesquisa de palavras-chave e análise.",
      detailedDescription: "Ubersuggest, criado por Neil Patel, oferece pesquisa de palavras-chave, análise de concorrentes, auditoria de SEO e ideias de conteúdo com uma interface amigável e opções gratuitas robustas.",
      icon: "💰",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop&auto=format",
      link: "https://neilpatel.com/ubersuggest/",
      category: "SEO"
    },
    {
      title: "Writesonic",
      description: "Gerador de conteúdo com IA para SEO e copywriting.",
      detailedDescription: "Writesonic utiliza inteligência artificial para criar conteúdo otimizado para SEO, incluindo artigos, meta descriptions, títulos e copy para anúncios, ajudando a melhorar rankings e conversões.",
      icon: "✍️",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=600&fit=crop&auto=format",
      link: "https://writesonic.com/",
      category: "SEO"
    },
    {
      title: "Surfer SEO",
      description: "Ferramenta de otimização de conteúdo baseada em dados.",
      detailedDescription: "Surfer SEO analisa páginas top-ranking para fornecer recomendações precisas de otimização de conteúdo, incluindo densidade de palavras-chave, estrutura e elementos técnicos para melhorar rankings.",
      icon: "🏄",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop&auto=format",
      link: "https://surferseo.com/",
      category: "SEO"
    },
    {
      title: "Jasper",
      description: "Assistente de IA para criação de conteúdo otimizado para SEO.",
      detailedDescription: "Jasper (anteriormente Jarvis) é uma plataforma de IA que cria conteúdo de alta qualidade otimizado para SEO, incluindo artigos, posts de blog, meta descriptions e copy publicitário de forma rápida e eficiente.",
      icon: "🤖",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=600&fit=crop&auto=format",
      link: "https://www.jasper.ai/",
      category: "SEO"
    },
    {
      title: "SEO.ai",
      description: "Plataforma de SEO com inteligência artificial para otimização automatizada.",
      detailedDescription: "SEO.ai combina inteligência artificial com estratégias de SEO para automatizar a otimização de conteúdo, pesquisa de palavras-chave e análise de performance, oferecendo insights e recomendações precisas.",
      icon: "🔬",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop&auto=format",
      link: "https://seo.ai/",
      category: "SEO"
    },
    {
      title: "ChatGPT",
      description: "IA conversacional para criação de conteúdo e estratégias de SEO.",
      detailedDescription: "ChatGPT da OpenAI pode ser utilizado para criar conteúdo otimizado para SEO, gerar ideias de palavras-chave, escrever meta descriptions, títulos e desenvolver estratégias de conteúdo de forma interativa.",
      icon: "💬",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=600&fit=crop&auto=format",
      link: "https://chat.openai.com/",
      category: "SEO"
    },
    {
      title: "AlsoAsked",
      description: "Ferramenta para descobrir perguntas relacionadas e People Also Ask.",
      detailedDescription: "AlsoAsked é especializada em mapear perguntas do tipo 'People Also Ask' do Google, ajudando a descobrir intenções de busca e criar conteúdo que responde às dúvidas mais comuns dos usuários.",
      icon: "❓",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400&h=600&fit=crop&auto=format",
      link: "https://alsoasked.com/",
      category: "SEO"
    },
    {
      title: "Google Ads",
      description: "Plataforma de publicidade online do Google com ferramentas de SEO integradas.",
      detailedDescription: "Google Ads oferece diversas ferramentas para SEO e SEM, incluindo Keyword Planner, Performance Max, lances inteligentes, acompanhamento de conversões e insights valiosos para otimização de campanhas.",
      icon: "🎯",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop&auto=format",
      link: "https://ads.google.com/",
      category: "SEO"
    },
    {
      title: "WordStream Google Ads Grader",
      description: "Ferramenta gratuita para análise e otimização de campanhas Google Ads.",
      detailedDescription: "WordStream Google Ads Grader analisa suas campanhas do Google Ads e fornece uma pontuação detalhada com recomendações específicas para melhorar performance, CTR e reduzir custos.",
      icon: "📝",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop&auto=format",
      link: "https://www.wordstream.com/google-ads-grader",
      category: "SEO"
    },
    {
      title: "HubSpot AI Google Ads Copy Generator",
      description: "Gerador de copy para Google Ads com inteligência artificial.",
      detailedDescription: "Ferramenta da HubSpot que utiliza IA para gerar copy otimizado para anúncios do Google Ads, criando títulos e descrições persuasivas que melhoram CTR e conversões das campanhas.",
      icon: "📢",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop&auto=format",
      link: "https://www.hubspot.com/google-ads-copy-generator",
      category: "SEO"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              🔍 SEO
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Ferramentas essenciais para otimização de sites, pesquisa de palavras-chave, análise de concorrentes e melhoria de rankings nos motores de busca.
            </p>
          </div>

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

export default SEO;
