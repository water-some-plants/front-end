import {Input, Form, Image, Button, Row} from 'antd';
import {useState} from 'react';
import logo from "../images/logo.png";






const UserProfile = () => {

    const [profileForm, setProfileForm] = useState();
    const [initialFormValues, setInitialFormValues] = useState();//initial form values comes from API

    const onChange = (evt) => {
        const {name, value} = evt.target;
        setProfileForm({...profileForm,[name]:value});
    }
    const onSubmit = (values) => {
        //postToDB(values)//values : Object
    }
    const formItemLayout = {
        labelCol: {
          lg: {
              span:8,
            },
            xs: {
                span: 24,
            },
            sm: {
                span: 8,
            },
        },
        wrapperCol: {
            lg:{
                span:8,
            },
            xs: {
                span: 12,
            },
            sm: {
                span: 16,
            },
        },
      };
    const tailFormItemLayout = {
        wrapperCol: {
            lg: {
                span:15,
                offset:4,
            },
            xs: {
                span: 12,
                offset: 0,
            },
            sm: {
                span: 12,
                offset: 4,
            },
        },
    };

    return(
        <Row type="flex" justify="center" align="middle">
            
            <Form
                    {...formItemLayout}
                    className="forms"
                    name="profile"
                    onFinish={onSubmit}
            >
                <Image src={logo} width="200" />
                <Form.Item
                    name="username"
                    label="Username"
                    rules={[
                        {
                            required: true,
                            message: 'please input your username!'
                        }
                    ]}
                >
                    <Input name="username" onChange={onChange} />
                </Form.Item>
                <Form.Item 
                        name="phone" 
                        label="Phone Number" 
                        rules={[
                            {
                                required: true,
                                message: 'please input your phone number!'
                            }
                        ]}
                    >
                        <Input name="phoneNumber" onChange={onChange} />
                </Form.Item>
                <Form.Item
                    {...tailFormItemLayout}
                >
                    <Button type="primary" htmlType="submit" >Save Changes</Button>
                </Form.Item>
            </Form>
        </Row>
    );
}

export default UserProfile;