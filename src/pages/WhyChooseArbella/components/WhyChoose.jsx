import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const WhyChoose = () => {
  return (
    <section className="relative bg-[#F6FAFC] py-24 overflow-hidden font-[montserrat]">
      {/* Top Left Background Image */}
      <motion.div
        className="absolute top-0 -left-20 w-[410px] h-[382px] opacity-30"
        style={{
          background:
            "url('/assets/images/whyChooseArbella/sewingmachine.png') center/cover no-repeat",
        }}
        initial={{ x: -100, opacity: 0, rotate: -10 }}
        animate={{ x: 0, opacity: 0.3, rotate: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className='font-["IvyPresto_Headline"] text-[48px] md:text-[64px] font-normal leading-[60px] tracking-[-0.7px] text-[#2C2C2C] mb-5'
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            Why Choose <span className="text-[#FFA273]">Arbella?</span>
          </motion.h2>
          <motion.p
            className="mt-2 text-[#4B4B4B] text-[18px] md:text-[20px] leading-[28px] max-w-[760px] mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            From precision cutting to community care — Arbella combines quality,
            safety, and ethics in every step.
          </motion.p>
        </motion.div>

        {/* Subheading Row */}
        <motion.div
          className="flex justify-between items-end mb-16"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <motion.h3
              className='font-["IvyPresto_Headline"] text-[36px] md:text-[48px] font-normal leading-[46px] text-[#2C2C2C]'
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            >
              Maximum Value, <br />
              <span className="text-[#FFA273]">Minimum Cost</span>
            </motion.h3>
          </motion.div>
          <motion.p
            className="text-[#4B4B4B] text-[16px] leading-[26px] max-w-[380px]"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            Work factory-direct and save more on every order — without
            compromising quality.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-10 lg:gap-40"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          {/* Left Image */}
          <motion.div
            className="w-full lg:w-[610px] h-[300px] lg:h-[553.34px] flex-shrink-0"
            initial={{ x: -50, opacity: 0, scale: 0.95 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <motion.img
              src="/assets/images/whyChooseArbella/whyArbella.jpg"
              alt="Why Arbella"
              className="w-full h-full object-cover rounded-md"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            />
          </motion.div>

          {/* Right Text */}
          <motion.div
            className="flex flex-col justify-center gap-10 lg:gap-20 mt-6"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          >
            {/* Item 1 */}
            <motion.div
              className="flex items-start lg:items-center gap-4 lg:gap-6"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
              whileHover={{ x: 10, transition: { duration: 0.2 } }}
            >
              <motion.span
                className="text-[#FFA273] text-[30px] lg:text-[50px] font-bold leading-[30px] lg:leading-[46px] font-sans flex items-center"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 1.0,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                01
              </motion.span>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.1, ease: "easeOut" }}
              >
                <h4 className="text-[#2C2C2C] text-[16px] lg:text-[20px] font-semibold leading-[24px] lg:leading-[28px]">
                  Direct Manufacturer
                </h4>
                <p className="text-[#4B4B4B] text-[14px] lg:text-[16px] leading-[22px] lg:leading-[26px] max-w-[400px]">
                  No buying agent commission — you deal directly with us.
                </p>
              </motion.div>
            </motion.div>

            {/* Item 2 */}
            <motion.div
              className="flex items-start lg:items-center gap-4 lg:gap-6"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
              whileHover={{ x: 10, transition: { duration: 0.2 } }}
            >
              <motion.span
                className="text-[#FFA273] text-[30px] lg:text-[50px] font-bold leading-[30px] lg:leading-[46px] font-sans flex items-center"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 1.1,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                02
              </motion.span>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.2, ease: "easeOut" }}
              >
                <h4 className="text-[#2C2C2C] text-[16px] lg:text-[20px] font-semibold leading-[24px] lg:leading-[28px]">
                  No Importer Markups
                </h4>
                <p className="text-[#4B4B4B] text-[14px] lg:text-[16px] leading-[22px] lg:leading-[26px] max-w-[400px]">
                  We handle the importing process ourselves.
                </p>
              </motion.div>
            </motion.div>

            {/* Item 3 */}
            <motion.div
              className="flex items-start lg:items-center gap-4 lg:gap-6"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
              whileHover={{ x: 10, transition: { duration: 0.2 } }}
            >
              <motion.span
                className="text-[#FFA273] text-[30px] lg:text-[50px] font-bold leading-[30px] lg:leading-[46px] font-sans flex items-center"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 1.2,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                03
              </motion.span>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.3, ease: "easeOut" }}
              >
                <h4 className="text-[#2C2C2C] text-[16px] lg:text-[20px] font-semibold leading-[24px] lg:leading-[28px]">
                  Lower Labor Costs
                </h4>
                <p className="text-[#4B4B4B] text-[14px] lg:text-[16px] leading-[22px] lg:leading-[26px] max-w-[400px]">
                  Compared to China, Vietnam, and India — allowing you to get
                  better margins.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;
