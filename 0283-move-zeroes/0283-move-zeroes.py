class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        zi, i = 0, 0

        while zi <= i and i < len(nums):
            if nums[zi] != 0:
                while zi < len(nums) and nums[zi] != 0:
                    zi += 1
                    i = zi + 1
            if i < len(nums) and nums[i] != 0:
                nums[zi] = nums[i]
                nums[i] = 0
                zi += 1            
            i += 1
        