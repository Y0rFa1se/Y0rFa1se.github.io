from dotenv import dotenv_values

from fastapi import FastAPI, Form, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional

from modules.api import imgur_upload

env_dict = dotenv_values(".env")

print(env_dict["IMGUR_CLIENT_ID"])

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/message/post")
async def post_message(
    nickname: str = Form(...),
    password: str = Form(...),
    content: str = Form(...),
    image: Optional[UploadFile] = File(None)
):
    link = imgur_upload(image, env_dict["IMGUR_CLIENT_ID"])

    print(link)

    return {"status": "success", "link": link}

@app.get("/message/get")
async def get_message(start_idx):
    print(start_idx)