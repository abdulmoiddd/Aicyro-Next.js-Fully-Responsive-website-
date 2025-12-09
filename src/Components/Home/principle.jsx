import React, { useState, useEffect } from "react";
import Image from "next/image";
import PrincipleImage from "../../assets/principle.jpg";
import { motion } from "framer-motion";

// --- REQUIRED FIREBASE IMPORTS ---
import { ref, onValue } from "firebase/database";
import { database } from "../../lib/firebase";
// ---------------------------------

const Principle = () => {
  const [principleData, setPrincipleData] = useState(null);
  const [loading, setLoading] = useState(true);
  const imageSrc = PrincipleImage;

  // 2. FIREBASE DATA FETCHING EFFECT
  useEffect(() => {
    const principlesRef = ref(database, "principlesSection");

    const unsubscribe = onValue(
      principlesRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const fetchedData = snapshot.val();
          setPrincipleData(fetchedData);
          setLoading(false);
        } else {
          console.log(
            "No principles section data found at 'principlesSection' path."
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

  // --- UPDATED FASTER ANIMATION VARIANTS ---
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 }, // Reduced y distance for quicker feel
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // Faster duration (was 0.8)
        ease: "easeOut",
        staggerChildren: 0.1, // Much faster stagger (was 0.15)
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4, // Faster item fade-in
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  // -----------------------------------------

  // 3. Handle Loading State
  if (loading) {
    return (
      <section className="bg-[#0B0219] text-white py-20 md:py-32 px-4 flex justify-center items-center min-h-[50vh]">
        <motion.div
          className="w-16 h-16 border-4 border-white/20 border-t-[#8A2BE2] rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }} // Sped up spinner slightly
        />
      </section>
    );
  }

  if (!principleData) {
    return (
      <section className="bg-[#0B0219] text-white py-20 md:py-32 px-4 flex justify-center items-center">
        Error loading data or no principles configured.
      </section>
    );
  }

  const { tagline, mainHeading, subtext, stats, principlesList, imageAlt } =
    principleData;

  // 4. RENDER THE COMPONENT
  return (
    <motion.section
      className="bg-[#0B0219] text-white py-20 md:py-32 px-4 sm:px-6 lg:px-8"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Triggers slightly earlier
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20 items-start">
        {/* === Column 1: Left Content === */}
        <motion.div className="md:col-span-1 space-y-6 md:space-y-8">
          <motion.p
            variants={itemVariants}
            className="inline-block border font-medium border-[#7B71DB]/50 rounded-full text-xs sm:text-sm tracking-widest uppercase px-4 py-1.5 text-white"
          >
            {tagline}
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight"
          >
            {mainHeading}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-gray-300 font-light leading-relaxed"
            dangerouslySetInnerHTML={{ __html: subtext }}
          />

          <motion.div
            variants={itemVariants}
            className="flex space-x-8 sm:space-x-10 pt-6 md:pt-10"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-bold text-[#7B71DB]">
                  {stat.value}
                </span>
                <span className="text-xs tracking-wider uppercase text-[#7B71DB] mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* === Column 2: Image === */}
        <motion.div
          className="md:col-span-1 rounded-lg overflow-hidden mt-12 md:mt-0"
          variants={imageVariants}
        >
          <Image
            src={imageSrc}
            alt={imageAlt || "A diverse team of people collaborating"}
            className="w-full h-full object-cover grayscale transition duration-500 ease-in-out hover:grayscale-0"
          />
        </motion.div>

        {/* === Column 3: Right Content === */}
        <motion.div className="md:col-span-1 space-y-10 md:space-y-12 mt-12 md:mt-0">
          {principlesList.map((principle, index) => (
            <motion.div
              key={index}
              className="principle-item"
              variants={itemVariants}
            >
              <div className="flex items-start space-x-3 mb-3">
                <div className="text-indigo-400 w-6 h-6 flex-shrink-0 mt-1">
                  {index === 0 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-full h-full"
                    >
                      <path d="M12 20l-7-7 7-7 7 7-7 7z" />
                      <path d="M16.5 10.5l-9 9" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-full h-full"
                    >
                      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {principle.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-300 pl-9">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Principle;
