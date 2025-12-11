import React from "react";
// Assuming the Navbar component is in this relative path
import Navbar from "../Essntials/Navbar";
import Link from "next/link";
import { motion } from "framer-motion"; // Import Framer Motion

// Create a motion-enabled Link for the breadcrumb
const MotionLink = motion(Link);

const Contactstart = () => {
  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child element appearing
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  // --------------------------

  return (
    // Main container with dark background.
    <div className="bg-[#0A0118] text-white pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* --- Header/Navbar Section --- */}
      <header className="absolute top-0 inset-x-0 z-50">
        <Navbar />
      </header>

      {/* --- Hero/Content Section --- */}
      {/* Turned main into motion.main to orchestrate the entrance animations */}
      <motion.main
        className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 'Contact us' Label */}
        <motion.div
          variants={itemVariants}
          className="text-xs sm:text-sm tracking-widest uppercase font-semibold border border-[#677ED6] px-4 py-1.5 rounded-full mb-6 text-white"
        >
          Contact us
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 leading-tight"
        >
          Get in touch
        </motion.h1>

        {/* Subtitle/Description */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-lg text-white/90 max-w-3xl px-3"
        >
          Start the conversation to build a strong relationship and a successful
          business.
        </motion.p>

        {/* Breadcrumb Section */}
        <motion.div className="text-center pt-8" variants={itemVariants}>
          <p className="text-sm text-white/70 flex items-center justify-center gap-2">
            <MotionLink
              href="/"
              className="text-[#677ED6]"
              whileHover={{ scale: 1.1, color: "#8ea2ff" }} // Interactive Hover
              whileTap={{ scale: 0.95 }}
            >
              Home
            </MotionLink>
            <span className="text-[#677ED6]"> » </span>
            <span className="text-gray-400">Contact</span>
          </p>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default Contactstart;
