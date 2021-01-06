// import  { ADD_PLANT }  from './actions';

const initialState={
    h2o_frequency:"",
    id:"",
    nickname:"",
    picture:"",
    species:"",
    user_id:"",
    plants:[]
}

const reducer=(state=initialState, action)=>{
    switch(action.type){
        case "ADD_PLANT":
            console.log(action.payload);
            return{
                ...state,
                plants:action.payload
            }
        default:
            return state;      
    };
};

export default reducer;

