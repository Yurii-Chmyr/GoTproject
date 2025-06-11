import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './upScrollStyles.scss';

const UpScroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button className="up-scroll-btn" onClick={scrollToTop} aria-label="Scroll to top">
        <FaArrowUp />
      </button>
    )
  );
};

export default UpScroll;