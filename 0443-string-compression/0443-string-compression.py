class Solution:
    def compress(self, chars: List[str]) -> int:
        n = len(chars)
        index = 0
        current_index = 0

        for i in range(1, n):
            if chars[i] != chars[i - 1]:
                if i - current_index > 1:
                    val = str(i - current_index)
                    for c in val:
                        index += 1
                        chars[index] = c
                index += 1

                chars[index] = chars[i]
                current_index = i
        
        if n - current_index > 1:
            val = str(n - current_index)
            for c in val:
                index += 1
                chars[index] = c

        
        return index + 1

