from fastapi import FastAPI
from fastapi.responses import JSONResponse
from typing import Union,List
from pymongo import MongoClient
from dotenv import load_dotenv
from bson.json_util import dumps
import os

load_dotenv()

# from userModel import User
from userModel import Todo

# initialise app
app = FastAPI()


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
@app.get("/todos",response_model=List[Todo])
async def read_todos_from_db():
    try:
        todos = list(todos_collection.find({}))
        for todo in todos:
            todo['_id'] = str(todo['_id'])
        todos_json = {"todos": todos, "message": "fetched todos!"}
        return JSONResponse(content=todos_json, status_code=200)
    except ConnectionAbortedError:
        print("Something went wrong")
   


#post todos


#delete todos



#put todos




        
