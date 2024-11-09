from dotenv import dotenv_values
from fastapi import FastAPI, Form, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional

from modules.imgur_api import imgur_upload
from modules.database import get_latest_msg, save_msg, find_msg, delete_msg

env_dict = dotenv_values(".env")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/message/get")
async def get_message(start_idx):
    return get_latest_msg(start_idx)

@app.post("/message/post")
async def post_message(
    nickname: str = Form(...),
    password: str = Form(...),
    content: str = Form(...),
    image: Optional[UploadFile] = File(None)
):
    link = imgur_upload(image, env_dict["IMGUR_CLIENT_ID"])
    save_msg(nickname, password, content, image, link)

    return {"status": "success"}

@app.post("/message/delete")
async def delete_message(
    idx: str = Form(...),
    password: str = Form(...)
):
    cur = find_msg(idx, password)
    if (cur):
        delete_msg(cur)
        
        return {"status": "success"}
    else:
        return {"status": "failed to find message"}
    