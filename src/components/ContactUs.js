import { Form, Input, Button, Row } from "antd";
import {useState} from "react";

const initialFormValues = {
    name:"",
    email:"",
    message:""
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

const ContactUs = () => {
    const [contactusForm , setContactUsForm] = useState(initialFormValues);

    const onChange = (evt) => {
        const {name, value} = evt.target;
        setContactUsForm({...contactusForm,[name]:value});
    }
    const onSubmit = (values) => {
        //postToDB(values)//values : Object
    }

    return(
        <Row type="flex" justify="center" align="middle">
            <Form
                {...formItemLayout}
                className="forms"
                name="contactus"
                onFinish={onSubmit}
            >
                <h1>Get in touch</h1>
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                            message: 'please input your name!'
                        }
                    ]}
                >
                    <Input name="name" onChange={onChange}/>
                </Form.Item>
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'please input your username!'
                        }
                    ]}
                >
                    <Input name="email" onChange={onChange}/>
                </Form.Item>
                <Form.Item
                    name="message"
                    label="Your Message"
                    rules={[
                        {
                            required: true,
                            message: 'please input your message!'
                        }
                    ]}
                >
                    <Input.TextArea name="message" onChange={onChange}/>
                </Form.Item>
                <Form.Item
                {...tailFormItemLayout}
            >
                <Button type="primary" htmlType="submit" >Contact</Button>
            </Form.Item>
            </Form>
        </Row>
    );
}

export default ContactUs;
