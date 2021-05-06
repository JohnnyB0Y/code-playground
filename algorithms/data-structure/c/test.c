//  test.c
//
//
//  Created by JohnnyB0Y on 2021/05/06.
//  Copyright © 2021 JohnnyB0Y. All rights reserved.

#include "array.c"
#include "linked_list.c"

void print_item(id item, int idx);

// test
int main() {

  // array.c
  array_t arr = array_malloc(10, sizeof(int));
  
  printf("capacity: %d\n", arr->capacity);
  printf("count: %d\n", arr->count);
  printf("size_of_item: %d\n", arr->size_of_item);

  int a[] = {1, 3, 5, 7, 6, 5, 4};
  array_init(arr, a, sizeof(a));

  printf("item: %d\n", *(int *)array_get_item(arr, 0));
  printf("item: %d\n", *(int *)array_get_item(arr, 1));
  printf("item: %d\n", *(int *)array_get_item(arr, 2));

  int item = 100;
  array_add_item(arr, &item);
  printf("item: %d\n", *(int *)array_last_item(arr));

  array_destroy(arr);


  // linked_list.c
  int linked_item1 = 11;
  int linked_item2 = 12;
  int linked_item3 = 13;
  int linked_item4 = 14;

  linked_list_t linked = linked_list_malloc();
  linked_list_add_item(linked, &linked_item1);
  linked_list_add_item(linked, &linked_item2);

  printf("count: %d\n", linked->count);

  printf("item: %d\n", *(int *)linked_list_get_item(linked, 0));
  printf("item: %d\n", *(int *)linked_list_get_item(linked, 1));
  linked_list_iteration(linked, print_item);

  linked_list_remove_item(linked, &linked_item1);
  linked_list_add_item(linked, &linked_item3);
  linked_list_add_item(linked, &linked_item4);
  linked_list_iteration(linked, print_item);

  linked_list_destroy(linked);


  return 0;
}

void print_item(id item, int idx) {
  printf("item: %d, at index: %d \n", *(int *)item, idx);
}
