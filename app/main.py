from fastapi import FastAPI, Form, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 모든 출처에서의 요청을 허용합니다. 보안을 위해 특정 출처만 허용할 수도 있습니다.
    allow_credentials=True,
    allow_methods=["*"],  # 모든 HTTP 메서드를 허용합니다.
    allow_headers=["*"],  # 모든 헤더를 허용합니다.
)

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
    # return {"status": "failed"}