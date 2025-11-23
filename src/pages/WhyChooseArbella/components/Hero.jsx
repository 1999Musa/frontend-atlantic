// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [heroData, setHeroData] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/chooseimg")
      .then((res) => res.json())
      .then((data) => {
        setHeroData(data);
      })
      .catch((err) => console.error("Error fetching hero image:", err));
  }, []);

  const handlePlay = () => {
    const video = document.getElementById("hero-video");
    if (video) {
      video.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <motion.section
      className="relative flex justify-center items-center h-[579px] bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          heroData && !heroData.video ? `url(${heroData.image})` : "none",
      }}
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Video Background */}
      {heroData && heroData.video && (
        <video
          id="hero-video"
          className="absolute inset-0 w-full h-full object-cover"
          src={heroData.video}
          muted
          loop
          playsInline
        />
      )}

      {/* Play Button */}
      {!isVideoPlaying && heroData?.video && (
        <motion.button
          onClick={handlePlay}
          className="z-20 bg-white text-black rounded-full p-4 shadow-lg hover:scale-110 transition"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          ▶
        </motion.button>
      )}

      {/* Social Buttons */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 right-0 flex flex-col justify-center items-center gap-[12px] sm:gap-[15px] lg:gap-[17.59px] w-[48px] sm:w-[55px] lg:w-[62px] h-[150px] sm:h-[175px] lg:h-[202px] bg-white shadow-md rounded-l-md"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        {[
          {
            icon: "/assets/icons/facebook.svg",
            link: "https://www.facebook.com/share/14LsCcDs4C6/",
          },
          {
            icon: "/assets/icons/instagram.svg",
            link: "https://www.instagram.com/arbellafashionltd/",
          },
          {
            icon: "/assets/icons/linkedin.svg",
            link: "https://www.linkedin.com/company/arbellafashion/",
          },
        ].map((social, i) => (
          <motion.a
            key={i}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 hover:opacity-80 transition"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 0.5,
              delay: 1.0 + i * 0.1,
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src={social.icon}
              alt="Social Icon"
              className="w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9"
            />
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Hero;
