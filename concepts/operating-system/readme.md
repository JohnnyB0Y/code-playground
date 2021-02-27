# 抽象：进程

## （process）进程
进程的非正式定义：进程就是运行中的程序；

## （virtualizing）虚拟化
操作系统通过虚拟化CPU，让一个进程只运行一个时间片，然后切换到其他进程，最终达到同时运行多个程序的假象。

## （time sharing）时分共享(分时系统)
是操作系统共享资源所使用的最基本技术之一；
通过允许资源由一个实体使用一小段时间，然后由另一个实体使用一小段时间，如此下去，所谓的资源（例如，CPU或网络链接）可以被许多人共享；
时分共享的自然对应技术是空分共享，资源在空间上被划分给希望使用它的人。例如，磁盘空间自然是一个空分共享资源，因为一旦将块分配给文件，在用户删除文件之前，不可能将它分配给其他文件。

（mechanism） 机制

（context switch）上下文切换

（scheduling policy）调度策略

（machine state）机器状态

（address space）地址空间

## （Program Counter，PC）程序计数器
一种非常特殊的寄存器；
也称为指令指针，Instruction Pointer或IP；
告诉我们程序当前正在执行哪些指令；
类似，栈指针（stack pointer）和相关的帧指针（frame pointer）用于管理函数参数栈、局部变量和返回地址。

## 进程 API 需求
- 创建（create）：
在shell中键入命令或双击应用程序图标时，会调用操作系统来创建新进程，运行指定的程序。
- 销毁（destroy）：
强制销毁（退出）进程的接口。
- 等待（wait）：
有时等待进程停止运行时有用的。
- 其他控制（miscellaneous control）：
例如，暂停进程（停止运行一段时间），然后恢复（继续运行）。
- 状态（status）：
获取进程的一些状态信息，例如，运行了多长时间，或者处于什么状态。

## 进程状态
- 运行（running）正在处理器上运行，执行指令。
- 就绪（ready）已准备好运行。
- 阻塞（blocked）执行了某种操作，直到发生其他事件时才会继续运行。例如，发起I/O请求，就会被阻塞。

（scheduled）调度

（descheduled）取消调度

（interrupt）中断

## 数据结构
```C
// the registers xv6 will save and restore
// to stop and subsequently restart a process
struct context {
  int eip;
  int esp;
  int ebx;
  int ecx;
  int edx;
  int esi;
  int edi;
  int ebp;
};
// the different states a process can be in 
enum proc_state {
  UNUSED, 
  EMBRYO, 
  SLEEPING, 
  RUNNABLE, 
  RUNNING, 
  ZOMBIE
};
// the information xv6 tracks about each process
// including its register context and state
struct proc {
  char *mem; // Start of process memory
  uint sz; // Size of process memory
  char *kstack; // Bottom of kemel stack for this process
  enum proc_state state; // Process state
  int pid; //Process ID
  struct proc *parent; // Parent process
  void *chan; // If non-zero, have been killed
  struct file *ofile[NOFILE]; // Open files
  struct inode *cwd; // Current diretory
  struct context context; // Switch here to run process
  struct trapframe *tf; // Trap frame for the current interrupt
}

```

## 进程列表（process list）
便于跟踪系统中正在运行的所有程序；
some time，人们包存储关于进程信息的个体结构称为进程控制块（Process Control Block，PCB）。
