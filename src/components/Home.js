import { Layout, Button, Card } from "antd";
import {Link} from "react-router-dom";
const { Content } = Layout;

const Home = () => {
    return(
        <Content>
            <div className="home-top">
                Get savvy with watering your plants
                <Button type="primary">
                    <Link to="/signup">
                        <span>JOIN NOW</span>
                    </Link>
                </Button>
            </div>
            <div className="cards-div">
                <h1>What we offer</h1>
                <Card title="ORGANIZE">
                    <p>Keep track of all your plantsin one place, right from the dashboard</p>
                </Card>
                <Card title="FORGET">
                    <p>We keep track of your watering history and remind you to water,so you don`t have to remember when you last watered or when to water next.</p>
                </Card>
                <Card title="RECORD">
                    <p>Quickly record watering so you can get back to your other tasks.</p>
                </Card>
            </div>
            <div className="mission-div">
                <h1>Our Mission</h1>
                <p>In a time when there`s an app for organizing just about every aspect of our lives, this isn`t easily available for plant care.</p>
            <Button type="primary">
                <Link to="/signin">
                    <span>SIGN IN</span>
                </Link>
            </Button>
            <Button type="primary">
                <Link to="/signup">
                    <span>SIGN UP</span>
                </Link>
            </Button>
            </div>
        </Content>
    )
}

export default Home;