let id = setInterval ( () => {
    console.log("Hello World");
}, 2000)

setTimeout(() => {
    clearInterval(id);
    console.log("Clear interval run");
},10000);