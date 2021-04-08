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

  min() {
    if (this.root) {
      let node = this.root
      while (node.left) {
        node = node.left
      }
      return node
    }
    return null
  }

  max() {
    if (this.root) {
      let node = this.root
      while (node.right) {
        node = node.right
      }
      return node
    }
    return null
  }

  remove(key) {

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