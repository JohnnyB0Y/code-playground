# 内联盒模型

* 内联元素（inline-level element）
  * 从定义看，内联特指“外在盒子”，display为inline、inline-table、inline-block 都是内联元素。
  * 从表现看，特征就是可以和文字在一行显示。浮动元素因为已经在文档流之外，所有不是内联元素。

#### 例1：
```html
<p>这是一行普通的文字，这里有个<em>em</em>标签。</p>
```
* 内容区域（content area）：文本选中的区域（或图片占据的区域）。
* 内联盒子（inline box）：
  * 含内联标签（span、a、em等）属于“内联盒子”。
  * 无内联标签包裹的，如文字则属于“匿名内联盒子”。
* 行框盒子（line box）：每一行就是一个“行框盒子”。
* 包含块（containing block）：p标签就是一个“包含块”盒子，由一行一行的“行框盒子”组成。
