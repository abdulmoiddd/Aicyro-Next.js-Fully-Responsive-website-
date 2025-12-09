import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

// --- REQUIRED FIREBASE IMPORTS ---
import { ref, onValue } from "firebase/database";
import { database } from "../../lib/firebase";

// ---------------------------------

// --- NEW LUCIDE-REACT IMPORTS ---
import {
  Code,
  GlobeLock,
  FileCheck,
  ChartColumnIncreasing,
  Bot,
  LayoutGrid,
  LayoutTemplate,
  CloudUpload,
  CircleCheckBig,
  Zap,
  Info,
} from "lucide-react";
// ---------------------------------

const WeOffer = () => {
  const [featureData, setFeatureData] = useState(null);
  const [loading, setLoading] = useState(true);

  // 2. FIREBASE DATA FETCHING EFFECT
  useEffect(() => {
    const offerRef = ref(database, "weOfferSection");

    const unsubscribe = onValue(
      offerRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const fetchedData = snapshot.val();
          const featuresArray = Object.values(fetchedData.features || {});
          setFeatureData({ ...fetchedData, features: featuresArray });
          setLoading(false);
        } else {
          console.log(
            "No 'We Offer' section data found at 'weOfferSection' path."
          );
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

  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 20 },
    },
  };
  // --------------------------

  const renderFeatureIcon = (iconName) => {
    const iconProps = { className: "w-full h-full" };
    switch (iconName) {
      case "code":
        return <Code {...iconProps} />;
      case "lock_globe":
        return <GlobeLock {...iconProps} />;
      case "CloudUpload":
        return <CloudUpload {...iconProps} />;
      case "CircleCheckBig":
        return <CircleCheckBig {...iconProps} />;
      case "Bot":
        return <Bot {...iconProps} />;
      case "LayoutTemplate":
        return <LayoutTemplate {...iconProps} />;
      case "LayoutGrid":
        return <LayoutGrid {...iconProps} />;
      case "ChartColumnIncreasing":
        return <ChartColumnIncreasing {...iconProps} />;
      default:
        return <Info {...iconProps} />;
    }
  };

  const renderButtonIcon = (iconName) => {
    const iconProps = { className: "w-4 h-4" };
    switch (iconName) {
      case "document_check":
        return <FileCheck {...iconProps} />;
      case "lightning":
        return <Zap {...iconProps} />;
      default:
        return null;
    }
  };

  // 3. Handle Loading State
  if (loading) {
    return (
      <section className="bg-[#0A0118] text-white py-20 sm:py-24 px-4 flex justify-center items-center min-h-[50vh]">
        <motion.div
          className="w-16 h-16 border-4 border-white/20 border-t-[#8A2BE2] rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </section>
    );
  }

  if (!featureData) {
    return (
      <section className="bg-[#0A0118] text-white py-20 sm:py-24 px-4 flex justify-center items-center">
        Error loading data or no offerings configured.
      </section>
    );
  }

  const { tagline, mainHeading, description, features } = featureData;

  // 4. RENDER THE COMPONENT WITH ANIMATIONS
  return (
    <motion.section
      className="bg-[#0A0118] text-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <div className="mb-12 sm:mb-16">
          <motion.p
            variants={itemVariants}
            className="inline-block border border-[#7B71DB]/50 text-xs sm:text-sm tracking-widest uppercase px-5 py-2 text-white mb-4 sm:mb-6 rounded-full font-medium"
          >
            {tagline}
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold leading-tight mb-4"
          >
            {mainHeading}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto px-2"
          >
            {description}
          </motion.p>
        </div>

        {/* --- Feature Cards Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              // Add a gentle lift effect on hover for the whole card
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="text-left p-2 sm:p-3 md:p-5 rounded-xl border border-gray-800 shadow-xl"
            >
              <div className="text-left p-6 sm:p-8 md:p-10 rounded-lg border border-gray-800 bg-[#1B1228] shadow-xl h-full flex flex-col justify-between">
                <div>
                  {/* Icon */}
                  <div className="mb-6 w-10 h-10 sm:w-12 sm:h-12 text-indigo-400 bg-indigo-900/50 p-2 sm:p-3 rounded-xl border border-indigo-700/50">
                    {renderFeatureIcon(feature.icon)}
                  </div>

                  {/* Heading */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Button */}
                <motion.button
                  onClick={() => window.open(feature.button.link, "_blank")}
                  className="inline-flex items-center justify-center sm:justify-start space-x-2 border border-indigo-600 text-indigo-400 hover:bg-indigo-600 hover:text-white transition-colors duration-300 py-3 px-6 rounded-full font-semibold text-sm tracking-wide w-full sm:w-auto mt-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {renderButtonIcon(feature.button.icon)}
                  <span>{feature.button.text}</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WeOffer;
