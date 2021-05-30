# -*- coding: utf-8 -*

def domain():
  arr1 = [1, 3, 5, 2, 1, 0]
  arr2 = [2, 1, 0, 9, 11, 12, 4]

  print("allOfTowNumbersSum:")
  print(allOfTowNumbersSum(arr1, 4))
  print(allOfTowNumbersSum(arr2, 4))

  print(allOfTowNumbersSum(arr1, 11))
  print(allOfTowNumbersSum(arr2, 11))

  # print("allOfNumbersSum:")
  # print(allOfNumbersSum(arr1, 3))


# 获取所有两数和为sum的结果
def allOfTowNumbersSum(numbers, sum):
  tmp = []
  for i in range(0, len(numbers)):
    for j in range(i + 1, len(numbers)):
      if numbers[i] + numbers[j] == sum:
        tmp.append([numbers[i], numbers[j]])
  return tmp

# 获取所有 和为 sum 的组合结果
def allOfNumbersSum(numbers, sum):
  numbers.sort()
  # 未完成 ！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
  maxIdx = len(numbers) - 1
  tmp = []

  while maxIdx >= 0:
    if numbers[maxIdx] < sum:
      break
    elif numbers[maxIdx] == sum:
      # 相同单个元素放入数组
      tmp.append([numbers[maxIdx]])
    maxIdx -= 1
  
  for i in range(0, maxIdx):
    subarr = [numbers[i]]
    idxArr = []
    tmpsum = numbers[i]
    rightIdx = maxIdx
    while rightIdx > i:
      currentIdx = rightIdx
      while currentIdx > i:
        tmpsum += numbers[currentIdx]
        subarr.append(numbers[currentIdx])
        if tmpsum > sum:
          tmpsum = numbers[i]
          break
        elif tmpsum == sum:
          tmp.append(subarr)
          subarr = [numbers[i]]
          break
        else:
          currentIdx -= 1
      rightIdx -= 1
    
  return tmp


# test
domain()
