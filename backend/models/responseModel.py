from pydantic import BaseModel

class TodoResponse(BaseModel):
    message: str