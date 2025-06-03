
import { useState } from 'react';
import { ArrowLeft, ExternalLink, Heart, Search, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FerramentasVideo = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState<number[]>([]);

  const tools = [
    {
      id: 1,
      title: "Vozo",
      description: "Clona sua voz e sincroniza sua voz com o vídeo",
      icon: "🗣️",
      category: "Clonagem de Voz",
      url: "https://app.vozo.ai/?folder=&active=voiceAll",
      isNew: true
    },
    {
      id: 2,
      title: "LTX Studio",
      description: "Visualize seus conceitos em vídeos profissionais",
      icon: "🎬",
      category: "Criação de Vídeo",
      url: "https://ltx.studio/",
      isNew: true
    },
    {
      id: 3,
      title: "Transitional Hooks",
      description: "Ganchos virais para vídeos de redes sociais",
      icon: "🎣",
      category: "Efeitos Virais",
      url: "https://transitionalhooks.com/"
    },
    {
      id: 4,
      title: "VEED.IO",
      description: "Editor de vídeo online com IA - rápido e gratuito",
      icon: "✂️",
      category: "Editor Online",
      url: "https://www.veed.io/"
    },
    {
      id: 5,
      title: "Jitter",
      description: "Templates gratuitos de motion graphics",
      icon: "🎨",
      category: "Motion Graphics",
      url: "https://jitter.video/templates/"
    },
    {
      id: 6,
      title: "Rask AI",
      description: "Tradução de vídeo para qualquer língua com IA",
      icon: "🌍",
      category: "Tradução",
      url: "https://pt-br.rask.ai/"
    },
    {
      id: 7,
      title: "Movavi Video Editor",
      description: "Software profissional de edição de vídeo",
      icon: "🎞️",
      category: "Editor Desktop",
      url: "https://www.movavi.com/pt/video-editor-plus/"
    },
    {
      id: 8,
      title: "Vidu Studio",
      description: "Cria vídeos profissionais por imagem",
      icon: "🖼️",
      category: "Geração por Imagem",
      url: "https://www.vidu.studio/login?redirect=%2Fcreate%2Fcharacter2video"
    },
    {
      id: 9,
      title: "RecCloud",
      description: "Várias ferramentas de vídeo em uma plataforma",
      icon: "☁️",
      category: "Suite Completa",
      url: "https://reccloud.com/pt/pricing?position=eleven-activity"
    },
    {
      id: 10,
      title: "Podfy.ai",
      description: "Transforme conteúdo em vídeos e shorts impressionantes",
      icon: "🎯",
      category: "Repurposing",
      url: "https://www.podfy.ai/lp-milton?utm_source=milton",
      isNew: true
    },
    {
      id: 11,
      title: "Creatify",
      description: "Crie anúncios em vídeo envolventes com IA",
      icon: "📺",
      category: "Video Ads",
      url: "https://creatify.ai/"
    },
    {
      id: 12,
      title: "Fliki",
      description: "Geração de textos em vídeos com vozes IA",
      icon: "📝",
      category: "Texto para Vídeo",
      url: "https://fliki.ai/"
    },
    {
      id: 13,
      title: "Animaker",
      description: "Cria vídeos animados profissionais",
      icon: "🎪",
      category: "Animação",
      url: "https://accounts.animaker.com/login/animaker/?path=/editproject/epYp"
    },
    {
      id: 14,
      title: "Vidgenie.ai",
      description: "Gerador inteligente de vídeos",
      icon: "🧞",
      category: "Geração IA",
      url: "https://app.vidgenie.ai/home",
      isNew: true
    },
    {
      id: 15,
      title: "Nexus Clips",
      description: "Ferramenta profissional de clips e cortes",
      icon: "✂️",
      category: "Clips",
      url: "https://nexusclips.com/pt/home?via=clayton"
    },
    {
      id: 16,
      title: "SSSSTik",
      description: "Baixa vídeos do TikTok sem marca d'água",
      icon: "📱",
      category: "Download",
      url: "https://ssstik.io/pt"
    },
    {
      id: 17,
      title: "Snapinsta",
      description: "Baixa vídeos do Instagram, Reels e IGTV",
      icon: "📷",
      category: "Download",
      url: "https://snapinsta.app/pt"
    },
    {
      id: 18,
      title: "GhostCut",
      description: "Tradução automática, remove texto inteligente, recriador de vídeo",
      icon: "👻",
      category: "Edição IA",
      url: "https://jollytoday.com/home/",
      isNew: true
    },
    {
      id: 19,
      title: "Video Effects",
      description: "Efeitos para vídeos Instagram e YouTube",
      icon: "✨",
      category: "Efeitos",
      url: "https://videoeffects.com/orders/new/instagram-profile-banner-4-light?source=browse"
    },
    {
      id: 20,
      title: "Vidget",
      description: "Transforme visualizações de vídeos em vendas",
      icon: "💰",
      category: "Marketing",
      url: "https://vidget.com.br/"
    },
    {
      id: 21,
      title: "MakeReels.ai",
      description: "Crie e publique Reels automaticamente com sua voz clonada",
      icon: "🎬",
      category: "Reels IA",
      url: "https://makereels.ai/pt",
      isNew: true
    },
    {
      id: 22,
      title: "VideoExpress.ai",
      description: "Solução completa de texto para vídeo com IA",
      icon: "⚡",
      category: "Texto para Vídeo",
      url: "https://videoexpress.ai/gdeal/"
    },
    {
      id: 23,
      title: "CapCut Online",
      description: "Editor de vídeo online gratuito",
      icon: "🎬",
      category: "Editor Online",
      url: "https://www.capcut.com/my-edit?enter_from=signup&start_tab=video"
    },
    {
      id: 24,
      title: "Story.com",
      description: "Cria vídeos story com IA",
      icon: "📖",
      category: "Stories",
      url: "https://www.story.com/?page=1&sort=top-today",
      isNew: true
    }
  ];

  const toggleFavorite = (toolId: number) => {
    setFavorites(prev => 
      prev.includes(toolId) 
        ? prev.filter(id => id !== toolId)
        : [...prev, toolId]
    );
  };

  const filteredTools = tools.filter(tool =>
    tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(tools.map(tool => tool.category))];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-6">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="text-white hover:text-gray-300 p-0 mr-4"
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                🎥 Ferramentas de Vídeo
              </h1>
              <p className="text-gray-400 text-lg">
                Ferramentas completas para criação, edição e otimização de vídeos profissionais
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 md:px-8 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Buscar ferramentas de vídeo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-900 border-gray-700 text-white placeholder-gray-400"
              />
            </div>
          </div>
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="outline" className="text-gray-300 border-gray-600">
              <Filter className="w-3 h-3 mr-1" />
              Categorias:
            </Badge>
            {categories.map((category) => (
              <Badge
                key={category}
                variant="secondary"
                className="bg-gray-800 text-gray-300 hover:bg-gray-700 cursor-pointer"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <main className="px-4 md:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <Card key={tool.id} className="bg-gray-900 border-gray-700 hover:border-gray-600 transition-all duration-200 group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{tool.icon}</span>
                      <div>
                        <CardTitle className="text-white group-hover:text-blue-400 transition-colors">
                          {tool.title}
                          {tool.isNew && (
                            <Badge className="ml-2 bg-red-600 text-white text-xs">
                              NOVO
                            </Badge>
                          )}
                        </CardTitle>
                        <Badge variant="outline" className="text-xs text-gray-400 border-gray-600 mt-1">
                          {tool.category}
                        </Badge>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleFavorite(tool.id)}
                      className={`${
                        favorites.includes(tool.id)
                          ? 'text-red-500 hover:text-red-400'
                          : 'text-gray-400 hover:text-gray-300'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${favorites.includes(tool.id) ? 'fill-current' : ''}`} />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4 line-clamp-2">
                    {tool.description}
                  </CardDescription>
                  <Button
                    onClick={() => window.open(tool.url, '_blank')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Acessar Ferramenta
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                Nenhuma ferramenta encontrada para "{searchTerm}"
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FerramentasVideo;
