import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './upScrollStyles.scss';

const UpScroll = ({ footerRef }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  useEffect(() => {
    if (!footerRef?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsNearFooter(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, [footerRef]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isMobile = window.innerWidth <= 576;
  
  return (
    isVisible && (
      <button
        className="up-scroll-btn"
        style={{ bottom: isNearFooter ? (isMobile ? '100px' : '140px') : '30px' }}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default UpScroll;