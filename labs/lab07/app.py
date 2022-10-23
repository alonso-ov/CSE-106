from select import select
from flask import Flask, redirect, url_for
from flask import request
from flask import abort, render_template
from flask_cors import CORS

from flask_sqlalchemy import SQLAlchemy

import json

app = Flask(__name__)

# choose where to store database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3' 

# call database
db = SQLAlchemy(app)

# Student table with student name and grade
class Student(db.Model):
    name = db.Column(db.String, primary_key=True)
    grade = db.Column(db.String, nullable=False)

# root directory
@app.route('/')
def index():
    return render_template('index.html')

# ----- SEARCH STUDENT -----
@app.route('/grades/<string:name>', methods=['GET'])
def get_student(name):
    try:
        selectedStudent = Student.query.filter_by(name=name).first()
        selectedStudent = {name: selectedStudent.grade}
        return json.dumps(selectedStudent)
    except:
        return 'Could not find student'

# ------ CREATE STUDENT -----
@app.route('/grades', methods=['POST'])
def post_student():
    newStudent = Student(name=request.json['name'], grade=request.json['grade'])
    db.session.add(newStudent)
    db.session.commit()
    return 'success'

# ----- EDIT GRADE -----
@app.route('/grades/<string:name>', methods=['PUT'])
def put_student(name):
    #query student info
    selectedStudent = Student.query.filter_by(name=name).first()

    selectedStudent.grade = request.json['grade']
    db.session.commit()

    return 'successfully edited grade'

# ------ DELETE STUDENT ------
@app.route('/grades/<string:name>', methods=['DELETE'])
def delete_student(name):

    #query student info
    selectedStudent = Student.query.filter_by(name=name).first()

    db.session.delete(selectedStudent)
    db.session.commit()

    return 'successfully deleted student'

if __name__ == '__main__':
    app.run()