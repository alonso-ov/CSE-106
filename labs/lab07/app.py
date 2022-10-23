from flask import Flask, redirect, url_for
from flask import request
from flask import abort, render_template
from flask_cors import CORS

from flask_sqlalchemy import SQLAlchemy

import json

app = Flask(__name__)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False 
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3' 

db = SQLAlchemy(app)

class Student(db.Model):
    name = db.Column(db.String, primary_key=True)
    grade = db.Column(db.String, nullable=False)

@app.route('/')
def index():
    return render_template('index.html')

# create student
@app.route('/grades', methods=['POST'])
def post_student():
    newStudent = Student(name=request.json['name'], grade=request.json['grade'])
    db.session.add(newStudent)
    db.session.commit()
    return 'success'

if __name__ == '__main__':
    app.run()