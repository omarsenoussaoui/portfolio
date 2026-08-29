import React, { useCallback, useEffect } from "react";
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import '../assets/styles/Lightbox.scss';

interface LightboxProps {
  title: string;
  images: string[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

function Lightbox({ title, images, index, onClose, onNavigate }: LightboxProps) {

  const showPrev = useCallback(() => {
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate]);

  const showNext = useCallback(() => {
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') showPrev();
      if (event.key === 'ArrowRight') showNext();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, showPrev, showNext]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-header">
          <h2>{title}</h2>
          <span className="lightbox-counter">{index + 1} / {images.length}</span>
          <button className="lightbox-close" onClick={onClose} aria-label="Close">
            <CloseIcon />
          </button>
        </div>

        <div className="lightbox-stage">
          {images.length > 1 && (
            <button className="lightbox-arrow prev" onClick={showPrev} aria-label="Previous">
              <ChevronLeftIcon fontSize="large" />
            </button>
          )}
          <img src={images[index]} alt={`${title} screenshot ${index + 1}`} />
          {images.length > 1 && (
            <button className="lightbox-arrow next" onClick={showNext} aria-label="Next">
              <ChevronRightIcon fontSize="large" />
            </button>
          )}
        </div>

        <div className="lightbox-thumbs">
          {images.map((image, i) => (
            <img
              key={image}
              src={image}
              alt={`${title} thumbnail ${i + 1}`}
              className={i === index ? 'active' : ''}
              onClick={() => onNavigate(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
