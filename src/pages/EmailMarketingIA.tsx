
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolBlogCard from '@/components/ToolBlogCard';

const EmailMarketingIA = () => {
  const tools = [
    {
      title: "Unroll.me",
      description: "Ferramenta para gerenciar e cancelar assinaturas de e-mail indesejadas.",
      detailedDescription: "Unroll.me é uma ferramenta que ajuda você a gerenciar suas assinaturas de e-mail, permitindo cancelar facilmente e-mails indesejados e organizar sua caixa de entrada de forma mais eficiente.",
      icon: "📧",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=600&fit=crop&auto=format",
      link: "https://unroll.me/",
      category: "E-mail Marketing com IA"
    },
    {
      title: "Selzy",
      description: "Plataforma de marketing para envio gratuito de e-mail em massa - 15.000 e-mails grátis.",
      detailedDescription: "Selzy oferece uma plataforma completa de e-mail marketing com 15.000 e-mails gratuitos por mês. Inclui templates profissionais, automação, segmentação avançada e análises detalhadas para otimizar suas campanhas.",
      icon: "📬",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=600&fit=crop&auto=format",
      link: "https://selzy.com/br/",
      category: "E-mail Marketing com IA"
    },
    {
      title: "Signature Hound",
      description: "Gerador de templates profissionais para assinaturas de e-mail.",
      detailedDescription: "Signature Hound é uma ferramenta especializada em criar assinaturas de e-mail profissionais e atrativas. Oferece diversos templates personalizáveis para dar um toque profissional aos seus e-mails corporativos.",
      icon: "✍️",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=600&fit=crop&auto=format",
      link: "https://signaturehound.com/",
      category: "E-mail Marketing com IA"
    },
    {
      title: "HubSpot",
      description: "Plataforma completa de CRM e e-mail marketing com automação inteligente.",
      detailedDescription: "HubSpot oferece uma suite completa de ferramentas de marketing, incluindo e-mail marketing avançado, automação, CRM integrado, analytics e ferramentas de geração de leads para empresas de todos os tamanhos.",
      icon: "🎯",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=600&fit=crop&auto=format",
      link: "https://www.hubspot.com/",
      category: "E-mail Marketing com IA"
    },
    {
      title: "ActiveCampaign",
      description: "Automação de e-mail marketing com IA e experiência personalizada.",
      detailedDescription: "ActiveCampaign combina e-mail marketing, automação e CRM em uma plataforma única. Utiliza IA para personalizar experiências, segmentar audiências e otimizar campanhas automaticamente.",
      icon: "⚡",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop&auto=format",
      link: "https://www.activecampaign.com/",
      category: "E-mail Marketing com IA"
    },
    {
      title: "Mailchimp",
      description: "Plataforma líder em e-mail marketing com recursos de IA para otimização.",
      detailedDescription: "Mailchimp é uma das plataformas de e-mail marketing mais populares, oferecendo automação inteligente, segmentação avançada, templates responsivos e análises preditivas com IA para maximizar o ROI.",
      icon: "🐵",
      image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=400&h=600&fit=crop&auto=format",
      link: "https://mailchimp.com/",
      category: "E-mail Marketing com IA"
    },
    {
      title: "Marketo (Adobe)",
      description: "Automação de marketing B2B com IA avançada da Adobe.",
      detailedDescription: "Marketo, agora parte da Adobe, oferece automação de marketing enterprise com IA avançada para lead scoring, personalização em tempo real e jornadas de cliente complexas para empresas B2B.",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=600&fit=crop&auto=format",
      link: "https://business.adobe.com/products/marketo/adobe-marketo.html",
      category: "E-mail Marketing com IA"
    },
    {
      title: "Pardot (Salesforce)",
      description: "Automação de marketing B2B integrada ao ecossistema Salesforce.",
      detailedDescription: "Pardot é a solução de automação de marketing da Salesforce, oferecendo lead nurturing avançado, scoring inteligente e integração perfeita com o CRM Salesforce para empresas B2B.",
      icon: "☁️",
      image: "https://images.unsplash.com/photo-1553028826-f4804151e4cd?w=400&h=600&fit=crop&auto=format",
      link: "https://www.salesforce.com/products/marketing-cloud/marketing-automation/",
      category: "E-mail Marketing com IA"
    },
    {
      title: "SALESmanago",
      description: "Plataforma europeia de automação de marketing com IA.",
      detailedDescription: "SALESmanago oferece automação de marketing omnichannel com IA, incluindo e-mail marketing, web push, SMS e personalização em tempo real para e-commerce e empresas B2B.",
      icon: "🇪🇺",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop&auto=format",
      link: "https://www.salesmanago.com/",
      category: "E-mail Marketing com IA"
    },
    {
      title: "Freshsales",
      description: "CRM com e-mail marketing integrado e automação inteligente.",
      detailedDescription: "Freshsales combina CRM e e-mail marketing em uma plataforma única, oferecendo automação inteligente, lead scoring e integração com todo o ecossistema Freshworks para gestão completa de vendas.",
      icon: "🔄",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=600&fit=crop&auto=format",
      link: "https://www.freshworks.com/crm/sales/",
      category: "E-mail Marketing com IA"
    },
    {
      title: "GetResponse",
      description: "Plataforma all-in-one de marketing com automação e IA.",
      detailedDescription: "GetResponse oferece e-mail marketing, automação, webinars, landing pages e e-commerce em uma única plataforma. Inclui recursos de IA para otimização de campanhas e personalização.",
      icon: "📈",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop&auto=format",
      link: "https://www.getresponse.com/",
      category: "E-mail Marketing com IA"
    },
    {
      title: "Omnisend",
      description: "Automação de e-mail marketing focada em e-commerce.",
      detailedDescription: "Omnisend é especializada em e-mail marketing para e-commerce, oferecendo automação inteligente, segmentação avançada, integração com plataformas de venda e recursos de recuperação de carrinho abandonado.",
      icon: "🛒",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=600&fit=crop&auto=format",
      link: "https://www.omnisend.com/",
      category: "E-mail Marketing com IA"
    },
    {
      title: "Brevo (Sendinblue)",
      description: "Plataforma europeia de marketing digital com IA.",
      detailedDescription: "Brevo (anteriormente Sendinblue) oferece e-mail marketing, SMS, chat ao vivo e CRM em uma plataforma única. Inclui automação inteligente e recursos de IA para otimização de campanhas.",
      icon: "💙",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=600&fit=crop&auto=format",
      link: "https://www.brevo.com/",
      category: "E-mail Marketing com IA"
    },
    {
      title: "Customer.io",
      description: "Automação de mensagens comportamentais com dados em tempo real.",
      detailedDescription: "Customer.io permite criar campanhas de e-mail altamente personalizadas baseadas no comportamento do usuário. Oferece automação avançada, segmentação em tempo real e integração com produtos digitais.",
      icon: "🎪",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=600&fit=crop&auto=format",
      link: "https://customer.io/",
      category: "E-mail Marketing com IA"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              E-mail Marketing com IA
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Explore as melhores ferramentas de e-mail marketing potencializadas por inteligência artificial. 
              Automatize campanhas, personalize conteúdo e maximize conversões com soluções inovadoras.
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

export default EmailMarketingIA;
