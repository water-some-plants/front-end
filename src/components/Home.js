import { Layout, Button, Card } from "antd";

const { Content } = Layout;

const Home = () => {
    return(
        <Content>
            <div className="home-top">
                Get savvy with watering your plants
                <Button type="primary">JOIN NOW</Button>
            </div>
            <div className="cards">
                <h1>What we offer</h1>
                <Card title="ORGANIZE">
                    <p>Keep track of all your plantsin one place, right from the dashboard</p>
                </Card>
                <Card>
                    <h3>FORGET</h3>
                    <p>We keep track of your watering history and remind you to water,so you don`t have to remember when you last watered or when to water next.</p>
                </Card>
                <Card>
                    <h3>RECORD</h3>
                    <p>Quickly record watering so you can get back to your other tasks.</p>
                </Card>
            </div>
        </Content>
    )
}

export default Home;