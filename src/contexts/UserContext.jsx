import { createContext, useEffect, useState } from "react";
import { api, apiCep } from "../Api/Api";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [address, setAdress] = useState({});

  async function getCep(cep) {
    try {
      const res = await apiCep.get(`/ws/${cep}/json/`);
      if (res.data.erro) {
        setAdress({});
      } else {
        setAdress(res.data);
      }
    } catch (error) {
      setAdress({});
      console.log(error);
    }
  }

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
      setLoading(true);
      const res = await api.post("/login", data);
      localStorage.setItem("user_token", res.data.token);

      const decodedToken = jwtDecode(res.data.token);
      const userId = decodedToken.id;

      await getUserById(userId);

      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message, {
        autoClose: 3000, 
        theme: "dark"
      });
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    localStorage.removeItem("user_token");
    setUser(null);
  }

  useEffect(() => {
    const token = localStorage.getItem("user_token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.id;

        api.get(`/user/${userId}`).then((response) => {
          setUser(response.data);
        });
      } catch (error) {
        console.error("Erro ao validar token:", error);
        logout();
      }
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        login,
        user,
        getCep,
        address,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
