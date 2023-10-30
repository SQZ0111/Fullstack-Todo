import axios from "axios";
import showNotification from "../Components/NotifcationComponents/showNotification";

export async function toggleTodoDoneBackend(todoId) {
    try {
        const config = {
            method: 'put',
            url: `http://localhost:8000/toggleTodo/${todoId}`
            
        };
        const res = await axios(config);
        showNotification(res.data.message,'red');
    } catch {
        showNotification('Frontend: request update did not work out','red');
    }
}
