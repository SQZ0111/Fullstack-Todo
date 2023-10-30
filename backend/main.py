##Use motor instead of pymongo for async db calls

from routes.todo_route import router as todo_router
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

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

@app.get("/")
def read_root():
    return {"message": "This is the home directory"}

app.include_router(todo_router, prefix="/todos", tags=["todos"])

        
