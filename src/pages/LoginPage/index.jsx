import Header from "../../components/Header";
import LoginForm from "../../components/LoginForm/index";
import Footer from "../../components/Footer/index"
import "./style.css"
function LoginPage() {
  return (
    <div>
      <Header/>
      <main className="main-loginpage">
        <LoginForm/>
      </main>
      {/* <Footer/> */}
    </div>
  );
}

export default LoginPage;
