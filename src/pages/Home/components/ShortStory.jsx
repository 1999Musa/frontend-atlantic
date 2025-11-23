import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const ShortStory = () => {
  const [videoData, setVideoData] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/short-story-video")
      .then((res) => res.json())
      .then((data) => setVideoData(data))
      .catch((err) => console.error("Error fetching video:", err));
  }, []);

  useEffect(() => {
    const currentSectionRef = sectionRef.current;

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
        threshold: 0.5,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, [videoData]);

  if (!videoData || !videoData.video) return null;

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Manual play prevented:", err);
      });
      setIsPlaying(true);
    }
  };

  return (
    <section ref={sectionRef} className="w-full bg-white">
      {/* Content */}
      {/* Content Section */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl text-center font-[IvyPresto_Headline] text-[#293037] mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          A Short Story
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-center text-[#293037] max-w-4xl mx-auto leading-relaxed font-[Montserrat]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          At Arbella, every thread tells a story — of dedication, craftsmanship,
          and innovation. From humble beginnings to becoming a trusted global
          textile manufacturer, our journey has been driven by a passion for
          quality and a commitment to excellence.
        </motion.p>
        {/* </motion.div> */}
        {videoData.title && (
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl text-center font-[IvyPresto_Headline] text-[#293037] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {videoData.title}
          </motion.h2>
        )}
        {videoData.description && (
          <motion.p
            className="text-lg md:text-xl text-center text-[#293037] max-w-4xl mx-auto leading-relaxed font-[Montserrat]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {videoData.description}
          </motion.p>
        )}
      </motion.div>

      {/* Video Section */}
      <motion.div
        className="relative w-full h-[400px] md:h-[683px] flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <video
          ref={videoRef}
          src={videoData.video}
          className="w-full h-full object-cover"
          controls={isPlaying}
          muted
        />

        {!isPlaying && (
          <motion.button
            onClick={handlePlayClick}
            className="absolute flex items-center justify-center z-10 cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="/assets/icons/PlayButton.svg"
              alt="Play"
              className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
            />
          </motion.button>
        )}
      </motion.div>
    </section>
  );
};

export default ShortStory;
