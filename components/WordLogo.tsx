'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const words = ['Conrad The Programmer', 'Koen Verburg'];
const MAX_CYCLES = 5;

export function WordLogo() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayWord, setDisplayWord] = useState(words[0]);
  const [cycleCount, setCycleCount] = useState(0);

  useEffect(() => {
    if (cycleCount >= MAX_CYCLES) return;

    const intervalId = setInterval(() => {
      setCurrentWordIndex((prev) => (prev === 0 ? 1 : 0));
      setCycleCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [cycleCount]);

  useEffect(() => {
    const word = words[currentWordIndex];
    const typingDelay = word.length * 50;

    setDisplayWord('');
    const timeoutId = setTimeout(() => {
      setDisplayWord(word);
    }, typingDelay);

    return () => clearTimeout(timeoutId);
  }, [currentWordIndex]);

  return (
    <Link href="/">
      <h1 className="font-bold word-logo">
        <span>
          {Array.from(displayWord).map((letter, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.008}s` }}>
              {letter}
            </span>
          ))}
        </span>
      </h1>
    </Link>
  );
}
