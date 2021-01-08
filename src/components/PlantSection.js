import {useEffect} from 'react'
import { Card } from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import {loadPlant} from '../redux-store/actions'
import PlantCard from './PlantCard'


export default function PlantSection() {
    const dispatch=useDispatch();
    const { plants }=useSelector((state)=>state);

   
        useEffect(()=>{
            if(localStorage.getItem('id')){
                 dispatch(loadPlant())};
        }, [])
    return (
        <div className="plants-container">
            {plants.message ? 
                (console.log(plants.message))
                :
                (plants.map((plant)=>{return <PlantCard props={plant}/>}))
            }
        </div>
    )
}
             
                   
                
//useSelector