//  cache.js
//
//
//  Created by JohnnyB0Y on 2021/03/30.
//  Copyright © 2021 JohnnyB0Y. All rights reserved.

// LRU --------------------------------------------------

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
    console.log('count:', this.count)
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
