
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Brain, Shield, Zap, Users, Globe, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';

const LandingPage = () => {
  const { user } = useAuth();

  const features = [
    {
      icon: <Brain className="w-6 h-6 text-blue-500" />,
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
      content: "Economizo horas procurando ferramentas. Tudo organizado em um só lugar!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Ana Costa",
      role: "Designer Freelancer", 
      content: "O acesso às ferramentas de IA me transformou completamente. Recomendo!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Roberto Lima",
      role: "Consultor de Marketing",
      content: "Interface incrível e ferramentas que realmente funcionam. Valeu cada centavo!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>
        
        <div className="container mx-auto text-center max-w-6xl relative z-10">
          <div className="inline-flex items-center space-x-2 bg-red-600/20 border border-red-500/30 rounded-full px-6 py-3 mb-8">
            <Star className="w-5 h-5 text-red-400" />
            <span className="text-red-400 font-semibold">OFERTA LIMITADA - 77% OFF</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Cérebro Digital
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 mb-6 font-light">
            +200 Ferramentas de IA Organizadas
          </p>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Interface estilo Netflix com todas as ferramentas que você precisa. 
            Economize tempo e encontre a ferramenta perfeita em segundos.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            {user ? (
              <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 text-xl font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Link to="/dashboard">
                  <Brain className="w-6 h-6 mr-3" />
                  Acessar Dashboard
                </Link>
              </Button>
            ) : (
              <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 text-xl font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Link to="/checkout">
                  <ArrowRight className="w-6 h-6 mr-3" />
                  Garantir Acesso Agora
                </Link>
              </Button>
            )}
            <Button asChild variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-4 text-xl rounded-full backdrop-blur-sm">
              <a href="#demo" className="smooth-scroll">
                Ver Demonstração
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/5 rounded-2xl backdrop-blur-sm">
              <CheckCircle className="w-8 h-8 text-green-400" />
              <span className="text-white font-semibold text-lg">Acesso Vitalício</span>
              <span className="text-gray-300 text-sm">Sem mensalidades</span>
            </div>
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/5 rounded-2xl backdrop-blur-sm">
              <Shield className="w-8 h-8 text-blue-400" />
              <span className="text-white font-semibold text-lg">Garantia 7 dias</span>
              <span className="text-gray-300 text-sm">100% do dinheiro de volta</span>
            </div>
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/5 rounded-2xl backdrop-blur-sm">
              <Users className="w-8 h-8 text-yellow-400" />
              <span className="text-white font-semibold text-lg">+500 usuários</span>
              <span className="text-gray-300 text-sm">Satisfeitos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section id="demo" className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Veja como funciona</h2>
            <p className="text-gray-300 text-xl">Interface intuitiva e organizada</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-700">
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1200&h=800&fit=crop" 
              alt="Interface Preview" 
              className="w-full h-96 object-cover rounded-2xl"
            />
            <div className="mt-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Interface Estilo Netflix</h3>
              <p className="text-gray-300 text-lg">Navegue pelas categorias e encontre exatamente o que precisa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Oferta Especial</h2>
            <p className="text-gray-300 text-xl">Acesso vitalício por tempo limitado</p>
          </div>

          <div className="max-w-lg mx-auto">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-red-500/50 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-4 text-lg font-bold">
                🔥 OFERTA LIMITADA - 77% OFF
              </div>
              
              <CardHeader className="text-center pt-16 pb-8">
                <CardTitle className="text-3xl text-white mb-2">Acesso Vitalício</CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  +200 ferramentas organizadas
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-gray-400 text-xl line-through mr-6">De R$ 297,00</span>
                    <span className="bg-red-600 text-white px-4 py-2 rounded-full text-lg font-bold">77% OFF</span>
                  </div>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-red-500 text-3xl">R$</span>
                    <span className="text-6xl font-bold text-red-500">67</span>
                    <span className="text-red-500 text-3xl">,90</span>
                  </div>
                  <p className="text-gray-300 text-lg">Pagamento único • Sem mensalidades</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-white text-lg">+200 ferramentas de IA organizadas</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-white text-lg">Interface estilo Netflix</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-white text-lg">15 categorias específicas</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-white text-lg">Atualizações vitalícias incluídas</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-white text-lg">Suporte prioritário</span>
                  </div>
                </div>

                {user ? (
                  <Button asChild className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-6 text-xl font-bold rounded-xl shadow-lg">
                    <Link to="/dashboard">
                      <Brain className="w-6 h-6 mr-3" />
                      Acessar Dashboard
                    </Link>
                  </Button>
                ) : (
                  <Button asChild className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-6 text-xl font-bold rounded-xl shadow-lg">
                    <Link to="/checkout">
                      <ArrowRight className="w-6 h-6 mr-3" />
                      GARANTIR ACESSO AGORA
                    </Link>
                  </Button>
                )}

                <div className="bg-green-900/30 border-2 border-green-500/50 rounded-xl p-6 text-center">
                  <div className="flex items-center justify-center mb-3">
                    <Shield className="w-6 h-6 text-green-400 mr-3" />
                    <span className="text-green-400 font-bold text-lg">Garantia de 7 Dias</span>
                  </div>
                  <p className="text-green-100">
                    100% do seu dinheiro de volta se não ficar satisfeito
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Por que escolher o Cérebro Digital?</h2>
            <p className="text-gray-300 text-xl">Desenvolvido pensando na sua produtividade</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-600 hover:border-red-500/50 transition-all duration-300 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 text-lg">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">O que nossos usuários dizem</h2>
            <p className="text-gray-300 text-xl">Mais de 500 pessoas já transformaram sua produtividade</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-600 backdrop-blur-sm">
                <CardContent className="pt-8">
                  <div className="flex items-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-200 mb-6 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-white font-bold">{testimonial.name}</p>
                      <p className="text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-900/20 via-purple-900/20 to-blue-900/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-white">200+</div>
              <div className="text-gray-300">Ferramentas</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-white">500+</div>
              <div className="text-gray-300">Usuários</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-white">15</div>
              <div className="text-gray-300">Categorias</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-white">24/7</div>
              <div className="text-gray-300">Disponível</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-900/30 to-red-800/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Pronto para transformar sua produtividade?
          </h2>
          <p className="text-gray-200 text-xl mb-12 leading-relaxed">
            Junte-se a centenas de pessoas que já descobriram o poder da organização
          </p>
          
          {user ? (
            <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
              <Link to="/dashboard">
                <Brain className="w-6 h-6 mr-3" />
                Acessar Meu Dashboard
              </Link>
            </Button>
          ) : (
            <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
              <Link to="/checkout">
                <ArrowRight className="w-6 h-6 mr-3" />
                Garantir Acesso Vitalício
              </Link>
            </Button>
          )}
          
          <p className="text-gray-300 mt-8 text-lg">
            🔒 Pagamento 100% seguro • Garantia de 7 dias
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
