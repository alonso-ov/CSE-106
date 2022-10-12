from flask import Flask, redirect, url_for
from flask import request
from flask import abort, render_template
from flask_cors import CORS

import json

app = Flask(__name__)

data = {}

@app.route('/')
def index():
    return render_template('index.html')

# add to dictionary
@app.route('/grades', methods=['POST'])
def post_student():
    data[request.json['name']] = request.json['grade']
    return 'success'

@app.route('/grades', methods=['GET'])
def get_all_students():
    return json.dumps(data)

@app.route('/grades/<string:name>', methods=['GET'])
def get_student(name):
    if name in data:
        dict = {name: data[name]}
        return json.dumps(dict)
    else:
        return 404

if __name__ == '__main__':
    app.run()