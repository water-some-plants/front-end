import { Layout, Menu, Image, Button } from "antd";
import logo from "../images/logo.png";
import { Link, useHistory } from "react-router-dom";



const { Header: AntHeader } = Layout;

const Header = () => {
    const { push }=useHistory()
  
    return (
    <AntHeader className="header">
      <Link to="/">
        <Image preview={false} width={70} src={logo} alt="logo" />
      </Link>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">
          {localStorage.getItem("id") ? (
            <div>
              <Button type="primary">
                <Link to="/UserPage">
                  <span>User dashboard</span>
                </Link>
              </Button>

              <Button type="primary" onClick={()=> {localStorage.clear(); push('/')}}>
                  
                <span>Sign Out</span>
              </Button>
            </div>
          ) : (
            <Link to="/signin">
              <span>SIGN IN</span>
            </Link>
          )}
        </Menu.Item>
      </Menu>
    </AntHeader>
  );
};

export default Header;
