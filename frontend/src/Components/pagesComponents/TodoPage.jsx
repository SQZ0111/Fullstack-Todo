//components
import { TodoAppCategory } from "../AppSectionComponents/TodoAppCategory";
import { TodoAppHeader } from "../AppSectionComponents/TodoAppHeader";
import { AppContainer} from "../ContainerComponents/AppContainer";
import { TodoAppList } from "../AppSectionComponents/TodoAppList";

import { v4 as uuid } from 'uuid';
import { useEffect, useState } from "react";




export function TodoPage({todos,setTodos}){
//     const todosObject = [{
//         text: "lernen",
//         category: "university", 
//         id: uuid(),
//         done: false
//     },{
//         text: "React Native",
//         category: "code",
//         id: uuid(),
//         done: false
//     },{
//         text: "todo app bauen",
//         category: "code",
//         id: uuid(),
//         done: false
//     }
//     ]
    //const [todos,setTodos] = useState(todosObject);


    
    return(
        <AppContainer>
            <TodoAppHeader/>
            <TodoAppCategory todos={todos}/>
            <TodoAppList todos={todos} setTodos={setTodos}/>

        </AppContainer>
    )
}