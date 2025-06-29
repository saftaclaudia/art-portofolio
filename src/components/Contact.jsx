import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const [succes, setSuccces] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_yjtyup2", "template_u8zklev", form, "eyzRAnrj05vrYo--H")
      .then((result) => {
        console.log(result.text);
        setSuccces(true);
        setError(false);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error(error.text);
        setError(true);
        setSuccces(false);
      });

    console.log("Submitted form", form);
    //send to email or backend
  };

  return (
    <section id="contact" className="pt-20 pb-4 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Contact
        </h2>
        <p className="text-gray-600 text-center mb-8">
          {" "}
          Feel free to get in touch with me. I’d love to hear from you!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className=" w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

          <textarea
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message"
            required
            className=" w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

          <button
            type="submit"
            className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition"
          >
            Send Message
          </button>
          {succes && (
            <p className="text-green-600">Message sent successfully</p>
          )}
          {error && (
            <p className="text-red-600">
              Oops! Something went wrong.sent successfully
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
