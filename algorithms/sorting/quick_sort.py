# -*- coding: utf-8 -*

def quickSort(arr):
  length = len(arr)
  if length <= 1:
    return arr
  
  midIdx = length / 2
  left = []
  mid = []
  right = []

  for i in arr:
    if i < arr[midIdx]:
      left.append(i)
    elif i > arr[midIdx]:
      right.append(i)
    else:
      mid.append(i)
  
  return quickSort(left) + mid + quickSort(right)

# [1, 2, 3, 6, 7, 10]
arr = quickSort([1, 2, 7, 3, 6, 10])
print(arr)

# ['a', 'b', 'c', 'k', 'u']
arr = quickSort(['a', 'u', 'k', 'b', 'c'])
print(arr)
