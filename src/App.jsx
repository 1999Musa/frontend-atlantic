import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import AppRoutes from "./routes/AppRoutes";
import "./index.css";
import Newsletter from "./components/common/Newsletter";
import Footer from "./components/common/Footer";
import WhatsAppChat from "./components/common/WhatsAppChat";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <Newsletter />
      <WhatsAppChat />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
