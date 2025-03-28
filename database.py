import sqlite3

def init_db():
    """Initialize the database and create the necessary tables."""
    # Connect to SQLite database (it will create the file if it doesn't exist)
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()

    # Create the users table if it doesn't exist
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        phone TEXT NOT NULL,
        password TEXT NOT NULL
    )
    ''')

    # Commit and close the connection
    conn.commit()
    conn.close()

def add_user(name, email, phone, password):
    """Add a new user to the database."""
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()

    # Insert a new user into the users table
    cursor.execute('''
    INSERT INTO users (name, email, phone, password)
    VALUES (?, ?, ?, ?)
    ''', (name, email, phone, password))

    # Commit and close the connection
    conn.commit()
    conn.close()

def get_user_by_email(email):
    """Fetch a user by their email."""
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()

    # Retrieve user by email
    cursor.execute('''
    SELECT id, name, email, phone, password FROM users WHERE email = ?
    ''', (email,))
    user = cursor.fetchone()

    conn.close()
    return user
