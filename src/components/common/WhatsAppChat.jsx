import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "+8801771673537"; // Your WhatsApp number
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition relative"
      >
        <FaWhatsapp size={28} />
        <span className="absolute top-1 right-1 bg-red-500 rounded-full h-2 w-2 animate-pulse"></span>
      </button>

      {/* Chatbox */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-72 bg-white shadow-xl rounded-lg border border-gray-200 overflow-hidden transition-all">
          <div className="bg-green-500 text-white p-3 font-semibold flex justify-between items-center">
            <span>Chat with us 💬</span>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>

          <div className="p-3">
            <div className="bg-gray-100 text-sm text-gray-700 p-2 rounded mb-2">
              Hi there 👋<br />
              How can we help you?
            </div>
            <textarea
              rows="2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="w-full border rounded p-2 text-sm focus:outline-green-500"
            />
            <button
              onClick={handleSend}
              className="mt-2 w-full bg-green-500 hover:bg-green-600 text-white p-2 rounded text-sm font-semibold"
            >
              Send via WhatsApp
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppChat;
