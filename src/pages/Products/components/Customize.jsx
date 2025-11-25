import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  TruckIcon,
  ShoppingBagIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

import ReqCustom from "./ReqCustom";
import ReqSwatch from "./ReqSwatch";

const Customize = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const passedProduct = state?.product;

  const [product, setProduct] = useState(passedProduct || null);
  const [activeModal, setActiveModal] = useState(null);

  const isLoggedIn = !!localStorage.getItem("authToken");

  useEffect(() => {
    if (passedProduct) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/categories");
        const categories = await res.json();

        let found = null;
        categories.forEach((cat) =>
          cat.products.forEach((p) => {
            if (p.id === state?.productId) {
              found = {
                productName: p.productName,
                extraDescription: p.extraDescription,
                price: p.price,
                discountedPrice: p.discountedPrice,
                images: p.images,
                productCode: p.productCode,
              };
            }
          })
        );

        setProduct(found);
      } catch (error) {
        console.log("Fetch error:", error);
      }
    };

    fetchProduct();
  }, []);

  if (!product) {
    return (
      <div className="text-center py-32 text-xl font-semibold">
        Loading product...
      </div>
    );
  }

  const [mainImage, setMainImage] = useState(
    product.images?.length ? product.images[0] : null
  );

  // ref for the main image so we can adjust transform and origin
  const imgRef = useRef(null);

  // move transform-origin to follow cursor
  const handleMouseMove = (e) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    if (imgRef.current) {
      imgRef.current.style.transformOrigin = `${x}% ${y}%`;
    }
  };

  const handleMouseEnter = () => {
    if (imgRef.current) {
      // increase scale on enter
      imgRef.current.style.transform = "scale(1.7)";
    }
  };

  const handleMouseLeave = () => {
    if (imgRef.current) {
      // reset origin and scale
      imgRef.current.style.transformOrigin = "center center";
      imgRef.current.style.transform = "scale(1)";
    }
  };

  return (
    <section className="relative max-w-[1250px] mx-auto px-6 py-24 mt-10">
      <div className="md:flex gap-14">
        {/* LEFT IMAGE AREA */}
        <div className="w-full md:w-1/2">
          <div
            className="relative w-full h-[450px] overflow-hidden rounded-lg shadow-md bg-white group cursor-zoom-in"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              ref={imgRef}
              src={mainImage}
              className="w-full h-full object-cover"
              alt="Product"
              style={{
                transformOrigin: "center center",
                transform: "scale(1)",
                transition: "transform 300ms ease, transform-origin 0s",
                willChange: "transform, transform-origin",
              }}
            />
          </div>

          <div className="flex gap-4 justify-center mt-4">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setMainImage(img)}
                className={`w-24 h-24 object-cover rounded-md cursor-pointer shadow-md border-2 ${mainImage === img
                  ? "border-[#FFA273]"
                  : "border-transparent hover:border-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT PRODUCT DETAILS */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 space-y-6">
          <h1 className="text-3xl font-bold">{product.productName}</h1>

          <div className="space-y-4 text-lg text-gray-700">
            <div className="flex flex-wrap items-center gap-3">
              <p
                className={
                  isLoggedIn
                    ? "line-through text-gray-400"
                    : "text-gray-900 font-semibold"
                }
              >
                <strong>Main Price:</strong> ${product.price}
              </p>

              {!isLoggedIn && (
                <div
                  onClick={() => navigate("/log-in")}
                  className="cursor-pointer flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 shadow-sm hover:bg-blue-100"
                >
                  <LockClosedIcon className="w-4 h-4 text-blue-500" />
                  <span className="text-xs font-bold text-blue-600">
                    Login for Discount
                  </span>
                </div>
              )}
            </div>

            {isLoggedIn && product.discountedPrice && (
              <p className="text-green-700 font-bold text-2xl">
                <strong>Discounted Price:</strong> ${product.discountedPrice}
              </p>
            )}
          </div>

          <div className="mt-1 text-base text-gray-700">
            <span className="font-semibold">Product Code:</span> {product.productCode ?? "N/A"}
          </div>

          <p className="text-lg mt-4">
            <strong>Extra Description:</strong>{" "}
            {product.extraDescription && product.extraDescription.trim() !== ""
              ? product.extraDescription
              : "N/A"}
          </p>

          <div className="flex flex-col gap-4 mt-6">
            <button
              onClick={() => {
                if (isLoggedIn) {
                  setActiveModal("custom");
                } else {
                  alert("Please log in to customize this product.");
                  navigate("/log-in");
                }
              }}
              className="w-[60%] py-3 text-white text-lg font-semibold rounded shadow-md hover:brightness-110  cursor-pointer"
              style={{ backgroundColor: "#3A4980" }}
            >
              Customize Product
            </button>

            <button
              onClick={() => {
                if (isLoggedIn) {
                  setActiveModal("swatch");
                } else {
                  alert("Please log in to request a swatch.");
                  navigate("/log-in");
                }
              }}
              className="w-[60%] py-3 text-white text-lg font-semibold rounded shadow-md hover:brightness-110 cursor-pointer"
              style={{ backgroundColor: "#3A4980" }}
            >
              Request Swatch
            </button>
          </div>

          <div className="pt-6 space-y-4 border-t border-gray-200 mt-6">
            <div className="flex items-center gap-3 text-gray-700 font-semibold">
              <TruckIcon className="w-6 h-6 text-green-600" />
              <span>Free Delivery</span>
            </div>

            <div className="flex items-center gap-3 text-gray-700 font-semibold">
              <ShoppingBagIcon className="w-6 h-6 text-red-500" />
              <span>Return Policy Available</span>
            </div>
          </div>
        </div>
      </div>

      {activeModal === "custom" && (
        <ReqCustom product={product} onClose={() => setActiveModal(null)} />
      )}

      {activeModal === "swatch" && (
        <ReqSwatch product={product} onClose={() => setActiveModal(null)} />
      )}
    </section>
  );
};

export default Customize;
