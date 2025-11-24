import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const ReqSwatch = () => {
    const { state } = useLocation();
    const product = state?.product || {};

    const [form, setForm] = useState({
        name: "",
        email: product.email || "",
        phoneCountry: "+91",
        phoneNumber: "",
        address: "",
        message: "",
        fabric: "",
        color: "",
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
        if (!form.address.trim()) e.address = "This is required";
        if (!form.message.trim()) e.message = "This is required";
        if (!form.color.trim()) e.color = "This is required";
        if (!form.fabric.trim()) e.fabric = "This is required";
        return e;
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const e = validate();
        setErrors(e);

        if (Object.keys(e).length === 0) {
            console.log("Submitting swatch request:", form);
            alert("Backend submission not implemented in this demo.");
        }
    };

    return (
        <section className="max-w-[900px] mx-auto py-4 px-4 mt-26 font-[Poppins] border border-gray-300 rounded-md shadow-md ">

            <h1 className="text-3xl font-bold mb-4 text-center">
                Request a Fabric Swatch
            </h1>

            <form onSubmit={handleSubmit} noValidate>

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

                    {/* Name */}
                    <div>
                        <label className="block text-xl font-medium mb-1 text-gray-700">
                            Your Name *
                        </label>
                        <input
                            type="text"
                            value={form.name}
                            onChange={(e) => {
                                setForm((s) => ({ ...s, name: e.target.value }));
                                setErrors((p) => ({ ...p, name: undefined }));
                            }}
                            placeholder="Enter your name"
                            className={`w-full px-4 py-3 bg-gray-100 ${errors.name ? "border-red-500 border" : ""
                                }`}
                        />
                        {errors.name && (
                            <p className="text-red-600 mt-1">{errors.name}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-xl font-medium mb-1 text-gray-700">
                            Your Email *
                        </label>
                        <input
                            type="email"
                            value={form.email}
                            onChange={(e) => {
                                setForm((s) => ({ ...s, email: e.target.value }));
                                setErrors((p) => ({ ...p, email: undefined }));
                            }}
                            placeholder="Enter your email"
                            className={`w-full px-4 py-3 bg-gray-100 ${errors.email ? "border-red-500 border" : ""
                                }`}
                        />
                        {errors.email && (
                            <p className="text-red-600 mt-1">{errors.email}</p>
                        )}
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-xl font-medium mb-1 text-gray-700">
                            Phone No. *
                        </label>
                        <div className="flex gap-2">
                            <select
                                value={form.phoneCountry}
                                onChange={(e) =>
                                    setForm((s) => ({ ...s, phoneCountry: e.target.value }))
                                }
                                className="px-3 py-3"
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
                                className={`w-full px-4 py-3 bg-gray-100 ${errors.phoneNumber ? "border-red-500 border" : ""
                                    }`}
                            />
                        </div>
                        {errors.phoneNumber && (
                            <p className="text-red-600 mt-1">{errors.phoneNumber}</p>
                        )}
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block text-xl font-medium mb-1 text-gray-700">
                            Delivery Address *
                        </label>
                        <input
                            type="text"
                            value={form.address}
                            onChange={(e) => {
                                setForm((s) => ({ ...s, address: e.target.value }));
                                setErrors((p) => ({ ...p, address: undefined }));
                            }}
                            placeholder="Where should we send your fabric swatch?"
                            className={`w-full px-4 py-3 bg-gray-100 ${errors.address ? "border-red-500 border" : ""
                                }`}
                        />
                        {errors.address && (
                            <p className="text-red-600 mt-1">{errors.address}</p>
                        )}
                    </div>
                    {/* Color */}
                    <div>
                        <label className="block text-xl font-medium mb-1 text-gray-700">
                            Mention Color *
                        </label>
                        <input
                            type="text"
                            value={form.color}
                            onChange={(e) => {
                                setForm((s) => ({ ...s, color: e.target.value }));
                                setErrors((p) => ({ ...p, color: undefined }));
                            }}
                            placeholder="Which color swatch do you want?"
                            className={`w-full px-4 py-3 bg-gray-100 ${errors.color ? "border-red-500 border" : ""
                                }`}
                        />
                        {errors.color && (
                            <p className="text-red-600 mt-1">{errors.color}</p>
                        )}
                    </div>
                    {/* Fabric */}
                    <div>
                        <label className="block text-xl font-medium mb-1 text-gray-700">
                            Mention Fabric *
                        </label>
                        <input
                            type="text"
                            value={form.fabric}
                            onChange={(e) => {
                                setForm((s) => ({ ...s, fabric: e.target.value }));
                                setErrors((p) => ({ ...p, fabric: undefined }));
                            }}
                            placeholder="Which Fabric Swatch do you want?"
                            className={`w-full px-4 py-3 bg-gray-100 ${errors.fabric ? "border-red-500 border" : ""
                                }`}
                        />
                        {errors.fabric && (
                            <p className="text-red-600 mt-1">{errors.fabric}</p>
                        )}
                    </div>
                </div>

                {/* Message */}
                <div className="mb-12">
                    <label className="block text-xl font-medium mb-2 text-gray-700">
                        Message *
                    </label>
                    <textarea
                        value={form.message}
                        onChange={(e) => {
                            setForm((s) => ({ ...s, message: e.target.value }));
                            setErrors((p) => ({ ...p, message: undefined }));
                        }}
                        placeholder="Specify which color, pattern, or fabric swatch you want"
                        rows="5"
                        className={`w-full  px-4 py-3 bg-gray-100 ${errors.message ? "border-red-500" : ""
                            }`}
                    ></textarea>
                    {errors.message && (
                        <p className="text-red-600 mt-1">{errors.message}</p>
                    )}
                </div>

                {/* Submit */}
                <div className="flex justify-center pb-10">
                    <button
                        type="submit"
                        className="bg-[#3A4980] hover:bg-[#2d3a66] transition text-white px-12 py-3 text-lg font-semibold cursor-pointer"
                    >
                        Send Swatch Request →
                    </button>
                </div>
            </form>
        </section>
    );
};

export default ReqSwatch;
