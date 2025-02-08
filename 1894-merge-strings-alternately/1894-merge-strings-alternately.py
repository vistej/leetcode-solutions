class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        max_len = max(len(word1), len(word2))
        # strings are immutable in python. 
        # so it is faster to use a list and join it to make a string
        res = []

        for i in range(max_len):
            if i < len(word1):
                res.append(word1[i])
            if i < len(word2):
                res.append(word2[i])
        
        return ''.join(res)
