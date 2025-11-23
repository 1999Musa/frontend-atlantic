// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const FiveReason = () => {
  const reasons = [
    {
      id: "01",
      title: "Skilled",
      subtitle: "Workforce",
      description: "Large pool of experienced garment workers.",
      image: "/assets/images/whyChooseArbella/reason1.jpg",
      size: "large",
      imagePosition: "right",
    },
    {
      id: "02",
      title: "Cost-Effective",
      subtitle: "Labor",
      description: "Competitive pricing without compromising quality.",
      image: "/assets/images/whyChooseArbella/reason2.jpg",
      
      size: "small",
      imagePosition: "left",
    },
    {
      id: "03",
      title: "Strong",
      subtitle: "Infrastructure",
      description: "Modern factories and efficient supply chains.",
      image: "/assets/images/whyChooseArbella/reason3.jpg",
      size: "large",
      imagePosition: "right",
    },
    {
      id: "04",
      title: "Diverse",
      subtitle: "Product Range",
      description: "From basic wear to high-fashion apparel.",
      image: "/assets/images/whyChooseArbella/reason4.jpg",
      size: "small",
      imagePosition: "left",
    },
    {
      id: "05",
      title: "Export-Driven",
      subtitle: "Economy",
      description: "Backed by policies aligned with global standards.",
      image: "/assets/images/whyChooseArbella/reason5.jpg",
      size: "large",
      imagePosition: "right",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-12 md:py-16 lg:py-20 font-[Montserrat] overflow-hidden">
      {/* Header */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16 lg:mb-20 overflow-hidden"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-[IvyPresto_Headline] text-center leading:3 md:leading-20"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <span style={{ color: "#FFA475" }}>5 Reasons</span> to Choose
          Bangladesh for <br />
          Garment <span style={{ color: "#FFA475" }}>Production</span>
        </motion.h2>
      </motion.div>

      {/* Reasons List */}
      <div className="space-y-16 md:space-y-20 lg:space-y-24 overflow-hidden">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.id}
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
          >
            {reason.imagePosition === "right" ? (
              // Text Left, Image Right
              <div className="flex flex-col lg:flex-row items-center">
                <motion.div
                  className="w-full lg:w-auto lg:flex-1 px-8 md:px-12 lg:pl-20 xl:pl-32 lg:pr-12 xl:pr-16 mb-8 lg:mb-0"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <motion.div
                    className="text-3xl md:text-4xl font-medium mb-4"
                    style={{ color: "#FFA475" }}
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    {reason.id}
                  </motion.div>
                  <motion.h3
                    className="text-3xl md:text-4xl font-[IvyPresto_Headline] mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.6 + index * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    <span style={{ color: "#FFA475" }}>{reason.title}</span>{" "}
                    <span className="text-[#000]">{reason.subtitle}</span>
                  </motion.h3>
                  <motion.p
                    className="text-base md:text-xl text-[#293037] max-w-md"
                    initial={{ y: 15, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.7 + index * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    {reason.description}
                  </motion.p>
                </motion.div>
                <motion.div
                  className="w-full lg:w-auto flex-shrink-0"
                  style={{
                    width: reason.size === "large" ? "739px" : "456px",
                    maxWidth: "100%",
                    height: reason.size === "large" ? "599px" : "322px",
                    backgroundImage: `url('${reason.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  initial={{ x: 50, opacity: 0, scale: 0.9 }}
                  whileInView={{ x: 0, opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4 + index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                />
              </div>
            ) : (
              // Image Left, Text Right
              <div className="flex flex-col lg:flex-row-reverse items-center lg:justify-between">
                <motion.div
                  className="w-full lg:w-auto lg:flex-1 lg:max-w-7xl px-8 md:px-12 lg:pl-24 xl:pl-110 mb-8 lg:mb-0"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <motion.div
                    className="text-3xl md:text-4xl font-medium mb-4"
                    style={{ color: "#FFA475" }}
                    initial={{ scale: 0, rotate: 45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    {reason.id}
                  </motion.div>
                  <motion.h3
                    className="text-3xl md:text-4xl font-[IvyPresto_Headline] mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.6 + index * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    <span style={{ color: "#FFA475" }}>{reason.title}</span>{" "}
                    <span className="text-[#000]">{reason.subtitle}</span>
                  </motion.h3>
                  <motion.p
                    className="text-base md:text-xl text-[#293037] max-w-md"
                    initial={{ y: 15, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.7 + index * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    {reason.description}
                  </motion.p>
                </motion.div>
                <motion.div
                  className="w-full lg:w-auto flex-shrink-0"
                  style={{
                    width: reason.size === "large" ? "739px" : "456px",
                    maxWidth: "100%",
                    height: reason.size === "large" ? "599px" : "322px",
                    backgroundImage: `url('${reason.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  initial={{ x: -50, opacity: 0, scale: 0.9 }}
                  whileInView={{ x: 0, opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4 + index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FiveReason;
