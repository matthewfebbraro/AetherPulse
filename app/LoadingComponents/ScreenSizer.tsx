// components/RealScreenHeight.tsx
import { useEffect } from "react";

export default function RealScreenHeight() {
  useEffect(() => {
    const setRealVH = () => {
      const vh = window.innerHeight;
      document.documentElement.style.setProperty('--real-height', `${vh}px`);
    };

    setRealVH();
    window.addEventListener('resize', setRealVH);
    return () => window.removeEventListener('resize', setRealVH);
  }, []);

  return null; // This component just injects the height var
}
