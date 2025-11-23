import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [heroData, setHeroData] = useState(null);

  // Fetch hero data from Laravel API
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/about-hero")
      .then((res) => res.json())
      .then((data) => setHeroData(data))
      .catch((err) => console.error("Error fetching hero data:", err));
  }, []);

  return (
    <section className="relative flex justify-center items-center w-full 
                 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[768px] 
                 overflow-hidden bg-center bg-no-repeat mt-12 sm:mt-0">
      {/* Background Image (fully responsive) */}
      {heroData?.image && (
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src={heroData.image}
            alt="Hero"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </motion.div>
      )}




      {/* Social Icons Sidebar */}
      <motion.div
        className="
    absolute 
    top-1/2 -translate-y-1/2 right-0
    flex flex-col justify-center items-center
    gap-[12px] sm:gap-[15px] lg:gap-[17.59px]
    w-[48px] sm:w-[55px] lg:w-[62px]
    h-[150px] sm:h-[175px] lg:h-[202px]
    bg-white shadow-md rounded-l-md
    mt-10 sm:mt-0   /* Mobile margin only */
  "
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      >

        {[
          {
            icon: "/assets/icons/facebook.svg",
            alt: "Facebook",
            link: "https://www.facebook.com/share/14LsCcDs4C6/",
          },
          {
            icon: "/assets/icons/instagram.svg",
            alt: "Instagram",
            link: "https://www.instagram.com/arbellafashionltd/",
          },
          {
            icon: "/assets/icons/linkedin.svg",
            alt: "LinkedIn",
            link: "https://www.linkedin.com/company/arbellafashion/",
          },
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 hover:opacity-80 transition"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.8 + i * 0.2,
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          >
            <img
              src={item.icon}
              alt={item.alt}
              className="w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9"
            />
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
