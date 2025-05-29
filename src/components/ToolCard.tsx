
import { useState } from 'react';
import { Heart, ExternalLink, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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
      className="group relative min-w-[280px] h-[160px] transition-all duration-300 hover:scale-105 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="w-full h-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-red-500 transition-all duration-300">
        <CardContent className="p-0 relative h-full">
          {/* Background gradient */}
          <div className="absolute inset-0 netflix-gradient opacity-20" />
          
          {/* Content */}
          <div className="relative h-full p-4 flex flex-col justify-between">
            {/* Top section */}
            <div className="flex items-start justify-between">
              <div className="text-3xl">{icon}</div>
              {isNew && (
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  NOVO
                </span>
              )}
            </div>

            {/* Middle section */}
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">
                {title}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-2">
                {description}
              </p>
            </div>

            {/* Bottom section - appears on hover */}
            <div className={`flex items-center space-x-2 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              <Button size="sm" className="netflix-gradient text-white hover:scale-105 transition-transform">
                <Play className="w-4 h-4 mr-1" />
                Acessar
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={(e) => {
                  e.stopPropagation();
                  setFavorited(!favorited);
                }}
                className={`border-gray-600 hover:border-red-500 ${
                  favorited ? 'bg-red-500 text-white' : 'bg-transparent text-white'
                }`}
              >
                <Heart className={`w-4 h-4 ${favorited ? 'fill-current' : ''}`} />
              </Button>
            </div>
          </div>

          {/* Hover overlay */}
          <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`} />
        </CardContent>
      </Card>
    </div>
  );
};

export default ToolCard;
