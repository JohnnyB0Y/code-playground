"use strict";

function contentText() {
  let content = document.getElementById("content").value;
  if (content.trim().length <= 0) {
    throw new Error("输入点什么吧。");
  }
  return content;
}

function calculateStringLength(content) {
  if (typeof content !== 'string') {
    throw new Error("统计的内容不是字符串");
  }

  let count = 0;
  for (let i = 0; i < content.length; i ++) {
    const c = content.charAt(i);
    if (escape(c).length > 4) {
      count += 2;
    } else if (c != "\r") {
      count ++; 
    }
  }
  return count;
}

function confirmBtnClick() {
  try {
    let content = contentText();
    console.log(content);
    let count = calculateStringLength(content);
    console.log(count);
    alert(`"${content}" 有 ${count} 个字符。`);
  } catch (error) {
    alert(error);
  }
}

module.exports = {
  contentText,
  calculateStringLength,
  confirmBtnClick,
}
