
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolBlogCard from '@/components/ToolBlogCard';

const NarracaoIA = () => {
  const tools = [
    {
      title: "Jammable",
      description: "Crie covers de IA com suas vozes favoritas usando tecnologia de música alimentada por IA.",
      detailedDescription: "Plataforma inovadora que permite criar covers musicais com vozes de artistas famosos usando inteligência artificial. Perfeita para criadores de conteúdo que querem experimentar com diferentes estilos vocais.",
      icon: "🎤",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=600&fit=crop&auto=format",
      link: "https://www.jammable.com/",
      category: "Narração por IA",
      isNew: true
    },
    {
      title: "Artlist Voice Over",
      description: "Voice over e text-to-speech (TTS) profissional para todos os criadores de conteúdo.",
      detailedDescription: "Ferramenta completa de voice over com tecnologia TTS avançada, oferecendo vozes naturais e profissionais para projetos de vídeo, podcasts e apresentações.",
      icon: "🎙️",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=600&fit=crop&auto=format",
      link: "https://artlist.io/voice-over",
      category: "Narração por IA"
    },
    {
      title: "Odio.ai",
      description: "Melhor gerador de texto para voz com vozes de IA online na ponta dos dedos.",
      detailedDescription: "Gerador de texto para voz de alta qualidade que oferece vozes naturais e expressivas. Interface intuitiva para conversão rápida de texto em áudio profissional.",
      icon: "🗣️",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=600&fit=crop&auto=format",
      link: "https://odio.ai/",
      category: "Narração por IA"
    },
    {
      title: "Kits AI",
      description: "O kit de ferramentas vocais de IA definitivo para turbinar sua música.",
      detailedDescription: "Ferramenta completa de IA vocal que oferece conversão de voz, clonagem e manipulação vocal avançada para músicos e produtores.",
      icon: "🎵",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=600&fit=crop&auto=format",
      link: "https://app.kits.ai/convert",
      category: "Narração por IA",
      isNew: true
    },
    {
      title: "ElevenLabs",
      description: "Gerador de voz com IA e text-to-speech mais avançado do mercado.",
      detailedDescription: "Tecnologia líder em síntese de voz que oferece vozes extremamente realistas e expressivas. Perfeito para dubagem, audiobooks e assistentes virtuais.",
      icon: "🤖",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=600&fit=crop&auto=format",
      link: "https://elevenlabs.io/",
      category: "Narração por IA"
    },
    {
      title: "TikTok TTS",
      description: "Ferramenta de text-to-speech do TikTok para criar narrações virais.",
      detailedDescription: "Acesse as vozes populares do TikTok para criar conteúdo com as narrações mais reconhecíveis da plataforma. Ideal para criadores de conteúdo viral.",
      icon: "📱",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=600&fit=crop&auto=format",
      link: "https://weilbyte.github.io/tiktok-tts/",
      category: "Narração por IA"
    },
    {
      title: "Murf AI",
      description: "Gerador de voz versátil com software de text-to-speech profissional.",
      detailedDescription: "Plataforma completa de geração de voz com ampla variedade de vozes naturais em múltiplos idiomas. Ideal para apresentações, e-learning e marketing.",
      icon: "🎯",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=600&fit=crop&auto=format",
      link: "https://murf.ai/",
      category: "Narração por IA"
    },
    {
      title: "ElevenLabs TTS Hugging Face",
      description: "Versão gratuita do ElevenLabs hospedada no Hugging Face para testes.",
      detailedDescription: "Acesso gratuito à tecnologia do ElevenLabs através da plataforma Hugging Face. Perfeito para testar a qualidade antes de investir na versão completa.",
      icon: "🔬",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400&h=600&fit=crop&auto=format",
      link: "https://huggingface.co/spaces/elevenlabs/tts",
      category: "Narração por IA"
    },
    {
      title: "MetaVoice Studio",
      description: "Voice overs de alta qualidade com IA para conteúdo profissional.",
      detailedDescription: "Estúdio virtual que oferece voice overs de qualidade profissional usando IA. Ideal para comerciais, documentários e conteúdo corporativo.",
      icon: "🎬",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=600&fit=crop&auto=format",
      link: "https://studio.themetavoice.xyz/",
      category: "Narração por IA"
    },
    {
      title: "Voicemaker",
      description: "Conversor de texto para fala com vozes naturais e personalizáveis.",
      detailedDescription: "Ferramenta robusta de conversão de texto em fala com opções avançadas de personalização de voz, velocidade e entonação.",
      icon: "🔧",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=600&fit=crop&auto=format",
      link: "https://voicemaker.in/",
      category: "Narração por IA"
    },
    {
      title: "Adobe Podcast",
      description: "Ferramentas de áudio com IA que elevam sua voz e melhoram a qualidade do áudio.",
      detailedDescription: "Conjunto completo de ferramentas de IA para gravação e edição de áudio. Remove ruídos, melhora a qualidade e oferece recursos profissionais de edição.",
      icon: "🎚️",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=600&fit=crop&auto=format",
      link: "https://podcast.adobe.com/",
      category: "Narração por IA"
    },
    {
      title: "Ashampoo Burning Studio FREE",
      description: "Estúdio de gravação gratuito para capturar e editar áudio.",
      detailedDescription: "Software gratuito completo para gravação, edição e masterização de áudio. Inclui ferramentas profissionais sem custo adicional.",
      icon: "🔴",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=600&fit=crop&auto=format",
      link: "https://www.ashampoo.com/pt-br/burning-studio-free",
      category: "Narração por IA"
    },
    {
      title: "Voicify AI",
      description: "Crie covers de IA com suas vozes favoritas e clone qualquer voz.",
      detailedDescription: "Plataforma avançada de clonagem de voz que permite recriar vozes de celebridades e artistas para criar covers musicais únicos.",
      icon: "🎭",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=600&fit=crop&auto=format",
      link: "https://www.voicify.ai/",
      category: "Narração por IA"
    },
    {
      title: "Fineshare",
      description: "Gerador de voz gratuito com mudador de voz e TTS avançado.",
      detailedDescription: "Ferramenta completa que combina geração de voz, mudança de voz e text-to-speech em uma única plataforma intuitiva.",
      icon: "🎪",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=600&fit=crop&auto=format",
      link: "https://www.fineshare.com/",
      category: "Narração por IA"
    },
    {
      title: "Uberduck",
      description: "Faça música com vocais de IA usando a voz do seu cantor favorito.",
      detailedDescription: "Plataforma que permite criar música com vocais sintéticos usando vozes de artistas famosos. Ideal para remixes e covers criativos.",
      icon: "🦆",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=600&fit=crop&auto=format",
      link: "https://www.uberduck.ai/",
      category: "Narração por IA"
    },
    {
      title: "Voicefy Brasil",
      description: "Transforme texto em áudio com IA - versão brasileira especializada.",
      detailedDescription: "Plataforma brasileira especializada em conversão de texto para áudio com vozes em português otimizadas para o mercado nacional.",
      icon: "🇧🇷",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=600&fit=crop&auto=format",
      link: "https://www.voicefy.com.br/",
      category: "Narração por IA"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              🎙️ Narração por IA
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Descubra as melhores ferramentas de inteligência artificial para criação de narrações, 
              clonagem de voz e text-to-speech. Transforme seus projetos com vozes profissionais 
              e tecnologia de ponta.
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

export default NarracaoIA;
