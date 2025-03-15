/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let i = 0;

    while (i < flowerbed.length) {
        if (!n) return true;
        if (flowerbed[i] === 0) {
            if ((i == 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0) ) {
                i++;
                n--;
                }
        } 
        i++;
        
    }

    console.log(n)

    return n === 0;
};