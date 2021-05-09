//  base.c
//
//
//  Created by JohnnyB0Y on 2021/05/06.
//  Copyright © 2021 JohnnyB0Y. All rights reserved.

#include <stdbool.h>

typedef void * id;

typedef void (*iteration_func)(id item, int idx);

typedef bool (*compare_func)(id val1, id val2);
