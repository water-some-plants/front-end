import {Avatar, Layout} from 'antd';
import React from 'react'
import axiosWithAuth from '../axios/axios.utils'
import AddPlant from './AddPlant'
import PlantSection from './PlantSection'
const {Content} = Layout;

export default function UserPage() {
    return (
        <div>
            <AddPlant></AddPlant>
            <PlantSection></PlantSection>
        </div>
    )
}
