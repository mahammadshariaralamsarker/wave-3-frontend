import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../../../provider/AuthProvider";

function ViewProductPage() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    if (!loading && user?.email) {
      fetchProduct();
    }
  }, [loading, user?.email]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `https://wave55.vercel.app/products/${user.email}`
      );
      setProducts(response.data);
      console.log(response.data);
    } catch (err) {
      console.error("Error fetching product:", err);
      setError(err.message);
    }
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`https://wave55.vercel.app/products/${productId}`);
      setProducts(products.filter((product) => product._id !== productId));
      console.log("Product deleted successfully");
    } catch (err) {
      console.error("Error deleting product:", err);
      setError(err.message);
    }
  };

  if (loading) {
    return <div className="text-center mt-5">Loading user data...</div>;
  }

  if (error) {
    return <div className="text-center mt-5 text-red-500">Error: {error}</div>;
  }

  if (!user?.email) {
    return <div className="text-center mt-5">No user logged in.</div>;
  }

  return (
    <div>
      <h1>View Product Page</h1>
      {products?.length > 0 ? (
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Price</th>
              <th className="px-4 py-2 border">Description</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product._id}>
                <td className="px-4 py-2 border">{product.name}</td>
                <td className="px-4 py-2 border">{product.email}</td>
                <td className="px-4 py-2 border">{product.price}</td>
                <td className="px-4 py-2 border">{product.description}</td>
                <td className="px-4 py-2 border">
                  <button
                    className="bg-red-500 text-white py-1 px-3 rounded"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading product data...</p>
      )}
    </div>
  );
}

export default ViewProductPage;
