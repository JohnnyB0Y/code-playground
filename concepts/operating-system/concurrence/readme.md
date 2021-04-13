# 并发与并行
- 从编程角度看，并发指的是能让某个函数独立于其他函数运行的能力。
- 从编程角度看，并行指的是多核处理器同时运行多个独立函数的情况。

#### 并发程序的编程控制手段：
###### 消息传递 Message Passing
- [顺序进程（过程）间通信 Communicating Sequential Processes (CSP)](https://www.youtube.com/watch?v=Z8ZpWVuEx8c)
- [Actor](https://blog.csdn.net/sixdaycoder/article/details/90751972)
###### 共享内存 Shared Memory
- 锁 Locks
- 条件变量 Condition Variable
- 信号量 Semaphore
- ......

#### 并发程序引发的问题：
###### 资源竞争问题：
- 互斥锁 Mutex
  - 易出现问题：
    - Lock / Unlock 不是成对出现。
    - Copy 已使用的 Mutex。被使用的锁包含状态，拷贝使用容易出错。
    - 重入。在当前锁的临界区内请求当前锁。（某些支持重入锁（递归锁）的语言除外，例如Java）
    - 死锁。两个或以上的进程或线程，在执行中因争夺共享资源而进入了一种互相等待的状态。
- 读写锁 RWMutex

###### 任务编排问题：
- 条件变量


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

## 概念术语
- 并发 concurrent
- 并行 parallel
- 死锁 deadlock
- 活锁 livelock
- 饿死（饥饿）resource starvation
- 临界区 critical section
  - 一段被保护起来的程序，叫做临界区。或者说是被保护的一个整体的一组共享资源。
