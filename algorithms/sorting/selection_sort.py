def selectionSort(arr):
  length = len(arr)
  for i in range(length-1):
    minIdx = findMinIndexFromItems(arr, i+1, length)
    if arr[i] > arr[minIdx]:
      arr[i], arr[minIdx] = arr[minIdx], arr[i]
  return arr

def findMinIndexFromItems(arr, start, end):
  for i in range(start+1, end):
    if arr[start] > arr[i]:
      start = i
  return start

# [1, 2, 3, 6, 7, 10]
arr = selectionSort([1, 2, 7, 3, 6, 10])
print(arr)

# ['a', 'b', 'c', 'k', 'u']
arr = selectionSort(['a', 'u', 'k', 'b', 'c'])
print(arr)
