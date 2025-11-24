import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const OurProducts = () => {
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState("ALL");
  const [loading, setLoading] = useState(true);
  const isAuthenticated = !!localStorage.getItem("authToken");
  const [mustLoginIndex, setMustLoginIndex] = useState(null);


  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/categories")
      .then((res) => res.json())
      .then((data) => {
        // data is array of categories with products array
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
        setLoading(false);
      });
  }, []);

  // ✅ Build tabs from category titles
  const tabs = ["ALL", ...categories.map((cat) => cat.title.toUpperCase())];

  // ✅ Get filtered products
  const getFilteredProducts = () => {
    if (activeTab === "ALL") {
      return categories.flatMap((cat) =>
        cat.products.map((prod) => ({
          image: prod.images && prod.images.length ? prod.images[0] : null,
          images: prod.images || [],
          category: cat.title,
          description: prod.description || cat.description,
          heroImage: cat.heroImage,
          productName: prod.productName,
          productCode: prod.productCode ?? "N/A",
          moq: prod.moq ?? "N/A",
          fob: prod.fob ?? "N/A",
        }))
      );
    } else {
      const category = categories.find(
        (cat) => cat.title.toUpperCase() === activeTab
      );
      if (!category) return [];
      return category.products.map((prod) => ({
        image: prod.images && prod.images.length ? prod.images[0] : null,
        images: prod.images || [],
        category: category.title,
        description: prod.description || category.description,
        heroImage: category.heroImage,
        productName: prod.productName,
        productCode: prod.productCode ?? "N/A",
        moq: prod.moq ?? "N/A",
        fob: prod.fob ?? "N/A",
      }));
    }
  };

  const filteredProducts = getFilteredProducts();

  if (loading) {
    return (
      <section className="w-full bg-[#F7FDFF] py-32 text-center text-lg font-[Poppins]">
        Loading products...
      </section>
    );
  }

  return (
    <section className="w-full bg-[#F7FDFF] pt-32 md:pt-35 pb-12 md:pb-16 lg:pb-20 font-[Poppins]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-4xl md:text-[50px] font-[playfair_display] text-center mb-8 md:mb-12">
          Our <span style={{ color: "#FFA475" }}>Products</span>
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-base md:text-xl font-medium pb-2 transition-colors cursor-pointer ${activeTab === tab
                ? "border-b-2"
                : "text-[#868686] hover:text-gray-700"
                }`}
              style={{
                color: activeTab === tab ? "#FFA273" : undefined,
                borderColor: activeTab === tab ? "#FFA273" : "transparent",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-6">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="flex flex-col cursor-pointer"
              onClick={() => {
                if (isAuthenticated) {
                  // go to customize page
                  window.location.href = "/customize";
                } else {
                  // show login warning below the specific card
                  setMustLoginIndex(index);
                }
              }}
            >
              <div className="relative w-full overflow-hidden rounded-2xl shadow-md bg-white" style={{ paddingTop: "100%" }}>
                <img
                  src={product.image}
                  alt={product.productName}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col text-center">
                <h3 className="text-lg md:text-[22px] font-semibold text-[#373737] mb-1">
                  {product.productName}
                </h3>

                {product.productCode && (
                  <p className="text-sm md:text-base font-semibold mb-1" style={{ color: "#b44208ff" }}>
                    Product Code: {product.productCode}
                  </p>
                )}

                {product.moq && <p className="text-sm md:text-base text-[#717171] mb-1">MOQ: {product.moq}</p>}
                {product.fob && <p className="text-sm md:text-base text-[#717171] mb-3">FOB: {product.fob}</p>}
                <p className="text-sm text-[#293037]">
                  {product.description}
                </p>
              </div>

              {/* 🔥 LOGIN REQUIRED MESSAGE */}
              {!isAuthenticated && mustLoginIndex === index && (
                <p className="text-red-600 text-center mt-2 text-sm font-medium">
                  Log in to customize products
                </p>
              )}
            </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;