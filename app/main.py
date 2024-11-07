from fastapi import FastAPI, Form, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/message/get")
async def get_message():
    return [
        {"idx": 0, "nickname": "test1", "content": "test1", "has_image": False},
        {"idx": 1, "nickname": "test2", "content": "test2", "has_image": True, "image": "https://imgur.com/a/vqGe6Gt.jpeg"},
    ]

@app.post("/message/post")
async def post_message(
    nickname: str = Form(...),
    password: str = Form(...),
    content: str = Form(...),
    image: Optional[UploadFile] = File(None)
):
    if image:
        print(nickname, password, content, image.filename)
    
    else:
        print(nickname, password, content)

    return {"status": "success"}

@app.post("/message/delete")
async def delete_message(
    idx: int = Form(...),
    password: str = Form(...)
):
    print(idx, password)
    return {"status": "success"}