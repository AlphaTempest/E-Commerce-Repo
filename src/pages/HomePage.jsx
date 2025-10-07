import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
      title: 'Watch',
      department: 'Accessories',
      discount: 45,
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42']
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400',
      title: 'Sunglasses',
      department: 'Accessories',
      discount: 60,
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42']
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400',
      title: 'Watch',
      department: 'Accessories',
      discount: 38,
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42']
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80',
      title: 'Perfume',
      department: 'Accessories',
      discount: 55,
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42']
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400',
      title: 'Shoes',
      department: 'Footwear',
      discount: 70,
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42']
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      title: 'Headphones',
      department: 'Electronics',
      discount: 42,
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42']
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=400',
      title: 'Smart Watch',
      department: 'Electronics',
      discount: 35,
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42']
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
      title: 'Shoes',
      department: 'Footwear',
      discount: 52,
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42']
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Slider Section */}
      <section className="w-full bg-slate-100">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="w-full"
        >
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center justify-between container mx-auto px-4 py-16 md:py-24">
              <div className="flex flex-col gap-6 max-w-lg text-center md:text-left">
                <h5 className="text-orange-700 font-bold text-base">FALL COLLECTION 2024</h5>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800">
                  NEW COLLECTION
                </h1>
                <p className="text-lg md:text-xl text-slate-600">
                  We know how large objects will act, but things on a small scale.
                </p>
                <div className="flex justify-center md:justify-start">
                  <button className="px-10 py-4 bg-orange-700 text-white font-bold text-base rounded hover:bg-orange-800 transition-colors">
                    SHOP NOW
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600" 
                  alt="Summer Collection"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center justify-between container mx-auto px-4 py-16 md:py-24">
              <div className="flex flex-col gap-6 max-w-lg text-center md:text-left">
                <h5 className="text-orange-700 font-bold text-base">NEW SEASON</h5>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800">
                  AUTUMN VIBES
                </h1>
                <p className="text-lg md:text-xl text-slate-600">
                  Discover the latest trends and styles for the new season.
                </p>
                <div className="flex justify-center md:justify-start">
                  <button className="px-10 py-4 bg-orange-700 text-white font-bold text-base rounded hover:bg-orange-800 transition-colors">
                    SHOP NOW
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <img 
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600" 
                  alt="Spring Collection"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Shop Categories Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col gap-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">EDITOR'S PICK</h2>
            <p className="text-slate-600">Curated collections designed to match your style</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Men Category */}
            <div className="md:col-span-2 relative group cursor-pointer overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=600" 
                alt="Men"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute bottom-6 left-6 px-12 py-3 bg-white font-bold text-slate-800 hover:bg-slate-100">
                MEN
              </button>
            </div>

            {/* Women Category */}
            <div className="relative group cursor-pointer overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80" 
                alt="Women"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute bottom-6 left-6 px-12 py-3 bg-white font-bold text-slate-800 hover:bg-slate-100">
                WOMEN
              </button>
            </div>

            {/* Accessories & Kids */}
            <div className="flex flex-col gap-4">
              <div className="relative group cursor-pointer overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&q=80" 
                  alt="Accessories"
                  className="w-full h-[242px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute bottom-6 left-6 px-6 py-3 bg-white font-bold text-slate-800 hover:bg-slate-100">
                  ACCESSORIES
                </button>
              </div>
              <div className="relative group cursor-pointer overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=800&q=80" 
                  alt="Kids"
                  className="w-full h-[242px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute bottom-6 left-6 px-6 py-3 bg-white font-bold text-slate-800 hover:bg-slate-100">
                  KIDS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col gap-12">
          <div className="text-center">
            <h4 className="text-slate-600 text-xl mb-2">Featured Products</h4>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">BESTSELLER PRODUCTS</h2>
            <p className="text-slate-600">Discover our most popular items loved by thousands of customers</p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Banner Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center bg-amber-700 rounded-lg overflow-hidden">
          <div className="w-full md:w-1/2 p-12 flex flex-col gap-6 text-white">
            <h4 className="text-base font-bold">FALL 2024</h4>
            <h2 className="text-4xl md:text-5xl font-bold">WiCommerce Specials</h2>
            <p className="text-lg">
              Discover our exclusive collection of premium clothing designed for comfort and style. Quality fabrics, modern designs, timeless fashion.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-2xl font-bold">$9.98</span>
              <button className="px-10 py-4 bg-white text-amber-800 font-bold rounded hover:bg-slate-100 transition-colors">
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1544441893-675973e31985?w=600" 
              alt="WiCommerce Specials"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col gap-12">
          <div className="text-center">
            <h4 className="text-orange-700 text-sm font-bold mb-2">Practice Advice</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">Featured Posts</h2>
            <p className="text-slate-600 max-w-md mx-auto">
              Stay updated with the latest trends, tips, and style guides from our fashion experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="flex flex-col bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=400"
                  alt="Fashion trends 2024"
                  className="w-full h-[300px] object-cover"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-red-500 text-white text-xs font-bold">
                  NEW
                </span>
              </div>
              <div className="flex flex-col gap-3 p-6">
                <div className="flex gap-3 text-xs">
                  <span className="text-orange-700">Fashion</span>
                  <span className="text-slate-600">Trending</span>
                  <span className="text-slate-600">New</span>
                </div>
                <h4 className="text-xl font-bold text-slate-800">
                  Top Fashion Trends for 2024
                </h4>
                <p className="text-slate-600 text-sm">
                  Discover the hottest fashion trends that are taking over this season. Stay ahead of the curve with our style guide.
                </p>
                <div className="flex justify-between items-center py-3">
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <span>📅</span>
                    <span>22 April 2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <span>💬</span>
                    <span>15 comments</span>
                  </div>
                </div>
                <a href="#" className="text-slate-600 hover:text-orange-700 text-sm font-bold flex items-center gap-2">
                  Learn More
                  <span>→</span>
                </a>
              </div>
            </article>

            <article className="flex flex-col bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400"
                  alt="Shopping guide"
                  className="w-full h-[300px] object-cover"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-red-500 text-white text-xs font-bold">
                  NEW
                </span>
              </div>
              <div className="flex flex-col gap-3 p-6">
                <div className="flex gap-3 text-xs">
                  <span className="text-orange-700">Shopping</span>
                  <span className="text-slate-600">Tips</span>
                  <span className="text-slate-600">Guide</span>
                </div>
                <h4 className="text-xl font-bold text-slate-800">
                  How to Shop Smart and Save Money
                </h4>
                <p className="text-slate-600 text-sm">
                  Learn expert tips on finding the best deals and making smart purchasing decisions that won't break the bank.
                </p>
                <div className="flex justify-between items-center py-3">
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <span>📅</span>
                    <span>18 April 2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <span>💬</span>
                    <span>23 comments</span>
                  </div>
                </div>
                <a href="#" className="text-slate-600 hover:text-orange-700 text-sm font-bold flex items-center gap-2">
                  Learn More
                  <span>→</span>
                </a>
              </div>
            </article>

            <article className="flex flex-col bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400"
                  alt="Sustainable fashion"
                  className="w-full h-[300px] object-cover"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-red-500 text-white text-xs font-bold">
                  NEW
                </span>
              </div>
              <div className="flex flex-col gap-3 p-6">
                <div className="flex gap-3 text-xs">
                  <span className="text-orange-700">Lifestyle</span>
                  <span className="text-slate-600">Eco</span>
                  <span className="text-slate-600">Sustainable</span>
                </div>
                <h4 className="text-xl font-bold text-slate-800">
                  The Rise of Sustainable Fashion
                </h4>
                <p className="text-slate-600 text-sm">
                  Explore how eco-friendly fashion is changing the industry. Find out why sustainable style is the future of clothing.
                </p>
                <div className="flex justify-between items-center py-3">
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <span>📅</span>
                    <span>15 April 2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <span>💬</span>
                    <span>31 comments</span>
                  </div>
                </div>
                <a href="#" className="text-slate-600 hover:text-orange-700 text-sm font-bold flex items-center gap-2">
                  Learn More
                  <span>→</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

