# -*- coding: utf-8 -*

def domain():
  
  arr1 = [1, 3, 5, 2, 1, 0]
  arr2 = [2, 1, 0, 9, 11, 12, 4]

  arr1.sort()
  arr2.sort()

  print(arr1, arr2)

  arr = mergeOrderlyArray(arr1, arr2)
  print(arr)

  pass

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


















# 测试
domain()
