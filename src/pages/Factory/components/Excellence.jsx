import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Excellence = () => {
  const sectionsData = [
    {
      title: "Store & Kanban",
      description:
        "At Arbella, we follow the Kanban practice to ensure smooth material flow and prevent overproduction.",
    },
    {
      title: "Sample",
      description:
        "Rapid prototyping and design development to bring buyer concepts to life quickly and SMS sample facility.",
    },
    {
      title: "Cutting",
      description:
        "Precision cutting with advanced technology for flawless garment shaping.",
    },
    {
      title: "Production",
      description:
        "A skilled workforce ensuring accuracy, efficiency, and large-scale capacity.",
    },
    {
      title: "Inspection & Finishing",
      description:
        "At Arbella, every garment undergoes strict quality inspection before leaving our factory.",
    },
  ];

  const [imagesData, setImagesData] = useState([]);
  const [currentIndexes, setCurrentIndexes] = useState({});

  // Fetch images from API
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/excellence")
      .then((res) => res.json())
      .then((data) => {
        setImagesData(data);

        // Initialize currentIndexes for each section
        const indexes = {};
        data.forEach((section, i) => {
          indexes[i] = 0;
        });
        setCurrentIndexes(indexes);
      })
      .catch((err) => console.error("Error fetching excellence images:", err));
  }, []);

  const handlePrevious = (sectionId, totalImages) => {
    setCurrentIndexes((prev) => ({
      ...prev,
      [sectionId]:
        prev[sectionId] === 0 ? totalImages - 1 : prev[sectionId] - 1,
    }));
  };

  const handleNext = (sectionId, totalImages) => {
    setCurrentIndexes((prev) => ({
      ...prev,
      [sectionId]:
        prev[sectionId] === totalImages - 1 ? 0 : prev[sectionId] + 1,
    }));
  };

  if (!imagesData.length) return null; // Optional: add loading spinner

  return (
    <section className="w-full bg-white">
      <motion.div
        className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-4xl md:text-5xl lg:text-[64px] font-[IvyPresto_Headline] text-center text-[#000] mb-4"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          Excellence in{" "}
          <span style={{ color: "#FFA475" }}>
            Production & <br /> Responsibility
          </span>
        </motion.h2>
        <motion.p
          className="text-lg md:text-2xl text-center text-[#293037] max-w-3xl mx-auto font-[Montserrat]"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          From precision cutting to community care — Arbella combines quality,
          safety, and ethics in every step.
        </motion.p>
      </motion.div>

      <div className="max-w-[1400px] mx-auto overflow-hidden">
        {sectionsData.map((section, idx) => (
          <motion.div
            key={idx}
            className="relative w-full py-16 md:py-20 lg:py-24"
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <div className="relative z-10 px-4 sm:px-6 lg:px-8">
              <div
                className={`flex flex-col ${
                  idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center justify-between gap-8 lg:gap-12 xl:gap-60`}
              >
                <div className="w-full lg:w-1/2 flex justify-center">
                  <div className="relative w-[529px] h-[352px]">
                    {imagesData[idx] && imagesData[idx].images.length > 0 ? (
                      <img
                        src={imagesData[idx].images[currentIndexes[idx]]}
                        alt={`${section.title} ${currentIndexes[idx] + 1}`}
                        className="w-full h-full object-cover rounded-lg shadow-xl"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">
                        No images uploaded
                      </div>
                    )}

                    {imagesData[idx] && imagesData[idx].images.length > 1 && (
                      <>
                        <button
                          onClick={() =>
                            handlePrevious(idx, imagesData[idx].images.length)
                          }
                          className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center transition-colors cursor-pointer"
                          aria-label="Previous image"
                        >
                          <img
                            src="/assets/icons/arrowLeft.svg"
                            alt="Previous"
                            className="w-[40px] h-[40px]"
                          />
                        </button>

                        <button
                          onClick={() =>
                            handleNext(idx, imagesData[idx].images.length)
                          }
                          className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center transition-colors cursor-pointer"
                          aria-label="Next image"
                        >
                          <img
                            src="/assets/icons/arrowRight.svg"
                            alt="Next"
                            className="w-[40px] h-[40px]"
                          />
                        </button>
                      </>
                    )}
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <h3 className="text-3xl md:text-4xl font-['IvyPresto_Headline'] text-[#000] mb-4 md:mb-6">
                    {section.title}
                  </h3>
                  <p className="text-lg md:text-2xl text-[#293037] leading-relaxed font-['Montserrat']">
                    {section.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Excellence;
