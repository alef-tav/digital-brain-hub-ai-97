
import { useState } from 'react';
import { Search, Heart, Star, Grid3X3, Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-white">Cérebro Digital</h1>
          </div>

          {/* Navigation - Centro */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Button variant="ghost" className="text-white hover:text-red-500 transition-colors font-medium">
              Início
            </Button>
            <Button variant="ghost" className="text-white hover:text-red-500 transition-colors font-medium">
              Favoritas
            </Button>
            <Button variant="ghost" className="text-white hover:text-red-500 transition-colors font-medium">
              Novidades
            </Button>
            <Button variant="ghost" className="text-white hover:text-red-500 transition-colors font-medium">
              Categorias
            </Button>
          </nav>

          {/* Actions - Direita */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {isSearchOpen ? (
              <div className="flex items-center space-x-2">
                <Input
                  placeholder="Buscar ferramentas..."
                  className="w-48 md:w-64 bg-gray-900 border-gray-700 text-white placeholder-gray-400"
                  autoFocus
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(false)}
                  className="text-white hover:text-red-500"
                >
                  ✕
                </Button>
              </div>
            ) : (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(true)}
                  className="text-white hover:text-red-500"
                >
                  <Search className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-red-500 hidden md:flex"
                >
                  <Bell className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-red-500"
                >
                  <User className="w-5 h-5" />
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
