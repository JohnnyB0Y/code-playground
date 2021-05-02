//  sorting.c
//
//
//  Created by JohnnyB0Y on 2021/05/02.
//  Copyright © 2021 JohnnyB0Y. All rights reserved.


#include <stdio.h>
#include <string.h>

void copyArr(int *arr, int *toArr, int count);
void printArr(int *arr, int count);
void bubbleSort(int *arr, int count);
void selectionSort(int *arr, int count);
void insertionSort(int *arr, int count);

int main() {
  int arr[] = {1, 5, 6, 4, 2, 3, 9, 0, -1};
  int count = sizeof(arr) / sizeof(arr[0]);
  printArr(arr, count);

  int arr1[count];
  copyArr(arr, arr1, count);
  bubbleSort(arr1, count);
  printArr(arr1, count);

  int arr2[count];
  copyArr(arr, arr2, count);
  bubbleSort(arr2, count);
  printArr(arr2, count);

  int arr3[count];
  copyArr(arr, arr3, count);
  bubbleSort(arr3, count);
  printArr(arr3, count);

  return 0;
}

// 冒泡排序
void bubbleSort(int *arr, int count) {
  if (count < 2) return;
  
  for (int i = count - 1; i >= 0; i--) {
    for (int j = 0; j < i; j++) {
      if (arr[j] > arr[j+1] ) {
        int temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
}

// 选择排序
void selectionSort(int *arr, int count) {
  if (count < 2) return;

  for (int i = 0; i < count; i++) {
    int min = arr[i];
    for (int j = i + 1; j < count; j++) {
      if (min > arr[j]) {
        min = arr[j];
      }
    }
    arr[i] = min;
  }
}

// 插入排序
void insertionSort(int *arr, int count) {
  if (count < 2) return;

  for (int i = 1; i < count; i++) {
    int temp = arr[i];
    int idx = -1;
    for (int j = i - 1; j >= 0; j--) {
      idx = j;
      if (temp < arr[j]) {
        arr[j+1] = arr[j];
      }
    }
    if (idx != -1) {
      arr[idx] = temp;
    }
  }
}

// private
void copyArr(int *arr, int *toArr, int count) {
  for (int i = 0; i < count; i++) {
    toArr[i] = arr[i];
  }
}

void printArr(int *arr, int count) {
  for (int i = 0; i < count; i++) {
    printf("%d, ", arr[i]);
  }
  printf("\n");
}
