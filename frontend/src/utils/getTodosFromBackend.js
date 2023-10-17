import axios from "axios";
import showNotification from "../Components/NotifcationComponents/showNotification";

export async function getTodosBackend(setCallBackFunc) {
    try {
        const config = {
            method : 'get',
            url: 'http://localhost:8000/todos',
            headers: {
            'Content-Type': 'application/json'
            }
        };
        const res = await axios(config);
        setCallBackFunc(res.data.todos);
        showNotification(res.data.message,'normal');
    } catch {
        showNotification("Fetch in Frontend did not word",'red');
    }
}