import React, { useEffect, useState } from "react";

// --- Icons specific to Requests ---
const Icons = {
  Refresh: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 4v6h-6"></path><path d="M1 20v-6h6"></path><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
  ),
  Plus: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
  ),
};

const StatusBadge = ({ status }) => {
  const normalized = (status || "Pending").toLowerCase();
  let dotColor = "bg-red-500";

  if (normalized === "approved") dotColor = "bg-green-500";
  else if (normalized === "delivered") dotColor = "bg-blue-500";
  else if (normalized === "completed") dotColor = "bg-green-500";
  else if (normalized === "canceled" || normalized === "rejected") dotColor = "bg-red-500";

  return (
    <div className="flex items-center gap-2">
      <span className={`w-2 h-2 rounded-full ${dotColor}`}></span>
      <span className="text-sm font-medium capitalize">{status || "Pending"}</span>
    </div>
  );
};

const RequestTable = ({ title, data, type }) => (
  <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full">
    <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-white">
      <h3 className="font-bold text-slate-800 text-lg">{title}</h3>
      <a
        href="/products"
        className="flex items-center gap-1 bg-[#5D5FEF] text-white text-xs px-3 py-1.5 rounded hover:bg-[#4a4ce6] transition-colors"
      >
        <Icons.Plus /> Add {type}
      </a>
    </div>

    <div className="grid grid-cols-12 bg-gray-50 p-3 text-xs font-bold text-slate-800">
      <div className="col-span-5 pl-2">Product Name</div>
      <div className="col-span-3">Request ID</div>
      <div className="col-span-4">Status</div>
    </div>

    <div className="divide-y divide-slate-100 flex-grow">
      {data.length === 0 ? (
        <div className="p-6 text-center text-slate-400 text-sm italic">
          No {type} requests yet.
        </div>
      ) : (
        data.map((req) => (
          <div key={req.id} className="grid grid-cols-12 p-4 items-center hover:bg-slate-50 transition-colors text-sm">
            <div className="col-span-5 flex flex-col pl-2">
              <span className="font-medium text-slate-700">{req.product_name}</span>
              <span className="text-xs text-slate-400 mt-0.5 truncate pr-2">
                {req.message ? req.message.substring(0, 20) + "..." : "No details"}
              </span>
            </div>
            <div className="col-span-3 font-mono text-slate-500 text-xs">
              {type === "Custom" ? "CR" : "SW"}-{req.id}
            </div>
            <div className="col-span-4">
              <StatusBadge status={req.status} />
            </div>
          </div>
        ))
      )}
    </div>
  </div>
);

export default function Requests() {
  const [customRequests, setCustomRequests] = useState([]);
  const [swatchRequests, setSwatchRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchRequests = async () => {
    setLoading(true);
    const token = localStorage.getItem("authToken");

    if (!token) {
      setError("You are not logged in");
      setLoading(false);
      return;
    }

    try {
      // MERGED CLEAN VERSION
      const [customRes, swatchRes] = await Promise.all([
        fetch("http://127.0.0.1:8000/api/user/custom-requests", {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch("http://127.0.0.1:8000/api/user/swatch-requests", {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      if (!customRes.ok || !swatchRes.ok) throw new Error("Failed to fetch data");

      const customData = await customRes.json();
      const swatchData = await swatchRes.json();

      setCustomRequests(customData.data || []);
      setSwatchRequests(swatchData.data || []);
      setError("");
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className="max-w-6xl mx-auto animate-in fade-in zoom-in-95 duration-300">
      <div className="flex flex-col mb-6">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">My Requests</h1>
            <p className="text-slate-500 mt-1">
              Here’s your quick access to customization and swatches.
            </p>
          </div>

          <button
            onClick={fetchRequests}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 text-sm font-medium hover:bg-slate-50 transition-all shadow-sm"
          >
            <Icons.Refresh /> Refresh
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded mb-6 text-sm border border-red-200">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center py-20 text-slate-400">Loading requests...</div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RequestTable title="Customization Requests" data={customRequests} type="Custom" />
          <RequestTable title="Swatch Requests" data={swatchRequests} type="Swatch" />
        </div>
      )}
    </div>
  );
}
