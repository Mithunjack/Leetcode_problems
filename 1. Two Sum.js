/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 
//Solution O(n2)

var twoSum = function(nums, target) {
    let newArray = [];
    for(let i=0; i<=nums.length;i++){
        for(let j=i+1;j<=nums.length-1;j++){
             if(target == nums[i]+nums[j]){
                 newArray.push(i);
                 newArray.push(j);
                 break;
             }
        }
        if(newArray.length==2){
            break;
        }
    }
    return newArray;
};

//Solution O(n)

var twoSum = function(nums, target) {
	let hashMap = {};
	
	for(let i=0;i<nums.length;i++){
		if(target - nums[i]) in hashMap){
			return [hashMap[target - nums[i],i];
		}else {
			hashMap[nums[i]]=i;
		}
	}
};