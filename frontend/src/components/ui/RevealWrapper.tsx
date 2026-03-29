import { useReveal } from '@/hooks/useReveal';
import styles from './RevealWrapper.module.css';

interface RevealWrapperProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function RevealWrapper({ children, delay = 0, className = '' }: RevealWrapperProps) {
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref}
      className={`${styles.wrapper} ${isVisible ? styles.visible : ''} ${className}`}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
