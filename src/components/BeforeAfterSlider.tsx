"use client";

import React, { useState, useRef, useEffect } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  'data-oid'?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  'data-oid': dataOid
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updateSliderPosition(e.clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      updateSliderPosition(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    updateSliderPosition(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging) {
      e.preventDefault();
      updateSliderPosition(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const updateSliderPosition = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden rounded-lg border border-gray-200 bg-gray-100 cursor-col-resize select-none focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
      tabIndex={0}
      role="slider"
      aria-label="Before and after comparison slider"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={sliderPosition}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          setSliderPosition(Math.max(0, sliderPosition - 5));
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          setSliderPosition(Math.min(100, sliderPosition + 5));
        }
      }}
      data-oid={dataOid}>

      {/* Before Image (Background) */}
      <div
        className="absolute inset-0"
        data-oid={`${dataOid}-before-container`}>
        <img
          src={beforeImage}
          alt={`${beforeLabel} - carpet cleaning before image`}
          className="w-full h-full object-cover"
          draggable={false}
          data-oid={`${dataOid}-before-image`}
        />
        {/* Before Label */}
        <div
          className="absolute top-4 left-4 bg-red-600/90 text-white px-3 py-1 rounded-md text-sm font-medium backdrop-blur-sm shadow-sm"
          data-oid={`${dataOid}-before-label`}>
          {beforeLabel}
        </div>
      </div>

      {/* After Image (Clipped) */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
        }}
        data-oid={`${dataOid}-after-container`}>
        <img
          src={afterImage}
          alt={`${afterLabel} - carpet cleaning after image`}
          className="w-full h-full object-cover"
          draggable={false}
          data-oid={`${dataOid}-after-image`}
        />
        {/* After Label */}
        <div
          className="absolute top-4 right-4 bg-green-600/90 text-white px-3 py-1 rounded-md text-sm font-medium backdrop-blur-sm shadow-sm"
          data-oid={`${dataOid}-after-label`}>
          {afterLabel}
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-col-resize z-10"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        data-oid={`${dataOid}-slider-line`}>
        
        {/* Slider Button */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-gray-300 flex items-center justify-center cursor-col-resize hover:border-teal-500 transition-colors"
          data-oid={`${dataOid}-slider-handle`}>
          
          {/* Left Arrow */}
          <svg
            className="w-3 h-3 text-gray-600 absolute left-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            data-oid={`${dataOid}-left-arrow`}>
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          
          {/* Right Arrow */}
          <svg
            className="w-3 h-3 text-gray-600 absolute right-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            data-oid={`${dataOid}-right-arrow`}>
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Instructions overlay (shows on hover) */}
      <div
        className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none"
        data-oid={`${dataOid}-instructions`}>
        <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium text-gray-900 shadow-sm">
          <span className="hidden sm:inline">Drag to compare</span>
          <span className="sm:hidden">Tap and drag to compare</span>
        </div>
      </div>
    </div>
  );
}
