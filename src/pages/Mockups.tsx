
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategorySection from '@/components/CategorySection';

const mockupsTools = [
  {
    title: "GraphicsFamily - Mockups Free",
    description: "Biblioteca com mais de 739 templates gratuitos de logos e mockups para download",
    icon: "🎨",
    link: "https://graphicsfamily.com/downloads/category/logos/",
    detailedDescription: "O GraphicsFamily oferece uma vasta coleção de templates gratuitos para logos e mockups. Com mais de 739 opções disponíveis, é uma excelente fonte para designers que procuram recursos de qualidade sem custo. A plataforma disponibiliza arquivos em diversos formatos para diferentes necessidades de design."
  },
  {
    title: "Smart Mockups",
    description: "Crie mockups de produtos incríveis com facilidade online, sem necessidade de Photoshop",
    icon: "📱",
    link: "https://smartmockups.com/pt",
    detailedDescription: "Smart Mockups é uma ferramenta online que permite criar mockups profissionais de forma rápida e fácil. Sem necessidade de conhecimento em Photoshop, você pode criar apresentações impressionantes de seus designs em dispositivos, roupas, impressos e muito mais. Interface intuitiva com milhares de templates disponíveis."
  },
  {
    title: "Mockup Cloud",
    description: "Loja premium e gratuita de mockups PSD com sistema de busca avançado",
    icon: "☁️",
    link: "https://www.mockupcloud.com/search",
    detailedDescription: "Mockup Cloud é uma plataforma que oferece tanto mockups gratuitos quanto premium em formato PSD. Com um sistema de busca avançado, facilita encontrar exatamente o tipo de mockup que você precisa. Oferece alta qualidade e variedade de categorias, desde dispositivos eletrônicos até materiais impressos."
  }
];

const Mockups = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Mockups
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ferramentas para criar mockups profissionais e apresentar seus designs de forma impressionante
            </p>
          </div>

          <CategorySection
            title="Ferramentas de Mockups"
            tools={mockupsTools}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Mockups;
