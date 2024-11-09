import openai

def openai_init(api_key):
    openai.api_key = api_key

def template_text(prev_chat: dict, user_chat: dict, response: str) -> dict:
    """
    user_chat template:
    {
        "role": "user",
        "content": "What is in this image?"
    },
    {
        "type": "image_url",
        "image_url": {
            "url": "imgur_url"
        }
    }
"""

    return {
        prev_chat,
        user_chat,
        {
            "role": "assistant",
            "content": response
        }
    }

def openai_request(prev_chat: dict, user_chat: dict) -> str:
    """
    user_chat template:
    {
        "role": "user",
        "content": "What is in this image?"
    },
    {
        "type": "image_url",
        "image_url": {
            "url": "imgur_url"
        }
    }
"""

    completion = openai.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            prev_chat,
            user_chat
        ]
    )

    return completion.choices[0].message["content"]