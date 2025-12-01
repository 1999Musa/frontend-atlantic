import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OurProducts = () => {
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState("ALL");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
        setLoading(false);
      });
  }, []);

  const tabs = ["ALL", ...categories.map((cat) => cat.title.toUpperCase())];

  // Helper: Strip HTML tags safely
  const stripHtml = (html) => {
    if (!html) return null;
    const div = document.createElement("div");
    div.innerHTML = html;
    const text = div.textContent || div.innerText || "";
    return text.trim() || null;
  };

  const mapProduct = (prod, categoryDescription) => {
    const cleanDescription = stripHtml(prod.description) || stripHtml(categoryDescription);

    return {
      id: prod.id,
      productName: prod.productName,
      productCode: prod.productCode ?? null,
      moq: prod.moq ?? null,
      fob: prod.fob ?? null,
      price: prod.price ?? null,
      discountedPrice: prod.discountedPrice ?? null,
      extraDescription: prod.extraDescription ?? null,
      description: cleanDescription, // Only clean text here
      images: prod.images || [],
      image: prod.images?.length ? prod.images[0] : null,
      customizeImages: prod.customizeImages || [],
    };
  };

  const getFilteredProducts = () => {
    if (activeTab === "ALL") {
      return categories.flatMap((cat) =>
        cat.products.map((prod) => mapProduct(prod, cat.description))
      );
    }
    const category = categories.find(
      (cat) => cat.title.toUpperCase() === activeTab
    );
    if (!category) return [];
    return category.products.map((prod) =>
      mapProduct(prod, category.description)
    );
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
    <section className="w-full bg-[#F7FDFF] pt-32 pb-16 font-[Poppins]">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-4xl md:text-[50px] font-[playfair_display] text-center mb-10">
          Our <span style={{ color: "#FFA475" }}>Products</span>
        </h2>

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xl pb-2 transition font-medium ${
                activeTab === tab
                  ? "text-[#FFA273] border-b-2 border-[#FFA273]"
                  : "text-[#868686] hover:text-gray-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col cursor-pointer group"
              onClick={() => navigate("/customize", { state: { productId: product.id } })}
            >
              <div
                className="relative w-full overflow-hidden rounded-2xl shadow-md bg-white "
                style={{ paddingTop: "100%" }}
              >
                <img
                  src={product.image || "/placeholder.jpg"}
                  alt={product.productName}
                  className="absolute top-0 left-0 w-full h-full object-cover "
                />
              </div>

              <div className="flex flex-col text-center mt-4">
                <h3 className="text-lg md:text-[22px] font-semibold text-[#373737] mb-1">
                  {product.productName}
                </h3>

                {product.productCode && (
                  <p className="text-sm text-[#b44208] font-semibold">
                    Product Code: {product.productCode}
                  </p>
                )}

                {product.moq && (
                  <p className="text-sm text-[#717171]">MOQ: {product.moq}</p>
                )}

                {product.fob && (
                  <p className="text-sm text-[#717171] mb-2">
                    FOB: {product.fob}
                  </p>
                )}

                {product.description ? (
                  <p className="text-sm text-[#293037] line-clamp-2 mt-1">
                    {product.description}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;