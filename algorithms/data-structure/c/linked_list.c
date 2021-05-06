//  linked_list.c
//
//
//  Created by JohnnyB0Y on 2021/05/06.
//  Copyright © 2021 JohnnyB0Y. All rights reserved.

#include <stdlib.h>
#include <stdio.h>
#include "base.c"

struct node {
  struct node *next;
  id data;
};

struct doubly_node {
  struct doubly_node *next;
  struct doubly_node *prev;
  id data;
};

typedef struct node * node_t;
typedef struct doubly_node * doubly_node_t;

struct linked_list {
  int count;
  node_t head;
  node_t last;
};

struct doubly_linked_list {

};

typedef struct linked_list * linked_list_t;
typedef struct doubly_linked_list * doubly_linked_list_t;

linked_list_t linked_list_malloc(void) {
  linked_list_t self = malloc(sizeof(struct linked_list));
  self->count = 0;
  self->head = malloc(sizeof(struct node));
  self->last = self->head;
  return self;
}

void linked_list_destroy(linked_list_t self) {
  node_t node = self->head->next;
  node_t temp = NULL;
  for (int i = 0; i < self->count; i++) {
    temp = node;
    node = temp->next;
    free(temp);
  }
  free(self->head);
  free(self);
}

void linked_list_add_item(linked_list_t self, id item) {
  node_t node = malloc(sizeof(struct node));
  node->data = item;
  self->last->next = node;
  self->last = node;
  self->count++;
}

void linked_list_remove_item(linked_list_t self, id item) {
  node_t node = self->head->next;
  node_t prev = self->head;
  while (node) {
    if (node->data == item) { // find it
      if (node == self->last) {
        self->last = prev;
      }
      prev->next = node->next;
      self->count--;
      free(node);
      return;
    }
    prev = node;
    node = node->next;
  }
}

id linked_list_get_item(linked_list_t self, int index) {
  node_t node = self->head->next;
  for (int i = 0; i < index; i++) {
    node = node->next;
  }
  return node->data;
}

void linked_list_iteration(linked_list_t self, iteration_func func) {
  node_t node = self->head;
  for (int i = 0; i < self->count; i++) {
    func(node->next->data, i);
    node = node->next;
  }
}
