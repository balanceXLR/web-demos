var name = 'window'
// this指向当前执行函数
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