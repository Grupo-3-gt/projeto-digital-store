import Header from "../../components/Header";
import Footer from "../../components/Footer/index";
import "./style.css";
import RegisterForm from "../../components/RegisterForm";

function RegisterPage() {
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
