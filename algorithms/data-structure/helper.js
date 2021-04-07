//  helper.js
//
//
//  Created by JohnnyB0Y on 2021/04/06.
//  Copyright © 2021 JohnnyB0Y. All rights reserved.

function defaultToString(item) {
  if (item === null) {
    return 'NULL'
  }
  else if (item === undefined) {
    return 'UNDEFINED'
  }
  else if (typeof item === 'string' || item instanceof String) {
    return `${item}`
  }
  return item.toString()
}

function defaultCompare(paramA, paramB) {
  return paramA === paramB
}

class ValuePair {
  constructor(key, val) {
    this.key = key
    this.val = val
  }
  toString() {
    return `[${this.key}: ${this.val}]`
  }
}

exports.defaultToString = defaultToString
exports.defaultCompare = defaultCompare

exports.ValuePair = ValuePair
