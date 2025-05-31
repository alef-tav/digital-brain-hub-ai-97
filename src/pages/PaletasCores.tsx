
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolBlogCard from '@/components/ToolBlogCard';

const PaletasCores = () => {
  const tools = [
    {
      title: "Color Hunt",
      description: "Paletas de cores para designers e artistas",
      detailedDescription: "Color Hunt é uma plataforma colaborativa que oferece milhares de paletas de cores gratuitas criadas por designers de todo o mundo, organizadas por tendências e categorias.",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=300&fit=crop",
      link: "https://colorhunt.co/",
      category: "Paletas de Cores",
      isNew: true
    },
    {
      title: "Coolors",
      description: "Gerador super rápido de paletas de cores",
      detailedDescription: "Coolors é uma ferramenta online que permite gerar, explorar e editar paletas de cores de forma rápida e intuitiva, com diversas opções de exportação e integração.",
      icon: "🌈",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
      link: "https://coolors.co/",
      category: "Paletas de Cores"
    },
    {
      title: "ColorZilla",
      description: "Identificador de cores para sites e fotos",
      detailedDescription: "ColorZilla é uma extensão do navegador que permite identificar cores de qualquer elemento na web, criar gradientes e paletas personalizadas diretamente do browser.",
      icon: "🔍",
      image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=400&h=300&fit=crop",
      link: "https://chromewebstore.google.com/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp?hl=pt-BR",
      category: "Paletas de Cores"
    },
    {
      title: "Adobe Color",
      description: "Roda de cores profissional da Adobe",
      detailedDescription: "Adobe Color oferece ferramentas profissionais para criar paletas harmoniosas usando teoria das cores, com integração completa aos produtos Adobe Creative Suite.",
      icon: "🅰️",
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=300&fit=crop",
      link: "https://color.adobe.com/pt/create/color-wheel",
      category: "Paletas de Cores"
    },
    {
      title: "Paletton",
      description: "Designer de esquemas de cores",
      detailedDescription: "Paletton é uma ferramenta avançada que aplica teoria das cores para criar esquemas harmoniosos, oferecendo previsualização em tempo real e exemplos práticos.",
      icon: "🎭",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      link: "https://paletton.com/",
      category: "Paletas de Cores"
    },
    {
      title: "Khroma",
      description: "IA que aprende suas preferências de cores",
      detailedDescription: "Khroma utiliza inteligência artificial para aprender suas preferências de cores e gerar paletas personalizadas infinitas baseadas no seu gosto pessoal.",
      icon: "🤖",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop",
      link: "https://www.khroma.co/",
      category: "Paletas de Cores",
      isNew: true
    },
    {
      title: "ColorSpace",
      description: "Gerador de paletas e gradientes",
      detailedDescription: "ColorSpace oferece ferramentas para gerar paletas de cores, gradientes e combinações harmoniosas, com opções de exportação para diversos formatos.",
      icon: "🌌",
      image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=400&h=300&fit=crop",
      link: "https://mycolorspace.io/",
      category: "Paletas de Cores"
    },
    {
      title: "Canva Color Palette Generator",
      description: "Gerador de paletas integrado ao Canva",
      detailedDescription: "O gerador de paletas do Canva permite extrair cores de imagens e criar paletas personalizadas com integração direta às ferramentas de design da plataforma.",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
      link: "https://www.canva.com/colors/color-palette-generator/",
      category: "Paletas de Cores"
    },
    {
      title: "Material Design Palette",
      description: "Paletas seguindo Material Design",
      detailedDescription: "Material Design Palette oferece paletas de cores oficiais do Google Material Design, garantindo consistência e acessibilidade em projetos digitais.",
      icon: "📱",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      link: "https://www.materialpalette.com/",
      category: "Paletas de Cores"
    },
    {
      title: "Color Designer",
      description: "Ferramenta completa para design de cores",
      detailedDescription: "Color Designer oferece uma suite completa de ferramentas para criar, testar e aplicar paletas de cores em projetos de design e desenvolvimento web.",
      icon: "🎯",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=300&fit=crop",
      link: "https://colordesigner.io/",
      category: "Paletas de Cores"
    },
    {
      title: "Muzli Colors",
      description: "Inspiração de cores para designers",
      detailedDescription: "Muzli Colors é uma coleção curada de paletas de cores inspiradoras, organizada pela equipe do Muzli para fornecer referências visuais de qualidade.",
      icon: "✨",
      image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?w=400&h=300&fit=crop",
      link: "https://colors.muz.li/",
      category: "Paletas de Cores"
    },
    {
      title: "Visme Color Palette Generator",
      description: "Gerador de paletas para apresentações",
      detailedDescription: "Visme Color Palette Generator cria paletas profissionais especialmente otimizadas para apresentações, infográficos e materiais de marketing visual.",
      icon: "📊",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      link: "https://www.visme.co/tools/color-palette-generator/",
      category: "Paletas de Cores"
    },
    {
      title: "PineTools Color Picker",
      description: "Seletor de cores de imagens",
      detailedDescription: "PineTools Color Picker permite extrair cores específicas de imagens, fornecendo códigos hexadecimais, RGB e HSL para uso em projetos de design.",
      icon: "🖼️",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
      link: "https://pinetools.com/color-picker-image",
      category: "Paletas de Cores"
    },
    {
      title: "Image Color Picker",
      description: "Extrator de cores de imagens online",
      detailedDescription: "Image Color Picker é uma ferramenta online simples e eficaz para extrair paletas de cores de qualquer imagem, com interface intuitiva e resultados precisos.",
      icon: "📸",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      link: "https://imagecolorpicker.com/",
      category: "Paletas de Cores"
    },
    {
      title: "Ginifab Color Picker",
      description: "Conversor de cores CMYK para RGB",
      detailedDescription: "Ginifab Color Picker oferece conversão precisa entre diferentes formatos de cores, incluindo CMYK, RGB, HSL e códigos hexadecimais para projetos gráficos.",
      icon: "🔄",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop",
      link: "https://www.ginifab.com/feeds/pms/cmyk_to_rgb.php",
      category: "Paletas de Cores"
    },
    {
      title: "Dopely Colors",
      description: "Paletas modernas e trendy",
      detailedDescription: "Dopely Colors oferece uma coleção de paletas modernas e contemporâneas, perfeitas para projetos digitais e designs que seguem as últimas tendências visuais.",
      icon: "🌟",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
      link: "https://colors.dopely.top/",
      category: "Paletas de Cores"
    },
    {
      title: "Paleta de Cores Nuvemshop",
      description: "Gerador brasileiro de paletas",
      detailedDescription: "Paleta de Cores da Nuvemshop é uma ferramenta brasileira para gerar paletas harmoniosas, com interface em português e funcionalidades otimizadas para e-commerce.",
      icon: "🇧🇷",
      image: "https://images.unsplash.com/photo-1515266591878-f93e32bc5937?w=400&h=300&fit=crop",
      link: "https://paletadecores.com/",
      category: "Paletas de Cores"
    },
    {
      title: "Shutterstock Colors",
      description: "Paletas do banco de imagens Shutterstock",
      detailedDescription: "Shutterstock Colors oferece paletas profissionais extraídas de milhões de imagens do banco Shutterstock, garantindo combinações testadas e aprovadas por designers.",
      icon: "📷",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop",
      link: "https://www.shutterstock.com/pt/tools/colors",
      category: "Paletas de Cores"
    },
    {
      title: "Color Lisa",
      description: "Paletas inspiradas em obras de arte",
      detailedDescription: "Color Lisa cria paletas de cores inspiradas em obras de arte famosas, oferecendo combinações sofisticadas baseadas na história da arte e design clássico.",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      link: "https://www.colorlisa.com/",
      category: "Paletas de Cores"
    },
    {
      title: "Palettable",
      description: "Gerador interativo de paletas",
      detailedDescription: "Palettable oferece uma experiência interativa única para gerar paletas de cores, permitindo ajustes em tempo real baseados em feedback do usuário para criar combinações perfeitas.",
      icon: "🎮",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop",
      link: "https://www.palettable.io/",
      category: "Paletas de Cores"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Paletas de Cores
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Descubra as melhores ferramentas para criar, explorar e aplicar paletas de cores. 
              Desde geradores automáticos até seletores de cores profissionais para seus projetos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <ToolBlogCard
                key={index}
                title={tool.title}
                description={tool.description}
                detailedDescription={tool.detailedDescription}
                icon={tool.icon}
                image={tool.image}
                link={tool.link}
                category={tool.category}
                isNew={tool.isNew}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaletasCores;
