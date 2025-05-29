
import { useState } from 'react';
import { Search, Heart, Star, Grid3X3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🧠</span>
            <h1 className="text-xl font-bold text-white">Cérebro Digital</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Button variant="ghost" className="text-white hover:text-red-500 transition-colors">
              Início
            </Button>
            <Button variant="ghost" className="text-white hover:text-red-500 transition-colors">
              <Heart className="w-4 h-4 mr-2" />
              Favoritas
            </Button>
            <Button variant="ghost" className="text-white hover:text-red-500 transition-colors">
              <Star className="w-4 h-4 mr-2" />
              Novidades
            </Button>
            <Button variant="ghost" className="text-white hover:text-red-500 transition-colors">
              <Grid3X3 className="w-4 h-4 mr-2" />
              Categorias
            </Button>
          </nav>

          {/* Search */}
          <div className="flex items-center space-x-4">
            {isSearchOpen ? (
              <div className="flex items-center space-x-2">
                <Input
                  placeholder="Buscar ferramentas..."
                  className="w-64 bg-gray-900 border-gray-700 text-white placeholder-gray-400"
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
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
                className="text-white hover:text-red-500"
              >
                <Search className="w-5 h-5" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
