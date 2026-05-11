"use client";

import Navbar from "./components/Navbar";
import PromoTicker from "./components/PromoTicker";
import Hero from "./components/Hero";
import MarqueeBar from "./components/MarqueeBar";
import Products from "./components/Products";
import Stats from "./components/Stats";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <PromoTicker />
      <Hero />
      <MarqueeBar />
      <Products />
      <Stats />
      <About />
      <FAQ />
      <Footer />
    </div>
  );
}
