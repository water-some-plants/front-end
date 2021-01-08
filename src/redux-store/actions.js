import axiosWithAuth from "../axios/axios.utils";

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
            dispatch({ type: "POST_PLANT_SUCCESS", payload: res.data });
          });
      })

      .catch((err) => {
        console.log(err);
      });
  };
};

export const loadPlant = () => {
  return (dispatch) => {
    dispatch({ type: "GET_USER_PLANTS" });
    axiosWithAuth()
      .get(`plants/user/${userId}`)
      .then((res) => {
        dispatch({ type: "GET_USER_PLANTS_SUCCESS", payload: res.data });
      })

      .catch((err) => {
        console.log(err);
      });
  };
};

export const deletePlant = (plantId) => {
  return (dispatch) => {
    dispatch({ type: "DELETE_PLANT" });
    axiosWithAuth()
      .delete(`plants/${plantId}`)
      .then(() => {
        axiosWithAuth()
          .get(`plants/user/${userId}`)
          .then((res) => {
            dispatch({ type: "DELETE_PLANT_SUCCESS", payload: res.data });
          });
      });
  };
};

export const updatePlant =(plant_id, updatedPlant)=>{
  return (dispatch) => {
    dispatch({ type: "UPDATE_PLANT_START" });
    axiosWithAuth()
      .put(`plants/${plant_id}`, updatedPlant)
      .then((res) => {
        axiosWithAuth()
          .get(`plants/user/${userId}`)
          .then((res) => {
            dispatch({ type: "POST_PLANT_SUCCESS", payload: res.data });
          });
      })

      .catch((err) => {
        console.log(err);
      });
  };
}
