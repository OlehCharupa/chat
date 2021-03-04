import axios from "axios";
import { addArrayMsg, getAllMessage } from "../slice/messageSlice";



axios.defaults.baseURL = "https://intense-depths-94787.herokuapp.com"

export const postMessageOperations = (obj) => async (dispatch) => {
    try {
        console.log(obj);
        const result = await axios.post("/chat", { ...obj })
        dispatch(addArrayMsg(result.data))
    } catch (error) {
        console.log(error);
    }
}
export const getMessageOperations = () => async (dispatch) => {
    try {
        const result = await axios.get("/chat")
        dispatch(getAllMessage(result.data))
    } catch (error) {
        console.log(error);
    }
}