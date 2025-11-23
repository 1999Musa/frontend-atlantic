import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const phone = e.target[2].value;
    const message = e.target[3].value;

    try {
      const res = await fetch("http://127.0.0.1:8000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });

      const data = await res.json();

      if (data.success) {
        alert("✅ Message sent successfully!");
        e.target.reset();
      } else {
        alert("❌ Failed to send message: " + (data.error || "Unknown error"));
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="w-full bg-[#F7FDFF] py-[60px] md:py-[120px] flex justify-center px-4 overflow-hidden">
      <motion.div
        className="relative max-w-[1400px] w-full flex flex-col lg:flex-row overflow-hidden"
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Form Section */}
        <motion.div
          className="flex flex-col justify-between bg-[#002C42] text-white px-[40px] md:px-[80px] py-[40px] md:py-[70px] relative z-10 w-full lg:w-[70%] min-h-[600px] lg:h-[832px]"
          style={{ boxShadow: "0px 134.745px 191.127px -76.451px rgba(25, 58, 75, 0.30)" }}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          {/* Heading + Description + Form */}
          <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}>
            <motion.h2 className="font-[Playfair_Display] text-[32px] md:text-[48px] lg:text-[64px] leading-[40px] md:leading-[60px] lg:leading-[80px] font-normal mb-[15px] md:mb-[20px]">
              Get in <span className="text-[#FFA273]">Touch</span>
            </motion.h2>
            <motion.p className="text-[14px] md:text-[16px] leading-[24px] md:leading-[28px] text-[#FFF] max-w-[540px] mb-[30px] md:mb-[50px]">
              We're ready to bring your designs to life. Questions, quotes, or visits—we're here.
            </motion.p>

            <motion.form onSubmit={handleSubmit} className="flex flex-col gap-[20px] md:gap-[25px] max-w-[480px]">
              <input type="text" placeholder="Name *" className="w-full border border-[#DDE6EB] bg-transparent text-white px-4 py-3" required />

              <input type="email" placeholder="Email * " className="w-full border border-[#DDE6EB] bg-transparent text-white px-4 py-3" required />

              <input type="text" placeholder="Phone number *" className="w-full border border-[#DDE6EB] bg-transparent text-white px-4 py-3" required />

              <textarea placeholder="Message *" className="w-full border border-[#DDE6EB] bg-transparent text-white px-4 py-3" required></textarea>

              <button type="submit" className="bg-[#FFA273] text-[#FFF] font-semibold py-3 hover:bg-[#FF9461]">SEND</button>
            </motion.form>
          </motion.div>

          {/* Contact Info */}
          {/* Contact Info Section */}
          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-[20px] sm:gap-[60px] mt-[40px] md:mt-[80px]"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
          >
            <motion.div
              className="flex items-center gap-3"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.3, ease: "easeOut" }}
            >
              <img
                src="/assets/icons/contactPhone.svg"
                alt="Phone"
                className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
              />
              <div className="flex flex-col">
                <p className="text-[#FFF] text-[11px] md:text-[13px] font-light">
                  PHONE
                </p>
                <span className="text-[#FFA273] text-[11px] md:text-[13px]">
                  +880 1713035637
                </span>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-3"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.4, ease: "easeOut" }}
            >
              <img
                src="/assets/icons/contactTelephone.svg"
                alt="Telephone"
                className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
              />
              <div className="flex flex-col">
                <p className="text-[#FFF] text-[11px] md:text-[13px] font-light">
                  TELEPHONE
                </p>
                <span className="text-[#FFA273] text-[11px] md:text-[13px]">
                  +88 241 080 246
                </span>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-3"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.5, ease: "easeOut" }}
            >
              <img
                src="/assets/icons/contactEmail.svg"
                alt="Email"
                className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
              />
              <div className="flex flex-col">
                <p className="text-[#FFF] text-[11px] md:text-[13px] font-light">
                  EMAIL
                </p>
                <span className="text-[#FFA273] text-[11px] md:text-[13px]">
                  info@arbellafashion.com
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Orange Section */}
        <motion.div
          className="relative bg-[#FFA273] w-full lg:w-[30%] min-h-[300px] lg:h-[100%] flex lg:block items-center justify-center py-8 lg:py-0"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          {/* Mobile Map */}
          <motion.div
            className="w-[330px] h-[350px] bg-white rounded-lg overflow-hidden shadow-lg lg:hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <iframe
              title="Google Map Mobile"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18338.476395172627!2d90.4784695808947!3d24.213265346565187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37567999369a2b7b%3A0xae2c16fe72b120fc!2sARBELLA%20FASHION%20LTD.!5e0!3m2!1sen!2sbd!4v1761633197541!5m2!1sen!2sbd"
              style={{ filter: "grayscale(0%)", border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </motion.div>

        {/* Desktop Floating Map */}
        <motion.div
          className="hidden lg:block w-[520.822px] h-[668.945px] absolute  rounded-lg overflow-hidden z-20 top-1/2 transform -translate-y-1/2 left-[50%]"
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          <iframe
            title="Google Map Desktop"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18338.476395172627!2d90.4784695808947!3d24.213265346565187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37567999369a2b7b%3A0xae2c16fe72b120fc!2sARBELLA%20FASHION%20LTD.!5e0!3m2!1sen!2sbd!4v1761633197541!5m2!1sen!2sbd"
            style={{ filter: "grayscale(0%)", border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default ContactForm;
