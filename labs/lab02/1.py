import numpy as np

# create 4x2 matrix with values between 2-10
matrix = np.random.randint(low=2, high=11, size=(4, 2))

print('4x2 Matrix:\n', matrix, '\n')

#creates 8x8 matrix
matrix = np.zeros((8, 8))

# for every row
for i in range(8):
    if i % 2 == 0:
        # if row is even add 1s in odd indices
        matrix[i][::2] = 1
    else:
        # if row is odd add 1s in even indices
        matrix[i][1::2] = 1

print('8x8 Matrix:\n', matrix, '\n')

arr = [10, 20, 10, 30, 20, 40, 20, 20, 10, 30, 0, 50, 10]
print('Array:           ', arr)
print('Unique Values:   ', np.unique(arr))

print()

arr = np.array([6, 75, 9, 82, 36, 42, 59, 3, 52, 1, 32, 68, 93, 4, 27, 85, 0, -3, 57])
print('Array:           ', arr)
arr = np.extract(arr > 37, arr)
print('>37 Values:      ', arr, '\n')

print()

arr = np.array([0, 12, 45.21 ,34, 99.91])
print('Centigrade:           ', arr)

def CtoF(x):
    return x * 1.8 + 32

arr = list(map(CtoF, arr))

print('Fahrenheit:           ', arr)