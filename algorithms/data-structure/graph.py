# -*- coding: utf-8 -*

from collections import deque

class Node:
  def __init__(self, key, prev = None):
    self.key = key
    self.prev = prev

# -------------------------- 广度优先算法 ---------------------------
# A B C (A 指向 B、C 节点)
# B G   (B 指向 G、N 节点)
# G N   (G 指向 N 节点)
# C N   (C 指向 N 节点)
# 求 A 到 N 的最短路径

def searchGraphNode(graph, startKey, endKey):
  bfs_queue = deque()
  bfs_queue += graph[startKey] # 搜索队列
  path = [startKey] # 记录访问路径
  checked = [] # 已检测
  while bfs_queue:
    node = bfs_queue.popleft()

    if node not in checked:
      if node.key is endKey:
        temp_node = node
        while temp_node:
          path.append(temp_node.key)
          temp_node = temp_node.prev

        print('Find the key.', endKey, path)
        return path
      else:
        # 向下查找
        next = graph[node.key]
        for sub_node in next:
          sub_node.prev = node
        bfs_queue += next
        checked.append(node)

  return path

# A N C
graph = {}
graph['A'] = [Node('B'), Node('C')]
graph['B'] = [Node('G')]
graph['G'] = [Node('N')]
graph['C'] = [Node('N')]

print(searchGraphNode(graph, 'A', 'N'))


# -------------------------- 狄克斯特拉算法 ---------------------------
# Dijkstra’s algorithm


