import { Form, Input, Button, Row } from "antd";
import axios from "axios";
import { useState } from "react";
import { useHistory } from 'react-router-dom'

const initialFormValues = {
  username: "",
  phoneNumber: "",
  password: "",
};

const Signup = () => {
  const [signupForm, setSignupForm] = useState(initialFormValues);
  const history=useHistory();  
  const onChange = (evt) => {
    const { name, value } = evt.target;
    setSignupForm({ ...signupForm, [name]: value });
  };
  const onSubmit = (values) => {
  const valuesObject={
        username:values.username,
        password:values.password,
        phoneNumber:values.phone
        }
        console.log(valuesObject);
    axios
      .post(
        "https://water-some-plants1.herokuapp.com/api/auth/register",
        valuesObject
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        alert(err);
      })
      .then((res)=>{
          history.push('/UserPage')
      })
  };
  const formItemLayout = {
    labelCol: {
      lg: {
        span: 8,
      },
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      lg: {
        span: 8,
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
        span: 15,
        offset: 4,
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
    <Row type="flex" justify="center" align="center" className="row">
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
              message: "please input your username!",
            },
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
              message: "please input your phone number!",
            },
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
              message: "please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password name="password" onChange={onChange} />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  "The two passwords that you entered do not match!"
                );
              },
            }),
          ]}
          hasFeedback
        >
          <Input.Password name="password" onChange={onChange} />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            SignUp
          </Button>
        </Form.Item>
      </Form>
    </Row>
  );
};

export default Signup;
