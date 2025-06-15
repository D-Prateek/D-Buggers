import React, { useState } from 'react';
import { Filter, Search, Star, ShoppingCart, Heart, Eye, Grid, List } from 'lucide-react';

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 15000]);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { id: 'all', name: 'All Products', count: 156 },
    { id: 'maternity', name: 'Maternity Nutrition', count: 45 },
    { id: 'baby-food', name: 'Baby Food', count: 32 },
    { id: 'lactation', name: 'Lactation Support', count: 28 },
    { id: 'postpartum', name: 'Postpartum Care', count: 35 },
    { id: 'organic', name: 'Organic Products', count: 16 }
  ];

  const products = [
    {
      id: 1,
      name: "Premium Prenatal Vitamins",
      brand: "NutriMom",
      price: 3499,
      originalPrice: 4599,
      rating: 4.8,
      reviews: 2341,
      image: "https://images.pexels.com/photos/3683052/pexels-photo-3683052.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      category: "maternity",
      tags: ["Folic Acid", "Iron", "DHA"],
      inStock: true,
      bestseller: true
    },
    {
      id: 2,
      name: "Organic Baby Puree Variety Pack",
      brand: "Pure Baby",
      price: 1899,
      rating: 4.7,
      reviews: 1876,
      image: "https://images.pexels.com/photos/4099102/pexels-photo-4099102.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      category: "baby-food",
      tags: ["6+ months", "No preservatives", "Organic"],
      inStock: true,
      bestseller: false
    },
    {
      id: 3,
      name: "Lactation Support Tea Blend",
      brand: "Mama's Choice",
      price: 1449,
      rating: 4.9,
      reviews: 3456,
      image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      category: "lactation",
      tags: ["Herbal", "Milk supply", "Caffeine-free"],
      inStock: true,
      bestseller: true
    },
    {
      id: 4,
      name: "Postpartum Recovery Supplement",
      brand: "Recovery Plus",
      price: 3049,
      rating: 4.6,
      reviews: 892,
      image: "https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      category: "postpartum",
      tags: ["Iron", "Vitamin D", "Energy boost"],
      inStock: false,
      bestseller: false
    },
    {
      id: 5,
      name: "Organic Pregnancy Protein Powder",
      brand: "Prenatal Pro",
      price: 4049,
      rating: 4.5,
      reviews: 1234,
      image: "https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      category: "maternity",
      tags: ["Plant-based", "Vanilla flavor", "25g protein"],
      inStock: true,
      bestseller: false
    },
    {
      id: 6,
      name: "Baby's First Foods Starter Kit",
      brand: "Little Bites",
      price: 2519,
      rating: 4.8,
      reviews: 2156,
      image: "https://images.pexels.com/photos/4099096/pexels-photo-4099096.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      category: "baby-food",
      tags: ["4-6 months", "Allergen-free", "Single ingredients"],
      inStock: true,
      bestseller: true
    },
    {
      id: 7,
      name: "Calcium & Iron Tablets for Pregnancy",
      brand: "HealthMom",
      price: 1299,
      rating: 4.6,
      reviews: 1543,
      image: "https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      category: "maternity",
      tags: ["Calcium", "Iron", "60 tablets"],
      inStock: true,
      bestseller: false
    },
    {
      id: 8,
      name: "Organic Ghee for Baby",
      brand: "Pure Organic",
      price: 899,
      rating: 4.7,
      reviews: 987,
      image: "https://images.pexels.com/photos/4099093/pexels-photo-4099093.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      category: "baby-food",
      tags: ["Pure ghee", "6+ months", "200ml"],
      inStock: true,
      bestseller: false
    },
    {
      id: 9,
      name: "Breastfeeding Support Cookies",
      brand: "Lactation Boost",
      price: 649,
      rating: 4.4,
      reviews: 756,
      image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      category: "lactation",
      tags: ["Oats", "Fenugreek", "Natural"],
      inStock: true,
      bestseller: false
    }
  ];

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'popular':
      default:
        return b.reviews - a.reviews;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Marketplace
          </h1>
          <p className="text-xl text-gray-600">
            Curated products for your pregnancy and postpartum journey
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filters
              </h2>

              {/* Search */}
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
                        selectedCategory === category.id
                          ? 'bg-pink-100 text-pink-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-sm text-gray-500">({category.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Price Range (NPR)</h3>
                <div className="px-3">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>NPR {priceRange[0]}</span>
                    <span>NPR {priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="15000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-pink-500"
                  />
                </div>
              </div>

              {/* Brand Filter */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Brands</h3>
                <div className="space-y-2">
                  {['NutriMom', 'Pure Baby', "Mama's Choice", 'Recovery Plus', 'Prenatal Pro'].map((brand) => (
                    <label key={brand} className="flex items-center">
                      <input type="checkbox" className="mr-2 accent-pink-500" />
                      <span className="text-gray-600">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Toolbar */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-gray-600">
                    Showing {sortedProducts.length} of {products.length} products
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-pink-100 text-pink-600' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                      <Grid className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-pink-100 text-pink-600' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                      <List className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {sortedProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all group">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-2xl"
                    />
                    {product.bestseller && (
                      <div className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Bestseller
                      </div>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-t-2xl">
                        <span className="text-white font-semibold text-lg">Out of Stock</span>
                      </div>
                    )}
                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 bg-white rounded-full shadow-lg hover:bg-pink-50 transition-colors">
                        <Heart className="h-4 w-4 text-gray-600 hover:text-pink-600" />
                      </button>
                      <button className="p-2 bg-white rounded-full shadow-lg hover:bg-pink-50 transition-colors">
                        <Eye className="h-4 w-4 text-gray-600 hover:text-pink-600" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
                        <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-900">{product.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-gray-900">NPR {product.price}</span>
                        {product.originalPrice && (
                          <span className="text-lg text-gray-500 line-through">NPR {product.originalPrice}</span>
                        )}
                      </div>
                      <button 
                        disabled={!product.inStock}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                          product.inStock
                            ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 transform hover:scale-105'
                            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        <ShoppingCart className="h-4 w-4" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}