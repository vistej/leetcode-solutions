class Solution:
    def minWindow(self, s: str, t: str) -> str:
        oa = defaultdict(int)
        ob = defaultdict(int)
        st = set()
        res = {}
        for i in range(len(t)):
            oa[t[i]] = oa.get(t[i], 0) + 1

        i = 0
        for j in range(len(s)):
            ob[s[j]] = ob.get(s[j], 0) + 1

            while i < len(s) and s[i] in oa and s[i] in st and ob[s[i]] < oa[s[i]]:
                    st.remove(s[i])
            while i < len(s) and s[i] not in oa:
                ob[s[i]] -= 1
                i += 1

            if s[j] in oa and ob[s[j]] == oa[s[j]]:
                st.add(s[j])
            if len(st) == len(oa):
                while s[i] not in oa or ob[s[i]] > oa[s[i]]:
                    ob[s[i]] -= 1
                    i += 1
                res[j - i] = (i, j)
        print(res)
        if len(res):
            i, j = res[min(res.keys())]
            return s[i: j + 1]
        return ''

