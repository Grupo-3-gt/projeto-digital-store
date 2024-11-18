import { createContext, useEffect, useState } from "react";
import { api } from "../Api/Api";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("")

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      getUserById(decodedToken.id);
    }
  }, [token]);

  async function getUserById(id) {
    try {
      const res = await api.get(`/user/${id}`);
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function login(data) {
    try {
      const res = await api.post("/login", data);
      localStorage.setItem("user_token", res.data.token);
      setToken(res.data.token)
      navigate("/");
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  return (
    <UserContext.Provider
      value={{
        login,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
