
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ToolCard from './ToolCard';
import { useRef } from 'react';

interface Tool {
  title: string;
  description: string;
  icon: string;
  isNew?: boolean;
}

interface CategorySectionProps {
  title: string;
  tools: Tool[];
}

const CategorySection = ({ title, tools }: CategorySectionProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollContainer = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 800;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="mb-8 group">
      <div className="flex items-center justify-between mb-4 px-4 md:px-12">
        <h2 className="text-white text-xl md:text-2xl font-bold hover:text-gray-300 transition-colors cursor-pointer">
          {title}
        </h2>
        <div className="hidden md:flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollContainer('left')}
            className="bg-black/50 border border-gray-600 text-white hover:bg-black/70 rounded-full w-10 h-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollContainer('right')}
            className="bg-black/50 border border-gray-600 text-white hover:bg-black/70 rounded-full w-10 h-10"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
      
      <div
        ref={scrollContainerRef}
        className="flex space-x-2 overflow-x-auto scrollbar-hide pb-4 px-4 md:px-12"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {tools.map((tool, index) => (
          <ToolCard
            key={index}
            title={tool.title}
            description={tool.description}
            icon={tool.icon}
            category={title}
            isNew={tool.isNew}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
