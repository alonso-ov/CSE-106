import sys

nums = input('Enter two or more numbers: ')

nums = nums.split(' ')

try:
    nums = [float(x) for x in nums]
except:
    print('input is invalid (only numbers, no strings)')
    sys.exit()

sum = 0

for x in nums:
    sum += x

print('Sum is', sum)