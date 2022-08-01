import mysql.connector
import os

db = mysql.connector.connect(host='localhost', user='root', passwd=os.getenv('DB_PASS'), database='testDB')
cursor = db.cursor()

cursor.execute('INSERT INTO Passwords (service, username, password) VALUES (%s, %s, %s)', ('service2', 'user2', 'pass2'))

db.commit()