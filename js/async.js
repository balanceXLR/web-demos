async function async1() {
    console.log("a");
    await  async2();
    console.log("b");
}

async  function async2() {
    console.log( 'c');
}

console.log("d");

setTimeout(function () {
    console.log("e");
},0);

async1();

new Promise(function (resolve) {
    console.log("x");
    resolve();
}).then(function () {
    console.log("y");
});

console.log('z');
