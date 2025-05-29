
const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="text-3xl">🧠</span>
            <h3 className="text-2xl font-bold text-white">Cérebro Digital</h3>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed">
              Cérebro Digital é atualizado constantemente com novas ferramentas, tendências e soluções inovadoras. 
              Uma central definitiva para mentes visionárias que desejam dominar o futuro com inteligência artificial.
            </p>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              © 2024 Cérebro Digital. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
