import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [heroImage, setHeroImage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/sustainabilities")
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0 && data[0].hero_image) {
          setHeroImage(`http://127.0.0.1:8000/storage/${data[0].hero_image}`);
        }
      })
      .catch((err) => console.error("Error fetching hero image:", err));
  }, []);

  if (!heroImage) return null;

  return (
    <section
      className="relative flex justify-center items-center w-full 
                 h-[250px] sm:h-[400px] md:h-[500px] lg:h-[768px] 
                 overflow-hidden bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "contain", // shows full image on small screens
      }}
    >


      {/* Social Icons Sidebar */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 right-0 
                   flex flex-col justify-center items-center 
                   gap-[10px] sm:gap-[14px] lg:gap-[17.59px] 
                   w-[42px] sm:w-[55px] lg:w-[62px] 
                   h-[130px] sm:h-[175px] lg:h-[202px] 
                   bg-white shadow-md rounded-l-md"
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
            className="flex items-center justify-center 
                       w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 
                       hover:opacity-80 transition"
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
