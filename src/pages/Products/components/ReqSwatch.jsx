import React, { useState } from "react";
import { XMarkIcon, SwatchIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

const ReqSwatch = ({ product, user, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // 🔹 HELPER: Get User Data from Prop OR LocalStorage
  const getInitialFormState = () => {
    let initialName = "";
    let initialEmail = "";
    let initialPhone = "";

    // 1. Try to get data from props
    if (user) {
      initialName = user.name || "";
      initialEmail = user.email || "";
      initialPhone = user.phoneNumber || "";
    } 
    // 2. Fallback: Try to get data from LocalStorage
    else {
      try {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          initialName = parsedUser.name || "";
          initialEmail = parsedUser.email || "";
          initialPhone = parsedUser.phoneNumber || "";
        }
      } catch (error) {
        console.error("Error parsing user data", error);
      }
    }

    return {
      name: initialName,
      email: initialEmail,
      phoneCountry: "+91",
      phoneNumber: initialPhone,
      address: "",
      message: "",
    };
  };

  const [form, setForm] = useState(getInitialFormState);

  // Validation
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.phoneNumber.trim()) e.phoneNumber = "Phone is required";
    if (!form.address.trim()) e.address = "Shipping address is required";
    if (!form.message.trim()) e.message = "Please specify fabric/color details";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      const res = await fetch("http://127.0.0.1:8000/api/swatch-request", {
        method: "POST",
        headers: {
          // If using FormData, don't set Content-Type manually. 
          // But since we are sending JSON here:
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("authToken")}` 
        },
        body: JSON.stringify({
          product_id: product?.id || null,
          name: form.name,
          email: form.email,
          phone_country: form.phoneCountry,
          phone_number: form.phoneNumber,
          address: form.address,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSubmitted(true);
      } else {
        setErrors({ api: data.message || "Something went wrong" });
      }
    } catch (err) {
      setErrors({ api: "Failed to send request. Check your connection." });
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-[900px] max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          disabled={loading}
          className="absolute top-5 right-5 p-2 bg-gray-100 hover:bg-red-100 rounded-full text-gray-500 hover:text-red-600 transition z-10 cursor-pointer disabled:opacity-50"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        <section className="py-10 px-8 md:px-12 font-[Poppins]">
          
          {/* 🔹 EYE-CATCHING SUCCESS STATE */}
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center text-center py-6 animate-in zoom-in duration-300">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
                <CheckCircleIcon className="w-14 h-14 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Swatch Request Sent!
              </h2>
              <p className="text-gray-500 max-w-md mb-8">
                We've received your request. Our team will prepare your fabric samples and ship them to the address provided.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 w-full max-w-sm mb-6 text-left">
                <p className="text-xs text-gray-400 uppercase font-semibold mb-1">Shipping to:</p>
                <p className="text-gray-800 font-medium truncate">{form.address}</p>
              </div>

              <button
                onClick={onClose}
                className="px-10 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold shadow-lg shadow-green-500/30 transition-all hover:-translate-y-1 cursor-pointer"
              >
                Okay, Thanks
              </button>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="text-center mb-2">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600 mb-0">
                  <SwatchIcon className="w-6 h-6" />
                </div>
                <h1 className="text-3xl font-bold text-gray-800">
                  Request Fabric Swatch
                </h1>
                <p className="text-gray-500 mt-2">
                  Feel the texture before you buy. We'll send samples to your door.
                </p>
              </div>

              {/* API Error Banner */}
              {errors.api && (
                <div className="mb-6 p-3 bg-red-50 text-red-600 border border-red-200 rounded text-center text-sm">
                  {errors.api}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      disabled={loading}
                      onChange={(e) => {
                        setForm((s) => ({ ...s, name: e.target.value }));
                        setErrors((s) => ({ ...s, name: null }));
                      }}
                      placeholder="Enter your name"
                      className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none transition ${
                        errors.name ? "border-red-500" : "border-gray-200"
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      disabled={loading}
                      onChange={(e) => {
                        setForm((s) => ({ ...s, email: e.target.value }));
                        setErrors((s) => ({ ...s, email: null }));
                      }}
                      placeholder="Enter your email"
                      className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none transition ${
                        errors.email ? "border-red-500" : "border-gray-200"
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Phone No. *
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={form.phoneCountry}
                        disabled={loading}
                        onChange={(e) =>
                          setForm((s) => ({ ...s, phoneCountry: e.target.value }))
                        }
                        className="px-3 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-400"
                      >
                        <option>+91</option>
                        <option>+1</option>
                        <option>+44</option>
                      </select>
                      <input
                        type="text"
                        value={form.phoneNumber}
                        disabled={loading}
                        onChange={(e) => {
                          setForm((s) => ({ ...s, phoneNumber: e.target.value }));
                          setErrors((s) => ({ ...s, phoneNumber: null }));
                        }}
                        placeholder="Enter phone no."
                        className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none transition ${
                          errors.phoneNumber ? "border-red-500" : "border-gray-200"
                        }`}
                      />
                    </div>
                    {errors.phoneNumber && (
                      <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
                    )}
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Delivery Address *
                    </label>
                    <input
                      type="text"
                      value={form.address}
                      disabled={loading}
                      onChange={(e) => {
                        setForm((s) => ({ ...s, address: e.target.value }));
                        setErrors((s) => ({ ...s, address: null }));
                      }}
                      placeholder="Street, City, Zip Code"
                      className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none transition ${
                        errors.address ? "border-red-500" : "border-gray-200"
                      }`}
                    />
                    {errors.address && (
                      <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="mb-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Details / Preferences *
                  </label>
                  <textarea
                    value={form.message}
                    disabled={loading}
                    onChange={(e) => {
                      setForm((s) => ({ ...s, message: e.target.value }));
                      setErrors((s) => ({ ...s, message: null }));
                    }}
                    placeholder="E.g. I need the Ruby Red silk sample and the Navy Blue cotton sample."
                    rows="3"
                    className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none transition resize-none ${
                      errors.message ? "border-red-500" : "border-gray-200"
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit */}
                <div className="flex justify-center pb-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`flex items-center justify-center gap-2 px-12 py-3.5 text-lg font-semibold rounded-lg shadow-lg shadow-blue-500/30 w-full md:w-auto transition-all active:scale-95 ${
                      loading
                        ? "bg-gray-400 cursor-not-allowed opacity-80"
                        : "bg-[#3A4980] hover:bg-[#2d3a66] hover:-translate-y-0.5 text-white"
                    }`}
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Swatch Request"
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default ReqSwatch; 