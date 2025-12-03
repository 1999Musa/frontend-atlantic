import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [swatchRequests, setSwatchRequests] = useState([]);
  const [customRequests, setCustomRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchRequests = async () => {
    setLoading(true);
    setError(null);

    // ✅ Get the token dynamically from localStorage
    const token = localStorage.getItem("authToken");
    if (!token) {
      setError("No API token found. Please login again.");
      setLoading(false);
      return;
    }

    try {
      const [swatchRes, customRes] = await Promise.all([
        fetch("http://127.0.0.1:8000/api/user/swatch-requests", {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }),
        fetch("http://127.0.0.1:8000/api/user/custom-requests", {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }),
      ]);

      if (!swatchRes.ok || !customRes.ok) {
        throw new Error("HTTP error! Could not fetch requests.");
      }

      const swatchData = await swatchRes.json();
      const customData = await customRes.json();

      setSwatchRequests(swatchData.data || []);
      setCustomRequests(customData.data || []);
      setLastUpdated(new Date().toLocaleString());
    } catch (err) {
      console.error("Error loading dashboard:", err);
      setError("Failed to load requests. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (loading) return <div>Loading dashboard...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", marginTop: "100px" }}>
      <h2>My Requests</h2>

      <button
        onClick={fetchRequests}
        style={{
          marginBottom: "20px",
          padding: "8px 16px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Refresh
      </button>

      {lastUpdated && <p>Last updated: {lastUpdated}</p>}

      {/* SWATCH REQUESTS */}
      <section style={{ marginBottom: "40px" }}>
        <h3>Swatch Requests</h3>
        {swatchRequests.length === 0 ? (
          <p>No swatch requests found.</p>
        ) : (
          <table border="1" cellPadding="8" cellSpacing="0">
            <thead>
              <tr>
                <th>ID</th>
                <th>Product Code</th>
                <th>Product Name</th>
                <th>Created At</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {swatchRequests.map((req) => (
                <tr key={req.id}>
                  <td>{req.id}</td>
                  <td>{req.product_code || req.product?.code || "N/A"}</td>
                  <td>{req.product_name || req.product?.name || "N/A"}</td>
                  <td>{new Date(req.created_at).toLocaleString()}</td>
                  <td>{req.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {/* CUSTOM REQUESTS */}
      <section>
        <h3>Customization Requests</h3>
        {customRequests.length === 0 ? (
          <p>No customization requests found.</p>
        ) : (
          <table border="1" cellPadding="8" cellSpacing="0">
            <thead>
              <tr>
                <th>ID</th>
                <th>Product Code</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Created At</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {customRequests.map((req) => (
                <tr key={req.id}>
                  <td>{req.id}</td>
                  <td>{req.product_code || req.product?.code || "N/A"}</td>
                  <td>{req.product_name || req.product?.name || "N/A"}</td>
                  <td>{req.quantity}</td>
                  <td>{new Date(req.created_at).toLocaleString()}</td>
                  <td>{req.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
