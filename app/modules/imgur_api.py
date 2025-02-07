import requests

def imgur_upload(image, client_id: str) -> dict:
    """
    status: success, no image, failed to upload image
    """
    
    if (image == None):
        return ""
    
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
    
    return ""