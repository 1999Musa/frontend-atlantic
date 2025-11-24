import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  HomeIcon,
  ScissorsIcon,
  SwatchIcon,
  TagIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showSettings, setShowSettings] = useState(false);


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");


  function DashboardCard({ title, text, className = "" }) {
    return (
      <div
        className={`bg-white p-6 rounded-xl shadow border transition ${className}`}
      >
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{text}</p>

        {showSettings && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-end z-50">
            <div className="w-full max-w-md bg-white h-full p-6 overflow-y-auto shadow-xl">

              <button
                className="mb-4 text-gray-500 hover:text-black"
                onClick={() => setShowSettings(false)}
              >
                Close ✖
              </button>

              {/* SETTINGS UI */}
              <div className="max-w-xl mx-auto">

                {message && (
                  <p className="mb-4 text-center text-yellow-600 font-medium">{message}</p>
                )}

                <div className="bg-white rounded-xl p-5 mb-8 shadow border">
                  <h2 className="text-lg font-semibold text-emerald-600 mb-4">
                    Edit Profile
                  </h2>

                  <label className="block mb-3 text-sm">
                    Name
                    <input
                      type="text"
                      className="w-full p-2 mt-1 rounded border"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>

                  <label className="block mb-3 text-sm">
                    Email
                    <input
                      type="email"
                      className="w-full p-2 mt-1 rounded border"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>

                  <button
                    onClick={updateProfile}
                    disabled={loading}
                    className="px-5 py-2 rounded bg-blue-500 text-white w-full mt-2"
                  >
                    {loading ? "Saving..." : "Save Profile"}
                  </button>
                </div>

                <div className="bg-white rounded-xl p-5 shadow border">
                  <h2 className="text-lg font-semibold text-emerald-600 mb-4">
                    Change Password
                  </h2>

                  <label className="block mb-3 text-sm">
                    Current Password
                    <input
                      type="password"
                      className="w-full p-2 mt-1 rounded border"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                  </label>

                  <label className="block mb-3 text-sm">
                    New Password
                    <input
                      type="password"
                      className="w-full p-2 mt-1 rounded border"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </label>

                  <button
                    onClick={updatePassword}
                    disabled={loading}
                    className="px-5 py-2 rounded bg-emerald-500 text-white w-full"
                  >
                    {loading ? "Updating..." : "Change Password"}
                  </button>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    );
  }

  const YourComponent = () => {
    const [showSettings, setShowSettings] = useState(false);

    return (
      <>
        {/* SETTINGS PANEL */}
        {showSettings && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-end z-50">

            {/* Panel */}
            <div className="w-full max-w-md bg-white h-full p-6 overflow-y-auto shadow-xl">

              {/* Close Button */}
              <button
                className="mb-4 text-gray-500 hover:text-black"
                onClick={() => setShowSettings(false)}
              >
                Close ✖
              </button>

              {/* --- YOUR FORM SECTION HERE --- */}
              <div className="max-w-xl mx-auto">

                {message && (
                  <p className="mb-4 text-center text-yellow-600 font-medium">{message}</p>
                )}

                <div className="bg-white rounded-xl p-5 mb-8 shadow border">
                  <h2 className="text-lg font-semibold text-emerald-600 mb-4">
                    Edit Profile
                  </h2>

                  <label className="block mb-3 text-sm">
                    Name
                    <input
                      type="text"
                      className="w-full p-2 mt-1 rounded border"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>

                  <label className="block mb-3 text-sm">
                    Email
                    <input
                      type="email"
                      className="w-full p-2 mt-1 rounded border"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>

                  <button
                    onClick={updateProfile}
                    disabled={loading}
                    className="px-5 py-2 rounded bg-blue-500 text-white w-full mt-2"
                  >
                    {loading ? "Saving..." : "Save Profile"}
                  </button>
                </div>

                <div className="bg-white rounded-xl p-5 shadow border">
                  <h2 className="text-lg font-semibold text-emerald-600 mb-4">
                    Change Password
                  </h2>

                  <label className="block mb-3 text-sm">
                    Current Password
                    <input
                      type="password"
                      className="w-full p-2 mt-1 rounded border"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                  </label>

                  <label className="block mb-3 text-sm">
                    New Password
                    <input
                      type="password"
                      className="w-full p-2 mt-1 rounded border"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </label>

                  <button
                    onClick={updatePassword}
                    disabled={loading}
                    className="px-5 py-2 rounded bg-emerald-500 text-white w-full"
                  >
                    {loading ? "Updating..." : "Change Password"}
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}
      </>
    );
  };


  // ------------------------------------
  // LOAD USER
  // ------------------------------------
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser || storedUser === "undefined") {
      navigate("/log-in");
      return;
    }

    const parsedUser = JSON.parse(storedUser);
    setUser(parsedUser);

    setName(parsedUser.name);
    setEmail(parsedUser.email);
  }, [navigate]);

  // ------------------------------------
  // LOGOUT
  // ------------------------------------
  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    navigate("/log-in");
  };

  // ------------------------------------
  // UPDATE PROFILE
  // ------------------------------------
  const updateProfile = async () => {
    setLoading(true);
    setMessage("");

    try {
      const token = localStorage.getItem("authToken");

      const res = await fetch("http://127.0.0.1:8000/api/user/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await res.json();

      if (!data.success) {
        setMessage(data.message || "Failed to update profile");
      } else {
        setMessage("Profile updated successfully!");

        localStorage.setItem("user", JSON.stringify(data.user));
        setUser(data.user);
      }
    } catch {
      setMessage("Server error");
    }

    setLoading(false);
  };

  // ------------------------------------
  // UPDATE PASSWORD
  // ------------------------------------
  const updatePassword = async () => {
    setLoading(true);
    setMessage("");

    try {
      const token = localStorage.getItem("authToken");

      const res = await fetch(
        "http://127.0.0.1:8000/api/user/change-password",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            current_password: currentPassword,
            new_password: newPassword,
          }),
        }
      );

      const data = await res.json();

      if (!data.success) {
        setMessage(data.message || "Password update failed");
      } else {
        setMessage("Password changed successfully!");
        setCurrentPassword("");
        setNewPassword("");
      }
    } catch {
      setMessage("Server error");
    }

    setLoading(false);
  };

  if (!user) return null;

  return (
    <div className="min-h-screen flex bg-slate-100 mt-22">

      {/* SIDEBAR */}
      <aside className="w-25 bg-white border shadow-md flex flex-col items-center py-6 space-y-2 mt-6">

        <div className="text-lg font-bold text-slate-600">MENU</div>

        {/* MENU */}
        <SidebarIcon icon={<HomeIcon className="w-7" />} label="Dashboard" active />
        <SidebarIcon icon={<ScissorsIcon className="w-7" />} label="Customize" />
        <SidebarIcon icon={<SwatchIcon className="w-7" />} label="Swatch" />
        <SidebarIcon icon={<HeartIcon className="w-7" />} label="Prices" />
        <SidebarIcon
          icon={<Cog6ToothIcon className="w-7" />}
          label="Settings"
          onClick={() => setShowSettings(true)}   // ← works now!
        />



        {/* Logout */}
        <div className="mt-0 pt-2 border-t pt-4">
          <button onClick={logout}>
            <ArrowRightOnRectangleIcon className="w-7 text-red-500 hover:text-red-600 cursor-pointer" /> OUT
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-10">

        {/* TOP SECTION */}

        <div className="max-w-6xl mx-auto ">

          <h1 className="text-3xl font-bold mb-3 ">
            Welcome back, {user.name}
          </h1>
          <p className="text-gray-600 mb-8">
            Here's your quick access to customization, swatches, and discounts.
          </p>

          {/* CARDS */}
          <div className="flex justify-center ">
            <div className="grid md:grid-cols-4 gap-5 mb-12 ">
              <DashboardCard
                title="Product Customization"
                text="Create your customization order."
                className="hover:bg-[ #fdc140ff] hover:shadow-lg transition"
              />

              <DashboardCard
                title="Request Fabric Swatch"
                text="Check your swatch history."
                className="hover:bg-blue-50 hover:shadow-lg transition"
              />

              <DashboardCard
                title="View Discounted Prices"
                text="See your discounted pricing."
                className="hover:bg-blue-50 hover:shadow-lg transition"
              />
            </div>
          </div>

          {/* RECENT ACTIVITY */}
          <h3 className="font-semibold text-lg mb-2 flex justify-center">Recent Activity</h3>

          <div className="flex justify-center">
            <div className="max-w-xl w-full">  {/* controls the width */}
              <div className="bg-white p-6 rounded-xl border shadow mb-12">
                <div className="space-y-3 text-sm">

                  <div className="flex justify-between items-center">
                    <span>Swatch Request</span>
                    <span className="text-red-500 font-medium">● Pending</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>Customization Request</span>
                    <span className="text-green-500 font-medium">● Approved</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>Swatch Request</span>
                    <span className="text-blue-500 font-medium">● Delivered</span>
                  </div>

                </div>
              </div>
            </div>
          </div>



          {/* FAVORITE PRODUCTS */}
          <h3 className="font-semibold text-lg mb-3">Favorite Products</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
            <FavoriteCard img="/placeholder1.jpg" title="Activewear — 1000$" />
            <FavoriteCard img="/placeholder2.jpg" title="Activewear — 1000$" />
          </div>
        </div>

        {/* FORMS SECTION */}
        {/* <div className="max-w-xl mx-auto">

          {message && (
            <p className="mb-4 text-center text-yellow-600 font-medium">{message}</p>
          )}

          <div className="bg-white rounded-xl p-5 mb-8 shadow border">
            <h2 className="text-lg font-semibold text-emerald-600 mb-4">
              Edit Profile
            </h2>

            <label className="block mb-3 text-sm">
              Name
              <input
                type="text"
                className="w-full p-2 mt-1 rounded border"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label className="block mb-3 text-sm">
              Email
              <input
                type="email"
                className="w-full p-2 mt-1 rounded border"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <button
              onClick={updateProfile}
              disabled={loading}
              className="px-5 py-2 rounded bg-blue-500 text-white w-full mt-2"
            >
              {loading ? "Saving..." : "Save Profile"}
            </button>
          </div>


          <div className="bg-white rounded-xl p-5 shadow border">
            <h2 className="text-lg font-semibold text-emerald-600 mb-4">
              Change Password
            </h2>

            <label className="block mb-3 text-sm">
              Current Password
              <input
                type="password"
                className="w-full p-2 mt-1 rounded border"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </label>

            <label className="block mb-3 text-sm">
              New Password
              <input
                type="password"
                className="w-full p-2 mt-1 rounded border"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </label>

            <button
              onClick={updatePassword}
              disabled={loading}
              className="px-5 py-2 rounded bg-emerald-500 text-white w-full"
            >
              {loading ? "Updating..." : "Change Password"}
            </button>
          </div>

        </div> */}
      </main>
    </div>
  );
}

/* ------------------------------- */
/* SMALL COMPONENTS                */
/* ------------------------------- */

function SidebarIcon({ icon, label, active, onClick }) {
  return (
    <div
      onClick={onClick}   // ← IMPORTANT
      className={`p-3 rounded-xl cursor-pointer hover:bg-slate-200 transition ${active ? "bg-slate-200" : ""
        }`}
      title={label}
    >
      {icon}
    </div>
  );
}


function DashboardCard({ title, text }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow border hover:shadow-md transition">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
}

function FavoriteCard({ img, title }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow border">
      <img src={img} className="h-32 w-full object-cover" />
      <div className="p-3 text-sm font-semibold">{title}</div>
    </div>
  );
}
