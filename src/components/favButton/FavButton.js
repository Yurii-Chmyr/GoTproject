import { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useFavorites } from '../../services/FavoritesContext';
import './favButton.scss';

const FavoriteButton = ({ item, type }) => {
  const {
    toggleFavoriteCharacter,
    toggleFavoriteHouse,
    isFavoriteCharacter,
    isFavoriteHouse,
  } = useFavorites();

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (type === 'character') {
      setIsFavorite(isFavoriteCharacter(item));
    } else {
      setIsFavorite(isFavoriteHouse(item));
    }
  }, [item, type, isFavoriteCharacter, isFavoriteHouse]);

  const toggleFavorite = () => {
    if (type === 'character') {
      toggleFavoriteCharacter(item);
    } else {
      toggleFavoriteHouse(item);
    }
  };

  return (
    <div className={`favorite-icon ${isFavorite ? 'active' : ''}`} 
    onClick={toggleFavorite}
    aria-label="Toggle favorite"
    >
      <FaHeart />
    </div>
  );
};

export default FavoriteButton;