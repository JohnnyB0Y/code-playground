//  mutableArray.go
//
//
//  Created by JohnnyB0Y on 2021/07/10.
//  Copyright © 2021 JohnnyB0Y. All rights reserved.

// 可变数组

package mutablearray

type MutableArray struct {
	innerArr []int
	length   int
	capacity int
	start    int
	end      int
}

func MakeMutableArray(capacity int) MutableArray {
	arrM := MutableArray{}
	arrM.innerArr = make([]int, capacity)
	arrM.start = 0
	arrM.end = 0
	arrM.length = 0
	arrM.capacity = capacity

	return arrM
}

func (arrM *MutableArray) Add(value int) {
	append(arrM.innerArr, value)
}
