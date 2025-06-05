
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Brain, Shield, Zap, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';

const LandingPage = () => {
  const { user } = useAuth();

  const features = [
    {
      icon: <Brain className="w-6 h-6 text-red-500" />,
      title: "Interface Intuitiva",
      description: "Navegação estilo Netflix com categorias organizadas"
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Acesso Instantâneo",
      description: "Links diretos para +200 ferramentas verificadas"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      title: "Atualizações Constantes",
      description: "Novas ferramentas adicionadas semanalmente"
    }
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Empreendedor Digital",
      content: "Economizo horas procurando ferramentas. Tudo organizado em um só lugar!"
    },
    {
      name: "Ana Costa",
      role: "Designer Freelancer", 
      content: "O FinTrack me ajudou a organizar minhas finanças. Valeu cada centavo!"
    },
    {
      name: "Roberto Lima",
      role: "Consultor de Marketing",
      content: "Interface incrível e ferramentas que realmente funcionam. Recomendo!"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-red-400" />
            <span className="text-red-400 text-sm font-medium">OFERTA LIMITADA - 77% OFF</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Cérebro Digital
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            +200 Ferramentas de IA Organizadas
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Interface estilo Netflix com todas as ferramentas que você precisa. 
            Economize tempo e encontre a ferramenta perfeita em segundos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {user ? (
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold">
                <Link to="/dashboard">
                  <Brain className="w-5 h-5 mr-2" />
                  Acessar Dashboard
                </Link>
              </Button>
            ) : (
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold">
                <Link to="/checkout">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Garantir Acesso Agora
                </Link>
              </Button>
            )}
            <Button asChild variant="outline" size="lg" className="border-gray-600 text-white hover:bg-gray-900 px-8 py-4 text-lg">
              <a href="#demo" className="smooth-scroll">
                Ver Demonstração
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Acesso Vitalício</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-blue-400" />
              <span>Garantia 7 dias</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>+500 usuários</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Oferta Especial</h2>
            <p className="text-gray-400 text-lg">Acesso vitalício por tempo limitado</p>
          </div>

          <div className="max-w-lg mx-auto">
            <Card className="bg-gradient-to-b from-gray-900 to-black border-red-600/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 bg-red-600 text-white text-center py-2 text-sm font-semibold">
                🔥 OFERTA LIMITADA - 77% OFF
              </div>
              
              <CardHeader className="text-center pt-12">
                <CardTitle className="text-2xl text-white">Acesso Vitalício</CardTitle>
                <CardDescription className="text-gray-400">
                  +200 ferramentas + FinTrack gratuito
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-gray-400 text-lg line-through mr-4">De R$ 297,00</span>
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">77% OFF</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-red-500 text-2xl">R$</span>
                    <span className="text-5xl font-bold text-red-500">67</span>
                    <span className="text-red-500 text-2xl">,90</span>
                  </div>
                  <p className="text-gray-400 mt-2">Pagamento único • Sem mensalidades</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white">+200 ferramentas de IA organizadas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white">Interface estilo Netflix</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white">15 categorias específicas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white">Atualizações vitalícias incluídas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white">BÔNUS: FinTrack (App Financeiro)</span>
                  </div>
                </div>

                {user ? (
                  <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg font-semibold">
                    <Link to="/dashboard">
                      <Brain className="w-5 h-5 mr-2" />
                      Acessar Dashboard
                    </Link>
                  </Button>
                ) : (
                  <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg font-semibold">
                    <Link to="/checkout">
                      <ArrowRight className="w-5 h-5 mr-2" />
                      GARANTIR ACESSO AGORA
                    </Link>
                  </Button>
                )}

                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Shield className="w-5 h-5 text-green-400 mr-2" />
                    <span className="text-green-400 font-semibold">Garantia de 7 Dias</span>
                  </div>
                  <p className="text-green-100 text-sm">
                    100% do seu dinheiro de volta se não ficar satisfeito
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que escolher o Cérebro Digital?</h2>
            <p className="text-gray-400 text-lg">Desenvolvido pensando na sua produtividade</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-red-500/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O que nossos usuários dizem</h2>
            <p className="text-gray-400 text-lg">Mais de 500 pessoas já transformaram sua produtividade</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-900/20 to-red-800/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para transformar sua produtividade?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Junte-se a centenas de pessoas que já descobriram o poder da organização
          </p>
          
          {user ? (
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold">
              <Link to="/dashboard">
                <Brain className="w-5 h-5 mr-2" />
                Acessar Meu Dashboard
              </Link>
            </Button>
          ) : (
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold">
              <Link to="/checkout">
                <ArrowRight className="w-5 h-5 mr-2" />
                Garantir Acesso Vitalício
              </Link>
            </Button>
          )}
          
          <p className="text-gray-400 text-sm mt-4">
            🔒 Pagamento 100% seguro • Garantia de 7 dias
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
