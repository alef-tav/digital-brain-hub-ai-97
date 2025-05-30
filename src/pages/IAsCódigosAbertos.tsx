
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolBlogCard from '@/components/ToolBlogCard';

const IAsCódigosAbertos = () => {
  // Dados completos das ferramentas de IAs de Códigos Abertos
  const toolsData = [
    {
      title: "TensorFlow",
      description: "Framework de machine learning mantido pelo Google, amplamente utilizado para treinamento e implantação de modelos de IA.",
      detailedDescription: "TensorFlow é uma plataforma de código aberto para machine learning desenvolvida pelo Google. Oferece um ecossistema abrangente de ferramentas, bibliotecas e recursos da comunidade que permite aos desenvolvedores criar e implantar aplicações alimentadas por ML facilmente. É amplamente usado tanto em pesquisa quanto em produção, desde smartphones até data centers.",
      icon: "🔬",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      link: "https://tensorflow.org"
    },
    {
      title: "Scikit-learn",
      description: "Biblioteca Python para aprendizado de máquina, ideal para análise preditiva de dados e prototipagem rápida.",
      detailedDescription: "Scikit-learn é uma biblioteca de machine learning simples e eficiente para Python. Construída sobre NumPy, SciPy e matplotlib, oferece ferramentas acessíveis e reutilizáveis para mineração e análise de dados. Inclui algoritmos de classificação, regressão, clustering e redução de dimensionalidade, sendo ideal para prototipagem rápida e análise exploratória de dados.",
      icon: "📊",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      link: "https://scikit-learn.org"
    },
    {
      title: "CodeT5",
      description: "Modelo de linguagem para geração e compreensão de código, com código aberto disponível no GitHub.",
      detailedDescription: "CodeT5 é um modelo de linguagem pré-treinado especificamente para tarefas relacionadas a código. Baseado na arquitetura T5, pode realizar múltiplas tarefas como geração de código, summarização, tradução entre linguagens de programação e detecção de defeitos. Representa um avanço significativo na aplicação de modelos de linguagem para desenvolvimento de software.",
      icon: "💻",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      link: "https://github.com/salesforce/CodeT5",
      isNew: true
    },
    {
      title: "PolyCoder",
      description: "Modelo de IA treinado para gerar código em múltiplas linguagens, com dados e modelo abertos para a comunidade.",
      detailedDescription: "PolyCoder é um modelo de linguagem open-source treinado em uma grande base de código de 12 linguagens de programação. Desenvolvido pela Carnegie Mellon University, demonstra capacidades competitivas na geração de código, especialmente em C, sendo uma alternativa open-source aos modelos proprietários como GitHub Copilot.",
      icon: "🔧",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop",
      link: "https://github.com/VHellendoorn/Code-LMs"
    },
    {
      title: "GPT-Neo (EleutherAI)",
      description: "Alternativa open-source inspirada no GPT da OpenAI, voltada para geração de texto e código.",
      detailedDescription: "GPT-Neo é uma implementação open-source de modelos de linguagem semelhantes ao GPT-3, desenvolvida pela EleutherAI. Oferece modelos com diferentes tamanhos (125M a 20B parâmetros) e é treinado em uma versão curada da internet. Representa um marco importante na democratização de modelos de linguagem de grande escala.",
      icon: "🧠",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      link: "https://github.com/EleutherAI/gpt-neo"
    },
    {
      title: "Tabby",
      description: "Assistente de codificação de IA open-source, que pode ser hospedado localmente e integrado a IDEs como VSCode e JetBrains.",
      detailedDescription: "Tabby é um assistente de codificação de IA auto-hospedado que oferece autocompletar código, chat com base de código e suporte a múltiplas linguagens. Pode ser implantado localmente, garantindo privacidade dos dados, e se integra facilmente com IDEs populares. É uma alternativa open-source ao GitHub Copilot.",
      icon: "🐱",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      link: "https://tabby.tabbyml.com",
      isNew: true
    },
    {
      title: "Cody (Sourcegraph)",
      description: "Assistente de IA para revisão, explicação e geração de código, com versão open-source.",
      detailedDescription: "Cody é um assistente de codificação de IA que usa o contexto completo da sua base de código para ajudar você a escrever e entender código mais rapidamente. Oferece recursos como chat inteligente, comandos personalizados, autocompletar contextual e pode ser usado tanto na versão cloud quanto self-hosted.",
      icon: "👨‍💻",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop",
      link: "https://sourcegraph.com/cody"
    },
    {
      title: "Codeium",
      description: "Ferramenta gratuita e open-source para autocompletar código, geração e explicação de código.",
      detailedDescription: "Codeium é um assistente de codificação de IA gratuito que oferece autocompletar inteligente, geração de código e funcionalidades de chat. Suporta mais de 70 linguagens de programação e se integra com dezenas de IDEs. Oferece recursos premium de forma gratuita, incluindo suggestions ilimitadas e chat com IA.",
      icon: "⚡",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop",
      link: "https://codeium.com"
    },
    {
      title: "Blackbox AI",
      description: "Assistente de codificação com sugestões em tempo real e integração com várias ferramentas de desenvolvimento.",
      detailedDescription: "Blackbox AI é um assistente de codificação que oferece autocompletar código, geração de funções e respostas a perguntas de programação. Suporta múltiplas linguagens e se integra com IDEs populares. Inclui recursos como busca de código, explicação de código e geração de commits automáticos.",
      icon: "⬛",
      image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=600&h=400&fit=crop",
      link: "https://blackbox.ai"
    },
    {
      title: "Hugging Face",
      description: "Plataforma que reúne milhares de modelos de IA open-source, incluindo para geração de texto, código e imagens.",
      detailedDescription: "Hugging Face é a plataforma líder para modelos de machine learning open-source. Hospeda mais de 200.000 modelos, 40.000 datasets e 40.000 aplicações de ML. Oferece ferramentas como Transformers, Datasets e Spaces, facilitando o desenvolvimento, treinamento e implantação de modelos de IA. É considerado o 'GitHub da IA'.",
      icon: "🤗",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      link: "https://huggingface.co"
    },
    {
      title: "GitHub",
      description: "Principal repositório de projetos de IA open-source, incluindo frameworks, modelos e datasets.",
      detailedDescription: "GitHub é a maior plataforma de desenvolvimento colaborativo do mundo, hospedando milhões de projetos open-source de IA. Desde frameworks como TensorFlow e PyTorch até modelos pré-treinados e datasets, GitHub é o ponto central para descobrir, contribuir e colaborar em projetos de inteligência artificial. Inclui recursos como GitHub Copilot e GitHub Actions para CI/CD.",
      icon: "🐙",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=400&fit=crop",
      link: "https://github.com"
    },
    {
      title: "AI Hub",
      description: "Diretório de ferramentas e recursos de IA gratuitos, incluindo projetos open-source.",
      detailedDescription: "AI Hub é um diretório abrangente que cataloga ferramentas, recursos e projetos de inteligência artificial, com foco especial em soluções open-source e gratuitas. Organiza recursos por categoria, facilitando a descoberta de bibliotecas, frameworks, modelos pré-treinados e datasets para diferentes aplicações de IA.",
      icon: "🎯",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      link: "https://aihub.ml"
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
            Descubra as melhores ferramentas de inteligência artificial de código aberto. Modelos, frameworks e plataformas que democratizam o acesso à IA, permitindo inovação colaborativa e transparente no desenvolvimento de soluções inteligentes.
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

export default IAsCódigosAbertos;
