import Header from "../../components/Header";
import LoginForm from "../../components/LoginForm/index";
import Footer from "../../components/Footer/index"
import "./style.css"
import { useEffect } from "react";
function LoginPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header/>
      <main className="main-loginpage">
        <LoginForm/>
      </main>
      <Footer/>
    </div>
  );
}

export default LoginPage;
