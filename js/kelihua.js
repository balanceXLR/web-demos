var adder = function() {
    var _args = []
    return function() {
        console.log(arguments)
        if(arguments.length == 0) {
            return _args.reduce(function(a, b) {
                return a + b
            })
        }
        // [].push.apply(_args, [].slice.call(arguments))
        for(let i in arguments) {
            _args.push(arguments[i])
        }
        return arguments.callee
    }
}
var sum = adder()
sum(1,2)
sum(3)
console.log(sum()) 