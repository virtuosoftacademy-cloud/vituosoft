'use client'
import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useAnimate } from 'framer-motion';
import { aiAgentsEmpower } from '../../constant';


export default function Empower(Data) {
  const {title,items} = Data
  const containerRef = useRef(null);
  const [scope, animate] = useAnimate();
  const x = useMotionValue(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  // Measure card width + gap on mount and resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const card = containerRef.current.querySelector('.ai-card');
        if (card) {
          // card width + gap-5 = 20px
          setCardWidth(card.offsetWidth + 20);
        }
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const slideTo = (index) => {
    if (cardWidth === 0) return;
    const newX = -index * cardWidth;
    setCurrentIndex(index);
    animate(scope.current, { x: newX }, { type: 'spring', stiffness: 200, damping: 30 });
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      slideTo(currentIndex - 1);
    }
  };

  const goNext = () => {
    if (currentIndex < aiAgentsEmpower.length - 1) {
      slideTo(currentIndex + 1);
    }
  };

  // Snap to nearest card after drag
  const handleDragEnd = (_, info) => {
    if (cardWidth === 0) return;

    const currentX = x.get();
    const movedBy = info.offset.x;
    const threshold = cardWidth * 0.35; // drag 35% of card width → change slide

    let newIndex = currentIndex;

    if (movedBy < -threshold && currentIndex < aiAgentsEmpower.length - 1) {
      newIndex += 1;
    } else if (movedBy > threshold && currentIndex > 0) {
      newIndex -= 1;
    }

    slideTo(newIndex);
  };

  // Approximate number of visible cards (used for drag limits)
  const cardsPerView = typeof window !== 'undefined' && window.innerWidth >= 1024 ? 4 : 1;
  const maxDragOffset = -(aiAgentsEmpower.length - cardsPerView) * cardWidth;

  return (
    <section className="bg-foreground py-10 pr-16 overflow-hidden mt-20">
      <div className="relative max-w-7xl mx-auto">
        {/* Title + Controls */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 md:mb-10">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight pl-5 md:pl-[70px] max-w-[500px]">
            {title}
          </h2>

          <div className="flex gap-3 mt-6 md:mt-0 md:absolute md:top-3 md:right-2">
            <button
              onClick={goPrev}
              disabled={currentIndex === 0}
              className="w-12 h-12 md:w-[55] md:h-[55] rounded-full border border-[#7B7B7B] text-[#7B7B7B] text-3xl flex items-center justify-center transition-colors hover:border-white hover:text-white disabled:opacity-40 disabled:hover:border-[#7B7B7B] disabled:hover:text-[#7B7B7B] focus:outline-none"
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              onClick={goNext}
              disabled={currentIndex >= aiAgentsEmpower.length - 4}
              className="w-12 h-12 md:w-[55] md:h-[55] rounded-full border border-[#7B7B7B] text-[#7B7B7B] text-3xl flex items-center justify-center transition-colors hover:border-white hover:text-white disabled:opacity-40 disabled:hover:border-[#7B7B7B] disabled:hover:text-[#7B7B7B] focus:outline-none"
              aria-label="Next slide"
            >
              ›
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div
          ref={containerRef}
          className="overflow-hidden pb-6 md:pl-5 lg:pl-20"
        >
          <motion.div
            ref={scope}
            drag="x"
            dragConstraints={{ right: 0, left: maxDragOffset }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            style={{ x }}
            className="flex gap-5 cursor-grab active:cursor-grabbing"
          >
            {items.map((item, index) => (
              <div
                key={index}
                className={`
                  ai-card shrink-0 w-[calc(100%-20px)] snap-center
                  md:w-[calc((100%-70px)/4)] min-w-[calc((100%-70px)/4)]
                  bg-accent/20 text-accent p-5 md:p-6
                  border-l-4 border-transparent hover:border-white/20
                  transition-all duration-300 hover:shadow-xl min-h-96
                  flex flex-col
                `}
              >
                <h4 className="text-lg md:text-xl font-medium leading-tight mb-15 min-h-[60]">
                  {item.title}
                </h4>
                <p className="text-[#D8D8D8] text-sm md:text-[15px] leading-relaxed opacity-85 group-hover:opacity-100 transition-all duration-400">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}