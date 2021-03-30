//  cache.js
//
//
//  Created by JohnnyB0Y on 2021/03/30.
//  Copyright © 2021 JohnnyB0Y. All rights reserved.

// LRU: Least Recently used

class LRUNode {
  constructor(key, data) {
    this.next = null
    this.prev = null
    this.key = key
    this.data = data
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.count = 0
    this.head = new LRUNode()
    this.data = new Map()
  }

  getNode(key) {
    // 从哈希表中取
    const node = this.data.get(key)
    if (node) {
      // node移到第一位
      this._moveToFirst(node)
      return node.data
    }
    return null
  }

  addNode(key, data) {
    let node = this.data.get(key)
    // 节点存在?
    if ( node ) {
      node.data = data
      return
    }

    node = new LRUNode(key, data)
    if (this.count >= this.capacity) { 
      this._removeLast()
    }

    this._addToFirst(key, node)
  }

  _removeLast() {
    const lastNode = this.head.prev
    if (lastNode) {
      if (lastNode.prev === this.head) {
        this.head.next = null
        this.head.prev = null
      }
      else {
        this.head.prev = lastNode.prev
        lastNode.prev.next = null
      }

      this.data.delete(lastNode.key)
      this.count--
    }
  }

  _addToFirst(key, node) {
    
    if (!this.head.prev) {
      // 首次添加
      this.head.prev = node
    }
    else {
      this.head.next.prev = node
      node.next = this.head.next
    }

    node.prev = this.head
    this.head.next = node

    this.data.set(key, node)
    this.count++
  }

  _moveToFirst(node) {
    if (node.prev === this.head) {
      return
    }

    if (node === this.head.prev) {
      // 最后一个节点
      node.prev.next = null
      this.head.prev = node.prev
    }
    else {
      // 自己的上一级节点指向自己的下一级节点
      node.prev.next = node.next
      node.next.prev = node.prev
    }

    // 让原第一个节点作为自己的下一级节点
    this.head.next.prev = node
    node.next = this.head.next

    // 让头节点作为自己的上一级节点
    this.head.next = node
    node.prev = this.head
  }

  _printNodes() {

    let node = this.head.next
    console.log('count:', this.count, this.data.size)
    while (node) {
      console.log(`${node.key}: ${node.data}`)
      node = node.next
    }
    console.log('-------------------------')
  }
}

// ---------- TEST ----------

const lruCache = new LRUCache(10)
for (let i = 0; i < 10; i++) {
  lruCache.addNode(i, `Node`)
}

// 9 ~ 0
lruCache._printNodes()

lruCache.getNode(0)
lruCache.getNode(3)

// 3, 0 -- 9 ~ 1
lruCache._printNodes()

lruCache.addNode(15, 'Node')
lruCache.addNode(16, 'Node')

// 15, 16, 3, 0 -- 9 ~ 4
lruCache._printNodes()

lruCache.addNode(16, 'Node - 16')

// 15, 16, 3, 0 -- 9 ~ 4
lruCache._printNodes()


// LFU: Least Frequency Used

class LFUNode {
  constructor(key, data) {
    this.left = null
    this.right = null
    this.prev = null

    this.key = key
    this.data = data
    this.frequency = 1
  }
}

class LFUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.count = 0
    this.head = new LFUNode()
    this.data = new Map()
  }

  getNode(key) {
    // 从哈希表中取
    const node = this.data.get(key)
    if (node) {
      node.frequency += 1
      this._shift(node)
      return node.data
    }
    return null
  }

  addNode(key, data) {
    let node = this.data.get(key)
    if ( node ) {
      node.data = data
      return
    }

    node = new LFUNode(key, data)
    if (!this.head.prev) {
      // 第一个
      this.head.left = node
      this.head.prev = node
      node.prev = this.head
    }
    else {
      // 淘汰？
      let last = this.head.prev
      if (this.count >= this.capacity) {
        if (last && last.key) {
          this.data.delete(last.key)
        }
        last = last.prev
        this.count--
      }
      last.left = node
      node.prev = last
      this.head.prev = node
    }

    this.data.set(key, node)
    this.count++
  }

  _shift(node) {
    if (node.prev.left === node) {
      this._upshift(node)
    }
    else {
      this._downshift(node)
    }
  }

  // 左up
  _upshift(node) {

    const prev = node.prev
    if (prev === this.head) {
      return
    }

    // 大于，就转换位置
    if (node.frequency > prev.frequency) {
      const prevRight = prev.right
      const curLeft = node.left
      const curRight = node.right
      const superPrev = prev.prev
      
      node.prev = superPrev
      if (superPrev.left === prev) {
        superPrev.left = node
      }
      else {
        superPrev.right = node
      }
      
      // 先交接自己孩子
      prev.left = curLeft
      prev.right = curRight
      if (curLeft) {
        curLeft.prev = prev
      }
      if (curRight) {
        curRight.prev = prev
      }
      
      // 再交接上级的孩子
      node.left = prev
      node.right = prevRight
      prev.prev = node
      if (prevRight) {
        prevRight.prev = node
      }
      
      if (node === this.head.prev) {
        this.head.prev = prev
      }
      
      // 继续
      this._shift(node)
    }
  }

  // 右 down
  _downshift(node) {
    console.log(node)
    const child = node.right
    if (child && node.frequency > child.frequency) {
      const childLeft = child.left
      const childRight = child.right
      const curLeft = node.left
      const superPrev = node.prev

      child.prev = superPrev
      if (superPrev.left === node) {
        superPrev.left = child
      }
      else {
        superPrev.right = child
      }

      // 先交接孩子的孩子
      node.left = childLeft
      node .right = childRight
      if (childLeft) {
        childLeft.prev = node
      }
      if (childRight) {
        childRight.prev = node
      }

      // 在交接自己的孩子
      child.left  = curLeft
      child.right = node
      if (curLeft) {
        curLeft.prev = child
      }
      node.prev = child

      // 继续和右孩子比大小
      this._downshift(node)
    }
  }

  _printNodes() {

    let node = this.head.left
    console.log('count:', this.count, this.data.size)
    this._printNodeChild(node)
    console.log('-------------------------')
  }

  _printNodeChild(node) {

    if (!node) return;
    const left = node.left
    const right = node.right

    this._printNodeChild(right)
    console.log(`${node.key}: ${node.data} - ${node.frequency} 次`)
    this._printNodeChild(left)
  }

}

const lfuCache = new LFUCache(10)
for (let i = 0; i < 10; i++) {
  lfuCache.addNode(i, `Node`)
}

lfuCache._printNodes()

lfuCache.getNode(0)

lfuCache._printNodes()

lfuCache.addNode(15, 'Node')

lfuCache.getNode(0)
lfuCache.getNode(0)
lfuCache.getNode(0)
lfuCache.getNode(1)
lfuCache.getNode(15)
lfuCache.getNode(15)
lfuCache.getNode(15)
lfuCache.getNode(5)

lfuCache._printNodes()
