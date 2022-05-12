import axios from "axios";
import { startLoading, saveCharacters } from "./slice";

const API_URL = "https://hp-assessment-api.herokuapp.com/got";

export const fetchCharacters = () => async (dispatch, getState) => {
  try {
    // 1. set loading to true
    dispatch(startLoading());
    // 2. fetch from API (axios)
    const response = await axios.get(`${API_URL}/characters`);

    const chars = response.data.rows;
    // 3. send data to store (saveCharacters)
    dispatch(saveCharacters(chars));
  } catch (e) {
    console.log(e.message);
    // stopLoading
    // setError
  }
};
