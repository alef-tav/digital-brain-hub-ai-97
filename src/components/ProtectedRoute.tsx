
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiresSubscription?: boolean;
}

const ProtectedRoute = ({ children, requiresSubscription = false }: ProtectedRouteProps) => {
  const { user, subscription, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        navigate('/auth');
        return;
      }
      
      if (requiresSubscription && (!subscription || subscription.status !== 'active')) {
        navigate('/checkout');
        return;
      }
    }
  }, [user, subscription, loading, navigate, requiresSubscription]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-lg">Carregando...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  if (requiresSubscription && (!subscription || subscription.status !== 'active')) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
