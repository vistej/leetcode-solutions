class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []

        for key in tokens:
            if key in '+-*/':
                v2, v1 = stack.pop(), stack.pop()
                if key == '+':
                    stack.append(v1 + v2)
                elif key == '-':
                    stack.append(v1 - v2)
                elif key == '*':
                    stack.append(v1 * v2)
                else:
                    val = v1 / v2
                    if val > 0:
                        val = floor(val)
                    else:
                        val = ceil(val)
                    stack.append(val)
            else:
                stack.append(int(key))
        return stack[0]
        