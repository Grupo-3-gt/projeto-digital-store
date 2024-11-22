import Header from "../../components/Header";
import Footer from "../../components/Footer/index";
import "./style.css";
import RegisterForm from "../../components/RegisterForm";
import { useEffect } from "react";

function RegisterPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <Header />
      <main>
        <RegisterForm />
      </main>
      <Footer />
    </div>
  );
}

export default RegisterPage;
