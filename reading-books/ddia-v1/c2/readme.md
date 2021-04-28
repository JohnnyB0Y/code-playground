# 数据模型与查询语言
- 数据模型可能是开发软件最重要的部分，它们不仅对软件的编写方式，而且还对如何思考待解决的问题都有深远的影响。
- 大多数应用程序是通过一层一层叠加的数据模型来构建的。每一层都面临的关键问题是：如何将其用下一层来表示？
  - 观测现实世界，通过对象或数据结构，以及操作这些数据结构的API来对其建模。
  - 但需要存储这些数据结构时，可以采用通用数据模型来表示。例如，JSON或 XML文档、关系数据库中的表或图模型。
  - 数据库工程师接着决定用何种内存、磁盘或网络的字节格式来表示上述 JSON/XML/关系/图形数据。数据表示需要支持多种方式的查询、搜索、操作和处理数据。
  - 在更下一层，硬件工程师则需要考虑用电流、光脉冲、磁场等来表示字节。

### 关系模型与文档模型