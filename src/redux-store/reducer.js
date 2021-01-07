

const initialState={
    plants:[]
}

const reducer=(state=initialState, action)=>{
    switch(action.type){
        case  "POST_PLANT_START":
            return state;
        case "POST_PLANT_SUCCESS":
            return({
                ...state,
                plants:[...state.plants,action.payload]
            })
        case "GET_USER_PLANTS_SUCCESS":
            return({
                ...state,
                plants:[action.payload]
            })
        default:
            return state;      
    };
};

export default reducer;

