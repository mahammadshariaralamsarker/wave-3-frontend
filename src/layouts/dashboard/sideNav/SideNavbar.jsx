import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import axios from "axios";
import BuyerNav from "../buyer/buyerNav/BuyerNav";
import SellerNav from "../seller/sellerNav/SellerNav";
import AdminNav from "../admin/adminNav/AdminNav";
import { useNavigate } from "react-router-dom";

function SideNavbar() {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const handleLogout = () => {
    logOut();
    navigate("/");
  };
  console.log("User:", user); // Debug: Check user object

  useEffect(() => {
    console.log("User in useEffect:", user); // Debug: Check user object here
    if (user?.email) {
      fetchDataByEmail();
    }
  }, [user?.email]);

  const fetchDataByEmail = async () => {
    try {
      const { data } = await axios.get(
        `https://wave55.vercel.app/users/${user.email}`
      );
      console.log("Fetched Data:", data); // Debug: Check the fetched data
      setUserData(data);
    } catch (err) {
      console.error("Error fetching data:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-col h-screen justify-between">
      <div>
        {userData?.role === "buyer" && <BuyerNav />}
        {userData?.role === "seller" && <SellerNav />}
        {userData?.role === "admin" && <AdminNav />}
      </div>
      <div>
        <button onClick={() => handleLogout()} className="w-full btn">
          Log Out
        </button>
      </div>
    </div>
  );
}

export default SideNavbar;
