import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    title: "Global Shipping",
    description: "Fast worldwide delivery",
    // Icon: Globe
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 md:w-16 md:h-16" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12H22" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Factory-Direct Pricing",
    description: "No middlemen, best rates",
    // Icon: Hand holding Price Tag
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 md:w-16 md:h-16" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="7" y1="7" x2="7.01" y2="7" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 18l6-6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 14l3-3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Quality Assurance",
    description: "Stringent QC process",
    // Icon: T-Shirt
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 md:w-16 md:h-16" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Customizable Design",
    description: "Wide range of fabrics & styles",
    // Icon: Ruler and Pencil
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 md:w-16 md:h-16" stroke="currentColor" strokeWidth="1.5">
        <path d="M21.368 16.58L19.954 18l-5.656-5.657-3.415 3.415 5.657 5.656-1.414 1.415-5.657-5.657-3.071 3.071L2.1 16.536 16.536 2.1l3.707 3.707 3.071-3.071-5.657-5.657z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 5l3 3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12l-2 2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 16l-2 2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 9l-2 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const WhyUs = () => {
  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden bg-[#f7fdff]">
      
      {/* ---------------- BACKGROUND IMAGE ---------------- */}
      {/* Using opacity-5 to make it a subtle sketch texture like the screenshot.
          The 'mix-blend-multiply' helps the sketches blend nicely into the white bg.
      */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/images/factory/productionBG.png" 
          alt="Background Texture"
          className="w-full h-full object-cover opacity-[.08] grayscale"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ---------------- TITLE ---------------- */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[IvyPresto_Headline] font-serif text-[#1F2937]">
            Why <span className="text-[#FFA273]">Choose Us?</span>
          </h2>
        </motion.div>

        {/* ---------------- CARDS GRID ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 text-center">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Icon Container */}
              <div className="mb-6 text-[#FFA273] transition-transform duration-300 hover:scale-110">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-serif font-bold text-[#1F2937] mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 font-[Montserrat] text-sm md:text-base leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;