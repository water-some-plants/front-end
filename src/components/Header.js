import {Layout, Menu, Image} from "antd";
import logo from "../images/logo.png";

const {Header: AntHeader } = Layout;

const Header = () => {
    return (
        <AntHeader className="header">
            <Image preview={false} width={70} src={logo} alt="logo" />
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key="1">SIGN IN</Menu.Item>
            </Menu>
        </AntHeader>
    );
}

export default Header;