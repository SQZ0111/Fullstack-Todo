import axios from "axios";
import showNotification from "../Components/NotifcationComponents/showNotification";
export async function addTodoBackend(newTodo) {
    try {
        const config = {
            method: 'post',
            url: 'http://localhost:8080/addTodo',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(newTodo)
        }
        const res = await axios(config);
        showNotification(res.data.message,'normal');
    } catch {
        showNotification('Frontend: Adding Todo did not work','red');
    }
}