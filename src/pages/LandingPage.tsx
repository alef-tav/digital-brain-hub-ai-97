import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
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
                  <Link to="/checkout">
                    <Play className="w-5 h-5 mr-2" />
                    Garantir Acesso
                  </Link>
                </Button>
                <div className="flex items-center text-gray-400 text-sm">
                  <Users className="w-4 h-4 mr-2" />
                  +10.000 usuários
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/lovable-uploads/a15fd47a-b562-4964-9026-04e26e266386.png" 
                alt="Interface do Cérebro Digital - Dashboard com categorias de ferramentas de IA"
                className="w-full h-auto rounded-2xl shadow-2xl border border-gray-700"
              />
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

      {/* Dashboard Preview Section - Layout Invertido */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/3431fd5b-4968-4906-8c33-afc514933b97.png" 
                alt="Dashboard Cérebro Digital - Interface estilo Netflix com categorias de ferramentas"
                className="w-full h-auto rounded-2xl shadow-2xl border border-gray-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Interface <span className="text-red-500">Estilo Netflix</span> para suas Ferramentas
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Navegue por centenas de ferramentas organizadas em categorias específicas. 
                Encontre exatamente o que precisa de forma rápida e intuitiva.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Categorias Específicas</h3>
                    <p className="text-gray-300">Ferramentas organizadas por área de atuação para encontrar rapidamente o que você precisa</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Acesso Rápido</h3>
                    <p className="text-gray-300">Interface intuitiva e responsiva que se adapta ao seu fluxo de trabalho</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Star className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Ferramentas Curadas</h3>
                    <p className="text-gray-300">Apenas as melhores e mais testadas ferramentas do mercado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-900/50">
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
            Transforme sua <span className="text-red-500">produtividade</span> hoje mesmo
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Economize semanas de pesquisa e mais de R$ 5.000 em ferramentas testadas.
          </p>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border-2 border-red-500/30 shadow-2xl mb-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-500/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            {/* Badge de destaque */}
            <div className="inline-flex items-center space-x-2 bg-red-600 text-white rounded-full px-6 py-2 mb-6 font-semibold">
              <Star className="w-4 h-4 fill-current" />
              <span>OFERTA EXCLUSIVA</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              🧠 Cérebro Digital + 🎁 FinTrack
            </h3>
            
            <p className="text-gray-300 mb-6 text-lg">
              O combo completo para revolucionar sua produtividade e organizar suas finanças
            </p>
            
            {/* Grid de benefícios */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Cérebro Digital */}
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Cérebro Digital</h4>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    +200 ferramentas organizadas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    Interface estilo Netflix
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    15 categorias específicas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    Atualizações vitalícias
                  </li>
                </ul>
              </div>

              {/* FinTrack */}
              <div className="bg-gradient-to-br from-blue-900/30 to-teal-900/30 rounded-2xl p-6 border border-teal-500/30 relative">
                <div className="absolute top-2 right-2 bg-teal-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                  BÔNUS
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center mr-4">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white">FinTrack</h4>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-400 mr-3 flex-shrink-0" />
                    Dashboard financeiro completo
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-400 mr-3 flex-shrink-0" />
                    Controle de receitas/despesas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-400 mr-3 flex-shrink-0" />
                    Relatórios detalhados
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-400 mr-3 flex-shrink-0" />
                    Educação financeira
                  </li>
                </ul>
              </div>
            </div>

            {/* Valor */}
            <div className="mb-6">
              <div className="flex items-center justify-center mb-2">
                <span className="text-gray-400 text-lg line-through mr-4">De R$ 297,00</span>
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">77% OFF</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-red-500 text-3xl">R$</span>
                <span className="text-6xl font-bold text-red-500">67</span>
                <span className="text-red-500 text-3xl">,90</span>
              </div>
              <p className="text-gray-400 mt-2">Pagamento único • Acesso vitalício garantido</p>
            </div>

            {/* Call to action especial */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 mb-6">
              <p className="text-white font-bold text-xl mb-2">
                🔥 Menos de R$ 0,34 por ferramenta!
              </p>
              <p className="text-red-100">
                Valor que você economizaria em 1 semana de pesquisa
              </p>
            </div>

            <Button asChild className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 text-xl font-bold rounded-2xl w-full transform hover:scale-105 transition-transform shadow-lg">
              <Link to="/checkout">
                ⚡ GARANTIR ACESSO COMPLETO AGORA
              </Link>
            </Button>

            <p className="text-gray-400 text-sm mt-4">
              🔒 Pagamento 100% seguro • Acesso imediato após confirmação
            </p>
          </div>

          <div className="bg-teal-900/20 border border-teal-500/30 rounded-xl p-6">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-teal-400 mr-2" />
              <span className="text-teal-400 font-semibold">Garantia Incondicional de 7 Dias</span>
            </div>
            <p className="text-white font-medium mb-2">Teste tudo sem riscos por 7 dias completos.</p>
            <p className="text-gray-300">Não ficou satisfeito? Devolvemos 100% do seu investimento, sem perguntas.</p>
          </div>
        </div>
      </section>

      {/* Bonus Section - Moved after pricing */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-900/20 to-teal-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                🎁 Bônus Exclusivo: <span className="text-blue-400">FinTrack</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Ganhe acesso GRATUITO ao nosso aplicativo de controle financeiro!
              </p>
            </div>
            
            <div className="flex justify-center mb-8">
              <img 
                src="/lovable-uploads/9362b5a8-32a3-4909-92fd-1f495784b006.png" 
                alt="Dashboard FinTrack - Controle Financeiro Completo"
                className="max-w-2xl w-full h-auto rounded-xl shadow-2xl border border-gray-600"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Totalmente Gratuito</h3>
                <p className="text-gray-300">Sem custos adicionais</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  <BarChart3 className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Dashboard Profissional</h3>
                <p className="text-gray-300">Interface moderna e intuitiva</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Relatórios Detalhados</h3>
                <p className="text-gray-300">Análises completas das suas finanças</p>
              </div>
            </div>

            <div className="bg-teal-900/30 border border-teal-500/30 rounded-lg p-4 text-center">
              <p className="text-teal-400 font-semibold">
                🎯 Receba este aplicativo completo como bônus exclusivo!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Perguntas <span className="text-red-500">Frequentes</span>
            </h2>
            <p className="text-xl text-gray-400">
              Tire suas dúvidas sobre o Cérebro Digital
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-gray-900 rounded-xl border border-gray-700 px-6">
              <AccordionTrigger className="text-white hover:text-red-500 text-left">
                O que exatamente está incluso no Cérebro Digital?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Você recebe acesso a mais de 200 ferramentas de IA organizadas em 15 categorias específicas, 
                incluindo criação de conteúdo, design, vídeo, automação, Meta Ads, Google Ads, e muito mais. 
                Todas as ferramentas são testadas e aprovadas pela nossa equipe.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-gray-900 rounded-xl border border-gray-700 px-6">
              <AccordionTrigger className="text-white hover:text-red-500 text-left">
                As ferramentas são gratuitas ou pagas?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                O Cérebro Digital é uma curadoria profissional. Algumas ferramentas são gratuitas, 
                outras possuem planos pagos. O valor está na organização, teste e curadoria que fazemos, 
                economizando horas de pesquisa e garantindo que você acesse apenas as melhores opções.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-gray-900 rounded-xl border border-gray-700 px-6">
              <AccordionTrigger className="text-white hover:text-red-500 text-left">
                Recebo atualizações quando novas ferramentas são adicionadas?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Sim! O acesso é vitalício e inclui todas as atualizações. Adicionamos novas ferramentas 
                constantemente e você sempre terá acesso às novidades sem custo adicional.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-gray-900 rounded-xl border border-gray-700 px-6">
              <AccordionTrigger className="text-white hover:text-red-500 text-left">
                Como funciona a garantia de 7 dias?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Você tem 7 dias corridos para testar completamente o Cérebro Digital. Se por qualquer motivo 
                não ficar satisfeito, devolvemos 100% do seu investimento, sem perguntas ou burocracias.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-gray-900 rounded-xl border border-gray-700 px-6">
              <AccordionTrigger className="text-white hover:text-red-500 text-left">
                O bônus FinTrack tem custo adicional?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Não! O FinTrack é um bônus completamente gratuito para quem adquire o Cérebro Digital. 
                É um aplicativo completo de controle financeiro com dashboard profissional, 
                relatórios detalhados e acompanhamento de receitas e despesas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-gray-900 rounded-xl border border-gray-700 px-6">
              <AccordionTrigger className="text-white hover:text-red-500 text-left">
                Posso acessar de qualquer dispositivo?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Sim! O Cérebro Digital é totalmente responsivo e pode ser acessado de qualquer dispositivo: 
                computador, tablet ou smartphone. Sua conta fica sempre sincronizada.
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
