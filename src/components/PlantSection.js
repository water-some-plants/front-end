import {useEffect} from 'react'
import { Card } from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import {loadPlant} from '../redux-store/actions'
import PlantCard from './PlantCard'


export default function PlantSection() {
    const dispatch=useDispatch();
    const { plants }=useSelector((state)=>state);

    useEffect(()=>{
        dispatch(loadPlant());
    }, [])
    return (
        <div className="plants-container">
            {plants.map((plant)=>{
               return (plant.map((att)=>{
                    return <PlantCard props={att}/>
                }))
            })
            }
        </div>
    )
}
             
                   
                
//useSelector