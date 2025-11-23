// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Newsletter = () => {
  const handleButtonClick = () => {
    window.location.href = "/contact-us";
  };

  return (
    <section
      className="w-full flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(255, 164, 117, 0.77) 0%, rgba(255, 164, 117, 0.77) 100%), url('/assets/images/common/newsletterBG.jpg')`,
        minHeight: "269px",
        padding: "60px 20px",
        gap: "47px",
      }}
    >
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-[IvyPresto_Headline] text-center text-white px-4"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      >
        Join us as a partner.
      </motion.h2>
      <motion.button
        className="flex justify-center items-center w-[180px] h-[50px] sm:w-[232px] sm:h-[55px] border-2 border-white bg-transparent text-white font-[Montserrat] text-base sm:text-xl font-semibold hover:bg-white hover:text-[#FFA273] transition-all duration-300 cursor-pointer"
        onClick={handleButtonClick}
        initial={{ y: 30, opacity: 0, scale: 0.9 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.6,
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
        whileHover={{
          scale: 1.05,
          y: -2,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.95 }}
      >
        Contact Us
      </motion.button>
    </section>
  );
};

export default Newsletter;
