import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductVarient = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch product sliders from Laravel API
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/product-sliders")
      .then((res) => res.json())
      .then((data) => {
        // Map images to full URLs
        const mapped = data.map((item) => ({
          title: item.title,
          description: item.description,
          img: item.image ? `http://127.0.0.1:8000/storage/${item.image}` : null,
        }));
        setProducts(mapped.filter((item) => item.img)); // only include items with images
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product sliders:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="flex justify-center items-center h-[400px]">
        Loading products...
      </section>
    );
  }

  if (!products.length) {
    return (
      <section className="flex justify-center items-center h-[400px]">
        No products available.
      </section>
    );
  }

  return (
    <section className="bg-[#F7FDFF] py-12 sm:py-16 lg:py-20 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-0">
      {/* heading */}
      <motion.div
        className="text-center mb-12 sm:mb-16 lg:mb-25"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className='font-["Playfair_Display"] text-[28px] sm:text-[36px] lg:text-[48px] font-normal leading-[36px] sm:leading-[48px] lg:leading-[60px] tracking-[-0.7px] text-[#293037]'>
          Delivering A <span className="text-[#FFA273]"> Broad and Versatile
          </span> <br /> <span className="text-[#FFA273]">Product</span> Line
        </h2>
      </motion.div>

      {/* product images */}
      <div className="flex flex-wrap sm:flex-nowrap gap-4 sm:gap-6 lg:gap-[24px] justify-center items-end">
        {products.map((item, index) => (
          <motion.div
            key={index}
            className={`relative w-[160px] sm:w-[180px] lg:w-[250%] h-[400px] sm:h-[500px] lg:h-[607.743px] flex-shrink-0 rounded-sm overflow-hidden group cursor-pointer ${index % 2 === 1
              ? "sm:translate-y-[30px] lg:translate-y-[60px]"
              : "-translate-y-[0px]"
              }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            {/* Background Image with Zoom Effect */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(37,37,37,0.38) 5.3%, rgba(6,5,5,0.18) 89.98%), url(${item.img})`,
              }}
            />

            {/* Hover effect */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.63)_5.3%,rgba(0,0,0,0.67)_56.29%,rgba(0,0,0,0.65)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Arrow icon */}

            <Link to="/products">
              <img
                src="/assets/icons/Arrow.svg"
                alt="Arrow"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 lg:w-auto lg:h-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              />
            </Link>

            {/* vertical title */}
            <div className="absolute left-[40px] sm:left-[60px] lg:left-[80px] bottom-[10%] -translate-y-1/2 rotate-[-90deg] flex justify-center items-center w-[160px] sm:w-[200px] lg:w-[231.619px] h-[50px] sm:h-[60px] lg:h-[69.664px]">
              <p className='text-white font-["Playfair_Display"] text-[16px] sm:text-[20px] lg:text-[30.141px] font-normal tracking-[1.5px] sm:tracking-[2px] lg:tracking-[3.014px] uppercase whitespace-nowrap'>
                {item.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductVarient;
