import { Form,Input, Button } from "antd";
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

    return (
        <Form 
            name="register"
            onFinish={onSubmit}
        >
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
            <Form.Item>
                <Button type="primary" htmlType="submit" >SignUp</Button>
            </Form.Item>
        </Form>
    );
}

export default SignIn;