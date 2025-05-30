
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolBlogCard from '@/components/ToolBlogCard';

const IAsCódigosAbertos = () => {
  const toolsData = [
    {
      title: "TensorFlow",
      description: "Framework de machine learning mantido pelo Google, amplamente utilizado para treinamento e implantação de modelos de IA.",
      detailedDescription: "TensorFlow é um framework open-source desenvolvido pelo Google para machine learning e deep learning. Oferece ferramentas flexíveis para desenvolver e treinar modelos de IA em diversas plataformas. Com uma ampla comunidade e documentação extensa, é ideal tanto para pesquisa quanto para produção, suportando desde prototipagem rápida até implantação em larga escala.",
      icon: "🔬",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      link: "https://tensorflow.org/"
    },
    {
      title: "Scikit-learn",
      description: "Biblioteca Python para aprendizado de máquina, ideal para análise preditiva de dados e prototipagem rápida.",
      detailedDescription: "Scikit-learn é uma biblioteca Python essencial para machine learning, oferecendo algoritmos simples e eficientes para análise de dados. Inclui ferramentas para classificação, regressão, clustering, redução de dimensionalidade e seleção de modelos. É perfeita para iniciantes e profissionais que precisam de soluções rápidas e confiáveis para projetos de ciência de dados.",
      icon: "📊",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      link: "https://scikit-learn.org/"
    },
    {
      title: "CodeT5",
      description: "Modelo de linguagem para geração e compreensão de código, com código aberto disponível no GitHub.",
      detailedDescription: "CodeT5 é um modelo de linguagem pré-treinado especificamente para tarefas relacionadas a código. Capaz de gerar, traduzir, resumir e explicar código em múltiplas linguagens de programação. Baseado na arquitetura T5, oferece excelente performance em tarefas como completar código, tradução entre linguagens e documentação automática.",
      icon: "💻",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      link: "https://github.com/salesforce/CodeT5",
      isNew: true
    },
    {
      title: "PolyCoder",
      description: "Modelo de IA treinado para gerar código em múltiplas linguagens, com dados e modelo abertos para a comunidade.",
      detailedDescription: "PolyCoder é um modelo open-source para geração de código desenvolvido pela Carnegie Mellon University. Treinado em um vasto corpus de código público, suporta mais de 12 linguagens de programação. Oferece transparência total com datasets e modelos públicos, permitindo pesquisa reproduzível e desenvolvimento colaborativo na área de IA para programação.",
      icon: "🔧",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      link: "https://github.com/VHellendoorn/Code-LMs"
    },
    {
      title: "GPT-Neo (EleutherAI)",
      description: "Alternativa open-source inspirada no GPT da OpenAI, voltada para geração de texto e código.",
      detailedDescription: "GPT-Neo é uma implementação open-source de modelos de linguagem semelhantes ao GPT, desenvolvida pela EleutherAI. Oferece modelos de diferentes tamanhos treinados em dados públicos, proporcionando capacidades de geração de texto e código. É uma alternativa transparente e acessível para pesquisadores e desenvolvedores que precisam de modelos de linguagem poderosos.",
      icon: "🧠",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      link: "https://github.com/EleutherAI/gpt-neo"
    },
    {
      title: "Tabby",
      description: "Assistente de codificação de IA open-source, que pode ser hospedado localmente e integrado a IDEs como VSCode e JetBrains.",
      detailedDescription: "Tabby é um assistente de IA para codificação que pode ser auto-hospedado, oferecendo privacidade e controle total sobre seus dados. Integra-se perfeitamente com IDEs populares como VSCode, Neovim e JetBrains. Fornece sugestões de código inteligentes, autocompletar e pode ser personalizado para projetos específicos, mantendo a segurança dos dados corporativos.",
      icon: "🐱",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      link: "https://github.com/TabbyML/tabby",
      isNew: true
    },
    {
      title: "Cody (Sourcegraph)",
      description: "Assistente de IA para revisão, explicação e geração de código, com versão open-source.",
      detailedDescription: "Cody da Sourcegraph é um assistente de IA que entende seu código e pode ajudar com explicações, geração, testes e refatoração. Integra-se com o contexto completo do seu repositório, oferecendo sugestões mais precisas e contextualmente relevantes. A versão open-source permite customização e integração em workflows de desenvolvimento existentes.",
      icon: "👨‍💻",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      link: "https://github.com/sourcegraph/cody"
    },
    {
      title: "Codeium",
      description: "Ferramenta gratuita e open-source para autocompletar código, geração e explicação de código.",
      detailedDescription: "Codeium oferece autocompletar de código alimentado por IA, completamente gratuito para desenvolvedores individuais. Suporta mais de 70 linguagens de programação e integra-se com IDEs populares. Além do autocompletar, oferece chat para explicações de código, geração de testes e refatoração, tudo mantendo a privacidade e segurança dos dados.",
      icon: "⚡",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      link: "https://codeium.com/"
    },
    {
      title: "Blackbox AI",
      description: "Assistente de codificação com sugestões em tempo real e integração com várias ferramentas de desenvolvimento.",
      detailedDescription: "Blackbox AI é um assistente de codificação que oferece sugestões de código em tempo real, geração de código a partir de comentários e busca de código em repositórios. Integra-se com diversos IDEs e oferece recursos como extração de código de imagens, tradução entre linguagens e otimização de performance. Focado em aumentar a produtividade do desenvolvedor.",
      icon: "⬛",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      link: "https://blackbox.ai/"
    },
    {
      title: "Hugging Face",
      description: "Plataforma que reúne milhares de modelos de IA open-source, incluindo para geração de texto, código e imagens.",
      detailedDescription: "Hugging Face é a principal plataforma para modelos de IA open-source, oferecendo uma vasta biblioteca de modelos pré-treinados para diversas tarefas. Inclui ferramentas para fine-tuning, hospedagem de modelos, datasets e uma comunidade ativa. É essencial para desenvolvedores que trabalham com processamento de linguagem natural, visão computacional e geração de código.",
      icon: "🤗",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      link: "https://huggingface.co/"
    },
    {
      title: "GitHub",
      description: "Principal repositório de projetos de IA open-source, incluindo frameworks, modelos e datasets.",
      detailedDescription: "GitHub é a maior plataforma de hospedagem de código do mundo e o principal repositório para projetos de IA open-source. Oferece ferramentas de colaboração, controle de versão e descoberta de projetos. É essencial para encontrar frameworks, modelos, datasets e contribuir para a comunidade open-source de IA. Inclui recursos como GitHub Copilot para assistência na codificação.",
      icon: "🐙",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      link: "https://github.com/"
    },
    {
      title: "AI Hub",
      description: "Diretório de ferramentas e recursos de IA gratuitos, incluindo projetos open-source.",
      detailedDescription: "AI Hub é um diretório abrangente que cataloga ferramentas e recursos de IA gratuitos e open-source. Organiza projetos por categoria, funcionalidade e tipo de licença, facilitando a descoberta de soluções adequadas para diferentes necessidades. Inclui avaliações da comunidade, documentação e links diretos para repositórios e recursos relacionados.",
      icon: "🎯",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      link: "https://aihub.org/"
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
