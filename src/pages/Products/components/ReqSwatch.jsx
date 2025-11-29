import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const ReqSwatch = ({ product, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: product?.email || "",
    phoneCountry: "+91",
    phoneNumber: "",
    address: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // Validation
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "This is required";
    if (!form.email.trim()) e.email = "This is required";
    else {
      const re = /\S+@\S+\.\S+/;
      if (!re.test(form.email)) e.email = "Enter a valid email";
    }
    if (!form.phoneNumber.trim()) e.phoneNumber = "This is required";
    if (!form.address.trim()) e.address = "This is required";
    if (!form.message.trim()) e.message = "This is required";
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
    setSuccess("");

    try {
      const res = await fetch("http://127.0.0.1:8000/api/swatch-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
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

      if (data.success) {
        setSuccess("Swatch request sent successfully!");
        setForm({
          name: "",
          email: product?.email || "",
          phoneCountry: "+91",
          phoneNumber: "",
          address: "",
          message: "",
        });
      } else {
        setErrors({ api: data.message || "Something went wrong" });
      }
    } catch (err) {
      setErrors({ api: "Failed to send request. Try again." });
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-[900px] max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-y-auto">
        <button
          onClick={onClose}
          disabled={loading}
          className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-red-50 rounded-full text-gray-500 hover:text-red-600 transition z-10 cursor-pointer disabled:opacity-50"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        <section className="py-8 px-8 font-[Poppins]">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Request a Fabric Swatch
          </h1>

          {errors.api && (
            <p className="text-red-600 text-center mb-4">{errors.api}</p>
          )}
          {success && (
            <p className="text-green-600 text-center mb-4">{success}</p>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Name */}
              <div>
                <label className="block text-lg font-medium mb-1 text-gray-700">
                  Your Name *
                </label>
                <input
                  type="text"
                  value={form.name}
                  disabled={loading}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, name: e.target.value }))
                  }
                  placeholder="Enter your name"
                  className={`w-full px-4 py-3 bg-gray-50 border rounded-md focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition ${
                    errors.name ? "border-red-500" : "border-gray-200"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-600 mt-1 text-sm">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-lg font-medium mb-1 text-gray-700">
                  Your Email *
                </label>
                <input
                  type="email"
                  value={form.email}
                  disabled={loading}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, email: e.target.value }))
                  }
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 bg-gray-50 border rounded-md focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition ${
                    errors.email ? "border-red-500" : "border-gray-200"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-600 mt-1 text-sm">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-lg font-medium mb-1 text-gray-700">
                  Phone No. *
                </label>
                <div className="flex gap-2">
                  <select
                    value={form.phoneCountry}
                    disabled={loading}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, phoneCountry: e.target.value }))
                    }
                    className="px-3 py-3 bg-gray-50 border border-gray-200 rounded-md outline-none"
                  >
                    <option>+91</option>
                    <option>+1</option>
                    <option>+44</option>
                  </select>
                  <input
                    type="text"
                    value={form.phoneNumber}
                    disabled={loading}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, phoneNumber: e.target.value }))
                    }
                    placeholder="Enter phone no."
                    className={`w-full px-4 py-3 bg-gray-50 border rounded-md focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition ${
                      errors.phoneNumber ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="text-red-600 mt-1 text-sm">{errors.phoneNumber}</p>
                )}
              </div>

              {/* Address */}
              <div>
                <label className="block text-lg font-medium mb-1 text-gray-700">
                  Delivery Address *
                </label>
                <input
                  type="text"
                  value={form.address}
                  disabled={loading}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, address: e.target.value }))
                  }
                  placeholder="Where should we send your fabric swatch?"
                  className={`w-full px-4 py-3 bg-gray-50 border rounded-md focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition ${
                    errors.address ? "border-red-500" : "border-gray-200"
                  }`}
                />
                {errors.address && (
                  <p className="text-red-600 mt-1 text-sm">{errors.address}</p>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="mb-8">
              <label className="block text-lg font-medium mb-2 text-gray-700">
                Message *
              </label>
              <textarea
                value={form.message}
                disabled={loading}
                onChange={(e) =>
                  setForm((s) => ({ ...s, message: e.target.value }))
                }
                placeholder="Specify which color, pattern, or fabric swatch you want"
                rows="4"
                className={`w-full px-4 py-3 bg-gray-50 border rounded-md focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition ${
                  errors.message ? "border-red-500" : "border-gray-200"
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-600 mt-1 text-sm">{errors.message}</p>
              )}
            </div>

            {/* Submit */}
            <div className="flex justify-center pb-2">
              <button
                type="submit"
                disabled={loading}
                className={`flex items-center justify-center gap-2 px-12 py-3 text-lg font-semibold rounded shadow-md w-full md:w-auto transition-all ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed opacity-80"
                    : "bg-[#3A4980] hover:bg-[#2d3a66] text-white cursor-pointer hover:shadow-lg"
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
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Swatch Request →"
                )}
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ReqSwatch;
