
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ToolCard from './ToolCard';

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
  const scrollContainer = (direction: 'left' | 'right') => {
    const container = document.getElementById(`category-${title.replace(/\s+/g, '-')}`);
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scrollContainer('left')}
            className="bg-black/50 border-gray-700 text-white hover:bg-gray-800"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scrollContainer('right')}
            className="bg-black/50 border-gray-700 text-white hover:bg-gray-800"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <div
        id={`category-${title.replace(/\s+/g, '-')}`}
        className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4"
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
