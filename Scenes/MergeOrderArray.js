/**
 * 真题描述：给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 */

//  nums1 = [1,2,3]
//  nums2 = [2,5,6]
//  输出: [1,2,2,3,5,6]


function fn (nums1, nums2) {
  let i = nums1.length - 1
  let j = nums2.length - 1
  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[i + j + 1] = nums1[i]
      i--
    } else {
      nums1[i + j + 1] = nums2[j]
      j--
    }
  }
  // nums2 留下的情况，特殊处理一下 
  while(j >= 0) {
    nums1[i + j + 1] = nums2[j]  
    j--
  }
  return nums1
}

console.log(fn([1,2,3], [4,5,6]))