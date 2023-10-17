import { useState,useEffect } from "react";
import { v4 as uuid } from 'uuid';
import { getTodosBackend } from "../utils/getTodosFromBackend";

    const todosObject = [{
        text: "lernen",
        category: "university", 
        id: uuid(),
        done: false
    },{
        text: "React Native",
        category: "code",
        id: uuid(),
        done: false
    },{
        text: "todo app bauen",
        category: "code",
        id: uuid(),
        done: false
    }
    ]
    const LOCAL_STORAGE_KEY = "todos";
export function useLocalStorageTodos() {
    const [todos,setTodos] = useState([]);


    const loadTodosFromLocalStorage = () => {
        return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    }
    
    const setTodosToLocalStorage = (updatedTodos) => {

        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(updatedTodos));
    }
    useEffect(() => {
        const storage = loadTodosFromLocalStorage();
        if(storage && storage?.length > 0) {
            setTodos(storage);
        } else {
            getTodosBackend(setTodos)
            // setTodos(todosObject);
        }
    },[])

    return {todos,setTodos,setTodosToLocalStorage}
}