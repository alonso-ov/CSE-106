import json

with open('grades.txt') as f:
   data = json.load(f)

def createNewStudent():
    pass

def lookupStudent():
    pass

def editGrade():
    pass

print('Chose an action: [1] Create New Student [2] Lookup Grade [3] Edit Grade [4] Delete Grade [5] Exit')
option = int(input('Enter an option: '))

while option != 5:

    if option == 1:
        newName = input('Enter full name of new student: ')
        newGrade = float(input('Enter grade for this student: '))

        data.update({newName: newGrade})

    elif option == 2:
        name = input('Please enter student name: ')

        try:
            print('Grade: ', data[name])
        except:
            print('could not find student.')

    elif option == 3:
        name = input('Please enter name of student to edit grade: ')
        try:
            print('Current Grade: ', data[name])
            newGrade = float(input('Enter new grade: '))

            data[name] = newGrade
        except:
            print('invalid')

    elif option == 4:
        name = input('Please enter name of student to delete grade: ')
        try:
            data[name] = ''
        except:
            print('could not find student')

        
    print('')
    print('Chose an action: [1] Create New Student [2] Lookup Grade [3] Edit Grade [4] Delete Grade [5] Exit')
    option = int(input('Enter an option: '))

with open("grades.txt", "w") as outfile:
    json.dump(data, outfile)