import sqlite3

conn = sqlite3.connect('messages.db')
cursor = conn.cursor()

cursor.execute('''
CREATE TABLE IF NOT EXISTS messages (
    index INTEGER PRIMARY KEY AUTOINCREMENT,
    datetime TEXT NOT NULL,
    nickname TEXT NOT NULL,
    password TEXT NOT NULL,
    content TEXT NOT NULL,
    has_image BOOLEAN DEFAULT 0,
    link TEXT,
    deleted BOOLEAN DEFAULT 0
)
''')

conn.commit()

def get_latest_msg(start_idx: int) -> dict:
    pass

def save_msg(nickname: str, password: str, content: str, image, link: str) -> dict:
    pass

def find_msg(idx: str, password: str) -> dict:
    """
    status, cursor포함한 dict 반환
    """
    pass

def delete_msg(cur) -> dict:
    """cursor 입력받아서 삭제 후 status(dict) 반환"""
    pass