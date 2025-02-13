class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        dmap = defaultdict(int)

        for n in arr:
            dmap[n] += 1
        
        return len(set(arr)) == len(set(dmap.values()))