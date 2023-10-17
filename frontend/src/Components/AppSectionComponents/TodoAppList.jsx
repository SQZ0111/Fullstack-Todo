import { useState } from "react";
import React from "react";


//Components
import { TodoContentContainer } from "../ContainerComponents/TodoContentContainer";
import { TodoListItem } from "../ItemsComponents/TodoListItem";
import { TodoAddModal } from "../ModalComponents/TodoAddModal";

export function TodoAppList({todos,setTodos}) {

    return(
        <TodoContentContainer contentFor={"vertical"}>
            {
                todos.map((item) => {
                    return(
                        <React.Fragment key={item.id}>
                            <TodoListItem text={item.text} category={item.category} done={item.done} id={item.id} todos={todos} setTodos={setTodos}/>
                        </React.Fragment>
                    );
                })
            }
            <TodoAddModal todos={todos} setTodos={setTodos}/>
        </TodoContentContainer>
    )
}