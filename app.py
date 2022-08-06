from flask import Flask, render_template, request
from database import get_users, get_passwords, confirm_user

app = Flask(__name__)
users = get_users()

@app.route('/login', methods=['POST', 'GET'])
@app.route('/', methods=['POST', 'GET'])
def login():
    return render_template('login.html')

@app.route('/homepage', methods=['POST', 'GET'])
def home():
    global input_user
    global input_passw
    input_user = request.form['user']
    input_passw = request.form['passw']

    return render_template('home.html')

@app.route('/signup')
def signup():
    return render_template('signup.html')

@app.route('/passwords', methods=['POST', 'GET'])
def display():
    if (confirm_user(users, input_user, input_passw)):
        passwords = get_passwords(input_user)
        return render_template('passwords.html', passwords=passwords)

    return 'no work'

if __name__ == '__main__':
    app.run(debug=True)