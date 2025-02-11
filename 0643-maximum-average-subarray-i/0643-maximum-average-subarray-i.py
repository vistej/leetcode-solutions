class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        i = 0
        csum = sum(nums[:k])
        avg = csum / k

        for i in range(k, len(nums)):
            csum -= nums[i - k]
            csum += nums[i]
            avg = max(avg, csum / k)
        
        return avg
        