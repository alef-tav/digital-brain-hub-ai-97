import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Brain, Shield, Zap, Users, Globe, TrendingUp, Play, DollarSign, PiggyBank, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Footer from '@/components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-4">
        <div className="container mx-auto text-center max-w-7xl">
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 text-white">
              Sua <span className="text-red-500">central de comando</span> já está pronta
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
              Interface intuitiva estilo Netflix com mais de 200 ferramentas organizadas por categoria. 
              Acesso imediato, navegação simples e atualizações quase diárias para você sempre estar à frente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center mb-20">
            <div className="text-left space-y-8 lg:space-y-10">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <span className="text-red-400 font-semibold text-lg lg:text-xl xl:text-2xl">Veja exatamente o que você receberá</span>
              </div>

              <div className="space-y-6 lg:space-y-8">
                <p className="text-gray-300 text-lg lg:text-xl xl:text-2xl leading-relaxed">
                  Não é só uma lista de ferramentas... É um ecossistema completo e organizado como os melhores streamings do mundo. Cada categoria foi pensada para otimizar seu tempo e maximizar seus resultados.
                </p>
                
                <div className="space-y-4 lg:space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-red-600/20 rounded flex items-center justify-center">
                      <Play className="w-4 h-4 lg:w-5 lg:h-5 text-red-400" />
                    </div>
                    <span className="text-white text-base lg:text-lg xl:text-xl">Interface amigável e navegação intuitiva</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-red-600/20 rounded flex items-center justify-center">
                      <Users className="w-4 h-4 lg:w-5 lg:h-5 text-red-400" />
                    </div>
                    <span className="text-white text-base lg:text-lg xl:text-xl">+200 ferramentas testadas e aprovadas</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-red-600/20 rounded flex items-center justify-center">
                      <Zap className="w-4 h-4 lg:w-5 lg:h-5 text-red-400" />
                    </div>
                    <span className="text-white text-base lg:text-lg xl:text-xl">Atualizações quase diárias incluídas</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-red-600/20 rounded flex items-center justify-center">
                      <Shield className="w-4 h-4 lg:w-5 lg:h-5 text-red-400" />
                    </div>
                    <span className="text-white text-base lg:text-lg xl:text-xl">Acesso imediato após a compra</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="bg-gray-800/50 rounded-2xl lg:rounded-3xl p-6 lg:p-8 backdrop-blur-sm border border-gray-700 w-full max-w-md lg:max-w-lg xl:max-w-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <img 
                      src="/lovable-uploads/f616debe-7a77-425a-ae20-2a4a6321115f.png" 
                      alt="Cérebro Digital" 
                      className="w-8 h-8 lg:w-10 lg:h-10"
                    />
                    <span className="text-white font-semibold text-base lg:text-lg">Cérebro Digital</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 lg:w-4 lg:h-4 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 lg:w-4 lg:h-4 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 lg:w-4 lg:h-4 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <img 
                  src="/lovable-uploads/ca3a8728-b0f5-4af5-81e3-74736eef9196.png"
                  alt="Interface Cérebro Digital" 
                  className="w-full rounded-lg lg:rounded-xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-red-600 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-full text-sm lg:text-base font-semibold">
                Acesso Vitalício
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Central Section */}
      <section className="py-20 lg:py-28 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-20 xl:gap-24 items-center">
            <div className="relative flex justify-center">
              <div className="w-full max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl">
                <img 
                  src="/lovable-uploads/89d34d07-d75d-4c11-a866-b31a253616db.png"
                  alt="Interface completa" 
                  className="w-full rounded-2xl lg:rounded-3xl shadow-2xl"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 lg:px-4 lg:py-2 rounded-full text-sm lg:text-base font-semibold">
                  Ao Vivo
                </div>
              </div>
            </div>

            <div className="space-y-8 lg:space-y-10 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
                Sua <span className="text-red-500">central completa</span> de ferramentas de IA
              </h2>
              <p className="text-xl lg:text-2xl xl:text-3xl text-gray-300 leading-relaxed">
                Mais de 200 ferramentas organizadas profissionalmente em categorias específicas. 
                Interface intuitiva estilo Netflix para você encontrar exatamente o que precisa.
              </p>

              <div className="space-y-4 lg:space-y-5">
                <div className="flex items-start space-x-3 justify-center md:justify-start">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full mt-2.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-white text-base lg:text-lg xl:text-xl leading-relaxed">Interface organizada por categorias</span>
                </div>
                <div className="flex items-start space-x-3 justify-center md:justify-start">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full mt-2.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-white text-base lg:text-lg xl:text-xl leading-relaxed">Ferramentas testadas e aprovadas</span>
                </div>
                <div className="flex items-start space-x-3 justify-center md:justify-start">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full mt-2.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-white text-base lg:text-lg xl:text-xl leading-relaxed">Atualizações constantes incluídas</span>
                </div>
                <div className="flex items-start space-x-3 justify-center md:justify-start">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full mt-2.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-white text-base lg:text-lg xl:text-xl leading-relaxed">Acesso vitalício garantido</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                <Button 
                  asChild 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 lg:px-12 lg:py-6 text-lg lg:text-xl xl:text-2xl rounded-full w-full sm:w-auto"
                >
                  <Link to="/checkout">
                    <Play className="w-5 h-5 lg:w-6 lg:h-6 mr-2" />
                    Garantir Acesso Agora
                  </Link>
                </Button>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Users className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span className="text-sm lg:text-base xl:text-lg">+10.000 usuários</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center">
            <div className="space-y-2 lg:space-y-4">
              <div className="text-4xl lg:text-5xl xl:text-6xl font-bold text-red-500">200+</div>
              <div className="text-gray-400 text-base lg:text-lg xl:text-xl">Ferramentas</div>
            </div>
            <div className="space-y-2 lg:space-y-4">
              <div className="text-4xl lg:text-5xl xl:text-6xl font-bold text-red-500">15</div>
              <div className="text-gray-400 text-base lg:text-lg xl:text-xl">Categorias</div>
            </div>
            <div className="space-y-2 lg:space-y-4">
              <div className="text-4xl lg:text-5xl xl:text-6xl font-bold text-red-500">10k+</div>
              <div className="text-gray-400 text-base lg:text-lg xl:text-xl">Usuários</div>
            </div>
            <div className="space-y-2 lg:space-y-4">
              <div className="text-4xl lg:text-5xl xl:text-6xl font-bold text-red-500">24h</div>
              <div className="text-gray-400 text-base lg:text-lg xl:text-xl">Atualizações</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900/30 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              O que você recebe no <span className="text-red-500">Cérebro Digital</span>
            </h2>
            <p className="text-xl text-gray-300">
              Um dashboard profissional com +200 ferramentas organizadas por categoria
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/30 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-red-400" />
                </div>
                <CardTitle className="text-white text-xl">Inteligência Artificial</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Ferramentas avançadas de escrita, criação de imagem, automações com agentes e editores inteligentes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/30 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-red-400" />
                </div>
                <CardTitle className="text-white text-xl">Criação de Vídeos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Edições automáticas, geração com IA, criadores de reels e otimizadores para YouTube Shorts.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/30 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-red-400" />
                </div>
                <CardTitle className="text-white text-xl">Meta Ads & Google Ads</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Geradores de copy, criadores de anúncios, análise de concorrência e otimizadores de ROAS.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/30 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-red-400" />
                </div>
                <CardTitle className="text-white text-xl">Automação & Produtividade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Conectores avançados, automações inteligentes, dashboards e sistemas de fluxo com GPTs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/30 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-red-400" />
                </div>
                <CardTitle className="text-white text-xl">Copywriting Avançado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Geradores de headlines, fórmulas persuasivas, storytelling e copy neurovendedora.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/30 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-red-400" />
                </div>
                <CardTitle className="text-white text-xl">Organização & Workflow</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Templates profissionais, planners estratégicos e sistemas de gestão de campanhas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Depoimentos de <span className="text-red-500">Profissionais</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/30 border-gray-700 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-200 mb-6 italic">
                  "Economizei meses de pesquisa com essa coleção. Agora sei exatamente o que usar para cada etapa do meu funil."
                </p>
                <div className="space-y-1">
                  <p className="text-white font-semibold">Thiago L.</p>
                  <p className="text-gray-400 text-sm">Gestor de Tráfego</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/30 border-gray-700 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-200 mb-6 italic">
                  "Investimento que se paga sozinho. Vale muito mais do que o preço cobrado."
                </p>
                <div className="space-y-1">
                  <p className="text-white font-semibold">Camila A.</p>
                  <p className="text-gray-400 text-sm">Copywriter</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/30 border-gray-700 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-200 mb-6 italic">
                  "Descobri ferramentas que nem sabia que existiam e agora uso diariamente nos meus projetos."
                </p>
                <div className="space-y-1">
                  <p className="text-white font-semibold">João P.</p>
                  <p className="text-gray-400 text-sm">Produtor Digital</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Combined Offer + Bonus Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-green-900/10 via-gray-900/30 to-transparent">
        <div className="container mx-auto max-w-6xl">
          {/* Bonus FinTrack */}
          <div className="text-center mb-16">
            <div className="inline-block bg-green-600/20 border border-green-500/30 rounded-full px-6 py-2 mb-8">
              <span className="text-green-400 font-bold text-lg">🎁 BÔNUS EXCLUSIVO</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-green-400">FinTrack</span> - Dashboard Financeiro
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Ponha em prática tudo que estudou sobre educação financeira de um jeito simples e prático. 
              Faça suas colunas de ativos ficarem maiores que as de passivos e seja próspero!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative flex justify-center">
              <div className="bg-gray-800/50 rounded-2xl p-4 backdrop-blur-sm border border-gray-700 w-full max-w-xl lg:max-w-2xl xl:max-w-4xl">
                <img 
                  src="/lovable-uploads/140b43e5-087f-4e7a-987e-9008f275c31c.png"
                  alt="Dashboard FinTrack" 
                  className="w-full rounded-xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                100% GRÁTIS
              </div>
            </div>

            <div className="space-y-8 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Controle total das suas <span className="text-green-400">finanças</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600/20 rounded-xl flex items-center justify-center mt-1">
                    <DollarSign className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">Dashboard Financeiro Completo</h4>
                    <p className="text-gray-300">Acompanhe suas receitas, despesas e saldo total em tempo real com gráficos intuitivos.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600/20 rounded-xl flex items-center justify-center mt-1">
                    <PiggyBank className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">Gestão de Múltiplas Contas</h4>
                    <p className="text-gray-300">Organize suas contas bancárias, cartões e investimentos em um só lugar.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600/20 rounded-xl flex items-center justify-center mt-1">
                    <CreditCard className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">Categorização Inteligente</h4>
                    <p className="text-gray-300">Classifique automaticamente suas transações e tenha relatórios detalhados.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600/20 rounded-xl flex items-center justify-center mt-1">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">Metas e Objetivos</h4>
                    <p className="text-gray-300">Defina metas financeiras e acompanhe seu progresso rumo à prosperidade.</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <Star className="w-6 h-6 text-green-400 mr-3" />
                  <span className="text-green-400 font-bold text-xl">Valor: R$ 197,00</span>
                </div>
                <p className="text-green-100 text-lg text-center md:text-left">
                  Mas hoje você recebe <span className="font-bold text-green-400">TOTALMENTE GRÁTIS</span> junto com o Cérebro Digital!
                </p>
              </div>
            </div>
          </div>

          {/* Combined Pricing Section */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Quanto vale acelerar seus <span className="text-red-500">resultados</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Economize semanas de pesquisa e mais de R$ 5.000 em ferramentas testadas.
            </p>

            <div className="flex justify-center">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 mb-8 w-full max-w-2xl">
                <div className="mb-6">
                  <p className="text-gray-300 text-lg mb-4">
                    Cérebro Digital + FinTrack Dashboard por apenas
                  </p>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-red-500 text-3xl font-bold">R$ 67</span>
                    <span className="text-red-500 text-2xl">,90</span>
                  </div>
                  <p className="text-gray-400">Pagamento único • Acesso vitalício</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Cérebro Digital: +200 ferramentas (R$ 297)</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">BÔNUS: FinTrack Dashboard (R$ 197)</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Interface estilo Netflix</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Atualizações vitalícias incluídas</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 max-w-lg">
                <div className="flex items-center justify-center mb-3">
                  <Shield className="w-6 h-6 text-green-400 mr-3" />
                  <span className="text-green-400 font-bold text-lg">Garantia Incondicional</span>
                </div>
                <p className="text-green-100 text-center">
                  7 dias para testar tudo sem riscos.
                  <br />
                  Não ficou satisfeito? Devolvemos 100% do seu investimento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-red-500">Perguntas</span> Frequentes
            </h2>
            <p className="text-xl text-gray-300">
              Tire suas dúvidas sobre o Cérebro Digital
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-gray-800/30 border-gray-700 rounded-xl px-6">
              <AccordionTrigger className="text-white hover:text-red-400 text-left">
                O que exatamente está incluso no Cérebro Digital?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Você recebe acesso a mais de 200 ferramentas organizadas em 15 categorias diferentes, incluindo IA, automação, criação de vídeos, copywriting, design e muito mais. Também inclui o dashboard FinTrack como bônus gratuito.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-gray-800/30 border-gray-700 rounded-xl px-6">
              <AccordionTrigger className="text-white hover:text-red-400 text-left">
                Como funciona o acesso vitalício?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Após a compra, você receberá login e senha para acessar a plataforma para sempre. Não há mensalidades ou taxas recorrentes. Uma vez comprado, é seu para sempre.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-gray-800/30 border-gray-700 rounded-xl px-6">
              <AccordionTrigger className="text-white hover:text-red-400 text-left">
                As ferramentas são atualizadas constantemente?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Sim! Adicionamos novas ferramentas quase diariamente. Você sempre terá acesso às últimas inovações sem custo adicional.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-gray-800/30 border-gray-700 rounded-xl px-6">
              <AccordionTrigger className="text-white hover:text-red-400 text-left">
                O que é o FinTrack que vem como bônus?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                O FinTrack é um dashboard financeiro completo para você gerenciar suas finanças pessoais. Acompanhe receitas, despesas, múltiplas contas e defina metas financeiras. Valor individual de R$ 197, mas você recebe grátis.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-gray-800/30 border-gray-700 rounded-xl px-6">
              <AccordionTrigger className="text-white hover:text-red-400 text-left">
                Como é a garantia de 7 dias?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Você tem 7 dias corridos para testar todo o conteúdo. Se por qualquer motivo não ficar satisfeito, devolvemos 100% do seu investimento, sem perguntas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-gray-800/30 border-gray-700 rounded-xl px-6">
              <AccordionTrigger className="text-white hover:text-red-400 text-left">
                Preciso de conhecimento técnico para usar?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Não! A interface foi desenvolvida para ser intuitiva como um Netflix. Cada ferramenta tem descrição clara e as categorias facilitam encontrar exatamente o que você precisa.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-gray-800/30 border-gray-700 rounded-xl px-6">
              <AccordionTrigger className="text-white hover:text-red-400 text-left">
                Posso acessar de qualquer dispositivo?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Sim! A plataforma é responsiva e funciona perfeitamente em computadores, tablets e smartphones. Acesse de onde estiver.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-gray-800/30 border-gray-700 rounded-xl px-6">
              <AccordionTrigger className="text-white hover:text-red-400 text-left">
                Como recebo meu acesso após a compra?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Imediatamente após a confirmação do pagamento, você receberá um email com seus dados de acesso. O processo é totalmente automático.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
