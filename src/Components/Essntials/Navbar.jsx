// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { useRouter } from "next/router";
// // Assuming the Logo path is correct for your project structure
// import Logo from "../../assets/logo.png"; // Placeholder for Logo import

// // Icons for the mobile menu (You'll need to install react-icons or use custom SVGs)
// // Assuming you are using react-icons, you'd import:
// // import { HiMenu, HiX } from "react-icons/hi";

// const linkBase = "transition duration-300 hover:text-[#8F8BF9]";

// const Navbar = () => {
//   // 1. State for controlling the mobile menu
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const router = useRouter();

//   const toggleMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const navLinks = [
//     { name: "Home", to: "/" },
//     { name: "Services", to: "/services" },
//     { name: "Portfolio", to: "/portfolio" },
//     { name: "About", to: "/about" },
//     { name: "Contacts", to: "/contact" },
//   ];

//   const isActive = (path) => {
//     if (!router?.pathname) return false;
//     if (path === "/") {
//       return router.pathname === "/";
//     }
//     return router.pathname.startsWith(path);
//   };

//   return (
//     <nav className="absolute top-0 inset-x-0 z-50 flex items-center justify-between py-5 px-6 md:px-20 text-white backdrop-blur-sm border-b border-white/10">
//       {/* Logo Section */}
//       <div className="flex items-center font-poppins z-50">
//         <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
//           {/* Using text placeholder for Logo since the image isn't available here */}
//           {/* <div className="text-2xl font-bold text-[#8F8BF9]">AICYRO</div> */}
//           {/* If the image is available, uncomment the line below and remove the div above */}
//           {/* <img src={Logo} alt="Company Logo" className="h-10" /> */}
//           <Image
//             src={Logo}
//             alt="Company Logo"
//             className="h-10 w-auto" // w-auto maintains aspect ratio
//           />
//         </Link>
//       </div>

//       {/* Desktop Menu and Button Container */}
//       <div className="hidden md:flex items-center space-x-10">
//         {/* Desktop Navigation Links */}
//         <ul className="flex space-x-8 text-base">
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <Link
//                 href={link.to}
//                 className={
//                   isActive(link.to)
//                     ? "text-[#8F8BF9] font-bold"
//                     : `text-white ${linkBase}`
//                 }
//               >
//                 {link.name}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Desktop Button */}
//         <button
//           onClick={() =>
//             window.open(
//               "https://calendar.app.google/z5GZpzeNAPNfvqHE7",
//               "_blank"
//             )
//           }
//           className="px-8 py-3 text-sm font-bold text-white transition duration-300 rounded-full shadow-lg
//                     bg-gradient-to-r from-[#7973DB] to-[#5B86D3] hover:from-[#5B86D3] hover:to-[#7973DB] min-w-[180px]"
//         >
//           BOOK A DEMO
//         </button>
//       </div>

//       {/* Mobile Menu Icon (Visible only on small screens) */}
//       <div className="md:hidden flex items-center z-50">
//         {/* Mobile Button (Moved for better mobile accessibility) */}
//         <button
//           onClick={() =>
//             window.open(
//               "https://calendar.app.google/z5GZpzeNAPNfvqHE7",
//               "_blank"
//             )
//           }
//           className="px-4 py-2 mr-3 text-xs font-bold text-white transition duration-300 rounded-full shadow-lg
//                     bg-gradient-to-r from-[#7973DB] to-[#5B86D3] hover:from-[#5B86D3] hover:to-[#7973DB] min-w-[120px]"
//         >
//           BOOK DEMO
//         </button>

//         {/* Hamburger/Close Icon */}
//         <button
//           onClick={toggleMenu}
//           className="text-white focus:outline-none p-2 rounded-lg hover:bg-white/10"
//         >
//           {/* Placeholder for Icons: You should replace this with actual SVG/Icon components */}
//           {isMobileMenuOpen ? (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               ></path>
//             </svg>
//           ) : (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               ></path>
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu Panel (Hidden on md and up) */}
//       <div
//         className={`md:hidden absolute top-[75px] left-0 w-full bg-[#0B0219] bg-opacity-95 backdrop-blur-md transition-all duration-300 ease-in-out
//         ${
//           isMobileMenuOpen
//             ? "translate-y-0 opacity-100 h-screen"
//             : "-translate-y-full opacity-0 h-0"
//         }`}
//       >
//         <ul className="flex flex-col items-center pt-8 space-y-6 text-xl">
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <Link
//                 href={link.to}
//                 onClick={toggleMenu}
//                 className={
//                   isActive(link.to)
//                     ? "text-[#8F8BF9] font-bold text-2xl"
//                     : `text-white ${linkBase} text-xl`
//                 }
//               >
//                 {link.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

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
// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { useRouter } from "next/router";
// // Assuming the Logo path is correct for your project structure
// import Logo from "../../assets/logo.png";

// const linkBase = "transition duration-300 hover:text-[#8F8BF9]";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // State to handle mobile dropdown expansions individually
//   const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState({});

//   const router = useRouter();

//   const toggleMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   // Toggle specific mobile sub-menus
//   const toggleMobileSubMenu = (menuName) => {
//     setMobileSubMenuOpen((prev) => ({
//       ...prev,
//       [menuName]: !prev[menuName],
//     }));
//   };

//   const navLinks = [
//     { name: "Home", to: "/" },
//     {
//       name: "Services",
//       to: "/services",
//       subLinks: [
//         { name: "SaaS Development", to: "/services/saasdevelopment" },
//         { name: "App Development", to: "/services/app" },
//         { name: "UI/UX Design", to: "/services/design" },
//       ],
//     },
//     {
//       name: "Portfolio",
//       to: "/portfolio",
//       subLinks: [
//         { name: "Case Studies", to: "/portfolio/cases" },
//         { name: "Live Projects", to: "/portfolio/live" },
//       ],
//     },
//     { name: "About", to: "/about" },
//     { name: "Contacts", to: "/contact" },
//   ];

//   const isActive = (path) => {
//     if (!router?.pathname) return false;
//     if (path === "/") {
//       return router.pathname === "/";
//     }
//     return router.pathname.startsWith(path);
//   };

//   // Chevron Icon Component for reusability
//   const ChevronIcon = ({ className }) => (
//     <svg
//       className={className}
//       fill="none"
//       stroke="currentColor"
//       viewBox="0 0 24 24"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//         d="M19 9l-7 7-7-7"
//       ></path>
//     </svg>
//   );

//   return (
//     <nav className="absolute top-0 inset-x-0 z-50 flex items-center justify-between py-5 px-6 md:px-20 text-white backdrop-blur-sm border-b border-white/10">
//       {/* Logo Section */}
//       <div className="flex items-center font-poppins z-50">
//         <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
//           <Image src={Logo} alt="Company Logo" className="h-10 w-auto" />
//         </Link>
//       </div>

//       {/* Desktop Menu and Button Container */}
//       <div className="hidden md:flex items-center space-x-10">
//         {/* Desktop Navigation Links */}
//         <ul className="flex space-x-8 text-base items-center">
//           {navLinks.map((link) => (
//             <li key={link.name} className="relative group">
//               {link.subLinks ? (
//                 // Dropdown Logic for Desktop
//                 <div className="relative">
//                   <button
//                     className={`flex items-center gap-1 ${
//                       isActive(link.to)
//                         ? "text-[#8F8BF9] font-bold"
//                         : `text-white ${linkBase}`
//                     }`}
//                   >
//                     <Link href={link.to}>{link.name}</Link>
//                     <ChevronIcon className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
//                   </button>

//                   {/* Dropdown Menu */}
//                   <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 w-48">
//                     <ul className="bg-[#0B0219]/95 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-xl p-2">
//                       {link.subLinks.map((subItem) => (
//                         <li key={subItem.name}>
//                           <Link
//                             href={subItem.to}
//                             className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
//                           >
//                             {subItem.name}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               ) : (
//                 // Standard Link
//                 <Link
//                   href={link.to}
//                   className={
//                     isActive(link.to)
//                       ? "text-[#8F8BF9] font-bold"
//                       : `text-white ${linkBase}`
//                   }
//                 >
//                   {link.name}
//                 </Link>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Desktop Button */}
//         <button
//           onClick={() =>
//             window.open(
//               "https://calendar.app.google/z5GZpzeNAPNfvqHE7",
//               "_blank"
//             )
//           }
//           className="px-8 py-3 text-sm font-bold text-white transition duration-300 rounded-full shadow-lg bg-gradient-to-r from-[#7973DB] to-[#5B86D3] hover:from-[#5B86D3] hover:to-[#7973DB] min-w-[180px]"
//         >
//           BOOK A DEMO
//         </button>
//       </div>

//       {/* Mobile Menu Icon */}
//       <div className="md:hidden flex items-center z-50">
//         <button
//           onClick={() =>
//             window.open(
//               "https://calendar.app.google/z5GZpzeNAPNfvqHE7",
//               "_blank"
//             )
//           }
//           className="px-4 py-2 mr-3 text-xs font-bold text-white transition duration-300 rounded-full shadow-lg bg-gradient-to-r from-[#7973DB] to-[#5B86D3] hover:from-[#5B86D3] hover:to-[#7973DB] min-w-[120px]"
//         >
//           BOOK DEMO
//         </button>

//         <button
//           onClick={toggleMenu}
//           className="text-white focus:outline-none p-2 rounded-lg hover:bg-white/10"
//         >
//           {isMobileMenuOpen ? (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               ></path>
//             </svg>
//           ) : (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               ></path>
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu Panel */}
//       <div
//         className={`md:hidden fixed top-[75px] left-0 w-full bg-[#0B0219] bg-opacity-95 backdrop-blur-md transition-all duration-300 ease-in-out overflow-y-auto
//         ${
//           isMobileMenuOpen
//             ? "translate-y-0 opacity-100 h-[calc(100vh-75px)]"
//             : "-translate-y-full opacity-0 h-0"
//         }`}
//       >
//         <ul className="flex flex-col items-center pt-8 space-y-6 text-xl pb-20">
//           {navLinks.map((link) => (
//             <li key={link.name} className="w-full text-center px-6">
//               {link.subLinks ? (
//                 <div className="flex flex-col items-center">
//                   {/* Mobile Parent Link Row */}
//                   <div
//                     className="flex items-center justify-center gap-2"
//                     onClick={() => toggleMobileSubMenu(link.name)}
//                   >
//                     <span
//                       className={
//                         isActive(link.to)
//                           ? "text-[#8F8BF9] font-bold text-2xl"
//                           : `text-white ${linkBase} text-xl`
//                       }
//                     >
//                       {link.name}
//                     </span>
//                     <ChevronIcon
//                       className={`w-5 h-5 transition-transform duration-300 ${
//                         mobileSubMenuOpen[link.name] ? "rotate-180" : ""
//                       }`}
//                     />
//                   </div>

//                   {/* Mobile Submenu Accordion */}
//                   <div
//                     className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                       mobileSubMenuOpen[link.name]
//                         ? "max-h-60 opacity-100 mt-4"
//                         : "max-h-0 opacity-0"
//                     }`}
//                   >
//                     <ul className="flex flex-col space-y-4 bg-white/5 rounded-xl p-4 min-w-[200px]">
//                       {link.subLinks.map((subItem) => (
//                         <li key={subItem.name}>
//                           <Link
//                             href={subItem.to}
//                             onClick={toggleMenu}
//                             className="text-gray-300 hover:text-[#8F8BF9] text-lg block"
//                           >
//                             {subItem.name}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               ) : (
//                 <Link
//                   href={link.to}
//                   onClick={toggleMenu}
//                   className={
//                     isActive(link.to)
//                       ? "text-[#8F8BF9] font-bold text-2xl"
//                       : `text-white ${linkBase} text-xl`
//                   }
//                 >
//                   {link.name}
//                 </Link>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

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
// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { useRouter } from "next/router";
// // Assuming the Logo path is correct for your project structure
// import Logo from "../../assets/logo.png";

// const linkBase = "transition duration-300 hover:text-[#8F8BF9]";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // State to handle mobile dropdown expansions individually
//   const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState({});

//   const router = useRouter();

//   const toggleMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   // Toggle specific mobile sub-menus
//   const toggleMobileSubMenu = (menuName) => {
//     setMobileSubMenuOpen((prev) => ({
//       ...prev,
//       [menuName]: !prev[menuName],
//     }));
//   };

//   const navLinks = [
//     { name: "Home", to: "/" },
//     {
//       name: "Services",
//       to: "/services",
//       // Added a 4th item to demonstrate the 2-column layout nicely
//       subLinks: [
//         { name: "SaaS Development", to: "/services/saasdevelopment" },
//         { name: "App Development", to: "/services/app" },
//         { name: "UI/UX Design", to: "/services/design" },
//         { name: "Web Development", to: "/services/web" },
//       ],
//     },
//     {
//       name: "Portfolio",
//       to: "/portfolio",
//       // Added dummy items to fill the 2 columns
//       subLinks: [
//         { name: "Case Studies", to: "/portfolio/cases" },
//         { name: "Live Projects", to: "/portfolio/live" },
//         { name: "Open Source", to: "/portfolio/opensource" },
//         { name: "Experiments", to: "/portfolio/experiments" },
//       ],
//     },
//     { name: "About", to: "/about" },
//     { name: "Contacts", to: "/contact" },
//   ];

//   const isActive = (path) => {
//     if (!router?.pathname) return false;
//     if (path === "/") {
//       return router.pathname === "/";
//     }
//     return router.pathname.startsWith(path);
//   };

//   // Chevron Icon Component for reusability
//   const ChevronIcon = ({ className }) => (
//     <svg
//       className={className}
//       fill="none"
//       stroke="currentColor"
//       viewBox="0 0 24 24"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//         d="M19 9l-7 7-7-7"
//       ></path>
//     </svg>
//   );

//   return (
//     <nav className="absolute top-0 inset-x-0 z-50 flex items-center justify-between py-5 px-6 md:px-20 text-white backdrop-blur-sm border-b border-white/10">
//       {/* Logo Section */}
//       <div className="flex items-center font-poppins z-50">
//         <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
//           <Image src={Logo} alt="Company Logo" className="h-10 w-auto" />
//         </Link>
//       </div>

//       {/* Desktop Menu and Button Container */}
//       <div className="hidden md:flex items-center space-x-10">
//         {/* Desktop Navigation Links */}
//         <ul className="flex space-x-8 text-base items-center">
//           {navLinks.map((link) => (
//             <li key={link.name} className="relative group">
//               {link.subLinks ? (
//                 // Dropdown Logic for Desktop
//                 <div className="relative">
//                   <button
//                     className={`flex items-center gap-1 ${
//                       isActive(link.to)
//                         ? "text-[#8F8BF9] font-bold"
//                         : `text-white ${linkBase}`
//                     }`}
//                   >
//                     <Link href={link.to}>{link.name}</Link>
//                     <ChevronIcon className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
//                   </button>

//                   {/* Dropdown Menu - UPDATED FOR 2 COLUMNS */}
//                   {/* Changed width to w-[400px] to fit two columns comfortably */}
//                   <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 w-[400px]">
//                     {/* Added 'grid grid-cols-2 gap-4' for the two-column layout */}
//                     <ul className="bg-[#0B0219]/95 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-xl p-4 grid grid-cols-2 gap-4">
//                       {link.subLinks.map((subItem) => (
//                         <li key={subItem.name}>
//                           <Link
//                             href={subItem.to}
//                             className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors whitespace-nowrap"
//                           >
//                             {subItem.name}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               ) : (
//                 // Standard Link
//                 <Link
//                   href={link.to}
//                   className={
//                     isActive(link.to)
//                       ? "text-[#8F8BF9] font-bold"
//                       : `text-white ${linkBase}`
//                   }
//                 >
//                   {link.name}
//                 </Link>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Desktop Button */}
//         <button
//           onClick={() =>
//             window.open(
//               "https://calendar.app.google/z5GZpzeNAPNfvqHE7",
//               "_blank"
//             )
//           }
//           className="px-8 py-3 text-sm font-bold text-white transition duration-300 rounded-full shadow-lg bg-gradient-to-r from-[#7973DB] to-[#5B86D3] hover:from-[#5B86D3] hover:to-[#7973DB] min-w-[180px]"
//         >
//           BOOK A DEMO
//         </button>
//       </div>

//       {/* Mobile Menu Icon */}
//       <div className="md:hidden flex items-center z-50">
//         <button
//           onClick={() =>
//             window.open(
//               "https://calendar.app.google/z5GZpzeNAPNfvqHE7",
//               "_blank"
//             )
//           }
//           className="px-4 py-2 mr-3 text-xs font-bold text-white transition duration-300 rounded-full shadow-lg bg-gradient-to-r from-[#7973DB] to-[#5B86D3] hover:from-[#5B86D3] hover:to-[#7973DB] min-w-[120px]"
//         >
//           BOOK DEMO
//         </button>

//         <button
//           onClick={toggleMenu}
//           className="text-white focus:outline-none p-2 rounded-lg hover:bg-white/10"
//         >
//           {isMobileMenuOpen ? (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               ></path>
//             </svg>
//           ) : (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               ></path>
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu Panel */}
//       <div
//         className={`md:hidden fixed top-[75px] left-0 w-full bg-[#0B0219] bg-opacity-95 backdrop-blur-md transition-all duration-300 ease-in-out overflow-y-auto
//         ${
//           isMobileMenuOpen
//             ? "translate-y-0 opacity-100 h-[calc(100vh-75px)]"
//             : "-translate-y-full opacity-0 h-0"
//         }`}
//       >
//         <ul className="flex flex-col items-center pt-8 space-y-6 text-xl pb-20">
//           {navLinks.map((link) => (
//             <li key={link.name} className="w-full text-center px-6">
//               {link.subLinks ? (
//                 <div className="flex flex-col items-center">
//                   {/* Mobile Parent Link Row */}
//                   <div
//                     className="flex items-center justify-center gap-2"
//                     onClick={() => toggleMobileSubMenu(link.name)}
//                   >
//                     <span
//                       className={
//                         isActive(link.to)
//                           ? "text-[#8F8BF9] font-bold text-2xl"
//                           : `text-white ${linkBase} text-xl`
//                       }
//                     >
//                       {link.name}
//                     </span>
//                     <ChevronIcon
//                       className={`w-5 h-5 transition-transform duration-300 ${
//                         mobileSubMenuOpen[link.name] ? "rotate-180" : ""
//                       }`}
//                     />
//                   </div>

//                   {/* Mobile Submenu Accordion */}
//                   <div
//                     className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                       mobileSubMenuOpen[link.name]
//                         ? "max-h-60 opacity-100 mt-4"
//                         : "max-h-0 opacity-0"
//                     }`}
//                   >
//                     <ul className="flex flex-col space-y-4 bg-white/5 rounded-xl p-4 min-w-[200px]">
//                       {link.subLinks.map((subItem) => (
//                         <li key={subItem.name}>
//                           <Link
//                             href={subItem.to}
//                             onClick={toggleMenu}
//                             className="text-gray-300 hover:text-[#8F8BF9] text-lg block"
//                           >
//                             {subItem.name}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               ) : (
//                 <Link
//                   href={link.to}
//                   onClick={toggleMenu}
//                   className={
//                     isActive(link.to)
//                       ? "text-[#8F8BF9] font-bold text-2xl"
//                       : `text-white ${linkBase} text-xl`
//                   }
//                 >
//                   {link.name}
//                 </Link>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

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
// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { useRouter } from "next/router";
// // Assuming the Logo path is correct for your project structure
// import Logo from "../../assets/logo.png";

// const linkBase = "transition duration-300 hover:text-[#8F8BF9]";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // State to handle mobile dropdown expansions individually
//   const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState({});

//   const router = useRouter();

//   const toggleMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   // Toggle specific mobile sub-menus
//   const toggleMobileSubMenu = (menuName) => {
//     setMobileSubMenuOpen((prev) => ({
//       ...prev,
//       [menuName]: !prev[menuName],
//     }));
//   };

//   const navLinks = [
//     { name: "Home", to: "/" },
//     {
//       name: "Services",
//       to: "/services",
//       subLinks: [
//         { name: "SaaS Development", to: "/services/saas-development" },
//         {
//           name: "Cybersecurity",
//           to: "/services/cybersecurity-data-protection", // Removed '&'
//         },
//         { name: "AI Solutions", to: "/services/ai-solutions" },
//         { name: "QA & Automation", to: "/services/qa-automation" }, // Removed '&'
//         { name: "Cloud & DevOps", to: "/services/cloud-devops" }, // Removed '&'
//         { name: "Web Development", to: "/services/web-development" },
//         { name: "App Development", to: "/services/app-development" },
//         { name: "Blockchain", to: "/services/blockchain" },
//       ],
//     },
//     {
//       name: "Portfolio",
//       to: "/portfolio",
//       // Added dummy items to fill the 2 columns
//       subLinks: [
//         { name: "Case Studies", to: "/portfolio/cases" },
//         { name: "Live Projects", to: "/portfolio/live" },
//         { name: "Open Source", to: "/portfolio/opensource" },
//         { name: "Experiments", to: "/portfolio/experiments" },
//       ],
//     },
//     { name: "About", to: "/about" },
//     { name: "Contacts", to: "/contact" },
//   ];

//   const isActive = (path) => {
//     if (!router?.pathname) return false;
//     if (path === "/") {
//       return router.pathname === "/";
//     }
//     return router.pathname.startsWith(path);
//   };

//   // Chevron Icon Component for reusability
//   const ChevronIcon = ({ className }) => (
//     <svg
//       className={className}
//       fill="none"
//       stroke="currentColor"
//       viewBox="0 0 24 24"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//         d="M19 9l-7 7-7-7"
//       ></path>
//     </svg>
//   );

//   return (
//     <nav className="absolute top-0 inset-x-0 z-50 flex items-center justify-between py-5 px-6 md:px-20 text-white backdrop-blur-sm border-b border-white/10">
//       {/* Logo Section */}
//       <div className="flex items-center font-poppins z-50">
//         <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
//           <Image src={Logo} alt="Company Logo" className="h-10 w-auto" />
//         </Link>
//       </div>

//       {/* Desktop Menu and Button Container */}
//       <div className="hidden md:flex items-center space-x-10">
//         {/* Desktop Navigation Links */}
//         <ul className="flex space-x-8 text-base items-center">
//           {navLinks.map((link) => (
//             <li key={link.name} className="relative group">
//               {link.subLinks ? (
//                 // Dropdown Logic for Desktop
//                 <div className="relative">
//                   <button
//                     className={`flex items-center gap-1 ${
//                       isActive(link.to)
//                         ? "text-[#8F8BF9] font-bold"
//                         : `text-white ${linkBase}`
//                     }`}
//                   >
//                     <Link href={link.to}>{link.name}</Link>
//                     <ChevronIcon className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
//                   </button>

//                   {/* Dropdown Menu - UPDATED FOR 3 COLUMNS */}
//                   <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 w-[600px]">
//                     {/* Changed 'grid-cols-2' to 'grid-cols-3' */}
//                     <ul className="bg-[#0B0219]  border border-white/10 rounded-xl overflow-hidden shadow-xl p-4 grid grid-cols-3 gap-4">
//                       {link.subLinks.map((subItem) => (
//                         <li key={subItem.name}>
//                           <Link
//                             href={subItem.to}
//                             className="block px-4 py-2 text-sm text-gray-300 hover:text-[#8F8BF9] transition-colors whitespace-nowrap"
//                           >
//                             {subItem.name}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               ) : (
//                 // Standard Link
//                 <Link
//                   href={link.to}
//                   className={
//                     isActive(link.to)
//                       ? "text-[#8F8BF9] font-bold"
//                       : `text-white ${linkBase}`
//                   }
//                 >
//                   {link.name}
//                 </Link>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Desktop Button */}
//         <button
//           onClick={() =>
//             window.open(
//               "https://calendar.app.google/z5GZpzeNAPNfvqHE7",
//               "_blank"
//             )
//           }
//           className="px-8 py-3 text-sm font-bold text-white transition duration-300 rounded-full shadow-lg bg-gradient-to-r from-[#7973DB] to-[#5B86D3] hover:from-[#5B86D3] hover:to-[#7973DB] min-w-[180px]"
//         >
//           BOOK A DEMO
//         </button>
//       </div>

//       {/* Mobile Menu Icon */}
//       <div className="md:hidden flex items-center z-50">
//         <button
//           onClick={() =>
//             window.open(
//               "https://calendar.app.google/z5GZpzeNAPNfvqHE7",
//               "_blank"
//             )
//           }
//           className="px-4 py-2 mr-3 text-xs font-bold text-white transition duration-300 rounded-full shadow-lg bg-gradient-to-r from-[#7973DB] to-[#5B86D3] hover:from-[#5B86D3] hover:to-[#7973DB] min-w-[120px]"
//         >
//           BOOK DEMO
//         </button>

//         <button
//           onClick={toggleMenu}
//           className="text-white focus:outline-none p-2 rounded-lg hover:bg-white/10"
//         >
//           {isMobileMenuOpen ? (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               ></path>
//             </svg>
//           ) : (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               ></path>
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu Panel */}
//       <div
//         className={`md:hidden fixed top-[75px] left-0 w-full bg-[#0B0219] bg-opacity-95 backdrop-blur-md transition-all duration-300 ease-in-out overflow-y-auto
//         ${
//           isMobileMenuOpen
//             ? "translate-y-0 opacity-100 h-[calc(100vh-75px)]"
//             : "-translate-y-full opacity-0 h-0"
//         }`}
//       >
//         <ul className="flex flex-col items-center pt-8 space-y-6 text-xl pb-20">
//           {navLinks.map((link) => (
//             <li key={link.name} className="w-full text-center px-6">
//               {link.subLinks ? (
//                 <div className="flex flex-col items-center">
//                   {/* Mobile Parent Link Row */}
//                   <div
//                     className="flex items-center justify-center gap-2"
//                     onClick={() => toggleMobileSubMenu(link.name)}
//                   >
//                     <span
//                       className={
//                         isActive(link.to)
//                           ? "text-[#8F8BF9] font-bold text-2xl"
//                           : `text-white ${linkBase} text-xl`
//                       }
//                     >
//                       {link.name}
//                     </span>
//                     <ChevronIcon
//                       className={`w-5 h-5 transition-transform duration-300 ${
//                         mobileSubMenuOpen[link.name] ? "rotate-180" : ""
//                       }`}
//                     />
//                   </div>

//                   {/* Mobile Submenu Accordion */}
//                   <div
//                     className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                       mobileSubMenuOpen[link.name]
//                         ? "max-h-60 opacity-100 mt-4"
//                         : "max-h-0 opacity-0"
//                     }`}
//                   >
//                     <ul className="flex flex-col space-y-4 bg-white/5 rounded-xl p-4 min-w-[200px]">
//                       {link.subLinks.map((subItem) => (
//                         <li key={subItem.name}>
//                           <Link
//                             href={subItem.to}
//                             onClick={toggleMenu}
//                             className="text-gray-300 hover:text-[#8F8BF9] text-lg block"
//                           >
//                             {subItem.name}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               ) : (
//                 <Link
//                   href={link.to}
//                   onClick={toggleMenu}
//                   className={
//                     isActive(link.to)
//                       ? "text-[#8F8BF9] font-bold text-2xl"
//                       : `text-white ${linkBase} text-xl`
//                   }
//                 >
//                   {link.name}
//                 </Link>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

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
// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { useRouter } from "next/router";
// // Assuming the Logo path is correct for your project structure
// import Logo from "../../assets/logo.png";

// const linkBase = "transition duration-300 hover:text-[#8F8BF9]";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // State to handle mobile dropdown expansions individually
//   const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState({});

//   const router = useRouter();

//   const toggleMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   // Toggle specific mobile sub-menus
//   const toggleMobileSubMenu = (menuName) => {
//     setMobileSubMenuOpen((prev) => ({
//       ...prev,
//       [menuName]: !prev[menuName],
//     }));
//   };

//   const navLinks = [
//     { name: "Home", to: "/" },
//     {
//       name: "Services",
//       to: "/services",
//       subLinks: [
//         { name: "SaaS Development", to: "/services/saas-development" },
//         {
//           name: "Cybersecurity",
//           to: "/services/cybersecurity-data-protection",
//         },
//         { name: "AI Solutions", to: "/services/ai-solutions" },
//         { name: "QA & Automation", to: "/services/qa-automation" },
//         { name: "Cloud & DevOps", to: "/services/cloud-devops" },
//         { name: "Web Development", to: "/services/web-development" },
//         { name: "App Development", to: "/services/app-development" },
//         { name: "Blockchain", to: "/services/blockchain" },
//       ],
//     },
//     {
//       name: "Portfolio",
//       to: "/portfolio",
//       subLinks: [
//         { name: "Case Studies", to: "/portfolio/cases" },
//         { name: "Live Projects", to: "/portfolio/live" },
//         { name: "Open Source", to: "/portfolio/opensource" },
//         { name: "Experiments", to: "/portfolio/experiments" },
//       ],
//     },
//     { name: "About", to: "/about" },
//     { name: "Contacts", to: "/contact" },
//   ];

//   const isActive = (path) => {
//     if (!router?.pathname) return false;
//     if (path === "/") {
//       return router.pathname === "/";
//     }
//     return router.pathname.startsWith(path);
//   };

//   // Chevron Icon Component for reusability
//   const ChevronIcon = ({ className }) => (
//     <svg
//       className={className}
//       fill="none"
//       stroke="currentColor"
//       viewBox="0 0 24 24"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//         d="M19 9l-7 7-7-7"
//       ></path>
//     </svg>
//   );

//   return (
//     <nav className="absolute top-0 inset-x-0 z-50 flex items-center justify-between py-5 px-6 md:px-20 text-white backdrop-blur-sm border-b border-white/10">
//       {/* Logo Section */}
//       <div className="flex items-center font-poppins z-50">
//         <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
//           <Image src={Logo} alt="Company Logo" className="h-10 w-auto" />
//         </Link>
//       </div>

//       {/* Desktop Menu and Button Container */}
//       <div className="hidden md:flex items-center space-x-10">
//         {/* Desktop Navigation Links */}
//         <ul className="flex space-x-8 text-base items-center">
//           {navLinks.map((link) => (
//             // CHANGED: 'static' here allows the absolute dropdown child to span the full width of the 'nav'
//             <li key={link.name} className="group static">
//               {link.subLinks ? (
//                 // Dropdown Logic for Desktop
//                 <div>
//                   <button
//                     className={`flex items-center gap-1 ${
//                       isActive(link.to)
//                         ? "text-[#8F8BF9] font-bold"
//                         : `text-white ${linkBase}`
//                     }`}
//                   >
//                     <Link href={link.to}>{link.name}</Link>
//                     <ChevronIcon className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
//                   </button>

//                   {/* === FULL WIDTH DROPDOWN === */}
//                   <div className="absolute top-full left-0 w-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
//                     {/* Background Strip */}
//                     <div className="bg-[#0B0219] border-t border-b border-white/10 shadow-2xl">
//                       {/* Centered Content Container */}
//                       <div className="max-w-7xl mx-auto px-6 md:px-20 py-8">
//                         {/* 3 Columns Grid */}
//                         <ul className="grid grid-cols-3 gap-y-4 gap-x-8">
//                           {link.subLinks.map((subItem) => (
//                             <li key={subItem.name}>
//                               <Link
//                                 href={subItem.to}
//                                 className="block text-base text-gray-300 hover:text-[#8F8BF9] hover:bg-white/5 p-3 rounded-lg transition-all duration-200"
//                               >
//                                 {subItem.name}
//                               </Link>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                   {/* =========================== */}
//                 </div>
//               ) : (
//                 // Standard Link
//                 <Link
//                   href={link.to}
//                   className={
//                     isActive(link.to)
//                       ? "text-[#8F8BF9] font-bold"
//                       : `text-white ${linkBase}`
//                   }
//                 >
//                   {link.name}
//                 </Link>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Desktop Button */}
//         <button
//           onClick={() =>
//             window.open(
//               "https://calendar.app.google/z5GZpzeNAPNfvqHE7",
//               "_blank"
//             )
//           }
//           className="px-8 py-3 text-sm font-bold text-white transition duration-300 rounded-full shadow-lg bg-gradient-to-r from-[#7973DB] to-[#5B86D3] hover:from-[#5B86D3] hover:to-[#7973DB] min-w-[180px]"
//         >
//           BOOK A DEMO
//         </button>
//       </div>

//       {/* Mobile Menu Icon */}
//       <div className="md:hidden flex items-center z-50">
//         <button
//           onClick={() =>
//             window.open(
//               "https://calendar.app.google/z5GZpzeNAPNfvqHE7",
//               "_blank"
//             )
//           }
//           className="px-4 py-2 mr-3 text-xs font-bold text-white transition duration-300 rounded-full shadow-lg bg-gradient-to-r from-[#7973DB] to-[#5B86D3] hover:from-[#5B86D3] hover:to-[#7973DB] min-w-[120px]"
//         >
//           BOOK DEMO
//         </button>

//         <button
//           onClick={toggleMenu}
//           className="text-white focus:outline-none p-2 rounded-lg hover:bg-white/10"
//         >
//           {isMobileMenuOpen ? (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               ></path>
//             </svg>
//           ) : (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               ></path>
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu Panel */}
//       <div
//         className={`md:hidden fixed top-[75px] left-0 w-full bg-[#0B0219] bg-opacity-95 backdrop-blur-md transition-all duration-300 ease-in-out overflow-y-auto
//         ${
//           isMobileMenuOpen
//             ? "translate-y-0 opacity-100 h-[calc(100vh-75px)]"
//             : "-translate-y-full opacity-0 h-0"
//         }`}
//       >
//         <ul className="flex flex-col items-center pt-8 space-y-6 text-xl pb-20">
//           {navLinks.map((link) => (
//             <li key={link.name} className="w-full text-center px-6">
//               {link.subLinks ? (
//                 <div className="flex flex-col items-center">
//                   {/* Mobile Parent Link Row */}
//                   <div
//                     className="flex items-center justify-center gap-2"
//                     onClick={() => toggleMobileSubMenu(link.name)}
//                   >
//                     <span
//                       className={
//                         isActive(link.to)
//                           ? "text-[#8F8BF9] font-bold text-2xl"
//                           : `text-white ${linkBase} text-xl`
//                       }
//                     >
//                       {link.name}
//                     </span>
//                     <ChevronIcon
//                       className={`w-5 h-5 transition-transform duration-300 ${
//                         mobileSubMenuOpen[link.name] ? "rotate-180" : ""
//                       }`}
//                     />
//                   </div>

//                   {/* Mobile Submenu Accordion */}
//                   <div
//                     className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                       mobileSubMenuOpen[link.name]
//                         ? "max-h-60 opacity-100 mt-4"
//                         : "max-h-0 opacity-0"
//                     }`}
//                   >
//                     <ul className="flex flex-col space-y-4 bg-white/5 rounded-xl p-4 min-w-[200px]">
//                       {link.subLinks.map((subItem) => (
//                         <li key={subItem.name}>
//                           <Link
//                             href={subItem.to}
//                             onClick={toggleMenu}
//                             className="text-gray-300 hover:text-[#8F8BF9] text-lg block"
//                           >
//                             {subItem.name}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               ) : (
//                 <Link
//                   href={link.to}
//                   onClick={toggleMenu}
//                   className={
//                     isActive(link.to)
//                       ? "text-[#8F8BF9] font-bold text-2xl"
//                       : `text-white ${linkBase} text-xl`
//                   }
//                 >
//                   {link.name}
//                 </Link>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

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
// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { useRouter } from "next/router";
// // Assuming the Logo path is correct for your project structure
// import Logo from "../../assets/logo.png";

// const linkBase = "transition duration-300 hover:text-[#8F8BF9]";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState({});
//   const router = useRouter();

//   const toggleMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const toggleMobileSubMenu = (menuName) => {
//     setMobileSubMenuOpen((prev) => ({
//       ...prev,
//       [menuName]: !prev[menuName],
//     }));
//   };

//   const navLinks = [
//     { name: "Home", to: "/" },
//     {
//       name: "Services",
//       to: "/services",
//       // "subLinks" = Flat list (Rendered as simple grid)
//       subLinks: [
//         { name: "SaaS Development", to: "/services/saas-development" },
//         {
//           name: "Cybersecurity",
//           to: "/services/cybersecurity-data-protection",
//         },
//         { name: "AI Solutions", to: "/services/ai-solutions" },
//         { name: "QA & Automation", to: "/services/qa-automation" },
//         { name: "Cloud & DevOps", to: "/services/cloud-devops" },
//         { name: "Web Development", to: "/services/web-development" },
//         { name: "App Development", to: "/services/app-development" },
//         { name: "Blockchain", to: "/services/blockchain" },
//       ],
//     },
//     {
//       name: "Portfolio",
//       to: "/portfolio",
//       // "sections" = Categorized columns with Headings & Sub-headings
//       sections: [
//         {
//           heading: "AI, Blockchain & Advanced Analytics",
//           // subHeading: "Highlights & Success Stories",
//           items: [
//             { name: "Threat Detection", to: "/portfolio/threat-aI-mL" },
//             { name: "Network Security", to: "/portfolio/network" },
//             {
//               name: "Blockchain Security",
//               to: "/portfolio/blockchain",
//             },
//             // { name: "AI/ML", to: "/portfolio/threat2" },
//             // { name: "Fraud Detection", to: "/portfolio/fraud" },
//           ],
//         },
//         {
//           heading: "Identity, Risk & Application Security",
//           // subHeading: "R&D and Experiments",
//           items: [
//             { name: "DevSecOps", to: "/portfolio/devops" },
//             { name: "Cloud Security", to: "/portfolio/cloud" },
//             { name: "AI/ML", to: "/portfolio/threat2" },

//             // { name: "Blockchain POCs", to: "/portfolio/blockchain-pocs" },
//           ],
//         },
//         {
//           heading: "Network & Infrastructure Security",
//           // subHeading: "Open Source & Resources",
//           items: [
//             { name: "IoT Security", to: "/portfolio/iot" },
//             { name: "Mobile Security", to: "/portfolio/mobile" },
//             { name: "Fraud Detection", to: "/portfolio/fraud" },

//             // { name: "Developer Blog", to: "/portfolio/blog" },
//           ],
//         },
//       ],
//     },
//     { name: "About", to: "/about" },
//     { name: "Contacts", to: "/contact" },
//   ];

//   const isActive = (path) => {
//     if (!router?.pathname) return false;
//     if (path === "/") return router.pathname === "/";
//     return router.pathname.startsWith(path);
//   };

//   const ChevronIcon = ({ className }) => (
//     <svg
//       className={className}
//       fill="none"
//       stroke="currentColor"
//       viewBox="0 0 24 24"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//         d="M19 9l-7 7-7-7"
//       />
//     </svg>
//   );

//   return (
//     <nav className="absolute top-0 inset-x-0 z-50 flex items-center justify-between py-5 px-6 md:px-20 text-white backdrop-blur-sm border-b border-white/10">
//       {/* Logo Section */}
//       <div className="flex items-center font-poppins z-50">
//         <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
//           <Image src={Logo} alt="Company Logo" className="h-10 w-auto" />
//         </Link>
//       </div>

//       {/* Desktop Menu */}
//       <div className="hidden md:flex items-center space-x-10">
//         <ul className="flex space-x-8 text-base items-center">
//           {navLinks.map((link) => (
//             <li key={link.name} className="group static">
//               {/* Check if it has subLinks OR sections */}
//               {link.subLinks || link.sections ? (
//                 <div>
//                   <button
//                     className={`flex items-center gap-1 ${
//                       isActive(link.to)
//                         ? "text-[#8F8BF9] font-bold"
//                         : `text-white ${linkBase}`
//                     }`}
//                   >
//                     <Link href={link.to}>{link.name}</Link>
//                     <ChevronIcon className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
//                   </button>

//                   {/* === FULL WIDTH DROPDOWN === */}
//                   <div className="absolute top-full left-0 w-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
//                     <div className="bg-[#0B0219] border-t border-b border-white/10 shadow-2xl">
//                       <div className="max-w-7xl mx-auto px-6 md:px-20 py-8">
//                         {/* CONDITION 1: Categorized Sections (with Headings) */}
//                         {link.sections ? (
//                           <div className="grid grid-cols-3 gap-8">
//                             {link.sections.map((section, idx) => (
//                               <div key={idx} className="flex flex-col">
//                                 {/* Heading & Sub Heading */}
//                                 <div className="mb-4 border-b border-white/10 pb-2">
//                                   <h3 className="text-[#8F8BF9] font-bold text-lg">
//                                     {section.heading}
//                                   </h3>
//                                   <p className="text-gray-500 text-xs uppercase tracking-wider">
//                                     {section.subHeading}
//                                   </p>
//                                 </div>
//                                 {/* Links List */}
//                                 <ul className="space-y-3">
//                                   {section.items.map((item) => (
//                                     <li key={item.name}>
//                                       <Link
//                                         href={item.to}
//                                         className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm"
//                                       >
//                                         {item.name}
//                                       </Link>
//                                     </li>
//                                   ))}
//                                 </ul>
//                               </div>
//                             ))}
//                           </div>
//                         ) : (
//                           // CONDITION 2: Flat List (Services)
//                           <ul className="grid grid-cols-3 gap-y-4 gap-x-8">
//                             {link.subLinks.map((subItem) => (
//                               <li key={subItem.name}>
//                                 <Link
//                                   href={subItem.to}
//                                   className="block text-base text-gray-300 hover:text-[#8F8BF9] hover:bg-white/5 p-3 rounded-lg transition-all duration-200"
//                                 >
//                                   {subItem.name}
//                                 </Link>
//                               </li>
//                             ))}
//                           </ul>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <Link
//                   href={link.to}
//                   className={
//                     isActive(link.to)
//                       ? "text-[#8F8BF9] font-bold"
//                       : `text-white ${linkBase}`
//                   }
//                 >
//                   {link.name}
//                 </Link>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Desktop Button */}
//         <button
//           onClick={() =>
//             window.open(
//               "https://calendar.app.google/z5GZpzeNAPNfvqHE7",
//               "_blank"
//             )
//           }
//           className="px-8 py-3 text-sm font-bold text-white transition duration-300 rounded-full shadow-lg bg-gradient-to-r from-[#7973DB] to-[#5B86D3] hover:from-[#5B86D3] hover:to-[#7973DB] min-w-[180px]"
//         >
//           BOOK A DEMO
//         </button>
//       </div>

//       {/* Mobile Menu Icon */}
//       <div className="md:hidden flex items-center z-50">
//         <button
//           onClick={() =>
//             window.open(
//               "https://calendar.app.google/z5GZpzeNAPNfvqHE7",
//               "_blank"
//             )
//           }
//           className="px-4 py-2 mr-3 text-xs font-bold text-white transition duration-300 rounded-full shadow-lg bg-gradient-to-r from-[#7973DB] to-[#5B86D3] hover:from-[#5B86D3] hover:to-[#7973DB] min-w-[120px]"
//         >
//           BOOK DEMO
//         </button>
//         <button
//           onClick={toggleMenu}
//           className="text-white focus:outline-none p-2 rounded-lg hover:bg-white/10"
//         >
//           {isMobileMenuOpen ? (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu Panel */}
//       <div
//         className={`md:hidden fixed top-[75px] left-0 w-full bg-[#0B0219] bg-opacity-95 backdrop-blur-md transition-all duration-300 ease-in-out overflow-y-auto ${
//           isMobileMenuOpen
//             ? "translate-y-0 opacity-100 h-[calc(100vh-75px)]"
//             : "-translate-y-full opacity-0 h-0"
//         }`}
//       >
//         <ul className="flex flex-col items-center pt-8 space-y-6 text-xl pb-20">
//           {navLinks.map((link) => (
//             <li key={link.name} className="w-full text-center px-6">
//               {link.subLinks || link.sections ? (
//                 <div className="flex flex-col items-center">
//                   <div
//                     className="flex items-center justify-center gap-2"
//                     onClick={() => toggleMobileSubMenu(link.name)}
//                   >
//                     <span
//                       className={
//                         isActive(link.to)
//                           ? "text-[#8F8BF9] font-bold text-2xl"
//                           : `text-white ${linkBase} text-xl`
//                       }
//                     >
//                       {link.name}
//                     </span>
//                     <ChevronIcon
//                       className={`w-5 h-5 transition-transform duration-300 ${
//                         mobileSubMenuOpen[link.name] ? "rotate-180" : ""
//                       }`}
//                     />
//                   </div>

//                   <div
//                     className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                       mobileSubMenuOpen[link.name]
//                         ? "max-h-[500px] opacity-100 mt-4"
//                         : "max-h-0 opacity-0"
//                     }`}
//                   >
//                     <ul className="flex flex-col space-y-4 bg-white/5 rounded-xl p-4 min-w-[250px]">
//                       {/* Mobile Logic for Sections */}
//                       {link.sections
//                         ? link.sections.map((section, idx) => (
//                             <div key={idx} className="text-left mb-2">
//                               <p className="text-[#8F8BF9] text-xs font-bold uppercase mb-2 border-b border-white/10 pb-1">
//                                 {section.heading}
//                               </p>
//                               {section.items.map((item) => (
//                                 <Link
//                                   key={item.name}
//                                   href={item.to}
//                                   onClick={toggleMenu}
//                                   className="text-gray-300 hover:text-white text-base block py-1 pl-2 border-l border-transparent hover:border-[#8F8BF9]"
//                                 >
//                                   {item.name}
//                                 </Link>
//                               ))}
//                             </div>
//                           ))
//                         : // Mobile Logic for Flat List
//                           link.subLinks.map((subItem) => (
//                             <li key={subItem.name}>
//                               <Link
//                                 href={subItem.to}
//                                 onClick={toggleMenu}
//                                 className="text-gray-300 hover:text-[#8F8BF9] text-lg block"
//                               >
//                                 {subItem.name}
//                               </Link>
//                             </li>
//                           ))}
//                     </ul>
//                   </div>
//                 </div>
//               ) : (
//                 <Link
//                   href={link.to}
//                   onClick={toggleMenu}
//                   className={
//                     isActive(link.to)
//                       ? "text-[#8F8BF9] font-bold text-2xl"
//                       : `text-white ${linkBase} text-xl`
//                   }
//                 >
//                   {link.name}
//                 </Link>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

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
//lattest
//
//
//
//
//
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
// Replace with your actual logo path
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState({});
  const router = useRouter();

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileSubMenu = (menuName) => {
    setMobileSubMenuOpen((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  const linkBase = "transition duration-300 hover:text-[#8F8BF9]";

  // Added 'desc' to items to make the UI look richer
  const navLinks = [
    { name: "Home", to: "/" },
    {
      name: "Services",
      to: "/services",
      // Rendered as a grid of cards
      subLinks: [
        {
          name: "SaaS Development",
          to: "/services/saas-development",
          desc: "Scalable cloud software.",
        },
        {
          name: "Cybersecurity",
          to: "/services/cybersecurity-data-protection",
          desc: "Protect your data assets.",
        },
        {
          name: "AI Solutions",
          to: "/services/ai-solutions",
          desc: "Intelligent automation.",
        },
        {
          name: "QA & Automation",
          to: "/services/qa-automation",
          desc: "Bug-free deployment.",
        },
        {
          name: "Cloud & DevOps",
          to: "/services/cloud-devops",
          desc: "Infrastructure management.",
        },
        {
          name: "Web Development",
          to: "/services/web-development",
          desc: "Modern frontend solutions.",
        },
        {
          name: "App Development",
          to: "/services/app-development",
          desc: "iOS and Android apps.",
        },
        {
          name: "Blockchain",
          to: "/services/blockchain",
          desc: "Decentralized ledgers.",
        },
      ],
    },
    {
      name: "Portfolio",
      to: "/portfolio",
      // Rendered as columns
      sections: [
        {
          heading: "Advanced Analytics",
          subHeading: "AI & Blockchain",
          items: [
            {
              name: "Kaira - AI Financial Wellness Coach",
              to: "/portfolio/kaira",
            },
            {
              name: "New York City Tourism + Conventions",
              to: "/portfolio/nyctourism",
            },
            { name: "Go Grocer", to: "/portfolio/go" },
          ],
        },
        {
          heading: "Application Security",
          subHeading: "Identity & Risk",
          items: [
            {
              name: "Shady Rays - High-Performance Eyewear",
              to: "/portfolio/shady",
            },
            {
              name: "JBB & Associates - CPA & Business Advisory",
              to: "/portfolio/jbb",
            },
            { name: "ZipZap", to: "/portfolio/zipzap" },
          ],
        },
        {
          heading: "Infrastructure",
          subHeading: "Network & Devices",
          items: [
            {
              name: "POLITICO Pro - Policy Intelligence Platform",
              to: "/portfolio/politico",
            },
            {
              name: "Cove.ai - Visual AI Collaboration Workspace",
              to: "/portfolio/cove",
            },
            { name: "HPL Games", to: "/portfolio/hpl" },
          ],
        },
      ],
    },
    { name: "About", to: "/about" },
    { name: "Contacts", to: "/contact" },
  ];

  const isActive = (path) => {
    if (!router?.pathname) return false;
    if (path === "/") return router.pathname === "/";
    return router.pathname.startsWith(path);
  };

  const ChevronIcon = ({ className }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );

  return (
    <nav className="absolute top-0 inset-x-0 z-50 flex items-center justify-between py-5 px-6 md:px-12 lg:px-20 text-white border-b border-white/5 bg-gradient-to-b from-black/50 ">
      {/* --- Logo --- */}
      <div className="flex items-center font-poppins z-50 relative">
        <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
          {/* Replace with your Image component when ready */}
          {/* <div className="text-2xl font-bold tracking-tighter">
            <span className="text-[#8F8BF9]">AI</span>CYRO
          </div> */}
          <Image src={Logo} alt="Company Logo" className="h-10 w-auto" />
        </Link>
      </div>

      {/* --- Desktop Menu --- */}
      <div className="hidden md:flex items-center space-x-8">
        <ul className="flex space-x-6 lg:space-x-10 text-sm font-medium items-center">
          {navLinks.map((link) => (
            <li key={link.name} className="group static">
              {link.subLinks || link.sections ? (
                <div>
                  {/* Parent Link */}
                  <button
                    className={`flex items-center gap-1 py-4 ${
                      isActive(link.to)
                        ? "text-[#8F8BF9]"
                        : "text-white/90 hover:text-white"
                    } transition-colors duration-200`}
                  >
                    <Link href={link.to}>{link.name}</Link>
                    <ChevronIcon className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180 text-white/50" />
                  </button>

                  {/* === MEGA MENU DROPDOWN === */}
                  {/* Invisible padding (pt-4) acts as a bridge so mouse doesn't lose hover */}
                  <div className="absolute top-full left-0 w-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {/* Glass Container */}
                    <div className="bg-[#0f0721]/95 backdrop-blur-xl border-y border-white/10 shadow-[0_20px_50px_rgba(8,112,184,0.05)]">
                      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
                        {/* CONDITION 1: Categorized Sections (Portfolio) */}
                        {link.sections ? (
                          <div className="grid grid-cols-3 gap-12">
                            {link.sections.map((section, idx) => (
                              <div key={idx} className="flex flex-col">
                                {/* Section Header */}
                                <div className="mb-5 pb-3 border-b border-white/5">
                                  <h3 className="text-white font-semibold text-lg tracking-wide">
                                    {section.heading}
                                  </h3>
                                  <p className="text-[#8F8BF9] text-xs font-medium uppercase tracking-widest mt-1">
                                    {section.subHeading}
                                  </p>
                                </div>
                                {/* Links List */}
                                <ul className="space-y-2">
                                  {section.items.map((item) => (
                                    <li key={item.name}>
                                      <Link
                                        href={item.to}
                                        className="group/item flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-all duration-200"
                                      >
                                        <span className="text-gray-400 group-hover/item:text-white transition-colors">
                                          {item.name}
                                        </span>
                                        <span className="opacity-0 group-hover/item:opacity-100 transform -translate-x-2 group-hover/item:translate-x-0 transition-all text-[#8F8BF9]">
                                          →
                                        </span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : (
                          // CONDITION 2: Grid List with Descriptions (Services)
                          <div className="grid grid-cols-4 gap-6">
                            {link.subLinks.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.to}
                                className="group/card block p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300"
                              >
                                <div className="mb-2">
                                  <h4 className="text-white font-semibold group-hover/card:text-[#8F8BF9] transition-colors">
                                    {subItem.name}
                                  </h4>
                                </div>
                                <p className="text-gray-500 text-xs leading-relaxed group-hover/card:text-gray-300">
                                  {subItem.desc ||
                                    "Learn more about our solutions."}
                                </p>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={link.to}
                  className={
                    isActive(link.to)
                      ? "text-[#8F8BF9] font-medium"
                      : `text-white/90 hover:text-white ${linkBase}`
                  }
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button
          onClick={() =>
            window.open(
              "https://calendar.app.google/z5GZpzeNAPNfvqHE7",
              "_blank"
            )
          }
          className="px-6 py-2.5 text-xs font-bold text-white tracking-wider uppercase transition-all duration-300 rounded-full bg-gradient-to-r from-[#7973DB] to-[#5B86D3] hover:from-[#5B86D3] hover:to-[#7973DB] hover:shadow-[0_0_20px_rgba(121,115,219,0.4)] transform hover:-translate-y-0.5"
        >
          Book a Demo
        </button>
      </div>

      {/* --- Mobile Menu Toggle --- */}
      <div className="md:hidden flex items-center gap-4 z-50">
        <button
          onClick={() =>
            window.open(
              "https://calendar.app.google/z5GZpzeNAPNfvqHE7",
              "_blank"
            )
          }
          className="px-4 py-2 text-[10px] font-bold text-white uppercase rounded-full bg-gradient-to-r from-[#7973DB] to-[#5B86D3]"
        >
          Demo
        </button>
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* --- Mobile Menu Overlay --- */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full bg-[#0B0219] min-h-screen z-40 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-full"
        }`}
      >
        <div className="flex flex-col pt-24 px-8 pb-10 h-full overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.name} className="border-b border-white/5 py-4">
              {link.subLinks || link.sections ? (
                <div>
                  <div
                    className="flex items-center justify-between"
                    onClick={() => toggleMobileSubMenu(link.name)}
                  >
                    <span
                      className={`text-xl ${
                        isActive(link.to) ? "text-[#8F8BF9]" : "text-white"
                      }`}
                    >
                      {link.name}
                    </span>
                    <ChevronIcon
                      className={`w-5 h-5 transition-transform duration-300 text-gray-400 ${
                        mobileSubMenuOpen[link.name] ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileSubMenuOpen[link.name]
                        ? "max-h-[800px] mt-4 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {/* Mobile Dropdown Logic */}
                    <ul className="grid gap-3 pl-4 border-l border-white/10 ml-2">
                      {/* Sections Logic */}
                      {link.sections
                        ? link.sections.map((section, idx) => (
                            <div key={idx} className="mb-4">
                              <p className="text-xs text-[#8F8BF9] uppercase font-bold mb-2 tracking-wider">
                                {section.heading}
                              </p>
                              {section.items.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.to}
                                  onClick={toggleMenu}
                                  className="block py-1 text-gray-400 hover:text-white"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          ))
                        : // Flat List Logic
                          link.subLinks.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.to}
                              onClick={toggleMenu}
                              className="block py-2 text-gray-400 hover:text-white"
                            >
                              <span className="block text-white">
                                {subItem.name}
                              </span>
                              <span className="text-xs text-gray-600">
                                {subItem.desc}
                              </span>
                            </Link>
                          ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  href={link.to}
                  onClick={toggleMenu}
                  className={`block text-xl ${
                    isActive(link.to) ? "text-[#8F8BF9]" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
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
//
