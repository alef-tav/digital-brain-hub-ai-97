
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategorySection from '@/components/CategorySection';

const OrganizacaoProcessoProdutividade = () => {
  // Dados mock das ferramentas desta categoria
  const toolsData = [
    {
      title: "Notion",
      description: "Workspace tudo-em-um para notas, documentos, bases de dados e colaboração em equipe.",
      icon: "📝",
      isNew: true
    },
    {
      title: "Trello",
      description: "Ferramenta de gestão de projetos baseada em quadros Kanban para organizar tarefas.",
      icon: "📋"
    },
    {
      title: "Asana",
      description: "Plataforma de gestão de trabalho para acompanhar projetos e tarefas da equipe.",
      icon: "✅"
    },
    {
      title: "Monday.com",
      description: "Sistema operacional de trabalho que potencializa equipes para executar projetos e fluxos de trabalho.",
      icon: "📊"
    },
    {
      title: "ClickUp",
      description: "Plataforma de produtividade tudo-em-um que substitui todas as outras ferramentas de trabalho.",
      icon: "⚡"
    },
    {
      title: "Slack",
      description: "Plataforma de comunicação empresarial que organiza conversas em canais dedicados.",
      icon: "💬"
    },
    {
      title: "Todoist",
      description: "Organizador de tarefas e gestor de projetos que ajuda a manter o foco e produtividade.",
      icon: "📌"
    },
    {
      title: "Zapier",
      description: "Automação de fluxos de trabalho que conecta suas aplicações favoritas.",
      icon: "🔗",
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
          <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed text-center">
            Ferramentas para organizar fluxos de trabalho, aumentar produtividade e otimizar processos empresariais.
          </p>
        </div>
      </section>

      {/* Tools Section */}
      <main className="pb-12">
        <CategorySection
          title="Ferramentas Recomendadas"
          tools={toolsData}
        />
      </main>

      <Footer />
    </div>
  );
};

export default OrganizacaoProcessoProdutividade;
