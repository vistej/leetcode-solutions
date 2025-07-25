class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        chset = set()
        res = 0
        i = 0
        for j in range(len(s)):
            while s[j] in chset:
                chset.remove(s[i])
                i += 1
            chset.add(s[j])
            res = max(res, j - i + 1)
        return res