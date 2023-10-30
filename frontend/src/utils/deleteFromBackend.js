import axios from "axios"
import showNotification from "../Components/NotifcationComponents/showNotification"

export async function deleteTodoBackend(todoId) {
    try {
        const config = {
            method: 'delete',
            url: `http://localhost:8000/deleteTodo/${todoId}`
        }
        const res = await axios(config);
        showNotification(res.data.message,'red');
    } catch {
        showNotification('Frontend: Delete did not work','red');
    }
}