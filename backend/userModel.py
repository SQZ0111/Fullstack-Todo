from pydantic import BaseModel

# #user model
#You could declare optional attributes by assigning None = None to them
class Todo(BaseModel):
    text: str
    category: str
    id: str
    done: bool

class TodoResponse(BaseModel):
    message: str