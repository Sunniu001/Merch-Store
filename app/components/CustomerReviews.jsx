"use client";

import { useState } from "react";

const StarIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ color: "#a8d400", marginRight: "2px" }}
  >
    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.133 9.21l8.2-1.192z" />
  </svg>
);

const LargeStarRating = () => (
  <div style={{ display: "flex", gap: "4px" }}>
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ color: "#a8d400" }}
      >
        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.133 9.21l8.2-1.192z" />
      </svg>
    ))}
  </div>
);

export default function CustomerReviews() {
  const reviews = [
    {
      name: "Robin C",
      date: "03/23/2026",
      title: "GREAT PRODUCT",
      text: "Just what I needed to take the edge off, relax and slow down before bedtime.",
      product: "Delta-8 Gummies",
      image: "/Iboga House.webp"
    },
    {
      name: "Herbert L",
      date: "03/23/2026",
      title: "OUTSTANDING",
      text: "Great job, exceptionally clean energy boost with absolutely zero brain fog. Highly recommend!",
      product: "Full Spectrum UFO Gummies",
      image: "/Ayahuasca House.webp"
    },
    {
      name: "Brent B",
      date: "03/21/2026",
      title: "GOOD VALUE",
      text: "Good value for the cost and number of servings in the order. Interesting taste and acted as expected not too strong.",
      product: "Magic Pluto Mushroom Gummies",
      image: "/Kava House.webp"
    },
    {
      name: "Jessica K",
      date: "03/18/2026",
      title: "MIND BLOWN",
      text: "Literally the best cosmic gummies in the universe. Tastes completely natural and looks insane.",
      product: "Delta-8 Gummies",
      image: "/Datura House.webp"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 3 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= reviews.length - 3 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" style={{ background: "var(--bg2)", padding: "5rem 4rem", borderBottom: "1px solid var(--border)", position: "relative", zIndex: 1, transition: "background 0.5s ease" }}>
      <style>{`
        .reviews-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .reviews-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3.5rem;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .reviews-grid-wrapper {
          display: flex;
          align-items: center;
          position: relative;
          gap: 1rem;
        }

        .reviews-slider {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.2rem;
          width: 100%;
          transition: all 0.5s ease;
        }

        .review-card {
          display: flex;
          flex-direction: column;
          background: transparent;
        }

        .review-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.8rem;
        }

        .review-author {
          font-family: sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 1rem;
        }

        .review-body-split {
          display: flex;
          gap: 1.2rem;
          align-items: flex-start;
        }

        .review-thumbnail-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 95px;
        }

        .review-img-box {
          background: rgba(0,0,0,0.03);
          border: 1px solid rgba(0,0,0,0.05);
          width: 95px;
          height: 95px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          padding: 0.4rem;
        }

        [data-theme="dark"] .review-img-box {
          background: rgba(255,255,255,0.02);
          border-color: rgba(255,255,255,0.05);
        }

        .review-product-title {
          font-family: sans-serif;
          font-size: 0.72rem;
          color: var(--muted);
          text-align: center;
          margin-top: 0.4rem;
          line-height: 1.2;
          font-weight: 600;
        }

        .review-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .review-headline {
          font-family: sans-serif;
          font-size: 0.85rem;
          font-style: italic;
          font-weight: 800;
          color: var(--text);
          letter-spacing: 0.05em;
        }

        .review-text-para {
          font-family: sans-serif;
          font-size: 0.92rem;
          color: var(--text);
          opacity: 0.8;
          line-height: 1.5;
        }

        .nav-chevron-btn {
          background: transparent;
          border: none;
          color: var(--text);
          cursor: pointer;
          padding: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          opacity: 0.6;
        }

        .nav-chevron-btn:hover {
          opacity: 1;
          transform: scale(1.2);
        }

        @media (max-width: 1023px) {
          .reviews-slider {
            grid-template-columns: repeat(2, 1fr);
          }
          .review-card:last-child {
            display: none;
          }
        }

        @media (max-width: 767px) {
          .reviews-slider {
            grid-template-columns: 1fr;
          }
          .review-card:nth-child(2) {
            display: none;
          }
          .reviews-header-row {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <div className="reviews-container">
        {/* Top Header Block */}
        <div className="reviews-header-row">
          <h2 style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
            fontWeight: 700,
            color: "var(--text)",
            letterSpacing: "0.06em",
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
            margin: 0,
            lineHeight: "1.2"
          }}>
            <span style={{ display: "inline-block", width: "1.2rem", height: "1.2rem", background: "var(--text)" }} />
            WHAT OUR CUSTOMERS ARE SAYING
          </h2>

          {/* Right Hand Giant Lime Stars */}
          <LargeStarRating />
        </div>

        {/* Separator Line */}
        <div style={{ height: "1px", background: "var(--border)", width: "100%", marginBottom: "3rem" }} />

        {/* Carousel Grid with Nav Arrows */}
        <div className="reviews-grid-wrapper">
          {/* Left Arrow */}
          <button className="nav-chevron-btn" onClick={handlePrev} aria-label="Previous Reviews">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Slider Columns */}
          <div className="reviews-slider">
            {reviews.slice(currentIndex, currentIndex + 3).map((rev, index) => (
              <div className="review-card" key={index}>
                {/* Meta details */}
                <div className="review-meta">
                  <div style={{ display: "flex" }}>
                    {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                  </div>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.78rem", color: "var(--muted)", fontWeight: 700 }}>
                    {rev.date}
                  </span>
                </div>

                {/* Reviewer Name */}
                <h4 className="review-author">{rev.name}</h4>

                {/* Main Split Body */}
                <div className="review-body-split">
                  {/* Left: Thumbnail & Purchase Text */}
                  <div className="review-thumbnail-container">
                    <div className="review-img-box">
                      <img 
                        src={rev.image} 
                        alt={rev.product} 
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                      />
                    </div>
                    <span className="review-product-title">{rev.product}</span>
                  </div>

                  {/* Right: Review Texts */}
                  <div className="review-content">
                    <h5 className="review-headline">{rev.title}</h5>
                    <p className="review-text-para">{rev.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="nav-chevron-btn" onClick={handleNext} aria-label="Next Reviews">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
