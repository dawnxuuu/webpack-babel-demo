const compose = (argFirst, argReverse) => arr => argFirst(argReverse(arr))
const first = arr => arr[0]
const reverse = arr => arr.reverse()
const last = compose(first, reverse)
const res = last([1, 2, 3])
console.log(res)
