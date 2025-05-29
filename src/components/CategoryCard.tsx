
import { useState } from 'react';
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

const CategoryCard = ({ id, title, description, icon, image, isFavorited = false, isNew = false }: CategoryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [favorited, setFavorited] = useState(isFavorited);

  return (
    <div 
      className="group relative min-w-[140px] w-[140px] h-[210px] transition-all duration-300 hover:scale-110 hover:z-10 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Card - Estilo cartaz de cinema */}
      <div className="w-full h-full overflow-hidden rounded-md relative shadow-lg">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* Ícone no centro */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl opacity-90 drop-shadow-lg">{icon}</span>
        </div>
        
        {/* Título na parte inferior */}
        <div className="absolute bottom-0 left-0 right-0 p-2">
          <h3 className="text-white font-semibold text-xs line-clamp-2 drop-shadow-lg">
            {title}
          </h3>
        </div>

        {/* Badge "NOVO" */}
        {isNew && (
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded">
            NOVO
          </div>
        )}

        {/* Hover overlay expandido - estilo Netflix */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/90 flex flex-col justify-between p-3 transition-all duration-300 z-20">
            <div>
              <h3 className="text-white font-bold text-sm mb-2">
                {title}
              </h3>
              <p className="text-gray-300 text-xs mb-3 line-clamp-4">
                {description}
              </p>
            </div>
            
            {/* Botões de ação */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <Button 
                  size="sm" 
                  className="bg-white text-black hover:bg-gray-200 rounded-full w-6 h-6 p-0"
                >
                  <Play className="w-3 h-3 fill-current" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFavorited(!favorited);
                  }}
                  className={`rounded-full w-6 h-6 p-0 border ${
                    favorited 
                      ? 'bg-white border-white text-black' 
                      : 'bg-transparent border-gray-400 text-white hover:border-white'
                  }`}
                >
                  {favorited ? (
                    <Heart className="w-3 h-3 fill-current" />
                  ) : (
                    <Plus className="w-3 h-3" />
                  )}
                </Button>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="rounded-full w-6 h-6 p-0 bg-transparent border-gray-400 text-white hover:border-white"
              >
                <ChevronDown className="w-3 h-3" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryCard;
