
import { Tool } from '@/types';

export const ferramentasTextosTools: Tool[] = [
  { title: "Grammarly", description: "Correção gramatical inteligente", icon: "📝" },
  { title: "Hemingway Editor", description: "Editor para textos claros e concisos", icon: "✍️" },
  { title: "QuillBot", description: "Paráfrase e melhoria de textos", icon: "📖" },
  { title: "Copy.ai", description: "Geração de textos com IA", icon: "✨" }
];

export const bancosImagensTools: Tool[] = [
  { title: "Unsplash", description: "Fotos gratuitas de alta qualidade", icon: "📸" },
  { title: "Pexels", description: "Imagens e vídeos gratuitos", icon: "🖼️" },
  { title: "Shutterstock", description: "Banco de imagens premium", icon: "📷" },
  { title: "Getty Images", description: "Imagens profissionais", icon: "🎬" }
];

export const geracaoImagensTextoIATools: Tool[] = [
  { title: "DALL-E 3", description: "Gerador de imagens da OpenAI", icon: "🖼️", isNew: true },
  { title: "Midjourney", description: "Arte digital de alta qualidade", icon: "🎨" },
  { title: "Stable Diffusion", description: "Geração de imagens open source", icon: "🌊" },
  { title: "Leonardo.ai", description: "Criação de arte e imagens para games", icon: "🎮" }
];
