'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function RedirectHandlerPage() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const interval = setInterval(() => {
      const sessionId = searchParams.get('session_id');
      const cancelled = searchParams.get('cancelled');

      if (cancelled === 'true') {
        clearInterval(interval);
        window.location.href = 'bodysyncapp://overview';
      } else if (sessionId) {
        clearInterval(interval);
        window.location.href = `bodysyncapp://checkout-success?session_id=${sessionId}`;
      }
    }, 100);

    return () => clearInterval(interval);
  }, [searchParams]);

  return (
    <div style={{ backgroundColor: 'black', color: 'white', height: '100vh', margin: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <p> </p>
    </div>
  );
}