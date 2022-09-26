
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 var twoSum = function(nums, target) {
    let result = 0;
    for(let i=0; i<nums.length ; i++){
        for(let j=i+1; j<nums.length ; j++){
            result = nums[i]+nums[j]
            if (result == target){
                return [i,j]
               break 
            }
        }
        
    }
};
let out = twoSum([3,3] , 6);
console.log(out)
// console.log(twosum([2,7,11,15],9))
