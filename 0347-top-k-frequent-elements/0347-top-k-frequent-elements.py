class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        obj = {}
        for n in nums:
            obj[n] = obj.get(n, 0) + 1
        
        lst = sorted(list(map(lambda x: [obj[x], x], obj.keys())), reverse=True)

        res = []
        
        for i in range(k):
            res.append(lst[i][1])
        
        return res