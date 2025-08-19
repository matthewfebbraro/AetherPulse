import type { Metadata } from 'next';
import { Inter, Exo_2 } from 'next/font/google';
import '../app/globals.css';
const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: 'AetherPulse',
};

const exo2 = Exo_2({
  subsets: ['latin'],
  weight: ['400', '700'],
});



{/* All your app content here */ }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" crossOrigin="anonymous" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/icons/icon-512x512.png" />
        <link rel="apple-touch-icon" href="/icons/icon-512x512.png" />
      </head>

      <body className={`${inter.className} ${exo2.className} text-white`}>
        {children}
      </body>
    </html>
  );
}
