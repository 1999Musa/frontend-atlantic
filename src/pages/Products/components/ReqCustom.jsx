import React, { useState, useRef } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline"; // Make sure to install heroicons

const ReqCustom = ({ product, onClose }) => {
  // Removed useLocation since product is now passed as prop
  
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: product.email || "",
    phoneCountry: "+91",
    phoneNumber: "",
    quantity: "100",
    message: "",
  });

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
    if (!file) e.file = "This is required";
    return e;
  };

const handleSubmit = async (ev) => {
  ev.preventDefault();
  const e = validate();
  setErrors(e);
  if (Object.keys(e).length > 0) return;

  const formData = new FormData();
  formData.append("product_id", product.id);
  formData.append("name", form.name);
  formData.append("email", form.email);
  formData.append("phone_country", form.phoneCountry);
  formData.append("phone_number", form.phoneNumber);
  formData.append("quantity", form.quantity);
  formData.append("message", form.message);
  if (file) formData.append("attachment", file);

  const res = await fetch("http://127.0.0.1:8000/api/custom-request", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  if (data.success) {
    alert("Request Sent Successfully!");
    onClose();
  }
};


  return (
    // FIXED OVERLAY WRAPPER
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      
      {/* MODAL CONTAINER */}
      <div className="relative w-full max-w-[900px] max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-y-auto">
        
        {/* CLOSE BUTTON */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-red-50 rounded-full text-gray-500 hover:text-red-600 transition z-10 cursor-pointer"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        <section className="py-8 px-8 font-[Poppins]">
          <h1 className="text-3xl font-bold mb-5 text-center text-gray-800">Request Customization</h1>

          <form onSubmit={handleSubmit} noValidate>
            {/* Attachment Box */}
            <div className="mb-10">
              <p className="text-xl font-medium text-gray-700 mb-2">Attachment</p>
              <div
                className={`relative border-2 border-dashed rounded-lg p-10 flex flex-col items-center justify-center cursor-pointer bg-blue-50/30 hover:bg-blue-50 hover:border-blue-300 transition ${
                  errors.file ? "border-red-500" : "border-gray-300"
                }`}
                onClick={() => fileInputRef.current.click()}
              >
                {file ? (
                  <div className="w-full flex items-center justify-between px-4 py-2 bg-white border rounded shadow-sm">
                    <span className="truncate">{file.name}</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setFile(null);
                        setErrors((prev) => ({ ...prev, file: undefined }));
                      }}
                      className="ml-3 inline-flex items-center justify-center w-8 h-8 bg-red-100 hover:bg-red-200 text-red-600 rounded-full font-bold transition"
                    >
                      ×
                    </button>
                  </div>
                ) : (
                  <>
                    <p className="text-xl font-medium text-gray-700 text-center">
                      Drop here to attach or <span className="text-blue-600 underline">upload</span>
                    </p>
                    <p className="text-xs mt-1 text-gray-400">Max size: 5MB</p>
                  </>
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
              {errors.file && <p className="text-red-600 mt-2">{errors.file}</p>}
              <p className="text-sm text-green-700 mt-2 font-medium">
                Note: Upload logo or reference file for customization.
              </p>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Name */}
              <div>
                <label className="block text-lg font-medium mb-1 text-gray-700">Your Name *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => {
                    setForm((s) => ({ ...s, name: e.target.value }));
                    setErrors((p) => ({ ...p, name: undefined }));
                  }}
                  placeholder="Enter your name"
                  className={`w-full px-4 py-3 bg-gray-50 border rounded-md focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition ${errors.name ? "border-red-500" : "border-gray-200"}`}
                />
                {errors.name && <p className="text-red-600 mt-1 text-sm">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-lg font-medium mb-1 text-gray-700">Your Email *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => {
                    setForm((s) => ({ ...s, email: e.target.value }));
                    setErrors((p) => ({ ...p, email: undefined }));
                  }}
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 bg-gray-50 border rounded-md focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition ${errors.email ? "border-red-500" : "border-gray-200"}`}
                />
                {errors.email && <p className="text-red-600 mt-1 text-sm">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-lg font-medium mb-1 text-gray-700">Phone No. *</label>
                <div className="flex gap-2">
                  <select
                    value={form.phoneCountry}
                    onChange={(e) => setForm((s) => ({ ...s, phoneCountry: e.target.value }))}
                    className="px-3 py-3 bg-gray-50 border border-gray-200 rounded-md outline-none"
                  >
                    <option>+91</option>
                    <option>+1</option>
                    <option>+44</option>
                  </select>
                  <input
                    type="text"
                    value={form.phoneNumber}
                    onChange={(e) => {
                      setForm((s) => ({ ...s, phoneNumber: e.target.value }));
                      setErrors((p) => ({ ...p, phoneNumber: undefined }));
                    }}
                    placeholder="Enter phone no."
                    className={`w-full px-4 py-3 bg-gray-50 border rounded-md focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition ${errors.phoneNumber ? "border-red-500" : "border-gray-200"}`}
                  />
                </div>
                {errors.phoneNumber && <p className="text-red-600 mt-1 text-sm">{errors.phoneNumber}</p>}
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-lg font-medium mb-1 text-gray-700">Quantity (Min. 100)*</label>
                <select
                  value={form.quantity}
                  onChange={(e) => {
                    setForm((s) => ({ ...s, quantity: e.target.value }));
                    setErrors((p) => ({ ...p, quantity: undefined }));
                  }}
                  className={`w-full px-4 py-3 bg-gray-50 border rounded-md outline-none ${errors.quantity ? "border-red-500" : "border-gray-200"}`}
                >
                  <option value="100">100</option>
                  <option value="150">150</option>
                  <option value="200">200</option>
                  <option value="250">250</option>
                  <option value="300">300</option>
                  <option value="350">350</option>
                </select>
                {errors.quantity && <p className="text-red-600 mt-1 text-sm">{errors.quantity}</p>}
              </div>
            </div>

            {/* Message */}
            <div className="mb-8">
              <label className="block text-lg font-medium mb-2 text-gray-700">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => {
                  setForm((s) => ({ ...s, message: e.target.value }));
                  setErrors((p) => ({ ...p, message: undefined }));
                }}
                placeholder="Let us know your Product Customization in details"
                rows="4"
                className={`w-full px-4 py-3 bg-gray-50 border rounded-md focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition ${errors.message ? "border-red-500" : "border-gray-200"}`}
              ></textarea>
              {errors.message && <p className="text-red-600 mt-1 text-sm">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pb-2">
              <button
                type="submit"
                className="bg-[#3A4980] hover:bg-[#2d3a66] transition text-white px-12 py-3 text-lg font-semibold rounded shadow-md w-full md:w-auto cursor-pointer"
              >
                Send Customization Request →
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ReqCustom;