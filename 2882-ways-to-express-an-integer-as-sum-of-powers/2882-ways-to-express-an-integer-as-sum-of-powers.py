class Solution:
    def numberOfWays(self, n: int, x: int) -> int:
        powers = []
        i = 1
        while True:
            pow = i ** x
            if pow > n:
                break
            powers.append(pow)
            i += 1
        dp = [0] * (n + 1)
        dp[0] = 1
        for p in powers:
            for s in range(n, p - 1, -1):
                dp[s] = (dp[s] + dp[s - p]) % (10**9 + 7)
        return dp[n]