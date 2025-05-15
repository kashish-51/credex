import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', license: '', message: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.license || !form.message) {
      setError('Please fill all required fields.');
    } else {
      setError('');
      alert('Form submitted!');
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#1e3a8a]">
      <h2 className="text-4xl font-semibold text-center text-white mb-8">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-lg shadow">
        <div className="mb-4">
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded border dark:bg-gray-800 dark:text-white"
          />
        </div>
        <div className="mb-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded border dark:bg-gray-800 dark:text-white"
          />
        </div>
        <div className="mb-4">
          <input
            name="company"
            placeholder="Company"
            value={form.company}
            onChange={handleChange}
            className="w-full p-3 rounded border dark:bg-gray-800 dark:text-white"
          />
        </div>
        <div className="mb-4">
          <select
            name="license"
            value={form.license}
            onChange={handleChange}
            className="w-full p-3 rounded border dark:bg-gray-800 dark:text-white"
          >
            <option value="">Select License Type</option>
            <option value="Office 365">Office 365</option>
            <option value="Adobe Creative Suite">Adobe Creative Suite</option>
            <option value="AutoCAD">AutoCAD</option>
          </select>
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            placeholder="Your message..."
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded border dark:bg-gray-800 dark:text-white"
          ></textarea>
        </div>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white px-6 py-2 rounded hover:from-blue-600 hover:to-blue-800 transition-all shadow-lg"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
