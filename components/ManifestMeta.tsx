import Head from 'next/head';

export default function ManifestMeta() {
  return (
    <>
      <link rel="manifest" href="/manifest.json" crossOrigin="anonymous" />
      <meta name="theme-color" content="#000000ff" />
      <link rel="icon" href="/icons/aether-512x512.png" />
      <link rel="apple-touch-icon" href="/icons/aether-512x512.png" />
      </>
  );
}