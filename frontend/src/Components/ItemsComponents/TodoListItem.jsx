//Mui Components
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from "@mui/material";
//Hooks
import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
//custom Hook
import { useCustomTheme } from '../../customHooks/useCustomTheme';
import { useLocalStorageTodos } from '../../customHooks/useLocalStorage';
//utils
import { deleteTodoBackend } from '../../utils/deleteFromBackend';
import { toggleTodoDoneBackend } from '../../utils/toggleTodoInBackend';

export function TodoListItem({text,id,todos,setTodos}) {
    const {todoId} = useParams();
    const theme = useCustomTheme();
    const {setTodosToLocalStorage} = useLocalStorageTodos();
    const [checked,setChecked] = useState(false);

    const toggleDone = (todoId,setCallbackFunc,todos) => {
        setCallbackFunc(
            todos.filter((todo) => {
                return todo.id === todoId ? (todo.done = !todo.done,todo) : todo
            })
        )
        toggleTodoDoneBackend(todoId);
    }
    const handleToggle = ({todoId,setCallbackFunc,todos}) => {
        toggleDone(todoId,setCallbackFunc,todos)
        setChecked(!checked);
    }
    const deleteTodo = (e,{todoId,todos,setCallbackFunc}) => {
        e.preventDefault();
        setCallbackFunc(
            todos.filter((todo) => {
                return todo.id !== todoId ? todo : null
            })
        )
        deleteTodoBackend(todoId);
    }

    useEffect(() => {
        setTodosToLocalStorage(todos);
    },[todos])
  
        if (todoId && todos) {

            const paramTodo = todos.find(item => item.id == todoId ? item : null)
            if(paramTodo) {
                return(
                    <ListItem
                    key={id}
                    secondaryAction={
                    <IconButton onClick={(e) => deleteTodo(e,{
                        todoId: paramTodo?.id,
                        todos: todos,
                        setCallbackFunc: setTodos
                    })} edge="end" aria-label="delete-button">
                        <DeleteIcon/>
                    </IconButton>
                    }
                    disablePadding
                    >
                        <ListItemButton sx={{
                            backgroundColor: theme.palette.background.paper,
                        }} role={undefined} onClick={() => handleToggle({
                            todoId: paramTodo?.id,
                            setCallbackFunc: setTodos,
                            todos: todos
                        })} dense>
                            <ListItemIcon>
                                <Checkbox
                                edge="start"
                                checked={checked}
                                disableRipple
                                inputProps={{ 'aria-labelledby': "123"}}
                                />
                            </ListItemIcon>
                            <Typography sx={{
                                fontSize: theme.typography.textMd,
                                textDecoration: checked ? "line-through" : "none"
                            }}>{paramTodo?.text}</Typography>
                        </ListItemButton>
                    </ListItem>
                );
            }
        } else {
            return(
                <ListItem
                key={id}
                secondaryAction={
                <IconButton onClick={(e) => deleteTodo(e,{
                    todoId: id,
                    todos: todos,
                    setCallbackFunc: setTodos
                })} edge="end" aria-label="delete-button">
                    <DeleteIcon/>
                </IconButton>
                }
                disablePadding
                >
                    <ListItemButton sx={{
                        backgroundColor: theme.palette.background.paper,
                    }} role={undefined} onClick={() => handleToggle({
                        todoId: id,
                        setCallbackFunc: setTodos,
                        todos: todos
                    })} dense>
                        <ListItemIcon>
                            <Checkbox
                            edge="start"
                            checked={checked}
                            disableRipple
                            inputProps={{ 'aria-labelledby': "123"}}
                            />
                        </ListItemIcon>
                            <Typography sx={{
                                fontSize: theme.typography.textMd,
                                textDecoration: checked ? "line-through" : "none"
                            }}>
                                <Link to={`todo/${id}`}>{text}</Link>
                                
                            </Typography>
                           
                    </ListItemButton>
                </ListItem>
            );
        }
}