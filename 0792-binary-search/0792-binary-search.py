class Solution:
    def search(self, nums: List[int], target: int) -> int:
        if nums[0] > target or nums[-1] < target:
            return -1
        
        def bin(i, j):
            m = (i + j) // 2

            if nums[m] == target:
                return m
            if i == j:
                return -1
            if nums[m] > target:
                return bin(i, m - 1)
            else:
                return bin(m + 1, j)

        
        return bin(0, len(nums) - 1)