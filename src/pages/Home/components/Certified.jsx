// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import "../../../components/marquee.css";

const Certified = () => {
  const [logos, setLogos] = useState([]);

  // Fetch logos from API
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/certified-logos")
      .then((res) => res.json())
      .then((data) => setLogos(data))
      .catch((err) => console.error("Error fetching logos:", err));
  }, []);

  if (!logos.length) return null; // Show nothing until logos are fetched

  return (
    <section className="w-full bg-gray-50 py-12 md:py-16 lg:py-20">
      <div className="w-full">
        {/* Title */}
        <h2 className="text-[28px] md:text-[32px] font-[Montserrat] font-medium text-center text-[#000] mb-10 md:mb-14 lg:mb-16">
          Certified for Quality & Compliance
        </h2>

        {/* Logos Container */}
        <div
          className="py-3 md:py-4 lg:py-5 marquee-wrapper"
          style={{
            borderTop: "5px solid rgba(202, 202, 202, 0.37)",
            borderBottom: "5px solid rgba(202, 202, 202, 0.37)",
          }}
        >
          <div className="marquee-content">
            {/* First set of logos */}
            {logos.map((logo) => (
              <div
                key={`set1-${logo.id}`}
                className="marquee-item flex items-center justify-center w-24 md:w-28 lg:w-32 h-12 md:h-16 lg:h-20"
              >
                <img
                  src={logo.image}
                  alt={logo.title || "Logo"}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo) => (
              <div
                key={`set2-${logo.id}`}
                className="marquee-item flex items-center justify-center w-24 md:w-28 lg:w-32 h-12 md:h-16 lg:h-20"
              >
                <img
                  src={logo.image}
                  alt={logo.title || "Logo"}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certified;
