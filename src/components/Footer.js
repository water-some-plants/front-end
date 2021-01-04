import { Menu, Layout } from "antd";

const { Footer:AntFooter} = Layout;

const Footer = () => {
    return(
        <AntFooter className="footer">
            Copyright &copy; Water my plants 2021
        </AntFooter>
    );
}

export default Footer;