import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  TruckIcon, 
  ShoppingBagIcon as ShoppingBagOutline, // Renamed to avoid conflict
  LockClosedIcon,
  CheckCircleIcon 
} from "@heroicons/react/24/outline";

import ReqCustom from "./ReqCustom";
import ReqSwatch from "./ReqSwatch";

// 🔹 The Specific Icon requested
const BagIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

const Customize = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const productId = state?.productId;

  const [product, setProduct] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [addingToBag, setAddingToBag] = useState(false); // Loading state for bag
  const [bagSuccess, setBagSuccess] = useState(false);   // Success state
  
  const imgRef = useRef(null);
  const isLoggedIn = !!localStorage.getItem("authToken");

  // 🔹 Fetch product
  const fetchProduct = async () => {
    if (!productId) return;
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/products/${productId}`);
      const data = await res.json();
      setProduct(data);

      const first = data.images?.length ? data.images[0] : 
                    data.customizeImages?.length ? data.customizeImages[0] : null;

      setMainImage((prev) => prev || first);
    } catch (err) {
      console.log("Error fetching product:", err);
    }
  };

  useEffect(() => {
    setMainImage(null);
    fetchProduct();
  }, [productId]);

  // 🔹 Handle Add To Bag (Favorites)
  const handleAddToBag = async () => {
    if (!isLoggedIn) {
      if(window.confirm("You must be logged in to add items to your Bag. Go to login?")) {
        navigate("/log-in");
      }
      return;
    }

    setAddingToBag(true);
    const token = localStorage.getItem("authToken");

    try {
      const res = await fetch("http://127.0.0.1:8000/api/user/bag/add", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` 
        },
        body: JSON.stringify({ product_id: product.id })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setBagSuccess(true);
        // Reset success message after 3 seconds
        setTimeout(() => setBagSuccess(false), 3000);
      } else {
        alert(data.message || "Failed to add to bag");
      }
    } catch (error) {
      console.error(error);
      alert("Network error occurred");
    } finally {
      setAddingToBag(false);
    }
  };

  // 🖼 Zoom handlers
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    if (imgRef.current) imgRef.current.style.transformOrigin = `${x}% ${y}%`;
  };
  const handleMouseEnter = () => { if (imgRef.current) imgRef.current.style.transform = "scale(1.7)"; };
  const handleMouseLeave = () => { if (imgRef.current) imgRef.current.style.transform = "scale(1)"; imgRef.current.style.transformOrigin = "center center"; };

  if (!product) return <div className="min-h-screen flex items-center justify-center bg-[#F7FDFF]"><div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-600"></div></div>;

  const thumbImages = [...(product.images || []), ...(product.customizeImages || [])];

  return (
    <section className="relative max-w-[1250px] mx-auto px-6 py-24 mt-10 font-sans">
      
      <style>{`
        @keyframes slideInRight { 0% { opacity: 0; transform: translateX(50px); } 100% { opacity: 1; transform: translateX(0); } }
        @keyframes modernBlink { 0%, 100% { box-shadow: 0 0 0px rgba(59, 130, 246, 0); transform: scale(1); } 50% { box-shadow: 0 0 15px rgba(59, 130, 246, 0.6); transform: scale(1.03); } }
        .animate-entrance { animation: slideInRight 2.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .animate-attention { animation: modernBlink 2s infinite ease-in-out; }
      `}</style>

      <div className="md:flex gap-14">
        {/* LEFT IMAGE AREA */}
        <div className="w-full md:w-1/2">
          <div className="flex items-start gap-6">
            <div
              className="relative w-[450px] h-[450px] overflow-hidden rounded-lg shadow-md bg-white group cursor-zoom-in border border-gray-100"
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

            <div className="flex flex-col gap-3 mt-2 h-[450px] overflow-y-auto scrollbar-hide">
              {thumbImages.map((img, i) => {
                const isCustomize = product.customizeImages?.includes(img) && !product.images?.includes(img);
                return (
                  <button
                    key={i}
                    onClick={() => setMainImage(img)}
                    onMouseEnter={() => setMainImage(img)}
                    className={`relative w-24 h-24 p-0 rounded-md overflow-hidden shadow-sm border-2 focus:outline-none flex-shrink-0 bg-white ${mainImage === img ? "border-[#FFA273]" : "border-transparent hover:border-gray-300"}`}
                    type="button"
                  >
                    <img src={img} alt={`thumb-${i}`} className="w-full h-full object-cover cursor-pointer" />
                    {/* {isCustomize && (
                      <span className="absolute bottom-0 left-0 w-full bg-[#3A4980] text-white text-[10px] text-center py-0.5">Custom</span>
                    )} */}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT PRODUCT DETAILS */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 space-y-6">
          
          {/* 🔹 HEADER: Title + Favorite Bag Button */}
          <div className="flex justify-between items-start gap-4">
            <h1 className="text-3xl font-bold text-slate-900 leading-tight">
              {product.productName}
            </h1>
            
            <button
              onClick={handleAddToBag}
              disabled={addingToBag}
              className={`group flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-300 shadow-sm cursor-pointer
                ${bagSuccess 
                  ? "bg-green-50 border-green-200 text-green-600" 
                  : "bg-white border-slate-200 text-slate-500 hover:border-[#FFA273] hover:text-[#FFA273] hover:shadow-md"
                }
              `}
              title="Add to My Bag"
            >
              {addingToBag ? (
                <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
              ) : bagSuccess ? (
                <CheckCircleIcon className="w-6 h-6 animate-bounce" />
              ) : (
                <BagIcon />
              )}
            </button>
          </div>

          <div className="space-y-4 text-lg text-gray-700">
            {/* PRICE & DISCOUNT */}
            <div className="flex flex-wrap items-center gap-4 overflow-hidden p-1">
              <p className={isLoggedIn ? "line-through text-gray-400" : "text-gray-900 font-semibold"}>
                <strong>Main Price:</strong> ${product.price}
              </p>

              {!isLoggedIn && (
                <div onClick={() => navigate("/log-in")} className="animate-entrance cursor-pointer">
                  <div className="group relative animate-attention rounded-full">
                    <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-75 blur transition duration-1000 group-hover:opacity-100"></div>
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

          {/* DESCRIPTION */}
          <div className="mt-4">
            <strong className="text-lg block mb-2">Description:</strong>
            {product.extraDescription && product.extraDescription.trim() !== "" ? (
              <div 
                className="text-gray-700 text-base leading-relaxed [&>ul]:list-disc [&>ul]:pl-5 [&>a]:text-blue-600 [&>a]:underline"
                dangerouslySetInnerHTML={{ __html: product.extraDescription }}
              />
            ) : (
              <p className="text-lg">N/A</p>
            )}
          </div>

          <div className="flex flex-col gap-4 mt-6">
            <button
              onClick={() => isLoggedIn ? setActiveModal("custom") : navigate("/log-in")}
              className="w-[60%] py-3 text-white text-lg font-semibold shadow-md hover:brightness-110 cursor-pointer transition-transform active:scale-95"
              style={{ backgroundColor: "#2b3761ff" }}
            >
              Customize Product
            </button>

            <button
              onClick={() => isLoggedIn ? setActiveModal("swatch") : navigate("/log-in")}
              className="w-[60%] py-3 text-white text-lg font-semibold shadow-md hover:brightness-110 cursor-pointer transition-transform active:scale-95"
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
              <ShoppingBagOutline className="w-6 h-6 text-red-500" />
              <span>Return Policy Available</span>
            </div>
          </div>
        </div>
      </div>

      {activeModal === "custom" && <ReqCustom product={product} onClose={() => setActiveModal(null)} />}
      {activeModal === "swatch" && <ReqSwatch product={product} onClose={() => setActiveModal(null)} />}
    </section>
  );
};

export default Customize;