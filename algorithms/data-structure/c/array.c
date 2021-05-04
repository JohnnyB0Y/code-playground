//  array.c
//
//
//  Created by JohnnyB0Y on 2021/05/02.
//  Copyright © 2021 JohnnyB0Y. All rights reserved.


#include <stdlib.h>
#include <string.h>
#include <stdio.h>

typedef void * id;

typedef struct {
  int capacity;
  int count;
  int size_of_item;
  id data;
  id (*next_item)();
} array;

void array_malloc(array *self, int capacity, int size_of_item) {
  self->count = 0;
  self->capacity = capacity;
  self->size_of_item = size_of_item;
  self->data = malloc(capacity * size_of_item);
  self->next_item = NULL;
}

void array_destroy(array *self) {
  free(self->data);
}

void array_init(array *self, void *arr, int size_of_arr) {
  memcpy(self->data, arr, size_of_arr);
}

void array_add_item(array *self, id item) {
  char *data = self->data;
  memcpy(data + self->size_of_item * self->count, item, self->size_of_item);
  self->count++;
}

id array_get_item(array *self, int index) {
  char *data = self->data;
  return data + index * self->size_of_item;
}

id array_last_item(array *self) {
  return array_get_item(self, self->count-1);
}

// test
int main() {

  array arr;
  array_malloc(&arr, 10, sizeof(int));
  
  printf("capacity: %d\n", arr.capacity);
  printf("count: %d\n", arr.count);
  printf("size_of_item: %d\n", arr.size_of_item);

  int a[] = {1, 3, 5, 7, 6, 5, 4};
  array_init(&arr, a, sizeof(a));

  printf("item: %d\n", *(int *)array_get_item(&arr, 0));
  printf("item: %d\n", *(int *)array_get_item(&arr, 1));
  printf("item: %d\n", *(int *)array_get_item(&arr, 2));

  int item = 100;
  array_add_item(&arr, &item);
  printf("item: %d\n", *(int *)array_last_item(&arr));

  array_destroy(&arr);
  return 0;
}
