# -*- coding: utf-8 -*

def domain():
  arr1 = [1, 3, 5, 2, 1, 0]
  arr2 = [2, 1, 0, 9, 11, 12, 4]

  print(allOfTowNumbersSum(arr1, 4))
  print(allOfTowNumbersSum(arr2, 4))

  print(allOfTowNumbersSum(arr1, 11))
  print(allOfTowNumbersSum(arr2, 11))

  pass

def allOfTowNumbersSum(numbers, sum):
  tmp = []
  for i in range(0, len(numbers)):
    for j in range(i + 1, len(numbers)):
      if numbers[i] + numbers[j] == sum:
        tmp.append([numbers[i], numbers[j]])
  return tmp


# test
domain()
