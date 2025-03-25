class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        obj = {}
        for i, n in enumerate(nums):
            left = target - n
            if left in obj:
                return [obj[left], i]
            obj[n] = i
        