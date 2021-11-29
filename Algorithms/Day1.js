// Here, a balance index is ON an index, not BETWEEN indicies. Return the balance index where sums are equeal on either side (exclude its own value). Return -1 if none exist.
// Example 1: [-2, 5, 7, 0, 3]  --> 2 
// The balance index is 2 because on either side of that index the sums are equal:  [-2, 5,  |7| , 0, 3] --> -2+5 == 0+3
// Example 2: [9, 9]  -->  -1
// There is no balance index because there are fewer than 3 indices! As a result, we return -1 to maintain a consistent datatype

// function balanceIndex(arr) {
//     var sumBefore = 0;
//     var sumAfter = 0;
//     for (i=0; i<arr.length; i++) {
//         for (j=arr.length-1; j>0; j--) {
//             sumAfter = arr[j] + arr[j-1];
//             sumBefore = arr[i] + arr[i+1];
//         }
//     }
//     if (sumAfter == sumBefore) {
//         return 
//     }
// }

function balanceIndex(arr) {
    var sumTotal = 0
    for (let i=0; i<arr.length; i++) {
        sumTotal += arr[i];
    }
    var sumWorking = 0;
    for (let j=0; j<arr.length; j++) {
        sumTotal = sumTotal - arr[j];
        if (sumTotal == sumWorking) {
            return j;
        }
        sumWorking += arr[j];
    }
    return -1;
}

console.log(balanceIndex([-2, 5, 7, 0, 3])); // 2
console.log(balanceIndex([9, 9])); // -1


// Write a function that returns whether the given array has a balance point between indices, where one side's sum is equal to the other's. 
// Example: [1,2,3,4,10] --> True
// the belenace point happens b/w indices 3 & 4 where the left side equals the right:  [1, 2, 3, 4  |  10]  ==> 1+2+3+4 = 10

function balancePoint(arr) {
    var sumTotal = 0
    for (let i=0; i<arr.length; i++) {
        sumTotal += arr[i];
    }
    var sumWorking = 0;
    for (let j=0; j<arr.length; j++) {
        sumTotal = sumTotal - arr[j];
        if (sumTotal == sumWorking) {
            return true;
        }
        sumWorking += arr[j];
    }
    return false;
}
console.log(balancePoint([4,3,7,4,10])); // true
console.log(balancePoint([4,3,7,4,11,2])); // false