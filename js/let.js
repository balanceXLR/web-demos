for (let i = 0; i < 3; i++) {
    console.log(i)
    setTimeout(()=> {
        console.log(i)
    }, 1000)
}
// let产生块级作用域，使setTimeout中的i保留了当时的i值
