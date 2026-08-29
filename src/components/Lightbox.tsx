import React, { useCallback, useEffect, useRef, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import '../assets/styles/Lightbox.scss';

interface LightboxProps {
  title: string;
  images: string[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const ZOOM_STEP = 0.25;

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

function Lightbox({ title, images, index, onClose, onNavigate }: LightboxProps) {

  const [zoom, setZoom] = useState<number>(MIN_ZOOM);
  const [offset, setOffset] = useState<{x: number, y: number}>({x: 0, y: 0});
  const [dragging, setDragging] = useState<boolean>(false);
  const dragStart = useRef<{x: number, y: number}>({x: 0, y: 0});
  const stageRef = useRef<HTMLDivElement>(null);

  const resetView = useCallback(() => {
    setZoom(MIN_ZOOM);
    setOffset({x: 0, y: 0});
  }, []);

  const applyZoom = useCallback((next: number) => {
    const level = clamp(next, MIN_ZOOM, MAX_ZOOM);
    setZoom(level);
    if (level === MIN_ZOOM) setOffset({x: 0, y: 0});
  }, []);

  const zoomIn = useCallback(() => applyZoom(zoom + ZOOM_STEP), [zoom, applyZoom]);
  const zoomOut = useCallback(() => applyZoom(zoom - ZOOM_STEP), [zoom, applyZoom]);

  const showPrev = useCallback(() => {
    resetView();
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate, resetView]);

  const showNext = useCallback(() => {
    resetView();
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate, resetView]);

  const selectImage = (i: number) => {
    resetView();
    onNavigate(i);
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    if (zoom === MIN_ZOOM) return;
    event.preventDefault();
    setDragging(true);
    dragStart.current = {x: event.clientX - offset.x, y: event.clientY - offset.y};
  };

  useEffect(() => {
    if (!dragging) return;

    const handleMouseMove = (event: MouseEvent) => {
      setOffset({
        x: event.clientX - dragStart.current.x,
        y: event.clientY - dragStart.current.y
      });
    };
    const handleMouseUp = () => setDragging(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      applyZoom(zoom + (event.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP));
    };

    stage.addEventListener('wheel', handleWheel, { passive: false });
    return () => stage.removeEventListener('wheel', handleWheel);
  }, [zoom, applyZoom]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') showPrev();
      if (event.key === 'ArrowRight') showNext();
      if (event.key === '+' || event.key === '=') zoomIn();
      if (event.key === '-') zoomOut();
      if (event.key === '0') resetView();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, showPrev, showNext, zoomIn, zoomOut, resetView]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-header">
          <h2>{title}</h2>
          <span className="lightbox-counter">{index + 1} / {images.length}</span>
          <div className="lightbox-zoom-controls">
            <button onClick={zoomOut} disabled={zoom <= MIN_ZOOM} aria-label="Zoom out">
              <RemoveIcon fontSize="small" />
            </button>
            <span className="lightbox-zoom-level">{Math.round(zoom * 100)}%</span>
            <button onClick={zoomIn} disabled={zoom >= MAX_ZOOM} aria-label="Zoom in">
              <AddIcon fontSize="small" />
            </button>
            <button onClick={resetView} disabled={zoom === MIN_ZOOM} aria-label="Reset zoom">
              <RestartAltIcon fontSize="small" />
            </button>
          </div>
          <button className="lightbox-close" onClick={onClose} aria-label="Close">
            <CloseIcon />
          </button>
        </div>

        <div className="lightbox-stage" ref={stageRef}>
          {images.length > 1 && (
            <button className="lightbox-arrow prev" onClick={showPrev} aria-label="Previous">
              <ChevronLeftIcon fontSize="large" />
            </button>
          )}
          <img
            src={images[index]}
            alt={`${title} screenshot ${index + 1}`}
            onMouseDown={handleMouseDown}
            draggable={false}
            className={zoom > MIN_ZOOM ? (dragging ? 'grabbing' : 'grabbable') : ''}
            style={{
              transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
              transition: dragging ? 'none' : 'transform .15s ease-out'
            }}
          />
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
              onClick={() => selectImage(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
