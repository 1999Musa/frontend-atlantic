import React, { useState } from "react";
import { motion } from "framer-motion";

const steps = [
    { num: "01", title: "Choose Your Product", text: "Select from our range of premium styles or define your own custom needs." },
    { num: "02", title: "Create Your Account", text: "Sign up to track your orders and manage your account details easily." },
    { num: "03", title: "Email Your Requirements", text: "Send us your tech packs, sketches, or reference images for review." },
    { num: "04", title: "Submit Designs or Pick From Studio", text: "We will review your custom designs or help you pick from our catalog." },
    { num: "05", title: "Get Techpack Support", text: "We can help analyze and refine your tech packs for production." },
    { num: "06", title: "Request Pricing & MOQ", text: "Ask for competitive pricing quotes and minimum order quantity details." },
    { num: "07", title: "Receive Your Sample", text: "We create a prototype for your approval before bulk manufacturing." },
    { num: "08", title: "Approve & Place Bulk Order", text: "Once satisfied, approve the sample and we begin mass production." },
];

const OrderTermsData = [
    {
        title: "Legal Documentation",
        text: "All orders are secured through a formal sales contract outlining pricing, product specs, and timelines.",
        btn: "Demo sales contract",
        img: "/assets/images/sustainability/materials.png",
        pdf: "/assets/pdf/SampleContract-Shuttle.pdf",
    },
    {
        title: "Payment Terms",
        text: "Our payment structure is simple and transparent:\n\n1. Advance Payment:\n30% advance payment is required at the time of signing the sales contract.\n\n2. Final Payment:\nThe remaining balance must be paid within 15 days from the date you receive the goods.",
        btn: null,
        img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "Delivery Terms",
        text: "1. Lead Time:\nStandard production lead time is 120 days from the date of signing the sales contract.\n\n2. DDP Pricing:\nAll prices are DDP (Delivered Duty Paid) — this includes sea shipping, import duty, port charges, and trucking.\n\n3. Air Shipment (Optional):\nDifferent DDP rates apply for air shipments.\n\n4. Small or Urgent Quantities:\nFor urgent small orders, we can ship via FedEx or DHL.",
        btn: null,
        img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600",
    }
];

const Main = () => {
    const [showPdfPreview, setShowPdfPreview] = useState(false);

    return (
        <div className="w-full font-[Montserrat] overflow-x-hidden">

            {/* PDF Preview Modal */}
            {showPdfPreview && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg w-full max-w-4xl h-[80vh] flex flex-col shadow-2xl">
                        <div className="flex justify-between items-center p-4 border-b">
                            <h3 className="text-xl font-semibold text-gray-800">Sample Sales Contract Preview</h3>
                            <button
                                onClick={() => setShowPdfPreview(false)}
                                className="text-gray-500 hover:text-gray-700 text-2xl cursor-pointer"
                            >
                                ✕
                            </button>
                        </div>
                        <iframe
                            src="/assets/pdf/SampleContract-Shuttle.pdf"
                            className="flex-1 w-full"
                            title="Sample Contract"
                        />
                    </div>
                </div>
            )}

            {/* ---------------- HERO SECTION ---------------- */}
            <div className="relative h-[400px] w-full flex items-center justify-center">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523275335684-37898b6baf30')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <h1 className="relative z-10 text-5xl md:text-6xl font-bold text-white drop-shadow-lg tracking-wide">
                    Place Your Order
                </h1>
            </div>

            {/* ---------------- ORDERING PROCESS (Timeline) ---------------- */}
            <div className="bg-[#F8F9FA] py-24 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="text-4xl md:text-5xl font-serif text-[#1F2937]">Our Ordering Process</h1>
                        <p className="text-gray-500 mt-4 text-sm uppercase tracking-widest">A simple step-by-step process — from design to delivery.</p>
                    </div>

                    <div className="relative">
                        {/* Dashed Center Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-gray-500 -translate-x-1/2 hidden md:block"></div>

                        <div className="flex flex-col gap-12 md:gap-24">
                            {steps.map((step, i) => {
                                const isEven = i % 2 === 0;
                                return (
                                    <div key={i} className={`flex flex-col md:flex-row items-center md:justify-between w-full ${isEven ? "" : "md:flex-row-reverse"}`}>

                                        {/* Empty Space for alignment on desktop */}
                                        <div className="w-full md:w-5/12 hidden md:block"></div>

                                        {/* Center Bubble (Number) on the line */}
                                        <div className="z-10 bg-[#1F2937] text-[#FFA273] w-15 h-15 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg border-4 border-[#F8F9FA] absolute left-1/2 -translate-x-1/2">
                                            {i + 1}
                                        </div>

                                        {/* Card Content */}
                                        <motion.div
                                            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                            className="w-full md:w-5/12 relative"
                                        >
                                            <div className="bg-[#1F2937] p-8 rounded-lg shadow-xl relative text-white group hover:-translate-y-1 transition-transform duration-300">
                                                {/* Orange Number on Left */}
                                                <div className="flex gap-6">
                                                    <span className="text-[#FFA273] text-4xl font-bold opacity-90 flex-shrink-0">
                                                        {step.num}
                                                    </span>

                                                    <div className="flex-1">
                                                        <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                                                        <p className="text-gray-300 text-sm leading-relaxed">
                                                            {step.text}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* ---------------- ORDER TERMS (Dark Section) ---------------- */}
            <div className="w-full bg-[#1F2937] text-gray-200 py-24 px-6 md:px-12">
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-serif text-white">
                            Order <span className="text-[#D97757]">Terms</span>
                        </h2>
                        <p className="text-gray-400 mt-4 text-sm uppercase tracking-widest">
                            A simple step-by-step process — from design to delivery.
                        </p>
                    </div>

                    {/* Terms Content Blocks */}
                    <div className="space-y-24">
                        {OrderTermsData.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                            >
                                {/* Text Side */}
                                <div className="flex-1 space-y-6">
                                    <h3 className="text-3xl font-semibold text-white">{item.title}</h3>
                                    <p className="text-gray-300 leading-relaxed whitespace-pre-line text-sm md:text-base">
                                        {item.text}
                                    </p>
                                    {item.btn && (
                                        <button
                                            onClick={() => setShowPdfPreview(true)}
                                            className="bg-white text-[#1F2937] px-6 py-2.5 rounded font-semibold text-sm hover:bg-gray-300 transition-colors mt-4 inline-block cursor-pointer"
                                        >
                                            {item.btn}
                                        </button>
                                    )}
                                </div>

                                {/* Image Side */}
                                <div className="flex-1 w-full">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[300px] md:h-[350px] w-full">
                                        <img
                                            src={i === 0 ? "/assets/images/sustainability/materials.png" : item.img}
                                            alt={item.title}
                                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Main;