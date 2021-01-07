import {Avatar, Layout} from 'antd';
import { UserOutlined } from '@ant-design/icons';
const {Content} = Layout;

const ppl = [
    {
        name:"Senih Aydin",
        role:"Frontend Developer",
        avatar:""//url will come here
    },
    {
        name:"Sebastian Espeset",
        role:"Frontend Developer",
        avatar:""//url will come here
    },
    {
        name:"Carlos Colindres",
        role:"Frontend Developer",
        avatar:""//url will come here
    },
    {
        name:"Tyler Maynard",
        role:"Frontend Developer",
        avatar:""//url will come here
    },
]

const AboutUs = () => {
    return(
        <Content>
            <div className="contact-top">
                Who we are
            </div>
            <div className="contact-avatars">
                <h1>Meet the developers.</h1>
                {ppl.map(person => {
                    return(
                        <div className="individual-avatar">
                            <h2>{person.name}</h2>
                            <Avatar size={256} icon={<UserOutlined />}/>
                            <h2>{person.role}</h2>
                        </div>
                    )
                })}
            </div>
        </Content>
    );
}

export default AboutUs;