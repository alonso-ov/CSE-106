import sys

sentence = input('Enter a sentence: ')
repetitions = input('Number of repeats: ')

try:
    repetitions = int(repetitions)
except:
    print('Number of repetitions invalid.')
    sys.exit()

for i in range(repetitions):
    print((i + 1), ': ', sentence)