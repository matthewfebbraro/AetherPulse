"use client";
import { useEffect } from "react";

export default function FullScreenTest() {
  useEffect(() => {
    const vh = window.innerHeight;
    document.documentElement.style.setProperty('--real-height', `${vh}px`);
  }, []);

  return (
    <div style={{ height: 'var(--real-height)', backgroundColor: 'red' }}>
      <div style={{ height: '100%', backgroundColor: 'blue' }}>
        <h1 style={{ color: 'white', textAlign: 'center' }}>Full Height Test</h1>
      </div>
    </div>
  );
}
