import type { Metadata } from 'next';
import { Inter, Exo_2 } from 'next/font/google';
import '../app/globals.css';
const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: 'AetherPulse | The Portal to BodySync',
  description: 'Access the BodySync system — gamify your fitness journey and unlock your synced potential.',
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
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/icons/aether-512x512.png" />

        <title>Aether Pulse | The Portal to BodySync</title>
        <meta name="description" content="Access the BodySync system — gamify your fitness journey and unlock your synced potential." />


        <meta property="og:title" content="AetherPulse | The Portal to BodySync" />
        <meta property="og:description" content="Level up your fitness through BodySync. Track your health, earn XP, and discover hidden glyphs." />
        <meta property="og:image" content="/icons/aether-512x512.png" />
        <meta property="og:url" content="https://www.aetherpulse.one" />
        <meta property="og:type" content="website" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Aether Pulse",
              url: "https://www.aetherpulse.one",
              description: "Access the BodySync system — gamify your fitness journey and unlock your synced potential."
            }),
          }}
        />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-B7X2F8DXH8"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-B7X2F8DXH8');
    `,
          }}
        />

      </head>

      <body className={`${inter.className} ${exo2.className} text-white`}>
        {children}
      </body>
    </html>
  );
}
