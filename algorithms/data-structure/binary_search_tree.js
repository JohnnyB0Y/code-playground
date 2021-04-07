//  binary_search_tree.js
//
//
//  Created by JohnnyB0Y on 2021/04/07.
//  Copyright © 2021 JohnnyB0Y. All rights reserved.

const defaultCompare = require('./helper').defaultCompare

class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor(compareFunc = defaultCompare) {
    this.compareFunc = compareFunc
    this.root = null
  }

  insert(key) {

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

}