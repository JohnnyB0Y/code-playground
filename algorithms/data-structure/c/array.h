//  array.h
//
//
//  Created by JohnnyB0Y on 2021/05/11.
//  Copyright © 2021 JohnnyB0Y. All rights reserved.

#ifndef ARRAY_H
#define ARRAY_H

#include "base.h"

// array
struct array {
  int capacity;
  int count;
  int size_of_item;
  id data;
};

typedef struct array * array_t;

array_t array_malloc(int capacity, int size_of_item);

void array_destroy(array_t self);

void array_init(array_t self, void *arr, int size_of_arr);

void array_add_item(array_t self, id item);

// 添加item到index位置，可能存在内存泄漏，需要自己释放
id array_add_item_at_index(array_t self, id item, int index);

void array_exchange_index_to_index(array_t self, int at_index, int to_index);

id array_get_item(array_t self, int index);

id array_last_item(array_t self);

void array_iteration(array_t self, iteration_func func);

#endif
