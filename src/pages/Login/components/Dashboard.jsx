import React, { useEffect, useState } from "react";

// --- Icons ---
const Icons = {
  Logo: () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="20" fill="#1d4ed8" />
      <path d="M20 10L23 18H32L25 24L28 32L20 26L12 32L15 24L8 18H17L20 10Z" fill="white" />
    </svg>
  ),
  Grid: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
  ),
  Bag: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
  ),
  User: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
  ),
  Folder: () => ( // This represents "Requests"
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
  ),
  Settings: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
  ),
  Refresh: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 4v6h-6"></path><path d="M1 20v-6h6"></path><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
  ),
  Plus: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
  )
};

// --- Sub-Components ---

const SidebarItem = ({ icon: Icon, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all mb-4 ${
      active ? "bg-[#5D5FEF] text-white shadow-lg" : "text-gray-400 hover:text-white hover:bg-white/10"
    }`}
  >
    <Icon />
  </button>
);

const StatusBadge = ({ status }) => {
  const normalized = (status || "Pending").toLowerCase();
  
  // Matching colors from your screenshot image_56f064.png
  let dotColor = "bg-red-500"; // Pending looked red in the screenshot
  let textColor = "text-slate-700";

  if (normalized === "approved") {
    dotColor = "bg-green-500";
  } else if (normalized === "delivered") {
    dotColor = "bg-blue-500";
  } else if (normalized === "completed") {
    dotColor = "bg-green-500";
  } else if (normalized === "canceled" || normalized === "rejected") {
    dotColor = "bg-red-500";
  }

  return (
    <div className="flex items-center gap-2">
      <span className={`w-2 h-2 rounded-full ${dotColor}`}></span>
      <span className={`text-sm font-medium capitalize ${textColor}`}>{status || "Pending"}</span>
    </div>
  );
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("requests"); // Controls Sidebar state
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
      const [customRes, swatchRes] = await Promise.all([
        fetch("http://127.0.0.1:8000/api/user/custom-requests", {
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        }),
        fetch("http://127.0.0.1:8000/api/user/swatch-requests", {
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
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

  // Shared Table Logic
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
      
      {/* Table Header - Matching the gray background from screenshot */}
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
                   {/* Date placeholder if API doesn't have it, or message */}
                   {req.message ? req.message.substring(0, 20) + "..." : "No details"}
                </span>
              </div>
              <div className="col-span-3 font-mono text-slate-500 text-xs">
                {type === 'Custom' ? 'CR' : 'SW'}-{req.id}
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

  return (
    <div className="flex min-h-screen bg-[#F3F4F6] font-sans">
      
      {/* --- Sidebar (Matches Image 1) --- */}
      <aside className="w-20 bg-[#1E1E24] flex flex-col items-center py-6 flex-shrink-0 mt-22">
        <div className="mb-10">
          <Icons.Logo />
        </div>
        
        <nav className="flex flex-col items-center w-full">
          <SidebarItem 
            icon={Icons.Grid} 
            active={activeTab === "dashboard"} 
            onClick={() => setActiveTab("dashboard")} 
          />
          <SidebarItem 
            icon={Icons.Bag} 
            active={activeTab === "shop"} 
            onClick={() => setActiveTab("shop")} 
          />
          {/* This represents the "Customize" icon user requested */}
          <SidebarItem 
            icon={Icons.Folder} 
            active={activeTab === "requests"} 
            onClick={() => setActiveTab("requests")} 
          />
          <SidebarItem 
            icon={Icons.User} 
            active={activeTab === "profile"} 
            onClick={() => setActiveTab("profile")} 
          />
        </nav>

        <div className="mt-auto">
          <SidebarItem icon={Icons.Settings} />
        </div>
      </aside>

      {/* --- Main Content Area --- */}
      <main className="flex-grow p-8 overflow-y-auto mt-20">
        
        {/* Only show dashboard if "requests" tab is active (simulated navigation) */}
        {activeTab === "requests" ? (
          <div className="max-w-6xl mx-auto">
            
            {/* Header with Breadcrumb and Refresh */}
            <div className="flex flex-col mb-6">
              <div className="text-sm text-slate-500 mb-1 cursor-pointer hover:underline">
                &lt; Back
              </div>
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
                {/* Left Side: Custom Requests */}
                <RequestTable 
                  title="Customization Requests" 
                  data={customRequests} 
                  type="Custom" 
                />

                {/* Right Side: Swatch Requests */}
                <RequestTable 
                  title="Swatch Requests" 
                  data={swatchRequests} 
                  type="Swatch" 
                />
              </div>
            )}
          </div>
        ) : (
          /* Placeholder for other sidebar tabs */
          <div className="flex items-center justify-center h-full text-slate-400">
            Select the Folder icon to view Requests
          </div>
        )}
      </main>
    </div>
  );
}