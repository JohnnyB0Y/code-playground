//  avl_tree.js
//
//
//  Created by JohnnyB0Y on 2021/04/10.
//  Copyright © 2021 JohnnyB0Y. All rights reserved.

const BinarySearchTree = require('./binary_search_tree').BinarySearchTree
const compare = require('./helper').compare

const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5
}

class AVLTree extends BinarySearchTree {
  getNodeHight(node) {
    if (node) {
      return Math.max(this.getNodeHight(node.left), this.getNodeHight(node.right)) + 1
    }
    return -1
  }

  getBalanceFactor(node) {
    const heightDifference = this.getNodeHight(node.left) - this.getNodeHight(node.right)
    switch (heightDifference) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
      case 2:
        return BalanceFactor.UNBALANCED_LEFT
      default:
        return BalanceFactor.BALANCED    
    }
  }

  rotationLL(node) {
    const tmp = node.left
    node.left = tmp.right
    tmp.right = node
    return tmp
  }

  rotationRR(node) {
    const tmp = node.right
    node.right = tmp.left
    tmp.left = node
    return tmp
  }

  rotationLR(node) {
    node.left = this.rotationRR(node.left)
    return this.rotationLL(node)
  }

  rotationRL(node) {
    node.right = this.rotationLL(node.right)
    return this.rotationRR(node)
  }

  insert(key) {
    this.root = this.insertNode(this.root, key)
  }

  insertNode(node, key) {
    if (node) { // 正常插入
      if (compare.lessThan(key, node.key)) { // 左孩子
        node.left = this.insertNode(node.left, key)
      }
      else if (compare.greaterThan(key, node.key)) { // 右孩子
        node.right = this.insertNode(node.right, key)
      }
      else { // 重复的键
        return node 
      }

      // 判断是否需要平衡
      const balanceFactor = this.getBalanceFactor(node)
      if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
        node = compare.lessThan(key, node.key) ? this.rotationLL(node) : this.rotationLR(node)
      }
      if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
        node = compare.greaterThan(key, node.key) ? this.rotationRR(node) : this.rotationRL(node)
      }
      return node
    }
    return new Node(key)
  }

  removeNode(node, key, removeNode) {
    node = super.removeNode(node, key, removeNode)
    if (node) {
      // 判断是否需要平衡
      const balanceFactor = this.getBalanceFactor(node)
      if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
        const balanceFactorLeft = this.getBalanceFactor(node.left)
        if (balanceFactorLeft === BalanceFactor.BALANCED || 
          balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
          return this.rotationLL(node)
        }
        if (balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
          return this.rotationLR(node.left)
        }
      }
      if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
        const balanceFactorRight = this.getBalanceFactor(node.right)
        if (balanceFactorRight === BalanceFactor.BALANCED || 
          balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
          return this.rotationRR(node)
        }
        if (balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
          return this.rotationRL(node.right)
        }
      }
      return node
    }
    return null
  }
}
