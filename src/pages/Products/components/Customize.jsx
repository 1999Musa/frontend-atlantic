import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TruckIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

const Customize = () => {

  const navigate = useNavigate();  // ✅ FIXED (inside component)
  
  const { state } = useLocation();
  const product = state?.product || {};

  const fallbackImages = [
    "/assets/images/factory/cuttingBG.png",
    "/assets/images/factory/safety1.jpg",
    "/assets/images/factory/facilities1.jpg",
  ];

  const thumbnails = product.images?.length ? product.images : fallbackImages;

  const [mainImage, setMainImage] = useState(
    product.image || thumbnails[0]
  );

  return (
    <section className="max-w-[1250px] mx-auto px-6 py-24 mt-10 md:flex gap-14">

      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2">

        {/* MAIN IMAGE WITH ZOOM */}
        <div
          className="relative w-full h-[450px] overflow-hidden rounded-lg shadow-md bg-white group"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            e.currentTarget.querySelector("img").style.transformOrigin = `${x}% ${y}%`;
          }}
          onMouseEnter={(e) => {
            e.currentTarget.querySelector("img").style.transform = "scale(2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.querySelector("img").style.transform = "scale(1)";
          }}
        >
          <img
            src={mainImage}
            alt="Main"
            className="w-full h-full object-cover transition-transform duration-200 ease-out"
          />
        </div>

        {/* THUMBNAILS */}
        <div className="flex gap-4 justify-center mt-4">
          {thumbnails.map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setMainImage(img)}
              className={`w-24 h-24 object-cover rounded-md cursor-pointer shadow-md border-2 transition 
                ${mainImage === img ? "border-[#FFA273]" : "border-transparent hover:border-gray-300"}`}
            />
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 space-y-6">

        <h1 className="text-3xl font-bold text-[#293037]">
          {product.productName || "Product Name"}
        </h1>

        <div className="space-y-2 text-lg text-gray-700">
          <p><strong>Price:</strong> {product.price || "$000.00"}</p>
          <p><strong>MOQ:</strong> {product.moq || "N/A"}</p>
          <p><strong>FOB:</strong> {product.fob || "N/A"}</p>
          <p><strong>Product Code:</strong> {product.productCode || "N/A"}</p>
        </div>

        <p className="text-lg text-[#5a5a5a] leading-relaxed">
          <strong>Description:</strong> {product.description}
        </p>

        {/* BUTTONS */}
        <button
          onClick={() => navigate("/request-customization", { state: { product } })}
          className="w-[60%] mt-6 py-3 text-white text-lg font-semibold cursor-pointer"
          style={{ backgroundColor: "#3A4980" }}
        >
          Customize Product
        </button>

        <button
          onClick={() => navigate("/request-Swatch", { state: { product } })}
          className="w-[60%] mt-6 py-3 text-white text-lg font-semibold cursor-pointer"
          style={{ backgroundColor: "#3A4980" }}
        >
          Request Swatch
        </button>

        {/* BENEFITS */}
        <div className="pt-4 space-y-4">
          <div className="flex items-center gap-3 font-semibold text-lg">
            <TruckIcon className="w-6 h-6 text-green-700" />
            <span>Free Delivery</span>
          </div>

          <div className="flex items-center gap-3 font-semibold text-lg">
            <ShoppingBagIcon className="w-6 h-6 text-red-600" />
            <span>Return Delivery</span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Customize;
