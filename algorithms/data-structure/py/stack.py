# -*- coding: utf-8 -*
#  stack.py
#
#
#  Created by JohnnyB0Y on 2021/05/31.
#  Copyright © 2021 JohnnyB0Y. All rights reserved.


class AGStack:
  def __init__(self, length):
    self.arr = [0] * length
    self.top = -1
    self.length = length

  def __len__(self):
    return self.top + 1

  def __str__(self):
    return ' '.join([str(elem) for elem in self.arr])

  def empty(self):
    if self.top < 0:
      return True
    return False

  def full(self):
    if self.length - self.top <= 1:
      return True
    return False

  def push(self, item):
    if self.full():
      return False
    
    self.arr.append(item)
    self.top += 1
    return True

  def pop(self):
    if self.empty():
      return None
    
    self.top -= 1
    return self.arr.pop()



# test
if __name__ == "__main__":
  stack = AGStack(8)

  print("empty:", stack.empty())
  print("full:", stack.full())
  print("len:", len(stack))

  print("pop top:", stack.pop())

  print("push 8 number:")
  for i in range(0, 8):
    stack.push(i+1)

  print("len:", len(stack))
  print("pop top:", stack.pop())
  print("pop top:", stack.pop())
  print("len:", len(stack))


  print("push 11:", stack.push(11))
  print("push 12:", stack.push(12))
  print("push 13:", stack.push(13))

  print("full:", stack.full())

  print("len:", len(stack))
  print(stack.pop())
  print(stack.pop())
  print("len:", len(stack))
