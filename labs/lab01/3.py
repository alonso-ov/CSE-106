targetWord = input('Enter a word: ')

targetWord = targetWord.lower()

pythonSummary = open(r'PythonSummary.txt', 'r')

count = 0

for line in pythonSummary:
    for word in line.split(" "):
        word = word.lower()

        if word.find(targetWord) != -1:
            count += 1

print('The word ', targetWord, ' appeared ', count, ' times')