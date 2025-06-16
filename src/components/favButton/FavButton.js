import { useEffect, useState, useRef } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useFavorites } from '../../services/FavoritesContext';
import './favButton.css';

const FavoriteButton = ({ item, type }) => {
  const {
    toggleFavoriteCharacter,
    toggleFavoriteHouse,
    isFavoriteCharacter,
    isFavoriteHouse,
  } = useFavorites();

  const isFavorite =
    type === 'character'
      ? isFavoriteCharacter(item)
      : isFavoriteHouse(item);

  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (type === 'character') {
      toggleFavoriteCharacter(item);
    } else {
      toggleFavoriteHouse(item);
    }

    // Запускаємо анімацію
    setIsAnimating(true);
  };

  // Коли анімація завершується - вимикаємо прапорець
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div
      className="favorite-icon"
      onClick={handleClick}
      title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      <FaHeart
        className={`heart-icon ${isFavorite ? 'active' : ''} ${
          isAnimating ? 'bounce' : ''
        }`}
      />
    </div>
  );
};

export default FavoriteButton;