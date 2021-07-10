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
  recAllOfNumbersSum(numbers, len(numbers) - 1, sum)
 
  """
  确认状态
  arr: [0, 1, 2, 3, 4, ... i]
  f(arr, i, sum):
    选：    f(arr, i - 1, sum - arr[i])
    不选：  f(arr, i - 1, sum)

  初始条件和边界情况
  if i < 0:
    结束

  if arr[i] > sum:
    结束
  
  if arr[i] == sum:
    放入数组
    结束

  if arr[i] < sum:
    选：    f(arr, i - 1, sum - arr[i])
    不选：  f(arr, i - 1, sum)

  """

results = []
def recAllOfNumbersSum(numbers, index, sum):

  result=[]

  if index < 0:
    # 结束？打印？
    return True, False

  cur = numbers[index]
  if cur > sum:
    return True, False
  
  if cur == sum:
    result.append(cur)
    return True, True
  
  if cur < sum:
    result.append(cur)
    end, p = recAllOfNumbersSum(numbers, index - 1, sum - cur)
    if end and p:
      print(result)
      result = []
      # print(r)
    elif not end:
      pass

    end, p = recAllOfNumbersSum(numbers, index - 1, sum)
    if end and p:
      print(result)
      result = []

  return False, False


# test
domain()
