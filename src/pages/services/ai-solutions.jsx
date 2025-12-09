import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../../Components/Essntials/Navbar";
import Footer from "../../Components/Essntials/footer";
import Seo from "../../Components/Essntials/Seo";

// --- FIREBASE IMPORTS ---
import { ref, onValue } from "firebase/database";
import { database } from "../../lib/firebase";
// -------------------------

// Create a motion-enabled Link for breadcrumbs
const MotionLink = motion(Link);

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

const breadcrumbVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.8, duration: 0.5 } },
};
// --------------------------

// --- MAIN COMPONENT ---
const SaaSDevelopment = () => {
  const [serviceData, setServiceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- FIREBASE DATA FETCHING ---
  useEffect(() => {
    const serviceRef = ref(database, "Servicessubpages/AISolutions");

    const unsubscribe = onValue(
      serviceRef,
      (snapshot) => {
        if (snapshot.exists()) {
          setServiceData(snapshot.val());
          setLoading(false);
        } else {
          console.log(
            "No SaaS Development data found at 'Servicessubpages/SaaSDevelopment' path."
          );
          setError("Content not found");
          setLoading(false);
        }
      },
      (err) => {
        console.error("Firebase read error:", err);
        setError("Failed to load content");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // Keys used to iterate through the content sections in order
  const contentSections = [
    "The Race Against Time",
    "Strategic Discovery Workshops",
    "Agile Sprints for Rapid Delivery",
    "Uncompromised Security (VAPT)",
    "Cloud-First Infrastructure",
    "Ready to Launch?",
  ];

  // Loading State
  if (loading) {
    return (
      <div className="bg-[#0A0118] min-h-screen flex items-center justify-center text-white">
        <div className="w-8 h-8 border-4 border-[#677ED6] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Error State
  if (error || !serviceData) {
    return (
      <div className="bg-[#0A0118] min-h-screen flex flex-col items-center justify-center text-white px-4">
        <p className="text-red-400 mb-4">
          {error || "Error loading content. Please try again later."}
        </p>
        <Link
          href="/services"
          className="text-[#677ED6] hover:text-[#8ea2ff] transition-colors"
        >
          ← Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-[#0A0118] text-white pt-24 sm:pt-32 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen">
        {/* --- Header/Navbar Section --- */}
        <header className="absolute top-0 inset-x-0 z-50">
          <Navbar />
        </header>

        <Seo
          title={serviceData.Title || "AI Solutions"}
          description={serviceData["Meta Description"] || "AI Solutions"}
          url="/services/ai-Solutions"
          keywords="SaaS Development, SaaS Development Services, SaaS Development Company, SaaS Development Agency"
        />

        {/* --- Hero/Services Content Section --- */}
        <motion.main
          className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 'SERVICES' Label */}
          <motion.div
            variants={itemVariants}
            className="text-xs sm:text-sm tracking-widest uppercase font-semibold border border-[#677ED6] px-4 py-1.5 rounded-full mb-6 text-white"
          >
            SERVICES
          </motion.div>

          {/* Main Title (Fetched from Firebase) */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-5xl lg:text-6xl font-semibold mb-6 leading-tight max-w-4xl"
          >
            {serviceData.Title}
          </motion.h1>

          {/* Subtitle/Meta Description (Fetched from Firebase) */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-lg text-white/90 max-w-3xl px-3 mb-12 leading-relaxed"
          >
            {serviceData["Meta Description"]}
          </motion.p>
          {/* --- Breadcrumb Section --- */}
          <motion.div
            className="text-center pb-6 relative z-10"
            variants={breadcrumbVariants}
            initial="hidden"
            animate="visible"
          >
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
                href="/services"
                className="text-gray-300 font-medium hover:text-[#8ea2ff] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Services
              </MotionLink>
              <span className="text-[#677ED6]">»</span>
              <span className="text-gray-300">AI Solutions</span>
            </p>
          </motion.div>

          {/* --- CSS-Based Background Effects --- */}
          <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-600/10 rounded-full blur-[120px]" />
            <div className="absolute top-[20%] right-[-5%] w-[30vw] h-[30vw] bg-blue-600/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-10%] left-[20%] w-[35vw] h-[35vw] bg-indigo-600/10 rounded-full blur-[120px]" />
          </div>

          {/* --- Blog Content Sections --- */}
          <div className="w-full max-w-4xl mx-auto text-left space-y-12 mt-8">
            {contentSections.map((key) =>
              serviceData[key] ? (
                <motion.div
                  key={key}
                  variants={itemVariants}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10 hover:bg-white/10 transition-colors duration-300"
                >
                  <h2 className="text-xl sm:text-2xl font-bold text-[#677ED6] mb-4">
                    {key}
                  </h2>
                  <div className="text-gray-300 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                    {serviceData[key]}
                  </div>
                </motion.div>
              ) : null
            )}
          </div>
        </motion.main>
      </div>
      <Footer />
    </div>
  );
};

export default SaaSDevelopment;
