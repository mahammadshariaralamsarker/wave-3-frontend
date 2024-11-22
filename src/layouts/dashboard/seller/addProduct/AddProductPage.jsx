import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../../provider/AuthProvider";

const AddProductForm = () => {
  const { user } = useContext(AuthContext);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    brand: "",
    description: "",
    email: user.email,
  });

  const [loading, setLoading] = useState(false); // For button loading state
  const [error, setError] = useState(null); // For error handling

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://wave55.vercel.app/product",
        product,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Submitted Product:", response.data);
      alert("Product submitted successfully!");

      // Reset form
      setProduct({
        name: "",
        price: "",
        category: "",
        brand: "",
        description: "",
      });
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Failed to submit product. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <h3>Add Product</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Enter product name"
            style={{ width: "100%" }}
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Enter product price"
            style={{ width: "100%" }}
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            placeholder="Enter product category"
            style={{ width: "100%" }}
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Brand:</label>
          <input
            type="text"
            name="brand"
            value={product.brand}
            onChange={handleChange}
            placeholder="Enter product brand"
            style={{ width: "100%" }}
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Description:</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Enter product description"
            style={{ width: "100%" }}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          style={{ marginRight: "10px" }}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
        <button
          type="reset"
          onClick={() =>
            setProduct({
              name: "",
              price: "",
              category: "",
              brand: "",
              description: "",
            })
          }
          disabled={loading}
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
