class Course:
    def __init__(self, num, department, courseNum, courseName, creds, lectureDays, startTime, endTime, avgGrade):
        self.num = num
        self.department = department
        self.courseNum = courseNum
        self.courseName = courseName
        self.creds = creds
        self.lectureDays = lectureDays
        self.startTime = startTime
        self.endTime = endTime
        self.avgGrade = avgGrade

    def output(self):
        print('COURSE', self.num, ':', self.department, self.courseNum, ': ', courseName)
        print('Number of credits:', self.creds)
        print('Days of Lectures:', self.lectureDays)
        print('Lecture Time:', self.startTime, '-', self.endTime)
        print('Stat: on average, students get', self.avgGrade, 'in this course')

numberOfClasses = input('')
numberOfClasses = int(numberOfClasses)

courses = []

for i in range(numberOfClasses):
    department = input('')
    courseNum = input('')
    courseName = input('')
    creds = input('')
    lectureDays = input('')
    startTime = input('')
    endTime = input('')
    avgGrade = input('')

    course = Course((i + 1), department, courseNum, courseName, creds, lectureDays, startTime, endTime, avgGrade)
    courses.append(course)

for course in courses:
    course.output()
    print('')