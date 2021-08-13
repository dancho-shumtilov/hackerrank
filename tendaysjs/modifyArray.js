const nums = [1, 2, 3, 4, 5];

function modifyArray(nums) {
    console.log(nums);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]%2 == 0) {
            nums[i] *= 2;
            nums[i] = nums[i]
        }
        else {
            nums[i] *= 3;
            nums[i] = nums[i]
        }            
    }
    return nums
}

modifyArray(nums)