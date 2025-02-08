class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        for i in range(len(flowerbed)):
            if n == 0:
                return True
            # use variables to make it readable
            is_empty = (flowerbed[i] == 0)
            left_empty = (i == 0 or flowerbed[i - 1] != 1)
            right_empty = (i == len(flowerbed) - 1 or flowerbed[i + 1] != 1)
            if is_empty and left_empty and right_empty:
                n -= 1
                flowerbed[i] = 1
        
        return n == 0
        
