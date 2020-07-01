function largestSubarraySum(array){
    let largestSum = 0
    let sum = array[0]

    for (let i = 1; i < array.length; i++){
        sum = Math.max(array[i], sum + array[i])
        if (largestSum < sum) {
            largestSum = sum
        }
    }

    return largestSum
}