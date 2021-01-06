import axiosWithAuth from "../axios/axios.utils";

export const ADD_PLANT="ADD_PLANT";

export const loadPlants=()=>{
    //will load array of saved plants, need to hold in state to allow for modification of info for plants
}

// export const addPlant=(newPlant)=>{
    
//         axiosWithAuth()
//         .post("https://water-some-plants1.herokuapp.com/api/plants", newPlant)
//             .then((res)=>{
//                 console.log(res.data)}
//                     // dispatch({type:ADD_PLANT,payload:res.data})})
//             // .catch(err=>{console.log(err)})
// }
         