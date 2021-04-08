//  binary_search_tree.js
//
//
//  Created by JohnnyB0Y on 2021/04/07.
//  Copyright © 2021 JohnnyB0Y. All rights reserved.

const compare = require('./helper').compare

class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(key) {
    this.root ? this.insertNode(this.root, key) : this.root = new Node(key)
  }

  search(key) {
    return this.searchNode(this.root, key)
  }

  searchNode(node, key) {
    if (node) {
      if (compare.equal(node.key, key))
        return node
      if (compare.lessThan(node.key, key))
        return this.searchNode(node.right, key)
      
      return this.searchNode(node.left, key)
    }
    return null
  }

  // 中序遍历
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback)
  }

  inOrderTraverseNode(node, callback) {
    if (node) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node)
      this.inOrderTraverseNode(node.right, callback)
    }
  }

  // 先序遍历
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback)
  }

  preOrderTraverseNode(node, callback) {
    if (node) {
      callback(node)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }

  // 后续遍历
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback)
  }

  postOrderTraverseNode(node, callback) {
    if (node) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node)
    }
  }

  min(node = this.root) {
    if (node) {
      while (node.left) {
        node = node.left
      }
      return node
    }
    return null
  }

  max(node = this.root) {
    if (node) {
      while (node.right) {
        node = node.right
      }
      return node
    }
    return null
  }

  remove(key) {
    const removeNode = new Node(null)
    this.root = this.removeNode(this.root, key, removeNode)
    return removeNode.key ? removeNode : null
  }

  removeNode(node, key, removeNode) {
    if (node) {
      if (compare.equal(key, node.key)) { // 相等
        if (!removeNode.key) { // 记录删除项
          removeNode.key = node.key
        }
        if (node.left && node.right) { // 两个孩子
          const aux = this.min(node.right)
          node.key = aux.key
          node.right = this.removeNode(node.right, aux.key, removeNode)
          return node
        }
        else if (node.left) { // 只有左孩子
          node = node.left
          return node
        }
        else if (node.right) { // 只有右孩子
          node = node.right
          return node
        }
        // 无孩子
        node = null
        return node
      }
      else if (compare.lessThan(key, node.key)) { // 小于
        node.left = this.removeNode(node.left, key, removeNode)
        return node
      }
      // 大于
      node.right = this.removeNode(node.right, key, removeNode)
      return node
    }
    return null
  }

  insertNode(node, key) {
    if (compare.lessThan(key, node.key)) { // 左孩子
      node.left ? this.insertNode(node.left, key) : node.left = new Node(key)
    }
    else { // 右孩子
      node.right ? this.insertNode(node.right, key) : node.right = new Node(key)
    }
  }

}

const bst = new BinarySearchTree()

bst.insert(1)
bst.insert(3)
bst.insert(6)
bst.insert(6)
bst.insert(5)
bst.insert(9)

bst.inOrderTraverse(node => {
  console.log(node.key)
})
console.log('-------------------------')

bst.preOrderTraverse(node => {
  console.log(node.key)
})
console.log('-------------------------')

bst.postOrderTraverse(node => {
  console.log(node.key)
})
console.log('-------------------------')

console.log(bst.min().key, 'min')
console.log(bst.max().key, 'max')
console.log(bst.search(5), 'equal 5')

console.log(bst.remove(6), 'remove 6')
console.log(bst.remove(7), 'not remove 7')
