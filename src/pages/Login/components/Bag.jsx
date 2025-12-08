import React, { useEffect, useState } from "react";

// --- Icons specific to Bag ---
const Icons = {
  Bag: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
  ),
  Trash: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
  )
};

export default function Bag() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const token = localStorage.getItem("authToken");

  const fetchBag = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://127.0.0.1:8000/api/user/bag", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Failed to load bag.");
      } else {
        setItems(data.bag || data.data || []);
      }
    } catch (err) {
      setError("Unable to fetch bag.");
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchBag();
  }, []);

  const removeFromBag = async (id) => {
    if (!window.confirm("Are you sure you want to remove this item?")) return;

    try {
      const res = await fetch(`http://127.0.0.1:8000/api/user/bag/remove/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();

      if (res.ok) {
        setItems((prev) => prev.filter((item) => item.id !== id));
      } else {
        alert(data.message || "Failed to remove item.");
      }
    } catch (err) {
      alert("Failed to remove item.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col mb-8">
        <h1 className="text-3xl font-bold text-slate-900">My Bag</h1>
        <p className="text-slate-500 mt-1">Items you added to your bag.</p>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-3 mb-4 rounded border border-red-200">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center py-20 text-slate-400">Loading...</div>
      ) : items.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-lg border border-dashed border-slate-300">
          <div className="w-16 h-16 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icons.Bag />
          </div>
          <p className="text-slate-500">Your bag is empty.</p>
          <a href="/products" className="text-[#5D5FEF] font-semibold mt-2 inline-block hover:underline">Start Shopping</a>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => {
            const product = item.product;
            const imagePath = product?.images?.[0]?.path || null;
            const imageUrl = imagePath
              ? `http://127.0.0.1:8000/storage/${imagePath}`
              : "https://placehold.co/100x100?text=No+Image";

            return (
              <div
                key={item.id}
                className="group relative bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col"
              >
                {/* Delete Button */}
                <button
                  onClick={() => removeFromBag(item.id)}
                  className="absolute top-2 right-2 z-10 p-2 bg-white/80 hover:bg-red-50 text-slate-400 hover:text-red-50 rounded-full shadow-sm backdrop-blur-sm transition-colors cursor-pointer"
                  title="Remove Item"
                >
                  <Icons.Trash />
                </button>

                {/* Image Area */}
                <div className="h-48 w-full bg-slate-50 flex items-center justify-center overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={product?.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Details Area */}
                <div className="p-4 flex flex-col flex-grow">
                  <h2 className="text-base font-bold text-slate-800 line-clamp-1 mb-1">
                    {product?.name || product?.productName}
                  </h2>

                  <p className="text-xs text-slate-500 uppercase tracking-wide mb-3">
                    Code: {product?.product_code || product?.productCode}
                  </p>

                  <div className="mt-auto pt-3 border-t border-slate-100 flex justify-between items-center">
                    <span className="text-xs text-slate-400">Price</span>
                    <span className="text-lg font-bold text-[#5D5FEF]">
                      $ {product?.discounted_price || product?.price}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}