import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { FiGrid, FiList, FiFilter, FiX } from 'react-icons/fi';

const ShopPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [sortBy, setSortBy] = useState('popularity');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Sample categories data
  const categories = [
    {
      id: 1,
      name: 'MEN',
      image: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=600',
      itemCount: 5
    },
    {
      id: 2,
      name: 'WOMEN',
      image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80',
      itemCount: 5
    },
    {
      id: 3,
      name: 'ACCESSORIES',
      image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&q=80',
      itemCount: 4
    },
    {
      id: 4,
      name: 'KIDS',
      image: 'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=800&q=80',
      itemCount: 4
    }
  ];

  // Sample product data - 48 products with categories, brands, and prices for filtering
  const allProducts = [
    { id: 1, image: 'https://picsum.photos/seed/product1/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 16.48, salePrice: 6.48, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'men', brand: 'Nike' },
    { id: 2, image: 'https://picsum.photos/seed/product2/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 24.99, salePrice: 9.99, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'women', brand: 'Adidas' },
    { id: 3, image: 'https://picsum.photos/seed/product3/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 18.50, salePrice: 11.48, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'accessories', brand: 'Puma' },
    { id: 4, image: 'https://picsum.photos/seed/product4/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 22.00, salePrice: 9.90, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'kids', brand: 'Reebok' },
    { id: 5, image: 'https://picsum.photos/seed/product5/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 29.99, salePrice: 8.99, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'men', brand: 'New Balance' },
    { id: 6, image: 'https://picsum.photos/seed/product6/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 19.48, salePrice: 11.28, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'women', brand: 'Nike' },
    { id: 7, image: 'https://picsum.photos/seed/product7/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 15.99, salePrice: 10.39, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'accessories', brand: 'Adidas' },
    { id: 8, image: 'https://picsum.photos/seed/product8/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 21.48, salePrice: 10.32, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'kids', brand: 'Puma' },
    { id: 9, image: 'https://picsum.photos/seed/product9/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 20.99, salePrice: 10.91, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'men', brand: 'Reebok' },
    { id: 10, image: 'https://picsum.photos/seed/product10/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 27.50, salePrice: 9.62, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'women', brand: 'New Balance' },
    { id: 11, image: 'https://picsum.photos/seed/product11/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 17.99, salePrice: 10.79, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'accessories', brand: 'Nike' },
    { id: 12, image: 'https://picsum.photos/seed/product12/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 22.48, salePrice: 10.11, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'kids', brand: 'Adidas' },
    { id: 13, image: 'https://picsum.photos/seed/product13/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 23.99, salePrice: 11.99, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'men', brand: 'Puma' },
    { id: 14, image: 'https://picsum.photos/seed/product14/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 16.48, salePrice: 9.05, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'women', brand: 'Reebok' },
    { id: 15, image: 'https://picsum.photos/seed/product15/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 25.00, salePrice: 9.50, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'accessories', brand: 'New Balance' },
    { id: 16, image: 'https://picsum.photos/seed/product16/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 18.50, salePrice: 11.47, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'kids', brand: 'Nike' },
    { id: 17, image: 'https://picsum.photos/seed/product17/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 20.00, salePrice: 10.60, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'men', brand: 'Adidas' },
    { id: 18, image: 'https://picsum.photos/seed/product18/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 21.99, salePrice: 10.33, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'women', brand: 'Puma' },
    { id: 19, image: 'https://picsum.photos/seed/product19/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 19.48, salePrice: 11.49, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'accessories', brand: 'Reebok' },
    { id: 20, image: 'https://picsum.photos/seed/product20/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 26.50, salePrice: 11.13, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'kids', brand: 'New Balance' },
    { id: 21, image: 'https://picsum.photos/seed/product21/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 16.99, salePrice: 9.51, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'men', brand: 'Nike' },
    { id: 22, image: 'https://picsum.photos/seed/product22/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 28.99, salePrice: 9.85, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'women', brand: 'Adidas' },
    { id: 23, image: 'https://picsum.photos/seed/product23/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 17.50, salePrice: 10.67, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'accessories', brand: 'Puma' },
    { id: 24, image: 'https://picsum.photos/seed/product24/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 23.48, salePrice: 11.50, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'kids', brand: 'Reebok' },
    { id: 25, image: 'https://picsum.photos/seed/product25/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 25.99, salePrice: 11.16, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'men', brand: 'New Balance' },
    { id: 26, image: 'https://picsum.photos/seed/product26/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 19.00, salePrice: 10.83, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'women', brand: 'Nike' },
    { id: 27, image: 'https://picsum.photos/seed/product27/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 20.48, salePrice: 10.44, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'accessories', brand: 'Adidas' },
    { id: 28, image: 'https://picsum.photos/seed/product28/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 22.99, salePrice: 10.57, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'kids', brand: 'Puma' },
    { id: 29, image: 'https://picsum.photos/seed/product29/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 15.50, salePrice: 9.92, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'men', brand: 'Reebok' },
    { id: 30, image: 'https://picsum.photos/seed/product30/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 30.00, salePrice: 9.60, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'women', brand: 'New Balance' },
    { id: 31, image: 'https://picsum.photos/seed/product31/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 18.99, salePrice: 10.25, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'accessories', brand: 'Nike' },
    { id: 32, image: 'https://picsum.photos/seed/product32/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 21.48, salePrice: 10.31, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'kids', brand: 'Adidas' },
    { id: 33, image: 'https://picsum.photos/seed/product33/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 24.50, salePrice: 10.04, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'men', brand: 'Puma' },
    { id: 34, image: 'https://picsum.photos/seed/product34/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 17.00, salePrice: 10.71, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'women', brand: 'Reebok' },
    { id: 35, image: 'https://picsum.photos/seed/product35/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 26.99, salePrice: 9.71, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'accessories', brand: 'New Balance' },
    { id: 36, image: 'https://picsum.photos/seed/product36/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 19.99, salePrice: 10.39, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'kids', brand: 'Nike' },
    { id: 37, image: 'https://picsum.photos/seed/product37/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 23.00, salePrice: 10.12, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'men', brand: 'Adidas' },
    { id: 38, image: 'https://picsum.photos/seed/product38/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 18.48, salePrice: 10.71, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'women', brand: 'Puma' },
    { id: 39, image: 'https://picsum.photos/seed/product39/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 25.50, salePrice: 9.94, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'accessories', brand: 'Reebok' },
    { id: 40, image: 'https://picsum.photos/seed/product40/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 21.99, salePrice: 10.99, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'kids', brand: 'New Balance' },
    { id: 41, image: 'https://picsum.photos/seed/product41/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 16.48, salePrice: 9.05, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'men', brand: 'Nike' },
    { id: 42, image: 'https://picsum.photos/seed/product42/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 29.50, salePrice: 9.73, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'women', brand: 'Adidas' },
    { id: 43, image: 'https://picsum.photos/seed/product43/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 16.99, salePrice: 10.19, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'accessories', brand: 'Puma' },
    { id: 44, image: 'https://picsum.photos/seed/product44/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 22.50, salePrice: 10.57, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'kids', brand: 'Reebok' },
    { id: 45, image: 'https://picsum.photos/seed/product45/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 26.00, salePrice: 10.92, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'men', brand: 'New Balance' },
    { id: 46, image: 'https://picsum.photos/seed/product46/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 18.00, salePrice: 10.08, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'women', brand: 'Nike' },
    { id: 47, image: 'https://picsum.photos/seed/product47/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 27.99, salePrice: 10.35, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'accessories', brand: 'Adidas' },
    { id: 48, image: 'https://picsum.photos/seed/product48/400/600', title: 'Graphic Design', department: 'English Department', originalPrice: 23.48, salePrice: 11.50, colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], category: 'kids', brand: 'Puma' }
  ];

  const filterCategories = ['All', 'Men', 'Women', 'Accessories', 'Kids'];
  const brands = ['Nike', 'Adidas', 'Puma', 'Reebok', 'New Balance'];

  // Filter products based on category and brands
  const filteredProducts = allProducts.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    return categoryMatch && brandMatch;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBrandToggle = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const applyFilters = () => {
    setCurrentPage(1); // Reset to first page when applying filters
    setShowFilters(false); // Close mobile filter drawer
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
            {/* Breadcrumb and Title */}
            <div className="flex flex-col gap-4">
              <nav className="flex items-center gap-2 text-sm">
                <Link to="/" className="text-slate-600 hover:text-slate-800 font-bold">
                  Home
                </Link>
                <span className="text-slate-400">/</span>
                <span className="text-slate-600 font-bold">Shop</span>
              </nav>
              <h1 className="text-2xl font-bold text-slate-800">Shop</h1>
            </div>

            {/* Results and View Toggle */}
            <div className="hidden md:flex items-center gap-6">
              <span className="text-slate-600 text-sm">
                Showing all {filteredProducts.length} results
              </span>
              <div className="flex items-center gap-4">
                <span className="text-slate-600 text-sm">Views:</span>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 border rounded ${
                    viewMode === 'grid'
                      ? 'border-slate-800 text-slate-800'
                      : 'border-slate-300 text-slate-600'
                  }`}
                >
                  <FiGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 border rounded ${
                    viewMode === 'list'
                      ? 'border-slate-800 text-slate-800'
                      : 'border-slate-300 text-slate-600'
                  }`}
                >
                  <FiList className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-slate-300 rounded text-sm text-slate-600 focus:outline-none focus:border-slate-800"
                >
                  <option value="popularity">Popularity</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative group cursor-pointer overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-[220px] md:h-[280px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="text-lg md:text-xl font-bold mb-1">
                  {category.name}
                </h3>
                <p className="text-sm">{category.itemCount} Items</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Shop Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-slate-800 mb-6">Filters</h3>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-bold text-slate-800 mb-3 text-sm">
                  CATEGORIES
                </h4>
                <div className="flex flex-col gap-2">
                  {filterCategories.map((category) => (
                    <label
                      key={category}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="category"
                        value={category.toLowerCase()}
                        checked={selectedCategory === category.toLowerCase()}
                        onChange={(e) => handleCategoryChange(e.target.value)}
                        className="w-4 h-4 accent-orange-700"
                      />
                      <span className="text-sm text-slate-600">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="mb-6">
                <h4 className="font-bold text-slate-800 mb-3 text-sm">BRANDS</h4>
                <div className="flex flex-col gap-2">
                  {brands.map((brand) => (
                    <label
                      key={brand}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandToggle(brand)}
                        className="w-4 h-4 accent-orange-700"
                      />
                      <span className="text-sm text-slate-600">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div className="mb-6">
                <h4 className="font-bold text-slate-800 mb-3 text-sm">COLORS</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    '#23A6F0',
                    '#23856D',
                    '#E77C40',
                    '#252B42',
                    '#FF6B6B',
                    '#4ECDC4',
                    '#FFE66D',
                    '#A8DADC'
                  ].map((color) => (
                    <button
                      key={color}
                      className="w-8 h-8 rounded-full border-2 border-slate-300 hover:border-slate-800 transition-colors"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-bold text-slate-800 mb-3 text-sm">
                  PRICE RANGE
                </h4>
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    placeholder="Min"
                    value={priceRange[0]}
                    onChange={(e) =>
                      setPriceRange([Number(e.target.value), priceRange[1]])
                    }
                    className="w-20 px-2 py-1 border border-slate-300 rounded text-sm focus:outline-none focus:border-slate-800"
                  />
                  <span className="text-slate-600">-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], Number(e.target.value)])
                    }
                    className="w-20 px-2 py-1 border border-slate-300 rounded text-sm focus:outline-none focus:border-slate-800"
                  />
                </div>
              </div>

              <button 
                onClick={applyFilters}
                className="w-full px-4 py-2 bg-orange-700 text-white font-bold rounded hover:bg-orange-800 transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </aside>

          {/* Mobile Filter Button */}
          <div className="lg:hidden sticky top-0 z-10 bg-white border-b border-slate-200 py-3 -mx-4 px-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setShowFilters(true)}
                className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded text-slate-600 hover:border-slate-800 hover:text-slate-800"
              >
                <FiFilter className="w-4 h-4" />
                <span className="font-medium">Filters</span>
              </button>
              <div className="flex items-center gap-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-slate-300 rounded text-sm text-slate-600"
                >
                  <option value="popularity">Popularity</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>
          </div>

          {/* Mobile Filter Drawer */}
          {showFilters && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div
                className="absolute inset-0 bg-black bg-opacity-50"
                onClick={() => setShowFilters(false)}
              ></div>
              <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-xl overflow-y-auto">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-slate-800">Filters</h3>
                    <button
                      onClick={() => setShowFilters(false)}
                      className="text-slate-600 hover:text-slate-800"
                    >
                      <FiX className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Mobile Filter Content - Same as Desktop */}
                  <div className="mb-6">
                    <h4 className="font-bold text-slate-800 mb-3 text-sm">
                      CATEGORIES
                    </h4>
                    <div className="flex flex-col gap-2">
                      {filterCategories.map((category) => (
                        <label
                          key={category}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="category-mobile"
                            value={category.toLowerCase()}
                            checked={selectedCategory === category.toLowerCase()}
                            onChange={(e) => handleCategoryChange(e.target.value)}
                            className="w-4 h-4 accent-orange-700"
                          />
                          <span className="text-sm text-slate-600">
                            {category}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-slate-800 mb-3 text-sm">
                      BRANDS
                    </h4>
                    <div className="flex flex-col gap-2">
                      {brands.map((brand) => (
                        <label
                          key={brand}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedBrands.includes(brand)}
                            onChange={() => handleBrandToggle(brand)}
                            className="w-4 h-4 accent-orange-700"
                          />
                          <span className="text-sm text-slate-600">
                            {brand}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-slate-800 mb-3 text-sm">
                      COLORS
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        '#23A6F0',
                        '#23856D',
                        '#E77C40',
                        '#252B42',
                        '#FF6B6B',
                        '#4ECDC4',
                        '#FFE66D',
                        '#A8DADC'
                      ].map((color) => (
                        <button
                          key={color}
                          className="w-8 h-8 rounded-full border-2 border-slate-300 hover:border-slate-800 transition-colors"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-slate-800 mb-3 text-sm">
                      PRICE RANGE
                    </h4>
                    <div className="flex items-center gap-4">
                      <input
                        type="number"
                        placeholder="Min"
                        value={priceRange[0]}
                        onChange={(e) =>
                          setPriceRange([Number(e.target.value), priceRange[1]])
                        }
                        className="w-20 px-2 py-1 border border-slate-300 rounded text-sm"
                      />
                      <span className="text-slate-600">-</span>
                      <input
                        type="number"
                        placeholder="Max"
                        value={priceRange[1]}
                        onChange={(e) =>
                          setPriceRange([priceRange[0], Number(e.target.value)])
                        }
                        className="w-20 px-2 py-1 border border-slate-300 rounded text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setShowFilters(false)}
                      className="flex-1 px-4 py-2 border border-slate-300 text-slate-600 font-bold rounded hover:bg-slate-50"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={applyFilters}
                      className="flex-1 px-4 py-2 bg-orange-700 text-white font-bold rounded hover:bg-orange-800"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 border rounded font-medium transition-colors ${
                  currentPage === 1
                    ? 'border-slate-200 text-slate-400 cursor-not-allowed'
                    : 'border-slate-300 text-slate-600 hover:border-slate-800 hover:text-slate-800'
                }`}
              >
                First
              </button>
              {Array.from({ length: Math.max(totalPages, 1) }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 border rounded font-medium transition-colors ${
                      currentPage === page
                        ? 'border-orange-700 bg-orange-700 text-white'
                        : 'border-slate-300 text-slate-600 hover:border-slate-800 hover:text-slate-800'
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 border rounded font-medium transition-colors ${
                  currentPage === totalPages
                    ? 'border-slate-200 text-slate-400 cursor-not-allowed'
                    : 'border-slate-300 text-orange-700 hover:border-orange-700'
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;

