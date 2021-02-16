let arr = [3.7,0,6,8,5]

let result = arr.every(num => {
    return num >=0
})
// some
console.log(result)

let arr1 = [
    {
        name: "ajanma"
    },
    {
        name: 16
    }
]

let result1 = arr1.map(item => {
    return ({
        ...item,
        hobby: "baket"
    })
})

console.log(result1)
    