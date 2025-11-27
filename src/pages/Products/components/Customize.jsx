import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { TruckIcon, ShoppingBagIcon, LockClosedIcon } from "@heroicons/react/24/outline";

import ReqCustom from "./ReqCustom";
import ReqSwatch from "./ReqSwatch";

const Customize = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const productId = state?.productId;

  const [product, setProduct] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const imgRef = useRef(null);

  const isLoggedIn = !!localStorage.getItem("authToken");

  // 🔹 Fetch product in real time
  const fetchProduct = async () => {
    if (!productId) return;
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/products/${productId}`);
      const data = await res.json();
      setProduct(data);

      // Determine the default first image
      const first =
        data.images?.length
          ? data.images[0]
          : data.customizeImages?.length
            ? data.customizeImages[0]
            : null;

      // Only set the main image if it's currently empty (initial load).
      setMainImage((prev) => prev || first);
      
    } catch (err) {
      console.log("Error fetching product:", err);
    }
  };

  useEffect(() => {
    // Reset main image when switching to a DIFFERENT product ID
    setMainImage(null);
    
    fetchProduct();
    const interval = setInterval(fetchProduct, 3000);
    return () => clearInterval(interval);
  }, [productId]);

  // 🖼 Zoom handlers
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    if (imgRef.current) imgRef.current.style.transformOrigin = `${x}% ${y}%`;
  };
  const handleMouseEnter = () => { if (imgRef.current) imgRef.current.style.transform = "scale(1.7)"; };
  const handleMouseLeave = () => { if (imgRef.current) imgRef.current.style.transform = "scale(1)"; imgRef.current.style.transformOrigin = "center center"; };

  if (!product) return <div className="text-center py-32 text-xl font-semibold">Loading product...</div>;

  const thumbImages = [...(product.images || []), ...(product.customizeImages || [])];

  return (
    <section className="relative max-w-[1250px] mx-auto px-6 py-24 mt-10">
      
      {/* 🔹 CUSTOM STYLES FOR THE ANIMATION */}
      <style>{`
        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes modernBlink {
          0%, 100% { box-shadow: 0 0 0px rgba(59, 130, 246, 0); transform: scale(1); }
          50% { box-shadow: 0 0 15px rgba(59, 130, 246, 0.6); transform: scale(1.03); }
        }
        .animate-entrance {
          animation: slideInRight 2.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .animate-attention {
          animation: modernBlink 2s infinite ease-in-out;
        }
      `}</style>

      <div className="md:flex gap-14">
        {/* LEFT IMAGE AREA */}
        <div className="w-full md:w-1/2">
          <div className="flex items-start gap-6">
            <div
              className="relative w-[450px] h-[450px] overflow-hidden rounded-lg shadow-md bg-white group cursor-zoom-in"
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                ref={imgRef}
                src={mainImage}
                className="w-full h-full object-contain"
                alt="Product"
                style={{
                  transformOrigin: "center center",
                  transform: "scale(1)",
                  transition: "transform 300ms ease, transform-origin 0s",
                  willChange: "transform, transform-origin",
                }}
              />
            </div>

            <div className="flex flex-col gap-3 mt-2">
              {thumbImages.map((img, i) => {
                const isCustomize =
                  product.customizeImages?.includes(img) && !product.images?.includes(img);
                return (
                  <button
                    key={i}
                    onClick={() => setMainImage(img)}
                    onMouseEnter={() => setMainImage(img)}
                    className={`w-24 h-24 p-0 rounded-md overflow-hidden shadow-md border-2 focus:outline-none ${mainImage === img ? "border-[#FFA273]" : "border-transparent hover:border-gray-300"
                      }`}
                    type="button"
                  >
                    <img
                      src={img}
                      alt={`thumb-${i}`}
                      className="w-full h-full object-cover cursor-pointer"
                    />
                    {isCustomize && (
                      <span className="absolute right-1 top-1 bg-[#3A4980] text-white text-xs px-1 rounded">
                        Custom
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT PRODUCT DETAILS */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 space-y-6">
          <h1 className="text-3xl font-bold">{product.productName}</h1>

          <div className="space-y-4 text-lg text-gray-700">
            {/* 🔹 PRICE & DISCOUNT BUTTON AREA */}
            <div className="flex flex-wrap items-center gap-4 overflow-hidden p-1">
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
                  className="animate-entrance"
                >
                  <div className="group relative cursor-pointer animate-attention rounded-full">
                    <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                    
                    <div className="relative flex items-center gap-2 rounded-full bg-white px-4 py-1.5 ring-1 ring-gray-900/5">
                      <LockClosedIcon className="w-4 h-4 text-blue-600 transition-transform group-hover:scale-110" />
                      <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        Login for Discount
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {isLoggedIn && product.discountedPrice && (
              <p className="text-gray-900 font-bold text-2xl">
                <strong>Discounted Price:</strong> ${product.discountedPrice}
              </p>
            )}
          </div>

          <div className="mt-0 text-base text-gray-700">
            <span className="font-semibold">Product Code:</span> {product.productCode ?? "N/A"}
          </div>

          {/* 🔹 EXTRA DESCRIPTION WITH HTML PARSING & STYLING */}
          <div className="mt-4">
            <strong className="text-lg block mb-2">Description:</strong>
            
            {product.extraDescription && product.extraDescription.trim() !== "" ? (
              <div 
                className="text-gray-700 text-base leading-relaxed
                  [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-2 
                  [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:mb-2
                  [&>p]:mb-2
                  [&>strong]:font-bold [&>b]:font-bold 
                  [&>em]:italic [&>i]:italic
                  [&>h1]:text-2xl [&>h1]:font-bold [&>h1]:mb-2
                  [&>h2]:text-xl [&>h2]:font-bold [&>h2]:mb-2
                  [&>a]:text-blue-600 [&>a]:underline"
                dangerouslySetInnerHTML={{ __html: product.extraDescription }}
              />
            ) : (
              <p className="text-lg">N/A</p>
            )}
          </div>

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
              className="w-[60%] py-3 text-white text-lg font-semibold  shadow-md hover:brightness-110 cursor-pointer"
              style={{ backgroundColor: "#2b3761ff" }}
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
              className="w-[60%] py-3 text-white text-lg font-semibold  shadow-md hover:brightness-110 cursor-pointer"
              style={{ backgroundColor: "#2b3761ff" }}
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