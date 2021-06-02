# -*- coding: utf-8 -*
#  queue.py
#
#
#  Created by JohnnyB0Y on 2021/05/31.
#  Copyright © 2021 JohnnyB0Y. All rights reserved.


class AGQueue:
  def __init__(self, length):
    self.head = -1
    self.tail = 0
    self.arr = [None] * length
    self.length = length

  def __len__(self):
    if self.empty():
      return 0

    if self.head < self.tail:
      return self.tail - self.head
    elif self.head > self.tail:
      return self.length - (self.head - self.tail)
    else: 
      return self.length

  def __str__(self):
    s = ' '.join([str(elem) for elem in self.arr])
    s = "[ %s ]; length: %d; full: %d; empty: %d;" % (s, len(self), self.full(), self.empty())
    return s

  def empty(self):
    return self.head == -1

  def full(self):
    return self.tail == self.head

  def enqueue(self, item):
    # 已满
    if self.full():
      return False

    # 首次进入
    if self.head == -1:
      self.head = 0

    # 入队
    self.arr[self.tail] = item
    self.tail = self.nextTail()

    return True

  def nextTail(self):
    if self.tail + 1 == self.length:
      return 0
    return self.tail + 1

  def nextHead(self):
    if self.head + 1 == self.length:
      return 0
    return self.head + 1
  
  def dequeue(self):
    # 判空
    if self.empty():
      return None
    
    # 出队
    item = self.arr[self.head]
    self.arr[self.head] = None
    self.head = self.nextHead()

    # 相等，就回到过去
    if self.head == self.tail:
      self.head = -1
      self.tail = 0

    return item


# test
queue = AGQueue(8)

print(queue)
print("dequeue top:", queue.dequeue())

print("enqueue 7 number:")
for i in range(0, 7):
  queue.enqueue(i+1)
print(queue)


print("dequeue top:", queue.dequeue())
print("dequeue top:", queue.dequeue())
print(queue)


print("enqueue 11:", queue.enqueue(11))
print("enqueue 12:", queue.enqueue(12))
print("enqueue 13:", queue.enqueue(13))
print(queue)


print("dequeue top:", queue.dequeue())
print("dequeue top:", queue.dequeue())
print(queue)

print("enqueue 21:", queue.enqueue(21))
print("enqueue 22:", queue.enqueue(22))
print("enqueue 23:", queue.enqueue(23))
print(queue)


while not queue.empty():
  print("dequeue top:", queue.dequeue())
print(queue)

print("enqueue 31:", queue.enqueue(31))
print("enqueue 32:", queue.enqueue(32))
print("enqueue 33:", queue.enqueue(33))
print(queue)

for i in range(0, 18):
  print("enqueue:", i+1, queue.enqueue(i+1))
  print("dequeue top:", queue.dequeue())

print(queue)