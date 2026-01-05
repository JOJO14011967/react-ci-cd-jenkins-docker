
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ Component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("myToken");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return <Component />;
};

export default ProtectedRoute;
