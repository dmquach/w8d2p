// Your code here
Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]) 
    }
    return undefined
}

// console.log([1, 2, 3].myEach(function(acc, el = 1) {
//     console.log(acc + el)
//   }))

Array.prototype.myMap = function(callback) {
    let arr = []

    this.myEach(function(ele) {
        arr.push(callback(ele))
    })

    return arr

}

// console.log([1, 2, 3].myMap(function(acc, el = 1) {
//     return (acc + el)
//   }))

Array.prototype.myReduce = function(callback, initialValue) {
    acc = initialValue ? initialValue : 0;

    this.myEach(function(ele) {
        acc = callback(acc, ele);  
    })

    return acc
}

// console.log([1, 2, 3].myReduce(function(acc, el) {
//     return acc + el;
//   })) // => 6

console.log([1, 2, 3].myReduce(function(acc, el) {
    return acc + el;
  }, 25))