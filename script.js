function findMissingNumber(nums) {
    const n = nums.length;

    // Calculate the sum of the natural numbers up to n
    const expectedSum = (n * (n + 1)) / 2;

    // Calculate the sum of the elements in the array
    const actualSum = nums.reduce((acc, num) => acc + num, 0);

    // The missing number is the difference between the expected sum and the actual sum
    return expectedSum - actualSum;
}

// Example 1
const nums1 = [3, 0, 1];
console.log(findMissingNumber(nums1)); // Output: 2

// Example 2
const nums2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(findMissingNumber(nums2)); // Output: 8

// Example 3
const nums3 = [0, 1];
console.log(findMissingNumber(nums3)); // Output: 2
