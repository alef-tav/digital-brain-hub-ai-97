
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "@/contexts/FavoritesContext";
import Index from "./pages/Index";
import OrganizacaoProcessoProdutividade from "./pages/OrganizacaoProcessoProdutividade";
import BuscadoresIAs from "./pages/BuscadoresIAs";
import IAsCódigosAbertos from "./pages/IAsCódigosAbertos";
import MidiasSociais from "./pages/MidiasSociais";
import BuscadoresInteresses from "./pages/BuscadoresInteresses";
import GeradoresMapasMentais from "./pages/GeradoresMapasMentais";
import CriacaoMapasMentais from "./pages/CriacaoMapasMentais";
import GeradoresApresentacoes from "./pages/GeradoresApresentacoes";
import Favoritos from "./pages/Favoritos";
import NotFound from "./pages/NotFound";
import InteligenciasArtificiais from "./pages/InteligenciasArtificiais";
import GeradoresNomesNegocios from "./pages/GeradoresNomesNegocios";
import GeradoresLogomarcas from "./pages/GeradoresLogomarcas";
import PaletasCores from "./pages/PaletasCores";
import FerramentasTextos from "./pages/FerramentasTextos";
import BancosImagens from "./pages/BancosImagens";
import DesignGeral from "./pages/DesignGeral";
import IdentidadeMarca from "./pages/IdentidadeMarca";
import DesignProdutosIA from "./pages/DesignProdutosIA";
import ImagensProdutoIA from "./pages/ImagensProdutoIA";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <FavoritesProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/organizacao-processo-produtividade" element={<OrganizacaoProcessoProdutividade />} />
            <Route path="/buscadores-ias" element={<BuscadoresIAs />} />
            <Route path="/ias-codigos-abertos" element={<IAsCódigosAbertos />} />
            <Route path="/midias-sociais" element={<MidiasSociais />} />
            <Route path="/buscadores-interesses" element={<BuscadoresInteresses />} />
            <Route path="/geradores-mapas-mentais" element={<GeradoresMapasMentais />} />
            <Route path="/criacao-mapas-mentais" element={<CriacaoMapasMentais />} />
            <Route path="/geradores-apresentacoes" element={<GeradoresApresentacoes />} />
            <Route path="/inteligencias-artificiais" element={<InteligenciasArtificiais />} />
            <Route path="/geradores-nomes-negocios" element={<GeradoresNomesNegocios />} />
            <Route path="/geradores-logomarcas" element={<GeradoresLogomarcas />} />
            <Route path="/paletas-cores" element={<PaletasCores />} />
            <Route path="/ferramentas-textos" element={<FerramentasTextos />} />
            <Route path="/bancos-imagens" element={<BancosImagens />} />
            <Route path="/design-geral" element={<DesignGeral />} />
            <Route path="/identidade-marca" element={<IdentidadeMarca />} />
            <Route path="/design-produtos-ia" element={<DesignProdutosIA />} />
            <Route path="/imagens-produto-ia" element={<ImagensProdutoIA />} />
            <Route path="/favoritos" element={<Favoritos />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </FavoritesProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
