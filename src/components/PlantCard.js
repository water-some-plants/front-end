import React from "react";
import { Card, Button } from "antd";


export default function PlantCard(props) {
  return (
    <Card className="plant-card">
      <header>{props.props.nickname}</header>
      <p>{props.props.h2o_frequency}</p>
      <p>{props.props.species}</p>
      <Button type="primary">Update info</Button>
      <Button type="primary">Delete plant</Button>
    </Card>
  );
}
