'use client';

import * as React from 'react'
import "../styles/global.css";
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <Script
          async
          defer
          src={process.env.NEXT_PUBLIC_UMAMI_DATA_DOMAIN}
          data-domain={process.env.NEXT_PUBLIC_UMAMI_URL}
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_SITE_ID}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
