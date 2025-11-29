import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [swatchRequests, setSwatchRequests] = useState([]);
  const [customRequests, setCustomRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("authToken");

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    setLoading(true);

    try {
      // Fetch Swatch Requests
      const swatchRes = await fetch("http://127.0.0.1:8000/api/user/swatch-requests", {
  headers: { Authorization: `Bearer ${token}` },
});

      const swatchData = await swatchRes.json();

      if (swatchData.success) {
        setSwatchRequests(swatchData.data);
      }

      // Fetch Custom Requests
const customRes = await fetch("http://127.0.0.1:8000/api/user/custom-requests", {
  headers: { Authorization: `Bearer ${token}` },
});

      const customData = await customRes.json();

      if (customData.success) {
        setCustomRequests(customData.data);
      }
    } catch (error) {
      console.error("Error loading dashboard:", error);
    }

    setLoading(false);
  };

  if (loading) {
    return <div className="p-6 text-center text-xl ">Loading...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 mt-30">My Requests</h1>

      {/* Swatch Requests */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Swatch Requests</h2>

        {swatchRequests.length === 0 ? (
          <p className="text-gray-500">No swatch requests found.</p>
        ) : (
          <div className="space-y-4">
            {swatchRequests.map((req) => (
  <div key={req.id} className="p-4 border rounded-lg shadow-sm bg-white flex justify-between items-center">
    <div>
      <p><strong>Product Code:</strong> {req.product_code}</p>
      <p><strong>Product Name:</strong> {req.product_name}</p>
      <p><strong>Date:</strong> {new Date(req.created_at).toLocaleDateString()}</p>
    </div>
    <span className={`px-3 py-1 text-sm rounded-full ${
      req.status === "pending"
        ? "bg-yellow-200 text-yellow-700"
        : req.status === "approved"
        ? "bg-green-200 text-green-700"
        : "bg-red-200 text-red-700"
    }`}>{req.status}</span>
  </div>
))}
          </div>
        )}
      </section>

      {/* Custom Requests */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Customization Requests</h2>

        {customRequests.length === 0 ? (
          <p className="text-gray-500">No customization requests found.</p>
        ) : (
          <div className="space-y-4">
            {customRequests.map((req) => (
  <div key={req.id} className="p-4 border rounded-lg shadow-sm bg-white flex justify-between items-center">
    <div>
      <p><strong>Product Code:</strong> {req.product_code}</p>
      <p><strong>Product Name:</strong> {req.product_name}</p>
      <p><strong>Quantity:</strong> {req.quantity}</p>
      <p><strong>Date:</strong> {new Date(req.created_at).toLocaleDateString()}</p>
    </div>
    <span className={`px-3 py-1 text-sm rounded-full ${
      req.status === "pending"
        ? "bg-yellow-200 text-yellow-700"
        : req.status === "approved"
        ? "bg-green-200 text-green-700"
        : "bg-red-200 text-red-700"
    }`}>{req.status}</span>
  </div>
))}
          </div>
        )}
      </section>
    </div>
  );
}
