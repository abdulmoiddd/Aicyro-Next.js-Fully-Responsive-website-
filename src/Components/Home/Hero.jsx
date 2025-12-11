import React, { useState, useEffect } from "react";
import Principle from "./principle";
import Navbar from "../Essntials/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";

// --- REQUIRED FIREBASE IMPORTS ---
import { ref, onValue } from "firebase/database";
import { database } from "../../lib/firebase";
//----------------------------------------------
const MotionLink = motion(Link);

const HeroPage = () => {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Typing state
  const [rotatingWords, setRotatingWords] = useState(["Loading..."]);
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const TYPING_SPEED = 150;
  const DELETING_SPEED = 75;
  const PAUSE_TIME = 1500;

  const currentWord = rotatingWords[wordIndex];

  // 2. FIREBASE DATA FETCHING
  useEffect(() => {
    const heroRef = ref(database, "heroSection");
    const unsubscribe = onValue(
      heroRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const fetchedData = snapshot.val();
          setHeroData(fetchedData);
          setRotatingWords(
            fetchedData.rotatingWords || [
              "Innovation",
              "Intelligence",
              "Security",
            ]
          );
          setLoading(false);
        } else {
          console.log("No Hero section data found.");
          setLoading(false);
        }
      },
      (error) => {
        console.error("Firebase read error:", error);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

  // 3. TYPING EFFECT
  useEffect(() => {
    let timer;
    if (loading) return;

    if (isTyping) {
      if (displayedText.length < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, TYPING_SPEED);
      } else {
        timer = setTimeout(() => setIsTyping(false), PAUSE_TIME);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length - 1));
        }, DELETING_SPEED);
      } else {
        setIsTyping(true);
        setWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
      }
    }
    return () => clearTimeout(timer);
  }, [
    displayedText,
    isTyping,
    wordIndex,
    currentWord,
    rotatingWords.length,
    loading,
  ]);

  // 4. ANIMATION VARIANTS
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 20 },
    },
  };

  // 5. LOADING STATE
  if (loading || !heroData) {
    return (
      <div className="flex items-center justify-center min-h-screen w-full bg-[#0B0219]">
        <motion.div
          className="w-16 h-16 border-4 border-white/20 border-t-[#8A2BE2] rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  const {
    welcomeText,
    headingPrefix,
    paragraph,
    buttonPrimary,
    buttonSecondary,
  } = heroData;

  // 6. RENDER
  return (
    // FIX APPLIED: Added 'max-w-[100vw]' and 'flex-col' to strictly constrain width and stack children
    <div className="bg-[#0B0219] relative w-full max-w-[100vw] min-h-screen overflow-x-hidden flex flex-col">
      <Navbar />
      {/* Professional Background: Grid & Subtle Spotlight */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Central Spotlight - Controlled and subtle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#7B71DB] opacity-[0.08] blur-[120px] rounded-full pointer-events-none" />
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center pt-24 sm:pt-32 text-center w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-24 pb-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* WELCOME BANNER */}
        <motion.div
          variants={itemVariants}
          className="bg-[#7B71DB]/10 border border-[#7B71DB]/50 rounded-full px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium tracking-widest text-[#BDB5FF] mb-6 sm:mb-8 shadow-lg"
        >
          {welcomeText}
        </motion.div>

        {/* MAIN HEADING */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight break-words w-full"
        >
          <span className="text-white/95">{headingPrefix}</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8A2BE2] to-[#6A5ACD] ml-0 sm:ml-4 block sm:inline-block min-h-[1.2em] sm:min-w-[220px]">
            {displayedText}
          </span>
        </motion.h1>

        {/* PARAGRAPH */}
        <motion.p
          variants={itemVariants}
          className="text-sm md:text-lg text-gray-300/80 mb-12 max-w-4xl px-2 mx-auto"
        >
          {paragraph}
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto justify-center items-center"
        >
          <MotionLink
            href={buttonPrimary.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-medium text-white rounded-full shadow-lg w-full sm:w-auto bg-gradient-to-r from-[#7873DA] to-[#5B86D3]"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 8px rgb(120, 115, 218)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            {buttonPrimary.text}
          </MotionLink>

          <MotionLink
            href={buttonSecondary.link}
            className="inline-block text-center px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-full w-full sm:w-auto text-white border-2 border-[#7B71DB]/50 bg-transparent"
            whileHover={{
              scale: 1.05,
              borderColor: "#8A2BE2",
              backgroundColor: "rgba(91, 134, 211, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            {buttonSecondary.text}
          </MotionLink>
        </motion.div>
      </motion.div>

      {/* FIX APPLIED: Wrapped Principle in a container that hides overflow specifically for this section */}
      <div className="w-full overflow-hidden">
        <Principle />
      </div>
    </div>
  );
};

export default HeroPage;
