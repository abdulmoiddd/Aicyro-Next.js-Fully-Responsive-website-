// import React, { useState, useEffect } from "react";
// import { Quote } from "lucide-react"; // Retaining the Lucide import for the icon placeholder

// // --- REQUIRED FIREBASE IMPORTS ---
// import { ref, onValue } from "firebase/database";
// import { database } from "../../lib/firebase";
// // ---------------------------------

// // NOTE: Avatar imports are kept but will be overridden by URLs from Firebase
// import avatar1 from "../../assets/avtar1.jpg";

// // Helper component for Star Rating (improving reusability and clarity)
// const StarIcon = ({ isActive }) => (
//   <svg
//     className={`w-4 h-4 sm:w-5 sm:h-5 ${
//       isActive ? "text-yellow-400" : "text-gray-600"
//     }`}
//     fill="currentColor"
//     viewBox="0 0 24 24"
//   >
//     <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//   </svg>
// );

// const Testimonial = () => {
//   const [testimonialData, setTestimonialData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // 2. FIREBASE DATA FETCHING EFFECT
//   useEffect(() => {
//     // Define the reference to the testimonials section data
//     const testimonialsRef = ref(database, "testimonialSection");

//     // Set up the listener for data
//     const unsubscribe = onValue(
//       testimonialsRef,
//       (snapshot) => {
//         if (snapshot.exists()) {
//           const fetchedData = snapshot.val();
//           // Ensure testimonials is an array (Firebase often stores arrays as objects)
//           const testimonialsArray = Object.values(
//             fetchedData.testimonials || {}
//           );
//           setTestimonialData({
//             ...fetchedData,
//             testimonials: testimonialsArray,
//           });
//           setLoading(false);
//         } else {
//           console.log(
//             "No Testimonial section data found at 'testimonialSection' path."
//           );
//           setLoading(false);
//         }
//       },
//       (error) => {
//         console.error("Firebase read error:", error);
//         setLoading(false);
//       }
//     );

//     // Cleanup listener on component unmount
//     return () => unsubscribe();
//   }, []);

//   // 3. Handle Loading State
//   if (loading) {
//     return (
//       <section className="bg-[#0A0118] text-white py-20 sm:py-24 px-4 flex justify-center items-center">
//         Loading Testimonials...
//       </section>
//     );
//   }

//   if (!testimonialData) {
//     return (
//       <section className="bg-[#0A0118] text-white py-20 sm:py-24 px-4 flex justify-center items-center">
//         Error loading data or no testimonials configured.
//       </section>
//     );
//   }

//   // Destructure data for cleaner use in JSX
//   const { tagline, mainHeading, subText, testimonials } = testimonialData;

//   // 4. RENDER THE COMPONENT WITH DYNAMIC DATA
//   return (
//     <section className="bg-[#0A0118] text-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         {/* Subtitle / Tag (Dynamic) */}
//         <div className="text-center mb-4">
//           <span className="inline-block border border-[#5B86D3] text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wider">
//             {tagline}
//           </span>
//         </div>

//         {/* Main Heading (Dynamic) */}
//         <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4">
//           {mainHeading}
//         </h2>

//         {/* Sub-text (Dynamic) */}
//         <p className="text-base sm:text-lg text-gray-400 text-center mb-10 sm:mb-12 max-w-2xl mx-auto">
//           {subText}
//         </p>

//         {/* Testimonial Cards Grid (Dynamic Mapping) */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index} // Using index as key since no stable ID is guaranteed from the object map
//               className="bg-[#2B2338] p-6 sm:p-8 rounded-xl shadow-2xl relative border border-gray-700 hover:border-purple-600 transition-all duration-300 overflow-hidden"
//             >
//               {/* Quotation Mark Icon */}
//               <div className="absolute top-6 right-6 text-6xl sm:text-7xl font-bold font-mono text-[#7B71DB] opacity-100 z-10">
//                 &ldquo;
//               </div>

//               {/* Avatar and Name/Location (Dynamic) */}
//               <div className="flex items-center mb-6 z-20 relative">
//                 <img
//                   // Use the avatar URL from Firebase, fallback to a local image if URL is missing
//                   src={testimonial.avatar || avatar1}
//                   alt={testimonial.name}
//                   className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-purple-500 shadow-md mr-4"
//                 />
//                 <div>
//                   <h3 className="text-lg sm:text-xl font-bold">
//                     {testimonial.name}
//                   </h3>
//                   <p className="text-gray-400 text-sm">
//                     {testimonial.location}
//                   </p>
//                 </div>
//               </div>

//               {/* Star Rating (Dynamic) */}
//               <div className="flex text-yellow-400 mb-4 z-20 relative">
//                 {[...Array(5)].map((_, i) => (
//                   <StarIcon key={i} isActive={i < testimonial.rating} />
//                 ))}
//               </div>

//               {/* Feedback Text (Dynamic) */}
//               <p className="text-sm sm:text-base text-gray-300 leading-relaxed z-20 relative">
//                 {testimonial.feedback}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;

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
// import { Quote } from "lucide-react";
// import { motion } from "framer-motion"; // Import Framer Motion for the animation

// // --- REQUIRED FIREBASE IMPORTS ---
// import { ref, onValue } from "firebase/database";
// import { database } from "../../lib/firebase";
// // ---------------------------------

// import avatar1 from "../../assets/avtar1.jpg";

// // Helper: Star Icon
// const StarIcon = ({ isActive }) => (
//   <svg
//     className={`w-4 h-4 sm:w-5 sm:h-5 ${
//       isActive ? "text-yellow-400" : "text-gray-600"
//     }`}
//     fill="currentColor"
//     viewBox="0 0 24 24"
//   >
//     <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//   </svg>
// );

// // Helper: Single Testimonial Card (Extracted to reuse in both Grid and Slider)
// const TestimonialCard = ({ testimonial }) => (
//   <div className="bg-[#2B2338] p-6 sm:p-8 rounded-xl shadow-2xl relative border border-gray-700 hover:border-purple-600 transition-all duration-300 overflow-hidden h-full flex flex-col justify-between w-[350px] sm:w-[400px]">
//     {/* Quotation Mark */}
//     <div className="absolute top-6 right-6 text-6xl sm:text-7xl font-bold font-mono text-[#7B71DB] opacity-100 z-10">
//       &ldquo;
//     </div>

//     <div>
//       {/* Avatar and Name */}
//       <div className="flex items-center mb-6 z-20 relative">
//         <img
//           src={testimonial.avatar || avatar1}
//           alt={testimonial.name}
//           className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-purple-500 shadow-md mr-4"
//         />
//         <div>
//           <h3 className="text-lg sm:text-xl font-bold text-white">
//             {testimonial.name}
//           </h3>
//           <p className="text-gray-400 text-sm">{testimonial.location}</p>
//         </div>
//       </div>

//       {/* Star Rating */}
//       <div className="flex text-yellow-400 mb-4 z-20 relative">
//         {[...Array(5)].map((_, i) => (
//           <StarIcon key={i} isActive={i < testimonial.rating} />
//         ))}
//       </div>
//     </div>

//     {/* Feedback Text */}
//     <p className="text-sm sm:text-base text-gray-300 leading-relaxed z-20 relative">
//       {testimonial.feedback}
//     </p>
//   </div>
// );

// const Testimonial = () => {
//   const [testimonialData, setTestimonialData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // 2. FIREBASE DATA FETCHING EFFECT
//   useEffect(() => {
//     const testimonialsRef = ref(database, "testimonialSection");

//     const unsubscribe = onValue(
//       testimonialsRef,
//       (snapshot) => {
//         if (snapshot.exists()) {
//           const fetchedData = snapshot.val();
//           const testimonialsArray = Object.values(
//             fetchedData.testimonials || {}
//           );
//           setTestimonialData({
//             ...fetchedData,
//             testimonials: testimonialsArray,
//           });
//           setLoading(false);
//         } else {
//           console.log("No Testimonial section data found.");
//           setLoading(false);
//         }
//       },
//       (error) => {
//         console.error("Firebase read error:", error);
//         setLoading(false);
//       }
//     );

//     return () => unsubscribe();
//   }, []);

//   // 3. Handle Loading / Error States
//   if (loading) {
//     return (
//       <section className="bg-[#0A0118] text-white py-20 flex justify-center items-center">
//         Loading...
//       </section>
//     );
//   }

//   if (!testimonialData) {
//     return (
//       <section className="bg-[#0A0118] text-white py-20 flex justify-center items-center">
//         No Data Found.
//       </section>
//     );
//   }

//   const { tagline, mainHeading, subText, testimonials } = testimonialData;

//   // LOGIC: Check if we have more than 3 items
//   const isSlider = testimonials.length > 3;

//   // If slider, duplicate data to create a seamless infinite loop
//   const sliderData = isSlider ? [...testimonials, ...testimonials] : [];

//   return (
//     <section className="bg-[#0A0118] text-white py-20 sm:py-24 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
//         {/* Header Content */}
//         <div className="text-center mb-4">
//           <span className="inline-block border border-[#5B86D3] text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wider">
//             {tagline}
//           </span>
//         </div>
//         <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4">
//           {mainHeading}
//         </h2>
//         <p className="text-base sm:text-lg text-gray-400 text-center max-w-2xl mx-auto">
//           {subText}
//         </p>
//       </div>

//       {/* CONDITIONAL RENDERING */}
//       {isSlider ? (
//         // === OPTION A: SLIDER (> 3 items) ===
//         <div className="relative w-full overflow-hidden">
//           {/* Gradients to fade edges */}
//           <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#0A0118] to-transparent z-10" />
//           <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#0A0118] to-transparent z-10" />

//           <motion.div
//             className="flex gap-8 w-max"
//             // Move from 0 to -50% (because we doubled the array, -50% is exactly one full loop)
//             animate={{ x: "-50%" }}
//             transition={{
//               ease: "linear",
//               duration: 30, // Adjust speed: Higher number = Slower
//               repeat: Infinity,
//             }}
//           >
//             {sliderData.map((testimonial, index) => (
//               <TestimonialCard
//                 key={`slider-${index}`}
//                 testimonial={testimonial}
//               />
//             ))}
//           </motion.div>
//         </div>
//       ) : (
//         // === OPTION B: GRID (<= 3 items) ===
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="h-full">
//                 {/* We set width to auto here via class overrides
//                     or simply wrap the reusable card
//                  */}
//                 <TestimonialCard testimonial={testimonial} />
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Testimonial;

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
// import { Quote } from "lucide-react";
// import { motion } from "framer-motion";

// // --- REQUIRED FIREBASE IMPORTS ---
// import { ref, onValue } from "firebase/database";
// import { database } from "../../lib/firebase";
// // ---------------------------------

// import avatar1 from "../../assets/avtar1.jpg";

// // Helper: Star Icon
// const StarIcon = ({ isActive }) => (
//   <svg
//     className={`w-4 h-4 sm:w-5 sm:h-5 ${
//       isActive ? "text-yellow-400" : "text-gray-600"
//     }`}
//     fill="currentColor"
//     viewBox="0 0 24 24"
//   >
//     <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//   </svg>
// );

// // Helper: Single Testimonial Card
// // UPDATED: Added `className` prop to allow flexible widths (Fixed for slider, Full for grid)
// const TestimonialCard = ({ testimonial, className = "" }) => (
//   <div
//     className={`bg-[#2B2338] p-6 sm:p-8 rounded-xl shadow-2xl relative border border-gray-700 hover:border-purple-600 transition-all duration-300 overflow-hidden h-full flex flex-col justify-between ${className}`}
//   >
//     {/* Quotation Mark */}
//     <div className="absolute top-6 right-6 text-6xl sm:text-7xl font-bold font-mono text-[#7B71DB] opacity-100 z-10">
//       &ldquo;
//     </div>

//     <div>
//       {/* Avatar and Name */}
//       <div className="flex items-center mb-6 z-20 relative">
//         <img
//           src={testimonial.avatar || avatar1}
//           alt={testimonial.name}
//           className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-purple-500 shadow-md mr-4"
//         />
//         <div>
//           <h3 className="text-lg sm:text-xl font-bold text-white">
//             {testimonial.name}
//           </h3>
//           <p className="text-gray-400 text-sm">{testimonial.location}</p>
//         </div>
//       </div>

//       {/* Star Rating */}
//       <div className="flex text-yellow-400 mb-4 z-20 relative">
//         {[...Array(5)].map((_, i) => (
//           <StarIcon key={i} isActive={i < testimonial.rating} />
//         ))}
//       </div>
//     </div>

//     {/* Feedback Text */}
//     <p className="text-sm sm:text-base text-gray-300 leading-relaxed z-20 relative">
//       {testimonial.feedback}
//     </p>
//   </div>
// );

// const Testimonial = () => {
//   const [testimonialData, setTestimonialData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // 2. FIREBASE DATA FETCHING EFFECT
//   useEffect(() => {
//     const testimonialsRef = ref(database, "testimonialSection");

//     const unsubscribe = onValue(
//       testimonialsRef,
//       (snapshot) => {
//         if (snapshot.exists()) {
//           const fetchedData = snapshot.val();
//           const testimonialsArray = Object.values(
//             fetchedData.testimonials || {}
//           );
//           setTestimonialData({
//             ...fetchedData,
//             testimonials: testimonialsArray,
//           });
//           setLoading(false);
//         } else {
//           console.log("No Testimonial section data found.");
//           setLoading(false);
//         }
//       },
//       (error) => {
//         console.error("Firebase read error:", error);
//         setLoading(false);
//       }
//     );

//     return () => unsubscribe();
//   }, []);

//   // 3. Handle Loading / Error States
//   if (loading) {
//     return (
//       <section className="bg-[#0A0118] text-white py-20 flex justify-center items-center">
//         Loading...
//       </section>
//     );
//   }

//   if (!testimonialData) {
//     return (
//       <section className="bg-[#0A0118] text-white py-20 flex justify-center items-center">
//         No Data Found.
//       </section>
//     );
//   }

//   const { tagline, mainHeading, subText, testimonials } = testimonialData;

//   // LOGIC: Check if we have more than 3 items
//   const isSlider = testimonials.length > 3;

//   // If slider, duplicate data to create a seamless infinite loop
//   const sliderData = isSlider ? [...testimonials, ...testimonials] : [];

//   return (
//     <section className="bg-[#0A0118] text-white py-20 sm:py-24 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
//         {/* Header Content */}
//         <div className="text-center mb-4">
//           <span className="inline-block border border-[#5B86D3] text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wider">
//             {tagline}
//           </span>
//         </div>
//         <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4">
//           {mainHeading}
//         </h2>
//         <p className="text-base sm:text-lg text-gray-400 text-center max-w-2xl mx-auto">
//           {subText}
//         </p>
//       </div>

//       {/* CONDITIONAL RENDERING */}
//       {isSlider ? (
//         // === OPTION A: SLIDER (> 3 items) ===
//         <div className="relative w-full overflow-hidden">
//           {/* Gradients to fade edges */}
//           <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#0A0118] to-transparent z-10" />
//           <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#0A0118] to-transparent z-10" />

//           <motion.div
//             className="flex gap-8 w-max items-stretch" // items-stretch makes all boxes same height
//             animate={{ x: "-50%" }}
//             transition={{
//               ease: "linear",
//               duration: 30,
//               repeat: Infinity,
//             }}
//           >
//             {sliderData.map((testimonial, index) => (
//               <TestimonialCard
//                 key={`slider-${index}`}
//                 testimonial={testimonial}
//                 // FIXED WIDTH FOR SLIDER: Ensures they all look uniform in the strip
//                 className="w-[350px] sm:w-[400px]"
//               />
//             ))}
//           </motion.div>
//         </div>
//       ) : (
//         // === OPTION B: GRID (<= 3 items) ===
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
//             {/* auto-rows-fr makes sure all grid rows are equal height */}
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="h-full">
//                 <TestimonialCard
//                   testimonial={testimonial}
//                   // FULL WIDTH FOR GRID: Ensures it fills the grid cell perfectly
//                   className="w-full"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Testimonial;

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
// import { Quote } from "lucide-react";
// import { motion } from "framer-motion";

// // --- REQUIRED FIREBASE IMPORTS ---
// import { ref, onValue } from "firebase/database";
// import { database } from "../../lib/firebase";
// // ---------------------------------

// import avatar1 from "../../assets/avtar1.jpg";

// // Helper: Star Icon
// const StarIcon = ({ isActive }) => (
//   <svg
//     className={`w-4 h-4 sm:w-5 sm:h-5 ${
//       isActive ? "text-yellow-400" : "text-gray-600"
//     }`}
//     fill="currentColor"
//     viewBox="0 0 24 24"
//   >
//     <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//   </svg>
// );

// // Helper: Single Testimonial Card
// // KEY CHANGE: Added `h-full`, `flex`, `flex-col`, and `justify-between`
// const TestimonialCard = ({ testimonial, className = "" }) => (
//   <div
//     className={`bg-[#2B2338] p-6 sm:p-8 rounded-xl shadow-2xl relative border border-gray-700 hover:border-purple-600 transition-all duration-300 overflow-hidden h-full flex flex-col justify-between ${className}`}
//   >
//     {/* Quotation Mark */}
//     <div className="absolute top-6 right-6 text-6xl sm:text-7xl font-bold font-mono text-[#7B71DB] opacity-100 z-10">
//       &ldquo;
//     </div>

//     {/* TOP SECTION: Avatar, Name, Stars */}
//     <div>
//       {/* Avatar and Name */}
//       <div className="flex items-center mb-6 z-20 relative">
//         <img
//           src={testimonial.avatar || avatar1}
//           alt={testimonial.name}
//           className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-purple-500 shadow-md mr-4"
//         />
//         <div>
//           <h3 className="text-lg sm:text-xl font-bold text-white">
//             {testimonial.name}
//           </h3>
//           <p className="text-gray-400 text-sm">{testimonial.location}</p>
//         </div>
//       </div>

//       {/* Star Rating */}
//       <div className="flex text-yellow-400 mb-4 z-20 relative">
//         {[...Array(5)].map((_, i) => (
//           <StarIcon key={i} isActive={i < testimonial.rating} />
//         ))}
//       </div>
//     </div>

//     {/* BOTTOM SECTION: Feedback Text */}
//     {/* This will now align at the bottom if the card stretches */}
//     <p className="text-sm sm:text-base text-gray-300 leading-relaxed z-20 relative mt-auto">
//       {testimonial.feedback}
//     </p>
//   </div>
// );

// const Testimonial = () => {
//   const [testimonialData, setTestimonialData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // 2. FIREBASE DATA FETCHING EFFECT
//   useEffect(() => {
//     const testimonialsRef = ref(database, "testimonialSection");

//     const unsubscribe = onValue(
//       testimonialsRef,
//       (snapshot) => {
//         if (snapshot.exists()) {
//           const fetchedData = snapshot.val();
//           const testimonialsArray = Object.values(
//             fetchedData.testimonials || {}
//           );
//           setTestimonialData({
//             ...fetchedData,
//             testimonials: testimonialsArray,
//           });
//           setLoading(false);
//         } else {
//           console.log("No Testimonial section data found.");
//           setLoading(false);
//         }
//       },
//       (error) => {
//         console.error("Firebase read error:", error);
//         setLoading(false);
//       }
//     );

//     return () => unsubscribe();
//   }, []);

//   // 3. Handle Loading / Error States
//   if (loading) {
//     return (
//       <section className="bg-[#0A0118] text-white py-20 flex justify-center items-center">
//         Loading...
//       </section>
//     );
//   }

//   if (!testimonialData) {
//     return (
//       <section className="bg-[#0A0118] text-white py-20 flex justify-center items-center">
//         No Data Found.
//       </section>
//     );
//   }

//   const { tagline, mainHeading, subText, testimonials } = testimonialData;

//   const isSlider = testimonials.length > 3;
//   const sliderData = isSlider ? [...testimonials, ...testimonials] : [];

//   return (
//     <section className="bg-[#0A0118] text-white py-20 sm:py-24 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
//         {/* Header Content */}
//         <div className="text-center mb-4">
//           <span className="inline-block border border-[#5B86D3] text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wider">
//             {tagline}
//           </span>
//         </div>
//         <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4">
//           {mainHeading}
//         </h2>
//         <p className="text-base sm:text-lg text-gray-400 text-center max-w-2xl mx-auto">
//           {subText}
//         </p>
//       </div>

//       {/* CONDITIONAL RENDERING */}
//       {isSlider ? (
//         // === OPTION A: SLIDER (> 3 items) ===
//         <div className="relative w-full overflow-hidden">
//           <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#0A0118] to-transparent z-10" />
//           <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#0A0118] to-transparent z-10" />

//           <motion.div
//             className="flex gap-8 w-max items-stretch" // items-stretch forces all flex children to match height
//             animate={{ x: "-50%" }}
//             transition={{
//               ease: "linear",
//               duration: 30,
//               repeat: Infinity,
//             }}
//           >
//             {sliderData.map((testimonial, index) => (
//               <div key={`slider-${index}`} className="h-full">
//                 {" "}
//                 {/* Wrapper ensures height passes down */}
//                 <TestimonialCard
//                   testimonial={testimonial}
//                   className="w-[350px] sm:w-[400px]"
//                 />
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       ) : (
//         // === OPTION B: GRID (<= 3 items) ===
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               // h-full here ensures the div takes the full height of the grid row
//               <div key={index} className="h-full">
//                 <TestimonialCard testimonial={testimonial} className="w-full" />
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Testimonial;

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
// import { Quote } from "lucide-react";
// import { motion } from "framer-motion";

// // --- REQUIRED FIREBASE IMPORTS ---
// import { ref, onValue } from "firebase/database";
// import { database } from "../../lib/firebase";
// // ---------------------------------

// import avatar1 from "../../assets/avtar1.jpg";

// // Helper: Star Icon
// const StarIcon = ({ isActive }) => (
//   <svg
//     className={`w-4 h-4 sm:w-5 sm:h-5 ${
//       isActive ? "text-yellow-400" : "text-gray-600"
//     }`}
//     fill="currentColor"
//     viewBox="0 0 24 24"
//   >
//     <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//   </svg>
// );

// // Helper: Single Testimonial Card
// const TestimonialCard = ({ testimonial, className = "" }) => (
//   <div
//     className={`bg-[#2B2338] p-6 sm:p-8 rounded-xl shadow-2xl relative border border-gray-700 hover:border-purple-600 transition-all duration-300 overflow-hidden h-full flex flex-col justify-between ${className}`}
//   >
//     {/* Quotation Mark */}
//     <div className="absolute top-6 right-6 text-6xl sm:text-7xl font-bold font-mono text-[#7B71DB] opacity-100 z-10">
//       &ldquo;
//     </div>

//     {/* TOP SECTION: Avatar, Name, Stars */}
//     <div>
//       {/* Avatar and Name */}
//       <div className="flex items-center mb-6 z-20 relative">
//         <img
//           src={testimonial.avatar || avatar1}
//           alt={testimonial.name}
//           className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-purple-500 shadow-md mr-4"
//         />
//         <div>
//           <h3 className="text-lg sm:text-xl font-bold text-white">
//             {testimonial.name}
//           </h3>
//           <p className="text-gray-400 text-sm">{testimonial.location}</p>
//         </div>
//       </div>

//       {/* Star Rating */}
//       <div className="flex text-yellow-400 mb-4 z-20 relative">
//         {[...Array(5)].map((_, i) => (
//           <StarIcon key={i} isActive={i < testimonial.rating} />
//         ))}
//       </div>
//     </div>

//     {/* BOTTOM SECTION: Feedback Text */}
//     {/* mt-auto pushes this text (and the bottom of the card) to fill space */}
//     <p className="text-sm sm:text-base text-gray-300 leading-relaxed z-20 relative mt-auto">
//       {testimonial.feedback}
//     </p>
//   </div>
// );

// const Testimonial = () => {
//   const [testimonialData, setTestimonialData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // 2. FIREBASE DATA FETCHING EFFECT
//   useEffect(() => {
//     const testimonialsRef = ref(database, "testimonialSection");

//     const unsubscribe = onValue(
//       testimonialsRef,
//       (snapshot) => {
//         if (snapshot.exists()) {
//           const fetchedData = snapshot.val();
//           const testimonialsArray = Object.values(
//             fetchedData.testimonials || {}
//           );
//           setTestimonialData({
//             ...fetchedData,
//             testimonials: testimonialsArray,
//           });
//           setLoading(false);
//         } else {
//           console.log("No Testimonial section data found.");
//           setLoading(false);
//         }
//       },
//       (error) => {
//         console.error("Firebase read error:", error);
//         setLoading(false);
//       }
//     );

//     return () => unsubscribe();
//   }, []);

//   // 3. Handle Loading / Error States
//   if (loading) {
//     return (
//       <section className="bg-[#0A0118] text-white py-20 flex justify-center items-center">
//         Loading...
//       </section>
//     );
//   }

//   if (!testimonialData) {
//     return (
//       <section className="bg-[#0A0118] text-white py-20 flex justify-center items-center">
//         No Data Found.
//       </section>
//     );
//   }

//   const { tagline, mainHeading, subText, testimonials } = testimonialData;

//   const isSlider = testimonials.length > 3;
//   const sliderData = isSlider ? [...testimonials, ...testimonials] : [];

//   return (
//     <section className="bg-[#0A0118] text-white py-20 sm:py-24 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
//         <div className="text-center mb-4">
//           <span className="inline-block border border-[#5B86D3] text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wider">
//             {tagline}
//           </span>
//         </div>
//         <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4">
//           {mainHeading}
//         </h2>
//         <p className="text-base sm:text-lg text-gray-400 text-center max-w-2xl mx-auto">
//           {subText}
//         </p>
//       </div>

//       {/* CONDITIONAL RENDERING */}
//       {isSlider ? (
//         // === OPTION A: SLIDER (> 3 items) ===
//         <div className="relative w-full overflow-hidden">
//           <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#0A0118] to-transparent z-10" />
//           <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#0A0118] to-transparent z-10" />

//           <motion.div
//             className="flex gap-8 w-max items-stretch" // items-stretch is key here
//             animate={{ x: "-50%" }}
//             transition={{
//               ease: "linear",
//               duration: 30,
//               repeat: Infinity,
//             }}
//           >
//             {sliderData.map((testimonial, index) => (
//               // REMOVED THE WRAPPER DIV. Passed key directly to the card.
//               <TestimonialCard
//                 key={`slider-${index}`}
//                 testimonial={testimonial}
//                 className="w-[350px] sm:w-[400px]"
//               />
//             ))}
//           </motion.div>
//         </div>
//       ) : (
//         // === OPTION B: GRID (<= 3 items) ===
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               // REMOVED THE WRAPPER DIV. Passed key directly to the card.
//               // Grid items stretch by default, so h-full on the card now works perfectly.
//               <TestimonialCard
//                 key={index}
//                 testimonial={testimonial}
//                 className="w-full"
//               />
//             ))}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Testimonial;
// To make the height of each testimonial card equal,
// add a min-h-[340px] (or similar) on the TestimonialCard via className prop for both Slider and Grid modes.
// This works as TestimonialCard already supports 'className' prop.

//
// Example heights: min-h-[320px] for short, min-h-[360px] for tall (tailor as needed for visuals).
// If your TestimonialCard uses padding/margins inside, you can tune the min-h value as desired.
// Here, we'll set min-h-[360px] for a balanced feel.
//

// --- (This is an explanation for the maintainer, below is the code to ensure min height on all cards) ---

// 1. Slider mode:
//
// <TestimonialCard
//   key={`slider-${index}`}
//   testimonial={testimonial}
//   className="w-[350px] sm:w-[400px] min-h-[360px]"   <-- add min-h-[360px]
// />
//
// 2. Grid mode:
//
// <TestimonialCard
//   key={index}
//   testimonial={testimonial}
//   className="w-full min-h-[360px]"                    <-- add min-h-[360px]
// />

// The corresponding section above should now look like this:

/* 
<motion.div
  className="flex gap-8 w-max items-stretch"
  animate={{ x: "-50%" }}
  transition={{
    ease: "linear",
    duration: 30,
    repeat: Infinity,
  }}
>
  {sliderData.map((testimonial, index) => (
    <TestimonialCard
      key={`slider-${index}`}
      testimonial={testimonial}
      className="w-[350px] sm:w-[400px] min-h-[360px]" // << min-height to equalize cards
    />
  ))}
</motion.div>
*/

// and

/*
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {testimonials.map((testimonial, index) => (
    <TestimonialCard
      key={index}
      testimonial={testimonial}
      className="w-full min-h-[360px]" // << min-height to equalize cards
    />
  ))}
</div>
*/

//
///
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
// import { motion } from "framer-motion";

// // --- REQUIRED FIREBASE IMPORTS ---
// import { ref, onValue } from "firebase/database";
// import { database } from "../../lib/firebase";
// // ---------------------------------

// import avatar1 from "../../assets/avtar1.jpg";

// // Helper: Star Icon
// const StarIcon = ({ isActive }) => (
//   <svg
//     className={`w-4 h-4 sm:w-5 sm:h-5 ${
//       isActive ? "text-yellow-400" : "text-gray-600"
//     }`}
//     fill="currentColor"
//     viewBox="0 0 24 24"
//   >
//     <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//   </svg>
// );

// // Helper: Single Testimonial Card
// const TestimonialCard = ({ testimonial, className = "" }) => (
//   <div
//     // CHANGED: Removed 'justify-between'. Added 'flex-col'.
//     // 'h-full' ensures the background fills the parent grid/flex cell.
//     className={`bg-[#2B2338] p-6 sm:p-8 rounded-xl shadow-2xl relative border border-gray-700 hover:border-purple-600 transition-all duration-300 overflow-hidden h-full flex flex-col ${className}`}
//   >
//     {/* Quotation Mark */}
//     <div className="absolute top-6 right-6 text-6xl sm:text-7xl font-bold font-mono text-[#7B71DB] opacity-100 z-10">
//       &ldquo;
//     </div>

//     {/* TOP SECTION: Avatar, Name, Stars */}
//     <div className="mb-6 z-20 relative">
//       {/* Avatar and Name */}
//       <div className="flex items-center mb-4">
//         <img
//           src={testimonial.avatar || avatar1}
//           alt={testimonial.name}
//           className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-purple-500 shadow-md mr-4"
//         />
//         <div>
//           <h3 className="text-lg sm:text-xl font-bold text-white">
//             {testimonial.name}
//           </h3>
//           <p className="text-gray-400 text-sm">{testimonial.location}</p>
//         </div>
//       </div>

//       {/* Star Rating */}
//       <div className="flex text-yellow-400">
//         {[...Array(5)].map((_, i) => (
//           <StarIcon key={i} isActive={i < testimonial.rating} />
//         ))}
//       </div>
//     </div>

//     {/* BOTTOM SECTION: Feedback Text */}
//     {/* CHANGED: Removed 'mt-auto'. This keeps text at the top.
//         The empty space will naturally appear at the bottom of the card. */}
//     <p className="text-sm sm:text-base text-gray-300 leading-relaxed z-20 relative">
//       {testimonial.feedback}
//     </p>
//   </div>
// );

// const Testimonial = () => {
//   const [testimonialData, setTestimonialData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // 2. FIREBASE DATA FETCHING EFFECT
//   useEffect(() => {
//     const testimonialsRef = ref(database, "testimonialSection");

//     const unsubscribe = onValue(
//       testimonialsRef,
//       (snapshot) => {
//         if (snapshot.exists()) {
//           const fetchedData = snapshot.val();
//           const testimonialsArray = Object.values(
//             fetchedData.testimonials || {}
//           );
//           setTestimonialData({
//             ...fetchedData,
//             testimonials: testimonialsArray,
//           });
//           setLoading(false);
//         } else {
//           console.log("No Testimonial section data found.");
//           setLoading(false);
//         }
//       },
//       (error) => {
//         console.error("Firebase read error:", error);
//         setLoading(false);
//       }
//     );

//     return () => unsubscribe();
//   }, []);

//   // 3. Handle Loading / Error States
//   if (loading) {
//     return (
//       <section className="bg-[#0A0118] text-white py-20 flex justify-center items-center">
//         Loading...
//       </section>
//     );
//   }

//   if (!testimonialData) {
//     return (
//       <section className="bg-[#0A0118] text-white py-20 flex justify-center items-center">
//         No Data Found.
//       </section>
//     );
//   }

//   const { tagline, mainHeading, subText, testimonials } = testimonialData;

//   const isSlider = testimonials.length > 3;
//   const sliderData = isSlider ? [...testimonials, ...testimonials] : [];

//   return (
//     <section className="bg-[#0A0118] text-white py-20 sm:py-24 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
//         <div className="text-center mb-4">
//           <span className="inline-block border border-[#5B86D3] text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wider">
//             {tagline}
//           </span>
//         </div>
//         <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4">
//           {mainHeading}
//         </h2>
//         <p className="text-base sm:text-lg text-gray-400 text-center max-w-2xl mx-auto">
//           {subText}
//         </p>
//       </div>

//       {/* CONDITIONAL RENDERING */}
//       {isSlider ? (
//         // === OPTION A: SLIDER (> 3 items) ===
//         <div className="relative w-full overflow-hidden">
//           <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#0A0118] to-transparent z-10" />
//           <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#0A0118] to-transparent z-10" />

//           {/* ADDED: 'items-stretch' ensures all slides are equal height */}
//           <motion.div
//             className="flex gap-8 w-max items-stretch"
//             animate={{ x: "-50%" }}
//             transition={{
//               ease: "linear",
//               duration: 30,
//               repeat: Infinity,
//             }}
//           >
//             {sliderData.map((testimonial, index) => (
//               <TestimonialCard
//                 key={`slider-${index}`}
//                 testimonial={testimonial}
//                 className="w-[350px] sm:w-[400px]"
//               />
//             ))}
//           </motion.div>
//         </div>
//       ) : (
//         // === OPTION B: GRID (<= 3 items) ===
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* ADDED: 'items-stretch' explicit call (Grid does this by default, but this enforces it) */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
//             {testimonials.map((testimonial, index) => (
//               <TestimonialCard
//                 key={index}
//                 testimonial={testimonial}
//                 className="w-full"
//               />
//             ))}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Testimonial;

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
// import { motion } from "framer-motion";

// // --- REQUIRED FIREBASE IMPORTS ---
// import { ref, onValue } from "firebase/database";
// import { database } from "../../lib/firebase";
// // ---------------------------------

// import avatar1 from "../../assets/avtar1.jpg";

// // Helper: Star Icon
// const StarIcon = ({ isActive }) => (
//   <svg
//     className={`w-4 h-4 sm:w-5 sm:h-5 ${
//       isActive
//         ? "text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]"
//         : "text-gray-700"
//     }`}
//     fill="currentColor"
//     viewBox="0 0 24 24"
//   >
//     <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//   </svg>
// );

// // Helper: Decorative Quote Icon (Watermark)
// const QuoteIcon = () => (
//   <svg
//     width="80"
//     height="80"
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     className="absolute top-4 right-6 text-[#7B71DB] opacity-10 transform rotate-12 pointer-events-none"
//   >
//     <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
//   </svg>
// );

// // Helper: Single Testimonial Card
// // We use motion.div here for the hover lift effect
// const TestimonialCard = ({ testimonial, className = "" }) => (
//   <motion.div
//     // HOVER ANIMATION: Lifts the card up slightly
//     whileHover={{ y: -10 }}
//     className={`group relative p-6 sm:p-8 rounded-2xl h-full flex flex-col
//       bg-gradient-to-b from-[#1F1629] to-[#120B18]
//       border border-white/5 hover:border-[#7B71DB]/50
//       shadow-lg hover:shadow-[0_0_30px_-5px_rgba(123,113,219,0.2)]
//       transition-all duration-300 ease-out overflow-hidden ${className}`}
//   >
//     {/* Decorative Watermark Quote */}
//     <QuoteIcon />

//     {/* TOP SECTION: Avatar, Name, Stars */}
//     <div className="relative z-10 mb-6">
//       <div className="flex items-center gap-4">
//         {/* Avatar with Glow Ring */}
//         <div className="relative">
//           <div className="absolute inset-0 rounded-full bg-[#7B71DB] blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
//           <img
//             src={testimonial.avatar || avatar1}
//             alt={testimonial.name}
//             className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border border-white/10 relative z-10"
//           />
//         </div>

//         <div>
//           <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#9f94ff] transition-colors duration-300">
//             {testimonial.name}
//           </h3>
//           <p className="text-gray-400 text-sm font-medium">
//             {testimonial.location}
//           </p>
//         </div>
//       </div>

//       {/* Stars */}
//       <div className="flex gap-1 mt-3">
//         {[...Array(5)].map((_, i) => (
//           <StarIcon key={i} isActive={i < testimonial.rating} />
//         ))}
//       </div>
//     </div>

//     {/* Divider Line */}
//     <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5" />

//     {/* BOTTOM SECTION: Feedback Text */}
//     <p className="text-sm sm:text-base text-gray-300 leading-relaxed relative z-10 font-light tracking-wide">
//       {testimonial.feedback}
//     </p>
//   </motion.div>
// );

// const Testimonial = () => {
//   const [testimonialData, setTestimonialData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // 2. FIREBASE DATA FETCHING EFFECT
//   useEffect(() => {
//     const testimonialsRef = ref(database, "testimonialSection");

//     const unsubscribe = onValue(
//       testimonialsRef,
//       (snapshot) => {
//         if (snapshot.exists()) {
//           const fetchedData = snapshot.val();
//           const testimonialsArray = Object.values(
//             fetchedData.testimonials || {}
//           );
//           setTestimonialData({
//             ...fetchedData,
//             testimonials: testimonialsArray,
//           });
//           setLoading(false);
//         } else {
//           console.log("No Testimonial section data found.");
//           setLoading(false);
//         }
//       },
//       (error) => {
//         console.error("Firebase read error:", error);
//         setLoading(false);
//       }
//     );

//     return () => unsubscribe();
//   }, []);

//   // 3. Handle Loading / Error States
//   if (loading) {
//     return (
//       <section className="bg-[#0A0118] min-h-[500px] flex justify-center items-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#7B71DB]"></div>
//       </section>
//     );
//   }

//   if (!testimonialData) {
//     return (
//       <section className="bg-[#0A0118] text-white py-20 flex justify-center items-center">
//         No Data Found.
//       </section>
//     );
//   }

//   const { tagline, mainHeading, subText, testimonials } = testimonialData;

//   const isSlider = testimonials.length > 3;
//   const sliderData = isSlider ? [...testimonials, ...testimonials] : [];

//   return (
//     <section className="bg-[#0A0118] text-white py-20 sm:py-24 overflow-hidden relative">
//       {/* Background Ambient Glow for the Section */}
//       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7B71DB] opacity-10 blur-[120px] rounded-full pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
//         <div className="text-center mb-6">
//           <motion.span
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="inline-block border border-[#7B71DB]/50  text-white text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full uppercase tracking-wider"
//           >
//             {tagline}
//           </motion.span>
//         </div>
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//           className="text-3xl sm:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400"
//         >
//           {mainHeading}
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="text-base sm:text-lg text-gray-400 text-center max-w-2xl mx-auto leading-relaxed"
//         >
//           {subText}
//         </motion.p>
//       </div>

//       {/* CONDITIONAL RENDERING */}
//       {isSlider ? (
//         // === OPTION A: SLIDER (> 3 items) ===
//         <div className="relative w-full overflow-hidden">
//           {/* Enhanced Fade Edges */}
//           <div className="absolute top-0 left-0 w-24 sm:w-32 h-full bg-gradient-to-r from-[#0A0118] via-[#0A0118]/80 to-transparent z-10 pointer-events-none" />
//           <div className="absolute top-0 right-0 w-24 sm:w-32 h-full bg-gradient-to-l from-[#0A0118] via-[#0A0118]/80 to-transparent z-10 pointer-events-none" />

//           <motion.div
//             className="flex gap-6 sm:gap-8 w-max items-stretch px-4 py-10" // added py-10 to allow hover lift space
//             animate={{ x: "-50%" }}
//             transition={{
//               ease: "linear",
//               duration: 40, // Slowed down slightly for better readability
//               repeat: Infinity,
//             }}
//           >
//             {sliderData.map((testimonial, index) => (
//               <div key={`slider-${index}`} className="w-[350px] sm:w-[400px]">
//                 <TestimonialCard testimonial={testimonial} />
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       ) : (
//         // === OPTION B: GRID (<= 3 items) ===
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
//             {testimonials.map((testimonial, index) => (
//               <TestimonialCard
//                 key={index}
//                 testimonial={testimonial}
//                 className="w-full"
//               />
//             ))}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Testimonial;

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
//
// import React, { useState, useEffect, useRef } from "react";
// import { motion, useAnimation, useMotionValue } from "framer-motion";

// // --- REQUIRED FIREBASE IMPORTS ---
// import { ref, onValue } from "firebase/database";
// import { database } from "../../lib/firebase";
// // ---------------------------------

// import avatar1 from "../../assets/avtar1.jpg";

// // --- ICONS ---

// const StarIcon = ({ isActive }) => (
//   <svg
//     className={`w-4 h-4 sm:w-5 sm:h-5 ${
//       isActive
//         ? "text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]"
//         : "text-gray-700"
//     }`}
//     fill="currentColor"
//     viewBox="0 0 24 24"
//   >
//     <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//   </svg>
// );

// const QuoteIcon = () => (
//   <svg
//     width="80"
//     height="80"
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     className="absolute top-4 right-6 text-[#7B71DB] opacity-10 transform rotate-12 pointer-events-none"
//   >
//     <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
//   </svg>
// );

// const ArrowLeft = ({ onClick, disabled }) => (
//   <button
//     onClick={onClick}
//     disabled={disabled}
//     className={`p-3 rounded-full border border-[#7B71DB]/30 bg-[#120B18] transition-all duration-300 group
//       ${
//         disabled
//           ? "opacity-30 cursor-not-allowed"
//           : "hover:bg-[#7B71DB] hover:border-[#7B71DB] hover:shadow-[0_0_15px_rgba(123,113,219,0.5)]"
//       }
//     `}
//   >
//     <svg
//       className={`w-6 h-6 text-white transition-transform duration-300 ${
//         !disabled && "group-hover:-translate-x-1"
//       }`}
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M15 19l-7-7 7-7"
//       />
//     </svg>
//   </button>
// );

// const ArrowRight = ({ onClick, disabled }) => (
//   <button
//     onClick={onClick}
//     disabled={disabled}
//     className={`p-3 rounded-full border border-[#7B71DB]/30 bg-[#120B18] transition-all duration-300 group
//       ${
//         disabled
//           ? "opacity-30 cursor-not-allowed"
//           : "hover:bg-[#7B71DB] hover:border-[#7B71DB] hover:shadow-[0_0_15px_rgba(123,113,219,0.5)]"
//       }
//     `}
//   >
//     <svg
//       className={`w-6 h-6 text-white transition-transform duration-300 ${
//         !disabled && "group-hover:translate-x-1"
//       }`}
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M9 5l7 7-7 7"
//       />
//     </svg>
//   </button>
// );

// // --- COMPONENT ---

// const TestimonialCard = ({ testimonial, className = "" }) => (
//   <motion.div
//     whileHover={{ y: -10 }}
//     className={`group relative p-6 sm:p-8 rounded-2xl h-full flex flex-col
//       bg-gradient-to-b from-[#1F1629] to-[#120B18]
//       border border-white/5 hover:border-[#7B71DB]/50
//       shadow-lg hover:shadow-[0_0_30px_-5px_rgba(123,113,219,0.2)]
//       transition-all duration-300 ease-out overflow-hidden select-none ${className}`} // Added select-none for better dragging
//   >
//     <QuoteIcon />
//     <div className="relative z-10 mb-6">
//       <div className="flex items-center gap-4">
//         <div className="relative">
//           <div className="absolute inset-0 rounded-full bg-[#7B71DB] blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
//           <img
//             src={testimonial.avatar || avatar1}
//             alt={testimonial.name}
//             className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border border-white/10 relative z-10 pointer-events-none" // pointer-events-none prevents image dragging
//           />
//         </div>
//         <div>
//           <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#9f94ff] transition-colors duration-300">
//             {testimonial.name}
//           </h3>
//           <p className="text-gray-400 text-sm font-medium">
//             {testimonial.location}
//           </p>
//         </div>
//       </div>
//       <div className="flex gap-1 mt-3">
//         {[...Array(5)].map((_, i) => (
//           <StarIcon key={i} isActive={i < testimonial.rating} />
//         ))}
//       </div>
//     </div>
//     <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5" />
//     <p className="text-sm sm:text-base text-gray-300 leading-relaxed relative z-10 font-light tracking-wide">
//       {testimonial.feedback}
//     </p>
//   </motion.div>
// );

// const Testimonial = () => {
//   const [testimonialData, setTestimonialData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // --- CAROUSEL LOGIC STATE ---
//   const [index, setIndex] = useState(0);
//   const [width, setWidth] = useState(0);
//   const carouselRef = useRef();

//   // Card dimensions for calculation (Card width + Gap)
//   // sm:w-[400px] + gap-8 (32px) = 432px
//   // w-[350px] + gap-6 (24px) = 374px
//   const CARD_SIZE_DESKTOP = 432;
//   const CARD_SIZE_MOBILE = 374;

//   useEffect(() => {
//     // Update constraint width on mount/resize
//     if (carouselRef.current) {
//       setWidth(
//         carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
//       );
//     }
//   }, [testimonialData]);

//   // Fetch Data
//   useEffect(() => {
//     const testimonialsRef = ref(database, "testimonialSection");
//     const unsubscribe = onValue(
//       testimonialsRef,
//       (snapshot) => {
//         if (snapshot.exists()) {
//           const fetchedData = snapshot.val();
//           const testimonialsArray = Object.values(
//             fetchedData.testimonials || {}
//           );
//           setTestimonialData({
//             ...fetchedData,
//             testimonials: testimonialsArray,
//           });
//           setLoading(false);
//         } else {
//           setLoading(false);
//         }
//       },
//       (error) => {
//         console.error("Firebase read error:", error);
//         setLoading(false);
//       }
//     );
//     return () => unsubscribe();
//   }, []);

//   if (loading) {
//     return (
//       <section className="bg-[#0A0118] min-h-[500px] flex justify-center items-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#7B71DB]"></div>
//       </section>
//     );
//   }

//   if (!testimonialData) {
//     return (
//       <section className="bg-[#0A0118] text-white py-20 text-center">
//         No Data Found.
//       </section>
//     );
//   }

//   const { tagline, mainHeading, subText, testimonials } = testimonialData;
//   const isSlider = testimonials.length > 3;

//   // --- HANDLERS ---

//   const handlePrev = () => {
//     if (index > 0) setIndex((prev) => prev - 1);
//   };

//   const handleNext = () => {
//     // Prevent going past the end
//     // (Total items - 1) gives us the last index
//     if (index < testimonials.length - 1) setIndex((prev) => prev + 1);
//   };

//   // Calculate drag snap
//   const onDragEnd = (event, info) => {
//     const offset = info.offset.x;
//     const velocity = info.velocity.x;

//     // Determine card size based on screen width approx
//     const cardSize =
//       window.innerWidth >= 640 ? CARD_SIZE_DESKTOP : CARD_SIZE_MOBILE;

//     // If swiped right (positive) -> Go Prev
//     if (offset > 100 || velocity > 500) {
//       handlePrev();
//     }
//     // If swiped left (negative) -> Go Next
//     else if (offset < -100 || velocity < -500) {
//       handleNext();
//     }
//   };

//   // Calculate X position based on index
//   // We check window width to apply correct spacing math
//   const getXPosition = () => {
//     // A rough check for responsive sizing logic in JS
//     // For production, use a resize listener or useMotionValue with resize
//     // This is a simplified reliable calculation:
//     const isDesktop = typeof window !== "undefined" && window.innerWidth >= 640;
//     const size = isDesktop ? CARD_SIZE_DESKTOP : CARD_SIZE_MOBILE;
//     return -index * size;
//   };

//   return (
//     <section className="bg-[#0A0118] text-white py-20 sm:py-24 overflow-hidden relative">
//       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7B71DB] opacity-10 blur-[120px] rounded-full pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
//         <div className="text-center mb-6">
//           <motion.span
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="inline-block border border-[#7B71DB]/50 text-white text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full uppercase tracking-wider"
//           >
//             {tagline}
//           </motion.span>
//         </div>

//         {/* Header Flex: Heading on left/center, Arrows on right (desktop) */}
//         <div className="flex flex-col md:flex-row items-end md:items-center justify-between gap-6">
//           <div className="w-full md:w-2/3 text-center md:text-left">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 }}
//               className="text-3xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400"
//             >
//               {mainHeading}
//             </motion.h2>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="text-base sm:text-lg text-gray-400 leading-relaxed"
//             >
//               {subText}
//             </motion.p>
//           </div>

//           {/* ARROWS (Visible on Desktop mainly) */}
//           {isSlider && (
//             <div className="hidden md:flex gap-4">
//               <ArrowLeft onClick={handlePrev} disabled={index === 0} />
//               <ArrowRight
//                 onClick={handleNext}
//                 disabled={index >= testimonials.length - 2}
//               />
//               {/* -2 is an approximation so we don't scroll into empty space on wide screens */}
//             </div>
//           )}
//         </div>
//       </div>

//       {isSlider ? (
//         // === OPTION A: DRAGGABLE CAROUSEL WITH ARROWS ===
//         <div className="relative w-full">
//           <motion.div
//             ref={carouselRef}
//             className="overflow-hidden px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto cursor-grab active:cursor-grabbing"
//           >
//             <motion.div
//               className="flex gap-6 sm:gap-8 w-max py-10"
//               // The X position is controlled by state index
//               animate={{ x: getXPosition() }}
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//               // Enable Drag
//               drag="x"
//               dragConstraints={{
//                 right: 0,
//                 left: -(
//                   testimonials.length * CARD_SIZE_DESKTOP -
//                   window.innerWidth
//                 ),
//               }}
//               onDragEnd={onDragEnd}
//             >
//               {testimonials.map((testimonial, idx) => (
//                 <div key={`slider-${idx}`} className="w-[350px] sm:w-[400px]">
//                   <TestimonialCard testimonial={testimonial} />
//                 </div>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* Mobile Arrows (Bottom Center) */}
//           <div className="flex md:hidden justify-center gap-4 mt-4">
//             <ArrowLeft onClick={handlePrev} disabled={index === 0} />
//             <ArrowRight
//               onClick={handleNext}
//               disabled={index >= testimonials.length - 1}
//             />
//           </div>
//         </div>
//       ) : (
//         // === OPTION B: GRID (<= 3 items) ===
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
//             {testimonials.map((testimonial, index) => (
//               <TestimonialCard
//                 key={index}
//                 testimonial={testimonial}
//                 className="w-full"
//               />
//             ))}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Testimonial;

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
// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";

// // --- REQUIRED FIREBASE IMPORTS ---
// import { ref, onValue } from "firebase/database";
// import { database } from "../../lib/firebase";
// // ---------------------------------

// import avatar1 from "../../assets/avtar1.jpg";

// // --- ICONS ---

// const StarIcon = ({ isActive }) => (
//   <svg
//     className={`w-4 h-4 sm:w-5 sm:h-5 ${
//       isActive
//         ? "text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]"
//         : "text-gray-700"
//     }`}
//     fill="currentColor"
//     viewBox="0 0 24 24"
//   >
//     <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//   </svg>
// );

// const QuoteIcon = () => (
//   <svg
//     width="80"
//     height="80"
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     className="absolute top-4 right-6 text-[#7B71DB] opacity-10 transform rotate-12 pointer-events-none"
//   >
//     <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
//   </svg>
// );

// const ArrowLeft = ({ onClick }) => (
//   <button
//     onClick={onClick}
//     className="p-3 rounded-full border border-[#7B71DB]/30 bg-[#120B18] transition-all duration-300 group hover:bg-[#7B71DB] hover:border-[#7B71DB] hover:shadow-[0_0_15px_rgba(123,113,219,0.5)] active:scale-95"
//   >
//     <svg
//       className="w-6 h-6 text-white transition-transform duration-300 group-hover:-translate-x-1"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M15 19l-7-7 7-7"
//       />
//     </svg>
//   </button>
// );

// const ArrowRight = ({ onClick }) => (
//   <button
//     onClick={onClick}
//     className="p-3 rounded-full border border-[#7B71DB]/30 bg-[#120B18] transition-all duration-300 group hover:bg-[#7B71DB] hover:border-[#7B71DB] hover:shadow-[0_0_15px_rgba(123,113,219,0.5)] active:scale-95"
//   >
//     <svg
//       className="w-6 h-6 text-white transition-transform duration-300 group-hover:translate-x-1"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M9 5l7 7-7 7"
//       />
//     </svg>
//   </button>
// );

// // --- COMPONENT ---

// const TestimonialCard = ({ testimonial, className = "" }) => (
//   <motion.div
//     whileHover={{ y: -10 }}
//     className={`group relative p-6 sm:p-8 rounded-2xl h-full flex flex-col
//       bg-gradient-to-b from-[#1F1629] to-[#120B18]
//       border border-white/5 hover:border-[#7B71DB]/50
//       shadow-lg hover:shadow-[0_0_30px_-5px_rgba(123,113,219,0.2)]
//       transition-all duration-300 ease-out overflow-hidden select-none ${className}`}
//   >
//     <QuoteIcon />
//     <div className="relative z-10 mb-6">
//       <div className="flex items-center gap-4">
//         <div className="relative">
//           <div className="absolute inset-0 rounded-full bg-[#7B71DB] blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
//           <img
//             src={testimonial.avatar || avatar1}
//             alt={testimonial.name}
//             className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border border-white/10 relative z-10 pointer-events-none"
//           />
//         </div>
//         <div>
//           <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#9f94ff] transition-colors duration-300">
//             {testimonial.name}
//           </h3>
//           <p className="text-gray-400 text-sm font-medium">
//             {testimonial.location}
//           </p>
//         </div>
//       </div>
//       <div className="flex gap-1 mt-3">
//         {[...Array(5)].map((_, i) => (
//           <StarIcon key={i} isActive={i < testimonial.rating} />
//         ))}
//       </div>
//     </div>
//     <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5" />
//     <p className="text-sm sm:text-base text-gray-300 leading-relaxed relative z-10 font-light tracking-wide">
//       {testimonial.feedback}
//     </p>
//   </motion.div>
// );

// const Testimonial = () => {
//   const [testimonialData, setTestimonialData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // --- CAROUSEL LOGIC STATE ---
//   const [index, setIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false); // To handle auto-rotation pause
//   const carouselRef = useRef();

//   const AUTOPLAY_DELAY = 5000; // 5 Seconds

//   // Card dimensions
//   const CARD_SIZE_DESKTOP = 432;
//   const CARD_SIZE_MOBILE = 374;

//   // Fetch Data
//   useEffect(() => {
//     const testimonialsRef = ref(database, "testimonialSection");
//     const unsubscribe = onValue(
//       testimonialsRef,
//       (snapshot) => {
//         if (snapshot.exists()) {
//           const fetchedData = snapshot.val();
//           const testimonialsArray = Object.values(
//             fetchedData.testimonials || {}
//           );
//           setTestimonialData({
//             ...fetchedData,
//             testimonials: testimonialsArray,
//           });
//           setLoading(false);
//         } else {
//           setLoading(false);
//         }
//       },
//       (error) => {
//         console.error("Firebase read error:", error);
//         setLoading(false);
//       }
//     );
//     return () => unsubscribe();
//   }, []);

//   // --- AUTO ROTATION EFFECT ---
//   useEffect(() => {
//     // Only run if data exists, slider mode is on, and not paused
//     if (
//       !testimonialData ||
//       testimonialData.testimonials.length <= 3 ||
//       isPaused
//     )
//       return;

//     const interval = setInterval(() => {
//       setIndex((prevIndex) => {
//         // Loop back to 0 if at the end
//         if (prevIndex >= testimonialData.testimonials.length - 1) return 0;
//         return prevIndex + 1;
//       });
//     }, AUTOPLAY_DELAY);

//     return () => clearInterval(interval);
//   }, [testimonialData, isPaused]);

//   if (loading) {
//     return (
//       <section className="bg-[#0A0118] min-h-[500px] flex justify-center items-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#7B71DB]"></div>
//       </section>
//     );
//   }

//   if (!testimonialData) {
//     return (
//       <section className="bg-[#0A0118] text-white py-20 text-center">
//         No Data Found.
//       </section>
//     );
//   }

//   const { tagline, mainHeading, subText, testimonials } = testimonialData;
//   const isSlider = testimonials.length > 3;

//   // --- HANDLERS ---

//   const handlePrev = () => {
//     setIndex((prev) => {
//       // Loop to end if at start
//       if (prev === 0) return testimonials.length - 1;
//       return prev - 1;
//     });
//   };

//   const handleNext = () => {
//     setIndex((prev) => {
//       // Loop to start if at end
//       if (prev >= testimonials.length - 1) return 0;
//       return prev + 1;
//     });
//   };

//   const onDragEnd = (event, info) => {
//     setIsPaused(false); // Resume auto-play after drag
//     const offset = info.offset.x;
//     const velocity = info.velocity.x;

//     // If swiped right (positive) -> Go Prev
//     if (offset > 100 || velocity > 500) {
//       handlePrev();
//     }
//     // If swiped left (negative) -> Go Next
//     else if (offset < -100 || velocity < -500) {
//       handleNext();
//     }
//   };

//   const getXPosition = () => {
//     const isDesktop = typeof window !== "undefined" && window.innerWidth >= 640;
//     const size = isDesktop ? CARD_SIZE_DESKTOP : CARD_SIZE_MOBILE;
//     return -index * size;
//   };

//   return (
//     <section className="bg-[#0A0118] text-white py-20 sm:py-24 overflow-hidden relative">
//       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7B71DB] opacity-10 blur-[120px] rounded-full pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
//         <div className="text-center mb-6">
//           <motion.span
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="inline-block border border-[#7B71DB]/50 text-white text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full uppercase tracking-wider"
//           >
//             {tagline}
//           </motion.span>
//         </div>

//         <div className="flex flex-col md:flex-row items-end md:items-center justify-between gap-6">
//           <div className="w-full md:w-2/3 text-center md:text-left">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 }}
//               className="text-3xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400"
//             >
//               {mainHeading}
//             </motion.h2>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="text-base sm:text-lg text-gray-400 leading-relaxed"
//             >
//               {subText}
//             </motion.p>
//           </div>

//           {/* ARROWS */}
//           {isSlider && (
//             <div
//               className="hidden md:flex gap-4"
//               onMouseEnter={() => setIsPaused(true)}
//               onMouseLeave={() => setIsPaused(false)}
//             >
//               <ArrowLeft onClick={handlePrev} />
//               <ArrowRight onClick={handleNext} />
//             </div>
//           )}
//         </div>
//       </div>

//       {isSlider ? (
//         // === OPTION A: DRAGGABLE + AUTO-SCROLL CAROUSEL ===
//         <div
//           className="relative w-full"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//         >
//           <motion.div
//             ref={carouselRef}
//             className="overflow-hidden px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto cursor-grab active:cursor-grabbing"
//           >
//             <motion.div
//               className="flex gap-6 sm:gap-8 w-max py-10"
//               animate={{ x: getXPosition() }}
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//               // Enable Drag
//               drag="x"
//               // Adjust drag constraints dynamically based on index if needed, or simplified infinite feel limits
//               dragConstraints={{
//                 right: 0,
//                 left: -(
//                   testimonials.length * CARD_SIZE_DESKTOP -
//                   window.innerWidth
//                 ),
//               }}
//               onDragStart={() => setIsPaused(true)} // Pause when dragging starts
//               onDragEnd={onDragEnd}
//             >
//               {testimonials.map((testimonial, idx) => (
//                 <div key={`slider-${idx}`} className="w-[350px] sm:w-[400px]">
//                   <TestimonialCard testimonial={testimonial} />
//                 </div>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* Mobile Arrows */}
//           <div className="flex md:hidden justify-center gap-4 mt-4">
//             <ArrowLeft onClick={handlePrev} />
//             <ArrowRight onClick={handleNext} />
//           </div>
//         </div>
//       ) : (
//         // === OPTION B: GRID (<= 3 items) ===
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
//             {testimonials.map((testimonial, index) => (
//               <TestimonialCard
//                 key={index}
//                 testimonial={testimonial}
//                 className="w-full"
//               />
//             ))}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Testimonial;

//
//
//
//
//
//
//
//
//
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// --- REQUIRED FIREBASE IMPORTS ---
import { ref, onValue } from "firebase/database";
import { database } from "../../lib/firebase";
// ---------------------------------

import avatar1 from "../../assets/avtar1.jpg";

// --- ICONS ---

const StarIcon = ({ isActive }) => (
  <svg
    className={`w-4 h-4 sm:w-5 sm:h-5 ${
      isActive
        ? "text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]"
        : "text-gray-700"
    }`}
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const QuoteIcon = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="absolute top-4 right-6 text-[#7B71DB] opacity-10 transform rotate-12 pointer-events-none"
  >
    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
  </svg>
);

const ArrowLeft = ({ onClick }) => (
  <button
    onClick={onClick}
    className="p-3 rounded-full border border-[#7B71DB]/30 bg-[#120B18] transition-all duration-300 group hover:bg-[#7B71DB] hover:border-[#7B71DB] hover:shadow-[0_0_15px_rgba(123,113,219,0.5)] active:scale-95"
  >
    <svg
      className="w-6 h-6 text-white transition-transform duration-300 group-hover:-translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </button>
);

const ArrowRight = ({ onClick }) => (
  <button
    onClick={onClick}
    className="p-3 rounded-full border border-[#7B71DB]/30 bg-[#120B18] transition-all duration-300 group hover:bg-[#7B71DB] hover:border-[#7B71DB] hover:shadow-[0_0_15px_rgba(123,113,219,0.5)] active:scale-95"
  >
    <svg
      className="w-6 h-6 text-white transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>
);

// --- COMPONENT ---

const TestimonialCard = ({ testimonial, className = "" }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className={`group relative p-6 sm:p-8 rounded-2xl h-full flex flex-col 
      bg-gradient-to-b from-[#1F1629] to-[#120B18] 
      border border-white/5 hover:border-[#7B71DB]/50 
      shadow-lg hover:shadow-[0_0_30px_-5px_rgba(123,113,219,0.2)] 
      transition-all duration-300 ease-out overflow-hidden select-none ${className}`}
  >
    <QuoteIcon />
    <div className="relative z-10 mb-6">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-[#7B71DB] blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
          <img
            src={testimonial.avatar || avatar1}
            alt={testimonial.name}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border border-white/10 relative z-10 pointer-events-none"
          />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#9f94ff] transition-colors duration-300">
            {testimonial.name}
          </h3>
          <p className="text-gray-400 text-sm font-medium">
            {testimonial.location}
          </p>
        </div>
      </div>
      <div className="flex gap-1 mt-3">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} isActive={i < testimonial.rating} />
        ))}
      </div>
    </div>
    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5" />
    <p className="text-sm sm:text-base text-gray-300 leading-relaxed relative z-10 font-light tracking-wide">
      {testimonial.feedback}
    </p>
  </motion.div>
);

const Testimonial = () => {
  const [testimonialData, setTestimonialData] = useState(null);
  const [loading, setLoading] = useState(true);

  // --- CAROUSEL LOGIC STATE ---
  const [index, setIndex] = useState(0);
  const carouselRef = useRef();

  // Card dimensions
  const CARD_SIZE_DESKTOP = 432;
  const CARD_SIZE_MOBILE = 374;

  // Fetch Data
  useEffect(() => {
    const testimonialsRef = ref(database, "testimonialSection");
    const unsubscribe = onValue(
      testimonialsRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const fetchedData = snapshot.val();
          const testimonialsArray = Object.values(
            fetchedData.testimonials || {}
          );
          setTestimonialData({
            ...fetchedData,
            testimonials: testimonialsArray,
          });
          setLoading(false);
        } else {
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

  // --- AUTO ROTATION EFFECT REMOVED ---

  if (loading) {
    return (
      <section className="bg-[#0A0118] min-h-[500px] flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#7B71DB]"></div>
      </section>
    );
  }

  if (!testimonialData) {
    return (
      <section className="bg-[#0A0118] text-white py-20 text-center">
        No Data Found.
      </section>
    );
  }

  const { tagline, mainHeading, subText, testimonials } = testimonialData;
  const isSlider = testimonials.length > 3;

  // --- HANDLERS ---

  const handlePrev = () => {
    setIndex((prev) => {
      // Loop to end if at start
      if (prev === 0) return testimonials.length - 1;
      return prev - 1;
    });
  };

  const handleNext = () => {
    setIndex((prev) => {
      // Loop to start if at end
      if (prev >= testimonials.length - 1) return 0;
      return prev + 1;
    });
  };

  const onDragEnd = (event, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    // If swiped right (positive) -> Go Prev
    if (offset > 100 || velocity > 500) {
      handlePrev();
    }
    // If swiped left (negative) -> Go Next
    else if (offset < -100 || velocity < -500) {
      handleNext();
    }
  };

  const getXPosition = () => {
    const isDesktop = typeof window !== "undefined" && window.innerWidth >= 640;
    const size = isDesktop ? CARD_SIZE_DESKTOP : CARD_SIZE_MOBILE;
    return -index * size;
  };

  return (
    <section className="bg-[#0A0118] text-white py-20 sm:py-24 overflow-hidden relative">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7B71DB] opacity-10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        <div className="text-center mb-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block border border-[#7B71DB]/50 text-white text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full uppercase tracking-wider"
          >
            {tagline}
          </motion.span>
        </div>

        <div className="flex flex-col md:flex-row items-end md:items-center justify-between gap-6">
          <div className="w-full md:w-2/3 text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400"
            >
              {mainHeading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-gray-400 leading-relaxed"
            >
              {subText}
            </motion.p>
          </div>

          {/* ARROWS */}
          {isSlider && (
            <div className="hidden md:flex gap-4">
              <ArrowLeft onClick={handlePrev} />
              <ArrowRight onClick={handleNext} />
            </div>
          )}
        </div>
      </div>

      {isSlider ? (
        // === OPTION A: DRAGGABLE CAROUSEL (Manual Only) ===
        <div className="relative w-full">
          <motion.div
            ref={carouselRef}
            className="overflow-hidden px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto cursor-grab active:cursor-grabbing"
          >
            <motion.div
              className="flex gap-6 sm:gap-8 w-max py-10"
              animate={{ x: getXPosition() }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              // Enable Drag
              drag="x"
              // Adjust drag constraints dynamically
              dragConstraints={{
                right: 0,
                left: -(
                  testimonials.length * CARD_SIZE_DESKTOP -
                  window.innerWidth
                ),
              }}
              onDragEnd={onDragEnd}
            >
              {testimonials.map((testimonial, idx) => (
                <div key={`slider-${idx}`} className="w-[350px] sm:w-[400px]">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Mobile Arrows */}
          <div className="flex md:hidden justify-center gap-4 mt-4">
            <ArrowLeft onClick={handlePrev} />
            <ArrowRight onClick={handleNext} />
          </div>
        </div>
      ) : (
        // === OPTION B: GRID (<= 3 items) ===
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                className="w-full"
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonial;
