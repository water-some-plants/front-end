

const initialState={
    id:Date.now(),
    nickName:'',
    species:'',
    h2oFrequency:'',
    image:'',
    createdPlants:[]
}

const reducer=(state=initialState, action){
    switch (action.type){
        case "ADD_PLANT":
            return{
                ...state,
                createdPlants:action.payload
            }
        default:
            return state;
    }
}