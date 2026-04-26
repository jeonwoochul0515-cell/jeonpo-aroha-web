import { useEffect, useRef, useState, type ReactNode, type ElementType } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4;
  as?: ElementType;
}

export default function Reveal({ children, className = '', delay, as: Tag = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cls = ['reveal', shown ? 'in' : '', delay ? `reveal-d${delay}` : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag ref={ref as never} className={cls}>
      {children}
    </Tag>
  );
}
