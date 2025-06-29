import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted form", form);
    //send to email or backend
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-64">
          Contact
        </h2>
        <p className="text-gray-600 text-center mb-8">
          {" "}
          Feel free to get in touch with me. I’d love to hear from you!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md border border-gray-300 pc-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md border border-gray-300 pc-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md border border-gray-300 pc-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
