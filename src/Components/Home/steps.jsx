import React from "react";

const Steps = () => {
  const stepsData = [
    {
      title: "Free Consultation",
      description:
        "Get expert guidance to make informed decisions — no cost, no obligation.",
      icon: (
        // Phone/Call Icon SVG
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-3.1-3.1A19.79 19.79 0 012 5.18 2 2 0 014.08 3h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 12c1.41 1.41 2.87 2.87 4 4l1.29-1.29a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
    },
    {
      title: "Instant Chat Support",
      description:
        "Connect with us instantly to explore solutions and get your questions answered.",
      icon: (
        // Chat/Message Icon SVG
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </svg>
      ),
    },
    {
      title: "Wireframe & Development",
      description:
        "Turn your ideas into structured designs and experience a functional preview before final development.",
      icon: (
        // Abstract/Structure/Wireframe Icon SVG
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      title: "Launch & Support",
      description:
        "Go live with confidence and enjoy continuous support to ensure lasting success.",
      icon: (
        // Launch/Rocket Icon SVG
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 11a9 9 0 0118 0M2 17h20M7 21h10" />
          <path d="M12 3v10" />
          <path d="M12 10l-3-3m6 0l-3 3" />
        </svg>
      ),
    },
  ];

  return (
    // Main Section: Adjusted vertical padding
    <section className="bg-gradient-to-b from-[#261E33] to-[#0A0118] text-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      {/* Header Section: Adjusted bottom margin */}
      <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
        <p className="inline-block border border-[#7B71DB]/50 text-xs sm:text-sm tracking-widest uppercase px-5 py-2 text-white mb-4 sm:mb-6 rounded-full font-medium">
          4 STEPS
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
          From Vision to Success in 4 Simple Steps
        </h1>
        <p className="text-base sm:text-lg text-gray-400">
          Turn your ideas into reality with a clear, streamlined process.
        </p>
      </div>

      {/* --- Steps Grid --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stepsData.map((step, index) => (
          <div
            key={index}
            // Ensure equal height using 'h-full' and 'flex-col justify-between'
            className="flex flex-col items-center text-center p-6 sm:p-8 border border-white/10 rounded-xl bg-white/5 h-full"
          >
            {/* Icon Wrapper: Increased size subtly for prominence */}
            <div className="mb-6 w-14 h-14 sm:w-16 sm:h-16 text-white bg-gradient-to-r from-[#7873DA] to-[#5B86D3] p-4 rounded-full border border-[#7B71DB]/50 flex items-center justify-center flex-shrink-0">
              {step.icon}
            </div>

            {/* Step Title */}
            <h3 className="text-xl font-medium mb-3">
              {index + 1}. {step.title}
            </h3>

            {/* Step Description */}
            <p className="text-sm sm:text-base text-gray-400 mb-8 leading-relaxed flex-grow">
              {step.description}
            </p>

            {/* Button: Use mt-auto to push to bottom, ensure full width on mobile */}
            <button
              onClick={() =>
                window.open(
                  "https://calendar.app.google/z5GZpzeNAPNfvqHE7",
                  "_blank"
                )
              }
              className="mt-auto w-full max-w-[200px] bg-gradient-to-r from-[#7873DA] to-[#5B86D3] hover:from-[#5B86D3] hover:to-[#7873DA] text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 shadow-lg tracking-wider text-sm"
            >
              GET STARTED
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
