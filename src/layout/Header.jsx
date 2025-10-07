import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiSearch, FiUser, FiMenu, FiX, FiHeart } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white">
      {/* Top Bar */}
      <div className="bg-orange-700 text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <a href="tel:+25555525525" className="hover:text-slate-300 flex items-center gap-1">
                📞 255 555 25 25
              </a>
              <a href="mailto:examplemail@gmail.com" className="hover:text-slate-300 hidden md:flex items-center gap-1">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                examplemail@gmail.com
              </a>
            </div>
            <p className="text-center py-1 md:py-0">
              Welcome! Free Shipping On All Orders Over $50
            </p>
            <div className="flex items-center gap-2">
              <span>Follow Us:</span>
              <div className="flex gap-3">
                <a href="#" className="hover:text-slate-300">Instagram</a>
                <a href="#" className="hover:text-slate-300">Youtube</a>
                <a href="#" className="hover:text-slate-300">Facebook</a>
                <a href="#" className="hover:text-slate-300">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-slate-800">
            WiCommerce
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-slate-600 hover:text-orange-700 font-medium">
              Home
            </Link>
            <Link to="/shop" className="text-slate-600 hover:text-orange-700 font-medium">
              Shop
            </Link>
            <Link to="/about" className="text-slate-600 hover:text-orange-700 font-medium">
              About
            </Link>
            <Link to="/blog" className="text-slate-600 hover:text-orange-700 font-medium">
              Blog
            </Link>
            <Link to="/contact" className="text-slate-600 hover:text-orange-700 font-medium">
              Contact
            </Link>
            <Link to="/pages" className="text-slate-600 hover:text-orange-700 font-medium">
              Pages
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/login" className="flex items-center gap-1 text-orange-700 font-medium">
              <FiUser className="w-4 h-4" />
              Login / Register
            </Link>
            <button className="text-orange-700">
              <FiSearch className="w-5 h-5" />
            </button>
            <Link to="/cart" className="flex items-center gap-1 text-orange-700">
              <FiShoppingCart className="w-5 h-5" />
              <span className="text-sm">1</span>
            </Link>
            <Link to="/wishlist" className="flex items-center gap-1 text-orange-700">
              <FiHeart className="w-5 h-5" />
              <span className="text-sm">1</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col items-center gap-6 py-6 border-t">
            <Link 
              to="/" 
              className="text-slate-600 hover:text-orange-700 font-medium text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className="text-slate-600 hover:text-orange-700 font-medium text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/about" 
              className="text-slate-600 hover:text-orange-700 font-medium text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/blog" 
              className="text-slate-600 hover:text-orange-700 font-medium text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="text-slate-600 hover:text-orange-700 font-medium text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/pages" 
              className="text-slate-600 hover:text-orange-700 font-medium text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Pages
            </Link>
            
            {/* Mobile Actions */}
            <div className="flex flex-col items-center gap-4 mt-4 w-full border-t pt-6">
              <Link to="/login" className="flex items-center gap-2 text-orange-700 font-medium">
                <FiUser className="w-5 h-5" />
                Login / Register
              </Link>
              <div className="flex items-center gap-6">
                <button className="text-orange-700">
                  <FiSearch className="w-6 h-6" />
                </button>
                <Link to="/cart" className="flex items-center gap-1 text-orange-700">
                  <FiShoppingCart className="w-6 h-6" />
                  <span>1</span>
                </Link>
                <Link to="/wishlist" className="flex items-center gap-1 text-orange-700">
                  <FiHeart className="w-6 h-6" />
                  <span>1</span>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

