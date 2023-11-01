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


const fib = function(n){
    if (n === 1) return [0];
    if (n === 2) return [0,1];

    let prevArray = fib(n-1)
    prevArray.push(prevArray[prevArray.length - 1] + prevArray[prevArray.length - 2])
    // console.log(arr)
    return prevArray
}

// console.log(fib(5))
// // fib(5)


const deep_dup = function(arr) {
    if (arr.length === 1){
        return [arr[0]]
    }

    let newVal = arr.pop()
    let newArray = deep_dup(arr)
    newArray.push(newVal)
    return newArray

}

// arr = [2,6,3,3,6,5]

// console.log(deep_dup(arr) === arr)


const bSearch = function(arr, target){
    if (arr.length === 0) return -1

    let midPoint = Math.floor(arr.length / 2.0);
    
    if (arr[midPoint] > target ){
        return bSearch(arr.slice(0, midPoint), target);
    } else if ( arr[midPoint] < target ) {
        const res = bSearch(arr.slice(midPoint + 1), target);
        if (res === -1) return -1
        else return res + midPoint + 1
    } else {
        return midPoint 
    }

}

// arr = [1,2,3,4,6,7,10,12,15,17]

// console.log(bSearch(arr, 15))

const mergeSort = function(arr){
    if (arr.length === 1) return [arr[0]]

    let midPoint = Math.floor(arr.length / 2)

    let left = mergeSort(arr.slice(0, midPoint))
    let right = mergeSort(arr.slice(midPoint))


    return merge(left, right)

}

const merge = function(left, right){
    let arr = [];

    while (left.length && right.length) {
        if (left[0] > right[0]){
            arr.push(right.shift());
        } else {
            arr.push(left.shift());
        }
    }

    arr.concat(left)
    arr.concat(right)

    return arr
}

arr = [3,5,2,4,10,6,12,20,16]

console.log(mergeSort(arr))