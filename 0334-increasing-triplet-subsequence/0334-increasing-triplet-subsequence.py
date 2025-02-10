class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        check = [nums[0], float('inf')]

        for i in range(1, len(nums)):
            if nums[i] > check[1]:
                return True
            if nums[i] <= check[0]:
                check[0] = nums[i]
                # don't need to change the check[1]
            elif (nums[i] <= check[1]):
                check[1] = nums[i]
            
        return False

