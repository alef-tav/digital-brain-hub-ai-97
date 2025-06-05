
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Check, Shield, Star, CreditCard, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const CheckoutPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user, subscription } = useAuth();
  const navigate = useNavigate();

  const handlePayment = async () => {
    if (!user) {
      navigate('/auth');
      return;
    }

    if (subscription?.status === 'active') {
      toast.info('Você já possui acesso vitalício!');
      navigate('/dashboard');
      return;
    }

    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('create-payment', {
        body: {
          amount: 6790, // R$ 67,90 em centavos
          currency: 'brl',
          user_id: user.id,
          email: user.email
        }
      });

      if (error) {
        console.error('Payment error:', error);
        toast.error('Erro ao processar pagamento. Tente novamente.');
        return;
      }

      if (data?.url) {
        // Abrir checkout do Stripe em nova aba
        window.open(data.url, '_blank');
      }
    } catch (error) {
      console.error('Payment error:', error);
      toast.error('Erro ao processar pagamento. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao início
            </Link>
            
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mr-3">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">Cérebro Digital</h1>
            </div>
            <p className="text-gray-400">Finalize sua compra e tenha acesso vitalício</p>
          </div>

          <Card className="bg-gray-900 border-gray-700 mb-6">
            <CardHeader className="text-center">
              <div className="inline-flex items-center space-x-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-4">
                <Star className="w-4 h-4 text-red-400" />
                <span className="text-red-400 text-sm font-medium">OFERTA ESPECIAL</span>
              </div>
              <CardTitle className="text-2xl text-white">Acesso Vitalício</CardTitle>
              <CardDescription className="text-gray-400">
                +200 ferramentas organizadas + FinTrack gratuito
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
                <p className="text-gray-400 mt-2">Pagamento único • Acesso vitalício</p>
              </div>

              <div className="grid gap-4">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-white">+200 ferramentas de IA organizadas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-white">Interface estilo Netflix</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-white">15 categorias específicas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-white">Atualizações vitalícias incluídas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-white">BÔNUS: FinTrack (App Financeiro)</span>
                </div>
              </div>

              <Button 
                onClick={handlePayment}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg font-semibold"
                disabled={isLoading}
              >
                <CreditCard className="w-5 h-5 mr-2" />
                {isLoading ? 'Processando...' : 'GARANTIR ACESSO AGORA'}
              </Button>

              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-green-400 font-semibold">Garantia de 7 Dias</span>
                </div>
                <p className="text-green-100 text-sm">
                  100% do seu dinheiro de volta se não ficar satisfeito
                </p>
              </div>

              <p className="text-gray-400 text-sm text-center">
                🔒 Pagamento 100% seguro processado pelo Stripe
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
