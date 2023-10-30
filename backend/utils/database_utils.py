from pymongo import MongoClient
from dotenv import load_dotenv
import os

#load env variables
load_dotenv()

#mongo connect
def get_mongodb():
    mongo_uri = os.getenv("MONGODB_CONNECT_STRING")
    mongo_client = MongoClient(mongo_uri)
    db = mongo_client.get_database('test')

    #get collection
    todos_collection = db.get_collection("todos23")
    return todos_collection