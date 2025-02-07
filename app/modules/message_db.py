import sqlite3

def message_db_init():
    """
    return cursor
    """
    conn = sqlite3.connect('messages.db')
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()

    cursor.execute('''
    CREATE TABLE IF NOT EXISTS messages (
        idx INTEGER PRIMARY KEY AUTOINCREMENT,
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

    return cursor

def get_latest_msg(cursor, start_idx: int) -> dict:
    """
    return list
    """

    query = f"""
    SELECT idx, datetime, nickname, content, has_image, link FROM messages
    WHERE deleted = 0
    ORDER BY idx DESC
    LIMIT 10
    OFFSET ?"""

    cursor.execute(query, (start_idx,))
    res = [dict(row) for row in cursor.fetchall()]
    res = res if res else []
    
    cursor.connection.commit()

    return res

def save_msg(cursor, datetime: str, nickname: str, password: str, content: str, has_image, link: str) -> dict:
    query = f"""
    INSERT INTO messages (datetime, nickname, password, content, has_image, link)
    VALUES (?, ?, ?, ?, ?, ?)
    """

    cursor.execute(query, (datetime, nickname, password, content, has_image, link))

    cursor.connection.commit()

    return {"status": "success"}

def get_password(cursor, idx: str) -> str:
    query = f"""
    SELECT password FROM messages
    WHERE idx = ?
    """

    cursor.execute(query, (idx,))
    res = cursor.fetchone()

    cursor.connection.commit()

    return res[0]

def find_msg(cursor, idx: str) -> dict:
    """
    status, cursor포함한 dict 반환
    """
    
    query = f"""
    SELECT * FROM messages
    WHERE idx = ?
    """

    cursor.execute(query, (idx,))
    res = cursor.fetchone()

    cursor.connection.commit()

    if res:
        return {"status": "success", "message": dict(res)}
    
    return {"status": "failed to find message"}

def delete_msg(cursor, idx: str) -> dict:
    """cursor 입력받아서 삭제 후 status(dict) 반환"""

    if find_msg(cursor, idx)['status'] == "failed to find message":
        return {"status": "failed to find message"}
    
    query = f"""
    UPDATE messages
    SET deleted = 1
    WHERE idx = ?
    """

    cursor.execute(query, (idx,))
    
    cursor.connection.commit()

    return {"status": "success"}