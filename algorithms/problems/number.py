# -*- coding: utf-8 -*

def domain():
  arr1 = [1, 3, 5, 2, 1, 0]
  arr2 = [2, 1, 0, 9, 11, 12, 4]

  print("allOfTowNumbersSum:")
  print(allOfTowNumbersSum(arr1, 4))
  print(allOfTowNumbersSum(arr2, 4))

  print(allOfTowNumbersSum(arr1, 11))
  print(allOfTowNumbersSum(arr2, 11))

  print("allOfNumbersSum:")
  print(allOfNumbersSum(arr1, 3))
  print(allOfNumbersSum(arr1, 2))


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

  i = 0
  l = len(numbers)
  results = []
  while i < l: # 遍历数组第一层
    
    subSum = numbers[i]
    j = i + 1 # 初始化 j
    i += 1 # 递增 i

    if subSum > sum: # 大于sum，跳过
      continue

    if subSum == sum: # 自己等于sum
      results.append([subSum])
    
    result = []
    result.append(subSum)
    while j < l:
      sub = numbers[j]
      subSum += sub
      j += 1
      if subSum < sum:
        result.append(sub)
      elif subSum == sum:
        result.append(sub)
        results.append(result)
        result = result[:] # 复制一份
      else:
        subSum -= sub # 大于sum，回退
        continue
  return results

# test
domain()
