

export const ADD_PLANT="ADD_PLANT";

export const loadPlants=()=>{
    //will load array of saved plants, need to hold in state to allow for modification of info for plants
}

export const addPlant=(newPlant)=>{
    //will add a plant to the list of saved plants
    console.log(newPlant)
    return ({type:ADD_PLANT,payload:newPlant})
}