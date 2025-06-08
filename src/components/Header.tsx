
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Heart, LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 xl:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 lg:space-x-3">
            <div className="w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg lg:text-xl xl:text-2xl">C</span>
            </div>
            <span className="text-white font-bold text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl">
              Cérebro Digital
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 xl:space-x-12">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-white transition-colors text-base lg:text-lg xl:text-xl 2xl:text-2xl"
            >
              Início
            </Link>
            {user && (
              <Link 
                to="/favoritos" 
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-base lg:text-lg xl:text-xl 2xl:text-2xl"
              >
                <Heart className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
                <span>Favoritos</span>
              </Link>
            )}
            
            {user ? (
              <div className="flex items-center space-x-4 lg:space-x-6">
                <div className="flex items-center space-x-2 lg:space-x-3 text-gray-300">
                  <User className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
                  <span className="text-sm lg:text-base xl:text-lg 2xl:text-xl">{user.email}</span>
                </div>
                <Button
                  onClick={handleSignOut}
                  variant="outline"
                  size="sm"
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white text-sm lg:text-base xl:text-lg px-3 py-1 lg:px-4 lg:py-2 xl:px-6 xl:py-3"
                >
                  <LogOut className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 mr-1 lg:mr-2" />
                  Sair
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4 lg:space-x-6">
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-black text-sm lg:text-base xl:text-lg px-3 py-1 lg:px-4 lg:py-2 xl:px-6 xl:py-3"
                >
                  <Link to="/auth">Entrar</Link>
                </Button>
                <Button 
                  asChild 
                  className="bg-red-600 hover:bg-red-700 text-white text-sm lg:text-base xl:text-lg px-3 py-1 lg:px-4 lg:py-2 xl:px-6 xl:py-3"
                >
                  <Link to="/landing">Adquirir Acesso</Link>
                </Button>
              </div>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-zinc-800">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-300 hover:text-white transition-colors text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              {user && (
                <Link 
                  to="/favoritos" 
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Heart className="w-5 h-5" />
                  <span>Favoritos</span>
                </Link>
              )}
              
              {user ? (
                <div className="space-y-4 pt-2 border-t border-zinc-800">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <User className="w-5 h-5" />
                    <span className="text-sm">{user.email}</span>
                  </div>
                  <Button
                    onClick={() => {
                      handleSignOut();
                      setIsMenuOpen(false);
                    }}
                    variant="outline"
                    size="sm"
                    className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-full justify-start"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sair
                  </Button>
                </div>
              ) : (
                <div className="space-y-3 pt-2 border-t border-zinc-800">
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full border-white text-white hover:bg-white hover:text-black"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link to="/auth">Entrar</Link>
                  </Button>
                  <Button 
                    asChild 
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link to="/landing">Adquirir Acesso</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
