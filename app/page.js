"use client";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import PromoTicker from "./components/PromoTicker";
import Hero from "./components/Hero";
import MarqueeBar from "./components/MarqueeBar";
import Products from "./components/Products";
import Stats from "./components/Stats";
import SelectHouse from "./components/SelectHouse";
import GummySpecs from "./components/GummySpecs";
import MarsEnergyShowcase from "./components/MarsEnergyShowcase";
import MoonCalmShowcase from "./components/MoonCalmShowcase";
import CustomerReviews from "./components/CustomerReviews";
import ExtractionAdvantage from "./components/ExtractionAdvantage";
import TrustBadges from "./components/TrustBadges";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Loader />
      <Navbar />
      <PromoTicker />
      <Hero />
      <MarqueeBar />
      <Products />
      <Stats />
      <SelectHouse />
      <GummySpecs />
      <MarsEnergyShowcase />
      <MoonCalmShowcase />
      <CustomerReviews />
      <ExtractionAdvantage />
      <TrustBadges />
      <FAQ />
      <Footer />
    </div>
  );
}
