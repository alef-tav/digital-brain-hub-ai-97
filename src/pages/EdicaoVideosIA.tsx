import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolBlogCard from '@/components/ToolBlogCard';

const EdicaoVideosIA = () => {
  const tools = [
    {
      title: "Gemini Veo 3",
      description: "Nova ferramenta do Google para criação de vídeos por IA",
      detailedDescription: "Gemini Veo 3 é a mais nova ferramenta do Google Labs para geração de vídeos através de texto e adição de movimentos em imagens. Uma tecnologia revolucionária que permite criar vídeos cinematográficos de alta qualidade.",
      icon: "🎬",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      link: "https://labs.google.com/fx/pt/tools/flow",
      category: "Edição de Vídeos com IA",
      isNew: true
    },
    {
      title: "Rubbrband",
      description: "Ferramenta inovadora para edição de vídeos com IA",
      detailedDescription: "Rubbrband oferece soluções criativas para edição de vídeos usando inteligência artificial, permitindo transformar ideias em conteúdo visual de forma intuitiva.",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=300&fit=crop",
      link: "https://www.rubbrband.com/home",
      category: "Edição de Vídeos com IA",
      isNew: true
    },
    {
      title: "VidAU AI",
      description: "Criação de anúncios de vídeo virais com IA",
      detailedDescription: "VidAU AI é uma plataforma especializada em criar anúncios de vídeo virais usando inteligência artificial, otimizada para máximo engajamento e conversões.",
      icon: "📺",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=300&fit=crop",
      link: "https://www.vidau.ai/",
      category: "Edição de Vídeos com IA",
      isNew: true
    },
    {
      title: "Mootion",
      description: "Transforme ideias em histórias visuais",
      detailedDescription: "Mootion permite transformar suas ideias em histórias visuais envolventes usando IA, criando narrativas cinematográficas de forma automatizada.",
      icon: "📖",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop",
      link: "https://storyteller.mootion.com/auth/login",
      category: "Edição de Vídeos com IA",
      isNew: true
    },
    {
      title: "Haiper",
      description: "Gerador de vídeos IA avançado",
      detailedDescription: "Haiper é um gerador de vídeos com IA que oferece ferramentas avançadas para criação de conteúdo visual de alta qualidade de forma rápida e eficiente.",
      icon: "⚡",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      link: "https://haiper.ai/auth/signin",
      category: "Edição de Vídeos com IA",
      isNew: true
    },
    {
      title: "Luma Dream Machine",
      description: "Gerador de vídeos IA de última geração",
      detailedDescription: "Luma Dream Machine é uma tecnologia de ponta para geração de vídeos com IA, oferecendo qualidade cinematográfica e realismo impressionante.",
      icon: "💫",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      link: "https://lumalabs.ai/dream-machine",
      category: "Edição de Vídeos com IA",
      isNew: true
    },
    {
      title: "LTX Studio",
      description: "Visualize seus conceitos com IA",
      detailedDescription: "LTX Studio permite visualizar e dar vida aos seus conceitos usando tecnologia avançada de IA, ideal para criadores e produtores de conteúdo.",
      icon: "🎯",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      link: "https://ltx.studio/",
      category: "Edição de Vídeos com IA",
      isNew: true
    },
    {
      title: "VideoGen",
      description: "Criação de vídeos em segundos com IA",
      detailedDescription: "VideoGen é um gerador de vídeos IA que permite criar conteúdo visual profissional em questão de segundos, otimizado para produtividade máxima.",
      icon: "🚀",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=300&fit=crop",
      link: "https://videogen.io/",
      category: "Edição de Vídeos com IA",
      isNew: true
    },
    {
      title: "Vidu Studio",
      description: "O que você imagina é o que o Vidu cria",
      detailedDescription: "Vidu Studio transforma sua imaginação em realidade visual, oferecendo ferramentas de IA para criar vídeos únicos e personalizados.",
      icon: "🌟",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop",
      link: "https://www.vidu.studio/",
      category: "Edição de Vídeos com IA",
      isNew: true
    },
    {
      title: "Focal",
      description: "Crie seus próprios programas de TV e filmes com IA",
      detailedDescription: "Focal permite criar programas de TV e filmes completos usando IA, oferecendo ferramentas profissionais para produção cinematográfica.",
      icon: "🎭",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=400&h=300&fit=crop",
      link: "https://focalml.com/",
      category: "Edição de Vídeos com IA",
      isNew: true
    },
    {
      title: "Lumen5",
      description: "Marketing de vídeo social simplificado",
      detailedDescription: "Lumen5 é um criador de vídeos que transforma texto em conteúdo de marketing visual em minutos, ideal para redes sociais e campanhas digitais.",
      icon: "📱",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=300&fit=crop",
      link: "https://lumen5.com/",
      category: "Edição de Vídeos com IA",
      isNew: true
    },
    {
      title: "KLING AI",
      description: "Plataforma avançada de criação de vídeos IA",
      detailedDescription: "KLING AI oferece tecnologia de ponta para criação de vídeos com inteligência artificial, com recursos avançados para produção profissional.",
      icon: "🔮",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      link: "https://www.klingai.com/",
      category: "Edição de Vídeos com IA",
      isNew: true
    },
    {
      title: "PixVerse",
      description: "Crie vídeos impressionantes com IA",
      detailedDescription: "PixVerse oferece ferramentas para criar vídeos de tirar o fôlego usando inteligência artificial, com qualidade profissional e facilidade de uso.",
      icon: "✨",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      link: "https://app.pixverse.ai/home",
      category: "Edição de Vídeos com IA",
      isNew: true
    },
    {
      title: "Tess AI",
      description: "IA Generativa líder global para empresas",
      detailedDescription: "Tess AI é uma plataforma de IA generativa líder mundial, oferecendo soluções empresariais para criação de conteúdo visual e vídeos.",
      icon: "🏢",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      link: "https://pareto.io/pt-br/tess-ai/",
      category: "Edição de Vídeos com IA",
      isNew: true
    },
    {
      title: "Topview AI",
      description: "Cria vídeos virais a partir de links Amazon e Shopify",
      detailedDescription: "Topview AI especializa-se em criar vídeos virais automaticamente a partir de links de produtos Amazon e Shopify, otimizado para vendas online.",
      icon: "🛒",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=300&fit=crop",
      link: "https://www.topview.ai/",
      category: "Edição de Vídeos com IA",
      isNew: true
    },
    {
      title: "SmartShort",
      description: "Criação inteligente de vídeos curtos",
      detailedDescription: "SmartShort é uma ferramenta especializada na criação inteligente de vídeos curtos, otimizada para redes sociais e engajamento máximo.",
      icon: "📏",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=300&fit=crop",
      link: "https://www.smartshort.co/",
      category: "Edição de Vídeos com IA",
      isNew: true
    },
    {
      title: "VideoMax",
      description: "Ferramenta de texto e imagem para vídeo",
      detailedDescription: "VideoMax é um gerador de vídeo IA que transforma texto e imagens em vídeos profissionais, oferecendo soluções completas para criação de conteúdo.",
      icon: "📹",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop",
      link: "https://aichatmax.com/pt",
      category: "Edição de Vídeos com IA",
      isNew: true
    },
    {
      title: "Pika",
      description: "Criação de vídeos com inteligência artificial",
      detailedDescription: "Pika é uma plataforma avançada para criação de vídeos usando IA, permitindo transformar ideias em vídeos impressionantes de forma rápida e intuitiva.",
      icon: "🎥",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      link: "https://pika.art/login",
      category: "Edição de Vídeos com IA"
    },
    {
      title: "Hailuo AI",
      description: "Ferramentas oficiais de IA para criação de vídeos",
      detailedDescription: "Hailuo AI oferece um conjunto completo de ferramentas de inteligência artificial para criação e edição de vídeos profissionais de forma automatizada.",
      icon: "🤖",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      link: "https://hailuoai.video/",
      category: "Edição de Vídeos com IA"
    },
    {
      title: "Morph Studio",
      description: "Estúdio de criação de vídeos com IA",
      detailedDescription: "Morph Studio é uma plataforma completa para criação e edição de vídeos usando tecnologias avançadas de inteligência artificial.",
      icon: "🎞️",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=300&fit=crop",
      link: "https://app.morphstudio.com/signup",
      category: "Edição de Vídeos com IA"
    },
    {
      title: "Cutout Pro",
      description: "Ferramenta de IA para edição e processamento de vídeos",
      detailedDescription: "Cutout Pro oferece soluções avançadas de IA para edição de vídeos, incluindo remoção de fundo, melhoramento de qualidade e outras funcionalidades profissionais.",
      icon: "✂️",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      link: "https://www.cutout.pro/pt/image-pricing",
      category: "Edição de Vídeos com IA"
    },
    {
      title: "Predis AI",
      description: "Cria anúncios criativos, carrosséis e vídeos por prompts",
      detailedDescription: "Predis AI é uma ferramenta poderosa para criação de anúncios criativos, carrosséis e vídeos através de prompts simples, ideal para marketing digital.",
      icon: "📢",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      link: "https://predis.ai/",
      category: "Edição de Vídeos com IA"
    },
    {
      title: "Vidnoz AI",
      description: "Crie vídeos IA envolventes grátis e rápido",
      detailedDescription: "Vidnoz AI oferece ferramentas gratuitas para criação rápida de vídeos envolventes usando inteligência artificial, com avatares e narração automática.",
      icon: "🎭",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=400&h=300&fit=crop",
      link: "https://pt.vidnoz.com/",
      category: "Edição de Vídeos com IA"
    },
    {
      title: "VideoExpress AI",
      description: "Solução completa de texto para vídeo com IA",
      detailedDescription: "VideoExpress AI é uma plataforma all-in-one que transforma textos em vídeos profissionais usando tecnologia avançada de inteligência artificial.",
      icon: "📝",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop",
      link: "https://videoexpress.ai/",
      category: "Edição de Vídeos com IA"
    },
    {
      title: "Shortspilot",
      description: "Geração de receita em piloto automático com vídeos",
      detailedDescription: "Shortspilot automatiza a criação de vídeos curtos para gerar receita de forma contínua, ideal para criadores de conteúdo e marketing digital.",
      icon: "✈️",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      link: "https://www.shortspilot.ai/",
      category: "Edição de Vídeos com IA"
    },
    {
      title: "AniEraser",
      description: "Removedor gratuito de marca d'água online",
      detailedDescription: "AniEraser é uma ferramenta gratuita para remoção de marcas d'água de vídeos e imagens de forma rápida e eficiente online.",
      icon: "🧹",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
      link: "https://anieraser.media.io/app/",
      category: "Edição de Vídeos com IA"
    },
    {
      title: "Video Cutter",
      description: "Remove logo e marca de vídeos",
      detailedDescription: "Video Cutter oferece ferramentas para remoção de logos e marcas de vídeos, além de outras funcionalidades de edição online.",
      icon: "🎬",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=300&fit=crop",
      link: "http://video-cutter.com/pt/remove-logo",
      category: "Edição de Vídeos com IA"
    },
    {
      title: "Eyecandy",
      description: "Biblioteca de técnicas visuais e banco de vídeos",
      detailedDescription: "Eyecandy é uma biblioteca completa de técnicas visuais, oferecendo banco de vídeos e efeitos para enriquecer suas produções audiovisuais.",
      icon: "👁️",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop",
      link: "https://eyecannndy.com/",
      category: "Edição de Vídeos com IA"
    },
    {
      title: "Google Lumiere",
      description: "Cria vídeos por textos e adiciona movimento em imagens",
      detailedDescription: "Google Lumiere é uma tecnologia revolucionária que cria vídeos a partir de textos e adiciona movimentos realistas em imagens estáticas.",
      icon: "💫",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      link: "https://lumiere-video.github.io/",
      category: "Edição de Vídeos com IA"
    },
    {
      title: "Submagic",
      description: "Gera legendas incríveis com IA e muito mais",
      detailedDescription: "Submagic é uma ferramenta completa que gera legendas automáticas com IA e oferece diversas funcionalidades para edição e melhoramento de vídeos.",
      icon: "📝",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
      link: "https://www.submagic.co/",
      category: "Edição de Vídeos com IA"
    },
    {
      title: "Dubformer",
      description: "Traduz vídeos para mais de 70 idiomas",
      detailedDescription: "Dubformer oferece tradução automática de vídeos para mais de 70 idiomas, mantendo a naturalidade da narração e sincronização labial.",
      icon: "🌍",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=400&h=300&fit=crop",
      link: "https://app.dubformer.ai/",
      category: "Edição de Vídeos com IA"
    },
    {
      title: "Creatify",
      description: "Gere vídeos de marketing envolventes com um clique",
      detailedDescription: "Creatify permite criar vídeos de marketing envolventes com apenas um clique, usando IA para gerar anúncios profissionais automaticamente.",
      icon: "🎯",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=300&fit=crop",
      link: "https://creatify.ai/",
      category: "Edição de Vídeos com IA"
    },
    {
      title: "Sora ChatGPT",
      description: "Criação de vídeos a partir de texto pela OpenAI",
      detailedDescription: "Sora é a revolucionária ferramenta da OpenAI que cria vídeos profissionais a partir de descrições de texto, usando tecnologia de ponta em IA generativa.",
      icon: "🤖",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      link: "https://openai.com/sora",
      category: "Edição de Vídeos com IA"
    },
    {
      title: "Kapwing",
      description: "Editor de vídeo online - Crie mais conteúdo em menos tempo",
      detailedDescription: "Kapwing é um editor de vídeo online completo que permite criar mais conteúdo em menos tempo, com ferramentas intuitivas e recursos de IA integrados.",
      icon: "⚡",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=300&fit=crop",
      link: "https://www.kapwing.com/",
      category: "Edição de Vídeos com IA"
    },
    {
      title: "Adobe Firefly",
      description: "Criação de vídeos com IA da Adobe",
      detailedDescription: "Adobe Firefly oferece ferramentas avançadas de IA para criação e edição de vídeos, integradas ao ecossistema criativo da Adobe.",
      icon: "🔥",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop",
      link: "https://firefly.adobe.com/",
      category: "Edição de Vídeos com IA"
    },
    {
      title: "Video.io",
      description: "Geração de vídeos por IA",
      detailedDescription: "Video.io é uma plataforma especializada em geração de vídeos usando inteligência artificial, oferecendo soluções profissionais para criação de conteúdo.",
      icon: "🎥",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      link: "https://video.io/",
      category: "Edição de Vídeos com IA"
    },
    {
      title: "Runway",
      description: "Avançando a criatividade com inteligência artificial",
      detailedDescription: "Runway é uma plataforma líder em ferramentas criativas de IA, oferecendo tecnologias avançadas para criação e edição de vídeos profissionais.",
      icon: "🛫",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      link: "https://runwayml.com/",
      category: "Edição de Vídeos com IA"
    },
    {
      title: "Fliki",
      description: "Gerador de vídeo IA - Transforme ideias em vídeos",
      detailedDescription: "Fliki é um gerador de vídeo com IA que transforma ideias em vídeos profissionais, oferecendo narração automática e recursos visuais avançados.",
      icon: "🎬",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop",
      link: "https://fliki.ai/",
      category: "Edição de Vídeos com IA"
    },
    {
      title: "Pictory AI",
      description: "Criação automática de vídeos com IA",
      detailedDescription: "Pictory AI automatiza a criação de vídeos, transformando textos longos em vídeos envolventes com recursos visuais e narração profissional.",
      icon: "📖",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      link: "https://app.pictory.ai/login",
      category: "Edição de Vídeos com IA"
    },
    {
      title: "Captions Creative Studio",
      description: "Seu estúdio criativo alimentado por IA",
      detailedDescription: "Captions é um estúdio criativo completo alimentado por IA, oferecendo ferramentas avançadas para criação de vídeos, legendas e conteúdo visual.",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=300&fit=crop",
      link: "https://www.captions.ai/",
      category: "Edição de Vídeos com IA"
    },
    {
      title: "InVideo",
      description: "Templates de vídeo para negócios",
      detailedDescription: "InVideo oferece uma vasta biblioteca de templates profissionais para criação de vídeos de negócios, com recursos de IA para personalização automática.",
      icon: "💼",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      link: "https://invideo.io/templates/business-videos/",
      category: "Edição de Vídeos com IA"
    },
    {
      title: "Oxolo",
      description: "Criação de vídeos profissionais com IA",
      detailedDescription: "Oxolo simplifica a criação de vídeos profissionais usando IA, ideal para apresentações de produtos e conteúdo comercial de alta qualidade.",
      icon: "🎪",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=400&h=300&fit=crop",
      link: "https://www.oxolo.com/",
      category: "Edição de Vídeos com IA"
    },
    {
      title: "123apps",
      description: "Aplicativos web para editar, converter e criar",
      detailedDescription: "123apps oferece uma suíte completa de aplicativos web para edição, conversão e criação de vídeos, com ferramentas simples e eficazes.",
      icon: "🔧",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=300&fit=crop",
      link: "https://123apps.com/pt/",
      category: "Edição de Vídeos com IA"
    },
    {
      title: "VEED.io",
      description: "Correção de contato visual e melhoria de qualidade",
      detailedDescription: "VEED.io oferece ferramentas avançadas para correção automática de contato visual e melhoria da qualidade de vídeos usando tecnologia de IA.",
      icon: "👁️",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
      link: "https://www.veed.io/eye-contact",
      category: "Edição de Vídeos com IA"
    },
    {
      title: "HeyGen",
      description: "Tradução de vídeos para outros idiomas",
      detailedDescription: "HeyGen oferece soluções avançadas para tradução automática de vídeos, mantendo a sincronização labial e naturalidade da narração.",
      icon: "🌏",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=400&h=300&fit=crop",
      link: "https://app.heygen.com/login",
      category: "Edição de Vídeos com IA"
    },
    {
      title: "Dubverse AI",
      description: "Dublagem online de vídeos",
      detailedDescription: "Dubverse AI oferece dublagem automática de vídeos online, permitindo traduzir e dublar conteúdo para múltiplos idiomas com qualidade profissional.",
      icon: "🎙️",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=400&h=300&fit=crop",
      link: "https://dubverse.ai/",
      category: "Edição de Vídeos com IA"
    },
    {
      title: "Rask AI",
      description: "Tradução e dublagem avançada com IA",
      detailedDescription: "Rask AI oferece soluções avançadas de tradução e dublagem de vídeos usando inteligência artificial, mantendo a qualidade e naturalidade do áudio.",
      icon: "🗣️",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      link: "https://app.rask.ai/auth",
      category: "Edição de Vídeos com IA"
    },
    {
      title: "Maestra AI",
      description: "Transcrição, legendagem e narração",
      detailedDescription: "Maestra AI oferece serviços completos de transcrição, legendagem automática e narração por IA, ideal para produção de conteúdo profissional.",
      icon: "📝",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
      link: "https://maestra.ai/",
      category: "Edição de Vídeos com IA"
    },
    {
      title: "VideoDubber",
      description: "Tradução de vídeo IA e texto para fala",
      detailedDescription: "VideoDubber oferece tradução automática de vídeos e conversão de texto para fala, permitindo criar conteúdo multilíngue de forma eficiente.",
      icon: "🔊",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=400&h=300&fit=crop",
      link: "https://videodubber.ai/",
      category: "Edição de Vídeos com IA"
    },
    {
      title: "Unscreen",
      description: "Remove background de vídeos",
      detailedDescription: "Unscreen permite remover automaticamente o fundo de vídeos sem necessidade de tela verde, usando tecnologia avançada de IA para segmentação.",
      icon: "🎭",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      link: "https://www.unscreen.com/",
      category: "Edição de Vídeos com IA"
    },
    {
      title: "Vidyo AI",
      description: "Reaproveitamento de vídeo com IA para conteúdo viral",
      detailedDescription: "Vidyo AI especializa-se em reaproveitamento inteligente de vídeos longos, criando clips virais otimizados para redes sociais automaticamente.",
      icon: "🔄",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      link: "https://vidyo.ai/",
      category: "Edição de Vídeos com IA"
    },
    {
      title: "Imgn AI",
      description: "Conte sua história 100 vezes mais rápido",
      detailedDescription: "Imgn AI acelera dramaticamente o processo de criação de vídeos, permitindo contar histórias de forma mais eficiente e envolvente usando IA avançada.",
      icon: "⚡",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop",
      link: "https://imgn.ai/",
      category: "Edição de Vídeos com IA"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Edição de Vídeos com IA
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Explore as mais avançadas ferramentas de inteligência artificial para criação e edição de vídeos. 
              Desde geração automática até tradução, dublagem e efeitos especiais, transforme suas ideias em 
              produções profissionais de forma rápida e eficiente.
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

export default EdicaoVideosIA;
