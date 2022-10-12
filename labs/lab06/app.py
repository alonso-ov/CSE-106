from flask import Flask
from flask import request
from flask import abort, render_template
from flask_cors import CORS

import json

app = Flask(__name__)

data = {}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/grades', methods=['GET'])
def get_grades():
    return json.dumps(data)

# add to dictionary
@app.route('/grades', methods=['POST'])
def post_student():
    print(request.json)
    data[request.json['name']] = request.json['grade']
    return ''

if __name__ == '__main__':
    app.run()