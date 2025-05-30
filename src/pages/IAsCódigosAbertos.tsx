
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolCard from '@/components/ToolCard';

const IAsCódigosAbertos = () => {
  const toolsData = [
    {
      title: "TensorFlow",
      description: "Framework de machine learning mantido pelo Google, amplamente utilizado para treinamento e implantação de modelos de IA.",
      icon: "🔬"
    },
    {
      title: "Scikit-learn",
      description: "Biblioteca Python para aprendizado de máquina, ideal para análise preditiva de dados e prototipagem rápida.",
      icon: "📊"
    },
    {
      title: "CodeT5",
      description: "Modelo de linguagem para geração e compreensão de código, com código aberto disponível no GitHub.",
      icon: "💻",
      isNew: true
    },
    {
      title: "PolyCoder",
      description: "Modelo de IA treinado para gerar código em múltiplas linguagens, com dados e modelo abertos para a comunidade.",
      icon: "🔧"
    },
    {
      title: "GPT-Neo (EleutherAI)",
      description: "Alternativa open-source inspirada no GPT da OpenAI, voltada para geração de texto e código.",
      icon: "🧠"
    },
    {
      title: "Tabby",
      description: "Assistente de codificação de IA open-source, que pode ser hospedado localmente e integrado a IDEs como VSCode e JetBrains.",
      icon: "🐱",
      isNew: true
    },
    {
      title: "Cody (Sourcegraph)",
      description: "Assistente de IA para revisão, explicação e geração de código, com versão open-source.",
      icon: "👨‍💻"
    },
    {
      title: "Codeium",
      description: "Ferramenta gratuita e open-source para autocompletar código, geração e explicação de código.",
      icon: "⚡"
    },
    {
      title: "Blackbox AI",
      description: "Assistente de codificação com sugestões em tempo real e integração com várias ferramentas de desenvolvimento.",
      icon: "⬛"
    },
    {
      title: "Hugging Face",
      description: "Plataforma que reúne milhares de modelos de IA open-source, incluindo para geração de texto, código e imagens.",
      icon: "🤗"
    },
    {
      title: "GitHub",
      description: "Principal repositório de projetos de IA open-source, incluindo frameworks, modelos e datasets.",
      icon: "🐙"
    },
    {
      title: "AI Hub",
      description: "Diretório de ferramentas e recursos de IA gratuitos, incluindo projetos open-source.",
      icon: "🎯"
    },
    {
      title: "AI Directory",
      description: "Plataforma que lista ferramentas e recursos de IA para uso gratuito, com foco em soluções open-source.",
      icon: "📂"
    },
    {
      title: "There Is an AI for That",
      description: "Comunidade que reúne e avalia ferramentas de IA, facilitando a busca por IAs open-source para diferentes finalidades.",
      icon: "🔍",
      isNew: true
    },
    {
      title: "AI Scout",
      description: "Diretório atualizado de ferramentas de IA, incluindo open-source, para desenvolvedores.",
      icon: "🕵️"
    },
    {
      title: "Top AI Tools",
      description: "Lista categorizada de aplicativos e sites de IA, incluindo opções open-source para negócios, arte, educação e mais.",
      icon: "🏆"
    },
    {
      title: "Toolify.ai",
      description: "Plataforma comunitária para modelos, datasets e aplicações de machine learning open-source.",
      icon: "🛠️"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-center">
            IAs de Códigos Abertos
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed text-center mb-8">
            Descubra as melhores ferramentas de Inteligência Artificial open-source para desenvolvimento. 
            Frameworks, bibliotecas, modelos e assistentes de código que você pode usar, modificar e contribuir livremente.
          </p>
        </div>
      </section>

      {/* Tools Section */}
      <main className="pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {toolsData.map((tool, index) => (
              <ToolCard
                key={index}
                title={tool.title}
                description={tool.description}
                icon={tool.icon}
                category="IAs de Códigos Abertos"
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

export default IAsCódigosAbertos;
