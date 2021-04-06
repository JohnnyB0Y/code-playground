//  hashmap.js
//
//
//  Created by JohnnyB0Y on 2021/04/06.
//  Copyright © 2021 JohnnyB0Y. All rights reserved.

const defaultToString = require('./helper').defaultToString
const ValuePair = require('./helper').ValuePair

class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }

  put(key, val) {
    if (key === null || val === null)
      return false

    const position = this.hashCode(key)
    this.table[position] = new ValuePair(key, val)
    return true
  }

  remove(key) {
    const hash = this.hashCode(key)
    const vp = this.table[hash]
    if (vp !== null) {
      delete this.table[hash]
      return true
    }
    return false
  }

  get(key) {
    const vp = this.table[this.hashCode(key)]
    return vp ? vp.val : undefined
  }

  loseloseHashCode(key) {
    if(typeof key === 'number') {
      return key
    }

    const tk = this.toStrFn(key)
    let hash = 0

    for (let i = 0; i < tk.length; i++) {
      hash += tk.charCodeAt(i)
    }
    return hash % 37
  }

  hashCode(key) {
    return this.loseloseHashCode(key)
  }
}

const hash = new HashTable()
hash.put('A')

hash.put('A', 'apple')
hash.put('B', 'boy')
hash.put('C', 'cat')
hash.put('D', 'dog')

console.log(hash.get('B'))
console.log(hash.get('D'))

hash.remove('B')

console.log(hash.get('B'))

hash.put('AB', 'ab')
hash.put('BA', 'ba')

console.log(hash.get('BA'))
console.log(hash.get('AB'))
