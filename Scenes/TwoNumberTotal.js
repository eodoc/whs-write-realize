/**
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]
 */

function fn (nums, target) {
  var diff = new Map()
  var size = nums.length
  for (var index = 0; index < size; index++) {
    if (diff.has(target - nums[index])) {
      return [diff.get(target - nums[index]), index]
    }
    diff.set(nums[index], index)
  }
  return null
}

console.log(fn([2,4,5,6,7,11,34,61], 9))