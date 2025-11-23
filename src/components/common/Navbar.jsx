import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logo, setLogo] = useState(null);

  // Fetch logo from Laravel API
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/logo")
      .then((res) => res.json())
      .then((data) => {
        if (data.logo_url) {
          setLogo(data.logo_url);
        } else {
          setLogo(null);
        }
      })
      .catch((err) => console.error("Error fetching logo:", err));
  }, []);

  const navItems = [
    { label: "HOME", path: "/" },
    { label: "ABOUT US", path: "/about-us" },
    { label: "PRODUCTS", path: "/products" },
    { label: "WHY CHOOSE ATLANTIC", path: "/why-choose-arbella" },
    { label: "OUR FACTORY", path: "/our-factory" },
    { label: "SUSTAINABILITY", path: "/sustainability" },
    { label: "COMMUNITY", path: "/community" },
    { label: "CONTACT US", path: "/contact-us" },
    { label: "LOGIN", path: "/log-in" },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      {/* Header */}
      <motion.header
        className="fixed top-0 left-0 w-full z-50 flex justify-center items-center"
        style={{
          background: "rgba(255, 255, 255, 0.25)",
          boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.2)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          height: "90px",
        }}
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex justify-between items-center w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <NavLink to="/">
              {logo && (
                <motion.img
                  src={logo}
                  alt="Arbella Logo"
                  className="h-[40px] sm:h-[50px] lg:h-[55px] w-auto object-contain"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                />
              )}
            </NavLink>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden lg:flex items-center gap-6 xl:gap-8"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.6 + index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `text-xs xl:text-sm font-semibold tracking-wide transition-colors duration-200 font-[Montserrat] whitespace-nowrap ${
                      isActive
                        ? "text-[#FFA273]"
                        : "text-[#2C2C2C] hover:text-[#FFA273]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </motion.div>
            ))}
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.9 }}
          >
            <span
              className={`w-6 h-0.5 bg-[#2C2C2C] transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-[#2C2C2C] transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-[#2C2C2C] transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            style={{
              background: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(5px)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="fixed top-[80px] left-0 right-0"
              style={{
                background: "rgba(255, 255, 255, 0.25)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
              }}
              initial={{ y: -300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -300, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <nav className="flex flex-col py-6 px-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `text-base font-semibold tracking-wide transition-colors duration-200 font-[Montserrat] py-2 px-4 rounded ${
                          isActive
                            ? "text-[#FFA273] bg-gray-100"
                            : "text-[#2C2C2C] hover:text-[#FFA273] hover:bg-gray-50"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
