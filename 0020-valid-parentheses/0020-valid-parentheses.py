class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        obj = {')': '(', '}': '{', ']': '['}

        for c in list(s):
            if c in '({[':
                stack.append(c)
            else:
                if not len(stack) or stack.pop() != obj[c]:
                    return False
        
        return len(stack) == 0