import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Client = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/clients")
      .then((res) => res.json())
      .then((data) => setClients(data))
      .catch((err) => console.error("Failed to fetch clients:", err));
  }, []);

  return (
    <section className="bg-[#F6FAFC] py-20 md:py-24 flex flex-col items-center">
      {/* Title */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className='text-[40px] md:text-[48px] font-["Playfair_Display"] font-normal leading-[52px] text-[#2C2C2C]'>
          Our <span className="text-[#FFA273]">Clients</span>
        </h2>
      </motion.div>

      {/* Logos - Flex Centered */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-[1400px] mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        {clients.map((client, index) => (
          <motion.div
            key={client.id}
            className="flex items-center justify-center  p-4 w-[160px] sm:w-[160px] md:w-[160px] h-[160px] sm:h-[160px] md:h-[160px]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={`http://127.0.0.1:8000/storage/${client.logo}`}
              alt={client.name || `Client ${index + 1}`}
              className="object-contain w-full h-full"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Client;
