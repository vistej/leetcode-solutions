class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        max_cans = max(candies)
        return [c + extraCandies >= max_cans for c in candies]