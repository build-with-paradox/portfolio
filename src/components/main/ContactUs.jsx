"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // null, 'success', 'error'
  const [loading, setLoading] = useState(false); // loading state

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
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
        setStatus("success");
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
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="min-h-screen py-16 px-6 flex items-center justify-center"
      id="contactus"
    >
      <div className="w-full max-w-4xl mx-auto bg-zinc-900 text-gray-100 rounded-3xl shadow-2xl">
        {/* Header */}
        <div className="bg-zinc-900 py-6 px-8 rounded-t-lg">
          <h2 className="text-3xl font-bold text-gray-50">Get in Touch</h2>
          <p className="text-gray-400 mt-2">
            Let’s create something extraordinary together! Whether it’s a
            groundbreaking idea, a technical challenge, or an artistic vision,
            I’d love to hear from you. Fill out the form below, and let’s start
            the conversation.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-400"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-green-500"
              placeholder="Your name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-green-500"
              placeholder="Your email"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="mt-1 w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-green-500"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className={`mt-6 px-6 py-3 text-md font-semibold rounded-lg bg-zinc-800 text-white transition-all duration-300 flex items-center justify-center space-x-4 relative w-full max-w-xs ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <span className="font-thin">Sending Message...</span>
              ) : (
                <>
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="font-thin">Send Message</span>
                </>
              )}
            </button>
          </div>

          {/* Feedback */}
          {status === "success" && (
            <p className="text-green-400 text-center">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center">
              Failed to send message. Please try again.
            </p>
          )}
        </form>

        {/* Footer */}
        <div className="bg-zinc-800 py-4 px-8 rounded-b-lg text-center text-gray-400">
          <p>
            Or email me directly at{" "}
            <a
              href="mailto:contact@buildwithparadox.com"
              className="text-green-500 hover:underline"
            >
              contact@buildwithparadox.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
