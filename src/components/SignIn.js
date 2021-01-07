import { Form, Input, Button, Row } from "antd";
import {useState} from "react";
import {Link} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom'
import  axiosWithAuth  from "../axios/axios.utils";
import PrivateRoute from "./PrivateRoute";
import { Footer } from "antd/lib/layout/layout";


const initialFormValues = {
  username: "",
  password: "",
};

const SignIn = () => {
  const [signInForm, setSigninForm] = useState(initialFormValues);
  const history=useHistory();

  const onChange = (evt) => {
    const { name, value } = evt.target;
    setSigninForm({ ...signInForm, [name]: value });
  };
  const onSubmit = (values) => {
    localStorage.clear()
    axios.post(
      "https://water-some-plants1.herokuapp.com/api/auth/login",
      values
        )
        .then(res=>{

            localStorage.setItem('token', res.data.token)  
            localStorage.setItem('id',JSON.stringify(res.data.id))
        })
        .then((res)=>{
          history.push('/UserPage')
        })
        .catch(err=>{
            alert("user does not exist. Try registering!")
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
              message: "please input your username!",
            },
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
              message: "please input your password!",
            },
          ]}
          hasFeedback
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
                <Button type="primary" >
                    <Link to="/signup">
                        <span>SignUp</span>
                    </Link>
                </Button>
            </Form.Item>
        </Form>
        </Row>
    );
}
          <Input.Password name="password" onChange={onChange} />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            SignIn
          </Button>
        </Form.Item>
      </Form>
    </Row>
  );
};

export default SignIn;
