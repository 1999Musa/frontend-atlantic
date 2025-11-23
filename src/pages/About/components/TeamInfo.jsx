import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TeamInfo = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/team-members")
      .then((res) => res.json())
      .then((data) => {
        setTeamMembers(data);
      })
      .catch((err) => {
        console.error("Failed to fetch team members:", err);
      });
  }, []);

  return (
    <section className="w-full bg-gray-50 py-12 md:py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-[IvyPresto_Headline] text-center text-[#293037] mb-12 md:mb-14"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Meet Our <span style={{ color: "#FFA475" }}>Team</span>
        </motion.h2>

        {/* Team Grid */}
        <motion.div
          className="
            flex flex-wrap justify-center 
            gap-3 sm:gap-4 md:gap-5
            max-w-[1400px] mx-auto
          "
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="flex flex-col bg-white overflow-hidden"
              style={{
                borderRadius: "17px",
                border: "1px solid rgba(41, 48, 55, 0.30)",
                width: "306px", // fixed width for consistent alignment
              }}
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.08,
                ease: "easeOut",
              }}
            >
              {/* Member Image */}
              <motion.div
                style={{
                  width: "100%",
                  height: "294px",
                  borderRadius: "15px 15px 0 0",
                  backgroundImage: `url('http://127.0.0.1:8000/storage/${member.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
              />

              {/* Member Info */}
              <motion.div
                className="text-center p-6 pt-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.08 }}
              >
                <h3 className="font-[Montserrat] text-lg font-medium text-[#454545] mb-2">
                  {member.name}
                </h3>

                {/* Position */}
                <p
                  className="font-[plus-jakarta-sans] text-sm font-semibold mb-1"
                  style={{ color: "#FFA475" }}
                >
                  {member.position}
                </p>

                {/* Secondary Position */}
                {member.position2 && (
                  <p
                    className="font-[plus-jakarta-sans] text-xs font-bold mb-3"
                    style={{ color: "#FFA475" }}
                  >
                    {member.position2}
                  </p>
                )}

                {/* Description */}
                <p className="font-[plus-jakarta-sans] text-sm text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamInfo;
