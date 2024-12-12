import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const userAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserFromToken = () => {
      try {
        const token = Cookies.get("accessToken");
        console.log(token);

        if (token) {
          const decoded = jwtDecode(token);
          console.log("this is the decoded", decoded);

          setUser(decoded);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    };

    getUserFromToken();
  }, []);

  return { user, setUser };
};

export default userAuth;
