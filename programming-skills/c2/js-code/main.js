"use strict";

function username() {
  let username = document.getElementById("username").value;
  if (username.trim().length <= 0) {
    throw new Error("请输入你的名字");
  }
  return username;
}

function greetings(username) {
  return "你好！" + username + "。";
}

function alertGreetings(greetings) {
  alert(greetings);
}

function replyBtnClick() {
  try {
    alertGreetings(greetings(username()));
  } catch (error) {
    alert(error);
  }
}

module.exports = {
  username,
  greetings,
  alertGreetings,
  replyBtnClick,
}
