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
    if (this.root === null) {
      this.root = new Node(key)
    }
    else {
      this.insertNode(this.root, key)
    }
  }

  search(key) {

  }

  inOrderTraverse() {

  }

  preOrderTraverse() {

  }

  postOrderTraverse() {

  }

  min() {

  }

  max() {

  }

  remove(key) {

  }

  insertNode(node, key) {
    if (compare.lessThan(key, node.key)) {
      // 左孩子
      node.left ? this.insertNode(node.left, key) : node.left = new Node(key)
    }
    else {
      // 右孩子
      node.right ? this.insertNode(node.right, key) : node.right = new Node(key)
    }
  }

}