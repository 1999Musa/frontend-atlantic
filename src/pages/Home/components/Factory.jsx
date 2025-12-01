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
    // Ensure the section background matches the mask color defined below
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
            <span className="block mt-2">
              advanced machinery, skilled team, and strict compliance.
            </span>
          </motion.p>
        </motion.div>

        {/* Factory Image Container with Custom Corner */}
        <motion.div
          // 1. Set up the container with relative positioning and explicit height
          className="relative w-full h-[400px] md:h-[550px] overflow-hidden "
          // 2. Apply rounding to all corners EXCEPT the top-right
          style={{
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
        >
          {/* The Image */}
          <img
            src={factoryImage}
            alt="Our Factory"
            className="w-full h-full object-cover relative z-0 "
          />

          {/* 3. The "Cut-out" Mask Div
              This sits on top of the image in the top-right corner.
              It has the same color as the section background and an inward curve. */}
          <div
            className="absolute top-0 right-0 bg-[#F7FDFF] z-10 pointer-events-none"
            style={{
              width: "190px", // Slightly wider than the button
              height: "70px", // Slightly taller than the button
              borderBottomLeftRadius: "12px", // Creates the inward curve
            }}
          />

          {/* 4. The Button
              Positioned absolutely on top of the mask, with a small margin to center it. */}
          <motion.button
            onClick={handleClick}
            // Adjusted positioning to center it within the cut-out mask
            className="group absolute top-1 right-1 z-20 flex items-center gap-0.5 rounded-[10px] bg-black transition-all duration-200 p-0.5 hover:shadow-lg cursor-pointer"
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
            {/* Hover effect preserved intact */}
            <div className="flex items-center justify-center w-8 md:w-10 h-8 md:h-10 transition-all duration-200 group-hover:order-2 order-1">
              <img
                src="/assets/icons/topRightArrow.svg"
                alt="Arrow"
                className="w-4 h-4 md:w-5 md:h-5 brightness-0 invert"
              />
            </div>

            <div className="flex items-center justify-center h-10 md:h-[46px] px-3 md:px-5 py-3 md:py-[15px] rounded-lg bg-white transition-all duration-200 group-hover:order-1 order-2">
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