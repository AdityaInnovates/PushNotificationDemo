import { Inter } from "next/font/google";
import "./globals.css";
import "./styles/animations.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DiGiLABS - Push Notification Demo",
  description: "Push Notification demo project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="manifest" href="manifest.json" />
      <link rel="icon" href="/logo.png"></link>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Playwrite+AR:wght@100..400&family=Playwrite+BE+VLG:wght@100..400&&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      ></link>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
