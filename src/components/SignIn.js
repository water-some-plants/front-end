import { Form, Input, Button, Row } from "antd";
import {useState} from "react";

const initialFormValues = {
    username:"",
    password:""
}

const SignIn = () => {
    const [signInForm, setSigninForm] = useState(initialFormValues);

    const onChange = (evt) => {
        const {name, value} = evt.target;
        setSigninForm({...signInForm,[name]:value});
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

    return (
        <Row type="flex" justify="center" align="middle">
        <Form
            {...formItemLayout}
            className="forms"
            name="register"
            onFinish={onSubmit}
        >
            <h1>Welcome Back</h1>
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
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'please input your password!'
                    }
                ]}
                hasFeedback
            >
                <Input.Password name="password" onChange={onChange}/>
            </Form.Item>
            <Form.Item
                {...tailFormItemLayout}
            >
                <Button type="primary" htmlType="submit" >SignIn</Button>
            </Form.Item>
        </Form>
        </Row>
    );
}

export default SignIn;