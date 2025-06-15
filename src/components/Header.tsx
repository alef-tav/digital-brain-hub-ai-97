
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
        <div className="flex items-center justify-between h-16 lg:h-18 xl:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 lg:space-x-3">
            <img 
              src="/lovable-uploads/f616debe-7a77-425a-ae20-2a4a6321115f.png" 
              alt="Cérebro Digital" 
              className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12"
            />
            <span className="text-white font-bold text-lg lg:text-xl xl:text-2xl">
              Cérebro Digital
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 xl:space-x-10">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-white transition-colors text-base lg:text-lg xl:text-xl"
            >
              Início
            </Link>
            {user && (
              <Link 
                to="/favoritos" 
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-base lg:text-lg xl:text-xl"
              >
                <Heart className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
                <span>Favoritos</span>
              </Link>
            )}
            
            {user ? (
              <div className="flex items-center space-x-4 lg:space-x-5">
                <div className="flex items-center space-x-2 text-gray-300">
                  <User className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span className="text-sm lg:text-base xl:text-lg">{user.email}</span>
                </div>
                <Button
                  onClick={handleSignOut}
                  variant="outline"
                  size="sm"
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white text-sm lg:text-base px-3 py-1 lg:px-4 lg:py-2"
                >
                  <LogOut className="w-4 h-4 lg:w-5 lg:h-5 mr-1 lg:mr-2" />
                  Sair
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4 lg:space-x-5">
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-gray-300 text-black hover:bg-gray-300 hover:text-black text-sm lg:text-base px-3 py-1 lg:px-4 lg:py-2"
                >
                  <Link to="/auth">Entrar</Link>
                </Button>
                <Button 
                  asChild 
                  className="bg-red-600 hover:bg-red-700 text-white text-sm lg:text-base px-3 py-1 lg:px-4 lg:py-2"
                >
                  <Link to="/checkout">Adquirir Acesso</Link>
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
                    className="w-full border-gray-300 text-black hover:bg-gray-300 hover:text-black"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link to="/auth">Entrar</Link>
                  </Button>
                  <Button 
                    asChild 
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link to="/checkout">Adquirir Acesso</Link>
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
