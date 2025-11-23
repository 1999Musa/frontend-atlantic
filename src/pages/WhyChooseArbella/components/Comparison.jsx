// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";

const Comparison = () => {
  const [showSecondImage, setShowSecondImage] = useState(false);

  const handleInView = () => {
    if (!showSecondImage) {
      setTimeout(() => {
        setShowSecondImage(true);
      }, 1500);
    }
  };

  return (
    <section className="w-full bg-[#F7FDFF] py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.h2
          className="text-center font-[IvyPresto_Headline] text-[#000] text-2xl md:text-3xl lg:text-4xl font-light leading-8 md:leading-[78.313px]"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          LABOR COST <span className="text-[#FFA475]">COMPARISON (2025)</span>
        </motion.h2>

        {/* Chart Image */}
        <motion.div
          className="flex justify-center pl-0 md:pl-20 pt-10"
          initial={{ y: 60, opacity: 0, scale: 0.9 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.0, delay: 0.3, ease: "easeOut" }}
          onViewportEnter={handleInView}
        >
          <div className="relative w-full h-auto max-w-xs md:w-[600px] md:h-[574px] md:max-w-none">
            {/* First Image */}
            <img
              src="/assets/images/whyChooseArbella/Spendings.png"
              alt="Labor Cost Comparison Chart - Initial"
              className="w-full h-auto transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: showSecondImage ? 0 : 1,
                position: "absolute",
                top: 0,
                left: 0,
              }}
            />
            {/* Second Image */}
            <img
              src="/assets/images/whyChooseArbella/Spendings2.png"
              alt="Labor Cost Comparison Chart - Updated"
              className="w-full h-auto transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: showSecondImage ? 1 : 0,
                position: "relative",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;
