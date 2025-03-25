class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        obj = {}

        for i in range(len(s)):
            obj[s[i]] = obj.get(s[i], 0) + 1
        
        for i in range(len(s)):
            if t[i] not in obj:
                return False
            obj[t[i]] -= 1
            if not obj[t[i]]:
                del obj[t[i]]
        
        return len(obj) == 0
