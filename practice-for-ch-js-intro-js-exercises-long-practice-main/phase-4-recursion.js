// Your code here
// const range = function(start, end) {
//     if (start === end) {
//         return [start]
//     }
//     let arr = range(start + 1, end)  // range(7, 10) -> [7,8,9,10],
//     arr.unshift(start)
//     return arr
// }


// function range(start, end) {
//     if (start === end) {
//         return [start]
//     }
//     let arr = range(start + 1, end)  // range(7, 10) -> [7,8,9,10],
//     arr.unshift(start)
//     return arr
// }

const range = (start, end) => {
    if (start === end) {
        return [start]
    }
    let arr = range(start + 1, end)  // range(7, 10) -> [7,8,9,10],
    arr.unshift(start)
    return arr
}

// console.log(range(1, 3)) // [1,2,3,4,5,6,7,8,9,10]

const sumRec = function(arr) {
    if (arr.length === 1) {
        return arr[0]
    }
    const lastVal = arr.pop()
    let sum = sumRec(arr)
    return lastVal + sum
}

// console.log(sumRec([1,2,3, 10])) // 6

const exponent1 = function(base, exp) {
    if (exp === 0) return 1
    let val = exponent1(base, exp - 1)
    return val * base
}

const exponent2 = function(base, exp) {
    if (exp === 0) return 1
    if (exp === 1) return base
    let val;
    if (exp % 2 === 0) {
        val = exponent1(base, exp / 2)**2
    } else {
        val = exponent1(base, (exp - 1) / 2)**2
    }
    return val * base
}

// console.log(exponent2(2, 3))
