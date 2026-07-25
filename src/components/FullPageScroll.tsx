import { useState, useEffect, useCallback, useRef } from 'react';

interface Section {
  id: string;
  element: React.ReactNode;
}

interface FullPageScrollProps {
  sections: Section[];
  onSectionChange?: (index: number) => void;
}

export default function FullPageScroll({ sections, onSectionChange }: FullPageScrollProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const scrollToSection = useCallback((index: number) => {
    if (index < 0 || index >= sections.length || isScrolling) return;
    
    setIsScrolling(true);
    
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth',
      });
    }
    
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 800);
  }, [sections.length, isScrolling]);

  useEffect(() => {
    let lastScrollY = 0;
    
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;
      
      const delta = e.deltaY;
      
      if (delta > 50 && currentSection < sections.length - 1) {
        e.preventDefault();
        scrollToSection(currentSection + 1);
      } else if (delta < -50 && currentSection > 0) {
        e.preventDefault();
        scrollToSection(currentSection - 1);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      lastScrollY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isScrolling) return;
      
      const currentScrollY = e.touches[0].clientY;
      const delta = lastScrollY - currentScrollY;
      
      if (delta > 80 && currentSection < sections.length - 1) {
        e.preventDefault();
        scrollToSection(currentSection + 1);
      } else if (delta < -80 && currentSection > 0) {
        e.preventDefault();
        scrollToSection(currentSection - 1);
      }
      
      lastScrollY = currentScrollY;
    };

    const handleScroll = () => {
      if (isScrolling) return;
      
      if (containerRef.current) {
        const scrollTop = containerRef.current.scrollTop;
        const viewportHeight = window.innerHeight;
        const newIndex = Math.round(scrollTop / viewportHeight);
        
        if (newIndex !== currentSection && newIndex >= 0 && newIndex < sections.length) {
          setCurrentSection(newIndex);
          onSectionChange?.(newIndex);
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      container.addEventListener('touchstart', handleTouchStart, { passive: true });
      container.addEventListener('touchmove', handleTouchMove, { passive: false });
      container.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('scroll', handleScroll);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [currentSection, sections.length, isScrolling, onSectionChange, scrollToSection]);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        containerRef.current.scrollTo({
          top: currentSection * window.innerHeight,
          behavior: 'instant',
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentSection]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;
      
      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          scrollToSection(Math.min(currentSection + 1, sections.length - 1));
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          scrollToSection(Math.max(currentSection - 1, 0));
          break;
        case 'Home':
          e.preventDefault();
          scrollToSection(0);
          break;
        case 'End':
          e.preventDefault();
          scrollToSection(sections.length - 1);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection, sections.length, isScrolling, scrollToSection]);

  return (
    <div
      ref={containerRef}
      className="scrollbar-hide"
      style={{
        height: '100vh',
        overflowY: 'scroll',
        scrollSnapType: 'y mandatory',
        scrollBehavior: 'smooth',
      }}
    >
      {sections.map((section, index) => (
        <div
          key={section.id}
          id={section.id}
          className="scroll-snap-align-start scroll-snap-stop"
          style={{ height: '100vh', minHeight: '100vh' }}
        >
          {section.element}
        </div>
      ))}
    </div>
  );
}
