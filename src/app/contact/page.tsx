export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

      {/* Image */}
      <img
        src="/abc.jpg"
        alt="Contact"
        className="mx-auto rounded-lg shadow-md w-80 mb-6"
      />

      {/* Info Section */}
      <div className="space-y-2 mb-6">
        <p>📞 Phone: +92 300 1234567</p>
        <p>📧 Email: info@example.com</p>
        <p>🏢 Address: Karachi, Pakistan</p>
      </div>

      {/* Contact Form */}
      <form className="bg-white p-6 rounded-lg shadow space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border rounded p-2"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border rounded p-2"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border rounded p-2"
          rows={4}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
