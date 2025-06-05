
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Play, Users, Star, Shield, CheckCircle, Clock, Target, BarChart3, Video, Zap, PenTool, FolderOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-400 text-sm font-medium">Ao Vivo</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Sua <span className="text-red-500">central completa</span> de<br />
                ferramentas de IA
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Mais de 200 ferramentas organizadas profissionalmente em 
                categorias específicas. Interface intuitiva estilo Netflix para você 
                encontrar exatamente o que precisa.
              </p>

              <div className="space-y-4">
                <h3 className="text-yellow-400 font-semibold flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  O que você recebe:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    Interface organizada por categorias
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    Ferramentas testadas e aprovadas
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    Atualizações constantes incluídas
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    Acesso vitalício garantido
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg">
                  <Link to="/dashboard">
                    <Play className="w-5 h-5 mr-2" />
                    Acessar Agora
                  </Link>
                </Button>
                <div className="flex items-center text-gray-400 text-sm">
                  <Users className="w-4 h-4 mr-2" />
                  +10.000 usuários
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                      <span className="text-white font-bold">C</span>
                    </div>
                    <span className="text-white font-semibold">Cérebro Digital</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                <h3 className="text-white text-xl font-bold mb-4">Todas as Categorias</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "Geradores de Mapas Mentais por IA", image: "🧠" },
                    { title: "Criação de Mapas Mentais", image: "🎨" },
                    { title: "Geradores de Apresentações", image: "📊" },
                    { title: "Inteligências Artificiais Gerais", image: "🤖" },
                    { title: "Geradores de Nomes para Negócios", image: "💼" },
                    { title: "Paletas de Cores", image: "🎨" },
                    { title: "Ferramentas de Textos", image: "📝" },
                    { title: "Bancos de Imagens", image: "🖼️" },
                    { title: "Design Geral", image: "✨" },
                  ].map((category, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                      <div className="text-2xl mb-2">{category.image}</div>
                      <h4 className="text-white text-sm font-medium leading-tight">{category.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-gray-400">Ferramentas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">15</div>
              <div className="text-gray-400">Categorias</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">10k+</div>
              <div className="text-gray-400">Usuários</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24h</div>
              <div className="text-gray-400">Atualizações</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              O que você recebe no <span className="text-red-500">Cérebro Digital</span>
            </h2>
            <p className="text-xl text-gray-400">
              Um dashboard profissional com +200 ferramentas organizadas por categoria
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Inteligência Artificial",
                description: "Ferramentas avançadas de escrita, criação de imagem, automações com agentes e editores inteligentes."
              },
              {
                icon: <Video className="w-8 h-8" />,
                title: "Criação de Vídeos",
                description: "Edições automáticas, geração com IA, criadores de reels e otimizadores para YouTube Shorts."
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Meta Ads & Google Ads",
                description: "Geradores de copy, criadores de anúncios, análise de concorrência e otimizadores de ROAS."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Automação & Produtividade",
                description: "Conectores avançados, automações inteligentes, dashboards e sistemas de fluxo com GPTs."
              },
              {
                icon: <PenTool className="w-8 h-8" />,
                title: "Copywriting Avançado",
                description: "Geradores de headlines, fórmulas persuasivas, storytelling e copy neurovendedora."
              },
              {
                icon: <FolderOpen className="w-8 h-8" />,
                title: "Organização & Workflow",
                description: "Templates profissionais, planners estratégicos e sistemas de gestão de campanhas."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-8 border border-gray-700 hover:border-red-500/30 transition-colors">
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-900/20 to-teal-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              🎁 Bônus Exclusivo: <span className="text-blue-400">FinTrack</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ganhe acesso GRATUITO ao nosso aplicativo de controle financeiro!
            </p>
            
            <div className="bg-gray-800 rounded-xl p-6 mb-8">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-2">Dashboard Financeiro</h3>
              <p className="text-gray-300">Aproveite suas receitas e despesas</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                Totalmente Gratuito
              </div>
              <div className="flex items-center text-blue-400">
                <BarChart3 className="w-5 h-5 mr-2" />
                Dashboard Profissional
              </div>
              <div className="flex items-center text-purple-400">
                <Target className="w-5 h-5 mr-2" />
                Relatórios Detalhados
              </div>
            </div>

            <div className="bg-teal-900/30 border border-teal-500/30 rounded-lg p-4">
              <p className="text-teal-400 font-semibold">
                🎯 Receba este aplicativo completo como bônus exclusivo!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Depoimentos de <span className="text-red-500">Profissionais</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Thiago L.",
                role: "Gestor de Tráfego",
                text: "Economizei meses de pesquisa com essa coleção. Agora sei exatamente o que usar para cada etapa do meu funil."
              },
              {
                name: "Camila A.",
                role: "Copywriter",
                text: "Investimento que se paga sozinho. Vale muito mais do que o preço cobrado."
              },
              {
                name: "João P.",
                role: "Produtor Digital",
                text: "Descobri ferramentas que nem sabia que existiam e agora uso diariamente nos meus projetos."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-8 border border-gray-700">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Quanto vale acelerar seus <span className="text-red-500">resultados</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Economize semanas de pesquisa e mais de R$ 5.000 em ferramentas testadas.
          </p>

          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700 mb-8">
            <p className="text-gray-300 mb-6">Acesso completo ao Cérebro Digital por apenas</p>
            
            <div className="mb-6">
              <span className="text-red-500 text-2xl">R$</span>
              <span className="text-6xl font-bold text-red-500">67</span>
              <span className="text-red-500 text-2xl">,90</span>
            </div>
            
            <p className="text-gray-400 mb-8">Pagamento único • Acesso vitalício</p>
            
            <div className="bg-red-600/10 border border-red-600/20 rounded-lg p-4 mb-8">
              <p className="text-red-400 font-semibold">
                🎁 Bônus: Atualizações incluídas para sempre
              </p>
            </div>

            <Button asChild className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 text-lg font-semibold rounded-lg w-full sm:w-auto">
              <Link to="/dashboard">
                ⚡ Garantir Acesso Agora
              </Link>
            </Button>
          </div>

          <div className="bg-teal-900/20 border border-teal-500/30 rounded-xl p-6">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-teal-400 mr-2" />
              <span className="text-teal-400 font-semibold">Garantia Incondicional</span>
            </div>
            <p className="text-white font-medium mb-2">7 dias para testar tudo sem riscos.</p>
            <p className="text-gray-300">Não ficou satisfeito? Devolvemos 100% do seu investimento.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
