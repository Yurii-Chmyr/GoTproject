import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { useFavorites } from '../../services/FavoritesContext';
import './favNavButton.scss';

const FavoriteNavButton = ({ footerRef }) => {
  const { favoriteCharacters, favoriteHouses } = useFavorites();
  const hasFavorites = favoriteCharacters.length > 0 || favoriteHouses.length > 0;

  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    if (!footerRef?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNearFooter(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, [footerRef]);

  if (!hasFavorites) return null;

  const isMobile = window.innerWidth <= 576;

  return (
    <Link to="/favorites">
      <button
        className="favorite-nav-btn"
        style={{ bottom: isNearFooter ? (isMobile ? '100px' : '140px') : '30px' }}
        aria-label="Favorites"
      >
        <FaHeart />
      </button>
    </Link>
  );
};

export default FavoriteNavButton;