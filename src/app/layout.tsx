import Script from "next/script";
import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andrew Chen Portfolio",
  description: "Andrew Chen Portfolio",
  openGraph: {
    type: "website",
    url: "https://andrew.ac/",
    title: "Andrew Chen Portfolio",
    description: "Andrew Chen Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew Chen Portfolio",
    description: "Andrew Chen Portfolio"
  },
  icons: {
    icon: [
      {url: "/favicon-32x32.png", sizes: "32x32", type: "image/png"},
      {url: "/favicon-16x16.png", sizes: "16x16", type: "image/png"}
    ],
    apple: [{url: "/apple-touch-icon.png", sizes: "180x180"}],
    shortcut: "/favicon.ico"
  },
  manifest: "/manifest.json",
  other: {
    "msapplication-TileColor": "#603cba",
    "theme-color": "#6c63ff"
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color="#885bd5"
        />
        <link
          rel="preload"
          href="/fonts/Montserrat-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Agustina.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.4/css/all.min.css"
        />
      </head>
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=UA-135618960-2"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-135618960-2');
          `}
        </Script>
      </body>
    </html>
  );
}
