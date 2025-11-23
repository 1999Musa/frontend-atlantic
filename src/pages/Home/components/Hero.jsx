import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [heroImages, setHeroImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch hero sliders from Laravel API
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/hero-sliders")
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          const images = data.map((item) => item.heroImage);
          setHeroImages(images.filter(Boolean));
        }
      })
      .catch((err) => console.error("Error fetching hero sliders:", err));
  }, []);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (heroImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages]);

  return (
    <section className="relative flex justify-center items-center h-[500px] sm:h-[600px] lg:h-[864px] overflow-hidden">
      <AnimatePresence mode="sync">
        {heroImages.length > 0 ? (
          <motion.div
            key={currentIndex}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroImages[currentIndex]})`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 8, ease: "easeOut" }, // slow zoom
            }}
          />
        ) : (
          <motion.div
            className="absolute inset-0 bg-gray-300 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            Image Loading...
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Text (optional area) */}
      <div className="relative z-10 flex justify-between items-center w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <motion.div
          className="pl-0 sm:pl-6 lg:pl-[49px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        ></motion.div>
      </div>

      {/* Social Icons */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 flex flex-col justify-center items-center gap-[12px] sm:gap-[15px] lg:gap-[17.59px] w-[48px] sm:w-[55px] lg:w-[62px] h-[150px] sm:h-[175px] lg:h-[202px] bg-white shadow-md rounded-l-md">
  {[
    { icon: "facebook", link: "https://www.facebook.com/share/14LsCcDs4C6/" },
    { icon: "instagram", link: "https://www.instagram.com/arbellafashionltd/" },
    { icon: "linkedin", link: "https://www.linkedin.com/company/arbellafashion/" },
  ].map(({ icon, link }) => (
    <motion.a
      key={icon}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 hover:opacity-80 transition"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src={`/assets/icons/${icon}.svg`}
        alt={icon}
        className="w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9"
      />
    </motion.a>
  ))}
</div>


      {/* Pagination Dots */}
      {heroImages.length > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroImages.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                i === currentIndex ? "bg-white scale-110" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(i)}
            ></div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Hero;
