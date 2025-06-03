
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategorySection from '@/components/CategorySection';
import { transcricaoAudioTextoTools } from '@/data/categories/transcricao';

const TranscricaoAudioTexto = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transcrição de Áudio em Texto
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Converta seus arquivos de áudio e vídeo em texto de forma rápida e precisa com as melhores 
              ferramentas de transcrição automática e manual disponíveis no mercado.
            </p>
          </div>

          <CategorySection
            title="Ferramentas de Transcrição de Áudio em Texto"
            tools={transcricaoAudioTextoTools}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TranscricaoAudioTexto;
