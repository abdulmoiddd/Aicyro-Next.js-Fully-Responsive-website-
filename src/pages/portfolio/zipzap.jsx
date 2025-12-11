import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Essntials/Navbar";
import Footer from "../../Components/Essntials/footer";
import Seo from "../../Components/Essntials/Seo";
import Link from "next/link";
import { motion } from "framer-motion";

// --- FIREBASE IMPORTS ---
import { ref, onValue } from "firebase/database";
import { database } from "../../lib/firebase";

// Create a motion-enabled Link for the breadcrumb
const MotionLink = motion(Link);

const Blockchain = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- FETCH DATA FROM FIREBASE REALTIME DATABASE ---
  useEffect(() => {
    // We point exactly to "Protfolio/Blockchain" as defined in your JSON
    const portfolioRef = ref(database, "Protfolio/ZIPZAP");

    const unsubscribe = onValue(
      portfolioRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const fetchedData = snapshot.val();
          setData(fetchedData);
          setLoading(false);
        } else {
          console.warn("No data found at 'Protfolio/Blockchain'");
          setError("Project content not found.");
          setLoading(false);
        }
      },
      (err) => {
        console.error("Firebase Read Error:", err);
        setError("Failed to load project data.");
        setLoading(false);
      }
    );

    // Cleanup subscription on unmount
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // --- LOADING STATE ---
  if (loading) {
    return (
      <div className="bg-[#0A0118] min-h-screen flex items-center justify-center text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-4 border-[#677ED6] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm tracking-widest uppercase animate-pulse">
            Loading Project...
          </p>
        </div>
      </div>
    );
  }

  // --- ERROR STATE ---
  if (error || !data) {
    return (
      <div className="bg-[#0A0118] min-h-screen flex flex-col items-center justify-center text-white px-4">
        <p className="text-red-400 mb-4">{error || "Data unavailable"}</p>
        <Link
          href="/portfolio"
          className="text-[#677ED6] hover:text-[#8ea2ff] transition-colors"
        >
          ← Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#0A0118] text-white min-h-screen relative overflow-hidden font-sans">
      <Seo
        title={data.title || "Blockchain Solutions"}
        description={
          data.overview ? data.overview.slice(0, 160) : "Blockchain services."
        }
        url="/portfolio/blockchain"
      />

      {/* --- Header/Navbar Section --- */}
      <header className="absolute top-0 inset-x-0 z-50">
        <Navbar />
      </header>

      {/* --- Main Content --- */}
      <motion.main
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top Section: Tag & Title */}
        <div className="flex flex-col items-center text-center mb-12">
          {/* Tag (Mapped from Schema: "tag") */}
          <motion.div
            variants={itemVariants}
            className="text-xs sm:text-sm tracking-widest uppercase font-semibold border border-[#677ED6] px-4 py-1.5 rounded-full mb-6 text-white"
          >
            {data.tag || "EXPERT SERVICES"}
          </motion.div>

          {/* Main Title (Mapped from Schema: "title") */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 leading-tight"
          >
            {data.title}
          </motion.h1>

          {/* Breadcrumb */}
          <motion.div variants={itemVariants}>
            <p className="text-sm text-white/70 flex items-center justify-center gap-2 flex-wrap">
              <MotionLink
                href="/"
                className="text-[#677ED6] font-medium hover:text-[#8ea2ff] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Home
              </MotionLink>
              <span className="text-[#677ED6]">»</span>
              <MotionLink
                href="/portfolio"
                className="text-[#677ED6] font-medium hover:text-[#8ea2ff] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Portfolio
              </MotionLink>
              <span className="text-[#677ED6]">»</span>
              <span className="text-gray-400">{data.title}</span>
            </p>
          </motion.div>
        </div>

        {/* --- Hero Image Section (Mapped from Schema: "imageUrl") --- */}
        {data.imageUrl && (
          <motion.div variants={itemVariants} className="w-full mb-12">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-[#677ED6]/10 border border-[#677ED6]/30">
              <img
                src={data.imageUrl}
                alt={data.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        )}

        {/* --- Project Meta Data Row (Mapped from Schema: "meta") --- */}
        {data.meta && Array.isArray(data.meta) && (
          <motion.div
            variants={itemVariants}
            className="bg-[#111625] rounded-xl p-6 mb-12 border border-[#677ED6]/30"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.meta.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center md:items-start text-center md:text-left"
                >
                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                    <span className="text-[#677ED6]">
                      {item.icon === "map" && <MapIcon />}
                      {item.icon === "clock" && <ClockIcon />}
                      {item.icon === "users" && <UsersIcon />}
                    </span>
                    {item.label}
                  </div>
                  <div className="font-semibold text-white text-lg pl-0 md:pl-6">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* --- Content Sections --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Project Overview (Mapped from Schema: "overview") */}
            {data.overview && (
              <motion.section variants={itemVariants}>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Project Overview
                </h2>
                <p className="text-white/80 leading-relaxed text-lg">
                  {data.overview}
                </p>
                <div className="h-px w-full bg-[#677ED6]/20 mt-8"></div>
              </motion.section>
            )}

            {/* Project Scope (Mapped from Schema: "scope") */}
            {data.scope && Array.isArray(data.scope) && (
              <motion.section variants={itemVariants}>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Project Scope
                </h2>
                <ul className="space-y-4">
                  {data.scope.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Key Deliverables (Mapped from Schema: "deliverables") */}
            {data.deliverables && Array.isArray(data.deliverables) && (
              <motion.section variants={itemVariants}>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Key Deliverables
                </h2>
                <ul className="space-y-4">
                  {data.deliverables.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-white/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="h-px w-full bg-[#677ED6]/20 mt-8"></div>
              </motion.section>
            )}

            {/* Technologies Used (Mapped from Schema: "techStack") */}
            {data.techStack && Array.isArray(data.techStack) && (
              <motion.section variants={itemVariants}>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Technologies
                </h2>
                <div className="flex flex-wrap gap-2">
                  {data.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-[#1E1B38] text-[#9caeff] border border-[#677ED6]/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.section>
            )}
          </div>
        </div>
      </motion.main>

      {/* --- CSS-Based Background Effects --- */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[-5%] w-[30vw] h-[30vw] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[35vw] h-[35vw] bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      <Footer />
    </div>
  );
};

// --- Helper Components ---

const CheckIcon = () => (
  <svg
    className="mt-1 flex-shrink-0 text-[#677ED6]"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.75 12L10.58 14.83L16.25 9.17"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MapIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const UsersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export default Blockchain;
