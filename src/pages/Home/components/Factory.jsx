import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Factory = () => {
  const navigate = useNavigate();
  const [factoryImage, setFactoryImage] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleClick = () => {
    navigate("/our-factory");
  };

  // Fetch factory image from Laravel API
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/front-factory")
      .then((res) => res.json())
      .then((data) => {
        if (data.image) {
          // Make full URL for storage image
          setFactoryImage(`http://127.0.0.1:8000/storage/${data.image}`);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching factory image:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="flex justify-center items-center h-[400px]">
        Loading factory...
      </section>
    );
  }

  if (!factoryImage) {
    return (
      <section className="flex justify-center items-center h-[400px]">
        Factory image not available.
      </section>
    );
  }

  return (
    <section className="w-full px-4 py-16 md:py-24 bg-[#F7FDFF]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-light mb-6 font-["Playfair_Display"] text-[#293037]'>
            Our <span className="text-[#FFA273]">Factory</span>
          </h2>
          <motion.p
            className="text-[#293037] text-lg md:text-xl max-w-3xl mx-auto font-[Montserrat]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Operating our own state-of-the-art garment factory with 
            <br className="hidden md:block" /> 
            <p> advanced machinery, skilled team, and strict compliance.</p> 
          </motion.p>
        </motion.div>

        {/* Factory Image with Button */}
        <motion.div
          className="relative w-full rounded-3xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          <img
            src={factoryImage}
            alt="Our Factory"
            className="w-full h-auto object-cover"
          />

          {/* Button positioned on top right */}
          <motion.button
            onClick={handleClick}
            className="group absolute top-0 right-0 md:top-1 md:right-2 flex items-center gap-0.5 rounded-[10px] bg-black transition-all duration-200 p-0.5 hover:shadow-lg cursor-pointer"
            initial={{ opacity: 0, x: 20, y: -20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center justify-center w-8 md:w-10 h-8 md:h-10 transition-all duration-200 group-hover:order-2 order-1">
              <img
                src="/assets/icons/topRightArrow.svg"
                alt="Arrow"
                className="w-4 h-4 md:w-5 md:h-5 brightness-0 invert"
              />
            </div>

            <div className="flex items-center justify-center h-10 md:h-[46px] px-2 md:px-3 py-3 md:py-[15px] rounded-lg bg-white transition-all duration-200 group-hover:order-1 order-2">
              <span className="text-sm md:text-base font-medium text-black whitespace-nowrap">
                Our factory
              </span>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Factory;
