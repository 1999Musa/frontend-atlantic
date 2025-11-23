// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Approach = () => {
  return (
    <section
      className="w-full pb-12 md:py-16 lg:py-20 font-[Montserrat] overflow-hidden"
      style={{ backgroundColor: "#F7FDFF" }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16 lg:mb-20 overflow-hidden"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-[64px] font-[IvyPresto_Headline] mb-4"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Sustainability at <span style={{ color: "#FFA475" }}>Arbella</span>
          </motion.h2>
          <motion.p
            className="text-base md:text-xl text-[#293037] max-w-xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          >
            Building a responsible future through eco-friendly materials,
            ethical production, and environmental care.
          </motion.p>
        </motion.div>

        {/* Materials Section */}
        <motion.div
          className="mb-16 md:mb-20 lg:mb-24 overflow-hidden"
          style={{ borderTop: "1px solid #000" }}
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 overflow-hidden">
            {/* Left - Text */}
            <motion.div
              className="w-full lg:w-1/2 mt-1.5"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <motion.h3
                className="text-3xl md:text-[32px] font-[IvyPresto_Headline] text-[#000] mb-6"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              >
                Materials
              </motion.h3>
              <motion.p
                className="text-base md:text-xl text-[#293037] leading-[44px] mb-8"
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              >
                "We work closely with Oeko-Tex® certified suppliers, carefully
                sourcing organic and sustainable materials to offer our buyers a
                wide range of eco-friendly fabric options. Every fabric is
                chosen with responsibility, reducing harm to people and the
                environment."
              </motion.p>

              {/* Certification Logos */}
              <motion.div
                className="flex flex-wrap items-center gap-4 md:gap-6"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              >
                {[
                  "/assets/images/sustainability/materialsLogo1.png",
                  "/assets/images/sustainability/materialsLogo2.png",
                  "/assets/images/sustainability/materialsLogo3.png",
                  "/assets/images/sustainability/materialsLogo4.png",
                ].map((src, index) => (
                  <motion.img
                    key={index}
                    src={src}
                    alt={`Certification ${index + 1}`}
                    className={index === 0 ? "h-16 md:h-24" : "h-16 md:h-20"}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.8 + index * 0.1,
                      ease: "easeOut",
                    }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              className="w-full lg:w-1/2 flex justify-end"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <motion.div
                style={{
                  width: "585px",
                  maxWidth: "100%",
                  height: "473px",
                  backgroundImage:
                    "url('/assets/images/sustainability/materials.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Planting Tree's Section */}
        <motion.div
          className="mb-16 md:mb-20 lg:mb-24 overflow-hidden"
          style={{ borderTop: "1px solid #000" }}
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 overflow-hidden">
            {/* Left - Image */}
            <motion.div
              className="w-full lg:w-1/2 flex justify-start"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <motion.div
                style={{
                  width: "585px",
                  maxWidth: "100%",
                  height: "473px",
                  backgroundImage:
                    "url('/assets/images/sustainability/plant.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              />
            </motion.div>

            {/* Right - Text */}
            <motion.div
              className="w-full lg:w-1/2 mt-1.5 lg:pl-14"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <motion.h3
                className="text-3xl md:text-[32px] font-[IvyPresto_Headline] text-[#000] mb-6"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              >
                Planting Tree's
              </motion.h3>
              <motion.p
                className="text-base md:text-xl text-[#293037] leading-[44px] mb-8"
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              >
                As part of our sustainability practices, our factories reuse
                fabric waste, operate energy-saving machinery to reduce overall
                consumption, and ensure garments are produced with minimal
                waste. Beyond production, we actively encourage our stakeholders
                to plant trees—contributing to a healthier environment for
                future generations.
              </motion.p>

              {/* Logo */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
              >
                <motion.img
                  src="/assets/images/sustainability/plantingLogo1.png"
                  alt="Global Recycled Standard"
                  className="h-16 md:h-20"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Manufacturing Section */}
        <motion.div
          className="overflow-hidden"
          style={{ borderTop: "1px solid #000" }}
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 overflow-hidden">
            {/* Left - Text */}
            <motion.div
              className="w-full lg:w-1/2 mt-1.5"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <motion.h3
                className="text-3xl md:text-[32px] font-[IvyPresto_Headline] text-[#000] mb-6"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              >
                Manufacturing
              </motion.h3>
              <motion.p
                className="text-base md:text-xl text-[#293037] leading-[44px] mb-8"
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              >
                We partner with factories committed to responsible
                manufacturing—ensuring fair wages, safe working conditions, and
                actively reducing environmental impact throughout the production
                process. Every garment we produce reflects our values of
                quality, responsibility, and care.
              </motion.p>

              {/* Logos */}
              <motion.div
                className="flex flex-wrap items-center gap-4 md:gap-6"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              >
                {[
                  "/assets/images/sustainability/materialsLogo4.png",
                  "/assets/images/sustainability/manufactureLogo.png",
                ].map((src, index) => (
                  <motion.img
                    key={index}
                    src={src}
                    alt={index === 0 ? "WRAP" : "RSC"}
                    className="h-16 md:h-20"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.8 + index * 0.1,
                      ease: "easeOut",
                    }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              className="w-full lg:w-1/2 flex justify-end"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <motion.div
                style={{
                  width: "585px",
                  maxWidth: "100%",
                  height: "473px",
                  backgroundImage:
                    "url('/assets/images/sustainability/manufacture.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Approach;
