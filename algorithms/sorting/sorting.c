#include <stdio.h>
#include <string.h>

void copyArr(int *arr, int *toArr, int count);
void printArr(int *arr, int count);
void bubbleSort(int *arr, int count);
void selectionSort(int *arr, int count);

int main() {
  int arr[] = {1, 5, 6, 4, 2, 3, 9, 0};
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

  return 0;
}

// 冒泡排序
void bubbleSort(int *arr, int count) {
  if (count < 2) {
    return;
  }
  
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
  if (count < 2) {
    return;
  }

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
