import {Form ,Input, Button} from "antd";

const Signup = (props) => {
    const {change, submit} = props;

    const onChange = (evt) => {
        const {name, value} = evt.target;
        change(name, value);
    }
    const onSubmit = (values) => {
        console.log("Success:", values);
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
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                rules={[
                    {
                        required: true,
                        message: 'please confirm your password!'
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                          }
            
                          return Promise.reject('The two passwords that you entered do not match!');
                        },
                      })
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

export default Signup;