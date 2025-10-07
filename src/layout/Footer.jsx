import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      {/* Top Section */}
      <div className="bg-slate-50 border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h3 className="text-2xl font-bold text-slate-800">WiCommerce</h3>
            <div className="flex gap-4">
              <a href="#" className="text-orange-700 hover:text-orange-800">
                <FiFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-orange-700 hover:text-orange-800">
                <FiInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-orange-700 hover:text-orange-800">
                <FiTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-slate-800 text-base">Company Info</h5>
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-slate-600 hover:text-slate-800 text-sm">
                About Us
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-800 text-sm">
                Carrier
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-800 text-sm">
                We are hiring
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-800 text-sm">
                Blog
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-slate-800 text-base">Legal</h5>
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-slate-600 hover:text-slate-800 text-sm">
                About Us
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-800 text-sm">
                Carrier
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-800 text-sm">
                We are hiring
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-800 text-sm">
                Blog
              </a>
            </nav>
          </div>

          {/* Features */}
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-slate-800 text-base">Features</h5>
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-slate-600 hover:text-slate-800 text-sm">
                Business Marketing
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-800 text-sm">
                User Analytic
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-800 text-sm">
                Live Chat
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-800 text-sm">
                Unlimited Support
              </a>
            </nav>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-slate-800 text-base">Resources</h5>
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-slate-600 hover:text-slate-800 text-sm">
                IOS & Android
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-800 text-sm">
                Watch a Demo
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-800 text-sm">
                Customers
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-800 text-sm">
                API
              </a>
            </nav>
          </div>

          {/* Get In Touch */}
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-slate-800 text-base">Get In Touch</h5>
            <div className="flex flex-col gap-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 px-4 py-3 border border-slate-300 rounded-l text-sm focus:outline-none focus:border-orange-700"
                />
                <button className="px-6 py-3 bg-orange-700 text-white rounded-r hover:bg-orange-800 text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-50">
        <div className="container mx-auto px-4 py-6">
          <p className="text-slate-600 text-sm text-center md:text-left">
            {/* Copyright removed for personal project */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

