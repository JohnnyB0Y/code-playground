//  sorting.c
//
//
//  Created by JohnnyB0Y on 2021/05/02.
//  Copyright © 2021 JohnnyB0Y. All rights reserved.


#include <stdio.h>
#include <string.h>
#include <stdbool.h>

void copyArr(int *arr, int *toArr, int count);
void printArr(int *arr, int count);
void bubbleSort(int *arr, int count);
void selectionSort(int *arr, int count);
void insertionSort(int *arr, int count);
void shellSort(int *arr, int count, unsigned int gap);
void mergeSort(int *arr, int count);

int main() {
  //  
  int arr[] = {1, 5, 6, 4, 2, 3, 9, 0, -1, 5};
  int count = sizeof(arr) / sizeof(arr[0]);
  printf("originSort: \n");
  printArr(arr, count);

  int arr1[count];
  copyArr(arr, arr1, count);
  bubbleSort(arr1, count);
  printf("bubbleSort: \n");
  printArr(arr1, count);

  int arr2[count];
  copyArr(arr, arr2, count);
  selectionSort(arr2, count);
  printf("selectionSort: \n");
  printArr(arr2, count);

  int arr3[count];
  copyArr(arr, arr3, count);
  insertionSort(arr3, count);
  printf("insertionSort: \n");
  printArr(arr3, count);

  int arr4[count];
  copyArr(arr, arr4, count);
  shellSort(arr4, count, 2);
  printf("shellSort: \n");
  printArr(arr4, count);

  int arr5[count];
  copyArr(arr, arr5, count);
  mergeSort(arr5, count);
  printf("mergeSort: \n");
  printArr(arr5, count);

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
    int idx = i;
    for (int j = i + 1; j < count; j++) {
      if (arr[idx] > arr[j]) {
        idx = j;
      }
    }
    if (idx != i) {
      int temp = arr[idx];
      arr[idx] = arr[i];
      arr[i] = temp;
    }
  }
}

// 插入排序
void insertionSort(int *arr, int count) {
  if (count < 2) return;

  for (int i = 1; i < count; i++) {
    int temp = arr[i];
    int idx = -1;
    for (int j = i - 1; j >= 0; j--) {
      if (temp < arr[j]) {
        idx = j;
        arr[j+1] = arr[j];
      }
    }
    if (idx != -1) {
      arr[idx] = temp;
    }
  }
}

// 希尔排序
void shellSort(int *arr, int count, unsigned int gap) {
  if (count < 2 || gap < 1 || gap > count) return;

  // 分组
  int num_of_group = count / gap;
  while (num_of_group > 0) {
    for (int i = 0; i < num_of_group; i++) {
      for (int j = num_of_group; j < count; j += num_of_group) { // 从第二个开始
        int temp = arr[j];
        int idx = -1;
        for (int k = j - num_of_group; k >= 0; k -= num_of_group) {
          if (temp < arr[k]) {
            idx = k;
            arr[k+num_of_group] = arr[k];
          }
        }
        if (idx != -1) {
          arr[idx] = temp;
        }
      }
    }
    num_of_group = num_of_group / gap;
  }

  // count = 10; gap = 2; num = 5; 
  // [0, 5], [1, 6], [2, 7], [3, 8], [4, 9]
  // num = 5 / gap = 2
  // [0, 2, 4, 6, 8], [1, 3, 5, 7, 9]
  // num = 2 / gap = 1
  // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  // count = 10; gap = 3; num = 3; 
  // [0, 3, 6], [1, 4, 7], [2, 5, 8]
  // num = 3 / gap = 1
  // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  
}

// 归并排序
void mergeSort(int *arr, int count) {
  if (count < 2) return;
  // 两两分组 loop = count / 2;
  // 双双分组 loop = loop / 2;
  
  int group = 1; // 一组元素个数
  int stop = false;
  while ( stop == false ) {

    int loop = count / (group * 2);
    int tmp[group * 2];
    for (int i = 0; i < loop; ++i) {
      int minIdx = 0;
      int start = i * group * 2; // 下一对开始
      int idx1 = start;
      int idx2 = start + group;
      for (int j = 0; j < group * 2; ++j) {
        if ( idx1 >= start + group) {
          minIdx = idx2++;
        }
        else if ( idx2 >= start + group * 2 ) {
          minIdx = idx1++;
        }
        else if ( arr[idx1] > arr[idx2] ) {
          minIdx = idx2++;
        }
        else {
          minIdx = idx1++;
        }
        tmp[j] = arr[minIdx];
      }
      for (int j = 0; j < group * 2; ++j) {
        arr[start + j] = tmp[j];
      }
    }

    printArr(arr, count);

    group *= 2;
    if (group >= count / 2) {
      stop = true;
    }
  }

  printf("%d ---", group);
  insertionSort(arr, count);
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
