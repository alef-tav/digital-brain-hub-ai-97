
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Play, Plus, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CategoryCardProps {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  isFavorited?: boolean;
  isNew?: boolean;
}

// Mapeamento de categorias para rotas
const getCategoryRoute = (id: number, title: string) => {
  const routes: { [key: number]: string } = {
    1: '/organizacao-processo-produtividade',
    2: '/buscadores-ias',
    3: '/ias-codigos-abertos',
    4: '/midias-sociais',
    5: '/buscadores-interesses',
    6: '/geradores-mapas-mentais',
    // ... outras categorias
  };
  
  return routes[id] || '/';
};

const CategoryCard = ({ id, title, description, icon, image, isFavorited = false, isNew = false }: CategoryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [favorited, setFavorited] = useState(isFavorited);
  const navigate = useNavigate();

  const handleCardClick = () => {
    const route = getCategoryRoute(id, title);
    navigate(route);
  };

  return (
    <div 
      className="group relative w-full aspect-[2/3] transition-all duration-300 hover:scale-105 hover:z-10 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Main Card - Estilo cartaz de cinema */}
      <div className="w-full h-full overflow-hidden rounded-lg relative shadow-2xl">
        {/* Imagem de fundo */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        {/* Overlay gradient para melhor legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        
        {/* Título na parte inferior */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-bold text-sm md:text-base lg:text-lg line-clamp-3 drop-shadow-lg text-center">
            {title}
          </h3>
        </div>

        {/* Badge "NOVO" */}
        {isNew && (
          <div className="absolute top-3 right-3 bg-red-600 text-white text-xs px-2 py-1 rounded-md font-semibold">
            NOVO
          </div>
        )}

        {/* Hover overlay expandido - estilo Netflix */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/95 flex flex-col justify-between p-4 transition-all duration-300 z-20">
            <div>
              <h3 className="text-white font-bold text-lg mb-3">
                {title}
              </h3>
              <p className="text-gray-300 text-sm mb-4 line-clamp-6">
                {description}
              </p>
            </div>
            
            {/* Botões de ação */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Button 
                  size="sm" 
                  className="bg-white text-black hover:bg-gray-200 rounded-full w-8 h-8 p-0"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick();
                  }}
                >
                  <Play className="w-4 h-4 fill-current" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFavorited(!favorited);
                  }}
                  className={`rounded-full w-8 h-8 p-0 border ${
                    favorited 
                      ? 'bg-white border-white text-black' 
                      : 'bg-transparent border-gray-400 text-white hover:border-white'
                  }`}
                >
                  {favorited ? (
                    <Heart className="w-4 h-4 fill-current" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </Button>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="rounded-full w-8 h-8 p-0 bg-transparent border-gray-400 text-white hover:border-white"
                onClick={(e) => e.stopPropagation()}
              >
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryCard;
