import {Avatar, Layout} from 'antd';
const {Content} = Layout;


return(
    <Content>
        <Avatar size={128} shape="square" src={/*image url*/}/>
    </Content>
);


import React from 'react'
import axiosWithAuth from '../axios/axios.utils'
import AddPlant from './AddPlant'
import PlantSection from './PlantSection'

export default function UserPage() {
    return (
        <div>
            <AddPlant></AddPlant>
            <PlantSection></PlantSection>
        </div>
    )
}
