import { TodoContentContainer } from "../ContainerComponents/TodoContentContainer";
import { TodoAppCategoryProgressCard } from "../CardComponents/TodoCategoryProgressCard";

export function TodoAppCategory({todos}) {
    const countCodeTodos = (todos) =>  {
        return todos.filter((todo) => {
            return (todo.category === "code" && todo.done === false)
        })
    }
    const countUniversityTodos = (todos) => {
        return todos.filter((todo) => {
            return (todo.category === "university" && todo.done === false)
        }) 
    }
    return(
        <TodoContentContainer contentFor="horizontal">
            <TodoAppCategoryProgressCard text={"coding"} activeTodos={countCodeTodos(todos).length} type={"code"}/>
            <TodoAppCategoryProgressCard  text={"University"} activeTodos={countUniversityTodos(todos).length}  type={"uni"}/>
        </TodoContentContainer> 
    )
}