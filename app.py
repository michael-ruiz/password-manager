from flask import Flask, render_template, request
from database import get_users, get_passwords, confirm_user

app = Flask(__name__)
users = get_users()
input_user = ''
input_passw = ''

@app.route('/', methods=['POST', 'GET'])
def home():
    return render_template('index.html')

@app.route('/passwords', methods=['POST', 'GET'])
def display():
    input_user = request.form['user']
    input_passw = request.form['passw']

    if (confirm_user(users, input_user, input_passw)):
        passwords = get_passwords()
        return render_template('passwords.html', passwords=passwords)

    return 'no work'

if __name__ == '__main__':
    app.run(debug=True)