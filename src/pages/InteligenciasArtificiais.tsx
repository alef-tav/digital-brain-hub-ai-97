
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolBlogCard from '@/components/ToolBlogCard';

const InteligenciasArtificiais = () => {
  const tools = [
    {
      title: "ChatGPT",
      description: "O assistente de IA mais popular do mundo",
      detailedDescription: "ChatGPT é um modelo de linguagem avançado desenvolvido pela OpenAI que pode ajudar com uma ampla gama de tarefas, desde responder perguntas até escrever código e criar conteúdo.",
      icon: "🤖",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      link: "https://chat.openai.com/",
      category: "Inteligências Artificiais",
      isNew: true
    },
    {
      title: "AIPRM for ChatGPT",
      description: "Extensão que potencializa o ChatGPT com prompts prontos",
      detailedDescription: "AIPRM é uma extensão para Chrome que adiciona milhares de prompts curados ao ChatGPT, facilitando tarefas específicas e melhorando a produtividade.",
      icon: "🔧",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
      link: "https://chromewebstore.google.com/detail/aiprm-for-chatgpt/ojnbohmppadfgpejeebfnmnknjdlckgj",
      category: "Inteligências Artificiais"
    },
    {
      title: "Claude AI",
      description: "Assistente de IA da Anthropic focado em segurança",
      detailedDescription: "Claude é um assistente de IA desenvolvido pela Anthropic, conhecido por suas respostas úteis, inofensivas e honestas, com foco especial em segurança e alinhamento.",
      icon: "🧠",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      link: "https://claude.ai/",
      category: "Inteligências Artificiais",
      isNew: true
    },
    {
      title: "Manus",
      description: "Plataforma de IA para automação de tarefas",
      detailedDescription: "Manus oferece ferramentas de IA para automatizar processos de trabalho e melhorar a produtividade através de inteligência artificial avançada.",
      icon: "⚡",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      link: "https://manus.im/app",
      category: "Inteligências Artificiais"
    },
    {
      title: "ChatHub",
      description: "Use múltiplas IAs lado a lado",
      detailedDescription: "ChatHub permite conversar com GPT-4, Gemini, Claude e outras IAs simultaneamente, comparando respostas e escolhendo a melhor para cada situação.",
      icon: "🔄",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      link: "https://chromewebstore.google.com/detail/chathub-gpt-4-gemini-e-cl/iaakpnchhognanibcahlpcplchdfmgma",
      category: "Inteligências Artificiais"
    },
    {
      title: "Qwen Chat",
      description: "Modelo de IA chinês avançado",
      detailedDescription: "Qwen é um modelo de linguagem grande desenvolvido pela Alibaba Cloud, oferecendo capacidades avançadas de conversação e compreensão em múltiplos idiomas.",
      icon: "🈯",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
      link: "https://chat.qwen.ai/",
      category: "Inteligências Artificiais"
    },
    {
      title: "Genspark",
      description: "Super agente de IA tudo-em-um",
      detailedDescription: "Genspark é um assistente de IA abrangente que combina múltiplas capacidades em uma única plataforma, oferecendo soluções completas para diversas necessidades.",
      icon: "⭐",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=300&fit=crop",
      link: "https://www.genspark.ai/",
      category: "Inteligências Artificiais"
    },
    {
      title: "Grok",
      description: "IA da X (Twitter) com acesso em tempo real",
      detailedDescription: "Grok é o assistente de IA da X (anteriormente Twitter) que tem acesso a informações em tempo real da plataforma, oferecendo insights atualizados.",
      icon: "🚀",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=300&fit=crop",
      link: "https://grok.com/",
      category: "Inteligências Artificiais"
    },
    {
      title: "GitHub Copilot",
      description: "Assistente de código alimentado por IA",
      detailedDescription: "GitHub Copilot é um assistente de programação que usa IA para sugerir código e funções inteiras em tempo real, aumentando drasticamente a produtividade dos desenvolvedores.",
      icon: "💻",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      link: "https://github.com/copilot",
      category: "Inteligências Artificiais"
    },
    {
      title: "Ninja AI",
      description: "Agente de IA para produtividade ilimitada",
      detailedDescription: "Ninja AI é uma plataforma completa que oferece múltiplas ferramentas de IA em um só lugar, focada em maximizar a produtividade e eficiência do trabalho.",
      icon: "🥷",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
      link: "https://myninja.ai/",
      category: "Inteligências Artificiais"
    },
    {
      title: "Venice AI",
      description: "IA privada e sem censura",
      detailedDescription: "Venice AI oferece acesso a modelos de IA com foco em privacidade e liberdade de expressão, permitindo conversas sem restrições ou censura.",
      icon: "🔒",
      image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=400&h=300&fit=crop",
      link: "https://venice.ai/",
      category: "Inteligências Artificiais"
    },
    {
      title: "Inner AI",
      description: "Assistente de IA personalizado",
      detailedDescription: "Inner AI oferece uma experiência personalizada de IA que se adapta ao seu estilo de trabalho e necessidades específicas, proporcionando assistência mais eficaz.",
      icon: "🔮",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      link: "https://app.innerai.com/",
      category: "Inteligências Artificiais"
    },
    {
      title: "Poe",
      description: "Múltiplas IAs em uma plataforma",
      detailedDescription: "Poe da Quora permite acesso a diversos modelos de IA incluindo GPT-4, Claude, e outros, oferecendo uma experiência unificada para comparar diferentes assistentes.",
      icon: "🎭",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      link: "https://poe.com/",
      category: "Inteligências Artificiais"
    },
    {
      title: "Google Learn About",
      description: "IA educacional do Google",
      detailedDescription: "Learn About é uma ferramenta experimental do Google que usa IA para criar experiências de aprendizado personalizadas e interativas sobre qualquer tópico.",
      icon: "📚",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
      link: "https://learning.google.com/experiments/learn-about/signup",
      category: "Inteligências Artificiais"
    },
    {
      title: "Merlin AI",
      description: "Assistente de IA para navegação web",
      detailedDescription: "Merlin AI oferece assistência de IA integrada ao navegador, permitindo resumir artigos, responder perguntas e gerar conteúdo em qualquer página da web.",
      icon: "🧙‍♂️",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      link: "https://www.getmerlin.in/pt/chat",
      category: "Inteligências Artificiais"
    },
    {
      title: "NVIDIA Nemotron",
      description: "Modelo de IA avançado da NVIDIA",
      detailedDescription: "Llama-3.1-Nemotron-70B é um modelo de linguagem de alta performance desenvolvido pela NVIDIA, otimizado para tarefas complexas e raciocínio avançado.",
      icon: "🎮",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      link: "https://build.nvidia.com/nvidia/llama-3_1-nemotron-70b-instruct",
      category: "Inteligências Artificiais"
    },
    {
      title: "Gemini Google",
      description: "IA multimodal avançada do Google",
      detailedDescription: "Gemini é o modelo de IA mais avançado do Google, capaz de processar texto, imagem, áudio e vídeo, oferecendo capacidades multimodais excepcionais.",
      icon: "♊",
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400&h=300&fit=crop",
      link: "https://gemini.google.com/",
      category: "Inteligências Artificiais",
      isNew: true
    },
    {
      title: "Meta AI",
      description: "Assistente de IA do Facebook/Meta",
      detailedDescription: "Meta AI é o assistente inteligente da Meta, integrado às plataformas da empresa e oferecendo capacidades avançadas de conversação e criação de conteúdo.",
      icon: "📘",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=300&fit=crop",
      link: "https://www.meta.ai/",
      category: "Inteligências Artificiais"
    },
    {
      title: "Coze",
      description: "Plataforma para desenvolvimento de chatbots com IA",
      detailedDescription: "Coze permite criar chatbots personalizados usando IA avançada, oferecendo ferramentas de desenvolvimento sem código para automação e atendimento.",
      icon: "🤖",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
      link: "https://www.coze.com/home",
      category: "Inteligências Artificiais"
    },
    {
      title: "Sider",
      description: "Barra lateral do ChatGPT com GPTs",
      detailedDescription: "Sider integra ChatGPT diretamente no navegador através de uma barra lateral, oferecendo acesso rápido a múltiplos modelos de IA em qualquer página web.",
      icon: "📎",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      link: "https://sider.ai/",
      category: "Inteligências Artificiais"
    },
    {
      title: "Perplexity",
      description: "Mecanismo de busca com IA",
      detailedDescription: "Perplexity combina busca web com IA para fornecer respostas precisas e atualizadas, citando fontes e oferecendo uma experiência de pesquisa revolucionária.",
      icon: "🔍",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop",
      link: "https://www.perplexity.ai/",
      category: "Inteligências Artificiais"
    },
    {
      title: "NotebookLM",
      description: "Caderno inteligente do Google",
      detailedDescription: "NotebookLM é uma ferramenta de pesquisa e escrita assistida por IA do Google que ajuda a organizar informações e gerar insights a partir de documentos.",
      icon: "📓",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
      link: "https://notebooklm.google.com/",
      category: "Inteligências Artificiais"
    },
    {
      title: "Mistral AI",
      description: "Modelos de IA franceses de código aberto",
      detailedDescription: "Mistral AI oferece modelos de linguagem eficientes e performáticos, desenvolvidos na França com foco em transparência e soberania tecnológica europeia.",
      icon: "🇫🇷",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      link: "https://console.mistral.ai/",
      category: "Inteligências Artificiais"
    },
    {
      title: "Google AI Studio",
      description: "Plataforma de desenvolvimento de IA do Google",
      detailedDescription: "Google AI Studio oferece acesso direto aos modelos Gemini do Google para desenvolvedores, permitindo prototipagem rápida e integração de IA em aplicações.",
      icon: "🛠️",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      link: "https://aistudio.google.com/",
      category: "Inteligências Artificiais"
    },
    {
      title: "PopAI",
      description: "Workspace pessoal de IA",
      detailedDescription: "PopAI oferece um espaço de trabalho completo com múltiplas ferramentas de IA integradas, permitindo produtividade máxima em um ambiente unificado.",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=300&fit=crop",
      link: "https://www.popai.pro/",
      category: "Inteligências Artificiais"
    },
    {
      title: "ChatMax",
      description: "Assistente de chatbot com IA",
      detailedDescription: "ChatMax oferece capacidades avançadas de conversação e assistência virtual, focando em experiências de chat naturais e eficientes.",
      icon: "💬",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
      link: "https://aichatmax.com/pt",
      category: "Inteligências Artificiais"
    },
    {
      title: "YouLearn",
      description: "Tutor de IA personalizado",
      detailedDescription: "YouLearn utiliza IA para criar experiências de aprendizado personalizadas, adaptando-se ao ritmo e estilo de cada estudante para maximizar o aprendizado.",
      icon: "🎓",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
      link: "https://app.youlearn.ai/pt/space/4875736af85545ac",
      category: "Inteligências Artificiais"
    },
    {
      title: "MaxAI",
      description: "Chat de IA gratuito online",
      detailedDescription: "MaxAI oferece acesso gratuito a múltiplos modelos de IA, permitindo conversas e tarefas variadas sem limitações, ideal para uso casual e profissional.",
      icon: "🆓",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=300&fit=crop",
      link: "https://www.maxai.me/ai-tools/ai-chat/",
      category: "Inteligências Artificiais"
    },
    {
      title: "AnonChatGPT",
      description: "ChatGPT anônimo online",
      detailedDescription: "AnonChatGPT oferece acesso anônimo ao ChatGPT sem necessidade de registro, garantindo privacidade total nas conversas com IA.",
      icon: "🕶️",
      image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=400&h=300&fit=crop",
      link: "https://anonchatgpt.com/",
      category: "Inteligências Artificiais"
    },
    {
      title: "AgentGPT",
      description: "Agente autônomo de IA",
      detailedDescription: "AgentGPT permite criar agentes autônomos de IA que podem executar tarefas complexas de forma independente, quebrando objetivos em sub-tarefas.",
      icon: "🤖",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      link: "https://agentgpt.reworkd.ai/pt",
      category: "Inteligências Artificiais"
    },
    {
      title: "Bing AI",
      description: "IA integrada ao buscador Bing",
      detailedDescription: "Bing AI integra capacidades avançadas de conversação diretamente no mecanismo de busca da Microsoft, oferecendo respostas contextuais e atualizadas.",
      icon: "🔵",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      link: "https://www.bing.com/search?q=Bing+AI&showconv=1",
      category: "Inteligências Artificiais"
    },
    {
      title: "Bing Image Creator",
      description: "Gerador de imagens por IA do Bing",
      detailedDescription: "Bing Image Creator usa IA para gerar imagens a partir de descrições de texto, oferecendo criação visual rápida e gratuita integrada ao ecossistema Microsoft.",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      link: "https://www.bing.com/images/create",
      category: "Inteligências Artificiais"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Inteligências Artificiais (Geral)
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Explore os principais assistentes e ferramentas de Inteligência Artificial disponíveis. 
              De ChatGPT a modelos especializados, encontre a IA perfeita para suas necessidades.
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

export default InteligenciasArtificiais;
