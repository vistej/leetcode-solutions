class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        res = 0
        vc = 0
        vowels = set('aeiou')

        for i in range(len(s)):
            if s[i] in vowels:
                vc += 1
            if i >= k:
                if s[i - k] in vowels:
                    vc -= 1
            
            res = max(res, vc)
        
        return res



