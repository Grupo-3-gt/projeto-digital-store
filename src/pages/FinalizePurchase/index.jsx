import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import FPurchase from "../../components/FinalizePurchase/index";


function FinalizePurchase() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <main>
        <FPurchase/>
      </main>
      <Footer />
    </div>
  );
}

export default FinalizePurchase;
