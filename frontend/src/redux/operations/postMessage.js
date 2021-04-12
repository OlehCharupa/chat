import axios from "axios";
import { getAllMessage } from "../slice/messageSlice";



axios.defaults.baseURL = "https://intense-depths-94787.herokuapp.com"

export const getMessageOperations = () => async (dispatch) => {
    try {
        const result = await axios.get("/chat")
        dispatch(getAllMessage(result.data))
    } catch (error) {
        console.log(error);
    }
}
export const postMessageOperations = (obj) => async (dispatch) => {
    try {
        const result = await axios.post("/chat", obj)
        console.log(result.data);
        await dispatch(getMessageOperations())
    } catch (error) {
        console.log(error);
    }
}