import requests

def imgur_upload(image: UploadFile, client_id: str) -> str:
    if (image == None):
        return {"status": "no image", "link": None}
    
    headers = {
        "Authorization": f"Client-ID {client_id}"
    }

    response = requests.post(
        "https://api.imgur.com/3/image",
        headers=headers,
        files={"image": image.file}
    )

    if (response.status_code == 200):
        return response.json()["data"]["link"]
    
    return {"status": "failed to upload image", "link": None}