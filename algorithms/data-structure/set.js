//  set.js
//
//
//  Created by JohnnyB0Y on 2021/04/06.
//  Copyright © 2021 JohnnyB0Y. All rights reserved.

class AGSet {

  constructor(){
    this.items = {}
    this.count = 0
  }

  add(element) {
    if ( this.has(element) )
      return false

    this.items[element] = element
    this.count++
    return true
  }

  delete(element) {
    if ( !this.has(element) )
      return false
    
    delete this.items[element]
    this.count--
    return true
  }

  has(element) {
    // Object.prototype.hasOwnProperty.call(this.items, element) 该方法返回一个表明对象是否具有特定属性的布尔值；
    // in 运算符则返回对象在原型链上是否有特定属性的布尔值；
    return Object.prototype.hasOwnProperty.call(this.items, element)
    // return element in this.items
  }

  size() {
    return this.count
  }

  clear() {
    this.items = {}
    this.count = 0
  }

  values() {
    return Object.values(this.items)
  }

  // 并集
  union(otherSet) {
    const newSet = new AGSet()
    this.values().forEach(element => newSet.add(element))
    otherSet.values().forEach(element => newSet.add(element))
    return newSet
  }

  // 交集
  intersection(otherSet) {
    const newSet = new AGSet()

    let smallerSet = this
    let biggerSet = otherSet
    if (this.size() > otherSet.size()) {
      smallerSet = otherSet
      biggerSet = this
    }

    smallerSet.values().forEach(elementA => {
      if (biggerSet.has(elementA)) {
        newSet.add(elementA)
      }
    })
    return newSet
  }

  // 差集
  difference(otherSet) {
    const newSet = new AGSet()
    this.values().forEach(element => {
      if ( !otherSet.has(element) ) {
        newSet.add(element)
      }
    })
    return newSet
  }

  // 子集？
  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size())
      return false
    
    return this.values().every(e => {
      return otherSet.has(e)
    })
  }

}

const set = new AGSet()

set.add(1)
set.add(1)
set.add(2)
set.add(3)
set.delete(1)

console.log(set.values(), set.size())

set.add(1)

console.log(set.values(), set.size())
console.log(set.has(1), set.has(2))

set.clear()

console.log(set.values(), set.size())


const setA = new AGSet()
setA.add(1)
setA.add(2)
setA.add(3)

const setB = new AGSet()
setB.add(3)
setB.add(4)
setB.add(5)
setB.add(6)

console.log(setA.union(setB).values())

console.log(setA.intersection(setB).values())

console.log(setA.difference(setB).values())


setA.clear()
setA.add(3)
setA.add(5)
console.log(setA.isSubsetOf(setB))

setA.add(7)
console.log(setA.isSubsetOf(setB))
