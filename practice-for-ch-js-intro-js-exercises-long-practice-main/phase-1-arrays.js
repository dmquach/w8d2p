// Your code here
Array.prototype.uniq = function () {
    let arr = []
    this.forEach((num) => {
        if (!arr.includes(num)) {
            arr.push(num)
        }
    })
    return arr
}

// console.log([1,2,2,3,3,3].uniq()) // => [1,2,3]

Array.prototype.twoSum = function() {
    let arrays = []
    // for (let i = 0; i < this.length; i++) {
    //     for (let j = i+1; j < this.length; j++) {
    //         if(this[i] + this[j] === 0) arrays.push([i, j])
    //     }
    // }
    const hash = {} // value is the key, index is the value
    for (let i = 0; i < this.length; i++) {
        let zeroSum = this[i] * -1
        if (hash[zeroSum] || hash[zeroSum] === 0) {
            arrays.push([hash[zeroSum], i])
        }
        hash[this[i]] = i
    }
    return arrays
}

// console.log([-1, 0, 2, -2, 1].twoSum()) // => [[0,4] [2,3]]

Array.prototype.transpose = function () {
    let arr = []
    // outer arrays
    for (let i = 0; i < this.length; i++) {
        // itearate through singular array
        let subArr = []
        for (let j = 0; j < this.length; j++) {
            subArr.push(this[j][i])
            if (subArr.length === 3) {
                arr.push(subArr)
            }
        }
    }
    return arr
}

console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose()) // => [[0,3,6], [1,4,7], [2,5,8]]
