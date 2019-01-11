setTimeout(()=> {
    console.log('a')
}, 0)
setImmediate(()=> {
    console.log('b')
})
this.nextTick(() => {
    console.log('c')
})
new Promise((resolve, reject) => {
    resolve('d')
}).then(res => {
    console.log(res)
})