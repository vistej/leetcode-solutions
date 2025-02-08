class Solution:
    def reverseWords(self, s: str) -> str:
        slist = s.split(' ')
        slist.reverse()
        filtered_list = list(filter(lambda x: len(x), slist))

        return ' '.join(filtered_list)