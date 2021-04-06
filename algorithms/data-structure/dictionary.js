//  dictionary.js
//
//
//  Created by JohnnyB0Y on 2021/04/06.
//  Copyright © 2021 JohnnyB0Y. All rights reserved.

const defaultToString = require('./helper').defaultToString
const ValuePair = require('./helper').ValuePair

class Dictionary {
  constructor() {
    this.table = {}
    this.count = 0
    this.change = false
    this.vps = []
  }

  set(key, val) {
    if (key !== null && val !== null) {
      const tk = defaultToString(key)
      this.table[tk] = new ValuePair(tk, val)
      this.change = true
      this.count++
      return true
    }
    return false
  }

  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[defaultToString(key)]
      this.change = true
      this.count--
      return true
    }
    return false
  }

  get(key) {
    const vp = this.table[defaultToString(key)]
    return vp ? vp.val : undefined
  }

  clear() {
    this.table = {}
    this.change = true
    this.count = 0
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.count === 0
  }

  keys() {
    return this.keyValues().map(vp => vp.key)
  }

  values() {
    return this.keyValues().map(vp => vp.val)
  }

  keyValues() {
    if (this.change) {
      this.vps = []
      for (const key in this.table) {
        if (this.hasKey(key)) {
          this.vps.push(this.table[key])
        }
      }
      this.change = false
    }
    return this.vps
  }

  forEach(callbackFunc) {
    for (let i = 0; i < this.count; i++) {
      if ( callbackFunc(this.keyValues()[i].key, this.keyValues()[i].val) === false )
        break
    }
  }

  hasKey(key) {
    return this.table[defaultToString(key)] !== null
  }

}

const dict = new Dictionary()

dict.set('A', 'apple')
dict.set('B', 'boy')
dict.set('C', 'cat')
dict.set('D', 'dog')

console.log(dict.hasKey('A'))
console.log(dict.size())
console.log(dict.keys())
console.log(dict.values())
console.log(dict.get('D'))

dict.remove('B')

console.log(dict.size())
console.log(dict.keys())
console.log(dict.values())
console.log(dict.get('B'))

dict.forEach((k, v) => {
  console.log(`log: ${k}: ${v}`)
})
