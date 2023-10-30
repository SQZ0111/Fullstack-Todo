##Use motor instead of pymongo for async db calls

from fastapi import FastAPI,HTTPException
from fastapi.responses import JSONResponse
from typing import Union,List
from pymongo import MongoClient
from dotenv import load_dotenv
from bson.json_util import dumps
import os
from fastapi.middleware.cors import CORSMiddleware
#load env variables
load_dotenv()

# from userModel import User
from userModel import Todo,TodoResponse


# initialise app
app = FastAPI()

#origins to allow for cors
origins = [
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#mongo connect
mongo_uri = os.getenv("MONGODB_CONNECT_STRING")
mongo_client = MongoClient(mongo_uri)
db = mongo_client.get_database('test')

#get collection
todos_collection = db.get_collection("todos23")


@app.get("/")
def read_root():
    return {"message": "This is the home directory"}


#get todos
@app.get("/todos",response_model=Union[List[Todo],TodoResponse])
async def read_todos_from_db():
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
@app.post("/postTodo",response_model=TodoResponse)
async def post_todo_to_db(todo: Todo):
    try: 
        todoNew = todo.dict()
        todos_collection.insert_one(todoNew)
        return JSONResponse(content={"message": "Added Todo"},status_code=200)
    except Exception as e:
        print(f"Error {e} occured after posting todo")
        raise HTTPException(status_code=500, detail="Could not add todo")



#delete todos
@app.delete("/deleteTodo/{todoId}",response_model=TodoResponse)
async def delete_todo_in_db(todoId: str):
    try:
        todos_collection.delete_one({"id": todoId})
        return JSONResponse(content={"message": "Todo succesfully deleted"}, status_code=200)
    except Exception as e:
        print(f"Error {e} occured after deleting todo")
        raise HTTPException(status_code=500,detail="Could not delete todo")

#put todos
@app.put("/toggleTodo/{todoId}",response_model=TodoResponse)
async def toggle_todo_done_in_db(todoId: str):
   try:
      query_object = {"id": todoId}
      todo_found = todos_collection.find_one(query_object)
      update_value = {"$set": {"done": not todo_found['done']}}
      todos_collection.update_one(query_object,update_value)
      return JSONResponse(content={"message": "Todo successfully updated"},status_code=200)
   except Exception as e:
       print(f"Error {e} occured in updating todo")
       raise HTTPException(status_code=500,detail="Could not update todo")


        
