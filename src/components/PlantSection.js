import {useEffect} from 'react'
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
            {console.log(plants.message)}
            {plants.message ? 
                (console.log(plants.message))
                :
                (plants.map((plant)=>{return <PlantCard props={plant}/>}))
            }
        </div>
    )
}      
                   
                
//useSelector