/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if(nums.length==0){
        return false;
    }
    for(let i=0;i<=nums.length;i++){
        for(let j=1;j<=nums.length-i;j++){
            if(nums[i]==nums[i+j]){
                return true; 
            }
        }
    }
    return false;
};