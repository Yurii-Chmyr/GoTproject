import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { useFavorites } from '../../services/FavoritesContext';
import './favNavButton.scss';

const FavoriteNavButton = () => {
  const { favoriteCharacters, favoriteHouses } = useFavorites();

  const hasFavorites = favoriteCharacters.length > 0 || favoriteHouses.length > 0;

  if (!hasFavorites) return null;

  return (
    <Link to="/favorites">
      <button className="favorite-nav-btn" aria-label="Favorites">
        <FaHeart />
      </button>
    </Link>
  );
};

export default FavoriteNavButton;