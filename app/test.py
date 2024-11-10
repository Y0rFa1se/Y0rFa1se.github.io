from datetime import datetime

from dotenv import dotenv_values
from fastapi import FastAPI, Form, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional

from modules.hash import hash_password, check_password
from modules.message_db import message_db_init, get_latest_msg, save_msg, delete_msg
from modules.imgur_api import imgur_upload

env_dict = dotenv_values(".env")

cursor = message_db_init()

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
    return get_latest_msg(cursor, start_idx)

@app.post("/message/post")
async def post_message(
    nickname: str = Form(...),
    password: str = Form(...),
    content: str = Form(...),
    image: Optional[UploadFile] = File(None)
):
    link = imgur_upload(image, env_dict["IMGUR_CLIENT_ID"])
    password = hash_password(password)

    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    save_msg(cursor, current_time, nickname, password, content, image!=None, link)

    return {"status": "success"}

@app.post("/message/delete")
async def delete_message(
    idx: str = Form(...),
    password: str = Form(...)
):
    if (check_password(cursor, idx, password)):
        res = delete_msg(cursor, idx)

        if res['status'] == "success":
            return {"status": "success"}

        return {"status": "failed to delete message"}