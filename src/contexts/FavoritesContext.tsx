
import React, { createContext, useContext, useState, useEffect } from 'react';

interface FavoriteTool {
  title: string;
  description: string;
  detailedDescription: string;
  icon: string;
  image: string;
  link: string;
  category: string;
}

interface FavoritesContextType {
  favorites: FavoriteTool[];
  addToFavorites: (tool: FavoriteTool) => void;
  removeFromFavorites: (toolTitle: string) => void;
  isFavorite: (toolTitle: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<FavoriteTool[]>([]);

  // Carregar favoritos do localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem('cerebro-digital-favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Salvar favoritos no localStorage
  useEffect(() => {
    localStorage.setItem('cerebro-digital-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (tool: FavoriteTool) => {
    setFavorites(prev => [...prev, tool]);
  };

  const removeFromFavorites = (toolTitle: string) => {
    setFavorites(prev => prev.filter(tool => tool.title !== toolTitle));
  };

  const isFavorite = (toolTitle: string) => {
    return favorites.some(tool => tool.title === toolTitle);
  };

  return (
    <FavoritesContext.Provider value={{
      favorites,
      addToFavorites,
      removeFromFavorites,
      isFavorite
    }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
