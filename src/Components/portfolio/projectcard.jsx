import React from "react";
// Import Lucide Icons
import { MapPin, Clock, Users, Eye } from "lucide-react";

const ProjectCard = ({ title, description, imageSrc, details }) => {
  const { country, duration, developers } = details;

  return (
    // Card container:
    // REMOVED: w-full md:w-1/3 p-4
    // Rationale: The parent (ProjectsSection) now handles layout/spacing via CSS Grid and gap-8.
    <div className="w-full">
      <div className="bg-[#0F121A] backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
        {/* Image Placeholder */}
        <div
          className="h-48 bg-cover bg-center"
          style={{
            backgroundImage: `url('${imageSrc}')`,
            // Custom style to slightly darken the image background
            backgroundSize: "cover",
          }}
        >
          {/* The complex graphics shown in the image are part of the background/image source */}
        </div>

        <div className="p-6 text-white flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-400 mb-6 min-h-[60px] flex-grow">
            {description}
          </p>

          {/* Details Section */}
          <div className="text-sm space-y-2 mb-6 border-t border-b border-white/10 py-4">
            {/* 📍 Country replaced with MapPin */}
            <p className="flex items-center text-gray-300">
              <MapPin className="w-4 h-4 mr-2 text-indigo-400" /> {country}
            </p>

            {/* ⏱️ Duration replaced with Clock */}
            <p className="flex items-center text-gray-300">
              <Clock className="w-4 h-4 mr-2 text-indigo-400" /> {duration}
            </p>

            {/* 🧑‍💻 Developers replaced with Users */}
            <p className="flex items-center text-gray-300">
              <Users className="w-4 h-4 mr-2 text-indigo-400" /> {developers}
            </p>
          </div>

          {/* Button - Added mt-auto to push the button to the bottom */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
