import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";

export const metadata = {
  title: "HIPPIE ALIENS 👽✌️",
  description:
    "H.A.C.K — Hippie Aliens Collective. Cosmic threads for the chronically unserious.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
