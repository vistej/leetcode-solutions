class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        res = []

        def gen(i, j, st):
            if i < n:
                gen(i + 1, j, st + '(')
            if j < i:
                gen(i, j + 1, st + ')')
            if j == n:
                res.append(st)
        
        gen(0, 0, '')
        return res