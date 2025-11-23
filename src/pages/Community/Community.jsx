import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Community = () => {
  const [data, setData] = useState({
    hero: "",
    employees: "",
    gallery: [],
  });

  useEffect(() => {
    // Fetch data from Laravel API
    fetch("http://127.0.0.1:8000/api/community") // adjust API URL if needed
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.error("Error fetching community data:", err));
  }, []);

  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <section className="relative flex justify-center items-center h-[579px] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${
              data.hero || "/assets/images/community/Banner.jpg"
            })`,
          }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        <motion.div
          className="absolute inset-0 bg-black/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        ></motion.div>

        {/* Social icons */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 right-0 flex flex-col justify-center items-center gap-[12px] sm:gap-[15px] lg:gap-[17.59px] w-[48px] sm:w-[55px] lg:w-[62px] h-[150px] sm:h-[175px] lg:h-[202px] bg-white shadow-md rounded-l-md"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          {[
            {
              icon: "facebook",
              link: "https://www.facebook.com/share/14LsCcDs4C6/",
            },
            {
              icon: "instagram",
              link: "https://www.instagram.com/arbellafashionltd/",
            },
            {
              icon: "linkedin",
              link: "https://www.linkedin.com/company/arbellafashion/",
            },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
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
                src={`/assets/icons/${social.icon}.svg`}
                alt={social.icon}
                className="w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9"
              />
            </motion.a>
          ))}
        </motion.div>
      </section>

      {/* ================= COMMUNITY FOR EMPLOYEES ================= */}
      <section className="w-full bg-[#EBEBEB] font-[Manrope] pb-10 md:pb-0 overflow-hidden">
        {/* Heading */}
        <motion.div
          className="w-full flex justify-center pt-[80px] px-4 md:px-8 overflow-hidden"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className='text-center font-["Playfair_Display"] text-[32px] md:text-[48px] lg:text-[64px] font-normal leading-[38px] md:leading-[54px] lg:leading-[68px] tracking-[-0.8px] text-[#2C2C2C]'
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Our <span className="text-[#FFA273]">Community Center</span>
            <br />
            for Factory <span className="text-[#FFA273]">Employees</span>
          </motion.h2>
        </motion.div>

        {/* Main Content (static cards) */}
        <motion.div
          className="w-full flex flex-col lg:flex-row justify-between items-stretch mt-[50px] px-4 md:px-0 overflow-hidden"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Left Cards */}
          <motion.div
            className="max-w-[740px] w-full lg:pl-[120px] py-[40px] overflow-hidden"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[28px] max-w-[640px] overflow-hidden">
              {/* Card 1 */}
              <motion.div
                className="rounded-[30px] bg-[#FFA2731C] px-[20px] md:px-[28px] py-[24px] md:py-[32px] flex flex-col gap-3"
                initial={{ y: 30, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.img
                  src="/assets/images/community/Book.svg"
                  alt="Learning Hub"
                  className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
                />
                <h3 className="text-[14px] md:text-[15px] font-semibold text-[#1E1E1E]">
                  Learning Hub
                </h3>
                <p className="text-[12px] text-[#000] leading-[22px] md:leading-[26px]">
                  Literacy programs, language courses, and skill-building
                  workshops.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                className="rounded-[30px] bg-[#29303714] px-[20px] md:px-[28px] py-[24px] md:py-[32px] flex flex-col gap-3"
                initial={{ y: 30, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.img
                  src="/assets/images/community/Health.svg"
                  alt="Health & Wellness"
                  className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
                />
                <h3 className="text-[14px] md:text-[15px] font-semibold text-[#1E1E1E]">
                  Health & Wellness
                </h3>
                <p className="text-[12px] text-[#000] leading-[22px] md:leading-[26px]">
                  Regular health check-ups, awareness sessions, and counseling
                  support.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                className="rounded-[30px] bg-[#29303714] px-[20px] md:px-[28px] py-[24px] md:py-[32px] flex flex-col gap-3"
                initial={{ y: 30, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.img
                  src="/assets/images/community/Support.svg"
                  alt="Social Support"
                  className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7, ease: "easeOut" }}
                />
                <h3 className="text-[14px] md:text-[15px] font-semibold text-[#1E1E1E]">
                  Social Support
                </h3>
                <p className="text-[12px] text-[#000] leading-[22px] md:leading-[26px]">
                  Community events, peer groups, and family engagement programs.
                </p>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                className="rounded-[30px] bg-[#FFA2731C] px-[20px] md:px-[28px] py-[24px] md:py-[32px] flex flex-col gap-3"
                initial={{ y: 30, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.img
                  src="/assets/images/community/Leadership.svg"
                  alt="Recreation"
                  className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
                />
                <h3 className="text-[14px] md:text-[15px] font-semibold text-[#1E1E1E]">
                  Recreation
                </h3>
                <p className="text-[12px] text-[#000] leading-[22px] md:leading-[26px]">
                  Spaces for relaxation, cultural activities, and team-building
                  events.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="w-full lg:w-[582px] min-h-[300px] md:min-h-[400px] lg:min-h-[468px] flex-shrink-0 bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `linear-gradient(179deg, rgba(14, 13, 13, 0.49) 0.49%, rgba(0, 0, 0, 0.00) 49.49%, rgba(0, 0, 0, 0.49) 97.55%), url('${
                data.employees || "/assets/images/community/OurCommunity.png"
              }')`,
            }}
            initial={{ x: 50, opacity: 0, scale: 0.95 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          />
        </motion.div>
      </section>

      {/* ================= GALLERY SECTION ================= */}
      <section className="w-full bg-white py-[80px] flex flex-col items-center">
        <motion.h2
          className="text-center font-[IvyPresto_Headline] text-[32px] md:text-[48px] font-normal leading-[40px] md:leading-[60px] tracking-[-0.5px] text-[#2C2C2C] mb-[40px] md:mb-[60px]"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our <span className="text-[#FFA273]">Gallery</span>
        </motion.h2>

        <motion.div
          className="w-full max-w-[1400px] flex flex-col gap-[20px] md:gap-[34px] px-4"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {data.gallery.length > 0 &&
            data.gallery
              .reduce((rows, img, idx) => {
                if (idx % 2 === 0) rows.push([img]);
                else rows[rows.length - 1].push(img);
                return rows;
              }, [])
              .map((row, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col md:flex-row justify-center items-center gap-[16px] md:gap-[36px]"
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + i * 0.2,
                    ease: "easeOut",
                  }}
                >
                  {row.map((src, j) => (
                    <motion.img
                      key={j}
                      src={src}
                      alt={`Gallery ${i * 2 + j + 1}`}
                      className="object-cover w-full md:w-[646px] h-[250px] md:h-[430px]"
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.4 + j * 0.1 + i * 0.1,
                        ease: "easeOut",
                      }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.3 },
                      }}
                    />
                  ))}
                </motion.div>
              ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Community;
