
import { useState } from 'react';
import { Heart, Play, Plus, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ToolCardProps {
  title: string;
  description: string;
  icon: string;
  category: string;
  isFavorited?: boolean;
  isNew?: boolean;
}

const ToolCard = ({ title, description, icon, category, isFavorited = false, isNew = false }: ToolCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [favorited, setFavorited] = useState(isFavorited);

  return (
    <div 
      className="group relative min-w-[200px] w-[200px] h-[300px] transition-all duration-300 hover:scale-110 hover:z-10 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Card */}
      <div className="w-full h-full overflow-hidden rounded-md bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 border border-gray-600 relative">
        {/* Background with icon */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900">
          <span className="text-6xl opacity-80">{icon}</span>
        </div>
        
        {/* Title overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-3">
          <h3 className="text-white font-semibold text-sm line-clamp-2">
            {title}
          </h3>
        </div>

        {/* New badge */}
        {isNew && (
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
            NOVO
          </div>
        )}

        {/* Hover overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4 transition-all duration-300">
            <div className="transform translate-y-0">
              <h3 className="text-white font-bold text-base mb-2">
                {title}
              </h3>
              <p className="text-gray-300 text-xs mb-3 line-clamp-3">
                {description}
              </p>
              
              {/* Action buttons */}
              <div className="flex items-center space-x-2">
                <Button 
                  size="sm" 
                  className="bg-white text-black hover:bg-gray-200 rounded-full w-8 h-8 p-0"
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
                  className={`rounded-full w-8 h-8 p-0 border-2 ${
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
                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-full w-8 h-8 p-0 bg-transparent border-gray-400 text-white hover:border-white ml-auto"
                >
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToolCard;
