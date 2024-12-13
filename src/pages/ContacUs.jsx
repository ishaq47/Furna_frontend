import React from 'react';

function ContactUs() {
  return (
    <div className="bg-light-gray min-h-screen flex flex-col items-center justify-center py-12 px-4">
      {/* Header */}
      <h1 className="text-4xl font-bold text-deep-navy mb-6 text-center ">Contact Us</h1>
      <p className="text-gray-700 text-lg mb-8 text-center">
        Have questions or need help? Get in touch with us using the form below.
      </p>

      {/* Contact Form */}
      <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-6">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-soft-gold"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-soft-gold"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-soft-gold"
              rows="5"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-soft-gold text-white font-medium py-3 rounded-md shadow hover:bg-gold transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Information */}
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold text-deep-navy mb-4">Our Contact Information</h2>
        <p className="text-gray-700">Email: support@furniturewebsite.com</p>
        <p className="text-gray-700">Phone: +1 234 567 890</p>
        <p className="text-gray-700">Address: 123 Furniture Lane, Design City, USA</p>
      </div>
    </div>
  );
}

export default ContactUs;
