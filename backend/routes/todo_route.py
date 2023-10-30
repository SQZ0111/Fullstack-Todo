from fastapi import HTTPException,APIRouter,Depends
from fastapi.responses import JSONResponse
from typing import Union,List


#database
from utils.database_utils import get_mongodb
#import validation models
from models.todoModel import Todo
from models.responseModel import TodoResponse

router = APIRouter()




#get todos
@router.get("/",response_model=Union[List[Todo],TodoResponse])
async def read_todos_from_db(todos_collection=Depends(get_mongodb)):
    try:
        todos = list(todos_collection.find({}))
        #_id is a special data format called BSON Type 
        # it is necessary to serialize it before converting collection into JSON
        for todo in todos:
            todo['_id'] = str(todo['_id'])
        todos_json = {"todos": todos, "message": "fetched todos!"}
        #FastAPI has a special return type for JSON
        return JSONResponse(content=todos_json, status_code=200)
    except Exception as e:
        print(f"Error {e} occured after getting data")
        raise HTTPException(status_code=500, detail="Could not get todo")

   


#post todos
#convert class type into dict before inserting
@router.post("/",response_model=TodoResponse)
async def post_todo_to_db(todo: Todo,todos_collection=Depends(get_mongodb)):
    try: 
        todoNew = todo.dict()
        todos_collection.insert_one(todoNew)
        return JSONResponse(content={"message": "Added Todo"},status_code=200)
    except Exception as e:
        print(f"Error {e} occured after posting todo")
        raise HTTPException(status_code=500, detail="Could not add todo")



#delete todos
@router.delete("/{todoId}",response_model=TodoResponse)
async def delete_todo_in_db(todoId: str,todos_collection=Depends(get_mongodb)):
    try:
        todos_collection.delete_one({"id": todoId})
        return JSONResponse(content={"message": "Todo succesfully deleted"}, status_code=200)
    except Exception as e:
        print(f"Error {e} occured after deleting todo")
        raise HTTPException(status_code=500,detail="Could not delete todo")

#put todos
@router.put("/{todoId}",response_model=TodoResponse)
async def toggle_todo_done_in_db(todoId: str,todos_collection=Depends(get_mongodb)):
   try:
      query_object = {"id": todoId}
      todo_found = todos_collection.find_one(query_object)
      update_value = {"$set": {"done": not todo_found['done']}}
      todos_collection.update_one(query_object,update_value)
      return JSONResponse(content={"message": "Todo successfully updated"},status_code=200)
   except Exception as e:
       print(f"Error {e} occured in updating todo")
       raise HTTPException(status_code=500,detail="Could not update todo")

