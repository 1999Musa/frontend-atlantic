import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [heroImage, setHeroImage] = useState("");

  useEffect(() => {
    // Fetch hero image from Laravel API
    fetch("http://127.0.0.1:8000/api/contacthero")
      .then((response) => response.json())
      .then((data) => {
        if (data.image) {
          setHeroImage(data.image);
        }
      })
      .catch((error) => console.error("Error fetching hero image:", error));
  }, []);

  return (
    <section className="relative flex justify-center items-center h-[579px] overflow-hidden">
      {/* Background Image (Dynamic from API) */}
      <motion.div
        className="absolute inset-0 bg-cover bg-top"
        style={{
          backgroundImage: heroImage ? `url(${heroImage})` : "none",
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Social Icons */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 right-0 flex flex-col justify-center items-center gap-[12px] sm:gap-[15px] lg:gap-[17.59px] w-[48px] sm:w-[55px] lg:w-[62px] h-[150px] sm:h-[175px] lg:h-[202px] bg-white shadow-md rounded-l-md"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      >
        {/* Facebook */}
        <motion.a
          href="https://www.facebook.com/share/14LsCcDs4C6/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 hover:opacity-80 transition"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        >
          <img
            src="/assets/icons/facebook.svg"
            alt="Facebook"
            className="w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9"
          />
        </motion.a>

        {/* Instagram */}
        <motion.a
          href="https://www.instagram.com/arbellafashionltd/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 hover:opacity-80 transition"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.0, ease: "easeOut" }}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        >
          <img
            src="/assets/icons/instagram.svg"
            alt="Instagram"
            className="w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9"
          />
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/company/arbellafashion/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 hover:opacity-80 transition"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.2, ease: "easeOut" }}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        >
          <img
            src="/assets/icons/linkedin.svg"
            alt="linkedin"
            className="w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9"
          />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
