#include <stdio.h>

int main() {
  printf("Hello, world.\n");

  // 打印第二个元素的第三个字符
  char *names[] = {"Miller", "Jones", "Anderson"};
  printf("%c\n", *(*(names+1)+2));
  printf("%c\n", names[1][2]);

  /**
   * 如何阅读声明，倒过来念：
   * 
   * const int *pci;
   * 
   * pci 是一个变量
   * pci 是一个指针变量
   * pci 是一个指向整数的指针变量
   * pci 是一个指向整数常量的指针变量
  */

  /**
   * 格式说明符
   * %x 将值显示为十六进制数
   * %o 将值显示为八进制数
   * %p 将值显示为地址专用的格式，通常为十六进制
   * %u 将值显示为无符号整数
  */
  int num = 0;
  int *pi = &num;
  printf("Address of num: %p; Value: %d\n", &num, num);
  printf("Address of pi : %p; Value: %p\n", &pi, pi);

  /**
   * 指向函数的指针
   * void (*foo)();
  */
  int (*foo)(const char *, ...);
  foo = printf;
  foo("Call printf func.\n");

  foo("%d\n", sizeof(int));
  foo("%d\n", sizeof(int *));
  
  /**
   * 使用 intptr_t 和 uintptr_t 类型来存放指针地址。
   * 对于把指针转化成整数形式来说很有用。
   * 
   * int num;
   * intptr_t *pi = &num;
  */

  /**
   * 指针算数运算
   * 给指针加上整数，相当于 加上 这个整数和指针数据类型对应字节数的乘积。
   * 给指针减去整数，相当于 减去 这个整数和指针数据类型对应字节数的乘积。
  */
}
