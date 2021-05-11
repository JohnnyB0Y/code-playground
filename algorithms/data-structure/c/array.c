//  array.c
//
//
//  Created by JohnnyB0Y on 2021/05/02.
//  Copyright © 2021 JohnnyB0Y. All rights reserved.


#include <stdlib.h>
#include <string.h>
#include <stdio.h>
#include "array.h"


array_t array_malloc(int capacity, int size_of_item) {
  array_t self = malloc(sizeof(struct array));
  self->count = 0;
  self->capacity = capacity;
  self->size_of_item = size_of_item;
  self->data = malloc(capacity * size_of_item);
  return self;
}

void array_destroy(array_t self) {
  free(self->data);
  free(self);
}

void array_init(array_t self, void *arr, int size_of_arr) {
  self->count = size_of_arr / self->size_of_item;
  memcpy(self->data, arr, size_of_arr);
}

void array_add_item(array_t self, id item) {
  char *data = self->data;
  memcpy(data + self->size_of_item * self->count, item, self->size_of_item);
  self->count++;
}

// 添加item到index位置，可能存在内存泄漏，需要自己释放
id array_add_item_at_index(array_t self, id item, int index) {
  if (index >= self->count) {
    return NULL;
  }

  id old_item = array_get_item(self, index);
  char *data = self->data;
  memcpy(data + self->size_of_item * index, item, self->size_of_item);
  return old_item;
}

void array_exchange_index_to_index(array_t self, int at_index, int to_index) {
  id at_item = array_get_item(self, at_index);
  id to_item = array_get_item(self, to_index);

  char *data = self->data;
  memcpy(data + self->size_of_item * at_index, to_item, self->size_of_item);
  memcpy(data + self->size_of_item * to_index, at_item, self->size_of_item);
}

id array_get_item(array_t self, int index) {
  if (index >= self->count) {
    return NULL;
  }
  char *data = self->data;
  return data + index * self->size_of_item;
}

id array_last_item(array_t self) {
  return array_get_item(self, self->count-1);
}

void array_iteration(array_t self, iteration_func func) {
  char *data = self->data;
  for (int i = 0; i < self->count; i++) {
    func(data + i * self->size_of_item, i);
  }
}
