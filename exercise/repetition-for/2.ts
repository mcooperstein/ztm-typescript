// Implement a sorting algorithm of your choosing to sort the provided array.
// Good introductory sorting algorithms are bubble sort and insertion sort.
//
// To confirm that your algorithm works properly, perform these steps:
// 1. Run your sorting algorithm on the `nums` array
// 2. Assert that the sorted array is [1, 2, 3, 4, 5]
//
import { strict as assert } from "assert";

const nums = [5, 4, 7, 3, 2, 1, 6];


    function sortArray(arr:number[]): number[] {
        for(let i=0; i<arr.length -1; i++) {
            let minIndex = i;

            for(let j=i+1; j<arr.length;j++) {
                if(arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }

            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }    
    return arr;
}

sortArray(nums);

assert.deepEqual(nums, [1,2,3,4,5,6,7]);
console.log(nums);