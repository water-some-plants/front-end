import { Layout} from "antd";
import Header from "./components/Header"
import Home from "./components/Home"
import addPlant from './actions'


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
      <Route exact path="/signin">
        <SignIn />
      </Route>
      <Route exact path="/contactus">
        <ContactUs />
      </Route>
      <Route exact path="/aboutus">
        <AboutUs />
      </Route>
      <Footer />
    </Layout>
  );
}

export default App;
