
import React, { useEffect, useRef } from 'react';

interface MathRendererProps {
  formula: string;
  displayMode?: boolean;
}

const MathRenderer: React.FC<MathRendererProps> = ({ formula, displayMode = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && (window as any).katex) {
      try {
        (window as any).katex.render(formula, containerRef.current, {
          throwOnError: false,
          displayMode: displayMode
        });
      } catch (err) {
        console.error("KaTeX error:", err);
      }
    }
  }, [formula, displayMode]);

  return <div ref={containerRef} className={`${displayMode ? 'my-4 text-xl' : 'inline-block'}`} />;
};

export default MathRenderer;
