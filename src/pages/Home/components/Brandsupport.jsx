import React from 'react';
import { motion } from "framer-motion";

const services = [
    {
        title: "Design And More",
        description: "Technical Drawing, custom Sizing, grading Trims designing,",
        // Icon: Art Palette & Brush
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 ">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.22 16.66c-.57.21-1.18.34-1.8.34-.65 0-1.27-.13-1.85-.35v-2.92c0-.73-.59-1.33-1.32-1.33-.74 0-1.34.6-1.34 1.33v2.92c-.58.22-1.19.35-1.85.35-.62 0-1.23-.13-1.8-.34-.56.2-1.13.34-1.72.34-.63 0-1.24-.14-1.83-.35-.43-1.38.06-2.97 1.38-3.4l2.84-1.03c.49-.18.81-.65.81-1.17v-1.33c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v1.33c0 .52.32.99.81 1.17l2.84 1.03c1.32.43 1.81 2.02 1.38 3.4zm-2.17-9.6l-.98 2.92c-.11.33.01.7.31.88.3.18.68.13.93-.12l2.24-2.24c.35-.35.35-.92 0-1.27L15.05 9.06zm-8.5 2.92l-.98-2.92-2.24 2.24c-.35.35-.35.92 0 1.27l2.24 2.24c.25.25.63.3.93.12.3-.18.42-.55.31-.88zm4.25-4.94c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5z" />
            </svg>
        ),
    },
    {
        title: "Fabrics And Trim Sourcing",
        description: "Choose from our Knit, Woven, Sustainable, Organic hemp/cotton Fabrics",
        // Icon: Fabric Swatches
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16zM6 6h12v2H6V6zm0 4h12v2H6v-2zm0 4h8v2H6v-2zm0 4h6v2H6v-2z" />
            </svg>
        ),
    },
    {
        title: "Labels & Tags",
        description: "Customized Label, Hang Tags, Care Labels, Size Label",
        // Icon: Tag
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                <path d="M19.41 7.41l-5.82-5.82C13.22 1.22 12.71 1 12.17 1H4C2.9 1 2 1.9 2 3v8.17c0 .53.21 1.04.59 1.41l5.82 5.82c.37.37.88.59 1.41.59.53 0 1.04-.21 1.41-.59l8.17-8.17c.37-.37.59-.88.59-1.41 0-.53-.21-1.04-.59-1.41zM12 16l-6-6V4h6l6 6-6 6zm-2-8c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" />
            </svg>
        ),
    },
    {
        title: "Sampling Service",
        description: "Prototype, Fit Sample, Pre-Production Sample",
        // Icon: Test Tube & Beaker
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                <path d="M19.66 3.99c-.1-.08-.21-.15-.33-.21l-1.78-.89C17.23 2.74 16.9 2.93 16.9 3.3V7h-2.67V3.3c0-.37-.33-.56-.65-.4l-1.78.89c-.12.06-.23.13-.33.21-.29.22-.47.57-.47.95V18c0 .38-.31.69-.69.69H9.7c-.38 0-.69-.31-.69-.69V5.75c1.03-.27 1.79-1.21 1.79-2.32V2.31C10.8 1.6 10.22 1 9.5 1h-5c-.72 0-1.3.6-1.3 1.31v1.12c0 1.11.76 2.05 1.79 2.32V18c0 1.11.89 2 2 2h.62c.38 0 .69.31.69.69V21c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-.31c0-.38.31-.69.69-.69h.62c1.11 0 2-.89 2-2V4.95c0-.39-.18-.73-.47-.96zm-4.54 14.93c-.38 0-.69.31-.69.69V21h-2v-.69c0-.38-.31-.69-.69-.69h-.62c-.38 0-.69-.31-.69-.69V5.75c.62-.17 1.11-.64 1.32-1.25h3.36c.21.61.7 1.08 1.32 1.25V18c0 .38-.31.69-.69.69h-.62zm-11.8-15.5h3v1h-3z" />
            </svg>
        ),
    },
    {
        title: "Production Services",
        description: "Pattern, Cut & Sew, Embroidery, Printing, Partnering with certified factory",
        // Icon: Factory/Production Line
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                <path d="M14.07 11.21l-3.08-2.03 1.33-1.33c.55-.55 1.42-.55 1.97 0l.66.66c.55.55.55 1.42 0 1.97l-1.88 1.88 1.33 1.33-2.02 3.08-2.08-3.15zm-2.07-2.08l-1.33 1.33 1.88 1.88-1.33 1.33-2.08-3.15-2.08 3.15 2.02 3.08-1.33 1.33L6 16.23l-.66-.66c-.55-.55-.55-1.42 0-1.97l1.88-1.88-1.33-1.33c-.55.55-1.42.55-1.97 0l-.66-.66c-.55-.55-.55-1.42 0-1.97l1.88-1.88-1.33-1.33 2.02-3.08 2.08 3.15 2.08-3.15-2.02-3.08 1.33-1.33 1.88 1.88 1.33 1.33c.55-.55 1.42-.55 1.97 0l.66.66c.55.55.55 1.42 0 1.97l-1.88 1.88 1.33 1.33c.55-.55 1.42-.55 1.97 0l.66.66c.55.55.55 1.42 0 1.97l-1.88 1.88 1.33 1.33 2.02 3.08zM22 17h-8v-2h8v2zm0-4h-6v-2h6v2zm0 8h-4v-2h4v2z" />
            </svg>
        ),
    },
    {
        title: "Quality Control",
        description: "Sample quality check, Inline Inspection, Finishing QC, Final inspection report",
        // Icon: Award Ribbon/Badge
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                <path d="M12 2l-3.09 6.26L2 9.27l4.91 4.79L5.74 21 12 17.71 18.26 21l-1.17-6.94L22 9.27l-6.91-.99L12 2zm0 2.19l2.18 4.43 4.89.7-3.54 3.45.84 4.87L12 15.27l-4.37 2.37.84-4.87-3.54-3.45 4.89-.7L12 4.19z" />
            </svg>
        ),
    },
    {
        title: "Packaging & Delivery",
        description: "Customized polybag, Carton, Recyclable, Biodegradable",
        // Icon: Box with Checkmark
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                <path d="M20 8H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H4V10h16v10zm-4.59-5.59l-3-3 1.41-1.41 1.59 1.59 4.59-4.59 1.41 1.41-6 6zM6 12h2v2H6v-2zm0 4h2v2H6v-2zM16 4H8C8 2.9 8.9 2 10 2h4c1.1 0 2 .9 2 2zm4 4H4l2-4h12l2 4z" />
            </svg>
        ),
    },
    {
        title: "Sustainability Support",
        description: "Biodegradable, Ecofriendly fabrics, Trims from maintaining green supply chain",
        // Icon: Recycle Arrows & Leaf
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                <path d="M8.46 11.46L7.05 10.05l1.21-1.21c.61-.61.61-1.6 0-2.21-.61-.61-1.6-.61-2.21 0l-1.21 1.21L3.41 6.41c-.78-.78-.78-2.05 0-2.83.78-.78 2.05-.78 2.83 0l2.21 2.21 1.41 1.41 1.41-1.41L8.46 11.46zM10 20h4c1.1 0 2-.9 2-2v-1.17l-2 2V18H6v-3.17l-2-2V18c0 1.1.9 2 2 2h4v2h2v-2zm2-14c1.1 0 2 .9 2 2v1.17l2-2V10h4v3.17l2 2V10c0-1.1-.9-2-2-2h-4V6h-2v2zm5.66 8.83l1.41 1.41-2.22 2.22c-.78.78-2.05.78-2.83 0-.78-.78-.78-2.05 0-2.83l2.22-2.22-1.41-1.41-1.41 1.41c-.61.61-.61 1.6 0 2.21.61.61 1.6.61 2.21 0l2.03-2.03z" />
            </svg>
        ),
    },
];

const Services = () => {
    return (
        <section className="relative w-full py-20 md:py-0 overflow-hidden bg-[#f7fdff]">

            {/* ---------------- BACKGROUND IMAGE ---------------- */}
            {/* <div className="absolute inset-0 z-0 pointer-events-none">
                <img
                    src="/assets/images/factory/productionBG.png"
                    alt="Background Texture"
                    className="w-full h-full object-cover opacity-[0.04] grayscale mix-blend-multiply"
                />
            </div> */}

            <div className="relative z-10 max-w-8xl mx-auto px-1 sm:px-4 lg:px-6"> {/* Adjusted max-width and padding */}

                {/* ---------------- TITLE ---------------- */}
                <motion.div
                    className="text-center mb-10 md:mb-15"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-[IvyPresto_Headline] font-serif text-[#1F2937]">
                        A to Z <span className="text-[#FFA273]">Brand Support</span>
                    </h2>
                </motion.div>

                {/* ---------------- CARDS GRID ---------------- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 ">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            className="
                                    w-[294px] 
                                    h-[210px] 
                                    mx-auto 
                                    bg-[#f7fdff]
                                    rounded-xl 
                                    p-6 
                                    flex flex-col items-center text-center
                                    border border-gray-200
                                    shadow-[0_4px_12px_rgba(0,0,0,0.08)]
                                    hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]
                                    transition-all duration-300 
                                "
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                        >
                            {/* Icon - small top spacing */}
                            <div className="mb-1 text-[#FFA273] transition-transform duration-300 hover:scale-110">
                                {service.icon}
                            </div>

                            {/* Title - one line only */}
                            <h3 className="text-xl font-bold font-serif text-[#1F2937] mb-1 leading-tight whitespace-nowrap">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-500 font-[Inter] text-sm leading-relaxed line-clamp-3">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;