
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-700 mt-20">
      <div className="container mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          
          {/* Company Info - Hidden on mobile, shown on desktop */}
          <div className="hidden md:block space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/f616debe-7a77-425a-ae20-2a4a6321115f.png" 
                alt="Cérebro Digital" 
                className="w-10 h-10"
              />
              <h3 className="text-2xl font-bold text-white">Cérebro Digital</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Sua central definitiva de ferramentas de Inteligência Artificial e automações. 
              Explore soluções inovadoras para transformar seu trabalho.
            </p>
          </div>

          {/* Navigation and Legal Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Menu</h4>
            <div className="space-y-3">
              <Link 
                to="/" 
                className="block text-gray-300 hover:text-red-500 transition-colors"
              >
                Início
              </Link>
              <Link 
                to="/privacy-policy" 
                className="block text-gray-300 hover:text-red-500 transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link 
                to="/terms-of-service" 
                className="block text-gray-300 hover:text-red-500 transition-colors"
              >
                Termos de Serviço
              </Link>
            </div>
          </div>

          {/* Mobile Layout - Title and Description only */}
          <div className="md:hidden space-y-6">
            {/* Title and description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/f616debe-7a77-425a-ae20-2a4a6321115f.png" 
                  alt="Cérebro Digital" 
                  className="w-10 h-10"
                />
                <h3 className="text-2xl font-bold text-white">Cérebro Digital</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Sua central definitiva de ferramentas de Inteligência Artificial e automações. 
                Explore soluções inovadoras para transformar seu trabalho.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
            <div className="text-center md:text-left space-y-4 w-full md:w-auto">
              <div>
                <p className="text-gray-400 text-sm mb-2">
                  © 2025 BORGES MÍDIA NEGÓCIOS DIGITAIS LTDA
                </p>
                <p className="text-gray-500 text-xs">
                  CNPJ: 44.838.666/0001-99
                </p>
              </div>
              
              {/* Address - Aligned with CNPJ on mobile */}
              <div className="flex items-start space-x-3 justify-center md:justify-start">
                <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm text-center md:text-left ml-0 md:ml-0 -ml-8">
                  <p>Rua Antônio Callado, 23</p>
                  <p>Jardim Santa Marina</p>
                  <p>Jacareí - SP</p>
                  <p>CEP: 12312-575</p>
                </div>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                Cérebro Digital - Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
