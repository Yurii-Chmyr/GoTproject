import React, { createContext, useContext, useEffect, useState } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favoriteCharacters, setFavoriteCharacters] = useState([]);
  const [favoriteHouses, setFavoriteHouses] = useState([]);

 
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('favorites')) || { characters: [], houses: [] };
    setFavoriteCharacters(stored.characters);
    setFavoriteHouses(stored.houses);
  }, []);

  
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify({ characters: favoriteCharacters, houses: favoriteHouses }));
  }, [favoriteCharacters, favoriteHouses]);

 
  const toggleFavoriteCharacter = (char) => {
    setFavoriteCharacters(prev => {
      const exists = prev.find(c => c.url === char.url);
      if (exists) {
        return prev.filter(c => c.url !== char.url);
      } else {
        return [...prev, char];
      }
    });
  };

  
  const toggleFavoriteHouse = (house) => {
    setFavoriteHouses(prev => {
      const exists = prev.find(h => h.url === house.url);
      if (exists) {
        return prev.filter(h => h.url !== house.url);
      } else {
        return [...prev, house];
      }
    });
  };

  
  const removeFavoriteCharacter = (url) => {
    setFavoriteCharacters(prev => prev.filter(c => c.url !== url));
  };

  
  const removeFavoriteHouse = (url) => {
    setFavoriteHouses(prev => prev.filter(h => h.url !== url));
  };

  
  const clearFavoriteCharacters = () => {
    setFavoriteCharacters([]);
  };

  
  const clearFavoriteHouses = () => {
    setFavoriteHouses([]);
  };

  
  const isFavoriteCharacter = (char) => favoriteCharacters.some(c => c.url === char.url);
  const isFavoriteHouse = (house) => favoriteHouses.some(h => h.url === house.url);

  return (
    <FavoritesContext.Provider
      value={{
        favoriteCharacters,
        favoriteHouses,
        toggleFavoriteCharacter,
        toggleFavoriteHouse,
        removeFavoriteCharacter,
        removeFavoriteHouse,
        clearFavoriteCharacters,
        clearFavoriteHouses,
        isFavoriteCharacter,
        isFavoriteHouse,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);