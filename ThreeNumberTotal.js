/**
 * 真题描述：给你一个包含 n 个整数的数组 nums，
 * 判断 nums 中是否存在三个元素 a，b，c ，
 * 使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 */

function fn (nums) {
  let size = nums.length
  if (size < 3) {
    return []
  }
  let res = []
  nums = nums.sort((a, b) => (a - b))

  for (let index = 0; index < size - 2; index++) {
    let i = index + 1
    let j = size - 1

    while(i < j) {
      const total = nums[index] + nums[i] + nums[j]
      if (total < 0) {
        i++
      } else if (total > 0){
        j--
      } else {
        res.push([nums[index], nums[i], nums[j]])
        i++
        j--
      }
    }
  }
  return res
}

console.log(fn([-1, 0, 1, 2, -1, -4]))