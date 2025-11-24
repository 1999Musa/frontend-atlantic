import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";

const ReqCustom = () => {
    const { state } = useLocation();
    const product = state?.product || {};

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
            // simple email pattern
            const re = /\S+@\S+\.\S+/;
            if (!re.test(form.email)) e.email = "Enter a valid email";
        }
        if (!form.phoneNumber.trim()) e.phoneNumber = "This is required";
        if (!form.quantity) e.quantity = "This is required";
        if (!form.message.trim()) e.message = "This is required";
        if (!file) e.file = "This is required";
        return e;
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const e = validate();
        setErrors(e);
        if (Object.keys(e).length === 0) {
            // All good — handle submission
            // Replace with actual submit logic (API call, etc.)
            console.log("Submitting", { ...form, file });
            alert("Backend submission not implemented in this demo.");
            // Optionally reset form:
            // setForm({ name: "", email: product.email || "", phoneCountry: "+91", phoneNumber: "", quantity: "100", message: "" });
            // setFile(null);
        } else {
            // Focus first error field (optional)
            const firstErr = Object.keys(e)[0];
            if (firstErr === "file") fileInputRef.current?.focus();
        }
    };

    return (
        <section className="max-w-[900px] mx-auto py-4 px-4 mt-30 font-[Poppins] border border-gray-100 rounded-lg shadow-lg ">
            <h1 className="text-3xl font-bold mb-5 text-center">Request For product customization</h1>

            <form onSubmit={handleSubmit} noValidate>
                {/* Attachment Box */}
                <div className="mb-10">
                    <p className=" text-xl font-medium text-gray-700 mb-2 ">Attachment</p>

                    <div
                        className={`relative border-2 border-dashed rounded-lg p-10 flex flex-col items-center justify-center cursor-pointer bg-white hover:border-blue-200 ${
                            errors.file ? "border-red-500" : "border-gray-300"
                        }`}
                        onClick={() => fileInputRef.current.click()}
                    >
                        {file ? (
                            <div className="w-full flex items-center justify-between px-4 py-2 bg-gray-100 border rounded">
                                <span className="truncate">{file.name}</span>

                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setFile(null);
                                        setErrors((prev) => ({ ...prev, file: undefined }));
                                    }}
                                    className="ml-3 inline-flex items-center justify-center w-8 h-8 bg-red-600 hover:bg-red-700 text-white rounded-full text-sm font-bold"
                                >
                                    ×
                                </button>
                            </div>
                        ) : (
                            <>
                                <p className="text-xl font-medium text-gray-700">
                                    Drop here to attach or{" "}
                                    <span className="text-blue-600 underline">upload</span>
                                </p>
                                <p className="text-xls mt-1 text-gray-400">Max size: 5MB</p>
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

                    <p className="text-xl text-green-700 mt-1">
                        Note: Upload logo or reference file for customization.
                    </p>
                </div>

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
                            className={`w-full px-4 py-3 bg-gray-100 ${errors.name ? "border-red-500 border" : ""}`}
                            aria-invalid={!!errors.name}
                        />
                        {errors.name && <p className="text-red-600 mt-1">{errors.name}</p>}
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
                            className={`w-full px-4 py-3 bg-gray-100 ${errors.email ? "border-red-500 border" : ""}`}
                            aria-invalid={!!errors.email}
                        />
                        {errors.email && <p className="text-red-600 mt-1">{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-xl font-medium mb-1 text-gray-700">
                            Phone No. *
                        </label>
                        <div className="flex gap-2">
                            <select
                                value={form.phoneCountry}
                                onChange={(e) => setForm((s) => ({ ...s, phoneCountry: e.target.value }))}
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
                                className={`w-full px-4 py-3 bg-gray-100 ${errors.phoneNumber ? "border-red-500 border" : ""}`}
                                aria-invalid={!!errors.phoneNumber}
                            />
                        </div>
                        {errors.phoneNumber && <p className="text-red-600 mt-1">{errors.phoneNumber}</p>}
                    </div>

                    {/* Quantity */}
                    <div>
                        <label className="block text-xl font-medium mb-1 text-gray-700">
                            Select Quantity ( Min. 100 )*
                        </label>
                        <select
                            value={form.quantity}
                            onChange={(e) => {
                                setForm((s) => ({ ...s, quantity: e.target.value }));
                                setErrors((p) => ({ ...p, quantity: undefined }));
                            }} 
                            className={`w-full px-4 py-4 bg-gray-100 ${errors.quantity ? "border-red-500 border" : "" } ` }
                        >
                            <option value="100">100</option>
                            <option value="150">150</option>
                            <option value="200">200</option>
                            <option value="250">250</option>
                            <option value="300">300</option>
                            <option value="350">350</option>
                        </select>
                        {errors.quantity && <p className="text-red-600 mt-1">{errors.quantity}</p>}
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
                            placeholder="Where should we send your Customized Product?"
                            className={`w-full px-4 py-3 bg-gray-100 ${
                                errors.address ? "border-red-500 border" : ""
                            }`}
                        />
                        {errors.address && (
                            <p className="text-red-600 mt-1">{errors.address}</p>
                        )}
                    </div>
                </div>

                {/* Message */}
                <div className="mb-12">
                    <label className="block text-xl font-medium mb-2 text-gray-700">Message</label>
                    <textarea
                        value={form.message}
                        onChange={(e) => {
                            setForm((s) => ({ ...s, message: e.target.value }));
                            setErrors((p) => ({ ...p, message: undefined }));
                        }}
                        placeholder="Let us know your Product Customization in details"
                        rows="5"
                        className={`w-full border px-4 py-3 ${errors.message ? "border-red-500" : ""}`}
                        aria-invalid={!!errors.message}
                    ></textarea>
                    {errors.message && <p className="text-red-600 mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pb-10">
                    <button
                        type="submit"
                        className="bg-[#3A4980] hover:bg-[#2d3a66] transition text-white px-12 py-3 text-lg font-semibold cursor-pointer"
                    >
                        Send Customization Request →
                    </button>
                </div>
            </form>
        </section>
    );
};

export default ReqCustom;
