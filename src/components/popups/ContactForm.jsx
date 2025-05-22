"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoClose } from "react-icons/io5"; // Close icon
import { FaPaperPlane } from "react-icons/fa"; // Send icon

const ContactForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-sm w-full bg-zinc-900 shadow-xl rounded-2xl pointer-events-auto flex ring-1 ring-white/10`}
          >
            <div className="flex-1 p-4 flex items-start gap-4">
              <img
                className="h-12 w-12 rounded-full ring-2 ring-green-400 shadow-md object-cover"
                src="/assets/myavatar.png"
                alt="Your Avatar"
              />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-semibold text-white">
                  Message received!
                </p>
                <p className="text-sm text-gray-300">
                  Thanks for reaching out — I’ll get back to you shortly.
                </p>
                <p className="text-xs text-gray-500">
                  Usually within a few hours 👨‍💻
                </p>
              </div>
            </div>
            <div className="flex items-center border-l border-white/10">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="px-4 py-2 text-sm text-green-400 hover:text-green-300 focus:outline-none"
              >
                Close
              </button>
            </div>
          </div>
        ));
        setFormData({ name: "", email: "", message: "" });
        onClose(); // Close popup on success
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      {/* Popup Content */}
      <div className="relative w-full max-w-lg bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950 text-white p-8 rounded-lg shadow-2xl transform scale-90 hover:scale-102 transition-transform duration-300">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-300 hover:text-gray-100 focus:outline-none"
          onClick={onClose}
          aria-label="Close Contact Form"
        >
          <IoClose size={28} />
        </button>

        {/* Form Header */}
        <h2 className="text-2xl font-extrabold text-gray-100 mb-6 text-center">
          Contact Me
        </h2>
        <p className="text-md text-gray-400 text-center mb-6">
          I would love to hear from you! Fill out the form below, and I’ll get
          back to you as soon as possible.
        </p>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-700 rounded-md bg-zinc-900 text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-700 rounded-md bg-zinc-900 text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-500"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-700 rounded-md bg-zinc-900 text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-500"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full px-6 py-3 text-lg font-semibold rounded-lg bg-zinc-800 text-white flex items-center justify-center space-x-2 ${
              loading ? "cursor-not-allowed opacity-70" : "hover:bg-zinc-700"
            }`}
          >
            <FaPaperPlane
              size={18}
              className={`text-green-500 ${loading ? "animate-pulse" : ""}`}
            />
            <span>{loading ? "Sending Message..." : "Send Message"}</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
