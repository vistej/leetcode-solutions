class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        res = [0 for _ in range(len(temperatures))]
        i = len(temperatures) - 2
        stack = [len(temperatures) - 1]

        while i >= 0:
            while stack:
                last = stack.pop()
                if temperatures[i] < temperatures[last]:
                    stack.append(last)
                    res[i] = last - i
                    break
            stack.append(i)
            i -= 1
        
        return res
                    