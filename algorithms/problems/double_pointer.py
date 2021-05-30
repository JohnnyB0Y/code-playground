# -*- coding: utf-8 -*

def domain():
  
  arr1 = [1, 3, 5, 2, 1, 0]
  arr2 = [2, 1, 0, 9, 11, 12, 4]

  arr1.sort()
  arr2.sort()

  print(arr1, arr2)

  # 测试合并
  arr = mergeOrderlyArray(arr1, arr2)
  print(arr)

  # 测试查找第k位
  tmparr = []
  for i in range(0, len(arr)):
    tmparr.append(findInOrderlyArray(arr1, arr2, i))
  print(tmparr)


# 两个有序数组 合并成 有序数组
def mergeOrderlyArray(arr1, arr2):
  idx1 = idx2 = 0
  arr = []

  while idx1 < len(arr1):
    # arr2 的 idx2 走完，把 arr1 后续的元素直接放进arr 并退出循环
    if idx2 >= len(arr2):
      arr.append(arr1[idx1])
      idx1 += 1
    else:
      while idx2 < len(arr2):
        # arr1 的 idx1 走完，把 arr2 后续的元素直接放进arr 并退出循环
        if idx1 >= len(arr1):
          arr.append(arr2[idx2])
          idx2 += 1
        else:
          if arr1[idx1] > arr2[idx2]:
            arr.append(arr2[idx2])
            idx2 += 1
          else:
            arr.append(arr1[idx1])
            idx1 += 1
  return arr


# 两个有序数组，中找出排 第k位 的数
def findInOrderlyArray(arr1, arr2, k):
  idx1 = idx2 = 0
  loop = -1

  while idx1 < len(arr1):
    # arr2 的 idx2 走完，在 arr1 中找
    if idx2 >= len(arr2):
      loop += 1 # error ?
      if loop == k:
        return arr1[idx1]
      idx1 += 1
    else:
      while idx2 < len(arr2):
        loop += 1
        # arr1 的 idx1 走完，在 arr2 中找
        if idx1 >= len(arr1):
          if loop == k:
            return arr2[idx2]
          idx2 += 1
        else:
          if arr1[idx1] > arr2[idx2]:
            if loop == k:
              return arr2[idx2]
            idx2 += 1
          else:
            if loop == k:
              return arr1[idx1]
            idx1 += 1















# 测试
domain()
