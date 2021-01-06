import {ADD_PLANT} from './actions'

const initialState={
    key:"value"
}

const reducer=(state=initialState, action)=>{
    switch(action.type){
        case "ADD_PLANT":
            console.log(action.payload);
        default:
            return state;      
    };
};

export default reducer;

