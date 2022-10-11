from flask import Flask
from flask import request
from flask import abort, render_template
from flask_cors import CORS

import json

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return "Hello world"
    # print('the home was requested')
    # return render_template('index.html')

# @app.route('/grades/<string:name>', methods=['GET'])
# def get_grade(name):
#     return
#     #with open()