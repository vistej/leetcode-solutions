class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        obj = {}

        for i, n in enumerate(numbers):
            rem = target - n
            if rem in obj:
                return [obj[rem] + 1, i + 1]
            obj[n] = i
        
        