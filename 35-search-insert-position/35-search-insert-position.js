var searchInsert = function (nums, target) {
  if (nums.indexOf(target) !== -1) return nums.indexOf(target);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) return i;
  }
  return nums.length;
};

var searchInsert = function (nums, target) {
  const indexOfTarget = nums.indexOf(target);
  if (indexOfTarget !== -1) return indexOfTarget;
  if (nums[nums.length - 1] < target) return nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) return i;
  }
};

var searchInsert = function (nums, target) {
  const indexOfTarget = nums.indexOf(target);

  // 배열에 target이 존재하는 경우
  if (indexOfTarget !== -1) return indexOfTarget;

  // 배열의 마지막 요소보다 target이 큰 경우
  if (nums[nums.length - 1] < target) return nums.length;

  // 배열을 반으로 나눔
  const [frontArray, backArray] = [nums.slice(0, Math.floor(nums.length / 2)), nums.slice(Math.floor(nums.length / 2))];

  // 앞 배열의 마지막 요소보다 target이 작은 경우
  if (frontArray[frontArray.length - 1] > target) {
    for (let i = 0; i < frontArray.length; i++) {
      if (frontArray[i] > target) return i;
    }
  }

  // 앞 배열의 마지막 요소보다 target이 큰 경우
  for (let i = 0; i < backArray.length; i++) {
    if (backArray[i] > target) return frontArray.length + i;
  }
};
