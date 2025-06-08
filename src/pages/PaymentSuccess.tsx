
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, CheckCircle, Gift, ArrowRight, Loader } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const { user, checkSubscription } = useAuth();
  const [searchParams] = useSearchParams();
  const [isVerifying, setIsVerifying] = useState(true);
  const [paymentVerified, setPaymentVerified] = useState(false);

  useEffect(() => {
    const verifyPayment = async () => {
      const sessionId = searchParams.get('session_id');
      
      if (!sessionId || !user) {
        setIsVerifying(false);
        return;
      }

      try {
        const { data, error } = await supabase.functions.invoke('verify-payment', {
          body: {
            session_id: sessionId,
            user_id: user.id
          }
        });

        if (error) {
          console.error('Error verifying payment:', error);
          toast.error('Erro ao verificar pagamento');
        } else if (data?.subscription_active) {
          setPaymentVerified(true);
          await checkSubscription();
          toast.success('Pagamento confirmado! Bem-vindo ao Cérebro Digital!');
        }
      } catch (error) {
        console.error('Error verifying payment:', error);
        toast.error('Erro ao verificar pagamento');
      } finally {
        setIsVerifying(false);
      }
    };

    verifyPayment();
  }, [user, searchParams, checkSubscription]);

  if (isVerifying) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="max-w-lg w-full">
          <Card className="bg-gray-900 border-gray-700 text-center">
            <CardHeader className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <Loader className="w-8 h-8 text-white animate-spin" />
              </div>
              <CardTitle className="text-2xl text-white">Verificando Pagamento...</CardTitle>
              <CardDescription className="text-gray-400">
                Aguarde enquanto confirmamos seu pagamento
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-lg w-full">
        <Card className="bg-gray-900 border-gray-700 text-center">
          <CardHeader className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl text-white">
              {paymentVerified ? 'Pagamento Confirmado!' : 'Processando Pagamento'}
            </CardTitle>
            <CardDescription className="text-gray-400">
              {paymentVerified 
                ? 'Seu acesso vitalício ao Cérebro Digital foi ativado com sucesso'
                : 'Seu pagamento está sendo processado. Você receberá uma confirmação em breve.'
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gradient-to-r from-red-600/20 to-red-700/20 border border-red-500/30 rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <Brain className="w-6 h-6 text-red-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">O que você recebeu:</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✅ Acesso vitalício a +200 ferramentas</li>
                <li>✅ Interface organizada estilo Netflix</li>
                <li>✅ Atualizações constantes incluídas</li>
                <li>✅ BÔNUS: FinTrack (App Financeiro)</li>
              </ul>
            </div>

            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <Gift className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-blue-400 font-semibold">Bônus Desbloqueado!</span>
              </div>
              <p className="text-blue-100 text-sm">
                Seu acesso ao FinTrack (controle financeiro) também foi ativado
              </p>
            </div>

            <Button 
              onClick={() => navigate('/dashboard')}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg font-semibold"
              disabled={!paymentVerified}
            >
              {paymentVerified ? (
                <>
                  Acessar Meu Dashboard
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              ) : (
                'Aguardando confirmação...'
              )}
            </Button>

            <p className="text-gray-400 text-sm">
              📧 Você receberá um email de confirmação em breve com todos os detalhes
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PaymentSuccess;
