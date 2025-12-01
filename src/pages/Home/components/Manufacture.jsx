import React from 'react';
import { motion } from "framer-motion";

const steps = [
    { 
        id: 1, 
        title: 'Choose Apparel', 
        subtitle: 'Select style, Material, colors',
        // Icon: Polo Shirt
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 md:w-14 md:h-14">
                <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.24 2 8v1l2.5.5V18c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V9.5L22 9V8c0-2.76-2.42-5-5.5-5zm-5.5 9h-2V6.2c.6-.13 1.25-.2 2-.2s1.4.07 2 .2V12z"/>
            </svg>
        ) 
    },
    { 
        id: 2, 
        title: 'Upload Design', 
        subtitle: 'Logos, Patterns, print methods',
        // Icon: Cloud Upload
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 md:w-14 md:h-14">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/>
            </svg>
        )
    },
    { 
        id: 3, 
        title: 'Get a Sample', 
        subtitle: 'Digital Preview before production',
        // Icon: Folded Shirt/Sample
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 md:w-14 md:h-14">
               <path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm12 4c0 1.1-.9 2-2 2s-2-.9-2-2V5h4v4zm-6 0c0 1.1-.9 2-2 2s-2-.9-2-2V5h4v4H9z"/>
               <path d="M7 13h10v2H7z" opacity="0.8"/>
            </svg>
        )
    },
    { 
        id: 4, 
        title: 'Approve & Order', 
        subtitle: 'Final confirmation',
        // Icon: Checkmark
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 md:w-14 md:h-14">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
        )
    },
    { 
        id: 5, 
        title: 'Manufacturing Starts', 
        subtitle: 'Bulk production in progress',
        // Icon: Star
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 md:w-14 md:h-14">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
        )
    },
    { 
        id: 6, 
        title: 'Delivery Worldwide', 
        subtitle: 'Wide range of fabrics & styles',
        // Icon: Airplane
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 md:w-14 md:h-14">
                 <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
            </svg>
        )
    },
];

export default function Manufacture() {
    return (
        <section className="relative w-full py-20 px-4 md:px-6 overflow-hidden bg-[#f7fdff]">
            
            {/* ---------------- BACKGROUND IMAGE ---------------- */}
            {/* Matches previous component's texture style */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img 
                    src="/assets/images/factory/productionBG.png" 
                    alt="Background Texture"
                    className="w-full h-full object-cover opacity-[0.04] grayscale mix-blend-multiply"
                />
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto">
                
                {/* ---------------- TITLE ---------------- */}
                <motion.div 
                    className="text-center mb-16 md:mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-[IvyPresto_Headline] font-serif text-[#1F2937]">
                        Customization & <span className="text-[#FFA273]">Manufacturing</span> Process
                    </h2>
                </motion.div>

                {/* ---------------- ICONS GRID ---------------- */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6 text-center">
                    {steps.map((step, index) => (
                        <motion.div 
                            key={step.id} 
                            className="flex flex-col items-center group cursor-default"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* Icon Container */}
                            <div className="mb-5 text-[#FFA273] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                                {step.icon}
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-lg md:text-xl font-serif font-bold text-[#1F2937] mb-2 leading-tight">
                                {step.title}
                            </h3>
                            
                            {/* Subtitle */}
                            <p className="text-xs md:text-sm text-gray-500 font-[Montserrat] max-w-[150px] leading-relaxed">
                                {step.subtitle}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}