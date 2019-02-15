// 插件把bgc方法添加到jq的原型上
$.fn.bgc = function(color){

    // this  ==>  jq的实例对象, 谁调用该方法，this就指向谁
    // console.log(this);

    // this 已经是个jq对象了，没必要放进$()里面去了
    this.css("backgroundColor", color);

    // 目的： 为了实现链式编程
    // 链式编程的原理： 就是返回当前的jq对象
    return this;
}
