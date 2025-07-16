class Solution:
    def search(self, nums: List[int], target: int) -> int:
        n = len(nums)
        def bin(i, j):
            mid = (i + j) // 2
            if nums[mid] == target:
                return mid
            if i > j:
                return -1
            if nums[mid] >= nums[i]:
                if nums[i] <= target <= nums[mid]:
                    return bin(i, mid - 1)
                else:
                    return bin(mid + 1, j)
            else:
                if nums[mid] <= target <= nums[j]:
                    return bin(mid + 1, j)
                else:
                    return bin(i, mid - 1)
        return bin(0, n - 1)