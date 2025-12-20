import { useState, useEffect } from 'react';

interface TerminalTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  showCursor?: boolean;
  onComplete?: () => void;
}

export const TerminalText = ({
  text,
  delay = 0,
  speed = 50,
  className = '',
  showCursor = true,
  onComplete
}: TerminalTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursorBlink, setShowCursorBlink] = useState(true);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsTyping(true);
      let currentIndex = 0;

      const typeInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
          onComplete?.();
        }
      }, speed);

      return () => clearInterval(typeInterval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, delay, speed, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (
        <span className={`inline-block w-2 h-5 ml-0.5 bg-primary align-middle ${!isTyping ? 'animate-blink' : ''}`} />
      )}
    </span>
  );
};

interface TerminalLineProps {
  prefix?: string;
  children: React.ReactNode;
  className?: string;
}

export const TerminalLine = ({ prefix = '>', children, className = '' }: TerminalLineProps) => (
  <div className={`flex items-start gap-2 ${className}`}>
    <span className="text-primary font-bold shrink-0">{prefix}</span>
    <span>{children}</span>
  </div>
);

interface TerminalBlockProps {
  lines: string[];
  startDelay?: number;
  lineDelay?: number;
  className?: string;
}

export const TerminalBlock = ({ 
  lines, 
  startDelay = 0, 
  lineDelay = 800,
  className = '' 
}: TerminalBlockProps) => {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleLines(prev => {
          if (prev >= lines.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, lineDelay);

      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(timeout);
  }, [lines.length, startDelay, lineDelay]);

  return (
    <div className={`space-y-1 ${className}`}>
      {lines.slice(0, visibleLines).map((line, index) => (
        <TerminalLine key={index}>
          <TerminalText 
            text={line} 
            speed={30} 
            showCursor={index === visibleLines - 1}
          />
        </TerminalLine>
      ))}
    </div>
  );
};
