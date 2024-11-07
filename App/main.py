from fastapi import FastAPI, Form, File, UploadFile

app = FastAPI()

@app.post("/chatting/send")
async def get_chatting(
    nickname: str = Form(...),
    password: str = Form(...),
    content: str = Form(...),
    image: UploadFile = File(...)
):
    print(nickname, password, content, image)