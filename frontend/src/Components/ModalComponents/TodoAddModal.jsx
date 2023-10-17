import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import showNotification from '../NotifcationComponents/showNotification';

//utils
import { addTodoBackend } from '../../utils/addTodoToBackend';

//hooks
import { useState,useRef } from 'react';

//custom hooks
import { useCustomTheme } from '../../customHooks/useCustomTheme';

//custom components
import {FormInput} from '../InputComponents/FormInput'

//uuid
import { v4 as uuid } from 'uuid';

const style = {
    display: 'flex',
    flexDirection: 'column',
    alingItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '40%',
    height: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  



export function TodoAddModal({todos,setTodos}) {
    const theme = useCustomTheme();

    const inputRef = useRef("");
    const categoryRef = useRef("");
    //1. refs durchgeben als prop an inputs
    //2. submit button onklick hat eine funktion um an todos dran zu hängen
    //0. todos und setter bis hierhin durchgeben
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const checkValues = (inputValue,selectValue) => {
        return (inputValue  && selectValue) ? true :  false;
    }
    const addTodo = (e,{todos,setCallBackFunc,inputValue,selectValue}) => {
        e.preventDefault();
        const newTodo = {
            text: inputValue, 
            category: selectValue,
            id: uuid(),
            done: false,
        }
        console.log(inputValue,selectValue)
        if(checkValues(inputValue,selectValue)) {
            setCallBackFunc([
                ...todos,
                newTodo
            ])
        }
        addTodoBackend(newTodo);
       
    }
    return(
        
        <>
            <Button onClick={handleOpen} style={{
                position: 'absolute',
                bottom: 0,
                right: 0
            }}><Typography sx={{fontSize: theme.typography.h5}}>Add Todo</Typography></Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                Add your Todo with category university/code
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Für jeden Tag, den du warstest deinen Stift anzusetzen, fällt Elon Musk ein weiteres Haar auf dem Kopf ab. Nur du kannst ihn vor einer Glatze bewahren, also beginne JETZT! 
                </Typography>
                <FormInput inputRef={inputRef} categoryRef={categoryRef}/>
                <Button onClick={(e) => addTodo(e,{
                            todos: todos,
                            setCallBackFunc: setTodos,
                            inputValue: inputRef.current.value,
                            selectValue: categoryRef.current.value
                })} variant="outlined" color="secondary">
                Add Todo
                </Button>
            </Box>
            </Modal>
        </>
    );
}