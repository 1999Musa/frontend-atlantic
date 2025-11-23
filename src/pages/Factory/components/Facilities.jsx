// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Facilities = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20 font-[Montserrat] overflow-hidden">
      {/* Header */}
      <motion.div
        className="text-center mb-12 md:mb-16 lg:mb-28 px-4 overflow-hidden"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-[IvyPresto_Headline] mb-4"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <span style={{ color: "#FFA475" }}>Employee</span>{" "}
          <span className="text-[#000]">Facilities</span>
        </motion.h2>
        <motion.p
          className="text-base md:text-xl text-[#293037] max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          Arbella goes beyond compliance to create a{" "}
          <br className="hidden md:block" />
          supportive environment for its workforce.
        </motion.p>
      </motion.div>

      {/* Daycare Facility Section */}
      <motion.div
        className="mb-16 md:mb-20 lg:mb-24 overflow-hidden"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-full mx-auto px-4 sm:px-0 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
            {/* Left - Text */}
            <motion.div
              className="w-full lg:w-1/2 md:pl-30"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <motion.h3
                className="text-3xl md:text-4xl font-[IvyPresto_Headline] text-[#000] mb-4 md:mb-6"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              >
                Daycare Facility
              </motion.h3>
              <motion.p
                className="text-base md:text-xl text-[#707070] leading-relaxed"
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
              >
                On-site daycare ensures our workers' children are cared for
                while they work.
              </motion.p>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              className="w-full lg:w-1/2 flex justify-end"
              initial={{ x: 50, opacity: 0, scale: 0.95 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <motion.div
                className="h-64 sm:h-80 md:h-[599px] lg:h-[599px] w-full lg:w-[739px]"
                style={{
                  backgroundImage:
                    "url('/assets/images/factory/facilities1.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Security Section */}
      <motion.div
        className="mb-16 md:mb-20 lg:mb-24 overflow-hidden"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
      >
        <div className="w-full mx-auto px-4 sm:px-0 overflow-hidden">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 xl:gap-16">
            {/* Right - Text */}
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <motion.h3
                className="text-3xl md:text-4xl font-[IvyPresto_Headline] text-[#000] mb-4 md:mb-6"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              >
                Security
              </motion.h3>
              <motion.p
                className="text-base md:text-xl text-[#707070] leading-relaxed"
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7, ease: "easeOut" }}
              >
                24/7 security systems and strict access{" "}
                <br className="hidden md:block" /> control to protect people and
                goods.
              </motion.p>
            </motion.div>

            {/* Left - Image */}
            <motion.div
              className="w-full lg:w-1/2 flex justify-start"
              initial={{ x: -50, opacity: 0, scale: 0.95 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <motion.div
                className="h-80 sm:h-[420px] md:h-[420px] lg:h-[420px] w-full lg:w-[520px]"

                style={{
                  backgroundImage:
                    "url('/assets/images/factory/facilities2.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Canteen Section */}
      <motion.div
        className="overflow-hidden"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <div className="w-full mx-auto px-4 sm:px-0 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
            {/* Left - Text */}
            <motion.div
              className="w-full lg:w-1/2 md:pl-30"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <motion.h3
                className="text-3xl md:text-4xl font-[IvyPresto_Headline] text-[#000] mb-4 md:mb-6"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              >
                Canteen
              </motion.h3>
              <motion.p
                className="text-base md:text-xl text-[#707070] leading-relaxed"
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
              >
                Hygienic, subsidized meals provided{" "}
                <br className="hidden md:block" /> daily to support employee
                wellbeing.
              </motion.p>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              className="w-full lg:w-1/2 flex justify-end"
              initial={{ x: 50, opacity: 0, scale: 0.95 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              <motion.div
                className="h-64 sm:h-80 md:h-[599px] lg:h-[599px] w-full lg:w-[739px]"
                style={{
                  backgroundImage:
                    "url('/assets/images/factory/facilities3.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Facilities;
