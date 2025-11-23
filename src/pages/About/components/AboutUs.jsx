// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="w-full bg-[#F7FDFF] py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-[IvyPresto_Headline] text-[#000] mb-4"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            About <span style={{ color: "#FFA475" }}>Us</span>
          </motion.h1>
          <motion.p
            className="text-base md:text-lg text-[#293037] max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          >
            From precision cutting to community care — Arbella combines quality,
            safety, and ethics in every step.
          </motion.p>
        </motion.div>

        {/* Who We Are Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[260px] items-center mb-16 md:mb-20 lg:mb-24"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          {/* Left Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-[IvyPresto_Headline] text-[#293037] mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            >
              <span style={{ color: "#FFA475" }}>Who</span> We Are
            </motion.h2>
            <motion.p
              className="text-base md:text-lg text-[#4B4B4B] leading-relaxed"
              initial={{ y: 15, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            >
              Arbella Fashion Ltd. is a garment manufacturer based in Bangladesh, delivering complete sourcing and production solutions -- from concept to delivery.
            </motion.p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative w-full rounded-lg overflow-hidden h-64 sm:h-80 lg:h-[433px]"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 44, 66, 0.20) 0%, rgba(0, 44, 66, 0.20) 100%), url('/assets/images/about/WhoWeAre.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ x: 50, opacity: 0, scale: 0.95 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          />
        </motion.div>

        {/* Our Philosophy Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[260px] items-center"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          {/* Left Image */}
          <motion.div
            className="relative w-full rounded-lg overflow-hidden order-2 lg:order-1 h-64 sm:h-80 lg:h-[431px]"
            style={{
              width: "100%",
              maxWidth: "599px",
              backgroundImage: `linear-gradient(0deg, rgba(0, 44, 66, 0.20) 0%, rgba(0, 44, 66, 0.20) 100%), url('/assets/images/about/OurPhilosophy.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ x: -50, opacity: 0, scale: 0.95 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          />

          {/* Right Content */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-[IvyPresto_Headline] text-[#293037] mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            >
              Our <span style={{ color: "#FFA475" }}>Philosophy</span>
            </motion.h2>
            <motion.p
              className="text-base md:text-lg text-[#4B4B4B] leading-relaxed"
              initial={{ y: 15, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            >
              We believe high-quality clothing should be within everyone's reach. Great garments aren't a privilege — they're a standard everyone deserves.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
