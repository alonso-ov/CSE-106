from flask import Flask, redirect, url_for
from flask import request
from flask import abort, render_template
from flask_cors import CORS

import json

app = Flask(__name__)

#not necessary but if machine throws error
#CORS(app)
data = {}

@app.route('/')
def index():
    return render_template('index.html')

# create student
@app.route('/grades', methods=['POST'])
def post_student():
    data[request.json['name']] = request.json['grade']
    return 'success'

#edit grade
@app.route('/grades/<string:name>', methods=['PUT'])
def put_student(name):
    data[name] = request.json['grade']
    return 'success'

# get all students grade
@app.route('/grades', methods=['GET'])
def get_all_students():
    return json.dumps(data)

#get one student's grade
@app.route('/grades/<string:name>', methods=['GET'])
def get_student(name):
    if name in data:
        dict = {name: data[name]}
        return json.dumps(dict)
    else:
        return 404

# delete one student
@app.route('/grades/<string:name>', methods=['DELETE'])
def delete_student(name):
    if name in data:
        del data[name]
        return 'successfully deleted'
    else:
        return 404

if __name__ == '__main__':
    app.run()