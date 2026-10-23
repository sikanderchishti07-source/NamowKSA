import { ReactNode } from 'react';
import { useScrollReveal } from '../hooks/useScrollAnimation';

type AnimationType = 'up' | 'left' | 'right' | 'scale';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  threshold?: number;
}

export function ScrollReveal({ 
  children, 
  animation = 'up', 
  delay = 0,
  className = '',
  threshold = 0.1 
}: ScrollRevealProps) {
  const { ref, isRevealed } = useScrollReveal(threshold);

  const animationClass = {
    up: 'scroll-reveal',
    left: 'scroll-reveal-left',
    right: 'scroll-reveal-right',
    scale: 'scroll-reveal-scale',
  }[animation];

  const delayClass = delay > 0 ? `stagger-${delay}` : '';

  return (
    <div
      ref={ref}
      className={`${animationClass} ${isRevealed ? 'revealed' : ''} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}
