// this指向当前执行函数
var name = 'window'
var obj = {
    name: 'my',
    getName: function () {
        console.log(this.name)
        return function () {
            return this.name
        }
    }
}
console.log(obj.getName()())


// num标量被保存在内存中
var countNumber = (function () {
    var num = 0;
    return function () {
        console.log(++num)
        return num;
    };
})();
countNumber()
countNumber()

// 一个简单的例子
function f1() {
    var n = 999;

    function f2() {
        alert(n);
    }
    return f2;
}
var result = f1();
result(); // 弹出999


// 保存变量在内存中
function f1() {
    var n = 999;
    nAdd = function () {
        n += 1
    }

    function f2() {
        // alert(n);
        console.log(n)
    }
    return f2;
}
var result = f1();
result(); // 999
nAdd();
result(); // 1000
var result2 = f1()
result2()
result()

// 块级作用域
var arr = []
for (var i = 0; i < 10; i++) {
    arr[i] = function () {
        return i
    }
}
console.log(i)
for (var j = 0; j < 10; j++) {
    console.log(arr[j]())
}

// 异步回调
var arr2 = []
for (var k = 0; k < 10; k ++) {
    setTimeout(() => {
        console.log(k)
    }, 1000)
}