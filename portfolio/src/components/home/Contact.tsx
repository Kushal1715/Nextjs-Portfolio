import { MoveRight } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section
      className="text-center bg-white h-screen flex items-center justify-center flex-col"
      id="contact"
    >
      <h4 className="text-lg font-medium mb-3">Connect with me</h4>
      <h2 className="text-4xl md:text-5xl font-semibold mb-5">Get in touch</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-12">
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </p>

      <form className="w-full md:max-w-3xl space-y-10">
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Message */}
        <textarea
          rows={8}
          placeholder="Enter your message"
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black resize-none"
        />

        {/* Button */}
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 mx-auto hover:bg-gray-900 transition cursor-pointer"
        >
          Submit now <MoveRight className="w-4 h-4" />
        </button>
      </form>
    </section>
  );
};

export default Contact;
