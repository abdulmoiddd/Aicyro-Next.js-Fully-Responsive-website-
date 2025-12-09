// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import logo from "../../assets/logo.png";

// // List of rotating CTA phrases
// const ctaWords = ["your vision", "your project", "your idea"];
// const TYPING_SPEED = 150;
// const DELETING_SPEED = 75;
// const PAUSE_DURATION = 1500;

// const Footer = () => {
//   const [displayedText, setDisplayedText] = useState("");
//   const [wordIndex, setWordIndex] = useState(0);
//   const [isTyping, setIsTyping] = useState(true);

//   // --- Typing/Deleting Effect Logic ---
//   useEffect(() => {
//     const currentWord = ctaWords[wordIndex % ctaWords.length];
//     let timeout;

//     if (isTyping) {
//       if (displayedText.length < currentWord.length) {
//         timeout = setTimeout(() => {
//           setDisplayedText(currentWord.substring(0, displayedText.length + 1));
//         }, TYPING_SPEED);
//       } else {
//         timeout = setTimeout(() => {
//           setIsTyping(false);
//         }, PAUSE_DURATION);
//       }
//     } else {
//       if (displayedText.length > 0) {
//         timeout = setTimeout(() => {
//           setDisplayedText(currentWord.substring(0, displayedText.length - 1));
//         }, DELETING_SPEED);
//       } else {
//         setIsTyping(true);
//         setWordIndex((prevIndex) => (prevIndex + 1) % ctaWords.length);
//       }
//     }

//     return () => clearTimeout(timeout);
//   }, [displayedText, isTyping, wordIndex]);
//   // ------------------------------------

//   // Navigation data mapping items to their routes
//   const companyLinks = [
//     { name: "Services", href: "/services" },
//     { name: "About Us", href: "/about" },
//     { name: "Contact Us", href: "/contact" },
//   ];

//   const serviceLinks = [
//     { name: "SaaS Development", href: "/services/saas-development" },
//     {
//       name: "Cybersecurity & Data Protection",
//       href: "/services/cybersecurity-data-protection",
//     },
//     { name: "AI Solutions", href: "/services/ai-solutions" },
//     { name: "Cloud & DevOps", href: "/services/cloud-devops" },
//     { name: "QA & Automation", href: "/services/qa-automation" },
//     { name: "Web Development", href: "/services/web-development" },
//     { name: "App Development", href: "/services/app-development" },
//     { name: "Blockchain", href: "/services/blockchain" },
//   ];

//   return (
//     <footer className="bg-[#0A0117] text-white border-t border-white/10 pt-16 sm:pt-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* --- Main Content Grid --- */}
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 sm:gap-12 pb-16 border-b border-gray-700">
//           {/* === Column 1: Branding and Contact CTA === */}
//           <div className="lg:col-span-2 space-y-3 sm:space-y-4">
//             <div className="flex items-center space-x-2 mb-2">
//               <Image
//                 src={logo}
//                 alt="Aicyro Solutions Logo"
//                 className="h-10 sm:h-12 w-auto"
//               />
//             </div>

//             <p className="text-xs sm:text-sm text-[#7066C8] font-semibold uppercase tracking-widest pt-2">
//               HELLO! WE&rsquo;RE LISTENING
//             </p>

//             {/* Main CTA Text */}
//             <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight sm:leading-none pt-4">
//               Let&rsquo;s talk about <br />
//               <span className="text-[#7B71DB] opacity-100 transition-opacity duration-500 ease-in-out inline-block min-w-[150px] sm:min-w-[200px]">
//                 {displayedText}
//               </span>
//             </h2>

//             {/* CTA Link/Button */}
//             <div className="pt-6 sm:pt-8">
//               <a
//                 href="https://calendar.app.google/z5GZpzeNAPNfvqHE7"
//                 className="inline-flex items-center space-x-2 text-white font-semibold text-sm uppercase tracking-wider hover:text-[#7B71DB] transition duration-300"
//               >
//                 <span>LET&rsquo;S BUILD SOMETHING TOGETHER</span>
//                 <span className="text-xl">→</span>
//               </a>
//             </div>
//           </div>

//           {/* === Column 2: Services Navigation === */}
//           <div className="lg:col-span-1 mt-8 lg:mt-0">
//             <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
//               Services
//             </h3>
//             <ul className="space-y-3 text-gray-400">
//               {serviceLinks.map((item) => (
//                 <li key={item}>
//                   <a
//                     href="/services"
//                     className="hover:text-[#7B71DB] transition duration-200 text-sm"
//                   >
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* === Column 3: Company Navigation === */}
//           <div className="lg:col-span-1 mt-8 lg:mt-0">
//             <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
//               Company
//             </h3>
//             <ul className="space-y-3 text-gray-400">
//               {companyLinks.map((item) => (
//                 <li key={item.name}>
//                   <Link
//                     href={item.href}
//                     className="hover:text-[#7B71DB] transition duration-200 text-sm"
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* --- Copyright Bar --- */}
//         <div className="flex flex-col sm:flex-row justify-between items-center py-4 text-gray-400 text-xs sm:text-sm space-y-2 sm:space-y-0">
//           <p className="order-2 sm:order-1">
//             Copyright © 2025 Aicyro Solutions
//           </p>
//           <Link
//             href="/about"
//             className="hover:text-white transition duration-200 order-1 sm:order-2"
//           >
//             About Us
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";

// List of rotating CTA phrases
const ctaWords = ["your vision", "your project", "your idea"];
const TYPING_SPEED = 150;
const DELETING_SPEED = 75;
const PAUSE_DURATION = 1500;

const Footer = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  // --- Typing/Deleting Effect Logic ---
  useEffect(() => {
    const currentWord = ctaWords[wordIndex % ctaWords.length];
    let timeout;

    if (isTyping) {
      if (displayedText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.substring(0, displayedText.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, PAUSE_DURATION);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.substring(0, displayedText.length - 1));
        }, DELETING_SPEED);
      } else {
        setIsTyping(true);
        setWordIndex((prevIndex) => (prevIndex + 1) % ctaWords.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, wordIndex]);
  // ------------------------------------

  // Navigation data mapping items to their routes
  const companyLinks = [
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  const serviceLinks = [
    { name: "SaaS Development", href: "/services/saas-development" },
    {
      name: "Cybersecurity & Data Protection",
      href: "/services/cybersecurity-data-protection",
    },
    { name: "AI Solutions", href: "/services/ai-solutions" },
    { name: "Cloud & DevOps", href: "/services/cloud-devops" },
    { name: "QA & Automation", href: "/services/qa-automation" },
    { name: "Web Development", href: "/services/web-development" },
    { name: "App Development", href: "/services/app-development" },
    { name: "Blockchain", href: "/services/blockchain" },
  ];

  return (
    <footer className="bg-[#0A0117] text-white border-t border-white/10 pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Main Content Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 sm:gap-12 pb-16 border-b border-gray-700">
          {/* === Column 1: Branding and Contact CTA === */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-2 mb-2">
              <Image
                src={logo}
                alt="Aicyro Solutions Logo"
                className="h-10 sm:h-12 w-auto"
              />
            </div>

            <p className="text-xs sm:text-sm text-[#7066C8] font-semibold uppercase tracking-widest pt-2">
              HELLO! WE&rsquo;RE LISTENING
            </p>

            {/* Main CTA Text */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight sm:leading-none pt-4">
              Let&rsquo;s talk about <br />
              <span className="text-[#7B71DB] opacity-100 transition-opacity duration-500 ease-in-out inline-block min-w-[150px] sm:min-w-[200px]">
                {displayedText}
                {/* Optional: Add blinking cursor effect */}
                <span className="animate-pulse">|</span>
              </span>
            </h2>

            {/* CTA Link/Button */}
            <div className="pt-6 sm:pt-8">
              <a
                href="https://calendar.app.google/z5GZpzeNAPNfvqHE7"
                className="inline-flex items-center space-x-2 text-white font-semibold text-sm uppercase tracking-wider hover:text-[#7B71DB] transition duration-300"
              >
                <span>LET&rsquo;S BUILD SOMETHING TOGETHER</span>
                <span className="text-xl">→</span>
              </a>
            </div>
          </div>

          {/* === Column 2: Services Navigation === */}
          <div className="lg:col-span-1 mt-8 lg:mt-0">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
              Services
            </h3>
            <ul className="space-y-3 text-gray-400">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  {/* FIXED: Using Link, item.href and item.name properly */}
                  <Link
                    href={item.href}
                    className="hover:text-[#7B71DB] transition duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* === Column 3: Company Navigation === */}
          <div className="lg:col-span-1 mt-8 lg:mt-0">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
              Company
            </h3>
            <ul className="space-y-3 text-gray-400">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-[#7B71DB] transition duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- Copyright Bar --- */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-4 text-gray-400 text-xs sm:text-sm space-y-2 sm:space-y-0">
          <p className="order-2 sm:order-1">
            Copyright © 2025 Aicyro Solutions
          </p>
          <Link
            href="/about"
            className="hover:text-white transition duration-200 order-1 sm:order-2"
          >
            About Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
