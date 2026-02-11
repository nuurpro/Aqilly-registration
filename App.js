// ----- Aqilly Pre-Registration Frontend -----
// Run: `npm run dev` (Vite setup recommended)

import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    phone: "",
    comment: "",
    consent: false,
  });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://www.aqilly.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setMsg(data.message);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-black">
      {/* Header */}
      <header className="w-full p-4 flex justify-between items-center border-b">
        <img src="Logo_with_slogan.png" alt="Aqilly Logo" className="h-10" />
        <nav className="flex gap-4">
          <a href="https://t.me/aqilly_ai" target="_blank">Telegram</a>
          <a href="https://linkedin.com/company/aqilly" target="_blank">LinkedIn</a>
          <a href="https://twitter.com/aqilly" target="_blank">Twitter</a>
        </nav>
      </header>

      {/* About Aqilly */}
      <section className="w-full max-w-3xl p-10 text-center">
        <h1 className="text-4xl font-bold">Aqilly — Your Active Second Brain</h1>
        <p className="mt-4 text-lg text-gray-600">
          Aqilly is your AI-powered second brain. We make it effortless to capture notes by voice, text, or file,
          then instantly organize, summarize, and schedule them. From reminders to active recall flashcards,
          Aqilly helps you save smarter and remember better.
        </p>
      </section>

      {/* Registration Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-6 rounded-2xl shadow-lg w-full max-w-md"
      >
        <input name="fullname" placeholder="Full Name" value={form.fullname}
          onChange={handleChange} required className="w-full mb-3 p-2 border rounded" />

        <input name="email" type="email" placeholder="Email" value={form.email}
          onChange={handleChange} className="w-full mb-3 p-2 border rounded" />

        <input name="phone" type="tel" placeholder="+998901234567" value={form.phone}
          onChange={handleChange} className="w-full mb-3 p-2 border rounded" />

        <textarea name="comment" placeholder="Comments (optional)" value={form.comment}
          onChange={handleChange} className="w-full mb-3 p-2 border rounded" />

        <label className="flex items-center mb-3">
          <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} required />
          <span className="ml-2 text-sm text-gray-700">
            I acknowledge the use of my personal data by Aqilly for registration and communication purposes.
          </span>
        </label>

        <button type="submit" className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
          Join the Waitlist
        </button>
      </form>

      {msg && <p className="mt-4 text-lg">{msg}</p>}

      {/* Footer */}
      <footer className="mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} Aqilly. All rights reserved.
      </footer>
    </div>
  );
}
