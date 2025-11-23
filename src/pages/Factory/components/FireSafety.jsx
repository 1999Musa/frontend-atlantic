// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const FireSafety = () => {
  return (
    <section
      className="w-full relative pb-16 md:pb-20 lg:pb-24 font-[Montserrat] overflow-hidden"
      style={{ backgroundColor: "#F7F7F7" }}
    >
      {/* Background Image */}
      <motion.div
        className="absolute top-[350px] right-[-130px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "718px",
          height: "997px",
          opacity: 0.16,
          backgroundImage: "url('/assets/images/factory/firesafetyBG.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          maxWidth: "100%",
        }}
        initial={{ x: 100, opacity: 0, rotate: 10 }}
        animate={{ x: 0, opacity: 0.16, rotate: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Main Layout - Left Column and Right Column */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Column - Safety2 Image (top) + Text (bottom) - 50% width */}
        <motion.div
          className="flex flex-col w-full lg:w-1/2 pt-4 sm:pt-8 md:pt-16 lg:pt-24"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Top - Safety2 Image */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <motion.div
              className="flex-shrink-0 bg-contain lg:bg-cover bg-center bg-no-repeat"
              style={{
                width: "75%",
                minWidth: "400px",
                height: "400px",
                backgroundImage: "url('/assets/images/factory/safety2.jpg')",
              }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            />
          </motion.div>

          {/* Bottom - Text Content (left aligned and vertically centered) */}
          <motion.div
            className="px-2 sm:px-4 lg:px-8 py-4 sm:py-6 flex-1 flex items-center"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <div className="space-y-4 sm:space-y-6 text-left pl-0 sm:pl-4 md:pl-16 lg:pl-24">
              <motion.p
                className="text-sm sm:text-base text-[#293037] leading-relaxed"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              >
                At Arbella, the health and safety of our employees is our
                highest priority. We follow international fire safety
                regulations and have invested in advanced detection, prevention,
                and protection systems to ensure a safe workplace.
              </motion.p>

              <motion.ul
                className="space-y-2 sm:space-y-3 text-sm sm:text-base text-[#000] pl-0 sm:pl-2 md:pl-5 lg:pl-7"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
              >
                <motion.li
                  className="flex items-start"
                  initial={{ x: -15, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.0, ease: "easeOut" }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <span className="mr-2 sm:mr-3 mt-2.5 w-1 h-1 bg-gray-700 rounded-full flex-shrink-0"></span>
                  <span> Automatic Smoke Detectors & Fire Alarms</span>
                </motion.li>
                <motion.li
                  className="flex items-start"
                  initial={{ x: -15, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.1, ease: "easeOut" }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <span className="mr-2 sm:mr-3 mt-2.5 w-1 h-1 bg-gray-700 rounded-full flex-shrink-0"></span>
                  <span>24/7 Security & Fire Surveillance Room</span>
                </motion.li>
                <motion.li
                  className="flex items-start"
                  initial={{ x: -15, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.2, ease: "easeOut" }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <span className="mr-2 sm:mr-3 mt-2.5 w-1 h-1 bg-gray-700 rounded-full flex-shrink-0"></span>
                  <span>Regular Fire Safety Training</span>
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Safety1 Image (top) + Title/Description (middle) + Safety3 Image (bottom) - 50% width */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Top - Safety1 Image (no top padding) */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <motion.div
              className="flex-shrink-0"
              style={{
                width: "60%",
                minWidth: "339px",
                height: "288px",
                backgroundImage: "url('/assets/images/factory/safety1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            />
          </motion.div>

          {/* Middle - Title and Description (center on mobile, left aligned on desktop and vertically centered) */}
          <motion.div
            className="px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-16 lg:pt-[61px] pb-12 sm:pb-20 md:pb-32 lg:pb-[145px] flex-1 flex items-center justify-center lg:justify-start"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          >
            <div className="space-y-3 sm:space-y-4 text-center lg:text-left max-w-full lg:max-w-[413px]">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[IvyPresto_Headline]"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              >
                <span style={{ color: "#FFA475" }}>Fire Safety</span>{" "}
                <span className="text-gray-900">Facilities</span>
              </motion.h2>
              <motion.p
                className="text-sm sm:text-base md:text-lg lg:text-xl text-[#293037] leading-relaxed"
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
              >
                Arbella goes beyond compliance to create a supportive
                environment for its workforce.
              </motion.p>
            </div>
          </motion.div>

          {/* Bottom - Safety3 Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <motion.div
              className="flex-shrink-0 bg-contain lg:bg-cover bg-center bg-no-repeat"
              style={{
                width: "75%",
                minWidth: "432px",
                height: "400px",
                backgroundImage: "url('/assets/images/factory/safety3.jpg')",
              }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FireSafety;
