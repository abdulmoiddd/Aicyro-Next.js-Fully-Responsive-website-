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
//     { name: "Sitemap", href: "/sitemap" },
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
//                 {/* Optional: Add blinking cursor effect */}
//                 <span className="animate-pulse">|</span>
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
//                 <li key={item.name}>
//                   {/* FIXED: Using Link, item.href and item.name properly */}
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

//   // Navigation data
//   const companyLinks = [
//     { name: "Services", href: "/services" },
//     { name: "About Us", href: "/about" },
//     { name: "Contact Us", href: "/contact" },
//     { name: "Sitemap", href: "/sitemap" },
//   ];

//   const serviceLinks = [
//     { name: "SaaS Development", href: "/services/saas-development" },
//     { name: "Cybersecurity", href: "/services/cybersecurity-data-protection" },
//     { name: "AI Solutions", href: "/services/ai-solutions" },
//     { name: "Cloud & DevOps", href: "/services/cloud-devops" },
//     { name: "QA & Automation", href: "/services/qa-automation" },
//     { name: "Web Development", href: "/services/web-development" },
//     { name: "App Development", href: "/services/app-development" },
//     { name: "Blockchain", href: "/services/blockchain" },
//   ];

//   // --- NEW: Social Media Links Configuration ---
//   const socialLinks = [
//     {
//       name: "Facebook",
//       href: "https://facebook.com",
//       path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
//     },
//     {
//       name: "Instagram",
//       href: "https://instagram.com",
//       path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 10-16 0 8 8 0 0016 0z", // Simplified circular instagram
//       // Alternately, use this path for the square camera look:
//       // path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
//     },
//     {
//       name: "LinkedIn",
//       href: "https://linkedin.com",
//       path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z",
//       extraPath: "M2 4a2 2 0 112 2 2 2 0 01-2-2z", // LinkedIn dot
//     },
//   ];

//   return (
//     <footer className="bg-[#0A0117] text-white border-t border-white/10 pt-16 sm:pt-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* --- Main Content Grid --- */}
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 sm:gap-12 pb-16 border-b border-gray-700">
//           {/* === Column 1: Branding, Contact CTA, and SOCIALS === */}
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
//                 <span className="animate-pulse">|</span>
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

//             {/* --- ADDED: Social Media Icons --- */}
//             <div className="pt-8 flex items-center gap-6">
//               {socialLinks.map((social) => (
//                 <a
//                   key={social.name}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group"
//                   aria-label={`Follow us on ${social.name}`}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     // Default gray, changes to accent purple on hover
//                     className="w-6 h-6 text-gray-400 group-hover:text-[#7B71DB] transition-colors duration-300"
//                   >
//                     <path d={social.path} />
//                     {/* For LinkedIn circle bit */}
//                     {social.extraPath && <path d={social.extraPath} />}
//                   </svg>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* === Column 2: Services Navigation === */}
//           <div className="lg:col-span-1 mt-8 lg:mt-0">
//             <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
//               Services
//             </h3>
//             <ul className="space-y-3 text-gray-400">
//               {serviceLinks.map((item) => (
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
///
//
//
//
//
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

//   // Navigation data
//   const companyLinks = [
//     { name: "Services", href: "/services" },
//     { name: "About Us", href: "/about" },
//     { name: "Contact Us", href: "/contact" },
//     { name: "Sitemap", href: "/sitemap" },
//   ];

//   const serviceLinks = [
//     { name: "SaaS Development", href: "/services/saas-development" },
//     { name: "Cybersecurity", href: "/services/cybersecurity-data-protection" },
//     { name: "AI Solutions", href: "/services/ai-solutions" },
//     { name: "Cloud & DevOps", href: "/services/cloud-devops" },
//     { name: "QA & Automation", href: "/services/qa-automation" },
//     { name: "Web Development", href: "/services/web-development" },
//     { name: "App Development", href: "/services/app-development" },
//     { name: "Blockchain", href: "/services/blockchain" },
//   ];

//   // --- NEW: Social Media Links Configuration with Gradient Style ---
//   const socialLinks = [
//     {
//       name: "Facebook",
//       href: "https://www.facebook.com/profile.php?id=61580451864408&mibextid=wwXIfr&mibextid=wwXIfr",
//       path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
//     },
//     {
//       name: "LinkedIn",
//       href: "https://www.linkedin.com/company/aicyro007/",
//       path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z",
//       extraPath: "M2 4a2 2 0 112 2 2 2 0 01-2-2z",
//     },
//     {
//       name: "Instagram",
//       href: "https://www.instagram.com/ai.cy.ro?igsh=anY5NGluanozdHJu",
//       path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 10-16 0 8 8 0 0016 0z",
//     },
//   ];

//   return (
//     <footer className="bg-[#0A0117] text-white border-t border-white/10 pt-16 sm:pt-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* --- Main Content Grid --- */}
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 sm:gap-12 pb-16 border-b border-gray-700">
//           {/* === Column 1: Branding, Contact CTA, and SOCIALS === */}
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
//                 <span className="animate-pulse">|</span>
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

//             {/* --- ADDED: Social Media Icons with Gradient Style --- */}
//             <div className="pt-8 flex items-center gap-4">
//               {socialLinks.map((social) => (
//                 <a
//                   key={social.name}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#7B71DB] to-[#4A41A8] hover:from-[#8C82E0] hover:to-[#5B52B9] transition-all duration-300 shadow-lg"
//                   aria-label={`Follow us on ${social.name}`}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     fill="white"
//                     className="w-5 h-5"
//                   >
//                     <path d={social.path} />
//                     {social.extraPath && <path d={social.extraPath} />}
//                   </svg>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* === Column 2: Services Navigation === */}
//           <div className="lg:col-span-1 mt-8 lg:mt-0">
//             <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
//               Services
//             </h3>
//             <ul className="space-y-3 text-gray-400">
//               {serviceLinks.map((item) => (
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
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// // Import brand icons from react-icons
// import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
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

//   // Navigation data
//   const companyLinks = [
//     { name: "Services", href: "/services" },
//     { name: "About Us", href: "/about" },
//     { name: "Contact Us", href: "/contact" },
//     { name: "Sitemap", href: "/sitemap" },
//   ];

//   const serviceLinks = [
//     { name: "SaaS Development", href: "/services/saas-development" },
//     { name: "Cybersecurity", href: "/services/cybersecurity-data-protection" },
//     { name: "AI Solutions", href: "/services/ai-solutions" },
//     { name: "Cloud & DevOps", href: "/services/cloud-devops" },
//     { name: "QA & Automation", href: "/services/qa-automation" },
//     { name: "Web Development", href: "/services/web-development" },
//     { name: "App Development", href: "/services/app-development" },
//     { name: "Blockchain", href: "/services/blockchain" },
//   ];

//   // --- UPDATED: Social Media Links using React Icons ---
//   const socialLinks = [
//     {
//       name: "Facebook",
//       href: "https://www.facebook.com/profile.php?id=61580451864408&mibextid=wwXIfr&mibextid=wwXIfr",
//       icon: FaFacebookF,
//     },
//     {
//       name: "LinkedIn",
//       href: "https://www.linkedin.com/company/aicyro007/",
//       icon: FaLinkedinIn,
//     },
//     {
//       name: "Instagram",
//       href: "https://www.instagram.com/ai.cy.ro?igsh=anY5NGluanozdHJu",
//       icon: FaInstagram,
//     },
//   ];

//   return (
//     <footer className="bg-[#0A0117] text-white border-t border-white/10 pt-16 sm:pt-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* --- Main Content Grid --- */}
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 sm:gap-12 pb-16 border-b border-gray-700">
//           {/* === Column 1: Branding, Contact CTA, and SOCIALS === */}
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
//                 <span className="animate-pulse">|</span>
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

//             {/* --- UPDATED: Social Media Icons Rendering --- */}
//             <div className="pt-8 flex items-center gap-4">
//               {socialLinks.map((social) => (
//                 <a
//                   key={social.name}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#7B71DB] to-[#4A41A8] hover:from-[#8C82E0] hover:to-[#5B52B9] transition-all duration-300 shadow-lg"
//                   aria-label={`Follow us on ${social.name}`}
//                 >
//                   {/* Render the React Icon Component */}
//                   <social.icon className="w-5 h-5 text-white" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* === Column 2: Services Navigation === */}
//           <div className="lg:col-span-1 mt-8 lg:mt-0">
//             <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
//               Services
//             </h3>
//             <ul className="space-y-3 text-gray-400">
//               {serviceLinks.map((item) => (
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
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// Import brand icons from react-icons
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
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

  // Navigation data
  const companyLinks = [
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Sitemap", href: "/sitemap" },
  ];

  const serviceLinks = [
    { name: "SaaS Development", href: "/services/saas-development" },
    { name: "Cybersecurity", href: "/services/cybersecurity-data-protection" },
    { name: "AI Solutions", href: "/services/ai-solutions" },
    { name: "Cloud & DevOps", href: "/services/cloud-devops" },
    { name: "QA & Automation", href: "/services/qa-automation" },
    { name: "Web Development", href: "/services/web-development" },
    { name: "App Development", href: "/services/app-development" },
    { name: "Blockchain", href: "/services/blockchain" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61580451864408",
      icon: FaFacebookF,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/aicyro007/",
      icon: FaLinkedinIn,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/ai.cy.ro",
      icon: FaInstagram,
    },
  ];

  return (
    <footer className="relative bg-[#0A0117] text-white overflow-hidden">
      {/* --- UI ENHANCEMENT: Ambient Background Glow --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#7B71DB] opacity-[0.08] blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-[#4A41A8] opacity-[0.08] blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-10">
        {/* --- Top Border Gradient --- */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        {/* --- Main Content Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16">
          {/* === Column 1: Brand & CTA (Spans 7 columns) === */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Image
                  src={logo}
                  alt="Aicyro Solutions Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>

              <div className="space-y-2">
                <p className="text-sm text-[#8F8BF9] font-bold uppercase tracking-[0.2em]">
                  Hello! We&rsquo;re Listening
                </p>

                {/* Main CTA Text */}
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                  Let&rsquo;s talk about <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B71DB] to-[#a7a0eb] inline-block min-w-[200px]">
                    {displayedText}
                    <span className="text-[#7B71DB] animate-pulse">|</span>
                  </span>
                </h2>
              </div>

              {/* Action Link */}
              <div className="pt-4">
                <a
                  href="https://calendar.app.google/z5GZpzeNAPNfvqHE7"
                  className="group inline-flex items-center space-x-3 text-white font-bold text-sm uppercase tracking-widest border-b border-white/30 pb-1 hover:border-[#7B71DB] hover:text-[#7B71DB] transition-all duration-300"
                >
                  <span>Let&rsquo;s build something together</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* Social Icons (Moved closer to bottom of this column) */}
            <div className="pt-10 flex items-center gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-[#2a2445] to-[#150d2e] border border-white/5 hover:border-[#7B71DB]/50 transition-all duration-300 shadow-lg hover:shadow-[#7B71DB]/40 hover:-translate-y-1"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7B71DB] to-[#4A41A8] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <social.icon className="relative z-10 w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* === Column 2: Services (Spans 3 columns) === */}
          <div className="lg:col-span-3 mt-4 lg:mt-0">
            <h3 className="text-lg font-bold text-white mb-6 border-l-2 border-[#7B71DB] pl-3">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-gray-400 hover:text-white transition-colors duration-200 text-[15px]"
                  >
                    <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-[#7B71DB] opacity-0 group-hover:opacity-100">
                      ›
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* === Column 3: Company (Spans 2 columns) === */}
          <div className="lg:col-span-2 mt-4 lg:mt-0">
            <h3 className="text-lg font-bold text-white mb-6 border-l-2 border-[#7B71DB] pl-3">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-gray-400 hover:text-white transition-colors duration-200 text-[15px]"
                  >
                    <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-[#7B71DB] opacity-0 group-hover:opacity-100">
                      ›
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="relative pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium tracking-wide">
          <p className="order-2 md:order-1">
            &copy; {new Date().getFullYear()} Aicyro Solutions. All rights
            reserved.
          </p>
          <div className="flex gap-6 order-1 md:order-2">
            <Link
              href="/about"
              className="hover:text-[#7B71DB] transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/privacy"
              className="hover:text-[#7B71DB] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#7B71DB] transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
