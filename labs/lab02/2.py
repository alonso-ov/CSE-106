import numpy as np

A = np.matrix('1 2 3; 4 5 6; 7 8 9')
B = np.matrix('3 1 4; 2 6 1; 2 9 7')

print(A)
print(B)

print()

# A + B
print(np.add(A, B))

print()

# A X B
print(np.cross(A, B))

print()

# det(A)
print(np.linalg.det(A))

print()

# (B)^-1
print(np.linalg.inv(B))

print()

# eigenvalues(A)
print(np.linalg.eigvals(A))