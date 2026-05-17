import "./globals.css";
import { CartProvider } from "./context/CartContext";
import CartDrawer from "./components/CartDrawer";
import WishlistDrawer from "./components/WishlistDrawer";

export const metadata = {
  title: "HIPPIE ALIENS 👽✌️",
  description:
    "H.A.C.K — Hippie Aliens Collective. Cosmic threads for the chronically unserious.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Boogaloo&family=Fredoka+One&family=Caveat:wght@700&family=Bebas+Neue&family=Permanent+Marker&family=Space+Mono:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <CartProvider>
          <CartDrawer />
          <WishlistDrawer />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
