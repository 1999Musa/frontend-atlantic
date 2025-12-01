import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  // ---------------- STATE & REFS ---------------- //
  const [videoData, setVideoData] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const videoSectionRef = useRef(null); // Ref specifically for the video area

  // ---------------- DATA FETCHING ---------------- //
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/short-story-video")
      .then((res) => res.json())
      .then((data) => setVideoData(data))
      .catch((err) => console.error("Error fetching video data:", err));
  }, []);

  // ---------------- INTERSECTION OBSERVER (AUTOPLAY) ---------------- //
  useEffect(() => {
    const currentVideoRef = videoSectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch((err) => {
              console.log("Autoplay prevented:", err);
            });
            setIsPlaying(true);
          } else {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the video is visible
        rootMargin: "0px",
      }
    );

    if (currentVideoRef) {
      observer.observe(currentVideoRef);
    }

    return () => {
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef);
      }
    };
  }, [videoData]);

  // ---------------- HANDLERS ---------------- //
  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch((err) => console.log(err));
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="w-full bg-white mt-12 sm:mt-0">
      
      {/* ---------------- 1. TEXT CONTENT SECTION (Top) ---------------- */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col items-center justify-center text-center">
        
        {/* Static Title */}
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-[IvyPresto_Headline] text-[#293037] mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          A Short <span className="text-[#FFA273] italic font-serif">Story</span>
        </motion.h2>

        {/* Static Description */}
        <motion.p 
          className="text-lg md:text-xl text-gray-600 leading-relaxed font-[Montserrat] max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          At Arbella, every thread tells a story — of dedication, craftsmanship,
          and innovation. From humble beginnings to becoming a trusted global
          textile manufacturer, our journey has been driven by a passion for
          quality and a commitment to excellence.
        </motion.p>

        {/* Dynamic Title & Description (from API) */}
        {videoData && (videoData.title || videoData.description) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            {videoData.title && (
              <h3 className="text-2xl md:text-3xl font-[IvyPresto_Headline] text-[#293037] mb-3">
                {videoData.title}
              </h3>
            )}
            {videoData.description && (
              <p className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed font-[Montserrat]">
                {videoData.description}
              </p>
            )}
          </motion.div>
        )}
      </div>

      {/* ---------------- 2. VIDEO SECTION (Bottom) ---------------- */}
      <section 
        ref={videoSectionRef}
        className="relative flex justify-center items-center w-full 
                   h-[300px] sm:h-[400px] md:h-[500px] lg:h-[768px] 
                   overflow-hidden bg-gray-100"
      >
        {videoData?.video && (
          <motion.div
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0 }}
          >
            <video
              ref={videoRef}
              src={videoData.video}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
            />
            {/* Overlay for slight darkening if needed, helps icons pop */}
            {/* <div className="absolute inset-0 bg-black/10"></div> */}
          </motion.div>
        )}

        {/* Play Button Overlay */}
        {!isPlaying && videoData?.video && (
          <motion.button
            onClick={handlePlayClick}
            className="absolute z-10 cursor-pointer bg-black/20 rounded-full p-4 md:p-6 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="/assets/icons/PlayButton.svg"
              alt="Play"
              className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
            />
          </motion.button>
        )}

        {/* ---------------- 3. SOCIAL ICONS SIDEBAR ---------------- */}
        {/* Attached to the video section to maintain the original look */}
        {/* <motion.div
          className="
            absolute 
            top-1/2 -translate-y-1/2 right-0
            flex flex-col justify-center items-center
            gap-[12px] sm:gap-[15px] lg:gap-[17.59px]
            w-[48px] sm:w-[55px] lg:w-[62px]
            h-[150px] sm:h-[175px] lg:h-[202px]
            bg-white shadow-md rounded-l-md
            z-20
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
        </motion.div> */}
      </section>
    </div>
  );
};

export default Hero;