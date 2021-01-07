import { Layout, Button } from "antd";
import {Link} from "react-router-dom";

const { Footer:AntFooter} = Layout;

const Footer = () => {
    return(
        <AntFooter className="footer">
            Copyright &copy; Water my plants 2021
            <Button type="primary" ghost>
                <Link to="/contactus">
                    <span>Contact Us</span>
                </Link>
            </Button>
            <Button type="primary" ghost>
                <Link to="/aboutus">
                    <span>About Us</span>
                </Link>
            </Button>
        </AntFooter>
    );
}

export default Footer;