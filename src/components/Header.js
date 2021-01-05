import {Layout, Menu, Image} from "antd";
import logo from "../images/logo.png";
import {Link} from "react-router-dom";

const {Header: AntHeader } = Layout;

const Header = () => {
    return (
        <AntHeader className="header">
            <Link to="/">
                <Image preview={false} width={70} src={logo} alt="logo" />
            </Link>
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key="1" >
                    <Link to="/signin">
                        <span>SIGN IN</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </AntHeader>
    );
}

export default Header;