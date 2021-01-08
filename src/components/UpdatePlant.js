import { Form, Input, Button, Row, Select } from "antd";
import React from "react";
import { addPlant } from '../redux-store/actions'
import { useState } from "react";
import { useHistory } from 'react-router-dom'
import { connect, useDispatch } from "react-redux";
import axiosWithAuth from "../axios/axios.utils.js";

const { Option } = Select;



const UpdatePlant = (props) => {
  const [formData, setFormData] = useState({h2o_frequency:props.props.h2o_frequency});

  const dispatch=useDispatch();
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newPlant = {
      h2o_frequency: formData.h2o_frequency,
      nickname: formData.nickname,
      picture: "",
      species: formData.species,
      user_id:localStorage.getItem('id'),
    };
    
    dispatch(addPlant(newPlant));
    setFormData({
      h2o_frequency: "",
      nickname: "",
      picture: "",
      species: "",
      user_id: "",
    });
 
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
      <Form {...formItemLayout} className="forms" name="register" >
        <h1>Add a plant to your collection!</h1>
        <Form.Item name="h2o_frequency" label="h2o_frequency">
          <input
            name="h2o_frequency"
            type="text"
            placeholder="waterings per week?"
            value={formData.h2o_frequency}
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item name="nickname" label="nickname">
          <input
            name="nickname"
            type="text"
            placeholder="Give your plant a nickname"
            onChange={onChange}
          />
        </Form.Item>

        <Form.Item name="species" label="species">
          <input
            name="species"
            type="text"
            placeholder="Plant species"
            onChange={onChange}
          />
        </Form.Item>
      </Form>
      <button onClick={onSubmit}>Add your plant</button>
    </Row>
  );
};
export default UpdatePlant;
