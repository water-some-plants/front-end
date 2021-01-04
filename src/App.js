import { Layout} from "antd";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Route } from "react-router-dom";
import SignUp from "./components/Signup";
import { useState } from 'react';

const initialFormValues = {
  username: "",
  phoneNumber: "",
  password: "",
}

function App() {
  const [signupForm , setSignupForm] = useState(initialFormValues);

  const onChange = (name, value) => {
    setSignupForm({...signupForm,[name]:value});
  }
  const onSubmit = () => {
    //postToDB (signupForm)
  }
  return (
    <Layout className="height-100">
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/signup">
        <SignUp 
          change={onChange} 
          submit={onSubmit}
        />
      </Route>
      <Footer />
    </Layout>
  );
}

export default App;
