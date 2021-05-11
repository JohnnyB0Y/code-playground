//  base.h
//
//
//  Created by JohnnyB0Y on 2021/05/11.
//  Copyright © 2021 JohnnyB0Y. All rights reserved.

#include <stdbool.h>

#ifndef BASE_H
#define BASE_H

typedef void * id;

typedef void (*iteration_func)(id item, int idx);

typedef bool (*compare_func)(id val1, id val2);

#endif
