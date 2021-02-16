
let FunConstructor = (...args) => {
    console.log('lll');
    // 2. 箭头函数不绑定arguments，取而代之用rest参数...解决
    console.log(arguments)
    console.log(args)
}

// 1.箭头函数不能用new
// let fc = new FunConstructor();

FunConstructor(3,5,6)


// 3.没有原型属性
console.log(FunConstructor.prototype)

// 4. 捕获其所在上下文的 this 值，作为自己的 this 值


