"use client";

import React, { useState, useEffect } from "react";

// Performance-optimized custom animations for the cyber-psychedelic loading sequence
const loaderStyles = `
  @keyframes floatSaucer {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-8px) rotate(1deg); }
  }
  @keyframes beamPulse {
    0%, 100% { opacity: 0.2; transform: scaleX(1); }
    50% { opacity: 0.45; transform: scaleX(1.08); }
  }
  @keyframes scanline {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
  }
  @keyframes neonGlow {
    0%, 100% { text-shadow: 0 0 8px rgba(168, 212, 0, 0.6), 0 0 20px rgba(168, 212, 0, 0.3); }
    50% { text-shadow: 0 0 15px rgba(168, 212, 0, 0.9), 0 0 30px rgba(168, 212, 0, 0.5); }
  }
  .animate-float-saucer {
    animation: floatSaucer 3.5s ease-in-out infinite;
  }
  .animate-beam {
    animation: beamPulse 1.8s ease-in-out infinite;
  }
  .animate-neon-text {
    animation: neonGlow 2.5s ease-in-out infinite;
  }
  .loader-scanline::after {
    content: " ";
    display: block;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.35) 50%), 
                linear-gradient(90deg, rgba(255, 0, 0, 0.05), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.05));
    z-index: 9999;
    background-size: 100% 4px, 6px 100%;
    pointer-events: none;
  }
`;

const loadingMessages = [
  { threshold: 0, text: "CONNECTING TO QUANTUM DECK..." },
  { threshold: 15, text: "LOCATING THIRD-EYE COORDINATES..." },
  { threshold: 30, text: "WARMING UP NEON ACCELERATORS..." },
  { threshold: 45, text: "DE-QUANTIZING THE TIE-DYE VORTEX..." },
  { threshold: 60, text: "INFUSING FABRIC LOGIC WITH NEBULA JUICE..." },
  { threshold: 75, text: "ESTABLISHING INTERDIMENSIONAL ALLIANCE TREATY..." },
  { threshold: 90, text: "OPENING SPACECRAFT HATCHWAY. ALIGNING CHAKRAS..." },
  { threshold: 98, text: "ABDUCTION AUTHORIZATION STABLE." }
];

export default function Loader({ onFinished }) {
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [loadStatusText, setLoadStatusText] = useState(loadingMessages[0].text);
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    // Disable body scroll when loading
    document.body.style.overflow = "hidden";

    const duration = 3000; // total duration of abduction sequence in ms
    const intervalTime = 30;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setLoadProgress(progress);

      // Find status message based on current progress
      const logMatch = [...loadingMessages]
        .reverse()
        .find((msg) => progress >= msg.threshold);
      if (logMatch) {
        setLoadStatusText(logMatch.text);
      }

      if (progress >= 100) {
        clearInterval(timer);
        // Trigger exit transition
        setTimeout(() => {
          setHideLoader(true);
          setTimeout(() => {
            setLoading(false);
            document.body.style.overflow = "";
            if (onFinished) {
              onFinished();
            }
          }, 850); // wait for scale & fade transitions to end
        }, 500);
      }
    }, intervalTime);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "";
    };
  }, [onFinished]);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-black font-mono transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] loader-scanline flex flex-col items-center justify-center px-6 md:px-12 ${
        hideLoader ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      <style>{loaderStyles}</style>

      {/* Subtle star elements in loading background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1.5px, transparent 1.5px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Loader Header - Absolute at the top */}
      <div className="absolute top-8 left-6 right-6 md:top-12 md:left-12 md:right-12 flex items-center justify-between text-[11px] tracking-widest text-neutral-500 font-bold z-10 max-w-5xl mx-auto w-[calc(100%-3rem)] md:w-[calc(100%-6rem)]">
        <span>DECK: SYSTEM_LOG.ZETA</span>
        <span className="text-[#a8d400] animate-pulse font-extrabold">SIGNAL ESTABLISHED</span>
      </div>

      {/* Unified Center Console Group - Tightly aligned, centered vertically */}
      <div className="w-full max-w-xl flex flex-col items-center justify-center relative mt-6 z-10">
        
        {/* Core Interactive Abduction Visual */}
        <div className="relative w-full h-[360px] md:h-[400px] flex flex-col items-center justify-center overflow-hidden">
          
          {/* Pulsating Holographic Vertical Tractor Beam */}
          <div
            className="absolute top-[35%] bottom-16 w-28 md:w-36 bg-gradient-to-b from-[#a8d400]/25 via-[#a8d400]/8 to-[#cc2fa0]/0 rounded-t-full origin-top animate-beam"
            style={{
              boxShadow: "0 0 35px rgba(168, 212, 0, 0.15), inset 0 0 20px rgba(168, 212, 0, 0.2)",
              clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
            }}
          />

          {/* Glowing Spacecraft Vector */}
          <div className="relative z-20 transform -translate-y-4 filter drop-shadow-[0_0_20px_rgba(168,212,0,0.55)] animate-float-saucer">
            <svg className="w-24 h-16 text-[#a8d400]" viewBox="0 0 100 50" fill="currentColor">
              {/* Saucer Hull */}
              <path d="M15,30 C15,20 40,12 50,12 C60,12 85,20 85,30 C95,32 100,36 100,38 C100,42 75,46 50,46 C25,46 0,42 0,38 C0,36 5,32 15,30 Z" />
              {/* Upper Cabin */}
              <path d="M30,22 C30,12 40,4 50,4 C60,4 70,12 70,22 Z" fill="#cc2fa0" opacity="0.8" />
              {/* Base Thrusters */}
              <ellipse cx="50" cy="44" rx="20" ry="3" fill="#00b8cc" />
              <circle cx="28" cy="34" r="2" fill="#fff" className="animate-ping" />
              <circle cx="50" cy="36" r="2" fill="#fff" />
              <circle cx="72" cy="34" r="2" fill="#fff" className="animate-ping" />
            </svg>
          </div>

          {/* Meditating Alien Silhouette Rising up through tractor beam based on progress */}
          <div
            className="absolute z-10 transition-all duration-[120ms] ease-out flex flex-col items-center"
            style={{
              bottom: `${16 + loadProgress * 0.38}%`,
              transform: "scale(1.15)",
              opacity: 0.15 + loadProgress * 0.0085,
            }}
          >
            {/* Meditating Alien Yogi Path */}
            <svg
              className="w-16 h-16 text-[#cc2fa0] filter drop-shadow-[0_0_12px_rgba(204,47,160,0.7)] animate-pulse"
              viewBox="0 0 64 64"
              fill="currentColor"
            >
              {/* Alien Head with antenna */}
              <ellipse cx="32" cy="18" rx="8" ry="11" />
              <circle cx="32" cy="6" r="2" />
              <line x1="32" y1="6" x2="32" y2="10" stroke="currentColor" strokeWidth="2" />
              {/* Slanted Eyes */}
              <ellipse cx="29" cy="18" rx="3.5" ry="1.5" fill="#000" transform="rotate(-15, 29, 18)" />
              <ellipse cx="35" cy="18" rx="3.5" ry="1.5" fill="#000" transform="rotate(15, 35, 18)" />
              {/* Torso */}
              <path d="M24,32 C24,28 40,28 40,32 L38,44 L26,44 Z" />
              {/* Meditating Arms/Lotus legs */}
              <path d="M14,48 C12,42 22,38 28,42 C24,46 18,48 14,48 Z" />
              <path d="M50,48 C52,42 42,38 36,42 C40,46 46,48 50,48 Z" />
              {/* Lotus Hands */}
              <circle cx="16" cy="38" r="1.5" />
              <circle cx="48" cy="38" r="1.5" />
            </svg>
            <div className="text-[9px] font-mono tracking-widest text-[#a8d400] mt-2 bg-neutral-950/95 px-2 py-0.5 rounded border border-[#a8d400]/25 shadow-lg">
              YOGI_S7_ACTIVE
            </div>
          </div>

          {/* Glowing Circular Tracker */}
          <div className="absolute bottom-6 flex flex-col items-center justify-center z-20">
            <div className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#a8d400] via-[#00b8cc] to-[#cc2fa0] tracking-tighter animate-neon-text">
              {loadProgress}%
            </div>
            <span className="text-[9px] text-neutral-500 uppercase tracking-widest mt-1 font-bold">ALIGNING HARMONICS</span>
          </div>

        </div>

        {/* Boot Log Box - Positioned immediately beneath the abduction visual */}
        <div className="w-full mt-6 text-center">
          <div className="h-9 flex items-center justify-center px-4 bg-neutral-950/80 rounded-lg border border-neutral-900 text-xs text-neutral-300 tracking-wide transition-all duration-200 font-bold w-full">
            <span className="text-[#a8d400] mr-2">»</span> {loadStatusText}
          </div>

          {/* Visual Segmented Progress Bar - Directly aligned below the log box */}
          <div className="w-full h-1.5 bg-neutral-900 rounded-full mt-4 overflow-hidden relative border border-neutral-800">
            <div
              className="h-full bg-gradient-to-r from-[#a8d400] via-[#00b8cc] to-[#cc2fa0] transition-all duration-[120ms] ease-out rounded-full"
              style={{ width: `${loadProgress}%` }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
