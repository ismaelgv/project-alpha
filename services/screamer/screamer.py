from typing import Optional

from fastapi import FastAPI
from pydantic import BaseModel, Field

class Answer(BaseModel):
    """An incredible answer."""
    id: int = Field(..., description="Unique ID")
    answer: str = Field(..., description="A fucking awesome answer.")
    mood: Optional[int]

class Question(BaseModel):
    """A real interesting question."""
    id: int = Field(..., description="Unique ID")
    question: str = Field(..., description="An amazing question.")
    mood: Optional[int]

app = FastAPI()

@app.post("/answer", response_model=Answer)
async def answer(data: Answer):
    """Scream the answer to your face."""
    data.answer = data.answer.upper().replace(".", "!!!")
    return data

@app.post("/question", response_model=Question)
async def question(data: Question):
    """Return the question but louder."""
    data.question = data.question.upper().replace("?", "?!?!")
    return data
