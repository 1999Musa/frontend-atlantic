// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Footer = () => {
  const aboutLinks = [
    { name: "WHY CHOOSE ARBELLA", href: "/why-choose-arbella" },
    { name: "OUR FACTORY", href: "/our-factory" },
    { name: "COMMUNITY", href: "/community" },
    { name: "SUSTAINABILITY", href: "/sustainability" },
  ];

const productLinks = [
  { name: "Outerwear", href: "/products" },
  { name: "Casual wear", href: "/products" },
  { name: "Bottoms", href: "/products" },
  { name: "Uniform", href: "/products" },
  { name: "Workwear", href: "/products" },
];

const socialIcons = [
  { name: "Facebook", icon: "/assets/icons/FooterFacebook.svg", href: "https://www.facebook.com/share/14LsCcDs4C6/" },
  { name: "X", icon: "/assets/icons/FooterTwitter.svg", href: "https://x.com/ArbellaLtd39135" },
  { name: "LinkedIn", icon: "/assets/icons/FooterLinkedIn.svg", href: "https://www.linkedin.com/company/arbellafashion/" },
  { name: "Instagram", icon: "/assets/icons/FooterInstagram.svg", href: "https://www.instagram.com/arbellafashionltd/" },
];

const bottomSocialIcons = [
  { name: "YouTube", icon: "/assets/icons/youtube.svg", href: "http://www.youtube.com/@arbellafashionltd" },
  { name: "LinkedIn", icon: "/assets/icons/FooterLinkedin2.svg", href: "https://www.linkedin.com/company/arbellafashion/" },
  { name: "Facebook", icon: "/assets/icons/FooterFacebook2.svg", href: "https://www.facebook.com/share/14LsCcDs4C6/" },
  { name: "Instagram", icon: "/assets/icons/FooterInstagram2.svg", href: "https://www.instagram.com/arbellafashionltd/" },
];


  return (
    <footer className="w-full overflow-hidden">
      {/* Main Footer Section */}
      <div
        className="w-full font-[Montserrat] overflow-hidden"
        style={{ backgroundColor: "#293037" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 text-center md:text-left">
            {/* Logo and Description */}
            <motion.div
              className="lg:col-span-1"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <motion.img
                src="/assets/icons/arbella_Logo_White.svg"
                alt="Arbella Logo"
                className="h-16 md:h-20 mb-6 mx-auto md:mx-0"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              />
              <motion.p
                className="text-gray-300 text-sm leading-relaxed mb-8"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                Crafting quality apparel for global brands with innovation,
                integrity, and excellence.
              </motion.p>

              {/* Social Icons */}
              <motion.div
                className="flex gap-4 justify-center md:justify-start"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                {socialIcons.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    className="hover:opacity-80 transition-opacity"
                    aria-label={social.name}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.2,
                      delay: 0.5 + index * 0.05,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="w-12 h-12 md:w-14 md:h-14"
                    />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* ABOUT Section */}
            <motion.div
              className="lg:col-span-1"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              <motion.h3
                className="text-white text-lg font-semibold mb-6"
                initial={{ y: -10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 0.25 }}
              >
                ABOUT
              </motion.h3>
              <ul className="space-y-4">
                {aboutLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ x: -15, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: 0.3 + index * 0.05 }}
                  >
                    <motion.a
                      href={link.href}
                      className="text-gray-300 text-sm hover:text-white transition-colors"
                      whileHover={{
                        x: 5,
                        color: "#ffffff",
                        transition: { duration: 0.2 },
                      }}
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* PRODUCTS Section */}
            <motion.div
              className="lg:col-span-1"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <motion.h3
                className="text-white text-lg font-semibold mb-6"
                initial={{ y: -10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 0.3 }}
              >
                PRODUCTS
              </motion.h3>
              <ul className="space-y-4">
                {productLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ x: -15, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: 0.35 + index * 0.05 }}
                  >
                    <motion.a
                      href={link.href}
                      className="text-gray-300 text-sm hover:text-white transition-colors"
                      whileHover={{
                        x: 5,
                        color: "#ffffff",
                        transition: { duration: 0.2 },
                      }}
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* LOCATIONS Section */}
            <motion.div
              className="lg:col-span-1"
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: 0.25 }}
            >
              <motion.h3
                className="text-white text-lg font-semibold mb-6"
                initial={{ y: -10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 0.35 }}
              >
                ADDRESS
              </motion.h3>
              <ul className="space-y-4">
                <motion.li
                  className="text-gray-300 text-sm"
                  initial={{ x: 15, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                  whileHover={{
                    x: 5,
                    color: "#ffffff",
                    transition: { duration: 0.2 },
                  }}
                >
                  38, Gararon, Bormi, Sreepur, Gazipur, Bangladesh
                  
                </motion.li>
                <motion.li
                  className="text-gray-300 text-sm"
                  initial={{ x: 15, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: 0.45 }}
                  whileHover={{
                    x: 5,
                    color: "#ffffff",
                    transition: { duration: 0.2 },
                  }}
                >
                  +880 1713035637
                </motion.li>
                <motion.li
                  className="text-gray-300 text-sm"
                  initial={{ x: 15, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                  whileHover={{
                    x: 5,
                    color: "#ffffff",
                    transition: { duration: 0.2 },
                  }}
                >
                  arif@arbellafashion.com
                </motion.li>
              </ul>
            </motion.div>

            {/* Drop Resume Section */}
            <motion.div
              className="lg:col-span-1"
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <motion.h3
                className="text-white text-lg font-semibold mb-6"
                initial={{ y: -10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 0.4 }}
              >
                Drop Resume
              </motion.h3>
              <motion.a
                href="mailto:careers@arbellafashion.com"
                className="text-gray-300 text-sm hover:text-white transition-colors"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 0.45 }}
                whileHover={{
                  scale: 1.05,
                  color: "#ffffff",
                  transition: { duration: 0.2 },
                }}
              >
                careers@arbellafashion.com
              </motion.a>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            className="mt-12 md:mt-16"
            style={{
              borderTop: "2px solid rgba(255, 255, 255, 0.68)",
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
          />
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="w-full bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left relative">
            {/* Copyright (left) */}
            <motion.p
              className="text-white text-sm md:absolute md:left-4 md:top-1/2 md:-translate-y-1/2"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              © Arbella 2025. All rights reserved.
            </motion.p>

            {/* Developer Info (center) */}
            <motion.a
              href="https://www.linkedin.com/in/musa-md-obayed-52aa66251/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline transition-colors md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <span className="not-italic text-white">Developed by </span>
              <span className="italic text-[#FFA475] hover:text-[#ffb68b]">
                Musa Md Obayed
              </span>
            </motion.a>

            {/* Social Icons (right) */}
            <motion.div
              className="flex gap-4 justify-center md:justify-end md:absolute md:right-4 md:top-1/2 md:-translate-y-1/2"
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.25 }}
            >
              {bottomSocialIcons.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  className="hover:opacity-80 transition-opacity"
                  aria-label={social.name}
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.2,
                    delay: 0.3 + index * 0.05,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-6 h-6"
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
