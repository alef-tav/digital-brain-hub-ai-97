
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolBlogCard from '@/components/ToolBlogCard';

const OrganizacaoProcessoProdutividade = () => {
  // Dados completos das ferramentas com descrições detalhadas e links
  const toolsData = [
    {
      title: "Notion",
      description: "Workspace tudo-em-um para notas, documentos, bases de dados e colaboração em equipe.",
      detailedDescription: "O Notion é uma ferramenta revolucionária que combina anotações, gerenciamento de tarefas, wikis e bancos de dados em uma única plataforma. Perfeito para organizar projetos pessoais e profissionais, criar documentações detalhadas e colaborar com equipes. Suas funcionalidades incluem templates personalizáveis, integração com outras ferramentas e sincronização em tempo real entre dispositivos.",
      icon: "📝",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
      link: "https://notion.so",
      isNew: true
    },
    {
      title: "Trello",
      description: "Ferramenta de gestão de projetos baseada em quadros Kanban para organizar tarefas.",
      detailedDescription: "O Trello utiliza o sistema Kanban para organização visual de projetos e tarefas. Com quadros, listas e cartões, você pode acompanhar o progresso de qualquer projeto de forma intuitiva. Ideal para equipes que precisam de uma visão clara do fluxo de trabalho, com recursos como prazos, checklists, anexos e integrações com ferramentas populares.",
      icon: "📋",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      link: "https://trello.com"
    },
    {
      title: "Asana",
      description: "Plataforma de gestão de trabalho para acompanhar projetos e tarefas da equipe.",
      detailedDescription: "Asana é uma plataforma robusta de gerenciamento de projetos que ajuda equipes a organizar, acompanhar e gerenciar seu trabalho. Oferece múltiplas visualizações (lista, quadro, cronograma, calendário), automações personalizadas, relatórios detalhados e integrações com mais de 100 aplicativos. Perfeito para equipes que precisam de controle granular sobre seus projetos.",
      icon: "✅",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      link: "https://asana.com"
    },
    {
      title: "Monday.com",
      description: "Sistema operacional de trabalho que potencializa equipes para executar projetos e fluxos de trabalho.",
      detailedDescription: "Monday.com é uma plataforma Work OS que centraliza todas as atividades da sua equipe em um só lugar. Com painéis personalizáveis, automações avançadas e integrações nativas, facilita o gerenciamento de projetos complexos. Oferece templates para diferentes indústrias e casos de uso, desde marketing até desenvolvimento de software.",
      icon: "📊",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      link: "https://monday.com"
    },
    {
      title: "ClickUp",
      description: "Plataforma de produtividade tudo-em-um que substitui todas as outras ferramentas de trabalho.",
      detailedDescription: "ClickUp promete ser a única ferramenta de produtividade que você precisa. Combina gerenciamento de projetos, documentos, planilhas, quadros brancos e muito mais em uma interface unificada. Com recursos como Goals, Time Tracking, Chat integrado e mais de 1000 integrações, é ideal para equipes que buscam consolidar suas ferramentas de trabalho.",
      icon: "⚡",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      link: "https://clickup.com"
    },
    {
      title: "Slack",
      description: "Plataforma de comunicação empresarial que organiza conversas em canais dedicados.",
      detailedDescription: "Slack revolucionou a comunicação empresarial com seus canais organizados por tópicos, mensagens diretas e integrações poderosas. Facilita a colaboração em tempo real com recursos como chamadas de vídeo, compartilhamento de arquivos, pesquisa avançada e bots personalizados. Essencial para equipes remotas e híbridas que precisam manter a comunicação fluida.",
      icon: "💬",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      link: "https://slack.com"
    },
    {
      title: "Todoist",
      description: "Organizador de tarefas e gestor de projetos que ajuda a manter o foco e produtividade.",
      detailedDescription: "Todoist é um gerenciador de tarefas elegante e poderoso que ajuda você a capturar e organizar tarefas no momento em que elas surgem. Com recursos como linguagem natural para agendamento, projetos hierárquicos, etiquetas e filtros, mantém você focado no que realmente importa. Ideal para profissionais que precisam de um sistema confiável de GTD (Getting Things Done).",
      icon: "📌",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
      link: "https://todoist.com"
    },
    {
      title: "Zapier",
      description: "Automação de fluxos de trabalho que conecta suas aplicações favoritas.",
      detailedDescription: "Zapier automatiza tarefas repetitivas conectando mais de 5000 aplicativos web. Crie 'Zaps' que fazem as ferramentas trabalharem juntas automaticamente, como adicionar novos leads do seu CRM ao email marketing, ou salvar anexos do Gmail no Google Drive. Perfeito para aumentar a eficiência eliminando trabalho manual entre diferentes plataformas.",
      icon: "🔗",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      link: "https://zapier.com",
      isNew: true
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-center">
            Organização, Processo e Produtividade
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed text-center mb-8">
            Descubra as melhores ferramentas para organizar fluxos de trabalho, aumentar produtividade e otimizar processos empresariais. Cada ferramenta foi cuidadosamente selecionada para ajudar você e sua equipe a alcançar máxima eficiência.
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

export default OrganizacaoProcessoProdutividade;
