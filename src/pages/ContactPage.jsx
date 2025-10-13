import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center gap-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-slate-600 hover:text-slate-800 font-bold">
                Home
              </Link>
              <span className="text-slate-400">/</span>
              <span className="text-slate-600 font-bold">Contact</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800">Get In Touch</h1>
            <p className="text-slate-600 max-w-xl">
              We'd love to hear from you. Our team is always here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Phone */}
          <div className="flex flex-col items-center text-center p-8 bg-white border border-slate-200 rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
              <FiPhone className="w-8 h-8 text-orange-700" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Phone</h3>
            <p className="text-slate-600 text-sm mb-3">Mon-Fri 9am-6pm</p>
            <a href="tel:+25555525525" className="text-orange-700 font-medium hover:text-orange-800">
              255 555 25 25
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center text-center p-8 bg-white border border-slate-200 rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
              <FiMail className="w-8 h-8 text-orange-700" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Email</h3>
            <p className="text-slate-600 text-sm mb-3">Online Support</p>
            <a href="mailto:Example@gmail.com" className="text-orange-700 font-medium hover:text-orange-800">
              Example@gmail.com
            </a>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center text-center p-8 bg-white border border-slate-200 rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
              <FiMapPin className="w-8 h-8 text-orange-700" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Address</h3>
            <p className="text-slate-600 text-sm mb-3">Visit Our Office</p>
            <p className="text-orange-700 font-medium">
              Example Street No: 123<br />Ankara, Turkey
            </p>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center text-center p-8 bg-white border border-slate-200 rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
              <FiClock className="w-8 h-8 text-orange-700" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Working Hours</h3>
            <p className="text-slate-600 text-sm mb-3">Our Schedule</p>
            <p className="text-orange-700 font-medium">
              Mon-Fri: 9am-6pm<br />Sat-Sun: Closed
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Info */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Let's Talk About Everything!
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Have a question about our products or services? Need help with an order? 
                Or just want to say hello? We'd love to hear from you.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Fill out the form and our team will get back to you within 24 hours. 
                For urgent matters, please call us directly.
              </p>
            </div>

            {/* Additional Info */}
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Why Choose Us?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-orange-700 font-bold">✓</span>
                  <span className="text-slate-600">24/7 Customer Support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-700 font-bold">✓</span>
                  <span className="text-slate-600">Fast Response Time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-700 font-bold">✓</span>
                  <span className="text-slate-600">Expert Assistance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-700 font-bold">✓</span>
                  <span className="text-slate-600">Satisfaction Guaranteed</span>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-orange-700 text-white flex items-center justify-center hover:bg-orange-800 transition-colors"
                >
                  f
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-orange-700 text-white flex items-center justify-center hover:bg-orange-800 transition-colors"
                >
                  tw
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-orange-700 text-white flex items-center justify-center hover:bg-orange-800 transition-colors"
                >
                  in
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-orange-700 text-white flex items-center justify-center hover:bg-orange-800 transition-colors"
                >
                  yt
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-slate-800 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none focus:border-orange-700 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-800 mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none focus:border-orange-700 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-slate-800 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none focus:border-orange-700 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-800 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us more about your inquiry..."
                  className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none focus:border-orange-700 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-10 py-4 bg-orange-700 text-white font-bold rounded hover:bg-orange-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="w-full h-96 bg-slate-200 rounded-lg overflow-hidden">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d392040.6084752593!2d32.60468605000001!3d39.903693449999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xbdc57b0c0842b8d!2sAnkara%2C%20Turkey!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-orange-700 rounded-lg p-8 md:p-12">
            <div className="text-center md:text-left text-white">
              <h2 className="text-3xl font-bold mb-2">Need Immediate Assistance?</h2>
              <p className="text-lg opacity-90">Our customer support team is available 24/7</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+25555525525"
                className="px-8 py-4 bg-white text-orange-700 font-bold rounded hover:bg-slate-100 transition-colors text-center"
              >
                Call Now
              </a>
              <a
                href="#"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded hover:bg-white hover:text-orange-700 transition-colors text-center"
              >
                Live Chat
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

