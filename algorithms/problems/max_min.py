# -*- coding: utf-8 -*
#  count.py
#
#
#  Created by JohnnyB0Y on 2021/07/11.
#  Copyright © 2021 JohnnyB0Y. All rights reserved.

def domain():
  #       0    1    2      3      3         5             12                        4
  strs = ["", "a", "aa", "aba", "baaa", "baaabd", "kkkfcddddddcfkabckkl", "aaaabcdefghijjjjklmn"]
  for str in strs:
    max = maxOfPalindrome(str)
    print(str, "maxOfPalindrome:", max)
  
  pass

# 有三种硬币，分别面值2元、5元和7元，每种硬币都足够多
# 买一本书需要27元
# 问？如何用最少的硬币组合正好付清，且不需要对方找零？
def minOfCoinChange():
  pass


# 字符串中的最长回文（Palindrome）
def maxOfPalindrome(str):
  # aa : 遇到两个重复字符的时候
  # aaa: 遇到多个重复字符的时候
  # aba: 遇到左右字符重复的时候

  # 第一步，找到中心轴
  # 第二步，向左向右探

  strLen = len(str)
  left = 0
  right = 1
  max = 0 if strLen == 0 else 1

  while right < strLen:
    if str[left] == str[right]: # aa...
      while right + 1 < strLen and str[right] is str[right+1]:  # aaa....
        right += 1

    else: # ab...
      right += 1
      if (left < 0 or right >= strLen) or str[left] is not str[right]: # abc ? aba
        left += 1
        continue

    # 左右探索
    while (left > 0 and right + 1 < strLen) and str[left-1] is str[right+1]: 
      left -= 1
      right += 1

    # 探索完成
    max = (right - left + 1) if (right - left + 1) > max else max
    if max >= (strLen - right - 1):
      return max # 当后面的字符串数量少于最大回文个数时，提前跳出循环

    left = right
    right += 1

  return max

# test
domain()
