import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";

function SeeAllUser() {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState([]); // Assuming an array of users
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [newRole, setNewRole] = useState('');

  useEffect(() => {
    if (user?.email) {
      fetchUsers();
    }
  }, [user?.email]);

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/users');
      setUserData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRoleChange = async (email) => {
    const updatedUsers = userData.map(user => {
      if (user.email === email) {
        return { ...user, role: newRole };
      }
      return user;
    });
    setUserData(updatedUsers);

    try {
      // Make the request to update the role on the backend
      const response = await axios.put(`http://localhost:5000/users/${email}`, { role: newRole });
      console.log("Response after role update:", response);

      // Re-fetch users to ensure data is consistent
      fetchUsers();
      setEditingUser(null); // Close the modal after update
    } catch (err) {
      console.error("Error changing role:", err.message);
      // Rollback the optimistic update if the update fails
      fetchUsers();
    }
  };

  const handleDelete = async (email) => {
    console.log("Deleting user:", email);
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`http://localhost:5000/users/${email}`);
        fetchUsers();  
        setUserData(userData);
      } catch (err) {
        console.error("Error deleting user:", err.message);
      }
    }
  };

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (error) return <div className="text-center mt-5 text-red-500">Error: {error}</div>;

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">All Users</h1>
      {userData && userData.length > 0 ? (
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Role</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{user.name || 'N/A'}</td>
                <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                <td className="border border-gray-300 px-4 py-2">{user.role}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {/* Edit Button */}
                  <button
                    onClick={() => {
                      setEditingUser(user.email);
                      setNewRole(user.role);
                    }}
                    className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                  >
                    Edit Role
                  </button>
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(user.email)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center text-gray-500">No users found.</div>
      )}

      {/* Modal to Edit Role */}
      {editingUser && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-md shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">Edit User Role</h2>
            <select
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
              className="border border-gray-300 px-3 py-2 rounded mb-4 w-full"
            >
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
              <option value="admin">Admin</option>
            </select>
            <div className="flex justify-end">
              <button
                onClick={() => setEditingUser(null)}
                className="bg-gray-300 text-black px-3 py-1 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={() => handleRoleChange(editingUser)}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SeeAllUser;
