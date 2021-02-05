'use strict';

// 用户输入校验，必须是数字，且不能是负数；
function verifyPositiveNumber(num) {
  if (num === NaN) return false;

  if (typeof num === 'number') {
    return num >= 0;

  } else if (typeof num === 'string') {

    // 去除空格、制表符、换页符、回车符和换行符。
    if (num.trim().length <= 0) return false;

    // 转换是否成功
    num = Number(num);
    if (num === NaN) return false;

    return num >= 0;
  }

  return false;
}

// 小费计算；
function calculateTip(cost, rate) {
  if (verifyPositiveNumber(cost) && verifyPositiveNumber(rate)) {
    cost = Number(cost);
    rate = Number(rate);
    return cost * rate * 0.01;
  } else {
    throw new Error("参数错误");
  }
}

// 总费用
function calculateTotal(cost, rate) {
  return calculateTip(cost, rate) + Number(cost);
}

// 计算后的结果显示到屏幕，有小数点取小数点后两位；
function calculateBtnClick() {
  // 取出费用
  let costField = document.getElementById("cost");
  // 取出小费费率
  let rateField = document.getElementById("rate");

  // 计算
  try {
    let rate = calculateTip(costField.value, rateField.value);
    let total = calculateTotal(costField.value, rateField.value);
    // 更新界面
    let resultLabel = document.getElementById("result");
    resultLabel.innerText = `小费:${rate} 总费用：${total}`;
  } catch (error) {
    alert("请输入整数或小数");
  }
}

module.exports = {
  verifyPositiveNumber,
  calculateBtnClick,
  calculateTip,
  calculateTotal,
};
