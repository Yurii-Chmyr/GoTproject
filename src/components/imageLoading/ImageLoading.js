import { useState } from 'react';

const ImageLoading = ({ src, alt, className = '', ...props }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Клас Bootstrap для картинки в картці
  const combinedClassName = `card-img-top ${className}`.trim();

  return (
    <>
      {loading && !error && (
        <div
          style={{
            width: '100%',
            height: '180px', // приблизна висота картинки в картці bootstrap
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#e9ecef', // світло-сірий фон, як у плейсхолдері bootstrap
            color: '#6c757d',
            fontSize: '1rem',
            fontWeight: '500',
            userSelect: 'none',
          }}
        >
          Loading...
        </div>
      )}
      {error && (
        <div
          style={{
            width: '100%',
            height: '180px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f8d7da',
            color: '#721c24',
            fontSize: '1rem',
            fontWeight: '500',
            userSelect: 'none',
          }}
        >
          Error loading image
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={combinedClassName}
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
        style={loading || error ? { display: 'none' } : {}}
        {...props}
      />
    </>
  );
};

export default ImageLoading;