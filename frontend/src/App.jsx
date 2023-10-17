//axios
import axios from 'axios';

//Basic react imports
import { ThemeProvider } from "@emotion/react"

//react router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//custom Theme
import { themeMain } from "./customTheme/customTheme"

//Components
import { TodoPage } from "./Components/pagesComponents/TodoPage";
import { ErrorPage } from "./Components/pagesComponents/ErrorPage";
import { TodoListItem } from "./Components/ItemsComponents/TodoListItem";


//styles
import "./App.css";

//custom hook
import { useLocalStorageTodos } from "./customHooks/useLocalStorage";



function App() {

  const {todos,setTodos} = useLocalStorageTodos();
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TodoPage todos={todos} setTodos={setTodos}/>,
      errorElement: <ErrorPage/>
    },
    {
      path: "todo/:todoId",
      element: <TodoListItem todos={todos} setTodos={setTodos}/>,
      errorElement: <ErrorPage/>
    }
]);

  return (
    <>
      <ThemeProvider theme={themeMain}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
