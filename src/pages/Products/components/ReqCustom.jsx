import React, { useState, useRef, useEffect } from "react";
import { XMarkIcon, CloudArrowUpIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

const ReqCustom = ({ product, user, onClose }) => {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    // 2. Fallback: Try to get data from LocalStorage (Saved during Login)
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
        console.error("Error parsing user from localstorage", error);
      }
    }

    return {
      name: initialName,
      email: initialEmail,
      phoneCountry: "+91",
      phoneNumber: initialPhone,
      quantity: "100",
      message: "",
    };
  };

  // Initialize form state using the helper function
  const [form, setForm] = useState(getInitialFormState);

  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "This is required";
    if (!form.email.trim()) e.email = "This is required";
    else {
      const re = /\S+@\S+\.\S+/;
      if (!re.test(form.email)) e.email = "Enter a valid email";
    }
    if (!form.phoneNumber.trim()) e.phoneNumber = "This is required";
    if (!form.quantity) e.quantity = "This is required";
    if (!form.message.trim()) e.message = "This is required";
    if (!file) e.file = "Please upload a reference file";
    return e;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("product_id", product?.id || ""); // Added safety check for product.id
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("phone_country", form.phoneCountry);
    formData.append("phone_number", form.phoneNumber);
    formData.append("quantity", form.quantity);
    formData.append("message", form.message);
    if (file) formData.append("attachment", file);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/custom-request", {
        method: "POST",
        headers: {
            // Do NOT set Content-Type to application/json when using FormData
            // If your API requires the Auth token, include it here:
            "Authorization": `Bearer ${localStorage.getItem("authToken")}` 
        },
        body: formData,
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok && data.success) { // Check res.ok as well
        setIsSubmitted(true);
      } else {
        alert(data.message || "❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert("⚠️ Network error. Please check your connection.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-[900px] max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-y-auto transition-all">
        
        <button 
          onClick={onClose}
          disabled={loading}
          className="absolute top-5 right-5 p-2 bg-gray-100 hover:bg-red-100 rounded-full text-gray-500 hover:text-red-600 transition z-10 disabled:opacity-50"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        <section className="py-10 px-8 md:px-12 font-[Poppins]">
          
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center text-center py-10 animate-in zoom-in duration-300">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircleIcon className="w-14 h-14 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Request Sent Successfully!
              </h2>
              <p className="text-lg text-gray-500 max-w-md mb-8">
                Thank you for requesting. We have received your details and will contact you soon.
              </p>
              <button
                onClick={onClose}
                className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold shadow-lg shadow-green-500/30 transition-all hover:-translate-y-1"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-3xl font-bold mb-0 text-center text-gray-800 ">
                Request Customization
              </h3>
              <p className="text-center text-gray-500 mb-2">
                Provide details and a reference file for your custom product.
              </p>

              <form onSubmit={handleSubmit} noValidate>
                
                {/* File Upload Section */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                    Reference File *
                  </label>
                  
                  <div
                    className={`group relative border-2 border-dashed rounded-xl p-0 flex flex-col items-center justify-center cursor-pointer transition-all duration-300
                      ${errors.file ? "border-red-400 bg-red-50" : "border-gray-300 bg-gray-50 hover:bg-indigo-50 hover:border-indigo-400"}
                    `}
                    onClick={() => !file && fileInputRef.current.click()}
                  >
                    {file ? (
                      <div className="w-full flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
                        <div className="flex items-center gap-3 overflow-hidden">
                          <div className="bg-indigo-100 p-2 rounded text-indigo-600">
                            <CloudArrowUpIcon className="w-6 h-6" />
                          </div>
                          <span className="truncate text-sm font-medium text-gray-700">{file.name}</span>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setFile(null);
                            setErrors((prev) => ({ ...prev, file: undefined }));
                          }}
                          className="ml-2 text-gray-400 hover:text-red-500 p-1"
                        >
                          <XMarkIcon className="w-5 h-5 cursor-pointer" />
                        </button>
                      </div>
                    ) : (
                      <div className="text-center">
                        <CloudArrowUpIcon className="w-10 h-10 mx-auto text-gray-400 group-hover:text-indigo-500 transition-colors mb-2" />
                        <p className="text-sm text-gray-600 font-medium">
                          <span className="text-indigo-600 underline">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-400 mt-1">SVG, PNG, JPG or PDF (Max. 5MB)</p>
                      </div>
                    )}
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      onChange={(e) => {
                        const f = e.target.files?.[0] || null;
                        setFile(f);
                        setErrors((prev) => ({ ...prev, file: undefined }));
                      }}
                    />
                  </div>
                  {errors.file && <p className="text-red-500 text-xs mt-2 font-medium">{errors.file}</p>}
                </div>

                {/* Form Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-0">Your Name *</label>
                    <input
                      type="text"
                      disabled={loading}
                      value={form.name}
                      onChange={(e) => {
                        setForm((s) => ({ ...s, name: e.target.value }));
                        setErrors((p) => ({ ...p, name: undefined }));
                      }}
                      className={`w-full px-4 py-2 bg-gray-50 border rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 outline-none transition-all ${errors.name ? "border-red-500" : "border-gray-200"}`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-0">Email Address *</label>
                    <input
                      type="email"
                      disabled={loading}
                      value={form.email}
                      onChange={(e) => {
                        setForm((s) => ({ ...s, email: e.target.value }));
                        setErrors((p) => ({ ...p, email: undefined }));
                      }}
                      className={`w-full px-4 py-2 bg-gray-50 border rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 outline-none transition-all ${errors.email ? "border-red-500" : "border-gray-200"}`}
                      placeholder="name@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-0">Phone Number *</label>
                    <div className="flex gap-2">
                      <select
                        disabled={loading}
                        value={form.phoneCountry}
                        onChange={(e) => setForm((s) => ({ ...s, phoneCountry: e.target.value }))}
                        className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-indigo-400"
                      >
                        <option>+91</option>
                        <option>+1</option>
                        <option>+44</option>
                      </select>
                      <input
                        type="text"
                        disabled={loading}
                        value={form.phoneNumber}
                        onChange={(e) => {
                          setForm((s) => ({ ...s, phoneNumber: e.target.value }));
                          setErrors((p) => ({ ...p, phoneNumber: undefined }));
                        }}
                        placeholder="98765 43210"
                        className={`w-full px-4 py-2 bg-gray-50 border rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 outline-none transition-all ${errors.phoneNumber ? "border-red-500" : "border-gray-200"}`}
                      />
                    </div>
                    {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-0">Quantity (Min 100) *</label>
                    <div className="relative">
                      <select
                        disabled={loading}
                        value={form.quantity}
                        onChange={(e) => {
                          setForm((s) => ({ ...s, quantity: e.target.value }));
                          setErrors((p) => ({ ...p, quantity: undefined }));
                        }}
                        className={`w-full px-4 py-2 bg-gray-50 border rounded-lg appearance-none focus:bg-white focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 outline-none transition-all ${errors.quantity ? "border-red-500" : "border-gray-200"}`}
                      >
                        <option value="100">100 Units</option>
                        <option value="150">150 Units</option>
                        <option value="200">200 Units</option>
                        <option value="250">250 Units</option>
                        <option value="300">300 Units</option>
                        <option value="500">500+ Units</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-0">
                  <label className="block text-sm font-semibold text-gray-700 mb-0">Customization Details *</label>
                  <textarea
                    disabled={loading}
                    value={form.message}
                    onChange={(e) => {
                      setForm((s) => ({ ...s, message: e.target.value }));
                      setErrors((p) => ({ ...p, message: undefined }));
                    }}
                    placeholder="Describe your requirements (color codes, placement, size, etc.)"
                    rows="4"
                    className={`w-full px-4 py-0 bg-gray-50 border rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 outline-none transition-all resize-none ${errors.message ? "border-red-500" : "border-gray-200"}`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pb-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`
                      flex items-center justify-center gap-2 px-12 py-3.5 text-lg font-semibold rounded-lg shadow-lg shadow-blue-500/30 w-full md:w-auto transition-all active:scale-95 cursor-pointer
                      ${loading ? "bg-gray-400 cursor-not-allowed opacity-80"
                        : "bg-[#3A4980] hover:bg-[#2d3a66] hover:-translate-y-0.5 text-white"}
                    `}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Request...
                      </>
                    ) : (
                      "Submit Customization Request"
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

export default ReqCustom;