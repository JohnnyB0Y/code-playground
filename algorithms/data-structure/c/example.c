#include <stdio.h>

int main() {
  printf("Hello, world.\n");

  // 打印第二个元素的第三个字符
  char *names[] = {"Miller", "Jones", "Anderson"};
  printf("%c\n", *(*(names+1)+2));
  printf("%c\n", names[1][2]);
}
