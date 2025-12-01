import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const validate = () => {
        setError("");

        if (!name) return setError("Name is required") || false;
        if (!email) return setError("Email is required") || false;

        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
        if (!re.test(email))
            return setError("Please enter a valid email address") || false;

        if (!password) return setError("Password is required") || false;
        if (password.length < 6)
            return setError("Password must be at least 6 characters") || false;

        if (password !== confirm)
            return setError("Passwords do not match") || false;

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);
        setError("");

        try {
            const response = await fetch("http://127.0.0.1:8000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Registration failed");
                setLoading(false);
                return;
            }

            // Success
            setLoading(false);
            navigate("/log-in");
        } catch (err) {
            setError("Server error. Please try again.");
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#f7fdff] flex items-center justify-center relative  font-sans text-black mt-0">


            <div className="relative z-10 w-full max-w-md mx-4 mt-14">
                <div className="  p-8 md:p-10">

                    {/* /* Header */}
                    <div className="text-center mb-8 ">
                        <h2 className="text-4xl font-bold font-Inter text-[#FFA273] mb-2">
                            Register Now for Free Membership
                        </h2>
                        <p className="text-slate-700 text-xl  mb-2">
                            Member enjoys up to 50% discount from USA Retail Price
                        </p>
                        <p className="text-slate-700 text-m " style={{ color: "#FFA273" }}>
                            Personal Information
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} noValidate className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider ">
                                Full Name
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M20 21v-2a4 4 0 0 0-3-3.87M4 21v-2a4 4 0 0 1 3-3.87M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" /></svg>
                                </div>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="block w-full pl-12 pr-4 py-3.5  border  text-gray-500"
                                    placeholder="John Doe"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider ml-1">
                                Email Address
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full pl-12 pr-4 py-3.5 border  text-gray-500"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider ml-1">
                                Password
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect width="18" height="11" x="3" y="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                </div>

                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full pl-12 pr-4 py-3.5 border  text-gray-500"
                                    placeholder="••••••••"
                                />

                                {/* Show/Hide Password */}
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-white"
                                >
                                    {showPassword ? "👁️" : "🙈"}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider ml-1">
                                Confirm Password
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect width="18" height="11" x="3" y="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                </div>

                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={confirm}
                                    onChange={(e) => setConfirm(e.target.value)}
                                    className="block w-full pl-12 pr-4 py-3.5 border text-gray-500"
                                    placeholder="••••••••"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-white"
                                >
                                    {showPassword ? "👁️" : "🙈"}
                                </button>
                            </div>
                        </div>

                        {/* Error */}
                        {error && (
                            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                                {error}
                            </div>
                        )}

                        {/* Buttons */}
                        <div className=" flex flex-col gap-3 items-center">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-1/2 py-3.5  text-xl font-bold bg-[#FFA273] text-white  shadow-lg ${loading ? "opacity-70" : "cursor-pointer"}`}
                            >
                                {loading ? "Creating account..." : "Sign Up"}
                            </button>

                            <div className="text-center text-sm text-gray-600 mt-4">
                                Already Have an Account ?{" "}
                                <button
                                    type="button"
                                    onClick={() => navigate("/log-in")}
                                    className="text-[#FFA273] font-semibold hover:underline cursor-pointer"
                                >
                                    Log In
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}
