# v8

## （Compiler）编译器
- 编译型语言在程序执行之前，需要经过编译器的编译过程，并且编译之后会直接保留机器能读懂的二进制文件。
- 这样每次运行程序时，都可以直接运行该二进制文件，而不需要再次重新编译代码。
```JS
源代码-> [词法分析、语法分析]-> AST-> [词义分析]-> 中间代码-> [代码优化]->二进制文件 -> [直接执行]-> 执行
```

- 在编译型语言的编译过程中，编译器首先会依次对源代码进行词法分析、语法分析，生成抽象语法树（AST），然后是优化代码，最后再生成处理器能够理解的机器码。
如果编译成功，将会生成一个可执行的文件。但如果编译过程发生了语法或者其他的错误，那么编译器就会抛出异常，最后的二进制文件也不会生成成功。

## （Intepreter）解析器
- 解析型语言编写的程序，在每次运行时都需要通过解析器对程序进行动态解析和执行。
```JS
源代码-> [词法分析、语法分析]-> AST-> [词义分析]-> 中间代码-> [解析执行] ->执行
```
- 在解释型语言的解释过程中，同样解释器也会对源代码进行词法分析、语法分析，并生成抽象语法树（AST），不过它会再基于抽象语法树生成字节码，最后再根据字节码来执行程序、输出结果。

## （AST）抽象语法树

```JS
// 代码片段
var myName = 'js'
function foo() {
  return 24
}
myName = 'ts'
foo()

// 抽象语法树
Program
  - VariableDeclaration
    - VariableDeclarator
      - myName
      - 'js'
  - function foo()
    - BlockStatement
      - ReturnStatement
        - 24
  - ExpressionStateme
    - =
      - myName
      - 'ts'
  - ExpressionStateme
    - CallExpression
      - foo
      - arguments
```




## （Bytecode）字节码

## （JIT）即时编译

