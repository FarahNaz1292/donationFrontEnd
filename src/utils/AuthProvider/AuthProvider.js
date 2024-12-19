import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const userAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserFromToken = () => {
      try {
        const token = Cookies.get("accessToken");
        // console.log(token);

        if (token) {
          const decoded = jwtDecode(token);

          setUser(decoded);
          setLoading(false);
        } else {
          setUser(null);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    };

    getUserFromToken();
  }, []);

  return { user, setUser, loading };
};

export default userAuth;
