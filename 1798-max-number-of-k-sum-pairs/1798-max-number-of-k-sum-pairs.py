class Solution:
    def maxOperations(self, nums: List[int], k: int) -> int:
        count = 0
        keep = defaultdict(int)

        for n in nums:
            other = k - n
            if keep[other] > 0:
                keep[other] -= 1
                count += 1
            else:
                keep[n] += 1
        
        return count


        # count = 0
        # nums.sort()
        # i, j = 0, len(nums) - 1

        # while i < j:
        #     s = nums[i] + nums[j]
        #     if s > k:
        #         j -= 1
        #     elif s < k:
        #         i += 1
        #     else:
        #         i += 1
        #         j -= 1
        #         count += 1

        # return count 