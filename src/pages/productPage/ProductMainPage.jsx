import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";

function ProductMainPage() {
  const { user } = useContext(AuthContext);
  const [productdata, setProductData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  useEffect(() => {
    if (user?.email) {
      fetchProducts();
    }
  }, [user?.email]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("https://wave55.vercel.app/products");
      setProductData(data);
      setFilteredData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    filterAndSortData({ term });
  };

  const handleSort = (order) => {
    setSortOrder(order);
    filterAndSortData({ order });
  };

  const handleFilterCategory = (category) => {
    setSelectedCategory(category);
    filterAndSortData({ category });
  };

  const handleFilterBrand = (brand) => {
    setSelectedBrand(brand);
    filterAndSortData({ brand });
  };

  const filterAndSortData = ({
    term = searchTerm,
    order = sortOrder,
    category = selectedCategory,
    brand = selectedBrand,
  }) => {
    let data = productdata;
    if (term) {
      data = data.filter((product) =>
        product.name.toLowerCase().includes(term)
      );
    }
    if (category) {
      data = data.filter((product) => product.category === category);
    }
    if (brand) {
      data = data.filter((product) => product.brand === brand);
    }
    if (order === "asc") {
      data = [...data].sort((a, b) => a.price - b.price);
    } else if (order === "desc") {
      data = [...data].sort((a, b) => b.price - a.price);
    }

    setFilteredData(data);
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Our Products
      </h1>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-4 justify-center">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-64 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        />

        <select
          value={sortOrder}
          onChange={(e) => handleSort(e.target.value)}
          className="p-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="">Sort by Price</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>

        <select
          value={selectedCategory}
          onChange={(e) => handleFilterCategory(e.target.value)}
          className="p-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="">Filter by Category</option>
          {Array.from(new Set(productdata.map((p) => p.category))).map(
            (category, idx) => (
              <option key={idx} value={category}>
                {category}
              </option>
            )
          )}
        </select>

        <select
          value={selectedBrand}
          onChange={(e) => handleFilterBrand(e.target.value)}
          className="p-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="">Filter by Brand</option>
          {Array.from(new Set(productdata.map((p) => p.brand))).map(
            (brand, idx) => (
              <option key={idx} value={brand}>
                {brand}
              </option>
            )
          )}
        </select>
      </div>

      {/* Products */}
      {loading ? (
        <p className="text-center text-gray-500">Loading products...</p>
      ) : error ? (
        <p className="text-red-500 text-center">Error: {error}</p>
      ) : filteredData.length === 0 ? (
        <p className="text-center text-gray-500">
          No products match your criteria.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((product) => (
            <div
              key={product._id}
              className="border p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={product.image || "https://via.placeholder.com/150"}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-gray-600 mt-2">
                Price:{" "}
                <span className="text-blue-500 font-medium">
                  ${product.price}
                </span>
              </p>
              <p className="text-gray-500">Category: {product.category}</p>
              <p className="text-gray-500">Brand: {product.brand}</p>
              <p className="text-gray-500 line-clamp-2">
                Description: {product.description}
              </p>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                Add to wishlist
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductMainPage;
