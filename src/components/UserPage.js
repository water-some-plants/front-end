//will display plants and their schedules
//will display the addPlant component

import React from 'react'
import axiosWithAuth from '../axios/axios.utils'
import AddPlant from './AddPlant'
import PlantSection from './PlantSection'

export default function UserPage() {
  //build out reducer/action on load will pull plant info and store to state(reduxstore) and display
    return (
        <div>
            <AddPlant></AddPlant>
            <PlantSection></PlantSection>
        </div>
    )
}
