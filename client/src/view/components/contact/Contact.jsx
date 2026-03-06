import { useState, useRef } from 'react';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaClock,
  FaGlobe,
  FaPaperPlane,
  FaCheckCircle,
  FaTimesCircle
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Contact information
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt size={24} />,
      title: 'Location',
      details: ['Tangail, Dhaka', 'Bangladesh'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30'
    },
    {
      icon: <FaPhoneAlt size={24} />,
      title: 'Phone Number',
      details: ['+880 1715-972211', '+880 1613655422'],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/30'
    },
    {
      icon: <FaEnvelope size={24} />,
      title: 'Email Address',
      details: ['raselmiahdev@gmail.com'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30'
    },
    {
      icon: <FaClock size={24} />,
      title: 'Working Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-100 dark:bg-orange-900/30'
    }
  ];

  // Social media links
  const socialLinks = [
    { icon: <FaGithub size={20} />, url: 'https://github.com/raselmiah', label: 'GitHub', color: 'hover:bg-gray-900' },
    { icon: <FaLinkedin size={20} />, url: 'https://linkedin.com/in/raselmiah', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: <FaFacebook size={20} />, url: 'https://facebook.com/raselmiah', label: 'Facebook', color: 'hover:bg-blue-500' },
    { icon: <FaWhatsapp size={20} />, url: 'https://wa.me/8801715972211', label: 'WhatsApp', color: 'hover:bg-green-500' },
  ];

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: 'info', message: 'Sending message...' });

    emailjs.send(
      'service_pqzk9q7', 
      'template_i1fbe7h', 
      {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
        to_email: 'raselmiahdev@gmail.com'
      }, 
      'NTOUZNNG6_9kgGe4T'
    )
    .then(() => {
      setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    })
    .catch((error) => {
      console.error('Email send error:', error);
      setStatus({ type: 'error', message: 'Failed to send message. Please try again later or email me directly.' });
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`w-14 h-14 ${item.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className={`text-transparent bg-gradient-to-br ${item.color} bg-clip-text`}>
                  {item.icon}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              {item.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600 dark:text-gray-300 text-sm">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Main Contact Area */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Details & Map */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Contact Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Quick Connect
              </h3>
              
              {/* Direct Contact Buttons */}
              <div className="space-y-4">
                <a
                  href="tel:+8801715972211"
                  className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaPhoneAlt className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Call me directly</p>
                    <p className="font-semibold text-gray-900 dark:text-white">+880 1715-972211</p>
                  </div>
                </a>

                <a
                  href="mailto:raselmiahdev@gmail.com"
                  className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-purple-50 dark:hover:bg-gray-600 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaEnvelope className="text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Send me an email</p>
                    <p className="font-semibold text-gray-900 dark:text-white">raselmiahdev@gmail.com</p>
                  </div>
                </a>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Connect on Social Media
                </h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 ${social.color} hover:text-white transition-all duration-300 hover:scale-110`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="mt-8 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    <span className="font-semibold">Available for work</span> — Typically replies within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Map/Location Preview */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
                <FaGlobe className="mr-2 text-blue-600" />
                My Location
              </h3>
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden">
                <iframe
                  title="location-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.00977892987!2d89.88305275!3d24.247658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdfbe3d271b363%3A0x8a0d420fbcef6ad5!2sTangail%2C%20Bangladesh!5e0!3m2!1sen!2s!4v1645567842095!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm flex items-center">
                <FaMapMarkerAlt className="mr-2 text-red-500" />
                Tangail, Dhaka, Bangladesh
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <FaPaperPlane className="mr-3 text-blue-600" />
                Send Me a Message
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all duration-300"
                    placeholder="Project Inquiry, Collaboration, etc."
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    rows="6"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>

                {/* Status Message */}
                {status.message && (
                  <div className={`p-4 rounded-xl flex items-center space-x-3 ${
                    status.type === 'success' ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300' :
                    status.type === 'error' ? 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300' :
                    'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                  }`}>
                    {status.type === 'success' ? <FaCheckCircle className="flex-shrink-0" /> :
                     status.type === 'error' ? <FaTimesCircle className="flex-shrink-0" /> :
                     <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>}
                    <span className="text-sm">{status.message}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </>
                  )}
                </button>

                {/* Privacy Note */}
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                  By submitting this form, you agree to be contacted regarding your inquiry. 
                  Your information will not be shared with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ or Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Prefer email? Send me a message directly at{' '}
            <a href="mailto:raselmiahdev@gmail.com" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
              raselmiahdev@gmail.com
            </a>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            I'll get back to you within 24-48 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;