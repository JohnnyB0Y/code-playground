# 并发与并行
- 从编程角度看，并发指的是能让某个函数独立于其他函数运行的能力。
- 从编程角度看，并行指的是多核处理器同时运行多个独立函数的情况。

并发程序的实现手段：
- 消息传递 Message Passing
  - [顺序进程（过程）间通信 Communicating Sequential Processes (CSP)](https://www.youtube.com/watch?v=Z8ZpWVuEx8c)
  - [Actor](https://blog.csdn.net/sixdaycoder/article/details/90751972)
- 共享内存 Shared Memory
  - 锁 Locks
  - 条件变量 Condition Variable
  - 信号量 Semaphore
  - ......

## Go语言的协程
- 由于现代计算机是一个并行的机器，Go语言提供了基于CSP的并发特性支持。Go语言的动态栈使得 轻量级线程goroutine的初始栈可以很小，因此，创建一个goroutine的代价很小，创建百万级的 goroutine完全是可行的。

- 当一个函数创建为 goroutine 时，Go会将其视为一个独立的工作单元。
- 这个单元被调度到可用的逻辑处理器上执行。
- Go运行时的调度器能够管理被创建的所有 goroutine并为其分配执行时间。
- 这个调度在用户态进行，Go把系统的线程与语言运行时的逻辑处理器绑定，并在逻辑处理器上运行goroutine。
- 调度器可以在任何时间，控制任何goroutine 运行在任何逻辑处理器上。
- 在1.5版本之前，Go默认给整个应用程序只分配一个逻辑处理器。
- 在1.5版本及之后，Go默认会为每个可用的物理处理器分配一个逻辑处理器。
- ...
- 如果创建一个 goroutine并准备运行，这个goroutine就会被放到调度器的全局运行队列中。
- 之后，调度器会将这些队列中的 goroutine分配给逻辑处理器，并放到这个逻辑处理器对应的本地运行队列中。
- 本地运行队列中的 goroutine会一直等待直到自己被分配的逻辑处理器执行。
