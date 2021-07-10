# -*- coding: utf-8 -*

def domain():
  points = [[1, 1, 3, 3], [1, 1, 5, 3], [0, 0, 0, 0], [1, 1, 1, 2], [1, 2, 2, 2]]

  for i in range(0, len(points)):
    startX = points[i][0]
    startY = points[i][1]
    endX = points[i][2]
    endY = points[i][3]
    print("countOfRobotMove:", startX, startY, endX, endY)
    result = countOfRobotMove(startX, startY, endX, endY)
    print("Total move:", result)
  

# 在网格中，机器人🤖 从起点（1，1）开始，走到（x, y) 需要多少步，只能向下或向右走；
def countOfRobotMove(startX, startY, endX, endY):
  if startX > endX or startY > endY:
    # 走不了
    return 0

  # 初始条件
  # f(x, y) = f(x - 1, y) + f(x, y - 1)
  # f(startX, startY) = 0
  # f(x, startY) = 1
  # f(startX, y) = 1

  row = endX - startX + 1
  col = endY - startY + 1
  results = []
  for i in range(0, row):
    if i is 0:
      # 第一列全为1
      results.append([1] * col)
      # 起点为0
      results[i][0] = 0
    else:
      # 第一行，全为1
      results.append([0] * col)
      results[i][0] = 1

  for x in range(1, row):
    for y in range(1, col):
      results[x][y] = results[x][y-1] + results[x-1][y]
  
  return results[row-1][col-1]


# test
domain()
