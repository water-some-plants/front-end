import axiosWithAuth from "../axios/axios.utils";

export const loadPlants = () => {
  //will load array of saved plants, need to hold in state to allow for modification of info for plants
};

const userId = localStorage.getItem("id");

export const addPlant = (newPlant) => {
  return (dispatch) => {
    dispatch({ type: "POST_PLANT_START" });
    axiosWithAuth()
    .post("plants", newPlant)
    .then((res) => {
 
      axiosWithAuth()
      .get(`plants/user/${userId}`)
          .then((res) => {
            console.log(res)
            dispatch({ type: "POST_PLANT_SUCCESS", payload: res.data });
          });
      })
      .catch((err)=>{console.log(err)});
  };
};

export const loadPlant = () => {
  return (dispatch) => {
    dispatch({ type: "GET_USER_PLANTS" });
    axiosWithAuth()
    .get(`plants/user/${userId}`)
    .then((res) => {
      console.log(res.data)
      dispatch({ type: "GET_USER_PLANTS_SUCCESS", payload: res.data })
      })
      .catch((err)=>{console.log(err)});
  };
};
