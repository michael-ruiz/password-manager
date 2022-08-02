import mysql.connector
import os

db = mysql.connector.connect(host='localhost', user='root', passwd=os.getenv('DB_PASS'), database='testDB')
cursor = db.cursor(buffered=True)

def get_passwords():
    cursor.execute('SELECT * from Passwords')
    return cursor

def get_users():
    cursor.execute('SELECT username, password from Users')
    return cursor

def confirm_user(users, input_user, input_passw):
    for user in users:
        if user[0] == input_user and user[1] == input_passw:
            return True

    return False