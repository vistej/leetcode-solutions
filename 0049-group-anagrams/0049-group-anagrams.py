class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        obj = {}

        for i in range(len(strs)):
            st = ''.join(sorted(list(strs[i])))
            if st not in obj:
                obj[st] = []
            obj[st].append(strs[i])
        
        return list(obj.values())