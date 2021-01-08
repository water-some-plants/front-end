import {useState} from "react";
import { Card, Button } from "antd";
import {deletePlant, updatePlant} from '../redux-store/actions'
import { useDispatch} from 'react-redux'

const initialFormData={
  
    h2o_frequency: "",
    nickname: "",
    picture: "",
    species: "",
    user_id: "",
}

export default function PlantCard(props) {
  const dispatch=useDispatch();
  const [formData, setFormData] = useState(initialFormData);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onUpdateSubmit=(e)=>{
    e.preventDefault();
    const updatedPlant={
      h2o_frequency: formData.h2o_frequency,
      nickname: formData.nickname,
      picture: "",
      species: formData.species,
      user_id:localStorage.getItem('id'),
    }
    dispatch(updatePlant(props.props.id,updatedPlant))
  }

  return (
    <Card className="plant-card">
      <header>{props.props.nickname}</header>
      <p>{props.props.h2o_frequency}</p>
      <p>{props.props.species}</p>
      <Button type="primary" >Update info</Button>
      <Button type="primary" onClick={()=>dispatch(deletePlant(props.props.id))}>Delete plant</Button>
      <form onSubmit={onUpdateSubmit}>
      <input
            name="nickname"
            type="text"
            placeholder="Give your plant a nickname"
            value={formData.nickname}
            onChange={onChange}
          />
          <input
            name="h2o_frequency"
            type="text"
            placeholder="water per week"
            value={formData.h2o_frequency}
            onChange={onChange}
          />
          <input
            name="species"
            type="text"
            placeholder="species"
            value={formData.species}
            onChange={onChange}
          />
      <button> Update the plant info</button>
      </form>
    </Card>
  );
}
