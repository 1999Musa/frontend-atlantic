import React, { useEffect, useState } from "react";

// ==========================================
// 1. ICONS
// ==========================================
const Icons = {
  Logo: () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="20" fill="#1d4ed8" />
      <path d="M20 10L23 18H32L25 24L28 32L20 26L12 32L15 24L8 18H17L20 10Z" fill="white" />
    </svg>
  ),
  Bag: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
  ),
  User: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
  ),
  Folder: () => (
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
  ),
  Lock: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
  ),
  Trash: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
  )
};

// ==========================================
// 2. SHARED SUB-COMPONENTS
// ==========================================

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
  
  let dotColor = "bg-red-500"; 
  let textColor = "text-slate-700";

  if (normalized === "approved") { dotColor = "bg-green-500"; } 
  else if (normalized === "delivered") { dotColor = "bg-blue-500"; } 
  else if (normalized === "completed") { dotColor = "bg-green-500"; } 
  else if (normalized === "canceled" || normalized === "rejected") { dotColor = "bg-red-500"; }

  return (
    <div className="flex items-center gap-2">
      <span className={`w-2 h-2 rounded-full ${dotColor}`}></span>
      <span className={`text-sm font-medium capitalize ${textColor}`}>{status || "Pending"}</span>
    </div>
  );
};

// ==========================================
// 3. BAG VIEW COMPONENT (Your Logic)
// ==========================================
const BagView = () => {
  const [bag, setBag] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Use 'authToken' to match other components
  const token = localStorage.getItem("authToken");

  // Fetch Bag Items
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
        // Your logic expects data.bag
        setBag(data.bag || data.data || []); 
      }
    } catch (err) {
      setError("Unable to fetch bag.");
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchBag();
  }, []);

  // Remove Item from Bag
  const removeFromBag = async (id) => {
    if(!window.confirm("Are you sure you want to remove this item?")) return;

    try {
      const res = await fetch(`http://127.0.0.1:8000/api/user/bag/remove/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();

      if (res.ok) {
        setBag((prev) => prev.filter((item) => item.id !== id));
      } else {
        alert(data.message || "Failed to remove item.");
      }
    } catch (err) {
      alert("Failed to remove item.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col mb-6">
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
      ) : bag.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-lg border border-dashed border-slate-300">
           <div className="w-16 h-16 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mx-auto mb-4">
             <Icons.Bag />
           </div>
           <p className="text-slate-500">Your bag is empty.</p>
           <a href="/products" className="text-[#5D5FEF] font-semibold mt-2 inline-block hover:underline">Start Shopping</a>
        </div>
      ) : (
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
          <div className="divide-y divide-slate-100">
            {bag.map((item) => {
              const product = item.product;

              // Extract Image Logic (From your snippet)
              const imagePath = product?.images?.[0]?.path || null;
              const imageUrl = imagePath
                ? `http://127.0.0.1:8000/storage/${imagePath}`
                : "https://placehold.co/100x100?text=No+Image";

              return (
                <div key={item.id} className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-slate-100 rounded-md overflow-hidden flex-shrink-0 border border-slate-200">
                      <img
                        src={imageUrl}
                        alt={product?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <h2 className="text-lg font-bold text-slate-800 line-clamp-1">
                        {product?.name || product?.productName}
                      </h2>
                      <p className="text-slate-500 text-xls uppercase mb-1 mt-1">
                       Product Code: {product?.product_code || product?.productCode}
                      </p>
                      <p className="text-slate-900 font-bold">
                        $ {product?.discounted_price || product?.price}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromBag(item.id)}
                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                    title="Remove Item"
                  >
                    <Icons.Trash />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 4. PROFILE VIEW COMPONENT
// ==========================================
const ProfileView = () => {
  const [user, setUser] = useState({ name: "", email: "" });
  const [pass, setPass] = useState({ current: "", new: "", confirm: "" });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState({ type: "", text: "" });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const token = localStorage.getItem("authToken");
    try {
      const res = await fetch("http://127.0.0.1:8000/api/user", {
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.success && data.user) {
        setUser({ name: data.user.name || "", email: data.user.email || "" });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const updateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg({ type: "", text: "" });
    const token = localStorage.getItem("authToken");

    try {
      const res = await fetch("http://127.0.0.1:8000/api/user/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setMsg({ type: "success", text: "Profile updated successfully!" });
        const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
        localStorage.setItem('user', JSON.stringify({ ...storedUser, ...data.user }));
      } else {
        setMsg({ type: "error", text: data.message || "Failed to update" });
      }
    } catch (err) {
      setMsg({ type: "error", text: "Network error" });
    }
    setLoading(false);
  };

  const updatePassword = async (e) => {
    e.preventDefault();
    if (pass.new !== pass.confirm) {
      setMsg({ type: "error", text: "New passwords do not match" });
      return;
    }
    setLoading(true);
    const token = localStorage.getItem("authToken");

    try {
      const res = await fetch("http://127.0.0.1:8000/api/user/change-password", {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          current_password: pass.current,
          new_password: pass.new,
          new_password_confirmation: pass.confirm,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setMsg({ type: "success", text: "Password changed successfully!" });
        setPass({ current: "", new: "", confirm: "" });
      } else {
        setMsg({ type: "error", text: data.message || "Failed to change password" });
      }
    } catch (err) {
      setMsg({ type: "error", text: "Network error" });
    }
    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col mb-6">
        <h1 className="text-3xl font-bold text-slate-900">Profile Settings</h1>
        <p className="text-slate-500 mt-1">Manage your account details and security.</p>
      </div>

      {msg.text && (
        <div className={`p-4 rounded-lg mb-6 border ${msg.type === "success" ? "bg-green-50 border-green-200 text-green-700" : "bg-red-50 border-red-200 text-red-700"}`}>
          {msg.text}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Profile Form */}
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
              <Icons.User />
            </div>
            <h3 className="font-bold text-slate-800 text-lg">Account Information</h3>
          </div>
          <form onSubmit={updateProfile} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
              <input 
                type="text" 
                value={user.name} 
                onChange={(e) => setUser({ ...user, name: e.target.value })} 
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#5D5FEF] focus:border-transparent outline-none transition-all" 
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
              <input 
                type="email" 
                value={user.email} 
                onChange={(e) => setUser({ ...user, email: e.target.value })} 
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#5D5FEF] focus:border-transparent outline-none transition-all" 
              />
            </div>
            <button 
              disabled={loading} 
              className="mt-2 w-full bg-[#5D5FEF] hover:bg-[#4a4ce6] text-white py-2.5 rounded-lg font-medium transition-colors disabled:opacity-50"
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </form>
        </div>

        {/* Password Form */}
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center">
              <Icons.Lock />
            </div>
            <h3 className="font-bold text-slate-800 text-lg">Security</h3>
          </div>
          <form onSubmit={updatePassword} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Current Password</label>
              <input 
                type="password" 
                value={pass.current} 
                onChange={(e) => setPass({ ...pass, current: e.target.value })} 
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none transition-all" 
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">New Password</label>
                <input 
                  type="password" 
                  value={pass.new} 
                  onChange={(e) => setPass({ ...pass, new: e.target.value })} 
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none transition-all" 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Confirm</label>
                <input 
                  type="password" 
                  value={pass.confirm} 
                  onChange={(e) => setPass({ ...pass, confirm: e.target.value })} 
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none transition-all" 
                />
              </div>
            </div>
            <button 
              disabled={loading} 
              className="mt-2 w-full bg-slate-800 hover:bg-slate-900 text-white py-2.5 rounded-lg font-medium transition-colors disabled:opacity-50"
            >
              {loading ? "Updating..." : "Update Password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 5. MAIN DASHBOARD COMPONENT
// ==========================================

export default function Dashboard() {
  // 🔹 CHANGED: Default activeTab is now "profile" as requested
  const [activeTab, setActiveTab] = useState("profile");
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
      
      {/* Table Header */}
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
      
      {/* --- Sidebar --- */}
      <aside className="w-20 bg-[#1E1E24] flex flex-col items-center py-6 flex-shrink-0 mt-22">
        <div className="mb-10">
          <Icons.Logo />
        </div>
        
        <nav className="flex flex-col items-center w-full">
          {/* BAG ICON */}
          <SidebarItem 
            icon={Icons.Bag} 
            active={activeTab === "bag"} 
            onClick={() => setActiveTab("bag")} 
          />
          
          {/* REQUESTS ICON */}
          <SidebarItem 
            icon={Icons.Folder} 
            active={activeTab === "requests"} 
            onClick={() => setActiveTab("requests")} 
          />
          
          {/* PROFILE ICON */}
          <SidebarItem 
            icon={Icons.User} 
            active={activeTab === "profile"} 
            onClick={() => setActiveTab("profile")} 
          />
        </nav>

        <div className="mt-10">
          <button 
            onClick={() => {
              localStorage.removeItem("authToken");
              localStorage.removeItem("user");
              window.location.href = "/";
            }}
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all text-gray-900 hover:text-white hover:bg-red-500/20 bg-red-500"
            title="Logout"
          >
            {/* Logout Icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
          </button>
        </div>
      </aside>

      {/* --- Main Content Area --- */}
      <main className="flex-grow p-8 overflow-y-auto mt-20">
        
        {/* VIEW 1: REQUESTS */}
        {activeTab === "requests" && (
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
                <RequestTable 
                  title="Customization Requests" 
                  data={customRequests} 
                  type="Custom" 
                />
                <RequestTable 
                  title="Swatch Requests" 
                  data={swatchRequests} 
                  type="Swatch" 
                />
              </div>
            )}
          </div>
        )}

        {/* VIEW 2: PROFILE */}
        {activeTab === "profile" && <ProfileView />}

        {/* VIEW 3: BAG (New) */}
        {activeTab === "bag" && <BagView />}

        {/* DEFAULT STATE */}
        {activeTab !== "requests" && activeTab !== "profile" && activeTab !== "bag" && (
          <div className="flex items-center justify-center h-full text-slate-400">
            Select an icon to begin
          </div>
        )}

      </main>
    </div>
  );
}