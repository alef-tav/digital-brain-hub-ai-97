
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolBlogCard from '@/components/ToolBlogCard';

const FerramentasVideo = () => {
  const tools = [
    {
      title: "Vozo",
      description: "Clona sua voz e sincroniza sua voz com o vídeo",
      detailedDescription: "Vozo é uma ferramenta revolucionária que permite clonar sua voz e sincronizar perfeitamente com vídeos, criando conteúdo autêntico e personalizado com tecnologia de IA avançada.",
      icon: "🗣️",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=300&fit=crop",
      link: "https://app.vozo.ai/?folder=&active=voiceAll",
      category: "Ferramentas de Vídeo",
      isNew: true
    },
    {
      title: "LTX Studio",
      description: "Visualize seus conceitos em vídeos profissionais",
      detailedDescription: "LTX Studio oferece uma plataforma completa para transformar conceitos e ideias em vídeos profissionais de alta qualidade, com ferramentas avançadas de edição e produção.",
      icon: "🎬",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop",
      link: "https://ltx.studio/",
      category: "Ferramentas de Vídeo",
      isNew: true
    },
    {
      title: "Transitional Hooks",
      description: "Ganchos virais para vídeos de redes sociais",
      detailedDescription: "Crie ganchos virais e transições cativantes para seus vídeos de redes sociais, aumentando o engajamento e retenção da audiência com técnicas comprovadas.",
      icon: "🎣",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
      link: "https://transitionalhooks.com/",
      category: "Ferramentas de Vídeo"
    },
    {
      title: "VEED.IO",
      description: "Editor de vídeo online com IA - rápido e gratuito",
      detailedDescription: "VEED.IO é um editor de vídeo online poderoso que combina simplicidade com recursos avançados de IA, permitindo criar vídeos profissionais diretamente no navegador.",
      icon: "✂️",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop",
      link: "https://www.veed.io/",
      category: "Ferramentas de Vídeo"
    },
    {
      title: "Jitter",
      description: "Templates gratuitos de motion graphics",
      detailedDescription: "Jitter oferece uma biblioteca de templates gratuitos de motion graphics, permitindo criar animações profissionais e elementos visuais dinâmicos para seus projetos.",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      link: "https://jitter.video/templates/",
      category: "Ferramentas de Vídeo"
    },
    {
      title: "Rask AI",
      description: "Tradução de vídeo para qualquer língua com IA",
      detailedDescription: "Rask AI é a ferramenta líder em localização e dublagem de vídeo, permitindo traduzir seus vídeos para qualquer idioma mantendo a qualidade e naturalidade da narração.",
      icon: "🌍",
      image: "https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?w=400&h=300&fit=crop",
      link: "https://pt-br.rask.ai/",
      category: "Ferramentas de Vídeo"
    },
    {
      title: "Movavi Video Editor",
      description: "Software profissional de edição de vídeo",
      detailedDescription: "Movavi Video Editor é um software completo de edição de vídeo com recursos profissionais, oferecendo todas as ferramentas necessárias para criar vídeos de alta qualidade.",
      icon: "🎞️",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop",
      link: "https://www.movavi.com/pt/video-editor-plus/",
      category: "Ferramentas de Vídeo"
    },
    {
      title: "Vidu Studio",
      description: "Cria vídeos profissionais por imagem",
      detailedDescription: "Vidu Studio permite transformar imagens estáticas em vídeos dinâmicos e profissionais, utilizando IA para adicionar movimento e vida às suas criações visuais.",
      icon: "🖼️",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      link: "https://www.vidu.studio/login?redirect=%2Fcreate%2Fcharacter2video",
      category: "Ferramentas de Vídeo"
    },
    {
      title: "RecCloud",
      description: "Várias ferramentas de vídeo em uma plataforma",
      detailedDescription: "RecCloud oferece um conjunto completo de ferramentas de vídeo online, incluindo edição, conversão, compressão e muito mais, tudo em uma plataforma integrada.",
      icon: "☁️",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop",
      link: "https://reccloud.com/pt/pricing?position=eleven-activity",
      category: "Ferramentas de Vídeo"
    },
    {
      title: "Podfy.ai",
      description: "Transforme conteúdo em vídeos e shorts impressionantes",
      detailedDescription: "Podfy.ai é uma ferramenta de repurposing de conteúdo que transforma textos, artigos e outros materiais em vídeos e shorts envolventes para redes sociais.",
      icon: "🎯",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
      link: "https://www.podfy.ai/lp-milton?utm_source=milton",
      category: "Ferramentas de Vídeo",
      isNew: true
    },
    {
      title: "Creatify",
      description: "Crie anúncios em vídeo envolventes com IA",
      detailedDescription: "Creatify permite criar anúncios em vídeo altamente envolventes usando inteligência artificial, otimizando campanhas publicitárias para máximo impacto e conversão.",
      icon: "📺",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      link: "https://creatify.ai/",
      category: "Ferramentas de Vídeo"
    },
    {
      title: "Fliki",
      description: "Geração de textos em vídeos com vozes IA",
      detailedDescription: "Fliki transforma textos em vídeos profissionais com vozes geradas por IA, oferecendo uma maneira rápida e eficiente de criar conteúdo audiovisual de qualidade.",
      icon: "📝",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop",
      link: "https://fliki.ai/",
      category: "Ferramentas de Vídeo"
    },
    {
      title: "Animaker",
      description: "Cria vídeos animados profissionais",
      detailedDescription: "Animaker é uma plataforma completa para criação de vídeos animados profissionais, oferecendo templates, personagens e ferramentas para dar vida às suas ideias.",
      icon: "🎪",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      link: "https://accounts.animaker.com/login/animaker/?path=/editproject/epYp",
      category: "Ferramentas de Vídeo"
    },
    {
      title: "Vidgenie.ai",
      description: "Gerador inteligente de vídeos",
      detailedDescription: "Vidgenie.ai é um gerador inteligente que cria vídeos automaticamente usando IA, simplificando o processo de produção de conteúdo visual para criadores e empresas.",
      icon: "🧞",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      link: "https://app.vidgenie.ai/home",
      category: "Ferramentas de Vídeo",
      isNew: true
    },
    {
      title: "Nexus Clips",
      description: "Ferramenta profissional de clips e cortes",
      detailedDescription: "Nexus Clips oferece ferramentas profissionais para criar clips e cortes precisos de vídeos, ideal para highlights, montagens e conteúdo para redes sociais.",
      icon: "✂️",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop",
      link: "https://nexusclips.com/pt/home?via=clayton",
      category: "Ferramentas de Vídeo"
    },
    {
      title: "SSSSTik",
      description: "Baixa vídeos do TikTok sem marca d'água",
      detailedDescription: "SSSSTik permite baixar vídeos do TikTok sem marca d'água de forma rápida e gratuita, mantendo a qualidade original do conteúdo para reutilização.",
      icon: "📱",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
      link: "https://ssstik.io/pt",
      category: "Ferramentas de Vídeo"
    },
    {
      title: "Snapinsta",
      description: "Baixa vídeos do Instagram, Reels e IGTV",
      detailedDescription: "Snapinsta é uma ferramenta gratuita para baixar vídeos, Reels e IGTV do Instagram, preservando a qualidade original e facilitando o reaproveitamento de conteúdo.",
      icon: "📷",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
      link: "https://snapinsta.app/pt",
      category: "Ferramentas de Vídeo"
    },
    {
      title: "GhostCut",
      description: "Tradução automática, remove texto inteligente, recriador de vídeo",
      detailedDescription: "GhostCut oferece recursos avançados de IA para tradução automática de vídeos, remoção inteligente de texto e recriação de conteúdo visual de forma automática.",
      icon: "👻",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      link: "https://jollytoday.com/home/",
      category: "Ferramentas de Vídeo",
      isNew: true
    },
    {
      title: "Video Effects",
      description: "Efeitos para vídeos Instagram e YouTube",
      detailedDescription: "Video Effects oferece uma biblioteca de efeitos visuais especializados para vídeos do Instagram e YouTube, melhorando a qualidade e atratividade do seu conteúdo.",
      icon: "✨",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      link: "https://videoeffects.com/orders/new/instagram-profile-banner-4-light?source=browse",
      category: "Ferramentas de Vídeo"
    },
    {
      title: "Vidget",
      description: "Transforme visualizações de vídeos em vendas",
      detailedDescription: "Vidget é uma plataforma que ajuda a transformar visualizações de vídeos em vendas efetivas, otimizando o funil de conversão através de vídeos estratégicos.",
      icon: "💰",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      link: "https://vidget.com.br/",
      category: "Ferramentas de Vídeo"
    },
    {
      title: "MakeReels.ai",
      description: "Crie e publique Reels automaticamente com sua voz clonada",
      detailedDescription: "MakeReels.ai permite criar e publicar Reels automaticamente usando sua voz clonada, automatizando o processo de criação de conteúdo para redes sociais.",
      icon: "🎬",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
      link: "https://makereels.ai/pt",
      category: "Ferramentas de Vídeo",
      isNew: true
    },
    {
      title: "VideoExpress.ai",
      description: "Solução completa de texto para vídeo com IA",
      detailedDescription: "VideoExpress.ai oferece uma solução completa para transformar textos em vídeos profissionais usando IA, simplificando a criação de conteúdo audiovisual.",
      icon: "⚡",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop",
      link: "https://videoexpress.ai/gdeal/",
      category: "Ferramentas de Vídeo"
    },
    {
      title: "CapCut Online",
      description: "Editor de vídeo online gratuito",
      detailedDescription: "CapCut Online é um editor de vídeo gratuito e poderoso que funciona diretamente no navegador, oferecendo recursos profissionais para criação de conteúdo.",
      icon: "🎬",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop",
      link: "https://www.capcut.com/my-edit?enter_from=signup&start_tab=video",
      category: "Ferramentas de Vídeo"
    },
    {
      title: "Story.com",
      description: "Cria vídeos story com IA",
      detailedDescription: "Story.com é uma plataforma inovadora que utiliza IA para criar vídeos em formato story, ideal para redes sociais e comunicação visual envolvente.",
      icon: "📖",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
      link: "https://www.story.com/?page=1&sort=top-today",
      category: "Ferramentas de Vídeo",
      isNew: true
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Ferramentas de Vídeo
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Ferramentas completas para criação, edição e otimização de vídeos profissionais.
            Descubra soluções para clonagem de voz, edição avançada, tradução e muito mais.
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

export default FerramentasVideo;
