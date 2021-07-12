package mutablearray

import (
	"testing"
)

func TestMutableArray(t *testing.T) {

	var arrM MutableArray = MakeMutableArray(10)
	t.Log(arrM)
}
