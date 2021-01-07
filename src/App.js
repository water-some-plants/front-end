import { Layout} from "antd";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Route } from "react-router-dom";
import SignUp from "./components/Signup";
import SignIn from "./components/SignIn";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import UserProfile from "./components/UserProfile";
import PrivateRoute from './components/PrivateRoute'
import UserPage from "./components/UserPage";

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
      <Route exact path="/userprofile">
        <UserProfile />
      </Route>
      <PrivateRoute
        exact path='/UserPage'
        componentType={'UserPage'}
        component={UserPage}
        ></PrivateRoute>
      <Footer />
    </Layout>
  );
}

export default App;
