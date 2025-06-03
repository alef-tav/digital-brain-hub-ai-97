
import ToolBlogCard from '@/components/ToolBlogCard';
import { categoriesData } from '@/data/toolsData';

const TranscricaoAudioTexto = () => {
  const category = categoriesData.find(cat => cat.title === "Transcrição de Áudio em Texto");
  
  if (!category) return <div>Categoria não encontrada</div>;

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-600 bg-clip-text text-transparent">
            🎧 Transcrição de Áudio em Texto
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Converta seus arquivos de áudio e vídeo em texto de forma rápida e precisa com as melhores ferramentas de transcrição automática e manual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.tools.map((tool, index) => (
            <ToolBlogCard 
              key={index}
              title={tool.title}
              description={tool.description}
              detailedDescription={tool.detailedDescription}
              icon={tool.icon}
              image={tool.image}
              link={tool.link}
              category="Transcrição de Áudio em Texto"
              isNew={tool.isNew}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TranscricaoAudioTexto;
