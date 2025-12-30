import "./globals.css";
import { Outfit, Fira_Code } from "next/font/google";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portafolio de Marcos Alejandro Berrios - Full Stack Developer",
  description:
    "Portafolio de Marcos Alejandro Berrios, desarrollador Full Stack especializado en React, Next.js, Laravel y más. Proyectos web modernos y eficientes.",
  keywords:
    "portfolio marcos alejandro berrios, portafolio developer, marcos berrios, marcos berrios",
  author: "Marcos Alejandro Berrios",
  metadataBase: new URL("https://marcosbp.dev"),
  openGraph: {
    title: "Portafolio de Marcos Alejandro Berrios",
    description:
      "Desarrollador Full Stack especializado en React, Next.js, Laravel y más.",
    url: "https://marcosbp.dev",
    siteName: "Marcos Alejandro Berrios",
    images: [
      {
        url: "/assets/videos/images/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Logo de Marcos Alejandro Berrios",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portafolio de Marcos Alejandro Berrios",
    description:
      "Desarrollador Full Stack especializado en React, Next.js, Laravel y más.",
    images: ["/assets/videos/images/logo.jpeg"],
    creator: "@marcosbp",
  },
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7157260105016499"
     crossorigin="anonymous"></script>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${outfit.variable} ${firaCode.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
