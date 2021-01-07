import React from "react";
import { Card } from "antd";


export default function PlantCard(props) {
  return (
    <Card className="plant-card">
      <header>{props.props.nickname}</header>
      <p>{props.props.h2o_frequency}</p>
      <p>{props.props.species}</p>
      <button>Update info</button>
      <button>Delete plant</button>
    </Card>
  );
}
