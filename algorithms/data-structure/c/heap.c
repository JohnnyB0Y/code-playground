//  heap.c
//
//
//  Created by JohnnyB0Y on 2021/05/09.
//  Copyright © 2021 JohnnyB0Y. All rights reserved.

#include "array.c"

void heap_down_adjust(array_t arr, int parent_index, compare_func func);

void heap_init(array_t arr, compare_func func) {
  // 从最后一个非叶子节点开始，依次下沉调整
  for (int i = arr->count / 2; i >= 0; i--) {
    heap_down_adjust(arr, i, func);
  }
}

void heap_up_adjust(array_t arr, int parent_index, int count) {
  
}

void heap_down_adjust(array_t arr, int parent_index, compare_func func) {
  id parent = array_get_item(arr, parent_index);
  int child_index = 2 * parent_index + 1;
  while (child_index < arr->count) {
    if (child_index + 1 < arr->count) {
      // 有右孩子，比较左右孩子
      if (func(array_get_item(arr, child_index), array_get_item(arr, child_index + 1))) {
        child_index++;
      }

      if (func(parent, array_get_item(arr, child_index))) {
        break;
      }

      // ... 
    }
  }
}