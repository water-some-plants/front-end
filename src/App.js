import { Layout} from "antd";
import Header from "./components/Header"
import Home from "./components/Home"
import addPlant from './actions'


function App() {
  return (
    <Layout>
      <Header />
      <Home />
    </Layout>
  );
}

export default App;
