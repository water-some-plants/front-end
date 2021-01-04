import { Layout} from "antd";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Route } from "react-router-dom";
import SignUp from "./components/Signup";

function App() {
  
  return (
    <Layout className="height-100">
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Footer />
    </Layout>
  );
}

export default App;
