from pydantic import BaseModel

# #user model
class Todo(BaseModel):
    text: str
    category: str
    id: int
    done: bool