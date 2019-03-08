document.addEventListener("DOMContentLoaded", function (event) {
    console.log("初始DOM 加载并解析");
});
window.addEventListener("load", function (event) {
    console.log("window 所有资源加载完成");
});

document.onreadystatechange = function () {
    console.log(document.readyState)
    if (document.readyState === "complete") {
        console.log('初始DOM,加载解析完成')
    }
}
window.addEventListener("beforeunload", function (event) {
    console.log('即将关闭')
    event.returnValue = "\o/";
});
window.addEventListener('unload', function (event) {
    console.log('即将关闭1');
});
for(let i = 0; i < 10000; i++) {
    console.log(i)
}
setTimeout(() => {
    console.log('haha')
}, 3000)
