from fastapi import FastAPI, Form, File, UploadFile
from typing import Optional

app = FastAPI()

@app.post("/chatting/send")
async def get_chatting(
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