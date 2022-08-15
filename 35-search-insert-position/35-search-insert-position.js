var searchInsert = function (nums, target) {
  const indexOfTarget = nums.indexOf(target);
  if (indexOfTarget !== -1) return indexOfTarget;
  if (nums[nums.length - 1] < target) return nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) return i;
  }
};