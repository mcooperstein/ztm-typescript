// You are developing a small statistics module that needs to calculate the
// average and median of an array of numbers. The array represents the scores
// of students in an exam. You will use arrow functions to find the average and
// median of these scores.
//
// Requirements:
// - Use an arrow function to calculate the average of the numbers in the array.
// - Use an arrow function to calculate the median of the numbers in the array.
// - The array may have an even or odd number of elements, so handle both cases for the median.
// - Print out the average and the median of the scores.

import { strict as assert } from "assert";

const scores: number[] = [85, 92, 88, 74, 91, 77, 89, 95];

// Replace the 0 with a function call to your arrow functions.
const findAverage = (arr:number[]):number => {
    let totalSum = 0;

    for(let i=0; i<arr.length;i++) {
        totalSum+=arr[i];
    }
    return (totalSum/arr.length)
};
const findMedian = (arr:number[]):number => {
    const sorted = arr.sort((a,b) => a-b);
    const midIndex = Math.floor(arr.length/2)
    if(arr.length%2===0) {
        return (sorted[midIndex] + sorted[midIndex -1])/2;
    } else {
        return sorted[midIndex]
    }
};

const average = findAverage(scores);
const median = findMedian(scores);

console.log('average', average);
console.log('median', median);

// Test cases. These will confirm if your answer is correct.
assert.equal(average, 86.375);
assert.equal(median, 88.5);


