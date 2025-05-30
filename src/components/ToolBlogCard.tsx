
import { useState } from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ToolBlogCardProps {
  title: string;
  description: string;
  detailedDescription: string;
  icon: string;
  image: string;
  link: string;
  isNew?: boolean;
}

const ToolBlogCard = ({ 
  title, 
  description, 
  detailedDescription, 
  icon, 
  image, 
  link, 
  isNew = false 
}: ToolBlogCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
    // TODO: Add to favorites context/localStorage
    console.log(`${title} ${isFavorited ? 'removed from' : 'added to'} favorites`);
  };

  return (
    <Card className="bg-zinc-900 border-zinc-800 overflow-hidden hover:border-zinc-700 transition-colors">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg p-2">
          <span className="text-2xl">{icon}</span>
        </div>
        <div className="absolute top-4 right-4 flex items-center space-x-2">
          <Button
            onClick={handleFavorite}
            size="sm"
            variant="ghost"
            className="bg-black/70 backdrop-blur-sm rounded-lg p-2 hover:bg-black/80"
          >
            <Star 
              className={`w-5 h-5 ${
                isFavorited 
                  ? 'text-yellow-400 fill-yellow-400' 
                  : 'text-white hover:text-yellow-400'
              }`} 
            />
          </Button>
          {isNew && (
            <div className="bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
              NOVO
            </div>
          )}
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {detailedDescription}
        </p>
        
        <Button 
          onClick={() => window.open(link, '_blank')}
          className="w-full bg-white text-black hover:bg-gray-200 font-semibold"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Acessar {title}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ToolBlogCard;
