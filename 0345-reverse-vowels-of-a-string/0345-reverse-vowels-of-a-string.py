class Solution:
    def reverseVowels(self, s: str) -> str:
        vowels = 'aeiouAEIOU'

        slist = list(s)

        i, j = 0, len(s) - 1

        while i < j:
            while i < j and slist[i] not in vowels:
                i += 1
            while j > i and slist[j] not in vowels:
                j -= 1
            
            slist[i], slist[j] = slist[j], slist[i]

            i += 1
            j -= 1
        
        return ''.join(slist)