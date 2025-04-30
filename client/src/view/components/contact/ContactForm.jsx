// ContactForm.jsx
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.send('service_pqzk9q7', 'template_i1fbe7h', form, 'NTOUZNNG6_9kgGe4T')
      .then(() => {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Email send error:', error);
        setStatus('Failed to send message. Try again later.');
      });
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white shadow-lg rounded-xl mt-10 border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Send a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>
        {status && <p className="text-sm text-gray-600 mt-2">{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
