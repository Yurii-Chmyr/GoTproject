import { useEffect, useState, useRef } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useFavorites } from '../../services/FavoritesContext';
import { toast } from 'react-toastify';
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
  let message = '';
  const name = item.name || item.aliases?.[0] || 'Unnamed';

  if (type === 'character') {
    if (isFavoriteCharacter(item)) {
      message = `Removed ${name} from favorites`;
    } else {
      message = `Added ${name} to favorites`;
    }
    toggleFavoriteCharacter(item);
  } else {
    if (isFavoriteHouse(item)) {
      message = `Removed ${name} from favorites`;
    } else {
      message = `Added ${name} to favorites`;
    }
    toggleFavoriteHouse(item);
  }

  const position = window.innerWidth <= 768 ? 'top-center' : 'bottom-center';

  toast(message, { 
    autoClose: 1500, 
    position: position,
    className: 'custom-toast',
    bodyClassName: 'custom-toast-body', 
  });

  
  setIsAnimating(true);
};

  
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